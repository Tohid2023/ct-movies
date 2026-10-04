import { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";

function Layout() {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <div className="min-h-screen bg-[#171717] text-white">
            <Sidebar
                open={sidebarOpen}
                setOpen={setSidebarOpen}
            />

            <div className="lg:ml-[180px]">
                <Header
                    setSidebarOpen={setSidebarOpen}
                />

                <main className="px-5 py-6 md:px-8 lg:px-10">
                    <Outlet />
                </main>
            </div>
        </div>
    );
}

export default Layout;