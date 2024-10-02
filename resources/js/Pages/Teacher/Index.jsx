import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Link } from "@inertiajs/react";
import classNames from "classnames";

export default function Index(){
    return(
        <Authenticated>
        <div
            className={classNames(
                "p-8 m-8 overflow-x-auto shadow-md sm:rounded-lg"
            )}
        >
            <div className="addStudent bg-blue-600 text-white text-lg font-medium py-2 px-4 rounded-md my-3 w-max">
                <Link href={route("teacher.create")}>Add Teacher</Link>
            </div>
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            S.No
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Full Name
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Email
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Phone Number
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Date Of Birth
                        </th>

                        <th scope="col" className="px-6 py-3">
                            Photo
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Fathers Name
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Fathers Occupation
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Mothers Name
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Mothers Occupation
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Address
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Class
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Section
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

              </tbody>
            </table>
        </div>
    </Authenticated>
    )
}