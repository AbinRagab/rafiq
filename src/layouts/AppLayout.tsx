import { useState } from "react";
import Navbar from "../components/layout/Navbar";
import Sidebar from "../components/layout/Sidebar";

export default function AppLayout() {

    const [mobileOpen, setMobileOpen] = useState(false);
    
    return (

        <div className="min-h-screen bg-layout-bg flex">
            <Sidebar  mobileOpen={mobileOpen} onCloseMobile={() => setMobileOpen(false)} />
            <div className="min-w-0 flex-1 flex flex-col">
                <Navbar onOpenSidebar={() => setMobileOpen(true)} />
            <main>
                    
                </main>
            </div>
        </div>
    )
}