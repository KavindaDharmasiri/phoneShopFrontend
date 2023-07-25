import React from "react";
import {Route, Routes} from "react-router-dom";

import FirstHomePage from "../components/Pages/FirstHomePageFormt";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AdminDashboard from "../pages/AdminDashBoard"
import DefaultPhoneManage from "../components/Pages/Admin/AdminPhoneManageFormat";
import DefaultPhoneAdd from "../components/Pages/Admin/AdminAddPhoneFormat";
import DefaultPhoneEdit from "../components/Pages/Admin/AdminEditPhoneFormat";
import DefaultUserManage from "../components/Pages/Admin/AdminUserManageFormat";
import DefaultUserDash from "../components/Pages/User/UserDashboardFormat";
import BuyPhonePage from "../components/Pages/User/BuyPhoneFormat";
import DefaultOrder from "../components/Pages/User/orderPhones";
import DefaultBuyFinal from "../components/Pages/User/phoneBuyFinalpage";
import DefaultCompleatOrder from "../components/Pages/User/compleatOrders";
import PendingOrders from "../components/Pages/Admin/PendingOrdersFormat";
import SuccessOrder from "../components/Pages/Admin/SuccessOrdersFormat";
import RejectOrder from "../components/Pages/Admin/RejectOrdersFormat";



function App() {
    return (
        <Routes>
            <Route path='/' element={<FirstHomePage/>}/>
            <Route path='login' element={<Login/>}/>
            <Route path='register' element={<Register/>}/>
            <Route path='admindash' element={<AdminDashboard/>}/>
            <Route path='managephone' element={<DefaultPhoneManage/>}/>
            <Route path='addphone' element={<DefaultPhoneAdd/>}/>
            <Route path='editphone' element={<DefaultPhoneEdit/>}/>
            <Route path='manageuser' element={<DefaultUserManage/>}/>
            <Route path='userdash' element={<DefaultUserDash/>}/>
            <Route path='userdash' element={<DefaultUserDash/>}/>
            <Route path='userbuyphone' element={<BuyPhonePage/>}/>
            <Route path='ordercart' element={<DefaultOrder/>}/>
            <Route path='buyFinal' element={<DefaultBuyFinal/>}/>
            <Route path='completOrder' element={<DefaultCompleatOrder/>}/>
            <Route path='pendingOrder' element={<PendingOrders/>}/>
            <Route path='successOrder' element={<SuccessOrder/>}/>
            <Route path='rejectOrder' element={<RejectOrder/>}/>


        </Routes>

    );
}

export default App;
