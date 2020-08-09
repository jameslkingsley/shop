<?php

namespace App\States;

class Cancelled extends OrderState
{
    public static $name = 'cancelled';

    public static function adminLabel(): string
    {
        return 'Cancelled';
    }

    public static function customerLabel(): string
    {
        return 'Cancelled';
    }

    public static function color(): string
    {
        return 'gray';
    }

    public static function sortOrder(): int
    {
        return 5;
    }
}
