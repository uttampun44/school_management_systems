import { Link } from "@inertiajs/react";
import cn from "classnames";
import { useSelector } from "react-redux";
import DashboardIcon from "@mui/icons-material/Dashboard";
import EngineeringIcon from "@mui/icons-material/Engineering";
import FaceIcon from "@mui/icons-material/Face";
import SchoolIcon from "@mui/icons-material/School";
import useToggle from "@/hooks/UseToggle";
import classNames from "classnames";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export default function Sidebar(props) {
    const toggle = useSelector((state) => state.school.isToggle);

    const [isStudent, toggleStudent] = useToggle();
    const [isTeacher, toggleTeacher] = useToggle();

    const dashboard = {
        name: "Udemy Inter.School",
        image: "/images/dashboardLogo.png",
    };

    return (
        <>
            {toggle ? (
                <div
                    className={cn(
                        `sideBar fixed z-50 h-full bg-main-color py-6 px-5 max-w-32 w-full `
                    )}
                >
                    <aside>
                        <div
                            className={cn(
                                "hamburgerMenu grid justify-items-center"
                            )}
                        >
                            <img src={dashboard.image} alt={dashboard.name} />
                            <h2
                                className={cn(
                                    "my-3 text-sm font-bold text-white text-center"
                                )}
                            >
                                {dashboard.name}
                            </h2>
                        </div>
                        <div className={cn("routeLink text-center")}>
                            <ul className={cn("grid gap-y-5")}>
                                <li>
                                    <Link href={route("dashboard")}>
                                        <DashboardIcon
                                            className={cn("text-white")}
                                            style={{ fontSize: "36px" }}
                                        />
                                    </Link>
                                </li>
                                <li>
                                    <Link href={route("student.index")}>
                                        <EngineeringIcon
                                            className={cn("text-white")}
                                            style={{ fontSize: "36px" }}
                                        />
                                    </Link>
                                </li>
                                <li>
                                    <Link href={route("class-room.index")}>
                                        <SchoolIcon
                                            className={cn("text-white")}
                                            style={{ fontSize: "36px" }}
                                        />
                                    </Link>
                                </li>
                                <li>
                                    <Link href={route("profile.edit")}>
                                        <FaceIcon
                                            className={cn("text-white")}
                                            style={{ fontSize: "36px" }}
                                        />
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </aside>
                </div>
            ) : (
                <div
                    className={cn(
                        `sideBar fixed z-50 h-full bg-main-color py-6 px-5 max-w-72 w-full `
                    )}
                >
                    <aside>
                        <div className="logoText grid justify-items-center border-b-2 relative">
                            <img src={dashboard.image} alt={dashboard.name} />
                            <h2
                                className={cn(
                                    "my-3 text-sm font-bold text-white text-center"
                                )}
                            >
                                {dashboard.name}
                            </h2>
                        </div>

                        <div className={cn("routeLink")}>
                            <ul>
                                <li
                                    className={cn(
                                        "my-3 text-white flex gap-x-2 items-center font-semibold text-sm"
                                    )}
                                >
                                    <DashboardIcon
                                        className={cn("text-white")}
                                        style={{ fontSize: "24px" }}
                                    />
                                    <Link href={route("dashboard")}>
                                        Dashboard
                                    </Link>
                                </li>

                                <li
                                    className={cn(
                                        "my-3 text-white flex gap-x-2 items-center font-semibold text-sm cursor-pointer"
                                    )}
                                >
                                    <FaceIcon
                                        className={cn("text-white")}
                                        style={{ fontSize: "24px" }}
                                    />
                                    <span onClick={toggleStudent}>
                                        Student Management
                                    </span>
                                </li>

                                <ul
                                    className={classNames(
                                        `${isStudent ? "block" : "hidden"}`
                                    )}
                                >
                                    <li
                                        className={cn(
                                            "my-3 text-white font-semibold text-sm"
                                        )}
                                    >
                                        <Link href={route("student.index")}>
                                            Student
                                        </Link>
                                    </li>
                                    <li
                                        className={cn(
                                            "my-3 text-white font-semibold text-sm"
                                        )}
                                    >
                                        <Link href={route("class-room.index")}>
                                            Class
                                        </Link>
                                    </li>
                                    <li
                                        className={cn(
                                            "my-3 text-white font-semibold text-sm"
                                        )}
                                    >
                                        <Link href={route("section.index")}>
                                            Section
                                        </Link>
                                    </li>
                                    <li
                                        className={cn(
                                            "my-3 text-white font-semibold text-sm"
                                        )}
                                    >
                                        <Link href={route("subject.index")}>
                                            Subject
                                        </Link>
                                    </li>
                                </ul>
                                    <li
                                        className={cn(
                                            "my-3 text-white flex gap-x-2 items-center font-semibold text-sm cursor-pointer"
                                        )}
                                    >
                                        <FaceIcon
                                            className={cn("text-white")}
                                            style={{ fontSize: "24px" }}
                                        />
                                        <span onClick={toggleTeacher}>
                                            Teachers Management
                                        </span>
                                    </li>
                                <ul className={cn(`${isTeacher ? 'block' : 'hidden'}`)}>
                                   <li  className={cn(
                                        "my-3 text-white flex gap-x-3 items-center font-semibold text-sm"
                                    )}> 
                                <Link href={route("teacher.index")}>
                                    Teacher
                                </Link></li>
                                </ul>    
                                <li
                                    className={cn(
                                        "my-3 text-white flex gap-x-3 items-center font-semibold text-sm"
                                    )}
                                >
                                    <AccountCircleIcon
                                        className={cn("text-white")}
                                        style={{ fontSize: "24px" }}
                                    />
                                    <Link href={route("profile.edit")}>
                                        Profile
                                    </Link>
                                </li>
                                <li
                                    className={cn(
                                        "my-3 text-white flex gap-x-3 items-center font-semibold text-sm"
                                    )}
                                >
                                    <AccountBoxIcon
                                        className={cn("text-white")}
                                        style={{ fontSize: "24px" }}
                                    />
                                    <Link href={route("role.index")}>Role</Link>
                                </li>
                            </ul>
                        </div>
                    </aside>
                </div>
            )}
        </>
    );
}
