import React from "react";
import clock from '../../assets/icons/clock.svg'
import marker from '../../assets/icons/marker.svg'
import phone from '../../assets/icons/phone.svg'

const Info = () => {
  return (
    <div className="grid grid-cols-3 gap-4">
      <div class="card lg:card-side shadow-xl bg-gradient-to-r from-secondary to-primary">
        <figure>
          <img
            src={clock}
            alt="Album"
          />
        </figure>
        <div class="card-body text-white">
          <h2 class="card-title">Opening Hours</h2>
          <p>Click the button to listen on Spotiwhy app.</p>
        </div>
      </div>
      <div class="card lg:card-side shadow-xl bg-accent">
        <figure>
          <img
            src={marker}
            alt="Album"
          />
        </figure>
        <div class="card-body text-white">
          <h2 class="card-title">Visit Our Location</h2>
          <p>Click the button to listen on Spotiwhy app.</p>
          
        </div>
      </div>
      <div class="card lg:card-side shadow-xl bg-gradient-to-r from-secondary to-primary">
        <figure>
          <img
            src={phone}
            alt="Album"
          />
        </figure>
        <div class="card-body text-white">
          <h2 class="card-title">Contarct Us Now</h2>
          <p>Click the button to listen on Spotiwhy app.</p>
          
        </div>
      </div>
    </div>
  );
};

export default Info;
