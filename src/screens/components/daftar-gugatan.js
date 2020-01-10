import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class DaftarGugatan extends React.Component {
  state = {
    daftarGugatan: [],
    daftarPenggugat: [],
    daftarTergugat: [],
    daftarHakimKetua: [],
    daftarHakimAnggota1: [],
    daftarHakimAnggota2: [],
    daftarPanitera: [],
    daftarHasilSidang: []
  };

  componentDidMount() {
    axios
      .get("http://localhost:4000/gugatan/cari/gugatan")
      .then(res => {
        this.setState({ daftarGugatan: res.data.data });
      })
      .catch(err => console.log(err));

    axios
      .get("http://localhost:4000/gugatan/cari/penggugat")
      .then(res => {
        this.setState({ daftarPenggugat: res.data.data });
      })
      .catch(err => console.log(err));

    axios
      .get("http://localhost:4000/gugatan/cari/tergugat")
      .then(res => {
        this.setState({ daftarTergugat: res.data.data });
      })
      .catch(err => console.log(err));

    axios
      .get("http://localhost:4000/gugatan/cari/hakim-ketua")
      .then(res => {
        this.setState({ daftarHakimKetua: res.data.data });
      })
      .catch(err => console.log(err));

    axios
      .get("http://localhost:4000/gugatan/cari/hakim-anggota1")
      .then(res => {
        this.setState({ daftarHakimAnggota1: res.data.data });
      })
      .catch(err => console.log(err));

    axios
      .get("http://localhost:4000/gugatan/cari/hakim-anggota2")
      .then(res => {
        this.setState({ daftarHakimAnggota2: res.data.data });
      })
      .catch(err => console.log(err));

    axios
      .get("http://localhost:4000/gugatan/cari/panitera")
      .then(res => {
        this.setState({ daftarPanitera: res.data.data });
      })
      .catch(err => console.log(err));

    axios
      .get("http://localhost:4000/gugatan/cari/hasil-sidang")
      .then(res => {
        this.setState({ daftarHasilSidang: res.data.data });
      })
      .catch(err => console.log(err));
  }

  gugatanList = () => {
    const daftarGugatan = this.state.daftarGugatan;
    const daftarPenggugat = this.state.daftarPenggugat;
    const daftarTergugat = this.state.daftarTergugat;
    const daftarHakimKetua = this.state.daftarHakimKetua;
    const daftarHakimAnggota1 = this.state.daftarHakimAnggota1;
    const daftarHakimAnggota2 = this.state.daftarHakimAnggota2;
    const daftarPanitera = this.state.daftarPanitera;
    const daftarHasilSidang = this.state.daftarHasilSidang;

    return daftarHasilSidang.map((e, i) => {
      return (
        <tr>
          <td>{daftarGugatan[i].noGugatan}</td>
          <td>{daftarGugatan[i].jenisPerkara}</td>
          <td>{daftarGugatan[i].kategoriGugatan}</td>
          <td>{daftarPenggugat[i].nama}</td>
          <td>{daftarTergugat[i].nama}</td>
          <td>{daftarHakimKetua[i].nama}</td>
          <td>{daftarHakimAnggota1[i].nama}</td>
          <td>{daftarHakimAnggota2[i].nama}</td>
          <td>{daftarPanitera[i].nama}</td>
          <td>{daftarGugatan[i].tanggalDaftarGugatan.slice(0, 10)}</td>
          <td>{daftarGugatan[i].tanggalSidang.slice(0, 10)}</td>
          <td>{daftarGugatan[i].tanggalPutusan.slice(0, 10)}</td>
          <td>{daftarHasilSidang[i].hasilSidang}</td>
          <td>
            <Link to={"/edit-gugatan/" + daftarGugatan[i].id}>
              <button
                className="btn btn-success"
                style={{ marginBottom: "10px" }}
              >
                Edit
              </button>
            </Link>
            <button className="btn btn-danger" onClick={() => {}}>
              Hapus
            </button>
          </td>
        </tr>
      );
    });
  };

  render() {
    return (
      <div>
        <table class="table-responsive table-bordered">
          <thead className="thead-dark">
            <tr>
              <th scope="col">No. Gugatan</th>
              <th scope="col">Jenis</th>
              <th scope="col">Kategori</th>
              <th scope="col">Nama Penggugat</th>
              <th scope="col">Nama Tergugat</th>
              <th scope="col">Hakim Ketua</th>
              <th scope="col">Hakim Anggota 1</th>
              <th scope="col">Hakim Anggota 2</th>
              <th scope="col">Panitera</th>
              <th scope="col">Tanggal Daftar Gugatan</th>
              <th scope="col">Tanggal Sidang</th>
              <th scope="col">Tanggal Putusan</th>
              <th scope="col">Hasil Sidang</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {this.state.daftarGugatan.length !== 0 &&
            this.state.daftarHakimAnggota1.length !== 0 &&
            this.state.daftarHakimAnggota2.length !== 0 &&
            this.state.daftarHakimKetua.length !== 0 &&
            this.state.daftarHasilSidang.length !== 0 &&
            this.state.daftarHasilSidang.length !== 0 &&
            this.state.daftarPanitera.length !== 0 &&
            this.state.daftarPenggugat.length !== 0 &&
            this.state.daftarTergugat.length !== 0
              ? this.gugatanList()
              : null}
          </tbody>
        </table>
      </div>
    );
  }
}

export default DaftarGugatan;
