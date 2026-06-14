import Navbar from "../components/layout/Navbar";
import Sidebar from "../components/layout/Sidebar";

export default function AppLayout() {
    return (

        <div className="min-h-screen bg-layout-bg flex">
            <Sidebar />
            <div className="min-w-0 flex-1 flex-column ">
                <Navbar />
                <main>
                    
                </main>
            </div>
        </div>
    )
}