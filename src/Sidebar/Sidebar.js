import "./sidebar.scss";
import React, { useState } from "react";
import {Link} from "react-router-dom";
import $ from "jquery";
// import { NavLink, Link } from "react-router-dom";
$(document).ready(function () {
  $("#sidebarCollapse").on("click", function () {
    $("#sidebar").toggleClass("active");
  });
});

function Sidebar() {
  const [stickyClass, setStickyClass] = useState(false);
  const opennav = () => {
    //   console.log("we have",stickyClass)
    if (stickyClass) {
      setStickyClass(false);
    } else {
      setStickyClass(true);
    }
  };
  console.log("we have", stickyClass);
  return (
    <>
      <section className="section-2">
        <div className="button_toggle">
          <button type="button" onClick={opennav}>
            <i class="fas fa-bars"></i>
          </button>
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-3 col-lg-3 col-12 p-0 left_side">
              <div>
                <div
                  class={
                    stickyClass ? "wrapper mobileview" : "wrapper kdjdkjfdk"
                  }
                >
                  <nav id="sidebar">
                    <div class="sidebar-header position-relative">
                      <img
                        src="\assets\Frame 408.svg"
                        class="img-fluid"
                        alt=""
                      />
                    </div>
                    <ul class="list-unstyled components">
                    <li>
                        <a
                          href="https://app.blk.finance/#/dashboard"
                          className="gg"
                        >
                          <img src="\assets\icons-light\dashboard-light.svg" class="img-fluid icon claim-icon" alt="" />
                          <h6>Dashboard</h6>
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://app.blk.finance/#/bonds"
                          className="gg"
                        >
                          <img src="\assets\icons-light\bond-light.svg" class="img-fluid icon claim-icon" alt="" />
                          <h6 style={{textDecoration : "underline"}}>Bond</h6>
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://app.blk.finance/#/stake"
                          className="gg"
                        >
                          <img src="\assets\icons-light\stake-light.svg" class="img-fluid icon claim-icon" alt="" />
                          <h6>Stake</h6>
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://app.blk.finance/#/"
                          className="gg"
                        >
                          <img src="\assets\icons-light\give-light.svg" class="img-fluid icon claim-icon" alt="" />
                          <h6 style={{textDecoration : "underline"}}>Give </h6> <span className="soon">Coming soon</span>
                        </a>
                      </li>
                      <Link to="/">
                      <li>
                        <a
                          href=""
                          className="gg"
                        >
                          <img src="\assets\icons-light\zap-light.svg" class="img-fluid icon claim-icon" alt="" />
                          <h6>Mint</h6>
                        </a>
                      </li>
                      </Link>
                      <li>
                        <a
                          href="https://app.blk.finance/#/"
                          className="gg"
                        >
                          <img src="\assets\icons-light\wrap-light.svg" class="img-fluid icon claim-icon" alt="" />
                          <h6 style={{textDecoration : "underline"}}>Airdrop</h6><span className="soon">Coming soon</span>
                        </a>
                      </li>
                      <Link to="/claim">
                      <li>
                        <a
                          href=""
                          className="gg"
                        >
                          <img src="\assets\claim.png" class="img-fluid icon claim-icon" alt="" />
                          <h6>Claim</h6>
                        </a>
                      </li>
                      </Link>
                      <hr style={{backgroundColor : "rgba(255, 255, 255, 0.12)"}}/>
                      {/* <li>
                        <a
                          href="https://tell.ie/theblackdao/lYZQQAX3KwSM"
                          target="_blank"
                          className="gg"
                        >
                          <img
                            src="\assets\vuesax\bold\vuesax\bold\profile-2user.svg"
                            class="img-fluid icon"
                            alt=""
                          />
                          <h6>About</h6>
                        </a>
                      </li> */}
                      <li>
                        <a
                          href="https://discord.com/invite/N9JHyZjqK9"
                          className="gg"
                        >
                          <img src="\assets\icons-light\forum-light.svg" class="img-fluid icon claim-icon" alt="" />
                          <h6>Forum</h6>
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://vote.blk.finance/#/theblackdao.eth"
                          className="gg"
                        >
                          <img src="\assets\icons-light\governance-light.svg" class="img-fluid icon claim-icon" alt="" />
                          <h6>Governance</h6>
                        </a>
                      </li>
                      <li>
                        <a
                          href="http://docs.blk.finance/"
                          target="_blank"
                          className="gg"
                        >
                          <img
                            src="\assets\icons-light\docs-light.svg"
                            class="img-fluid icon"
                            alt=""
                          />
                          <h6>DOCS</h6>
                        </a>
                      </li>
                      <li>
                      {/* <button class="btn button-connect-sidebar d-none" data-toggle="modal" data-target="#exampleModal" type="button">
             Connect Wallet
             </button> */}
                      </li>
                    </ul>
                    
                    <div className="sidebar-footer">
                      <div class="list-unstyled CTAs">
                        <a
                          href="https://discord.com/invite/N9JHyZjqK9"
                          target="_blank"
                        >
                          <i class="fab fa-github"></i>
                        </a>
                        <a
                          href="https://twitter.com/theblackdao"
                          target="_blank"
                        >
                         <i class="fab fa-medium"></i>
                        </a>
                        <a
                          href="https://mirror.xyz/theblackdao.eth"
                          target="_blank"
                        >
                          <i class="fab fa-twitter"></i>
                        </a>
                        <a
                          href="https://github.com/The-Black-DAO"
                          target="_blank"
                        >
                         <i class="fab fa-discord"></i>
                        </a>
                      </div>
                    </div>
                  </nav>
                  <div id="content">
                    <nav class="navbar navbar-expand-lg navbar-light bg-light">
                      <div class="container-fluid">
                        <button
                          type="button"
                          id="sidebarCollapse"
                          class="btn btn-info"
                        >
                          <i class="fas fa-align-left"></i>
                          <span>Toggle Sidebar</span>
                        </button>
                        <button
                          class="btn btn-dark d-inline-block d-lg-none ml-auto"
                          type="button"
                          data-toggle="collapse"
                          data-target="#navbarSupportedContent"
                          aria-controls="navbarSupportedContent"
                          aria-expanded="false"
                          aria-label="Toggle navigation"
                        >
                          <i class="fas fa-align-justify"></i>
                        </button>
                      </div>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Sidebar;
