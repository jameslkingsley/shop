<?php

namespace App\States;

class Pending extends OrderState
{
    public static $name = 'pending';

    public static function adminLabel(): string
    {
        return 'Pending';
    }

    public static function customerLabel(): string
    {
        return 'Order Placed';
    }

    public static function color(): string
    {
        return 'blue';
    }

    public static function sortOrder(): int
    {
        return 1;
    }
}
