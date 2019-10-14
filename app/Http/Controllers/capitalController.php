<?php

namespace App\Http\Controllers;

use GuzzleHttp\Client;
use GuzzleHttp\Exception\RequestException;
use GuzzleHttp\Psr7\Response;
use Illuminate\Http\Request;

class capitalController extends Controller
{
    public function index() {
        $_SESSION['banner_columns'] = [];
        $_SESSION['capital'] = [];

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
                        if ($category === 33 && $post->author === 4):
                            $postcapital= (array)$post;
                            $media = "wp:featuredmedia";
                            if ( isset($post->_embedded->$media[0]) ):
                                if ( isset($post->_embedded->$media[0]->media_details->sizes) ):
                                    $postcapital['images'] = $post->_embedded->$media[0]->media_details->sizes;
                                endif;

                                if ( isset($post->_embedded->$media[0]->source_url) ):
                                    $postcapital['image'] = $post->_embedded->$media[0]->source_url;
                                endif;

                                if ( isset($post->metadata->capitalOptions[0]) ):
                                    $postcapital['capitalOptions'] = $post->metadata->capitalOptions;
                                endif;
                            endif;
                            $postcapital = (object)$postcapital;
                            $_SESSION['capital'][] = $postcapital;
                        endif;
                    endforeach;
                });
            },
            function (RequestException $error) {
                print_r('Error in promise! ' . $error->getMessage() . "\n");
            }
        );

        $promise1->wait();

        array_filter($_SESSION['capital'], function ($post) {
            $term = "wp:term";
            foreach($post->_embedded->$term as $terms):
                foreach ($terms as $term):
                    if (strtolower($term->name) === 'banner_column'):
                        $_SESSION['banner_columns'][] = $post;
                    endif;
                endforeach;
            endforeach;
        });

        $_SESSION['articles'] = [];

        array_filter($_SESSION['capital'], function ($post) {
            $term = "wp:term";
            foreach($post->_embedded->$term as $terms):
                foreach ($terms as $term):
                    if (strtolower($term->name) === 'article'):
                        $_SESSION['articles'][] = $post;
                    endif;
                endforeach;
            endforeach;
        });

        $banner_column = $_SESSION['banner_columns'];

        $articles = array_slice($_SESSION['articles'], 0, 2);

        // dd($banner_column);

        return view('capital', compact('banner_column', 'articles'));
    }
}
