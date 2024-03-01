import React from "react";

const Messages = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="card p-5">
              <div className="card-header">
                <div className="card-title">
                  <h5>Messages</h5>
                </div>
              </div>
              <div className="card-body">
                <div className="card">
                  <div
                    className="card-header"
                    style={{backgroundColor: "#005b96"}}
                  >
                    <div className="w-25">
                      <img
                        src="../../public/img/reinielimage.jpg"
                        alt="ReinielIMage"
                        className="w-25 rounded-circle"
                      />{" "}
                      <span style={{marginLeft: "20px", color: "#dff1ff"}}>
                        Reiniel
                      </span>
                    </div>
                  </div>
                  <div className="card-body">
                    <div
                      className="card p-3"
                      style={{
                        padding: "20px",
                        maxWidth: "30ch",
                        marginLeft: "auto",
                      }}
                    >
                      Ako to si Jamaine I love you
                    </div>
                    <div
                      className="card p-3"
                      style={{
                        padding: "20px",
                        maxWidth: "30ch",
                        marginRight: "auto",
                      }}
                    >
                      I Love you too
                    </div>
                  </div>
                  <div className="card-footer d-flex">
                    <input type="text" className="form-control" />
                    <span className="px-2">
                      <button className="btn btn-primary">Send</button>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Messages;
