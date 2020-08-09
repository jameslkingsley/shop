<?php

namespace App\Http\Livewire\Admin;

use App;
use Livewire\Component;
use Spatie\ModelStates\Exceptions\TransitionNotFound;
use Spatie\ModelStates\Exceptions\TransitionNotAllowed;

class Order extends Component
{
    /**
     * @var \App\Order
     */
    public $order;

    public $status;

    public function mount(?int $orderId)
    {
        $this->order = App\Order::find($orderId);
        $this->status = $this->order ? get_class($this->order->status) : null;
    }

    public function statuses()
    {
        return App\Order::getStatesFor('status')
            ->sortBy(fn ($state) => $state::sortOrder())
            ->mapWithKeys(fn ($state) => [$state => $state::adminLabel()]);
    }

    public function getTransitionableStatesProperty()
    {
        return collect($this->order->status->transitionableStates());
    }

    public function updatedStatus($status)
    {
        try {
            $this->order->status->transitionTo($status);
        } catch (TransitionNotFound|TransitionNotAllowed $exception) {
            $this->status = get_class($this->order->status);

            session()->flash('message', __('order.invalid_state'));
        }
    }

    public function startPicking()
    {
        $this->order->update([
            'picking_at' => now(),
        ]);
    }

    public function stopPicking()
    {
        $this->order->update([
            'picking_at' => null,
        ]);
    }

    public function render()
    {
        if ($this->order) {
            return view('livewire.admin.order');
        }

        return view('admin.empty', [
            'text' => 'Nothing to see here',
        ]);
    }
}
