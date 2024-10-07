<?php

use App\Http\Controllers\ClassRoomController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\RoleController;
use App\Http\Controllers\SectionConrtoller;
use App\Http\Controllers\StudentController;
use App\Http\Controllers\SubjectController;
use App\Http\Controllers\TeacherController;
use App\Http\Middleware\Permission;
use App\Models\Role;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');


Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    /***************Student************/
    Route::resource('/student', StudentController::class);

    /******************* Teacher ***********************/ 
    Route::resource('teacher', TeacherController::class);

    /*************** classrooms ***********/
    Route::resource('/class-room', ClassRoomController::class);

    /******************* section *********************/
    Route::resource('/section',  SectionConrtoller::class); 
    /****************** Role ********************/ 
    Route::get('/role', [RoleController::class, 'index'])->name('role.index');
    Route::get('/role/{id}', [RoleController::class, 'edit'])->name('role.edit');

    /*********************** Subject ******************************/ 
    Route::resource('subject', SubjectController::class);

});

require __DIR__.'/auth.php';
