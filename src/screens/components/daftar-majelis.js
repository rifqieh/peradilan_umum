import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const MajelisItem = props => {
  const majelis = props.majelis;
  return (
    <tr>
      <th scope="row">{majelis.nip}</th>
      <td>{majelis.nama}</td>
      <td>{majelis.jabatan}</td>
      <td>
        <Link to={"/edit-majelis/" + majelis.id}>
          <button className="btn btn-success" style={{ marginRight: "10px" }}>
            Edit
          </button>
        </Link>
        <button
          className="btn btn-danger"
          onClick={() => props.hapusMajelis(majelis.id)}
        >
          Hapus
        </button>
      </td>
    </tr>
  );
};

class DaftarMajelis extends React.Component {
  state = {
    daftarMajelis: []
  };

  componentDidMount() {
    axios
      .get("http://localhost:4000/majelis")
      .then(res => {
        this.setState({ daftarMajelis: res.data.data });
      })
      .catch(err => console.log(err));
  }

  hapusMajelis = id => {
    console.log("hiya" + id);
    axios
      .delete("http://localhost:4000/majelis/hapus/" + id)
      .then(res => {
        alert("Berhasil dihapus!");
        window.location.reload();
      })
      .catch(err => console.log(err));
  };

  majelisList = () => {
    return this.state.daftarMajelis.map(majelis => {
      return <MajelisItem hapusMajelis={this.hapusMajelis} majelis={majelis} />;
    });
  };

  render() {
    return (
      <div>
        <table class="table table-bordered">
          <thead>
            <tr>
              <th scope="col">NIP</th>
              <th scope="col">Nama</th>
              <th scope="col">Jabatan</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>{this.majelisList()}</tbody>
        </table>
      </div>
    );
  }
}

export default DaftarMajelis;
