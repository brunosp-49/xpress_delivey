import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddressList from "../pages/addressList";
import AddressCreate from "../pages/addressCreate";
import AddressEdit from "../pages/addressEdit";


function Redirect() {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<AddressList />} />
                <Route path="/create" element={<AddressCreate />} />
                <Route path="/edit/:id" element={<AddressEdit />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Redirect;