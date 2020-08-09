<?php

namespace App\States;

class Paid extends OrderState
{
    public static $name = 'paid';

    public static function adminLabel(): string
    {
        return 'Paid';
    }

    public static function customerLabel(): string
    {
        return 'Out for Delivery';
    }

    public static function color(): string
    {
        return 'blue';
    }

    public static function sortOrder(): int
    {
        return 3;
    }
}
