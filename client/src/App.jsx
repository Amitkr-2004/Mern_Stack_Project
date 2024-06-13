import {BrowserRouter,Routes,Route} from "react-router-dom"
import {Home} from "./Pages/Home";
import {Contact}  from "./Pages/Contact";
import {About} from "./Pages/About";
import {Register} from "./Pages/Register";
import {Login} from "./Pages/Login";
import {Service}  from "./Pages/Service";
import {Navbar } from "./components/Navbar";
import { Error } from "./Pages/Error";
import { Footer } from "./components/Footer/Footer";
import {Logout} from "./Pages/Logout"
import { AdminLayout } from "./components/layouts/Admin_Layout";
import { AdminUsers } from "./Pages/Admin_Users";
import { AdminContact } from "./Pages/Admin_Contact";
import { AdminUpdate } from "./Pages/Admin_Update";

const App = () =>{
  return(
    <>

  <BrowserRouter>
  <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />}/>
      <Route path="/about" element={<About />}/>
      <Route path="/service" element={<Service />}/>
      <Route path="/register" element={<Register />}/>
      <Route path="/login" element={<Login />}/>
      <Route path="/logout" element={<Logout />} />
      <Route path="*" element={<Error />}/>

      {/* Nested route for admin panel*/}

      <Route path="/admin" element={<AdminLayout />}>   
        <Route path="users" element={<AdminUsers />}/>
        <Route path="users/:id/edit" element={<AdminUpdate />}/>
        <Route path="contacts" element={<AdminContact />}/>
      </Route>
    </Routes>
  <Footer />
  </BrowserRouter>

  </>
  )
}

export default App;