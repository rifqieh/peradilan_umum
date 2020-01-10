import React from "react";
import axios from "axios";

class InputPeninjauanKembali extends React.Component {
  state = {
    daftarGugatan: [],
    idGugatan: 1,
    tanggalPeninjauanKembali: "",
    tanggalPutusanPeninjauanKembali: "",
    idHasilPutusanPeninjauanKembali: 1
  };

  componentDidMount() {
    axios.get("http://localhost:4000/gugatan").then(res => {
      this.setState({
        daftarGugatan: res.data.data
      });
      console.log(res.data.data);
    });
  }

  daftarGugatan = () => {
    return this.state.daftarGugatan.map(val => {
      return (
        <option value={val.id} key={val.id}>
          {val.noGugatan}
        </option>
      );
    });
  };

  tambahPeninjauanKembali = () => {
    const state = this.state;
    const PeninjauanKembali = {
      idGugatan: state.idGugatan,
      tanggalPeninjauanKembali: state.tanggalPeninjauanKembali,
      tanggalPutusanPeninjauanKembali: state.tanggalPutusanPeninjauanKembali,
      idHasilPutusanPeninjauanKembali: state.idHasilPutusanPeninjauanKembali
    };

    console.log(PeninjauanKembali);

    axios
      .post(
        "http://localhost:4000/peninjauan-kembali/tambah",
        PeninjauanKembali
      )
      .then(res => {
        alert("Berhasil ditambahkan");
        console.log(res.data);
        window.location.reload();
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <form>
          <div class="form-group">
            <label for="no_gugatan">No. Gugatan</label>
            <select
              id="no_gugatan"
              class="form-control"
              onChange={e => this.setState({ idGugatan: e.target.value })}
            >
              {this.daftarGugatan()}
            </select>
          </div>

          <div class="form-group">
            <label for="tanggal_sidang">Tanggal Peninjauan Kembali</label>
            <input
              required
              type="date"
              class="form-control"
              id="tanggal_sidang"
              onChange={e =>
                this.setState({ tanggalPeninjauanKembali: e.target.value })
              }
            />
          </div>
          <div class="form-group">
            <label for="tanggal_putusan">
              Tanggal Putusan Peninjauan Kembali
            </label>
            <input
              required
              type="date"
              class="form-control"
              id="tanggal_putusan"
              onChange={e =>
                this.setState({
                  tanggalPutusanPeninjauanKembali: e.target.value
                })
              }
            />
          </div>
          <div class="form-group">
            <label for="hasil_sidang">Hasil Putusan Peninjauan Kembali</label>
            <select
              id="hasil_sidang"
              class="form-control"
              onChange={e =>
                this.setState({
                  idHasilPutusanPeninjauanKembali: e.target.value
                })
              }
            >
              <option value="1" selected>
                Dimenangkan oleh Penggugat
              </option>
              <option value="2">Dimenangkan oleh Tergugat</option>
              <option value="3">Keputusan Hakim</option>
            </select>
          </div>
          <button
            type="button"
            class="btn btn-primary"
            onClick={() => this.tambahPeninjauanKembali()}
          >
            Tambah Data PeninjauanKembali
          </button>
        </form>
      </div>
    );
  }
}

export default InputPeninjauanKembali;
