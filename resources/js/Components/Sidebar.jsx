
import { Link } from "@inertiajs/react";
import cn from "classnames";

export default function Sidebar(props) {
    const dashboard = {
        name: "Udemy Inter.School",
        image: "/images/dashboardLogo.png",
    };

    return (
        <div
            className={cn(
                "sideBar fixed z-50 h-full bg-main-color py-6 px-5 max-w-72 w-full"
            )}
        >
            <div className="logoText grid justify-items-center border-b-2 relative">
                <img src={dashboard.image} alt={dashboard.name} />
                <h2
                    className={cn(
                        "my-3 text-sm font-bold text-white text-center"
                    )}
                >
                    {dashboard.name}
                </h2>
                <div
                    className={cn(
                        "hamburger w-16 h-auto absolute right-0 cursor-pointer"
                    )}
                    onClick={props.onClick}
                >
                    <img
                        src="/images/hamburger.png"
                        className={cn("w-auto h-auto object-contain")}
                    />
                </div>
            </div>

            <div className={cn("routeLink")}>
                <ul>
                    <li className={cn("my-3 text-white font-semibold text-sm")}>
                        <Link href={route("dashboard")}>Dashboard</Link>
                    </li>

                    <li className={cn("my-3 text-white font-semibold text-sm")}>
                        <Link href={route("student.index")}>Student</Link>
                    </li>
                    <li className={cn("my-3 text-white font-semibold text-sm")}>
                        <Link href={route("profile.edit")}>Profile</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}
