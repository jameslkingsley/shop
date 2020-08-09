<?php

namespace App\States;

class Picking extends OrderState
{
    public static $name = 'picking';

    public static function adminLabel(): string
    {
        return 'Being Picked';
    }

    public static function customerLabel(): string
    {
        return 'Being Picked';
    }

    public static function color(): string
    {
        return 'blue';
    }

    public static function sortOrder(): int
    {
        return 2;
    }
}
