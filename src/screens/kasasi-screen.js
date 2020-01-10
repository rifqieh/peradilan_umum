import React from "react";
import DaftarKasasi from "./components/daftar-kasasi";
import InputKasasi from "./components/input-kasasi";

class GugatanScreen extends React.Component {
  render() {
    return (
      <div>
        <InputKasasi />
        <br />
        <DaftarKasasi />
      </div>
    );
  }
}

export default GugatanScreen;
