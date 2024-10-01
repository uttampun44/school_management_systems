import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import classNames from "classnames";

export default function Create({ classes, section }) {
    const handleSubmit = () => {};

    return (
        <Authenticated>
            <div
                className={classNames(
                    "p-8 overflow-x-auto m-8 shadow-md sm:rounded-lg"
                )}
            >
                <h1 className={classNames("text-xl font-sans font-bold")}>Create Student</h1>
                <form onSubmit={handleSubmit}>
                    <div className={classNames("grid grid-cols-3 gap-4 my-2")}>
                        <div className={classNames("fullName")}>
                            <InputLabel value="Full Name" />
                            <TextInput
                                className={classNames("p-1 rounded-md w-full")}
                                name="fullname"
                            />
                        </div>
                        <div className={classNames("phoneNumber")}>
                            <InputLabel value="Phone Number" />
                            <TextInput
                                className={classNames("p-1 rounded-md w-full")}
                                name="phonenumber"
                            />
                        </div>
                        <div className={classNames("date_of_birth")}>
                            <InputLabel value="Date Of Birth" />
                            <TextInput
                                className={classNames("p-1 rounded-md w-full")}
                                name="phonenumber"
                            />
                        </div>
                        <div className={classNames("photo")}>
                            <InputLabel value="Photo" />
                            <input
                                type="file"
                                className={classNames(
                                    "p-1 rounded- w-full border-2 rounded-md"
                                )}
                                name="photo"
                            />
                        </div>
                        <div className={classNames("fatherName")}>
                            <InputLabel value="Father name" />
                            <TextInput
                                className={classNames(
                                    "p-1 rounded- w-full border-2 rounded-md"
                                )}
                                name="fathername"
                            />
                        </div>
                        <div className={classNames("fatherOccupation")}>
                            <InputLabel value="Father Occupation" />
                            <TextInput
                                className={classNames(
                                    "p-1 rounded- w-full border-2 rounded-md"
                                )}
                                name="fatheroccupation"
                            />
                        </div>

                        <div className={classNames("motherName")}>
                            <InputLabel value="Mother name" />
                            <TextInput
                                className={classNames(
                                    "p-1 rounded- w-full border-2 rounded-md"
                                )}
                                name="mothername"
                            />
                        </div>
                        <div className={classNames("motherOccupation")}>
                            <InputLabel value="Mother Occupation" />
                            <TextInput
                                className={classNames(
                                    "p-1 rounded- w-full border-2 rounded-md"
                                )}
                                name="motheroccupation"
                            />
                        </div>

                        <div className={classNames("address")}>
                            <InputLabel value="Address" />
                            <TextInput
                                className={classNames(
                                    "p-1 rounded- w-full border-2 rounded-md"
                                )}
                                name="address"
                            />
                        </div>

                        <div className={classNames("class")}>
                            <select
                                className={classNames(
                                    "p-1 rounded- w-full border-2 rounded-md"
                                )}
                            >
                                        <option selected >
                                          
                                            Select Class
                                        </option>
                                {classes.map((classItem, index) => (
                                    
                                        <option key={index} value={classItem.id}>
                                            {classItem.grade}
                                        </option>
                                   
                                ))}
                            </select>
                        </div>

                        <div className={classNames("section")}>
                            <select
                                className={classNames(
                                    "p-1 rounded- w-full border-2 rounded-md"
                                )}
                            >
                                        <option selected >
                                         
                                            Select Section
                                        </option>
                                {section.map((sectionItem, index) => (
                                   
                                        <option value={sectionItem.id} key={index}>{sectionItem.sections}</option>
                                   
                                ))}
                            </select>
                        </div>
                    </div>
                </form>
            </div>
        </Authenticated>
    );
}
