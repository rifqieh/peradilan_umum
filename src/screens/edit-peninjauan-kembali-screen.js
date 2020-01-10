import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class EditPeninjauanKembali extends React.Component {
  state = {
    id: 1,
    daftarGugatan: [],
    idGugatan: 1,
    tanggalPeninjauanKembali: "",
    tanggalPutusanPeninjauanKembali: "",
    idHasilPutusanPeninjauanKembali: 1
  };

  componentDidMount() {
    const { id } = this.props.match.params;
    axios.get("http://localhost:4000/peninjauan-kembali/" + id).then(res => {
      this.setState({
        id: id,
        idGugatan: res.data.data[0].idGugatan,
        tanggalPeninjauanKembali: res.data.data[0].tanggalPeninjauanKembali.slice(
          0,
          10
        ),
        tanggalPutusanPeninjauanKembali: res.data.data[0].tanggalPutusanPeninjauanKembali.slice(
          0,
          10
        ),
        idHasilPutusanPeninjauanKembali:
          res.data.data[0].idHasilPutusanPeninjauanKembali
      });
    });

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

  editPeninjauanKembali = () => {
    const state = this.state;
    const PeninjauanKembali = {
      id: state.id,
      idGugatan: state.idGugatan,
      tanggalPeninjauanKembali: state.tanggalPeninjauanKembali,
      tanggalPutusanPeninjauanKembali: state.tanggalPutusanPeninjauanKembali,
      idHasilPutusanPeninjauanKembali: state.idHasilPutusanPeninjauanKembali
    };

    console.log(PeninjauanKembali);

    axios
      .post(
        "http://localhost:4000/peninjauan-kembali/edit/" + state.id,
        PeninjauanKembali
      )
      .then(res => {
        alert("Berhasil diubah");
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
              value={this.state.idGugatan}
            >
              {this.daftarGugatan()}
            </select>
          </div>

          <div class="form-group">
            <label for="tanggal_sidang">Tanggal Peninjauan Kembali</label>
            <input
              required
              value={this.state.tanggalPeninjauanKembali}
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
              value={this.state.tanggalPutusanPeninjauanKembali}
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
              value={this.state.idHasilPutusanPeninjauanKembali}
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
          <Link to="/peninjauan-kembali">
            <button
              type="button"
              class="btn btn-primary"
              onClick={() => this.editPeninjauanKembali()}
            >
              Edit Data Peninjauan Kembali
            </button>
          </Link>
        </form>
      </div>
    );
  }
}

export default EditPeninjauanKembali;
