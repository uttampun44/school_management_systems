import Button from "@/Components/Button";
import DangerButton from "@/Components/DangerButton";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Link, useForm } from "@inertiajs/react";
import classNames from "classnames";

export default function Create({ role, classes, subject, section }) {
  
    const {
        errors,
        data,
        setData,
        post: store,
        reset,
        progress,
    } = useForm({
        fullname: "",
        email: "",
        password: "",
        phonenumber: "",
        gender: "",
        date_of_birth: "",
        address: "",
        photo: null,
        qualification: "",
        class: "",
        section: "",
        subject: "",
        user_role: role[0].id,
    });

    const handleSubmit = (event) => {
        console.log(data);

        event.preventDefault();

        store(route("teacher.store", data, {
                forceFormData: true,
            })
        );
    };

    return (
        <Authenticated>
            <div
                className={classNames(
                    "p-8 overflow-x-auto m-8 shadow-md sm:rounded-lg"
                )}
            >
                <h1 className={classNames("text-xl font-sans font-bold")}>
                    Create Teacher
                </h1>
                <form onSubmit={handleSubmit}>
                    <div className={classNames("grid grid-cols-3 gap-4 my-2")}>
                        <div className={classNames("fullName")}>
                            <InputLabel value="Full Name" />
                            <TextInput
                                className={classNames("p-1 rounded-md w-full")}
                                name="fullname"
                                value={data.fullname}
                                onChange={(e) =>
                                    setData("fullname", e.target.value)
                                }
                            />
                        </div>
                        <div className={classNames("email")}>
                            <InputLabel value="Email" />
                            <TextInput
                                type="email"
                                className={classNames("p-1 rounded-md w-full")}
                                name="email"
                                value={data.email}
                                onChange={(e) =>
                                    setData("email", e.target.value)
                                }
                            />
                        </div>

                        <div className={classNames("password")}>
                            <InputLabel value="Password" />
                            <TextInput
                                type="password"
                                className={classNames("p-1 rounded-md w-full")}
                                name="password"
                                value={data.password}
                                onChange={(e) =>
                                    setData("password", e.target.value)
                                }
                            />
                        </div>
                        <div className={classNames("phoneNumber")}>
                            <InputLabel value="Phone Number" />
                            <TextInput
                                className={classNames("p-1 rounded-md w-full")}
                                name="phonenumber"
                                value={data.phonenumber}
                                onChange={(e) =>
                                    setData("phonenumber", e.target.value)
                                }
                            />
                        </div>

                        <div className={classNames("gender")}>
                            <InputLabel value="Gender" />
                            <select
                                className={classNames(
                                    "p-1 rounded- w-full border-2 rounded-md"
                                )}
                                name="gender"
                                value={data.gender}
                                onChange={(e) =>
                                    setData("gender", e.target.value)
                                }
                            >
                                <option>Select Class</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                            </select>
                        </div>
                        <div className={classNames("date_of_birth")}>
                            <InputLabel value="Date Of Birth" />
                            <TextInput
                                type="text"
                                className={classNames("p-1 rounded-md w-full")}
                                name="date_of_birth"
                                value={data.date_of_birth}
                                onChange={(e) =>
                                    setData("date_of_birth", e.target.value)
                                }
                            />
                        </div>
                        <div className={classNames("address")}>
                            <InputLabel value="Address" />
                            <TextInput
                                className={classNames(
                                    "p-1 rounded- w-full border-2 rounded-md"
                                )}
                                name="address"
                                value={data.address}
                                onChange={(e) =>
                                    setData("address", e.target.value)
                                }
                            />
                        </div>
                        <div className={classNames("photo")}>
                            <InputLabel value="Photo" />
                            <TextInput
                                type="file"
                                className={classNames(
                                    "p-1 rounded- w-full border-2 rounded-md"
                                )}
                                name="photo"
                                // value={data.photo}
                                onChange={(e) =>
                                    setData("photo", e.target.files[0])
                                }
                            />
                            {progress && (
                                <progress value={progress.percentage} max="100">
                                    {progress.percentage}%
                                </progress>
                            )}
                        </div>

                        <div className={classNames("fatherName")}>
                            <InputLabel value="Qualification" />

                            <select
                                className={classNames(
                                    "p-1 rounded- w-full border-2 rounded-md"
                                )}
                                name="qualification"
                                value={data.qualification}
                                onChange={(e) =>
                                    setData("qualification", e.target.value)
                                }
                            >
                                <option>Select Qualification</option>
                                <option>Bachelor</option>
                                <option>Master</option>
                                <option>P.H.D</option>
                            </select>
                        </div>

                        <div className={classNames("class")}>
                            <InputLabel value="Class" />
                            <select
                                className={classNames(
                                    "p-1 rounded- w-full border-2 rounded-md"
                                )}
                                name="class"
                                value={data.class}
                                onChange={(e) =>
                                    setData("class", e.target.value)
                                }
                            >
                                <option>Select Class</option>
                                {classes.map((classItem, index) => (
                                <option key={index} value={classItem.id}>
                                    {classItem.grade}
                                </option>
                            ))}
                            </select>
                        </div>

                        <div className={classNames("section")}>
                            <InputLabel value="Section" />
                            <select
                                className={classNames(
                                    "p-1 rounded- w-full border-2 rounded-md"
                                )}
                                name="section"
                                value={data.section}
                                onChange={(e) =>
                                    setData("section", e.target.value)
                                }
                            >
                                <option>Select Section</option>
                                {section.map((sectionItem, index) => (
                                <option value={sectionItem.id} key={index}>
                                    {sectionItem.sections}
                                </option>
                            ))}
                            </select>
                        </div>

                    
                            <div className={classNames("role hidden")}>
                                 <InputLabel value="User Role" />
                                <TextInput
                                type="text"
                                    className={classNames(
                                        "p-1 rounded- w-full border-2 rounded-md"
                                    )}
                                    name="user_role"
                                    value={data.user_role}
                                    onChange={(e) =>
                                        setData("user_role", e.target.value)
                                    }
                                />
                            </div>
                     

                        <div className={classNames("subject")}>
                            <InputLabel value="Subject" />
                            <select
                                className={classNames(
                                    "p-1 rounded- w-full border-2 rounded-md"
                                )}
                                name="subject"
                                value={data.subject}
                                onChange={(e) =>
                                    setData("subject", e.target.value)
                                }
                            >
                                <option>Select Subject</option>
                                {subject.map((subjectItem, index) => (
                                <option value={subjectItem.id} key={index}>
                                    {subjectItem.subject}
                                </option>
                            ))}
                            </select>
                        </div>
                    </div>

                    <div
                        className={classNames(
                            "rowBtn flex gap-x-4 items-center"
                        )}
                    >
                        <Button
                            type="submit"
                            name="Add Teacher"
                            classname={classNames(
                                "bg-blue-600 w-max text-white text-lg font-medium py-2 px-4 rounded-md my-3"
                            )}
                        />
                        <Link href={route("teacher.index")}>
                            <DangerButton
                                className={classNames(
                                    "w-max text-white !text-lg font-medium  rounded-md"
                                )}
                            >
                                Cancel
                            </DangerButton>
                        </Link>
                    </div>
                </form>
            </div>
        </Authenticated>
    );
}
