import "./nav.scss";
import React, { useState } from "react";
import $ from "jquery";
// import { NavLink, Link } from "react-router-dom";
$(document).ready(function () {
  $("#sidebarCollapse").on("click", function () {
    $("#sidebar").toggleClass("active");
  });
});

function Nav() {
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
      <section className="section-1">
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
                          href="http://www.blk.finance/"
                          target="_blank"
                          className="gg"
                        >
                          <img
                            src="\assets\vuesax\bold\vuesax\bold\home-2.svg"
                            class="img-fluid icon"
                            alt=""
                          />
                          <h6>Home</h6>
                        </a>
                      </li>
                      <li>
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
                      </li>
                      <li>
                        <a
                          href="http://docs.blk.finance/"
                          target="_blank"
                          className="gg"
                        >
                          <img
                            src="\assets\vuesax\bold\vuesax\bold\document-text.svg"
                            class="img-fluid icon"
                            alt=""
                          />
                          <h6>DOCS</h6>
                        </a>
                      </li>
                      <li>
                        <a
                          href=""
                          className="gg"
                          data-toggle="modal" data-target="#claim"
                        >
                          <img src="\assets\claim.png" class="img-fluid icon claim-icon" alt="" />
                          <h6>Claim</h6>
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
            <div className="col-xl-9 col-lg-9 col-12 p-0 right_side">
              <div className="main">
                <nav>
                  {/* <div className="btn">
                    <button className="btn-1">
                      <img
                        src="\assets\vuesax\bold\vuesax\bold\wallet-3.svg"
                        class="img-fluid "
                        alt="img"
                      />{" "}
                      Connect Wallet
                    </button>
                  </div> */}
                </nav>
              </div>
              <div className="bg-img">
                <div className="row m-0">
                  <div className="col-xl-8 col-12 m-auto">
                    <div className="mint-11">
                      <nervous-minter>
                        contract-address="0x0b471580741c3360Ed14C7cf084C739efC7d5204"
                        quantity-options="1,2,3,4,5,6,7,8,9,10" network="1"
                      </nervous-minter>
                      <h4 className="heading-main">
                        Abstract Diaspora Club Overview{" "}
                      </h4>
                      <p className="para-main">
                        As our first NFT collection, we will focus on honoring
                        one of the most prominent and highest selling,
                        post-mortem, Black painters and artists of all time,
                        Jean Michael-Basquiat, in collaboration with Animation
                        artist, and musician HighWestHus. <br /> These
                        generative pieces will include elements inspired by his
                        signature style of abstract expressionism, while also
                        including attributes representing diversity and
                        inclusion. Effectively giving our platform an aesthetic
                        identity outside of our economic structure and mission,
                        while also providing initial liquidity to treasury and
                        LPs. <br />
                        Mint Price: 0.05 ETH
                        <br />
                        Editions: 10,000
                        <br />
                        Attributes: 200+
                        <br />
                        No Roadmap
                        <br />
                        No Whitelists No Private Sale
                        <br />
                        No Discord Grinding
                        <br />
                        Similar to popular art generating reserve currency
                        projects, such as Squid DAO and NOUNS, this collection
                        aims to bring a stream of revenue to our DAO’s treasury,
                        and support our commitment to funding Black and African
                        creatives. In addition, these tokens will act as a
                        non-inflationary tool and an effective alternative to
                        excessive rebasing tokenomics.
                        <br />
                      </p>
                    </div>
                  </div>
                </div>
                <div className="upper_image">
                  <img
                    src="assets\images\down.svg"
                    class="img-fluid"
                    alt="img"
                  />
                </div>
                <div className="circle_image  dkmsmmkss">
                  <img
                    src="assets\images\circle.svg"
                    class="img-fluid dkmsmmks"
                    alt="img"
                  />
                </div>
                <div>
                  <h6>Mint Page</h6>
                </div>
                <div className="down_image">
                  <img
                    src="assets\images\upper.svg"
                    class="img-fluid"
                    alt="img"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="modal-claim">
        <div
          class="modal fade"
          id="claim"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-body">
                  <h5>You are eligible to claim the tokens</h5>
                  <button className="claim">
                  Claim Now
                  </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Nav;
