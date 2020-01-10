import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class EditKasasiScreen extends React.Component {
  state = {
    id: 1,
    daftarGugatan: [],
    idGugatan: 1,
    tanggalKasasi: "",
    tanggalPutusanKasasi: "",
    idHasilPutusanKasasi: 1
  };

  componentDidMount() {
    const { id } = this.props.match.params;
    axios.get("http://localhost:4000/kasasi/" + id).then(res => {
      this.setState({
        id: id,
        idGugatan: res.data.data[0].idGugatan,
        tanggalKasasi: res.data.data[0].tanggalKasasi.slice(0, 10),
        tanggalPutusanKasasi: res.data.data[0].tanggalPutusanKasasi.slice(
          0,
          10
        ),
        idHasilPutusanKasasi: res.data.data[0].idHasilPutusanKasasi
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

  editKasasi = () => {
    const state = this.state;
    const kasasi = {
      id: state.id,
      idGugatan: state.idGugatan,
      tanggalKasasi: state.tanggalKasasi,
      tanggalPutusanKasasi: state.tanggalPutusanKasasi,
      idHasilPutusanKasasi: state.idHasilPutusanKasasi
    };

    console.log(kasasi);

    axios
      .post("http://localhost:4000/kasasi/edit/" + state.id, kasasi)
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
            <label for="tanggal_sidang">Tanggal Kasasi</label>
            <input
              required
              value={this.state.tanggalKasasi}
              type="date"
              class="form-control"
              id="tanggal_sidang"
              onChange={e => this.setState({ tanggalKasasi: e.target.value })}
            />
          </div>
          <div class="form-group">
            <label for="tanggal_putusan">Tanggal Putusan Kasasi</label>
            <input
              value={this.state.tanggalPutusanKasasi}
              required
              type="date"
              class="form-control"
              id="tanggal_putusan"
              onChange={e =>
                this.setState({ tanggalPutusanKasasi: e.target.value })
              }
            />
          </div>
          <div class="form-group">
            <label for="hasil_sidang">Hasil Putusan Kasasi</label>
            <select
              value={this.state.idHasilPutusanKasasi}
              id="hasil_sidang"
              class="form-control"
              onChange={e =>
                this.setState({ idHasilPutusanKasasi: e.target.value })
              }
            >
              <option value="1" selected>
                Dimenangkan oleh Penggugat
              </option>
              <option value="2">Dimenangkan oleh Tergugat</option>
              <option value="3">Keputusan Hakim</option>
            </select>
          </div>
          <Link to="/kasasi">
            <button
              type="button"
              class="btn btn-primary"
              onClick={() => this.editKasasi()}
            >
              Edit Data Kasasi
            </button>
          </Link>
        </form>
      </div>
    );
  }
}

export default EditKasasiScreen;
