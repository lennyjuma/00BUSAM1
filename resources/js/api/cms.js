import http_client from 'axios'
import WPAPI from 'wpapi'
const instance = http_client.create({

});
const endPoint = 'https://kijanii.studio/wp-json/';
let apiRootJSON = require( '../default-routes' );

const cms = new WPAPI({
    endpoint: `${endPoint}`,
    routes: apiRootJSON
});

function doSec() {
    // generate tkn
    return new Promise((resolve, reject) => {
        cms.namespace( 'jwt-auth/v1' ).token().create({
            username: 'BusamHoldings',
            password: '@busamholdingscms2019'
        }).then( ( response ) => {
            resolve(response);
        }).catch(error => {
            console.log(error);
            reject(error);
        })
    })
}

function metaPoster(metaPayload) {
    let token = metaPayload.token;
    console.log('posting meta', metaPayload);

    cms.metaposter = cms.registerRoute( `custom/v1`, `meta`);
    return new Promise((resolve, reject) => {
        cms.metaposter().setHeaders({
            Authorization: `Bearer ${token}`
        })
            .create({
                ...metaPayload.metaObj
            })
            .then( response => {
                console.log('meta poster res', response);
                resolve(response)
            })
            .catch(error => { console.log('meta upload error'); reject(error)})
    })
}

function mediaUploader(mediaPayload) {
    let token = mediaPayload.token;
    // upload media
    console.log('posting media', mediaPayload);
    if (mediaPayload.state === 0) {
        return new Promise((resolve, reject) => {
            cms.namespace('wp/v2').media()
                .file(mediaPayload.mediaObj.featuredImage)
                .setHeaders({
                    Authorization: `Bearer ${token}`
                })
                .create({
                    ...mediaPayload.mediaObj.details
                })
                .then(response => {
                    console.log(response);
                    let newImageId = response.id;
                    return cms.namespace('wp/v2').media().id( newImageId )
                        .setHeaders({
                            Authorization: `Bearer ${token}`
                        }).update({
                            post: mediaPayload.id
                        })
                })
                .then(response => {
                    console.log(response);
                    console.log( 'Media ID #' + response.id );
                    console.log( 'is now associated with Post ID #' + response.post );
                    let results = cms.namespace('wp/v2').posts().id( mediaPayload.id )
                        .setHeaders({
                            Authorization: `Bearer ${token}`
                        }).update({
                            featured_media: response.id
                        });

                    resolve(results)
                })
                .catch(error => {
                    console.log(error);
                    reject(error)
                })
        })
    } else {
        return new Promise((resolve, reject) => {
            cms.namespace('wp/v2').media()
                .file(mediaPayload.mediaObj.featuredImage)
                .setHeaders({
                    Authorization: `Bearer ${token}`
                })
                .create({
                    ...mediaPayload.mediaObj.details
                })
                .then(response => {
                    console.log(response);
                    let newImageId = response.id;
                    return cms.namespace('wp/v2').media().id( newImageId )
                        .setHeaders({
                            Authorization: `Bearer ${token}`
                        }).update({
                            post: mediaPayload.id
                        })
                })
                .then(response => {
                    console.log(response);
                    console.log( 'Media ID #' + response.id );
                    console.log( 'is now associated with Post ID #' + response.post );
                    resolve(response)
                })
                .catch(error => {
                    console.log(error);
                    reject(error)
                })
        })
    }

}

function createAgent(payload) {
    let token = payload.token;
    // create post
    return new Promise((resolve, reject) => {
        cms.namespace( 'wp/v2' ).posts().setHeaders({
            Authorization: `Bearer ${token}`
        }).create({
            ...payload.postContent,
            status: 'publish'
        }).then((result) => {
            let dataBack = {
                ...result
            };
            if (payload.hasMedia) {
                let mediaPayload = {
                    id: result.id,
                    token: token,
                    mediaObj: payload.mediaObj
                };
                console.log('media upload data', mediaPayload);
                mediaUploader(mediaPayload)
                    .then( results => {
                        dataBack = {
                            ...results
                        }
                    }).catch(e => console.log('error create media', e))
            }
            if (payload.hasMeta) {
                let metaPayload = {
                    token: token,
                    metaObj: payload.metaObj
                };

                payload.metaObj.forEach(meta => {
                   meta.id = result.id
                });

                console.log('meta upload data', metaPayload);
                metaPoster(metaPayload)
                    .then(results => {
                        dataBack = {
                            ...results
                        }
                    }).catch(e => console.log('error create meta', e));
            }
            resolve(dataBack)
        }).catch((error) => {
            reject(error)
        })
    })
}


