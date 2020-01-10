import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class DaftarKasasi extends React.Component {
  state = {
    daftarKasasi: []
  };

  componentDidMount() {
    axios
      .get("http://localhost:4000/kasasi/cari/kasasi")
      .then(res => {
        this.setState({ daftarKasasi: res.data.data });
        console.log(res.data.data);
      })
      .catch(err => console.log(err));
  }

  daftarKasasi = () => {
    return this.state.daftarKasasi.map(kasasi => {
      return (
        <tr>
          <td>{kasasi.noGugatan}</td>
          <td>{kasasi.tanggalKasasi.slice(0, 10)}</td>
          <td>{kasasi.tanggalPutusanKasasi.slice(0, 10)}</td>
          <td>{kasasi.hasilSidang}</td>
          <td>
            <Link to={"/edit-kasasi/" + kasasi.id}>
              <button
                className="btn btn-success"
                style={{ marginRight: "10px" }}
              >
                Edit
              </button>
            </Link>
            <button
              className="btn btn-danger"
              onClick={() => {
                axios
                  .delete("http://localhost:4000/kasasi/hapus/" + kasasi.id)
                  .then(res => {
                    alert("berhasil dihapus");
                    window.location.reload();
                  })
                  .catch(err => console.log(err));
              }}
            >
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
        <table class="table table-bordered">
          <thead>
            <tr>
              <th scope="col">No. Gugatan</th>
              <th scope="col">Tanggal Kasasi</th>
              <th scope="col">Tanggal Putusan Kasasi</th>
              <th scope="col">Hasil Putusan Kasasi</th>
              <th scope="col">Status</th>
            </tr>
          </thead>
          <tbody>{this.daftarKasasi()}</tbody>
        </table>
      </div>
    );
  }
}

export default DaftarKasasi;
