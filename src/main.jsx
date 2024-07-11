/* NOTAS: instalar
index.html -> <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/water.css@2/out/water.css">
npm i gh-pages --save-dev
npm i react-router-dom
npm install animate.css --save
*/

import ReactDOM from "react-dom/client";
import { HashRouter, Route, Routes } from "react-router-dom";
import { App } from "./App.jsx";
import { Home } from "./components/Home.jsx";
import { About } from "./components/About.jsx";
import { CV } from "./components/CV.jsx";
import { WorkingOn } from "./components/WorkingOn.jsx";
import "./css/index.css";
import "animate.css";

ReactDOM.createRoot(document.getElementById("root")).render(
    <HashRouter>
        <Routes>
            <Route path='/' element={<App />}>
                <Route index element={<Home />} />
                {/*  <Route path='about' element={<About />} /> */}
                <Route path='about' element={<WorkingOn />} />
                {/* <Route path='cv' element={<CV />} /> */}
                <Route path='cv' element={<WorkingOn />} />
            </Route>
        </Routes>
    </HashRouter>
);
