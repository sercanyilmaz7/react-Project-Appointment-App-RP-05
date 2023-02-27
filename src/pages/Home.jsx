import React from "react";
import HastaEkle from "../components/HastaEkle";
import HastaListesi from "../components/HastaListesi";
import dataDoktor from "../helpers/dataDoktor";
import dataHasta from "../helpers/dataHasta";
import { useState } from "react";
import Doktorlar from "../components/Doktorlar";

const Home = () => {
  //   console.log(dataDoktor);
  const [hastaLİstesiData, sethastaLİstesiData] = useState(dataHasta);
  const [secilenDoktor
    , setsecilenDoktor
] = useState(dataDoktor)
  const [show, setShow] = useState(true);

  return (
    <div className="container d-flex justify-content-center  flex-column">
      <h1 className="text-center">Appointment</h1>
      <div className="row">
        {/* <div></div> */}

        <div className="col-2">
          <Doktorlar
            show={show}
            setShow={setShow}
            secilenDoktor={secilenDoktor}
            setsecilenDoktor={setsecilenDoktor}
          />
          {show || (
            <HastaEkle
              show={show}
              setShow={setShow}
              hastaLİstesiData={hastaLİstesiData}
              sethastaLİstesiData={sethastaLİstesiData}
              secilenDoktor={secilenDoktor}
              setsecilenDoktor={setsecilenDoktor}
            />
          )}
        </div>

        {/* <div></div> */}

        <div className=" d-flex justify-content-start align-items-end flex-column col-10">
          {hastaLİstesiData.map((hasta, index) => {
            return (
              <HastaListesi
                key={index}
                hasta={hasta}
                secilenDoktor={secilenDoktor}
                hastaLİstesiData={hastaLİstesiData}
                sethastaLİstesiData={sethastaLİstesiData}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
