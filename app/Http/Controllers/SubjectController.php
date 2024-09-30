<?php

namespace App\Http\Controllers;

use App\Models\Subject;
use Illuminate\Http\Request;
use Inertia\Inertia;

class SubjectController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('Subject/Index')->with('subjects', Subject::select('id', 'subject')->get());
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
        'subject' => 'required|string|max:50'
        ]);

        Subject::create([
           'subject' => $request->input('subject')
        ]);

        return redirect()->back();
    }

    /**
     * Display the specified resource.
     */
    public function show(Subject $subject)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Subject $subject)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Subject $subject)
    {
        // dd($request->all());

        $request->validate([
            'subjectUpdate' => 'required|string|max:50'
            ]);
    
            $subject->update([
               'subject' => $request->input('subjectUpdate')
            ]);
    
            return redirect()->back();
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Subject $subject)
    {
        if($subject)
        {
           
            $subject->delete();
            return redirect()->back();
        }

    }
}
