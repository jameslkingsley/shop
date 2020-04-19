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
            FROM tblproducts
            INNER JOIN tblProductCats ON prodCatID = pcatID
            INNER JOIN tblProductGroups ON pcatGroup = pgID
            WHERE prodStatus = "active"
            AND prodOurPrice != 0
            AND (
                prodTitle LIKE "%' . $request->keyword . '%"
                OR pcatTitle LIKE "%' . $request->keyword . '%"
                OR prodID = CONVERT("' . $request->keyword . '", SIGNED INTEGER)
            )
            AND pcatShow = 1
            AND pgShow = 1
            ORDER BY prodTitle, prodUnitSize, prodID
            LIMIT ' . $request->query('limit', 50) . '
        ');
    }
}
