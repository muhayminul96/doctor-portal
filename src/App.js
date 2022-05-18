import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Header from "./Pages/Shared/Header/Header";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Appointment from "../src/Pages/Appointment/Appointment";
import Login from "./Pages/Login/Login";
import Signup from "./Pages/Login/SignUp";
import RequireAuth from "./Pages/Login/RequireAuth";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './Pages/Dashboard/Dashboard'
import MyAppointments from './Pages/Dashboard/MyAppointments'
import MyReview from './Pages/Dashboard/MyReview'
import MyHistory from './Pages/Dashboard/MyHistory'


function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/appointment"
          element={
            <RequireAuth>
              <Appointment />
            </RequireAuth>
          }
        />
        <Route
          path="/dashboard"
          element={
            <RequireAuth>
              <Dashboard />
            </RequireAuth>
          }
        >
          <Route index element={<MyAppointments />} />
        <Route path="review" element={<MyReview />} />
        <Route path="history" element={<MyHistory />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
