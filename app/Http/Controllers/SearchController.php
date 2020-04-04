<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class SearchController extends Controller
{
    public function store(Request $request)
    {
        $request->validate(['keyword' => 'required|string']);

        return DB::connection('sle')->select('
            SELECT prodID AS id, prodRef as ref, prodTitle AS title, prodUnitSize AS unit_size, CAST((prodOurPrice * 100) AS SIGNED) AS price
            FROM tblProducts
            WHERE prodStatus = "active"
            AND prodLastBought > DATE_ADD(NOW(), INTERVAL -180 DAY)
            AND prodOurPrice != 0
            AND prodTitle LIKE "%' . $request->keyword . '%"
            ORDER BY prodTitle, prodUnitSize, prodID
        ');
    }
}
