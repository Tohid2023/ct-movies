import {
    Compass,
    Heart,
    BookOpen,
    Users,
    Phone,
    HelpCircle,
    Settings,
    Ticket,
} from "lucide-react";
import { useState } from "react";

import { NavLink } from "react-router-dom";

const mainMenu = [
    {
        name: "Discover",
        icon: Compass,
        path: "/",
    },
    {
        name: "Watchlist",
        icon: Heart,
        path: "/watchlist",
    },
    {
        name: "Blog",
        icon: BookOpen,
        path: "#",
    },
    {
        name: "Artists",
        icon: Users,
        path: "#",
    },
];

const otherMenu = [
    {
        name: "Contact Us",
        icon: Phone,
        path: "#",
    },
    {
        name: "Help Center",
        icon: HelpCircle,
        path: "#",
    },
    {
        name: "Setting",
        icon: Settings,
        path: "#",
    },
];

function Sidebar({ open, setOpen }) {
    return (
        <aside
        
    className={`fixed left-0 top-0 z-50 h-screen w-[180px] bg-[#171717] transition-transform lg:block ${
        open ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
    }`}
>
    <button
    onClick={() => setOpen(false)}
    className="absolute right-3 top-5 text-gray-400 lg:hidden"
>
    ✕
</button>
            
            {/* Logo */}
            <div className="flex h-[72px] items-center justify-center border-b border-[#292929]">
                <h1 className="text-xl font-bold text-[#f5c400]">
                    CT.Movies
                </h1>
            </div>

            <div className="px-5 py-8">

                {/* Main Menu */}
                <p className="mb-4 text-xs text-gray-500">
                    Menu
                </p>

                <nav className="space-y-2">
                    {mainMenu.map((item) => {
                        const Icon = item.icon;

                        return (
                            <NavLink
                                key={item.name}
                                to={item.path}
                                className={({ isActive }) =>
                                    `flex items-center gap-3 rounded-lg px-3 py-3 text-sm ${
                                        isActive
                                            ? "bg-[#242424] text-[#f5c400]"
                                            : "text-gray-400 hover:bg-[#242424] hover:text-white"
                                    }`
                                }
                            >
                                <Icon size={18} />

                                <span>
                                    {item.name}
                                </span>
                            </NavLink>
                        );
                    })}
                </nav>

                {/* Divider */}
                <div className="my-7 h-px bg-[#292929]" />

                {/* Other Menu */}
                <nav className="space-y-2">
                    {otherMenu.map((item) => {
                        const Icon = item.icon;

                        return (
                            <a
                                key={item.name}
                                href={item.path}
                                className="flex items-center gap-3 rounded-lg px-3 py-3 text-sm text-gray-400 hover:bg-[#242424] hover:text-white"
                            >
                                <Icon size={18} />

                                <span>
                                    {item.name}
                                </span>
                            </a>
                        );
                    })}
                </nav>

                {/* Plans */}
                <div className="mt-10 rounded-xl border border-[#292929] p-4 text-center">
                    <p className="text-[10px] leading-4 text-gray-500">
                        Click the button below
                        <br />
                        to see the plans
                    </p>

                    <button className="mt-4 flex w-full items-center justify-center gap-2 rounded-lg border border-[#f5c400] px-2 py-2 text-xs text-[#f5c400] hover:bg-[#f5c400] hover:text-black">
                        <Ticket size={14} />

                        See plans
                    </button>
                </div>

            </div>
        </aside>
    );
}

export default Sidebar;