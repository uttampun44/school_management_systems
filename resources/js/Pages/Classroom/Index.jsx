import Button from "@/Components/Button";
import DangerButton from "@/Components/DangerButton";
import Drawer from "@/Components/Drawer";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import cn from "classnames";
import { useState } from "react";
import { Close } from "@mui/icons-material";
import { Link, useForm} from "@inertiajs/react";
import InputLabel from "@/Components/InputLabel";
import EditNoteIcon from '@mui/icons-material/EditNote';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';


export default function Index({classes}) {
    const [visibility, setVisibility] = useState(false);
    const { data, setData, post, errors, reset, wasSuccessful, delete:destroy } = useForm({
        grade: "",
    });

    /**** add class button show the drawer modal *****/
    const handleShow = () => setVisibility(true);

    const handleClose = () => setVisibility(false);

    const handleSubmit = (event) => {
        if(!data.grade) return
        event.preventDefault();
        post(route("class-room.store"), {
            onSuccess: () => reset("grade")
        });
    };

    const handleOutside = () => {
        if (visibility) {
            setVisibility(false);
        }
    };

    const handleDeleteClass = (id) =>{

        confirm("Are You ready to Delete");
        destroy(route("class-room.destroy", id))
    }

    return (
        <Authenticated>
            <Drawer
                onClose={handleOutside}
                visibility={visibility}
                className={`z-50  bg-slate-50 p-5 transition-transform  duration-300 ease-in-out ${
                    visibility ? "translate-x-0 " : "translate-x-full"
                }`}
            >
                <div className="closeIcon flex justify-between">
                    <h2 className={cn("font-bold text-xl font-sans")}>
                        Create Class (Grade)
                    </h2>
                    <Close
                        style={{ fontSize: "30px", cursor: "pointer" }}
                        onClick={handleClose}
                    />
                </div>

                <div className={cn("classForm my-8")}>
                    <form onSubmit={handleSubmit}>
                        <InputLabel value="Class (Grade)" />
                        <input
                            type="text"
                            value={data.grade}
                            className={cn(
                                "p-1 rounded-md my-2 outline-none w-full"
                            )}
                            name="grade"
                            onChange={(e) => setData("grade", e.target.value)}
                        />

                       {errors.grade &&  <div
                            className={cn(
                                "text-red-600 font-medium text-base font-sans"
                            )}
                        >
                            {errors.grade}
                        </div>}
                        <div className={cn("buttonRow flex gap-x-4 justify-center items-center")}>
                            <Button
                                type="submit"
                                name="Submit"
                                classname={cn(
                                    "bg-blue-600 w-max text-white text-lg font-medium py-1 px-4 rounded-md my-3"
                                )}

                            />
                            <Link href={route('class-room.index')}>
                                <DangerButton
                                    className={cn(
                                        "w-max text-white !text-lg font-medium !py-1 !px-4 rounded-md"
                                    )}
                                >
                                    Cancel
                                </DangerButton>
                            </Link>
                        </div>
                        <p className={cn("text-blue-700 text-xl font-serif font-medium")}>{wasSuccessful ? 'Classroom Created ...':null}</p>
                    </form>
                </div>
            </Drawer>
            <div className="m-8 p-5 overflow-x-auto shadow-md sm:rounded-lg">
                <Button
                    name="Add Class"
                    classname={cn(
                        "bg-blue-600 w-max text-white text-lg font-medium py-2 px-4 rounded-md my-3"
                    )}
                    onClick={handleShow}
                />
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
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
                    <tbody className={cn("text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400")}>
                        {
                            classes.map((classItem, index) => (
                                <tr key={classItem.id}>

                                  <td className={cn("px-6 py-3")} >{index+1}</td>
                                  <td className={cn("px-6 py-3")}>{classItem.grade}</td>
                                  <td className={cn("px-6 py-3")}><Link href={route('class-room.edit',classItem.id)}><EditNoteIcon style={{fontSize: '30px', color: 'blue'}} /></Link></td>
                                  <td className={cn("px-6 py-3")} ><DeleteForeverIcon onClick={() => handleDeleteClass(classItem.id)} style={{fontSize: '30px', color: 'red', cursor: "pointer"}} /></td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </Authenticated>
    );
}