function reader(payload) {
    let token = payload.token;
    // read posts

    function fetcher() {
        return new Promise((resolve, reject) => {
            cms.namespace( 'wp/v2' ).posts().author(3).embed().perPage(100).setHeaders({
                Authorization: `Bearer ${token}`
            }).get().then( ( response ) => {
                resolve(response);
            }).catch(error => {
                console.log(error);
                reject(error);
            })
        })
    }
    return fetcher()
}

function updater(payload) {
    let token = payload.token;
    // update posts
    //
    console.log('updating payload', payload);
    function updateAgent() {
        return new Promise((resolve, reject) => {
            cms.namespace( 'wp/v2' ).posts().id( payload.id ).setHeaders({
                Authorization: `Bearer ${token}`
            }).update({
                ...payload.postContent,
                status: 'publish'
            }).then((result) => {
                let dataBack = {
                    ...result
                };
                if (payload.hasMedia) {
                    let mediaPayload = {
                        id: result.id,
                        token: token,
                        state: 0,
                        mediaObj: payload.mediaObj
                    };
                    console.log('media upload data', mediaPayload);
                    mediaUploader(mediaPayload)
                        .then( results => {
                            dataBack = {
                                ...results
                            }
                        }).catch(e => console.log('error updating media', e))
                }
                if (payload.hasMeta) {
                    let metaPayload = {
                        token: token,
                        metaObj: payload.metaObj
                    };

                    payload.metaObj.forEach(meta => {
                        meta.id = result.id
                    });

                    console.log('meta upload data', metaPayload);
                    metaPoster(metaPayload)
                        .then(results => {
                            dataBack = {
                                ...results
                            }
                        }).catch(e => console.log('error updating meta', e));
                }
                resolve(dataBack)
            }).catch((error) => {
                reject(error)
            })
        })
    }
    return updateAgent()
}

function deleter(payload) {
    let token = payload.token;
    return new Promise((resolve, reject) => {
        cms.namespace('wp/v2').posts().id( payload.id ).setHeaders({
            Authorization: `Bearer ${token}`
        }).delete().then((results) => {
            console.log(results);
            resolve(results)
        }).catch(err => {
            console.log(err);
            reject(err)
        })
    })
}

function getTaxonomyPostTag(payload) {
    return new Promise((resolve,reject) => {
        cms.namespace( 'wp/v2' ).tags().perPage(100).setHeaders({
            Authorization: `Bearer ${payload.token}`
        }).get().then((response) => {
            console.log(response);
            resolve(response)
        }).catch(err => {
            console.log(err);
            reject(err)
        })
    })
}

function getTaxonomyCategory(payload) {
    return new Promise((resolve,reject) => {
        cms.namespace( 'wp/v2' ).categories().perPage(100).setHeaders({
            Authorization: `Bearer ${payload.token}`
        }).get().then((response) => {
            console.log(response);
            resolve(response)
        }).catch(err => {
            console.log(err);
            reject(err)
        })
    })
}

function axiosGetter(payload) {
    return new Promise( (resolve,reject) => {
        instance({
            method: 'get',
            url: payload.url,
            params: {
                key: 723810706
            }
        })
        .then(results => {
            if(results.status === 200) {
                resolve(results.data)
            } else{
                reject("API error: " + results);
            }
        })
        .catch(err => {
            console.log(err);
            reject(err)
        })
    })

}

function axiosPoster(payload) {
    return new Promise((resolve, reject) => {
        instance({
            method: 'POST',
            url: payload.url,
            data: payload.data
        })
        .then( results => {
                resolve(results.data);
        })
        .catch( err => {
            if (!err.response) {
                // network error
                console.log('Error: Network Error');
            }
            reject("Axios POST issue: " + err)
        })
    });
}

function axiosDeleter(payload) {
    return new Promise((resolve, reject) => {
        instance({
            method: 'DELETE',
            url: payload.url
        })
            .then( results => {
                resolve(results.data);
            })
            .catch( err => {
                if (!err.response) {
                    // network error
                    console.log('Error: Network Error');
                }
                reject("Axios POST issue: " + err)
            })
    });
}

export function getPostTags(payload) {
    return getTaxonomyPostTag(payload)
}

export function getPostCategories(payload) {
    return getTaxonomyCategory(payload)
}

export function getPosts(payload) {
    return reader(payload)
}

export function updatePosts(payload) {
    return updater(payload)
}

export function createPosts(payload) {
    return createAgent(payload)
}

export function deletePosts(payload) {
    return deleter(payload)
}

export function getToken() {
    return doSec()
}

export function getBooking(payload) {
    return axiosGetter(payload)
}

export function postData(payload) {
    return axiosPoster(payload)
}

export function deleteData(payload) {
    return axiosDeleter(payload)
}
