import React from "react";
import InputMajelis from "./components/input-majelis";
import DaftarMajelis from "./components/daftar-majelis";

class MajelisScreen extends React.Component {
  render() {
    return (
      <div>
        <InputMajelis />
        <br />
        <DaftarMajelis />
      </div>
    );
  }
}

export default MajelisScreen;
