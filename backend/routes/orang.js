const router = require("express").Router();
const connection = require("../db");

router.route("/").get((req, res) => {
  const QUERY = `
  select Orang.id, nik, nama, alamat, tanggalLahir, 
  pengacara, jenisKelamin, kategori, statusKeterlibatan, 
  jenisKebangsaan, agama, tingkatPendidikan, jenisPekerjaan 
  from Orang
  join JenisKelamin on Orang.idJenisKelamin = JenisKelamin.id
  join KategoriOrang on Orang.idKategori = KategoriOrang.id
  join StatusKeterlibatan on Orang.idStatus = StatusKeterlibatan.id
  join Kebangsaan on Orang.idKebangsaan = Kebangsaan.id
  join Agama on Orang.idAgama = Agama.id
  join Pendidikan on Orang.idPendidikan = Pendidikan.id
  join Pekerjaan on Orang.idPekerjaan = Pekerjaan.id;`;
  connection.query(QUERY, (err, result) => {
    if (err) console.log(err);
    res.json({ data: result });
  });
});

router.route("/:id").get((req, res) => {
  const id = req.params.id;
  const QUERY = `select * from Orang where id=${id}`;
  connection.query(QUERY, (err, result) => {
    if (err) console.log(err);
    res.json({ data: result });
  });
});

router.route("/status/:id").get((req, res) => {
  const id = req.params.id;
  const QUERY = `select * from Orang where idStatus=${id};`;
  connection.query(QUERY, (err, result) => {
    if (err) console.log(err);
    res.json({ data: result });
  });
});

router.route("/status/penggugat").get((req, res) => {
  const QUERY = `select * from Orang;`;
  connection.query(QUERY, (err, result) => {
    if (err) console.log(err);
    res.json({ data: result });
  });
});

router.route("/hapus/:id").delete((req, res) => {
  const id = req.params.id;
  const QUERY = `delete from Orang where id=${id}`;
  connection.query(QUERY, (err, result) => {
    if (err) console.log(err);
    console.log(`ID: ${id} dihapus`);
    res.json(result);
  });
});

router.route("/tambah").post((req, res) => {
  const status = req.body.status;
  const nik = req.body.nik.toString();
  const nama = req.body.nama.toString();
  const jenis_kelamin = req.body.jenis_kelamin;
  const alamat = req.body.alamat.toString();
  const tanggal_lahir = req.body.tanggal_lahir.toString();
  const agama = req.body.agama;
  const pendidikan = req.body.pendidikan;
  const kategori = req.body.kategori;
  const kebangsaan = req.body.kebangsaan;
  const pekerjaan = req.body.pekerjaan;
  const pengacara = req.body.pengacara.toString();

  console.log("jannn");
  console.log(req.body);

  const QUERY = `insert into Orang(nik, nama, alamat, tanggalLahir, pengacara, idJenisKelamin, idStatus, idKebangsaan, idAgama, idPendidikan, idPekerjaan, idKategori)
    values ("${nik}", "${nama}", "${alamat}", "${tanggal_lahir}", "${pengacara}", ${jenis_kelamin}, ${status}, ${kebangsaan}, ${agama}, ${pendidikan}, ${pekerjaan}, ${kategori});`;
  connection.query(QUERY, (err, result) => {
    if (err) console.log(err);
    res.json(result);
  });
});

router.route("/edit/:id").post((req, res) => {
  const id = req.params.id;
  const status = req.body.status;
  const nik = req.body.nik;
  const nama = req.body.nama;
  const jenis_kelamin = req.body.jenis_kelamin;
  const alamat = req.body.alamat;
  const tanggal_lahir = req.body.tanggal_lahir;
  const agama = req.body.agama;
  const pendidikan = req.body.pendidikan;
  const kategori = req.body.kategori;
  const kebangsaan = req.body.kebangsaan;
  const pekerjaan = req.body.pekerjaan;
  const pengacara = req.body.pengacara;

  const QUERY = `update Orang
  set idStatus=${status}, nik="${nik}", nama="${nama}",
  idJenisKelamin=${jenis_kelamin}, alamat="${alamat}",
  tanggalLahir="${tanggal_lahir}", idAgama=${agama},
  idPendidikan=${pendidikan}, idKategori=${kategori},
  idKebangsaan=${kebangsaan}, idPekerjaan=${pekerjaan},
  pengacara="${pengacara}" where id=${id}`;

  connection.query(QUERY, (err, result) => {
    if (err) console.log(err);
    res.json(result);
  });
});

module.exports = router;
