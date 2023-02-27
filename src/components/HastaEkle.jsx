import React from "react";
import { useState } from "react";
import dataDoktor from "../helpers/dataDoktor";


const HastaEkle = ({ hastaListesiData,sethastaListesiData,show,setShow,secilenDoktor,setsecilenDoktor }) => {
//   console.log(dataHasta);
//   const [hastaLİstesiData, sethastaLİstesiData] = useState(dataHasta);
  console.log(hastaListesiData);
  const [hasta, setHasta] = useState("");
  const [day, setDay] = useState("");
  //   console.log(hasta)
  //   console.log(day)
  const handleSubmit = (e) => {
    e.preventDefault();
    const yeniHasta = {
      id: hastaListesiData.length + 1,
      bittimi: false,
      text: hasta,
      day: day,
      doktor: secilenDoktor[0].doktor,
    };
    sethastaListesiData([yeniHasta,...hastaListesiData ]);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Hasta Bilgileri</label>
          <input
            type="text"
            value={hasta}
            onChange={(e) => setHasta(e.target.value)}
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Date & Time</label>
          <input
            type="date"
            value={day}
            onChange={(e) => setDay(e.target.value)}
            className="form-control"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          {(secilenDoktor[0].doktor).toUpperCase()} İÇİN KAYIT OLUŞTUR
        </button>
        <button
          className="btn anasayfa btn-warning"
          onClick={() => {
            setShow(!show);
            setsecilenDoktor(dataDoktor);
          }}
        >
          ANA SAYFA
        </button>
      </form>
    </div>
  );
};

export default HastaEkle;
