import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Link, useForm } from "@inertiajs/react";
import classNames from "classnames";
import EditNoteIcon from "@mui/icons-material/EditNote";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

export default function Index({ teacherdetails }) {
    
    console.log(teacherdetails)
    
    const teachers = teacherdetails.data;

    const {delete:destroy} = useForm()

   const handleDeleteTeacher = (teacherId) =>{
     destroy(route('teacher.delete', teacherId))
   }
    return (
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
                                Phone Number
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Gender
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Date Of Birth
                            </th>

                            <th scope="col" className="px-6 py-3">
                                Address
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Qualification
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Class Incharge
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Section
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
                    <tbody>
                        {teacherdetails.data.map((teacherItem, index) => (
                            <tr
                                key={index}
                                className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
                            >
                                <td
                                    scope="row"
                                    className="px-6 py-4 font-medium "
                                >
                                    {index + 1}
                                </td>
                                <td
                                    scope="row"
                                    className="px-6 py-4 font-medium "
                                >
                                    {teacherItem.full_name}
                                </td>
                                <td
                                    scope="row"
                                    className="px-6 py-4 font-medium "
                                >
                                    {teacherItem.phone_number}
                                </td>
                                <td
                                    scope="row"
                                    className="px-6 py-4 font-medium "
                                >
                                    {teacherItem.gender}
                                </td>
                                <td
                                    scope="row"
                                    className="px-6 py-4 font-medium "
                                >
                                    {teacherItem.address}
                                </td>
                                <td
                                    scope="row"
                                    className="px-6 py-4 font-medium "
                                >
                                    <img
                                        src={`/storage/uploads/teachers/${teacherItem.photo}`}
                                    />
                                </td>
                                <td
                                    scope="row"
                                    className="px-6 py-4 font-medium "
                                >
                                    {teacherItem.qualification}
                                </td>
                                <td
                                    scope="row"
                                    className="px-6 py-4 font-medium "
                                >
                                    {teacherItem.class.grade}
                                </td>
                                <td
                                    scope="row"
                                    className="px-6 py-4 font-medium "
                                >
                                    {teacherItem.section.sections}
                                </td>
                                <td
                                    scope="row"
                                    className="px-6 py-4 font-medium "
                                >
                                    {teacherItem.subject.subject}
                                </td>
                                <td className="px-6 py-4">
                                    <Link
                                        href={route("teacher.edit", teacherItem.id)}
                                    >
                                       
                                        <EditNoteIcon
                                            style={{
                                                fontSize: "30px",
                                                color: "blue",
                                                cursor: "pointer",
                                            }}
                                        />
                                    </Link>
                                </td>
                                <td className={classNames("px-6 py-3")}>
                                    <DeleteForeverIcon
                                        onClick={() =>
                                            handleDeleteTeacher(teacherItem.id)
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

                <div className="flex gap-x-4 my-4 items-center mt-4">
                    <div className={classNames("text-center")}>
                        {teacherdetails.prev_page_url && (
                            <Link
                                href={teacherdetails.prev_page_url}
                                className={classNames(
                                    "bg-blue-700 text-lg font-semibold p-3 rounded-md text-white"
                                )}
                            >
                                Previous Page
                            </Link>
                        )}
                    </div>
                    <div>
                        {teacherdetails.next_page_url && (
                            <Link
                                href={teacherdetails.next_page_url}
                                className={classNames(
                                    "bg-green-700 text-lg font-semibold p-3 rounded-md text-white"
                                )}
                            >
                                Next Page
                            </Link>
                        )}
                    </div>
                </div>
            </div>
        </Authenticated>
    );
}
