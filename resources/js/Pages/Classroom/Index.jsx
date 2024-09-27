import Button from "@/Components/Button";
import DangerButton from "@/Components/DangerButton";
import Drawer from "@/Components/Drawer";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import cn from "classnames";
import { useState } from "react";
import CloseIcon from '@mui/icons-material/Close';
import { Close } from "@mui/icons-material";

export default function Index() {

    const [visibility, setVisibility] = useState(false)

    const handleShow = () => {
     setVisibility(visibility => !visibility)
    }

    const handleClose = () => {
        setVisibility(false)
    }

    return (
        <Authenticated>
            <Drawer
             position="right"
             visibility={visibility}
              className={`z-50  bg-slate-200 p-5 transition-transform  duration-300 ease-in-out ${visibility ? 'translate-x-0 ': 'translate-x-full'}`}>
              <div className="closeIcon flex justify-between">
              <h2 className={cn("font-bold text-xl font-sans")}>Create Student</h2>
               <Close  style={{fontSize: "30px", cursor: "pointer"}} onClick={handleClose}/>
               
              </div>

              <div className={cn("classForm my-8")}>
                 
              </div>
               
            </Drawer>    
            <div className="m-8 p-5 overflow-x-auto shadow-md sm:rounded-lg">
                <Button name="Add Class" 
                classname={cn("bg-blue-600 w-max text-white text-lg font-medium py-2 px-4 rounded-md my-3")}
                onClick={handleShow}
                />
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                S.No
                            </th>
                            <th scope="col" className="px-6 py-3">
                                ClassRoom
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Edit
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Delete
                            </th>
                        </tr>
                    </thead>
                </table>
            </div>
        </Authenticated>
    );
}
