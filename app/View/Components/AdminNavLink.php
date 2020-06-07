<?php

namespace App\View\Components;

use Illuminate\View\Component;

class AdminNavLink extends Component
{
    public string $icon;
    public string $label;
    public string $route;

    /**
     * Create a new component instance.
     *
     * @return void
     */
    public function __construct(string $icon, string $label, string $route)
    {
        $this->icon = $icon;
        $this->label = $label;
        $this->route = $route;
    }

    public function isActive(): bool
    {
        return (bool) request()->route()->named($this->route);
    }

    /**
     * Get the view / contents that represent the component.
     *
     * @return \Illuminate\View\View|string
     */
    public function render()
    {
        return view('admin.components.nav-link');
    }
}
