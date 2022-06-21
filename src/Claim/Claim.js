import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import "./claim.scss";

const Claim = () => {
  return (
    <>
    <video id="myVideo" autoPlay loop>
  <source src="\assets\BLK.mp4" type="video/mp4"/>
  Your browser does not support HTML5 video.
</video>
      <section className="claim">
        <div className="container-fluid p-0">
           <Sidebar />
          <div className="row m-0">
            <div className="col-xl-6 col-12 m-auto p-0">
              <div className="box">
                <h5>You are eligible to claim the tokens</h5>
                <button className="claim">Claim Now</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Claim;
