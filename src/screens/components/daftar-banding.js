import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class DaftarBanding extends React.Component {
  state = {
    daftarBanding: []
  };

  componentDidMount() {
    axios
      .get("http://localhost:4000/banding/cari/banding")
      .then(res => {
        this.setState({ daftarBanding: res.data.data });
        console.log(res.data.data);
      })
      .catch(err => console.log(err));
  }

  daftarBanding = () => {
    return this.state.daftarBanding.map(Banding => {
      return (
        <tr>
          <td>{Banding.noGugatan}</td>
          <td>{Banding.tanggalBanding.slice(0, 10)}</td>
          <td>{Banding.tanggalPutusanBanding.slice(0, 10)}</td>
          <td>{Banding.hasilSidang}</td>
          <td>
            <Link to={"/edit-banding/" + Banding.id}>
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
                  .delete("http://localhost:4000/banding/hapus/" + Banding.id)
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
              <th scope="col">Tanggal Banding</th>
              <th scope="col">Tanggal Putusan Banding</th>
              <th scope="col">Hasil Putusan Banding</th>
              <th scope="col">Status</th>
            </tr>
          </thead>
          <tbody>{this.daftarBanding()}</tbody>
        </table>
      </div>
    );
  }
}

export default DaftarBanding;
