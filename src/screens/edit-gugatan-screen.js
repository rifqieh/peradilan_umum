import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class EditGugatanScreen extends React.Component {
  state = {
    id: null,
    noGugatan: "",
    idPerkara: 1,
    idKategori: 1,
    idPenggugat: 1,
    idTergugat: 1,
    tanggalDaftarGugatan: "",
    idHakimKetua: 1,
    idHakimAnggota1: 1,
    idHakimAnggota2: 1,
    idPanitera: 1,
    tanggalSidang: "",
    tanggalPutusan: "",
    idHasilSidang: 1,

    daftarPenggugat: [],
    daftarTergugat: [],
    daftarHakimKetua: [],
    daftarHakimAnggota: [],
    daftarPanitera: []
  };

  componentDidMount() {
    const { id } = this.props.match.params;
    axios
      .get("http://localhost:4000/gugatan/" + id)
      .then(res => {
        this.setState({
          id: id,
          noGugatan: res.data.data[0].noGugatan,
          idPerkara: res.data.data[0].idPerkara,
          idKategori: res.data.data[0].idKategori,
          idPenggugat: res.data.data[0].idPenggugat,
          idTergugat: res.data.data[0].idTergugat,
          tanggalDaftarGugatan: res.data.data[0].tanggalDaftarGugatan,
          idHakimKetua: res.data.data[0].idHakimKetua,
          idHakimAnggota1: res.data.data[0].idHakimAnggota1,
          idHakimAnggota2: res.data.data[0].idHakimAnggota2,
          idPanitera: res.data.data[0].idPanitera,
          tanggalSidang: res.data.data[0].tanggalSidang,
          tanggalPutusan: res.data.data[0].tanggalPutusan,
          idHasilSidang: res.data.data[0].idHasilSidang
        });
        console.log(res.data.data);
      })
      .catch(err => console.log(err));

    // daftar penggugat
    axios
      .get("http://localhost:4000/orang/status/1")
      .then(res => {
        this.setState({
          daftarPenggugat: res.data.data,
          idPenggugat: res.data.data[0].id
        });
      })
      .catch(err => console.log(err));

    // daftar tergugat
    axios
      .get("http://localhost:4000/orang/status/2")
      .then(res => {
        this.setState({
          daftarTergugat: res.data.data,
          idTergugat: res.data.data[0].id
        });
      })
      .catch(err => console.log(err));

    // daftar hakim ketua
    axios
      .get("http://localhost:4000/majelis/jabatan/1")
      .then(res => {
        this.setState({
          daftarHakimKetua: res.data.data,
          idHakimKetua: res.data.data[0].id
        });
      })
      .catch(err => console.log(err));

    // daftar hakim ketua
    axios
      .get("http://localhost:4000/majelis/jabatan/2")
      .then(res => {
        this.setState({
          daftarHakimAnggota: res.data.data,
          idHakimAnggota1: res.data.data[0].id,
          idHakimAnggota2: res.data.data[0].id
        });
      })
      .catch(err => console.log(err));

    // daftar hakim ketua
    axios
      .get("http://localhost:4000/majelis/jabatan/3")
      .then(res => {
        this.setState({
          daftarPanitera: res.data.data,
          idPanitera: res.data.data[0].id
        });
      })
      .catch(err => console.log(err));
  }

  daftarPenggugat = () => {
    return this.state.daftarPenggugat.map(val => {
      return (
        <option value={val.id} key={val.id}>
          {val.nama}
        </option>
      );
    });
  };

  daftarTergugat = () => {
    return this.state.daftarTergugat.map(val => {
      return (
        <option value={val.id} key={val.id}>
          {val.nama}
        </option>
      );
    });
  };

  daftarHakimKetua = () => {
    return this.state.daftarHakimKetua.map(val => {
      return (
        <option value={val.id} key={val.id}>
          {val.nama}
        </option>
      );
    });
  };

  daftarHakimAnggota = () => {
    return this.state.daftarHakimAnggota.map(val => {
      return (
        <option value={val.id} key={val.id}>
          {val.nama}
        </option>
      );
    });
  };

  daftarPanitera = () => {
    return this.state.daftarPanitera.map(val => {
      return (
        <option value={val.id} key={val.id}>
          {val.nama}
        </option>
      );
    });
  };

  editGugatan = () => {
    const state = this.state;
    const gugatan = {
      noGugatan: state.noGugatan,
      idPerkara: state.idPerkara,
      idKategori: state.idKategori,
      idPenggugat: state.idPenggugat,
      idTergugat: state.idTergugat,
      tanggalDaftarGugatan: state.tanggalDaftarGugatan.slice(0, 10),
      idHakimKetua: state.idHakimKetua,
      idHakimAnggota1: state.idHakimAnggota1,
      idHakimAnggota2: state.idHakimAnggota2,
      idPanitera: state.idPanitera,
      tanggalSidang: state.tanggalSidang.slice(0, 10),
      tanggalPutusan: state.tanggalPutusan.slice(0, 10),
      idHasilSidang: state.idHasilSidang
    };

    console.log(gugatan);

    axios
      .post("http://localhost:4000/gugatan/edit/" + this.state.id, gugatan)
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
            <input
              required
              type="text"
              class="form-control"
              id="no_gugatan"
              placeholder="01/Pdf.G/2019/PN.Solo"
              onChange={e => this.setState({ noGugatan: e.target.value })}
              value={this.state.noGugatan}
            />
          </div>
          <div class="form-group">
            <label for="jenis">Jenis Gugatan</label>
            <select
              id="jenis"
              class="form-control"
              onChange={e => this.setState({ idPerkara: e.target.value })}
              value={this.state.idPerkara}
            >
              <option value="1" selected>
                Perkara Pidana
              </option>
              <option value="2">Perkara Perdata</option>
            </select>
          </div>
          <div class="form-group">
            <label for="kategori">Kategori</label>
            <select
              id="kategori"
              class="form-control"
              onChange={e => this.setState({ idKategori: e.target.value })}
              value={this.state.idKategori}
            >
              <option value="1" selected>
                Kejahatan
              </option>
              <option value="2">Pelanggaran</option>
              <option value="3">Perkawinan</option>
              <option value="4">Waris</option>
              <option value="5">Kekeluargaan</option>
              <option value="6">Perikatan</option>
              <option value="7">Kekayaan</option>
            </select>
          </div>
          <hr />
          <div class="form-group">
            <label for="nama_penggugat">Nama Penggugat</label>
            <select
              id="nama_penggugat"
              class="form-control"
              onChange={e => this.setState({ idPenggugat: e.target.value })}
              value={this.state.idPenggugat}
            >
              {this.daftarPenggugat()}
            </select>
          </div>

          <hr />
          <div class="form-group">
            <label for="nama_tergugat">Nama Tergugat</label>
            <select
              id="nama_tergugat"
              class="form-control"
              onChange={e => this.setState({ idTergugat: e.target.value })}
              value={this.state.idTergugat}
            >
              {this.daftarTergugat()}
            </select>
          </div>

          <hr />
          <div class="form-group">
            <label for="tanggal_daftar_gugatan">Tanggal Daftar Gugatan</label>
            <input
              required
              type="date"
              class="form-control"
              id="tanggal_daftar_gugatan"
              onChange={e =>
                this.setState({ tanggalDaftarGugatan: e.target.value })
              }
              value={this.state.tanggalDaftarGugatan.slice(0, 10)}
            />
          </div>
          <div class="form-group">
            <label for="hakim_ketua">Nama Hakim Ketua</label>
            <select
              id="hakim_ketua"
              class="form-control"
              onChange={e => this.setState({ idHakimKetua: e.target.value })}
            >
              {this.daftarHakimKetua()}
              value={this.state.idHakimKetua}
            </select>
          </div>
          <div class="form-group">
            <label for="hakim_anggota_1">Nama Hakim Anggota 1</label>
            <select
              id="hakim_anggota_1"
              class="form-control"
              onChange={e => this.setState({ idHakimAnggota1: e.target.value })}
              value={this.state.idHakimAnggota1}
            >
              {this.daftarHakimAnggota()}
            </select>
          </div>
          <div class="form-group">
            <label for="hakim_anggota_2">Nama Hakim Anggota 2</label>
            <select
              id="hakim_anggota_2"
              class="form-control"
              onChange={e => this.setState({ idHakimAnggota2: e.target.value })}
            >
              {this.daftarHakimAnggota()}
              value={this.state.idHakimAnggota2}
            </select>
          </div>
          <div class="form-group">
            <label for="panitera">Nama Panitera</label>
            <select
              id="panitera"
              class="form-control"
              onChange={e => this.setState({ idPanitera: e.target.value })}
              value={this.state.idPanitera}
            >
              {this.daftarPanitera()}
            </select>
          </div>
          <div class="form-group">
            <label for="tanggal_sidang">Tanggal Sidang</label>
            <input
              required
              type="date"
              class="form-control"
              id="tanggal_sidang"
              onChange={e => this.setState({ tanggalSidang: e.target.value })}
              value={this.state.tanggalSidang.slice(0, 10)}
            />
          </div>
          <div class="form-group">
            <label for="tanggal_putusan">Tanggal Putusan</label>
            <input
              required
              type="date"
              class="form-control"
              id="tanggal_putusan"
              onChange={e => this.setState({ tanggalPutusan: e.target.value })}
              value={this.state.tanggalPutusan.slice(0, 10)}
            />
          </div>
          <div class="form-group">
            <label for="hasil_sidang">Hasil Sidang</label>
            <select
              id="hasil_sidang"
              class="form-control"
              onChange={e => this.setState({ idHasilSidang: e.target.value })}
              value={this.state.idHasilSidang}
            >
              <option value="1" selected>
                Dimenangkan oleh Penggugat
              </option>
              <option value="2">Dimenangkan oleh Tergugat</option>
              <option value="3">Keputusan Hakim</option>
            </select>
          </div>
          <Link to="/gugatan">
            <button
              type="button"
              class="btn btn-primary"
              onClick={() => this.editGugatan()}
            >
              Edit Data Gugatan
            </button>
          </Link>
        </form>
      </div>
    );
  }
}

export default EditGugatanScreen;
