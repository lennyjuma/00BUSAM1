<?php

namespace App\Http\Controllers;

use GuzzleHttp\Client;
use GuzzleHttp\Exception\RequestException;
use GuzzleHttp\Psr7\Response;
use Illuminate\Http\Request;

class propertiesController extends Controller
{
    public function index() {
        $_SESSION['banner_columns'] = [];
        $_SESSION['properties'] = [];

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
                        if ($category === 32 && $post->author === 4):
                            $postProperties= (array)$post;
                            $media = "wp:featuredmedia";
                            if ( isset($post->_embedded->$media[0]) ):
                                if ( isset($post->_embedded->$media[0]->media_details->sizes) ):
                                    $postProperties['images'] = $post->_embedded->$media[0]->media_details->sizes;
                                endif;

                                if ( isset($post->_embedded->$media[0]->source_url) ):
                                    $postProperties['image'] = $post->_embedded->$media[0]->source_url;
                                endif;
                            endif;
                            $postProperties = (object)$postProperties;
                            $_SESSION['properties'][] = $postProperties;
                        endif;
                    endforeach;
                });
            },
            function (RequestException $error) {
                print_r('Error in promise! ' . $error->getMessage() . "\n");
            }
        );

        $promise1->wait();

        array_filter($_SESSION['properties'], function ($post) {
            $term = "wp:term";
            foreach($post->_embedded->$term as $terms):
                foreach ($terms as $term):
                    if (strtolower($term->name) === 'banner_column'):
                        $_SESSION['banner_columns'][] = $post;
                    endif;
                endforeach;
            endforeach;
        });

        $_SESSION['plots'] = [];

        array_filter($_SESSION['properties'], function ($post) {
            $term = "wp:term";
            foreach($post->_embedded->$term as $terms):
                foreach ($terms as $term):
                    if (strtolower($term->name) === 'plots'):
                        $_SESSION['plots'][] = $post;
                    endif;
                endforeach;
            endforeach;
        });

        $_SESSION['sale'] = [];

        array_filter($_SESSION['properties'], function ($post) {
            $term = "wp:term";
            foreach($post->_embedded->$term as $terms):
                foreach ($terms as $term):
                    if (strtolower($term->name) === 'sale'):
                        $_SESSION['sale'][] = $post;
                    endif;
                endforeach;
            endforeach;
        });

        $_SESSION['articles'] = [];

        array_filter($_SESSION['properties'], function ($post) {
            $term = "wp:term";
            foreach($post->_embedded->$term as $terms):
                foreach ($terms as $term):
                    if (strtolower($term->name) === 'article'):
                        $_SESSION['articles'][] = $post;
                    endif;
                endforeach;
            endforeach;
        });

        $articles = array_slice($_SESSION['articles'], 0, 2);

        $banner_column = $_SESSION['banner_columns'];

        $plots = collect($_SESSION['plots']);

        $sale = collect($_SESSION['sale']);

        return view('properties', compact('banner_column', 'plots', 'sale', 'articles'));
    }
}
