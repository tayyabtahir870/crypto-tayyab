import React from "react";

function Hero() {
  return (
    <div>
      <div className="container-fluid mt-4">
        <h3 className="headerfontcolor">Top Collections</h3>
      </div>
      <div class="container-fluid mt-4 ">
        <div class="row">
          <div class="col">
            <div class="card back-img">
              <div className="card-body ">
                <div className="fontbottom d-flex    ">
               
                 <img className="img-fluid hideimg "
                    src="https://d2vi0z68k5oxnr.cloudfront.net/cf1d2314-9d23-4564-aa76-38ed6b4e77ad/original.png?d=sm-logo"
                    alt=""
                  />
                 
                  <h5 className="headerfontcolor hideimg cardbgcolor" >Art Blocks</h5> &nbsp;&nbsp;&nbsp;
                  <img className="img-fluid hideimg" src="Assests/bluetick.svg" alt="" />
                 </div>
                
              </div>
            </div>
          </div>

          <div class="col">
          <div class="card back-img1">
              <div className="card-body ">
                <div className="fontbottom d-flex   hideimg">
                  <img className="img-fluid hideimg"
                    src="https://d2vi0z68k5oxnr.cloudfront.net/6b32b537-c7a7-4820-a640-e39576aa8508/original.png?d=sm-logo"
                    alt=""
                  />
                 
                  <h5 className="headerfontcolor hideimg cardbgcolor" >Mutant Ape Yacht Club</h5> &nbsp;&nbsp;&nbsp;
                  <img className="img-fluid hideimg" src="Assests/bluetick.svg" alt="" />
                </div>
              </div>
            </div>
          </div>

          <div class="col">
          <div class="card back-img2">
              <div className="card-body ">
                <div className="fontbottom d-flex   hideimg">
                  <img className="img-fluid hideimg"
                    src="https://d2vi0z68k5oxnr.cloudfront.net/58e9fc18-9c9e-435a-b7dc-bf3c364fad7b/original.png?d=sm-logo"
                    alt="" width={30}
                  />
                 
                  <h5 className="headerfontcolor cardbgcolor hideimg" >Meebits</h5> &nbsp;&nbsp;&nbsp;
                  <img className="img-fluid hideimg" src="Assests/bluetick.svg" alt="" />
                </div>
              </div>
            </div>
          </div>

          <div class="col">
          <div class="card back-img3">
              <div className="card-body ">
                <div className="fontbottom d-flex   hideimg">
                  <img className="img-fluid hideimg"
                    src="https://d2vi0z68k5oxnr.cloudfront.net/e13e2f91-b3ec-45b8-b32b-a691966b9791/original.webp?d=sm-logo"
                    alt="" width={30}
                  />
                 
                  <h5 className="headerfontcolor cardbgcolor hideimg" >RENGA</h5> &nbsp;&nbsp;&nbsp;
                  <img className="img-fluid hideimg" src="Assests/bluetick.svg" alt="" />
                </div>
              </div>
            </div>
          </div>

          <div class="col">
          <div class="card back-img4">
              <div className="card-body ">
                <div className="fontbottom d-flex   hideimg">
                  <img className="img-fluid hideimg"
                    src="https://d2vi0z68k5oxnr.cloudfront.net/5d705f0f-8553-41cc-babb-973e96dc86d8/original.jpeg?d=sm-logo"
                    alt=""
                  />
                 
                  <h5 className="headerfontcolor cardbgcolor hideimg" >Otherdeed for Otherside</h5> &nbsp;&nbsp;&nbsp;
                  <img className="img-fluid hideimg" src="Assests/bluetick.svg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
