import React from "react";
import DaftarOrang from "./components/daftar-orang";
import InputOrang from "./components/input-orang";

class OrangScreen extends React.Component {
  render() {
    return (
      <div>
        <InputOrang />
        <br />
        <DaftarOrang />
      </div>
    );
  }
}

export default OrangScreen;
