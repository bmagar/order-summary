import React from "react";
import "./App.css";

function App() {
  return (
    <>
      <section className="hero-section">
        <div>
          <img className="hero-image" src="/images/illustration-hero.svg" />
        </div>
        <div className="hero-info">
          <h1 className="title">Order Summary</h1>
          <p>
            You can now listen to millions of songs, audiobooks, and podcasts on
            any device anywhere you like!
          </p>
          {
            <div className="annual-plan">
              <>
                <div className="plan-box-left">
                  <img src="images/icon-music.svg" alt="" />
                  <div>
                    <h5>Annual Plan</h5>
                    <p>$55.99</p>
                  </div>
                </div>
                <a href="">Change</a>
              </>
            </div>
          }
          <a href="" className="proceed-btn">
            Proceed to Payment
          </a>
          <a href="" className="cancel-btn">
            Cancel Order
          </a>
        </div>
      </section>
    </>
  );
}

export default App;
