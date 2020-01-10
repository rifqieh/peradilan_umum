import React from "react";
import DaftarGugatan from "./components/daftar-gugatan";
import InputGugatan from "./components/input-gugatan";

class GugatanScreen extends React.Component {
  render() {
    return (
      <div>
        <InputGugatan />
        <br />
        <DaftarGugatan />
      </div>
    );
  }
}

export default GugatanScreen;
