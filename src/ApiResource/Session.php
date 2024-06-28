<?php

namespace App\ApiResource;

use ApiPlatform\Core\Annotation\ApiResource;
use App\DataPersister\SessionDataPersister;

/**
 * @ApiResource(
 *              collectionOperations={"post": {"path": "/session"},
 *                                    "deleteSession": {"path": "/session", "method": "DELETE", "controller": SessionDataPersister::class}},
 *              itemOperations={})
 */
class Session
{
    /**
     * @var string User's email
     */
    public $email;

    /** @var string User's password */
    public $password;

    /** @var string For CSRF protection */
    public $csrf_token;
}
