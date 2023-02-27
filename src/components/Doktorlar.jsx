import React from "react";

const Doktorlar = ({ secilenDoktor, setsecilenDoktor, show, setShow }) => {
    console.log(secilenDoktor)
    console.log(secilenDoktor[0])
  return (
    <div>
      {secilenDoktor.map((doktors, index) => {
        const { id, doktor, resim } = doktors;
        return (
          <div
            key={index}
            onClick={() => {
              setShow(!show);
              setsecilenDoktor([secilenDoktor[id]]);
            }}
            className="doktor-div cursor-pointer card d-flex justify-content-center flex-column mb-3 "
          >
            <img src={resim} className="doktor-resim card-img-top" alt="" />
            <div className="card-body">
              <h5 className="card-title">{doktor}</h5>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Doktorlar;
