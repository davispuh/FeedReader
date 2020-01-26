<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Response;


class FeedsController extends AbstractController
{
    /**
     * @Route("/", name="feeds")
     */
    public function index(): Response
    {
        if (/* todo */ true) {
            return $this->login();
        }

        return $this->feeds();
    }

    private function feeds()
    {
        return $this->render('feeds.html.twig');
    }

    private function login()
    {
        return $this->render('unauthenticated.html.twig');
    }
}
