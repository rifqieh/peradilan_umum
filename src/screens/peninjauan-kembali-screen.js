import React from "react";
import DaftarPeninjauanKembali from "./components/daftar_peninjauan_kembali";
import InputPeninjauanKembali from "./components/input-peninjauan_kembali";

class PeninjauanKembaliScreen extends React.Component {
  render() {
    return (
      <div>
        <InputPeninjauanKembali />
        <br />
        <DaftarPeninjauanKembali />
      </div>
    );
  }
}

export default PeninjauanKembaliScreen;
