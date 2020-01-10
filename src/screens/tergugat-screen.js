import React from "react";
import DaftarTergugat from "./components/daftar-tergugat";
import InputTergugat from "./components/input-tergugat";

class PenggugatScreen extends React.Component {
  render() {
    return (
      <div>
        <InputTergugat />
        <br />
        <DaftarTergugat />
      </div>
    );
  }
}

export default PenggugatScreen;
