import Button from "@/Components/Button";
import DangerButton from "@/Components/DangerButton";
import Modal from "@/Components/Modal";
import TextInput from "@/Components/TextInput";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Link, useForm } from "@inertiajs/react";
import { Close } from "@mui/icons-material";
import classNames from "classnames";
import { useState } from "react";
import EditNoteIcon from "@mui/icons-material/EditNote";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import Drawer from "@/Components/Drawer";
import InputLabel from "@/Components/InputLabel";

export default function Index({ sections }) {
  
    const [modal, setModal] = useState(false);
    const [edit, setEdit] = useState(null);
    const [visibility, setVisibility] = useState(false);

    const {
        data,
        setData,
        errors,
        reset,
        wasSuccessful,
        post: post,
        put: update,
        delete: destroy,
    } = useForm({
        section: "",
        updateSection: ""
    });

    const handleModal = () =>  setModal(true);


    const handleCloseModal = () => setModal(false);
    
    const handleSubmit = (event) => {
       event.preventDefault()
        post(route("section.store"), {
            onSuccess: () => {
                reset("section");
            },
        });
    };

    const handleClose = () => setVisibility(false)
    
    const handleSectionEdit = (sectionItem) =>{

       setVisibility(true) 
   
       setData("updateSection", sectionItem.updateSection)
       setEdit(sectionItem.id)
    }

    const handleSectionUpdate = (event) =>{
        event.preventDefault()
        
        if(!data.updateSection) return

        update(route("section.update", edit), {
            onSuccess: () =>{
                reset("updateSection")
            }
        })
    }

    const handleOutside = () => setVisibility(false);
    

    const handleDeleteSection = (id) => {
        confirm("Are you sure delete !");
        destroy(route("section.destroy", id));
    };
    return (
        <Authenticated>
            <div
                className={classNames(
                    "sectionContainer m-8 p-8 overflow-x-auto shadow-md sm:rounded-lg"
                )}
            >
                <div className="btnAddsection">
                    <Button
                        type="submit"
                        name="Add Section"
                        classname={classNames(
                            "bg-blue-600 w-max text-white text-lg font-medium py-2 px-4 rounded-md my-3"
                        )}
                        onClick={handleModal}
                    />
                </div>

                <Modal show={modal}>
                    <form onSubmit={handleSubmit}>
                        <div className={classNames("modalSection p-5")}>
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
                                    Create Section
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
                                value={data.section}
                                className={classNames(
                                    "p-1 rounded-md my-2 outline-none w-full"
                                )}
                                name="section"
                                onChange={(e) =>
                                    setData("section", e.target.value)
                                }
                            />

                            {errors.section && (
                                <div
                                    className={classNames(
                                        "text-lg text-red-700 font-medium"
                                    )}
                                >
                                    {errors.section}
                                </div>
                            )}
                            <div
                                className={classNames(
                                    "btnRow flex gap-x-5 items-center"
                                )}
                            >
                                <Button
                                    type="submit"
                                    name="Create Section"
                                    classname={classNames(
                                        "bg-blue-600 w-max text-white text-lg font-medium py-2 px-4 rounded-md my-3"
                                    )}
                                />
                                <Link href={route("section.index")}>
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
                            "text-green-700 text-xl my-2 font-sans font-medium"
                        )}
                    >
                        {wasSuccessful ? "Section Created" : null}
                    </p>
                </Modal>

                <Drawer
                onClose={handleOutside}
                visibility={visibility}
                className={`z-50  bg-slate-50 p-5 transition-transform  duration-300 ease-in-out ${
                    visibility ? "translate-x-0 " : "translate-x-full"
                }`}
            >
                <div className="closeIcon flex justify-between">
                    <h2 className={classNames("font-bold text-xl font-sans")}>
                        Update Section
                    </h2>
                    <Close
                        style={{ fontSize: "30px", cursor: "pointer" }}
                        onClick={handleClose}
                    />
                </div>

                <div className={classNames("classForm my-8")}>
                    <form onSubmit={handleSectionUpdate}>
                        <InputLabel value="Section" />
                        <TextInput
                            type="text"
                            value={data.updateSection || ""}
                            className={classNames(
                                "p-1 rounded-md my-2 outline-none w-full"
                            )}
                            name="updateSection"
                            onChange={(e) => setData("updateSection", e.target.value)}
                        />

                        {errors.grade && (
                            <div
                                className={classNames(
                                    "text-red-600 font-medium text-base font-sans"
                                )}
                            >
                                {errors.grade}
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
                                onClick={handleSectionUpdate}
                            />
                            <Link href={route("section.index")}>
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
                            {wasSuccessful ? "Section Update" : null}
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
                                Class
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
                        {sections.map((sectionItem, index) => (
                            <tr key={index}>
                                <td className={classNames("px-6 py-3")}>
                                    {index + 1}
                                </td>
                                <td className={classNames("px-6 py-3")}>
                                    {sectionItem.sections}
                                </td>
                                <td className={classNames("px-6 py-3")}>
                                    <EditNoteIcon
                                        onClick={() =>
                                            handleSectionEdit(sectionItem)
                                        }
                                        style={{
                                            fontSize: "30px",
                                            color: "blue",
                                            cursor: "pointer",
                                        }}
                                    />
                                </td>
                                <td className={classNames("px-6 py-3")}>
                                    <DeleteForeverIcon
                                        onClick={() =>
                                            handleDeleteSection(sectionItem.id)
                                        }
                                        style={{
                                            fontSize: "30px",
                                            color: "red",
                                            cursor: "pointer",
                                        }}
                                    />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </Authenticated>
    );
}
