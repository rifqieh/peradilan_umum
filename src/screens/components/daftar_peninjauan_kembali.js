import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class DaftarPeninjauanKembali extends React.Component {
  state = {
    daftarPeninjauanKembali: []
  };

  componentDidMount() {
    axios
      .get("http://localhost:4000/peninjauan-kembali/cari/peninjauan-kembali")
      .then(res => {
        this.setState({ daftarPeninjauanKembali: res.data.data });
        console.log(res.data.data);
      })
      .catch(err => console.log(err));
  }

  daftarPeninjauanKembali = () => {
    return this.state.daftarPeninjauanKembali.map(PeninjauanKembali => {
      return (
        <tr>
          <td>{PeninjauanKembali.noGugatan}</td>
          <td>{PeninjauanKembali.tanggalPeninjauanKembali.slice(0, 10)}</td>
          <td>
            {PeninjauanKembali.tanggalPutusanPeninjauanKembali.slice(0, 10)}
          </td>
          <td>{PeninjauanKembali.hasilSidang}</td>
          <td>
            <Link to={"/edit-peninjauan-kembali/" + PeninjauanKembali.id}>
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
                  .delete(
                    "http://localhost:4000/peninjauan-kembali/hapus/" +
                      PeninjauanKembali.id
                  )
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
              <th scope="col">Tanggal Peninjauan Kembali</th>
              <th scope="col">Tanggal Putusan Peninjauan Kembali</th>
              <th scope="col">Hasil Putusan Peninjauan Kembali</th>
              <th scope="col">Status</th>
            </tr>
          </thead>
          <tbody>{this.daftarPeninjauanKembali()}</tbody>
        </table>
      </div>
    );
  }
}

export default DaftarPeninjauanKembali;
