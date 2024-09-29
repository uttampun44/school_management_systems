<?php

namespace App\Http\Controllers;

use App\Models\Section;
use Illuminate\Http\Request;
use Inertia\Inertia;

class SectionConrtoller extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('Section/Index')->with('sections', Section::select('id', 'sections')->get());
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'section' => 'required|string|max:50'
        ]);

        Section::create([
          'sections' => $request->input('section')
        ]);

        return redirect()->back();
    }

    /**
     * Display the specified resource.
     */
    public function show(Section $section)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Section $section)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Section $section)
    {
       
        $request->validate([
           'updateSection' => 'required|string|max:50'
        ]);

        $section->update([
           'sections' => $request->input('updateSection')  
        ]);

        return redirect()->back();
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Section $section)
    {
        if(!$section){
            return;
        }

        $section->delete();

        return redirect()->back();
    }
}
