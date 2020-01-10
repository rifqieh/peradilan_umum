import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class EditMajelisScreen extends React.Component {
  state = {
    id: null,
    nip: "",
    nama: "",
    jabatan: 1
  };

  componentDidMount() {
    const { id } = this.props.match.params;
    axios
      .get("http://localhost:4000/majelis/" + id)
      .then(res => {
        this.setState({
          id: res.data.data[0].id,
          nip: res.data.data[0].nip,
          nama: res.data.data[0].nama,
          jabatan: res.data.data[0].idJabatan
        });
        console.log(res.data.data[0]);
      })
      .catch(err => console.log(err));
  }

  editMajelis = () => {
    const majelis = {
      nip: this.state.nip,
      nama: this.state.nama,
      jabatan: this.state.jabatan
    };
    console.log(majelis);
    axios
      .post("http://localhost:4000/majelis/edit/" + this.state.id, majelis)
      .then(res => {
        alert("Berhasil diedit!");
        window.location.reload();
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <form>
          <div class="form-group">
            <label for="nip">NIP</label>
            <input
              value={this.state.nip}
              type="text"
              class="form-control"
              id="nip"
              placeholder="1234"
              onChange={e => this.setState({ nip: e.target.value })}
            />
          </div>
          <div class="form-group">
            <label for="nama">Nama</label>
            <input
              value={this.state.nama}
              type="text"
              class="form-control"
              id="nama"
              placeholder="Rifqi Ganteng S.H."
              onChange={e => this.setState({ nama: e.target.value })}
            />
          </div>
          <div class="form-group">
            <label for="jabatan">Jabatan</label>
            <select
              value={this.state.jabatan}
              id="jabatan"
              class="form-control"
              onChange={e => this.setState({ jabatan: e.target.value })}
            >
              <option value="1" selected>
                Hakim Ketua
              </option>
              <option value="2">Hakim Anggota</option>
              <option value="3">Panitera</option>
            </select>
          </div>
          <Link to="/majelis">
            <button
              type="submit"
              class="btn btn-primary"
              onClick={() => this.editMajelis()}
            >
              Edit Data Majelis
            </button>
          </Link>
        </form>
      </div>
    );
  }
}

export default EditMajelisScreen;
