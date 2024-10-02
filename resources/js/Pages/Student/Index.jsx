import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Link } from "@inertiajs/react";
import classNames from "classnames";
import EditNoteIcon from "@mui/icons-material/EditNote";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";


export default function Index({ students }) {
    console.log(students.map((student, index) => student));
    return (
        <Authenticated>
            <div
                className={classNames(
                    "p-8 m-8 overflow-x-auto shadow-md sm:rounded-lg"
                )}
            >
                <div className="addStudent bg-blue-600 text-white text-lg font-medium py-2 px-4 rounded-md my-3 w-max">
                    <Link href={route("student.create")}>Add Student</Link>
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
                        {students.map((student, index) => (
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
                                <td className="px-6 py-4">
                                    {student.full_name}
                                </td>
                                <td className="px-6 py-4">
                                    {student.phone_number}
                                </td>
                                <td className="px-6 py-4">
                                    {student.date_of_birth}
                                </td>
                                <td className="px-6 py-4">
                                    <img
                                        src={`/storage/uploads/${student.photo}`}
                                        className={classNames(
                                            "w-20 h-20 object-contain"
                                        )}
                                    />
                                </td>
                                <td className="px-6 py-4">
                                    {student.fathers_name}
                                </td>
                                <td className="px-6 py-4">
                                    {student.father_occupation}
                                </td>
                                <td className="px-6 py-4">
                                    {student.mothers_name}
                                </td>
                                <td className="px-6 py-4">
                                    {student.mother_occupation}
                                </td>
                                <td className="px-6 py-4">{student.address}</td>
                                <td className="px-6 py-4">
                                    {student.class.grade}
                                </td>
                                <td className="px-6 py-4">
                                    {student.section.sections}
                                </td>
                                <td className="px-6 py-4">
                                   
                                   <Link href={route('student.edit', student.id)}> <EditNoteIcon
                                        style={{
                                            fontSize: "30px",
                                            color: "blue",
                                            cursor: "pointer",
                                        }}
                                    /></Link>
                                </td>
                                <td className={classNames("px-6 py-3")}>
                                    <DeleteForeverIcon
                                        onClick={() =>
                                            handleDeleteSection(student.id)
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
