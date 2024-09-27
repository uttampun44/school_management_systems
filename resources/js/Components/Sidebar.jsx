import { Link } from "@inertiajs/react";
import cn from "classnames";
import { useSelector } from "react-redux";
import DashboardIcon from "@mui/icons-material/Dashboard";
import EngineeringIcon from "@mui/icons-material/Engineering";
import FaceIcon from "@mui/icons-material/Face";
import SchoolIcon from '@mui/icons-material/School';



export default function Sidebar(props) {
    const toggle = useSelector((state) => state.school.isToggle);
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
                                       <SchoolIcon  className={cn("text-white")}
                                            style={{ fontSize: "36px" }}/>
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
                                        "my-3 text-white font-semibold text-sm"
                                    )}
                                >
                                    <Link href={route("dashboard")}>
                                        Dashboard
                                    </Link>
                                </li>

                                <li
                                    className={cn(
                                        "my-3 text-white font-semibold text-sm"
                                    )}
                                >
                                    <Link href={route("student.index")}>
                                        Student
                                    </Link>
                                </li>
                                <li  className={cn(
                                        "my-3 text-white font-semibold text-sm"
                                    )}>
                                    <Link href={route("class-room.index")}>
                                        Class
                                    </Link>
                                </li>
                                <li
                                    className={cn(
                                        "my-3 text-white font-semibold text-sm"
                                    )}
                                >
                                    <Link href={route("profile.edit")}>
                                        Profile
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </aside>
                </div>
            )}
        </>
    );
}
