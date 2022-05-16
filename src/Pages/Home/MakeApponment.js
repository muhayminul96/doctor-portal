import React from "react";
import doctor from "../../assets/images/doctor.png";
import appoinment from "../../assets/images/appointment.png";

const MakeApponment = () => {
  return (
    <div
      style={{ background: `url(${appoinment})` }}
      className="flex justify-center items-center"
    >
      <div className="flex-1 mt-[-120px] hidden lg:block">
        <img src={doctor} alt="" />
      </div>
      <div className="flex-1 mx-20">
        <h3 className="text-xl text-primary">Appointment</h3>
        <h2 className="text-3xl text-white">Make an appointment Today </h2>
        <p className=" text-white">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsumis that it has a more-or-less normal distribution of
          letters,as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishing packages and web
          page
        </p>
        <button className="btn btn-primary uppercase font-bold text-white bg-gradient-to-r from-secondary to-primary">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default MakeApponment;
