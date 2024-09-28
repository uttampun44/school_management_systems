import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Link } from "@inertiajs/react";
import classNames from "classnames";
import EditNoteIcon from "@mui/icons-material/EditNote";


export default function Index({roles}) {
   
    return (
        <Authenticated>
            <div
                className={classNames(
                    "roleContainer m-8 p-5 overflow-x-auto shadow-md sm:rounded-lg"
                )}
            >
                <h1 className={classNames("text-lg font-bold font-sans")}>
                    Role
                </h1>

                <table
                    className={classNames(
                        "w-full my-3 text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400"
                    )}
                >
                    <thead
                        className={classNames(
                            "text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
                        )}
                    >
                        <tr className={classNames("text-center")}>
                            <th scope="col" className="px-6 py-3">
                                S.No
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Role
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Edit
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Delete
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                       {
                         roles.map((role, index) => (
                            <tr key={index} className={classNames("text-center")}>
                            <td className={classNames("px-6 py-3")} >{index+1}</td>
                            <td className={classNames("px-6 py-3")} >{role.role_name}</td>
                            <td className={classNames("px-6 py-3")} ><Link href={route("role.edit", role.id)}>  <EditNoteIcon
                                       
                                        style={{
                                            fontSize: "30px",
                                            color: "blue",
                                            cursor: "pointer"
                                        }}
                                    /></Link></td>
                        </tr>
                         ))
                       }
                    </tbody>
                </table>
            </div>
        </Authenticated>
    );
}
