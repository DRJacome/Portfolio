/* NOTAS: instalar
npm i gh-pages --save-dev
npm i react-router-dom
npm install animate.css --save
*/

import ReactDOM from "react-dom/client";
import { App } from "./App.jsx";
import { About } from "./components/About.jsx";
import { Home } from "./components/Home.jsx";
import { HashRouter, Route, Routes } from "react-router-dom";
import "./css/index.css";
import "animate.css";

ReactDOM.createRoot(document.getElementById("root")).render(
    <HashRouter>
        <Routes>
            <Route path='/' element={<App />}>
                <Route index element={<Home />} />
                <Route path='about' element={<About />} />
            </Route>
        </Routes>
    </HashRouter>
);
