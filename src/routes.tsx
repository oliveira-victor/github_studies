import { Route, Routes } from "react-router-dom";

import ListsBoard from "./containers/ListsBoard";
import Animals from "./components/Animals";
import Sports from "./components/Sports";
import Food from "./components/Food";

const Pages = () => (
    <Routes>
        <Route path="/" element={<ListsBoard />} />
        <Route path="/animais" element={<Animals />} />
        <Route path="/esportes" element={<Sports />} />
        <Route path="/comidas" element={<Food />} />
    </Routes>
)

export default Pages