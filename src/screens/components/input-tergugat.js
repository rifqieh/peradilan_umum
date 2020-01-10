import React from "react";

class InputTergugat extends React.Component {
  render() {
    return (
      <div>
        <form>
          <div class="form-group">
            <label for="no_gugatan">No. Gugatan</label>
            <input
              type="text"
              class="form-control"
              id="no_gugatan"
              placeholder="01/Pdf.G/2019/PN.Solo"
            />
          </div>
          <div class="form-group">
            <label for="nama_penggugat">Nama Penggugat</label>
            <input
              type="text"
              class="form-control"
              id="nama_penggugat"
              placeholder="Rifqi Eka Hardianto"
            />
          </div>
          <div class="form-group">
            <label for="jenis_kelamin">Jenis Kelamin</label>
            <select id="jenis_kelamin" class="form-control">
              <option selected>Laki-laki</option>
              <option>Perempuan</option>
            </select>
          </div>
          <div class="form-row">
            <div class="form-group col-8">
              <label for="alamat_penggugat">Alamat</label>
              <input
                type="text"
                class="form-control"
                id="alamat_penggugat"
                placeholder="Jl. Salak RT002/RW019 Majenang, Cilacap"
              />
            </div>
            <div class="form-group col-4">
              <label for="tanggal_lahir">Tanggal Lahir</label>
              <input
                type="date"
                class="form-control"
                id="tanggal_lahir"
                placeholder="Jl. Salak RT002/RW019 Majenang, Cilacap"
              />
            </div>
          </div>
          <div class="form-group">
            <label for="agama">Agama</label>
            <select id="agama" class="form-control">
              <option selected>Islam</option>
              <option>Kristen</option>
              <option>Katolik</option>
              <option>Budha</option>
              <option>Hindu</option>
              <option>Lain-lain</option>
            </select>
          </div>
          <div class="form-group">
            <label for="pendidikan">Pendidikan</label>
            <select id="pendidikan" class="form-control">
              <option selected>SD</option>
              <option>SMP</option>
              <option>SMA</option>
              <option>D3</option>
              <option>S1</option>
              <option>S2</option>
              <option>S3</option>
              <option>Lain-lain</option>
            </select>
          </div>
          <div class="form-group">
            <label for="kategori">Kategori</label>
            <select id="kategori" class="form-control">
              <option selected>Perorangan</option>
              <option>Pemerintah</option>
            </select>
          </div>
          <div class="form-group">
            <label for="kebangsaan">Kebangsaan</label>
            <select id="kebangsaan" class="form-control">
              <option selected>WNI</option>
              <option>WNA</option>
            </select>
          </div>
          <div class="form-group">
            <label for="pekerjaan">Pekerjaan</label>
            <select id="pekerjaan" class="form-control">
              <option selected>Swasta</option>
              <option>Lain-lain</option>
            </select>
          </div>
          <div class="form-group">
            <label for="pengacara">Pengacara</label>
            <input
              type="text"
              class="form-control"
              id="pengacara"
              placeholder="Rifqi Eka S.H."
            />
          </div>
          <button type="submit" class="btn btn-primary">
            Tambah Data Tergugat
          </button>
        </form>
      </div>
    );
  }
}

export default InputTergugat;
