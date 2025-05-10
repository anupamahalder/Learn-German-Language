import { Outlet } from "react-router-dom";
import { Footers } from "../UI/footers/Footers";
import { Headers } from "../UI/headers/Headers";

const AppLayout = () =>{
    return<>
        <Headers/>
        <Outlet/>
        <Footers/>
    </>;
}

export default AppLayout;