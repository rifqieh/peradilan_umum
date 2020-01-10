import React from "react";
import Navbar from "./components/navbar";
import DaftarOrang from "./components/daftar-orang";
import DaftarGugatan from "./components/daftar-gugatan";
import DaftarMajelis from "./components/daftar-majelis";
import DaftarBanding from "./components/daftar-banding";
import DaftarKasasi from "./components/daftar-kasasi";
import DaftarPeninjauanKembali from "./components/daftar_peninjauan_kembali";

class HomeScreen extends React.Component {
  render() {
    return (
      <div>
        <hr />
        <h3>
          Daftar Orang{" "}
          <img
            height="50px"
            src="https://image.flaticon.com/icons/png/512/33/33308.png"
          />
        </h3>

        <hr />
        <DaftarOrang />
        <hr />
        <h3>
          Daftar Majelis{" "}
          <img
            height="50px"
            src="https://image.flaticon.com/icons/png/512/33/33308.png"
          />
        </h3>
        <hr />
        <DaftarMajelis />
        <hr />
        <h3>
          Daftar Gugatan{" "}
          <img
            height="50px"
            src="https://www.pinclipart.com/picdir/middle/6-61957_auction-judge-rule-hammer-court-svg-png-icon.png"
          />
        </h3>
        <hr />
        <DaftarGugatan />
        <hr />
        <h3>
          Daftar Banding{" "}
          <img
            height="50px"
            src="https://www.pinclipart.com/picdir/middle/6-61957_auction-judge-rule-hammer-court-svg-png-icon.png"
          />
        </h3>
        <hr />
        <DaftarBanding />
        <hr />
        <h3>
          Daftar Kasasi{" "}
          <img
            height="50px"
            src="https://www.pinclipart.com/picdir/middle/6-61957_auction-judge-rule-hammer-court-svg-png-icon.png"
          />
        </h3>
        <hr />
        <DaftarKasasi />
        <hr />
        <h3>
          Daftar Peninjauan Kembali{" "}
          <img
            height="50px"
            src="https://www.pinclipart.com/picdir/middle/6-61957_auction-judge-rule-hammer-court-svg-png-icon.png"
          />
        </h3>
        <hr />
        <DaftarPeninjauanKembali />
        <hr />
      </div>
    );
  }
}

export default HomeScreen;
