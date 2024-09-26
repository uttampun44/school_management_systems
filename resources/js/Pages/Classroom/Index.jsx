import Button from "@/Components/Button";
import Drawer from "@/Components/Drawer";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import cn from "classnames";
import { useState } from "react";

export default function Index() {

    const [visibility, setVisibility] = useState(false)
    const handleClick = () => {
     setVisibility(visibility => !visibility)
    }

    return (
        <Authenticated>
            <Drawer
             position="right"
              className={`bg-slate-500 z-50 ${visibility ? 'translate-x-0 transition-transform duration-500 delay-75 ease-in-out': 'translate-x-full transition-transform duration-500 delay-75 ease-in-out'}`}>
                Hello
            </Drawer>    
            <div className="m-8 p-5 overflow-x-auto shadow-md sm:rounded-lg">
                <Button name="Add Class" 
                classname={cn("bg-blue-600 w-max text-white text-lg font-medium py-2 px-4 rounded-md my-3")}
                onClick={handleClick}
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
