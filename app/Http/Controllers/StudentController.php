<?php

namespace App\Http\Controllers;

use App\Models\ClassRoom;
use App\Models\Role;
use App\Models\Section;
use App\Models\Student;
use App\Models\User;
use App\Models\UserRole;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

use function PHPUnit\Framework\throwException;

class StudentController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //  eager loading also include when joining the table primary key

       
        $students = Student::with([
            'class' => function($query) {
                $query->select('id','grade'); 
            },
            'section' => function($query) {
                $query->select('id', 'sections'); 
            },
            'user' => function($query){
                $query->select('id', 'email');
            }
        ])->select('id','full_name', 'phone_number', 'date_of_birth', 'photo', 'fathers_name', 'father_occupation', 'mothers_name', 'mother_occupation', 'address', 'classroom_id', 'section_id', 'user_id')->paginate(15);
        
        return Inertia::render('Student/Index')->with('students', $students);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
       $class = ClassRoom::select('id','grade')->get();
       $section = Section::select('id', 'sections')->get();
       $role = Role::select('id', 'role_name')->get();

        return Inertia::render('Student/Create')->with([
            'classes' => $class,
            'section' => $section,
            'role' => $role
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
            'email' => 'required|email|unique:users,email',
            'password' => 'required|string',
            'phonenumber' => 'required|string|max:50',
            'date_of_birth' => 'required|string|max:50',
            'photo' => 'required|image|mimes:jpeg,png,jpg,gif|max:2048',
            'fathername' => 'required|string|max:50',
            'fatheroccupation' => 'required|string|max:50',
            'mothername' => 'required|string|max:50',
            'motheroccupation' => 'required|string|max:50',
            'address' => 'required|string',
            'class' => 'required|integer',
            'section' => 'required|integer',
        ]);
        
         $user =  User::create([
              'name' => $request->input('fullname'),
              'email' => $request->input('email'),
              'password' => Hash::make($request->input('password'))
          ]);

          $photo = null;

          if($request->hasFile('photo'))
          {
            $photo = $request->file('photo')->store('uploads/student', 'public');
          }

          Student::create([
           'full_name' => $request->input('fullname'),
           'phone_number' => $request->input('phonenumber'),
           'date_of_birth' => $request->input('date_of_birth'),
           'photo' => $photo,
           'fathers_name' => $request->input('fathername'),
           'father_occupation' => $request->input('fatheroccupation'),
           'mothers_name' => $request->input('mothername'),
           'mother_occupation' => $request->input('motheroccupation'),
           'address' => $request->input('address'),
           'classroom_id' => $request->input('class'),
           'section_id' => $request->input('section'),
           'user_id' => $user->id
          ]);

         UserRole::create([
          'role_id' => $request->input('role'),
          'user_id' => $user->id
         ]);
          
          DB::commit();

          return redirect()->back();
          
      } catch (\Throwable $th) {
       Log::error($th->getMessage());
       DB::rollBack();
       return redirect()->back()->withErrors('Something went wrong! Please try again.');
      }

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
        $user = User::find($student->user_id);


        $class = ClassRoom::select('id','grade')->get();
        $section = Section::select('id', 'sections')->get();

       return Inertia::render('Student/Edit')->with([
         'student' => $student,
         'classes' => $class,
         'section' => $section,
         'user' => $user
       ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Student $student)
    {
        DB::beginTransaction();

        dd($request->all());

       try {
        $request->validate([
            'fullname' => 'required|string|max:50',
            'phonenumber' => 'required|string|max:50',
            'date_of_birth' => 'required|string|max:50',
            // 'photo' => 'required|image|mimes:jpeg,png,jpg,gif|max:2048',
            'fathername' => 'required|string|max:50',
            'fatheroccupation' => 'required|string|max:50',
            'mothername' => 'required|string|max:50',
            'motheroccupation' => 'required|string|max:50',
            'address' => 'required|string',
            'class' => 'required|integer',
            'section' => 'required|integer',
        ]);
        
         $user =  User::find($student->user_id);

         if(!$user)
         {
            throw new \Exception("User Not Found");
         }

         $user->name = $request->input('fullname');
         $user->email = $request->input('email');
 
         if ($request->input('password')) {
             $user->password = bcrypt($request->input('password'));
         }
         
         $user->save();

          $photo = $student->photo;

          if($request->hasFile('photo'))
          {

            if(Storage::exists('public/uploads/teachers/' .$photo))
            {
               Storage::delete('public/uploads/teachers/' .$photo);
            }
            $photo = $request->file('photo')->store('uploads/student', 'public');
          }

          $student->update([
           'full_name' => $request->input('fullname'),
           'phone_number' => $request->input('phonenumber'),
           'date_of_birth' => $request->input('date_of_birth'),
           'photo' => $photo,
           'fathers_name' => $request->input('fathername'),
           'father_occupation' => $request->input('fatheroccupation'),
           'mothers_name' => $request->input('mothername'),
           'mother_occupation' => $request->input('motheroccupation'),
           'address' => $request->input('address'),
           'classroom_id' => $request->input('class'),
           'section_id' => $request->input('section'),
           'user_id' => $user->id
          ]);

          DB::commit();

          return redirect()->route('student.index');
       } catch (\Throwable $th) {

         Log::error($th->getMessage());
         DB::rollBack();
       }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Student $student)
    {
       
        
        if($student){

         $student->delete();

        return redirect()->back();
        }else{
            Log::error('error', $student);
        }
    }
}
