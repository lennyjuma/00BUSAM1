<?php

namespace App\Http\Controllers;

use GuzzleHttp\Client;
use GuzzleHttp\Exception\RequestException;
use GuzzleHttp\Psr7\Response;
use Illuminate\Http\Request;

class mediaController extends Controller
{
    public function index()
    {
        $_SESSION['media'] = [];
        $_SESSION['banner_columns'] = [];

        $client = new Client();

        $tokenRequestBody = [
            "username" => "BusamHoldings",
            "password" => "@busamholdingscms2019"
        ];

        $tokenRequestBody = json_encode($tokenRequestBody);

        $headers = [
            'Content-Type' => 'application/json'
        ];

        $requestToken = new \GuzzleHttp\Psr7\Request('POST', 'https://kijanii.studio/wp-json/jwt-auth/v1/token', $headers, $tokenRequestBody);

        $promise0 = $client->sendAsync($requestToken);

        $promise0->then(
            function (Response $response) {
                $test = json_decode($response->getBody());
                $_SESSION['token'] = $test->token;
            },
            function (RequestException $error) {
                print_r('Error in promise! ' . $error->getMessage() . "\n");
            }
        );

        $promise0->wait();

        $apiURI = 'https://kijanii.studio/wp-json/wp/v2/';

        $headers[] = [
            'Authorization' => 'Bearer ' . $_SESSION['token']
        ];

        $requestPosts = new \GuzzleHttp\Psr7\Request('GET', $apiURI. 'posts?_embed&per_page=100', $headers);

        $promise1 = $client->sendAsync($requestPosts);

        $promise1->then(
            function (Response $response) {
                $posts = json_decode($response->getBody());
                array_filter($posts, function ($post) {
                    foreach ($post->categories as $category):
                        if ($category === 36 && $post->author === 4):
                            $postmedia= (array)$post;
                            $media = "wp:featuredmedia";
                            if ( isset($post->_embedded->$media[0]) ):
                                if ( isset($post->_embedded->$media[0]->media_details->sizes) ):
                                    $postmedia['images'] = $post->_embedded->$media[0]->media_details->sizes;
                                endif;

                                if ( isset($post->_embedded->$media[0]->source_url) ):
                                    $postmedia['image'] = $post->_embedded->$media[0]->source_url;
                                endif;
                            endif;
                            $postmedia = (object)$postmedia;
                            $_SESSION['media'][] = $postmedia;
                        endif;
                    endforeach;
                });
            },
            function (RequestException $error) {
                print_r('Error in promise! ' . $error->getMessage() . "\n");
            }
        );

        $promise1->wait();

        array_filter($_SESSION['media'], function ($post) {
            $term = "wp:term";
            foreach($post->_embedded->$term as $terms):
                foreach ($terms as $term):
                    if (strtolower($term->name) === 'banner_column'):
                        $_SESSION['banner_columns'][] = $post;
                    endif;
                endforeach;
            endforeach;
        });

        $medias = collect($_SESSION['media']);

        $banner_column = $_SESSION['banner_columns'];

        // dd($medias);

        return view('media', compact('medias', 'banner_column'));
    }

    public function show($article)
    {
        $_SESSION['post'] = [];

        $client = new Client();

        $tokenRequestBody = [
            "username" => "BusamHoldings",
            "password" => "@busamholdingscms2019"
        ];

        $tokenRequestBody = json_encode($tokenRequestBody);

        $headers = [
            'Content-Type' => 'application/json'
        ];

        $requestToken = new \GuzzleHttp\Psr7\Request('POST', 'https://kijanii.studio/wp-json/jwt-auth/v1/token', $headers, $tokenRequestBody);

        $promise0 = $client->sendAsync($requestToken);

        $promise0->then(
            function (Response $response) {
                $test = json_decode($response->getBody());
                $_SESSION['token'] = $test->token;
            },
            function (RequestException $error) {
                print_r('Error in promise! ' . $error->getMessage() . "\n");
            }
        );

        $promise0->wait();

        $apiURI = 'https://kijanii.studio/wp-json/wp/v2/';

        $headers[] = [
            'Authorization' => 'Bearer ' . $_SESSION['token']
        ];

        // $sampleArticle = '429';

        $requestPosts = new \GuzzleHttp\Psr7\Request('GET', $apiURI. 'posts/' . $article .'?_embed', $headers);

        $promise1 = $client->sendAsync($requestPosts);

        $promise1->then(
            function (Response $response) {
                $post = json_decode($response->getBody());

                $postmedia= (array)$post;

                $media = "wp:featuredmedia";

                if ( isset($post->_embedded->$media[0]) ):
                    if ( isset($post->_embedded->$media[0]->media_details->sizes) ):
                        $postmedia['images'] = $post->_embedded->$media[0]->media_details->sizes;
                    endif;

                    if ( isset($post->_embedded->$media[0]->source_url) ):
                        $postmedia['image'] = $post->_embedded->$media[0]->source_url;
                    endif;
                endif;

                $postmedia = (object)$postmedia;

                $_SESSION['post'][] = $postmedia;
            },
            function (RequestException $error) {
                print_r('Error in promise! ' . $error->getMessage() . "\n");
            }
        );

        $promise1->wait();

        $dataObject = $_SESSION['post'];

        return view('single_video', compact('dataObject'));
    }
}
