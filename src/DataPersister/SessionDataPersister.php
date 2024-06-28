<?php

namespace App\DataPersister;

use ApiPlatform\Core\DataPersister\DataPersisterInterface;
use App\ApiResource\Session;
use App\Security\PasswordAuthenticator;
use Symfony\Component\Security\Core\User\UserProviderInterface;

final class SessionDataPersister implements DataPersisterInterface
{
    /*
    public function __construct(PasswordAuthenticator $passwordAuthenticator, UserProviderInterface $userProvider)
    {
        $this->passwordAuthenticator = $passwordAuthenticator;
        $this->userProvider = $userProvider;
    }*/

    public function supports($data): bool
    {
        return $data instanceof Session;
    }

    public function persist($data)
    {
        // call your persistence layer to save $data
        return $data;
    }

    public function remove($data)
    {
        // call your persistence layer to delete $data
    }
}
