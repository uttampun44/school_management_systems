import { useState } from "react";
import Dropdown from "@/Components/Dropdown";
import NavLink from "@/Components/NavLink";
import ResponsiveNavLink from "@/Components/ResponsiveNavLink";
import { Link, usePage } from "@inertiajs/react";
import Sidebar from "@/Components/Sidebar";
import { useDispatch, useSelector } from "react-redux";
import cn from "classnames";
import { hamburger } from "@/store/store";

export default function Authenticated({ header, children }) {
    const user = usePage().props.auth.user;

    const toggle = useSelector((state) => state.school.isToggle);

    const dispatch = useDispatch();

    const handleHamburger = () => {
        dispatch(hamburger());
    };

    return (
        <>
            <Sidebar onClick={handleHamburger} />
            <div
                className={cn(
                    `min-h-screen bg-gray-100 ${toggle ? "ml-72" : "ml-20"} `
                )}
            >
                <nav className="bg-white border-b border-gray-100">
                    <div className="px-4 sm:px-6 lg:px-8">
                        <div className="flex justify-end h-16">
                            <div className="hidden sm:flex sm:items-center sm:ms-6">
                                <div className="ms-3 relative ">
                                    <Dropdown>
                                        <Dropdown.Trigger>
                                            <span className="inline-flex rounded-md">
                                                <button
                                                    type="button"
                                                    className="inline-flex bg-blue-600 items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-white hover:text-slate-400 focus:outline-none transition ease-in-out duration-150"
                                                >
                                                    {user.name}

                                                    <svg
                                                        className="ms-2 -me-0.5 h-4 w-4"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 20 20"
                                                        fill="currentColor"
                                                    >
                                                        <path
                                                            fillRule="evenodd"
                                                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                            clipRule="evenodd"
                                                        />
                                                    </svg>
                                                </button>
                                            </span>
                                        </Dropdown.Trigger>

                                        <Dropdown.Content>
                                            <Dropdown.Link
                                                href={route("profile.edit")}
                                            >
                                                Profile
                                            </Dropdown.Link>
                                            <Dropdown.Link
                                                href={route("logout")}
                                                method="post"
                                                as="button"
                                            >
                                                Log Out
                                            </Dropdown.Link>
                                        </Dropdown.Content>
                                    </Dropdown>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
                <main>{children}</main>
            </div>
        </>
    );
}
