<?php

namespace App\Http\Controllers;

use GuzzleHttp\Client;
use GuzzleHttp\Exception\RequestException;
use GuzzleHttp\Psr7\Response;
use Illuminate\Http\Request;

class learningController extends Controller
{
    public function index()
    {
        $_SESSION['learning'] = [];

        $_SESSION['popular'] = [];
        $_SESSION['latest'] = [];
        $_SESSION['trending'] = [];

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
                        if ($category === 37 && $post->author === 4):
                            $postlearning= (array)$post;
                            $media = "wp:featuredmedia";
                            if ( isset($post->_embedded->$media[0]) ):
                                if ( isset($post->_embedded->$media[0]->media_details->sizes) ):
                                    $postlearning['images'] = $post->_embedded->$media[0]->media_details->sizes;
                                endif;

                                if ( isset($post->_embedded->$media[0]->source_url) ):
                                    $postlearning['image'] = $post->_embedded->$media[0]->source_url;
                                endif;
                            endif;
                            $postlearning = (object)$postlearning;
                            $_SESSION['learning'][] = $postlearning;
                        endif;
                    endforeach;
                });
            },
            function (RequestException $error) {
                print_r('Error in promise! ' . $error->getMessage() . "\n");
            }
        );

        $promise1->wait();

        array_filter($_SESSION['learning'], function ($post) {
            $term = "wp:term";
            foreach($post->_embedded->$term as $terms):
                foreach ($terms as $term):
                    if (strtolower($term->name) === 'popular'):
                        $_SESSION['popular'][] = $post;
                    endif;
                endforeach;
            endforeach;
        });

        array_filter($_SESSION['learning'], function ($post) {
            $term = "wp:term";
            foreach($post->_embedded->$term as $terms):
                foreach ($terms as $term):
                    if (strtolower($term->name) === 'trending'):
                        $_SESSION['trending'][] = $post;
                    endif;
                endforeach;
            endforeach;
        });

        $popular = collect($_SESSION['popular']);

        $trending = collect($_SESSION['trending']);

        $latest = collect($_SESSION['learning']);

        $latestSide = array_slice($_SESSION['learning'], 0, 3);

        return view('learning', compact('popular', 'trending', 'latest', 'latestSide'));
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

                $postlearning= (array)$post;

                $media = "wp:featuredmedia";

                if ( isset($post->_embedded->$media[0]) ):
                    if ( isset($post->_embedded->$media[0]->media_details->sizes) ):
                        $postlearning['images'] = $post->_embedded->$media[0]->media_details->sizes;
                    endif;

                    if ( isset($post->_embedded->$media[0]->source_url) ):
                        $postlearning['image'] = $post->_embedded->$media[0]->source_url;
                    endif;
                endif;

                $postlearning = (object)$postlearning;

                $_SESSION['post'][] = $postlearning;
            },
            function (RequestException $error) {
                print_r('Error in promise! ' . $error->getMessage() . "\n");
            }
        );

        $promise1->wait();

        $dataObject = $_SESSION['post'];

        return view('single_post', compact('dataObject'));
    }
}
