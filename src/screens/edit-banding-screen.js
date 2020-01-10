import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class EditBandingScreen extends React.Component {
  state = {
    id: 1,
    daftarGugatan: [],
    idGugatan: 1,
    tanggalBanding: "",
    tanggalPutusanBanding: "",
    idHasilPutusanBanding: 1
  };

  componentDidMount() {
    const { id } = this.props.match.params;
    axios.get("http://localhost:4000/banding/" + id).then(res => {
      this.setState({
        id: id,
        idGugatan: res.data.data[0].idGugatan,
        tanggalBanding: res.data.data[0].tanggalBanding.slice(0, 10),
        tanggalPutusanBanding: res.data.data[0].tanggalPutusanBanding.slice(
          0,
          10
        ),
        idHasilPutusanBanding: res.data.data[0].idHasilPutusanBanding
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

  editBanding = () => {
    const state = this.state;
    const Banding = {
      id: state.id,
      idGugatan: state.idGugatan,
      tanggalBanding: state.tanggalBanding,
      tanggalPutusanBanding: state.tanggalPutusanBanding,
      idHasilPutusanBanding: state.idHasilPutusanBanding
    };

    console.log(Banding);

    axios
      .post("http://localhost:4000/banding/edit/" + state.id, Banding)
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
            <label for="tanggal_sidang">Tanggal Banding</label>
            <input
              required
              value={this.state.tanggalBanding}
              type="date"
              class="form-control"
              id="tanggal_sidang"
              onChange={e => this.setState({ tanggalBanding: e.target.value })}
            />
          </div>
          <div class="form-group">
            <label for="tanggal_putusan">Tanggal Putusan Banding</label>
            <input
              value={this.state.tanggalPutusanBanding}
              required
              type="date"
              class="form-control"
              id="tanggal_putusan"
              onChange={e =>
                this.setState({ tanggalPutusanBanding: e.target.value })
              }
            />
          </div>
          <div class="form-group">
            <label for="hasil_sidang">Hasil Putusan Banding</label>
            <select
              value={this.state.idHasilPutusanBanding}
              id="hasil_sidang"
              class="form-control"
              onChange={e =>
                this.setState({ idHasilPutusanBanding: e.target.value })
              }
            >
              <option value="1" selected>
                Dimenangkan oleh Penggugat
              </option>
              <option value="2">Dimenangkan oleh Tergugat</option>
              <option value="3">Keputusan Hakim</option>
            </select>
          </div>
          <Link to="/banding">
            <button
              type="button"
              class="btn btn-primary"
              onClick={() => this.editBanding()}
            >
              Edit Data Banding
            </button>
          </Link>
        </form>
      </div>
    );
  }
}

export default EditBandingScreen;
