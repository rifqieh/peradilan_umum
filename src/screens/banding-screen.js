import React from "react";
import DaftarBanding from "./components/daftar-banding";
import InputBanding from "./components/input-banding";

class GugatanScreen extends React.Component {
  render() {
    return (
      <div>
        <InputBanding />
        <br />
        <DaftarBanding />
      </div>
    );
  }
}

export default GugatanScreen;
