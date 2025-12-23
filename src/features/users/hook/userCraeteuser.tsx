import React from "react";


// confirmguarion and developers   
// estoner Loyer -- developer    
interface RetornarElement {
  Chanugelement: (e: React.ChangeEvent<HTMLInputElement>) => void;
  ExportJugaite: () => void;
}

const userCraeteuser = (): RetornarElement => {
  const Chanugelement = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };
  const ExportJugaite = () => {
    console.log("Exporter juegue");
  };

  return {
    Chanugelement,
    ExportJugaite,
  };
};

export default userCraeteuser;
