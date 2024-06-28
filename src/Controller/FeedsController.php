<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Security\Http\Authentication\AuthenticationUtils;
use Symfony\Component\Routing\Attribute\Route;

class FeedsController extends AbstractController
{
    /**
     * @Route("/", name="main")
     */
    #[Route('/')]
    public function index(AuthenticationUtils $authenticationUtils): Response
    {
        if (!$this->getUser()) {
            return $this->login($authenticationUtils);
        }

        return $this->feeds();
    }

    private function feeds()
    {
        $appState = ["authentication" => [
            "isAuthenticated" => true,
            "user" => ["email" => $this->getUser()->getUsername()]
        ]];
        return $this->render('feeds.html.twig', ['appState' => $appState]);
    }

    private function login(AuthenticationUtils $authenticationUtils)
    {
        // get the login error if there is one
        $error = $authenticationUtils->getLastAuthenticationError();
        // last username entered by the user
        $lastUsername = $authenticationUtils->getLastUsername();

        $errorMessage = "";
        if ($error) {
            $errorMessage = $error->getMessageKey();
        }
        $appState = ["authentication" => ["isAuthenticated" => false, "error" => $errorMessage]];
        $data = ["login" => ["email" => $lastUsername]];

        return $this->render('unauthenticated.html.twig', ['appState' => $appState, 'data' => $data]);
    }

    /**
     * @Route("/logout", name="logout")
     */
    public function logout()
    {
        throw new \Exception('This method can be blank - it will be intercepted by the logout key on your firewall');
    }
}
