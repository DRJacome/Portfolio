import { Outlet } from "react-router-dom";
import { Header } from "./components/Header";
import { MenuNav } from "./components/MenuNav";

export function App() {
    return (
        <main>
            <div className="animate__animated animate__fadeInDown">
                <Header />
                <MenuNav />
            </div>
            <Outlet />
        </main>
    );
}
