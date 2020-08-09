<?php

namespace App\States;

class Completed extends OrderState
{
    public static $name = 'completed';

    public static function adminLabel(): string
    {
        return 'Fulfilled';
    }

    public static function customerLabel(): string
    {
        return 'Fulfilled';
    }

    public static function color(): string
    {
        return 'green';
    }

    public static function sortOrder(): int
    {
        return 4;
    }
}
