<?php

namespace App\Http\Controllers;

use App\Models\ClassRoom;
use App\Models\Role;
use App\Models\Section;
use App\Models\Subject;
use App\Models\Teacher;
use App\Models\User;
use App\Models\UserRole;
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
        $teachersDetails = Teacher::with([
            'class' => function ($query) {
                return $query->select('id','grade');
            },
            'section' => function ($query) {
                return $query->select('id','sections');
            },
            'subject' => function ($query) {
                return $query->select('id','subject');
            }
        ])->select('id', 'full_name', 'phone_number', 'gender', 'date_of_birth', 'address', 'photo', 'qualification', 'class_id', 'section_id', 'subject_id')->paginate(10);


        return Inertia::render('Teacher/Index')->with('teacherdetails', $teachersDetails);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $role = Role::where('role_name', 'teacher')->select('id', 'role_name')->get();
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
                'password' => 'required',
                'phonenumber' => 'required|string|max:20',
                'gender' => 'required',
                'date_of_birth' => 'required',
                'photo' => 'required|image|mimes:jpeg,png,jpg,gif|max:2048',
                'qualification' => 'required',
                'class' => 'required',
                'section' => 'required',
                'subject' => 'required',
                'user_role' => 'required'
            ]);

            $user = User::create([
                'name' => $request->input('fullname'),
                'email' => $request->input('email'),
                'password' => Hash::make($request->input('password'))
            ]);

            UserRole::create([
                'role_id' => $request->input('user_role'),
                'user_id' => $user->id
            ]);

            $photoPath = null;
            if ($request->hasFile('photo')) {
                $photoPath = $request->file('photo')->store('uploads/teachers', 'public');
            }

            Teacher::create([
                'full_name' => $request->input('fullname'),
                'phone_number' => $request->input('phonenumber'),
                'gender' => $request->input('gender'),
                'date_of_birth' => $request->input('date_of_birth'),
                'address' => $request->input('address'),
                'photo' => $photoPath,
                'qualification' => $request->input('qualification'),
                'class_id' => $request->input('class'),
                'section_id' => $request->input('section'),
                'subject_id' => $request->input('subject'),
                'user_id' => $request->input('user_role')
            ]);


            DB::commit();

            return redirect()->route('teacher.index')->with('success', 'Teacher created successfully.');
        } catch (\Throwable $th) {
            Log::error('Error occurred while creating teacher: ' . $th->getMessage());
            DB::rollBack();
            return redirect()->back()->withErrors(['error' => 'An error occurred while saving.'])->withInput();
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
        $teacher = User::find($teacher->user_id);
     return Inertia::render('Teacher/Edit')->with([
        'teacher' => $teacher
     ]);
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
        if ($teacher) {
            $teacher->delete();

            return redirect()->back();
        }
    }
}
