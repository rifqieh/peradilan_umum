import React from "react";
import axios from "axios";

class InputMajelis extends React.Component {
  state = {
    nip: "",
    nama: "",
    jabatan: 1
  };

  tambahMajelis = () => {
    const majelis = {
      nip: this.state.nip,
      nama: this.state.nama,
      jabatan: this.state.jabatan
    };
    console.log(majelis);
    axios
      .post("http://localhost:4000/majelis/tambah", majelis)
      .then(res => {
        alert("Berhasil ditambahkan!");
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
              type="text"
              class="form-control"
              id="nip"
              placeholder="Input NIP"
              onChange={e => this.setState({ nip: e.target.value })}
            />
          </div>
          <div class="form-group">
            <label for="nama">Nama</label>
            <input
              type="text"
              class="form-control"
              id="nama"
              placeholder="Input Nama"
              onChange={e => this.setState({ nama: e.target.value })}
            />
          </div>
          <div class="form-group">
            <label for="jabatan">Jabatan</label>
            <select
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
          <button
            type="button"
            class="btn btn-primary"
            onClick={() => this.tambahMajelis()}
          >
            Tambah Data Majelis
          </button>
        </form>
      </div>
    );
  }
}

export default InputMajelis;
