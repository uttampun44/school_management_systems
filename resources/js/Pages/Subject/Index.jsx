import Button from "@/Components/Button";
import DangerButton from "@/Components/DangerButton";
import Drawer from "@/Components/Drawer";
import InputLabel from "@/Components/InputLabel";
import Modal from "@/Components/Modal";
import TextInput from "@/Components/TextInput";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import classNames from "classnames";
import { useState } from "react";
import { Close } from "@mui/icons-material";
import { Link, useForm } from "@inertiajs/react";
import EditNoteIcon from "@mui/icons-material/EditNote";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

export default function Index({subjects}){

    const [modal, setModal] = useState(false);
    const [visibility, setVisibility] = useState(false);
    const [updatesubject, setUpdateSubject] = useState(null);

    const {data, wasSuccessful, setData, reset, errors, post:store, delete:destroy, put:update} = useForm({subject: "",
     subjectUpdate: ""})

    const handleModal = () =>{
       setVisibility(true)
    }

    const handleSubject = (event) =>{
        event.preventDefault()
        if(!data.subject) return
      store(route('subject.store', {
        onSuccess: () => reset("subject")
      }))
    }

    
    const handleSubjectEdit = (subjectItem) =>{
        setModal(true)
        setData("subjectUpdate", subjectItem.subject)
        setUpdateSubject(subjectItem.id)
    }
    
    const handleSubjectUpdate = (event) =>{
        console.log(data)
        event.preventDefault()
        if(!data.subjectUpdate) return
        update(route('subject.update', updatesubject), {
            onSuccess: () =>{
                reset("subjectUpdate");
            }
        })
        
    }
    const handleDeleteSubject = (id) =>{
        confirm("Are you want to delete !")
        destroy(route('subject.destroy', id))
    }
    
    const handleOutside = () => setVisibility(false)
    const handleClose = () => setVisibility(false)
    const handleCloseModal = () => setModal(false)
    return(
      
         <Authenticated>
                <div className={classNames("subject m-8 p-8 overflow-x-auto shadow-md sm:rounded-lg")}>
                <Modal show={modal}>
                <form onSubmit={handleSubjectUpdate}>
                        <div className={classNames("modalSubject p-5")}>
                            <div
                                className={classNames(
                                    "title flex justify-between items-center"
                                )}
                            >
                                <h2
                                    className={classNames(
                                        "font-bold text-xl font-sans"
                                    )}
                                >
                                    Update Subject
                                </h2>
                                <Close
                                    style={{
                                        fontSize: "30px",
                                        cursor: "pointer",
                                    }}
                                    onClick={handleCloseModal}
                                />
                            </div>
                            <TextInput
                                type="text"
                                value={data.subjectUpdate}
                                className={classNames(
                                    "p-1 rounded-md my-2 outline-none w-full"
                                )}
                                name="subjectUpdate"
                                onChange={(e) =>
                                    setData("subjectUpdate", e.target.value)
                                }
                            />

                            {errors.subjectUpdate && (
                                <div
                                    className={classNames(
                                        "text-lg text-red-700 font-medium"
                                    )}
                                >
                                    {errors.subjectUpdate}
                                </div>
                            )}
                            <div
                                className={classNames(
                                    "btnRow flex gap-x-5 items-center"
                                )}
                            >
                                <Button
                                    type="submit"
                                    name="Update Subject"
                                    classname={classNames(
                                        "bg-blue-600 w-max text-white text-lg font-medium py-2 px-4 rounded-md my-3"
                                    )}
                                />
                                <Link href={route("subject.index")}>
                                    <DangerButton
                                        className={classNames(
                                            "w-max text-white !text-lg font-medium  rounded-md"
                                        )}
                                    >
                                        Cancel
                                    </DangerButton>
                                </Link>
                            </div>
                        </div>
                    </form>
                    <p
                        className={classNames(
                            "text-green-700 text-xl my-2 text-center font-sans font-medium"
                        )}
                    >
                        {wasSuccessful ? "Subject Update Successfully" : null}
                    </p>
                </Modal>
                 <div className="btnAddSubject">
                    <Button
                        type="submit"
                        name="Add Subject"
                        classname={classNames(
                            "bg-blue-600 w-max text-white text-lg font-medium py-2 px-4 rounded-md my-3"
                        )}
                        onClick={handleModal}
                    />
                 </div>

                 <Drawer
                onClose={handleOutside}
                visibility={visibility}
                className={`z-50  bg-slate-50 p-5 transition-transform  duration-300 ease-in-out ${
                    visibility ? "translate-x-0 " : "translate-x-full"
                }`}
            >
                <div className="closeIcon flex justify-between">
                    <h2 className={classNames("font-bold text-xl font-sans")}>
                        Create Subject
                    </h2>
                    <Close
                        style={{ fontSize: "30px", cursor: "pointer" }}
                        onClick={handleClose}
                    />
                </div>

                <div className={classNames("classForm my-8")}>
                    <form onSubmit={handleSubject}>
                        <InputLabel value="Subject" />
                        <TextInput
                            type="text"
                            value={data.subject}
                            className={classNames(
                                "p-1 rounded-md my-2 outline-none w-full"
                            )}
                            name="subject"
                            onChange={(e) => setData("subject", e.target.value)}
                        />

                        {errors.subject && (
                            <div
                                className={classNames(
                                    "text-red-600 font-medium text-base font-sans"
                                )}
                            >
                                {errors.subject}
                            </div>
                        )}
                        <div
                            className={classNames(
                                "buttonRow flex gap-x-4 justify-center items-center"
                            )}
                        >
                            <Button
                                type="submit"
                                name="Submit"
                                classname={classNames(
                                    "bg-blue-600 w-max text-white text-lg font-medium py-2 px-4 rounded-md my-3"
                                )}
                                onClick={handleSubject}
                            />
                            <Link href={route("subject.index")}>
                                <DangerButton
                                    className={classNames(
                                        "w-max text-white !text-lg font-medium  rounded-md"
                                    )}
                                >
                                    Cancel
                                </DangerButton>
                            </Link>
                        </div>
                        <p
                            className={classNames(
                                "text-green-700 text-xl font-sans font-medium"
                            )}
                        >
                            {wasSuccessful ? "Subject Created Successfully" : null}
                        </p>
                    </form>
                </div>
            </Drawer>
                 <table className="w-full text-center text-sm rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                S.No
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Subject
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Edit
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Delete
                            </th>
                        </tr>
                    </thead>
                    <tbody
                        className={classNames(
                            "text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
                        )}
                    >
                       
                          {subjects.map((subjectItem, index) => (

                             <tr key={index}>
                                <td className={classNames("px-6 py-3")}>{index+1}</td>
                                <td className={classNames("px-6 py-3")}>{subjectItem.subject}</td>
                                <td className={classNames("px-6 py-3")}> <EditNoteIcon
                                        onClick={() =>
                                            handleSubjectEdit(subjectItem)
                                        }
                                        style={{
                                            fontSize: "30px",
                                            color: "blue",
                                            cursor: "pointer",
                                        }}
                                    /></td>
                                    <td className={classNames("px-6 py-3")}>
                                    <DeleteForeverIcon
                                        onClick={() =>
                                            handleDeleteSubject(subjectItem.id)
                                        }
                                        style={{
                                            fontSize: "30px",
                                            color: "red",
                                            cursor: "pointer",
                                        }}
                                    />
                                </td>
                             </tr>
                          ))
                          }
                    </tbody>
                </table>
                </div>
         </Authenticated>
       
    )
}