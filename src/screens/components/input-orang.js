import React from "react";
import axios from "axios";

class InputOrang extends React.Component {
  tambahOrang = () => {
    const orang = {
      status: this.state.status,
      nik: this.state.nik,
      nama: this.state.nama,
      jenis_kelamin: this.state.jenis_kelamin,
      alamat: this.state.alamat,
      tanggal_lahir: this.state.tanggal_lahir,
      agama: this.state.agama,
      pendidikan: this.state.pendidikan,
      kategori: this.state.kategori,
      kebangsaan: this.state.kebangsaan,
      pekerjaan: this.state.pekerjaan,
      pengacara: this.state.pengacara
    };
    console.log(orang);
    axios
      .post("http://localhost:4000/orang/tambah", orang)
      .then(res => {
        alert("Berhasil ditambahkan!");
        window.location.reload();
      })
      .catch(err => console.log(err));
  };

  state = {
    status: 1,
    nik: "",
    nama: "",
    jenis_kelamin: 1,
    alamat: "",
    tanggal_lahir: "",
    agama: 1,
    pendidikan: 1,
    kategori: 1,
    kebangsaan: 1,
    pekerjaan: 1,
    pengacara: ""
  };

  render() {
    return (
      <div>
        <form>
          <div class="form-group">
            <label for="status">Status</label>
            <select
              id="status"
              class="form-control"
              onChange={e => {
                this.setState({ status: e.target.value });
                console.log(this.state.status);
              }}
            >
              <option value="1" selected>
                Penggugat
              </option>
              <option value="2">Tergugat</option>
            </select>
          </div>
          <div class="form-group">
            <label for="nik">NIK</label>
            <input
              required
              type="text"
              class="form-control"
              id="nik"
              placeholder="Input NIK"
              onChange={e => {
                console.log(e.target.value);
                this.setState({ nik: e.target.value });
              }}
            />
          </div>
          <div class="form-group">
            <label for="nama_lengkap">Nama Lengkap</label>
            <input
              required
              type="text"
              class="form-control"
              id="nama_lengkap"
              placeholder="Input Nama Lengkap"
              onChange={e => {
                console.log(e.target.value);
                this.setState({ nama: e.target.value });
              }}
            />
          </div>
          <div class="form-group">
            <label for="jenis_kelamin">Jenis Kelamin</label>
            <select
              id="jenis_kelamin"
              class="form-control"
              onChange={e => {
                console.log(e.target.value);
                this.setState({ jenis_kelamin: e.target.value });
              }}
            >
              <option value="1" selected>
                Laki-laki
              </option>
              <option value="2">Perempuan</option>
            </select>
          </div>
          <div class="form-row">
            <div class="form-group col-8">
              <label for="alamat_penggugat">Alamat</label>
              <input
                required
                type="text"
                class="form-control"
                id="alamat_penggugat"
                placeholder="Input Alamat Penggugat"
                onChange={e => {
                  console.log(e.target.value);
                  this.setState({ alamat: e.target.value });
                }}
              />
            </div>
            <div class="form-group col-4">
              <label for="tanggal_lahir">Tanggal Lahir</label>
              <input
                required
                type="date"
                class="form-control"
                id="tanggal_lahir"
                placeholder=""
                onChange={e => {
                  console.log(e.target.value);
                  this.setState({ tanggal_lahir: e.target.value });
                }}
              />
            </div>
          </div>
          <div class="form-group">
            <label for="agama">Agama</label>
            <select
              id="agama"
              class="form-control"
              onChange={e => {
                console.log(e.target.value);
                this.setState({ agama: e.target.value });
              }}
            >
              <option value="1" selected>
                Islam
              </option>
              <option value="2">Kristen</option>
              <option value="3">Katolik</option>
              <option value="4">Budha</option>
              <option value="5">Hindu</option>
              <option value="6">Konghucu</option>
            </select>
          </div>
          <div class="form-group">
            <label for="pendidikan">Pendidikan</label>
            <select
              id="pendidikan"
              class="form-control"
              onChange={e => {
                console.log(e.target.value);
                this.setState({ pendidikan: e.target.value });
              }}
            >
              <option value="1" selected>
                SD
              </option>
              <option value="2">SMP</option>
              <option value="3">SMA</option>
              <option value="4">D3</option>
              <option value="5">S1</option>
              <option value="6">S2</option>
              <option value="7">S3</option>
              <option value="8">Lain-lain</option>
            </select>
          </div>
          <div class="form-group">
            <label for="kategori">Kategori</label>
            <select
              id="kategori"
              class="form-control"
              onChange={e => {
                console.log(e.target.value);
                this.setState({ kategori: e.target.value });
              }}
            >
              <option value="1" selected>
                Perorangan
              </option>
              <option value="2">Pemerintah</option>
            </select>
          </div>
          <div class="form-group">
            <label for="kebangsaan">Kebangsaan</label>
            <select
              id="kebangsaan"
              class="form-control"
              onChange={e => {
                console.log(e.target.value);
                this.setState({ kebangsaan: e.target.value });
              }}
            >
              <option value="1" selected>
                WNI
              </option>
              <option value="2">WNA</option>
            </select>
          </div>
          <div class="form-group">
            <label for="pekerjaan">Pekerjaan</label>
            <select
              id="pekerjaan"
              class="form-control"
              onChange={e => {
                console.log(e.target.value);
                this.setState({ pekerjaan: e.target.value });
              }}
            >
              <option value="1" selected>
                Swasta
              </option>
              <option value="2">Lain-lain</option>
            </select>
          </div>
          <div class="form-group">
            <label for="pengacara">Pengacara</label>
            <input
              required
              type="text"
              class="form-control"
              id="pengacara"
              placeholder="Input Pengacara"
              onChange={e => {
                console.log(e.target.value);
                this.setState({ pengacara: e.target.value });
              }}
            />
          </div>
          <button
            type="button"
            class="btn btn-primary"
            onClick={() => this.tambahOrang()}
          >
            Tambah Data Orang
          </button>
        </form>
      </div>
    );
  }
}

export default InputOrang;
