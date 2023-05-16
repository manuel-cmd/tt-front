import React from "react";
//import SitiosInteres from "../../../components/Views/Cuadros/Administrador/SitiosInteres";
import ListaSitios from "../../../components/Views/Cuadros/LisitaSitiosNoRegistrado";
//import Filtros from "../../../components/Views/Filtros/Filtros";

const Sitios = () => {
  //const [filtros, setFiltros] = useState([]);

  /*const handleSubmit = async (opcion, e) => {
    e.preventDefault();
    console.log("filtros: ", filtros);
    //console.log(process.env.REACT_APP_API);
  };*/
  return (
    <div>
      {/*<Filtros inputValue={filtros} onInputValueChange={setFiltros} />*/}
      {/*console.log("filtros: ", filtros)*/}
      <ListaSitios />
    </div>
  );
};

export default Sitios;
