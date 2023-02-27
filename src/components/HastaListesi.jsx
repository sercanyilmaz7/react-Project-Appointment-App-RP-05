import React from "react";
import "./HastaListesi.css";
import { useState } from "react";
import { MdDeleteSweep } from "react-icons/md";

const HastaListesi = ({
  hasta,
  secilenDoktor,
  hastaListesiData,
  sethastaListesiData,
}) => {
  const [hastaOk, setHastaOk] = useState("");
  const { id, text, day, doktor, bittiMi } = hasta;

  const handleDelete = () => {
    sethastaListesiData(
      (hastaListesiData = hastaListesiData.filter((i) => {
        return i.id !== id;
      }))
    );
  };

  const handleOk = () => {
    setHastaOk(!hastaOk);
    sethastaListesiData(
      hastaListesiData.map((i) => {
        return i.id === id ? { ...i, bittiMi: !i.bittiMi } : i;
      })
    );
  };

  //   console.log(hasta);
  console.log(secilenDoktor);

  return (
    <div className="my-1 w-100  ">
      {secilenDoktor.length > 1 ? (
        <div
          onDoubleClick={handleOk}
          className={
            bittiMi
              ? "border  bg-success hastadiv"
              : "border  bg-danger hastadiv"
          }
        >
          <h4 className="text">{text}</h4>
          <p className="day">{day}</p>
          <h3 className="hasta-doktor">{doktor}</h3>
          <h3 className="hasta3">
            {bittiMi ? "Hasta ile ilgilenildi" : "Hasta Beklemede"}
          </h3>
          <MdDeleteSweep onClick={handleDelete} className="delete-icon h4" />
        </div>
      ) : (
        secilenDoktor[0].doktor === doktor && (
          <div
            onDoubleClick={handleOk}
            className={
              bittiMi
                ? "border  bg-success hastadiv"
                : "border  bg-danger hastadiv"
            }
          >
            <h4 className="text">{text}</h4>
            <p className="day">{day}</p>
            <h3 className="hasta-doktor">{doktor}</h3>
            <h3 className="hasta3">
              {bittiMi ? "Hasta ile ilgilenildi" : "Hasta Beklemede"}
            </h3>
            <MdDeleteSweep className="delete-icon h4" />
          </div>
        )
      )}
    </div>
  );
};

export default HastaListesi;
