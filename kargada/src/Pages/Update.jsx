import React from "react";

const Update = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="card p-5">
              <div className="card-header">
                <div className="card-title">
                  <h5>Updates</h5>
                </div>
                <div className="card-body">
                  <div className="row">
                    <div className="col-12">
                      <div className="row d-flex justify-content-end">
                        <div className="col-3">Packaging</div>
                        <div className="col-3">Picked up</div>
                        <div className="col-3">On Going</div>
                        <div className="col-3">Delivered</div>
                      </div>
                      <div class="progress">
                        <div
                          class="progress-bar"
                          role="progressbar"
                          style={{width: "100%"}}
                          aria-valuenow="100"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Update;
