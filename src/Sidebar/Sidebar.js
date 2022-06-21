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
                    <div class="sidebar-header">
                      <img
                        src="\assets\Frame 408.svg"
                        class="img-fluid"
                        alt=""
                      />
                      <p>0xEC70F2A...5AEE5</p>
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
                          <h6>Bond</h6>
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
                          <h6>Give</h6>
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://mint.blk.finance/"
                          className="gg"
                        >
                          <img src="\assets\icons-light\zap-light.svg" class="img-fluid icon claim-icon" alt="" />
                          <h6>Mint</h6>
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://app.blk.finance/#/"
                          className="gg"
                        >
                          <img src="\assets\icons-light\wrap-light.svg" class="img-fluid icon claim-icon" alt="" />
                          <h6>Airdrop</h6>
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
                    </ul>
                    <div className="sidebar-footer">
                      <div class="list-unstyled CTAs">
                        <a
                          href="https://discord.com/invite/N9JHyZjqK9"
                          target="_blank"
                        >
                          <img
                            src="\assets\Vector.svg"
                            class="img-fluid links1"
                            alt=""
                          />
                        </a>
                        <a
                          href="https://twitter.com/theblackdao"
                          target="_blank"
                        >
                          <img
                            src="\assets\Vector (1).svg"
                            class="img-fluid links1"
                            alt=""
                          />
                        </a>
                        <a
                          href="https://mirror.xyz/theblackdao.eth"
                          target="_blank"
                        >
                          <img
                            src="\assets\Shape.svg"
                            class="img-fluid links1"
                            alt=""
                          />
                        </a>
                        <a
                          href="https://github.com/The-Black-DAO"
                          target="_blank"
                        >
                          <img
                            src="\assets\Cat.svg"
                            class="img-fluid links1"
                            alt=""
                          />
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
