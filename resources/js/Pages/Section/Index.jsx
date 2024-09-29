import Authenticated from "@/Layouts/AuthenticatedLayout";
import classNames from "classnames";

export default function Index(){
    return (
       <Authenticated>
           <div className={classNames("sectionContainer m-8 p-8 overflow-x-auto shadow-md sm:rounded-lg")}>
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
                    </table>
           </div>
       </Authenticated>
    )
}