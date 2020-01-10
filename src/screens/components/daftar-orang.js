import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const OrangItem = props => {
  const orang = props.orang;
  return (
    <tr>
      <th scope="row">{orang.nik}</th>
      <td>{orang.statusKeterlibatan}</td>
      <td>{orang.kategori}</td>
      <td>{orang.nama}</td>
      <td>{orang.jenisKelamin}</td>
      <td>{orang.tanggalLahir.slice(0, 10)}</td>
      <td>{orang.alamat}</td>
      <td>{orang.agama}</td>
      <td>{orang.tingkatPendidikan}</td>
      <td>{orang.jenisKebangsaan}</td>
      <td>{orang.jenisPekerjaan}</td>
      <td>{orang.pengacara}</td>
      <td>
        <Link to={"/edit-orang/" + orang.id}>
          <button className="btn btn-success" style={{ marginBottom: "10px" }}>
            Edit
          </button>
        </Link>
        <button
          className="btn btn-danger"
          onClick={() => props.hapusOrang(orang.id)}
        >
          Hapus
        </button>
      </td>
    </tr>
  );
};

class DaftarOrang extends React.Component {
  state = {
    daftarOrang: []
  };

  componentDidMount() {
    console.log("hello");
    axios
      .get("http://localhost:4000/orang")
      .then(res => {
        console.log(res.data.data);
        this.setState({ daftarOrang: res.data.data });
      })
      .catch(err => console.log(err));
  }

  orangList = () => {
    return this.state.daftarOrang.map(orang => {
      return <OrangItem orang={orang} hapusOrang={this.hapusOrang} />;
    });
  };

  hapusOrang = id => {
    console.log(id);
    axios
      .delete("http://localhost:4000/orang/hapus/" + id)
      .then(res => {
        alert("Berhasil dihapus!");
        window.location.reload();
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <table class="table-responsive table-bordered  ">
          <thead>
            <tr>
              <th scope="col">NIK</th>
              <th scope="col">Status</th>
              <th scope="col">Kategori</th>
              <th scope="col">Nama Penggugat</th>
              <th scope="col">Jenis Kelamin</th>
              <th scope="col">Tanggal Lahir</th>
              <th scope="col">Alamat</th>
              <th scope="col">Agama</th>
              <th scope="col">Pendidikan</th>
              <th scope="col">Kebangsaan</th>
              <th scope="col">Pekerjaan</th>
              <th scope="col">Pengacara</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>{this.orangList()}</tbody>
        </table>
      </div>
    );
  }
}

export default DaftarOrang;
