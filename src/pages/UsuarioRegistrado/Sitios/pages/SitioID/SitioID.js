import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SitiosInteres from "../../../../../components/Views/Cuadros/Administrador/SitiosInteres";

const SitioID = () => {
  const { id } = useParams();

  const [contador, setContador] = useState(0);

  const handleIncrementar = () => {
    setContador(contador + 1);
    //console.log(e.target.name)
  };

  const handleDecrementar = () => {
    setContador(contador - 1);
    //console.log(e.target.name)
  };

  useEffect(() => {
    console.log("Cambie mi estado");
  }, [contador]);

  return (
    <div>
      SITIOS {id}
      <div className="contador">
        Contador: {contador}
        <button name="bnt1" onClick={() => handleIncrementar()}>
          Incrementar
        </button>
        <button name="bnt2" onClick={() => handleDecrementar()}>
          Decremenatr
        </button>
      </div>
    </div>
  );
};

export default SitioID;
