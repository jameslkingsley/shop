<?php

namespace App\States;

use Spatie\ModelStates\State;

abstract class OrderState extends State
{
    abstract public static function adminLabel(): string;

    abstract public static function customerLabel(): string;

    abstract public static function color(): string;

    abstract public static function sortOrder(): int;
}
