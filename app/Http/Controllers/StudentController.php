<?php

namespace App\Http\Controllers;

use App\Models\ClassRoom;
use App\Models\Section;
use App\Models\Student;
use Illuminate\Http\Request;
use Inertia\Inertia;

class StudentController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('Student/Index');
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
       $class = ClassRoom::select('id','grade')->get();
       $section = Section::select('id', 'sections')->get();

        return Inertia::render('Student/Create')->with([
            'classes' => $class,
            'section' => $section
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Student $student)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Student $student)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Student $student)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Student $student)
    {
        //
    }
}
