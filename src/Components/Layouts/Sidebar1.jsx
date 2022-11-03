import React from "react";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { ProSidebarProvider } from "react-pro-sidebar";

function Sidebar1() {
  return (
    <div class="container-fluid ">
      <div class="row">
        <div class="col">
          <div className="container-fluid py-5 px-3">
            <div>
              <h3 className="headerfontcolor">Explore</h3>
            </div>
            <ProSidebarProvider>
              <Sidebar>
                <Menu>
                  <MenuItem> Filter </MenuItem>
                  <hr />
                  <SubMenu label="Listing Type">
                    <MenuItem>
                      {" "}
                      <input type="checkbox" /> Buy Now{" "}
                    </MenuItem>
                    <MenuItem>
                      {" "}
                      <input type="checkbox" /> Auction
                    </MenuItem>
                  </SubMenu>
                  <hr />
                  <SubMenu label="Curation">
                    <MenuItem>
                      {" "}
                      <input type="checkbox" /> Curated{" "}
                    </MenuItem>
                    <MenuItem>
                      {" "}
                      <input type="checkbox" /> Non-Curated
                    </MenuItem>
                  </SubMenu>
                  <hr />
                  <SubMenu label="Price">
                    <MenuItem>
                      {" "}
                      <input type="text" placeholder="$Minimum" />{" "}
                    </MenuItem>
                    <MenuItem>
                      {" "}
                      <input type="text" placeholder="$Maximum" />{" "}
                    </MenuItem>
                  </SubMenu>
                  <hr />
                  <SubMenu label="Collection">
                    <MenuItem>
                      {" "}
                      <input type="checkbox" placeholder="$Minimum" /> Art
                      Blocks{" "}
                    </MenuItem>
                    <MenuItem>
                      {" "}
                      <input type="checkbox" placeholder="$Minimum" /> Mutant
                      Ape Yacht Club{" "}
                    </MenuItem>
                    <MenuItem>
                      {" "}
                      <input type="checkbox" placeholder="$Minimum" /> Bored Ape
                      Yacht Club{" "}
                    </MenuItem>
                    <MenuItem>
                      {" "}
                      <input type="checkbox" placeholder="$Minimum" /> Otherdeed
                      for Otherside{" "}
                    </MenuItem>
                    <MenuItem>
                      {" "}
                      <input type="checkbox" placeholder="$Minimum" /> Clone X -
                      X TAKASHI{" "}
                    </MenuItem>
                    <MenuItem>
                      {" "}
                      <input
                        type="checkbox"
                        placeholder="$Minimum"
                      /> Meebits{" "}
                    </MenuItem>
                    <MenuItem>
                      {" "}
                      <input type="checkbox" placeholder="$Minimum" /> Bored Ape
                      Yacht Club{" "}
                    </MenuItem>
                    <MenuItem>
                      {" "}
                      <input
                        type="checkbox"
                        placeholder="$Minimum"
                      /> RENGA{" "}
                    </MenuItem>
                    <MenuItem>
                      {" "}
                      <input type="checkbox" placeholder="$Minimum" /> PROOF
                      Collective{" "}
                    </MenuItem>
                    <MenuItem>
                      {" "}
                      <input
                        type="checkbox"
                        placeholder="$Minimum"
                      /> Moonbirds{" "}
                    </MenuItem>
                  </SubMenu>
                  <hr />
                  <SubMenu label="Chains">
                    <MenuItem>
                      {" "}
                      <input type="checkbox" />{" "}
                      <img src="Assests/c1.svg" alt="" /> Crypto.org Chain
                    </MenuItem>
                    <MenuItem>
                      {" "}
                      <input type="checkbox" />{" "}
                      <img src="Assests/c2.svg" alt="" />
                      Cronos{" "}
                    </MenuItem>
                    <MenuItem>
                      {" "}
                      <input type="checkbox" />{" "}
                      <img src="Assests/c3.svg" alt="" />
                      Ethereum
                    </MenuItem>
                    <MenuItem>
                      {" "}
                      <input type="checkbox" />{" "}
                      <img src="Assests/c4.svg" alt="" /> Polygon
                    </MenuItem>
                    <MenuItem>
                      {" "}
                      <input type="checkbox" />{" "}
                      <img src="Assests/c5.svg" alt="" />
                      Solana
                    </MenuItem>
                  </SubMenu>
                  <hr />
                  <SubMenu label="Categories">
                    <MenuItem>
                      {" "}
                      <input type="checkbox" /> Art{" "}
                    </MenuItem>
                    <MenuItem>
                      {" "}
                      <input type="checkbox" /> Celebrities
                    </MenuItem>
                    <MenuItem>
                      {" "}
                      <input type="checkbox" /> Gaming{" "}
                    </MenuItem>
                    <MenuItem>
                      {" "}
                      <input type="checkbox" /> Sport
                    </MenuItem>
                    <MenuItem>
                      {" "}
                      <input type="checkbox" /> Music{" "}
                    </MenuItem>
                    <MenuItem>
                      {" "}
                      <input type="checkbox" /> Crypto
                    </MenuItem>
                    <MenuItem>
                      {" "}
                      <input type="checkbox" /> Cross Chain{" "}
                    </MenuItem>
                    <MenuItem>
                      {" "}
                      <input type="checkbox" /> PFP
                    </MenuItem>
                  </SubMenu>
                </Menu>
              </Sidebar>
            </ProSidebarProvider>
          </div>
        </div>
        <div class="col my-5">
          <div class="card">
            <img
              src="https://d2vi0z68k5oxnr.cloudfront.net/3644ea8d-76e1-45cb-a24f-752b0cabafc6/original.gif"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <div className="d-flex">
                <div>
                  <img
                    className="cardimg1 img-fluid "
                    src="https://d2vi0z68k5oxnr.cloudfront.net/6f1bc1d8-8e81-4640-85fe-20e8bd845be6/original.png?d=sm-logo"
                    alt=""
                    width={20}
                  />
                </div>{" "}
                &nbsp;
                <div>
                  <p className="cardtext mt-1">Cronos World Tour</p>
                </div>{" "}
                &nbsp;
                <div>
                  <img
                    className="img-fluid "
                    src="Assests/bluetick.svg"
                    alt=""
                  />
                </div>
              </div>
              <div className=" cardtext mb-2">
                Cronos World Tour at Messari Mainnet 2022
              </div>
              <div className="cardtext1">1 minted</div>

              <div className="container">
                <div className="row ">
                  <div className="col-sm-8">
                    <div className="textcard ">
                      <p className="cardtext1">Current bid</p>
                      <span className="cardtext2">$13</span>
                    </div>
                    <div className="textcard">
                      <p className="cardtext1">Ends In</p>
                      <span className="cardtext2">3 Hours</span>
                    </div>
                  </div>
                  <div className="col-sm-4 mt-3">
                    <button className="buttoncard">Bid</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col my-5">
          <div class="card">
            <img
              src="https://d2vi0z68k5oxnr.cloudfront.net/22ac4df0-b3c3-4d10-b3ef-1e8f7f2b3006/original.png?d=sm-cover"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <div className="d-flex">
                <div>
                  <img
                    className="cardimg1 img-fluid "
                    src="https://d2vi0z68k5oxnr.cloudfront.net/f51698c0-5545-4f4f-91c3-ac748e141d90/original.gif"
                    alt=""
                    width={20}
                  />
                </div>{" "}
                &nbsp;
                <div>
                  <p className="cardtext mt-1">PsychoKitties: The Rise Of Mollies</p>
                </div>{" "}
                &nbsp;
                <div>
                  <img
                    className="img-fluid "
                    src="Assests/bluetick.svg"
                    alt=""
                  />
                </div>
              </div>
              <div className=" cardtext mb-2">
              PsychoMolly #2010

              </div>
              <div className="cardtext1">1 minted</div>

              <div className="container">
                <div className="row ">
                  <div className="col-sm-8">
                    <div className="textcard ">
                      <p className="cardtext1">Current bid</p>
                      <span className="cardtext2">$60</span>
                    </div>
                    <div className="textcard">
                      <p className="cardtext1">Ends In</p>
                      <span className="cardtext2">2 Hours</span>
                    </div>
                  </div>
                  <div className="col-sm-4 mt-3">
                    <button className="buttoncard">Bid</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col my-5">
          <div class="card">
            <img
              src="https://d2vi0z68k5oxnr.cloudfront.net/3dd0aaf7-ecf0-436e-9982-78f07b68fb81/original.gif"
              class="card-img-top"
              alt="..."
            />
             <div class="card-body">
              <div className="d-flex">
                <div>
                  <img
                    className="cardimg1 img-fluid "
                    src="https://d2vi0z68k5oxnr.cloudfront.net/6f1bc1d8-8e81-4640-85fe-20e8bd845be6/original.png?d=sm-logo"
                    alt=""
                    width={20}
                  />
                </div>{" "}
                &nbsp;
                <div>
                  <p className="cardtext mt-1">Cronos World Tour</p>
                </div>{" "}
                &nbsp;
                <div>
                  <img
                    className="img-fluid "
                    src="Assests/bluetick.svg"
                    alt=""
                  />
                </div>
              </div>
              <div className=" cardtext mb-2">
                Cronos World Tour at Messari Mainnet 2022
              </div>
              <div className="cardtext1">1 minted</div>

              <div className="container">
                <div className="row ">
                  <div className="col-sm-8">
                    <div className="textcard ">
                      <p className="cardtext1">Current bid</p>
                      <span className="cardtext2">$13</span>
                    </div>
                    <div className="textcard">
                      <p className="cardtext1">Ends In</p>
                      <span className="cardtext2">3 Hours</span>
                    </div>
                  </div>
                  <div className="col-sm-4 mt-3">
                    <button className="buttoncard">Bid</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col my-5">
          <div class="card">
            <img
              src="https://d2vi0z68k5oxnr.cloudfront.net/3dd0aaf7-ecf0-436e-9982-78f07b68fb81/original.gif"
              class="card-img-top"
              alt="..."
            />
             <div class="card-body">
              <div className="d-flex">
                <div>
                  <img
                    className="cardimg1 img-fluid "
                    src="https://d2vi0z68k5oxnr.cloudfront.net/6f1bc1d8-8e81-4640-85fe-20e8bd845be6/original.png?d=sm-logo"
                    alt=""
                    width={20}
                  />
                </div>{" "}
                &nbsp;
                <div>
                  <p className="cardtext mt-1">Cronos World Tour</p>
                </div>{" "}
                &nbsp;
                <div>
                  <img
                    className="img-fluid "
                    src="Assests/bluetick.svg"
                    alt=""
                  />
                </div>
              </div>
              <div className=" cardtext mb-2">
                Cronos World Tour at Messari Mainnet 2022
              </div>
              <div className="cardtext1">1 minted</div>

              <div className="container">
                <div className="row ">
                  <div className="col-sm-8">
                    <div className="textcard ">
                      <p className="cardtext1">Current bid</p>
                      <span className="cardtext2">$13</span>
                    </div>
                    <div className="textcard">
                      <p className="cardtext1">Ends In</p>
                      <span className="cardtext2">3 Hours</span>
                    </div>
                  </div>
                  <div className="col-sm-4 mt-3">
                    <button className="buttoncard">Bid</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar1;
