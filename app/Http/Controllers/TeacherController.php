<?php

namespace App\Http\Controllers;

use App\Models\ClassRoom;
use App\Models\Role;
use App\Models\Section;
use App\Models\Subject;
use App\Models\Teacher;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Log;
use Inertia\Inertia;

class TeacherController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('Teacher/Index');
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $role = Role::where('role_name','teacher')->select('id', 'role_name')->get();
        $classes = ClassRoom::select('id', 'grade')->get();
        $subject = Subject::select('id', 'subject')->get();
        $section = Section::select('id', 'sections')->get();

        return Inertia::render('Teacher/Create')->with([
            'role' => $role,
            'classes' => $classes,
            'subject' => $subject,
            'section' => $section
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        DB::beginTransaction();

        try {
            $request->validate([
                'fullname' => 'required|string|max:50',
                'email' => 'required|string|email',
                'password' => 'required|string|password',
                'phone' => 'required|string|max:20',
                'gender' => 'required',
                'photo' => 'required|image|mimes:jpeg,png,jpg,gif|max:2048',
                'qualification' => 'required',
                 'class' => 'required',
                 'section' => 'required',
                 'subject' => 'required',
              ]);
      
              $user = User::create([
                  'name' => $request->input('name'),
                  'email' => $request->input('email'),
                  'password' => Hash::make($request->input('password'))
              ]);
      
              Role::create([
                'role_id' => $request->input('role'),
                'user_id' => $user->id
              ]);
      
              User::create([
                  'full_name' => $request->input('full_name'),
                  'phone_number' => $request->input('phone_number'),
                  'gender' => $request->input('date_of_birth'),
                   'date_of_birth' => $request->input('date_of_birth'),
                   'address' => $request->input('address'),
                   'photo' => $request->input('photo'),
                   'qualification' => $request->input('qualification'),
                   'class_id' => $request->input('class'),
                   'section_id' => $request->input('section'),
                   'subject_id' => $request->input('subject') 
              ]);
      
              return redirect()->back();

           DB::rollBack();
        } catch (\Throwable $th) {
            Log::error($th->getMessage());
            DB::rollBack();
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(Teacher $teacher)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Teacher $teacher)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Teacher $teacher)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Teacher $teacher)
    {
        if($teacher)
        {
           $teacher->delete();

           return redirect()->back();
        }
    }
}
