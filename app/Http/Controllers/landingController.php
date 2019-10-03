<?php

namespace App\Http\Controllers;

use GuzzleHttp\Client;
use GuzzleHttp\Psr7\Response;
use GuzzleHttp\Promise;
use GuzzleHttp\Exception\RequestException;

use Illuminate\Http\Request;

class landingController extends Controller
{
    public function index() {
        $_SESSION['home'] = [];
        $_SESSION['banner'] = [];
        $_SESSION['banner_columns'] = [];
        $_SESSION['cash'] = [];
        $_SESSION['capital'] = [];
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
                        if ($category === 30):
                            $postHome= (array)$post;
                            $media = "wp:featuredmedia";
                            if ( isset($post->_embedded->$media[0]) ):
                                if ( isset($post->_embedded->$media[0]->media_details->sizes) ):
                                    $postHome['images'] = $post->_embedded->$media[0]->media_details->sizes;
                                endif;

                                if ( isset($post->_embedded->$media[0]->source_url) ):
                                    $postHome['image'] = $post->_embedded->$media[0]->source_url;
                                endif;
                            endif;
                            $postHome = (object)$postHome;
                            $_SESSION['home'][] = $postHome;
                        endif;
                    endforeach;
                });
            },
            function (RequestException $error) {
                print_r('Error in promise! ' . $error->getMessage() . "\n");
            }
        );

        $promise1->wait();

        array_filter($_SESSION['home'], function ($post) {
            $term = "wp:term";
            foreach($post->_embedded->$term as $terms):
                foreach ($terms as $term) :
                    if (strtolower($term->name) === 'banner'):
                        $_SESSION['banner'][] = $post;
                    endif;
                endforeach;
            endforeach;
        });

        array_filter($_SESSION['home'], function ($post) {
            $term = "wp:term";
            foreach($post->_embedded->$term as $terms):
                foreach ($terms as $term):
                    if (strtolower($term->name) === 'banner_column'):
                        $_SESSION['banner_columns'][] = $post;
                    endif;
                endforeach;
            endforeach;
        });

        $_SESSION['buy_section'] = [];
        array_filter($_SESSION['home'], function ($post) {
            $term = "wp:term";
            foreach($post->_embedded->$term as $terms):
                foreach ($terms as $term):
                    if (strtolower($term->name) === 'buy_section'):
                        $_SESSION['buy_section'][] = $post;
                    endif;
                endforeach;
            endforeach;
        });

        $_SESSION['earn_section'] = [];
        array_filter($_SESSION['home'], function ($post) {
            $term = "wp:term";
            foreach($post->_embedded->$term as $terms):
                foreach ($terms as $term):
                    if (strtolower($term->name) === 'earn_section'):
                        $_SESSION['earn_section'][] = $post;
                    endif;
                endforeach;
            endforeach;
        });

        array_filter($_SESSION['home'], function ($post) {
            $term = "wp:term";
            foreach($post->_embedded->$term as $terms):
                foreach ($terms as $term) :
                    if (strtolower($term->name) === 'properties') :
                        $_SESSION['properties'][] = $post;
                    endif;
                endforeach;
            endforeach;
        });

        array_filter($_SESSION['home'], function ($post) {
            $term = "wp:term";
            foreach($post->_embedded->$term as $terms):
                foreach ($terms as $term) {
                    if (strtolower($term->name) === 'capital') {
                        $_SESSION['capital'][] = $post;
                    }
                }
            endforeach;
        });

        array_filter($_SESSION['home'], function ($post) {
            $term = "wp:term";
            foreach($post->_embedded->$term as $terms):
                foreach ($terms as $term) :
                    if (strtolower($term->name) === 'cash') :
                        $_SESSION['cash'][] = $post;
                    endif;
                endforeach;
            endforeach;
        });

        $top_banners = $_SESSION['banner'];
        $banner_column = $_SESSION['banner_columns'];
        $earn_section = $_SESSION['earn_section'];
        $buy_section = $_SESSION['buy_section'];
        $property = $_SESSION['properties'];
        $cash = $_SESSION['cash'];
        $capital = $_SESSION['capital'];

        // dd($capital);

        return view('landing', compact('top_banners', 'banner_column', 'property', 'capital', 'cash', 'buy_section', 'earn_section'));
    }
}
