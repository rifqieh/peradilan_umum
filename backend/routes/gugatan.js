const router = require("express").Router();
const connection = require("../db");

router.route("/").get((req, res) => {
  const QUERY = `select * from Gugatan;`;
  connection.query(QUERY, (err, result) => {
    if (err) console.log(err);
    res.json({ data: result });
  });
});

router.route("/:id").get((req, res) => {
  const id = req.params.id;
  const QUERY = `select * from Gugatan where id=${id};`;
  connection.query(QUERY, (err, result) => {
    if (err) console.log(err);
    res.json({ data: result });
  });
});

router.route("/cari/gugatan").get((req, res) => {
  const QUERY = `select Gugatan.id, noGugatan, tanggalDaftarGugatan, tanggalSidang, tanggalPutusan, Perkara.jenisPerkara, KategoriGugatan.kategoriGugatan, HasilSidang.hasilSidang
    from Gugatan
      join Perkara on Gugatan.idPerkara = Perkara.id
      join KategoriGugatan on Gugatan.idKategori = KategoriGugatan.id
      join HasilSidang on Gugatan.idHasilSidang = HasilSidang.id;`;

  connection.query(QUERY, (err, result) => {
    if (err) console.log(err);
    res.json({ data: result });
  });
});

router.route("/cari/penggugat").get((req, res) => {
  const QUERY = `select Gugatan.id, noGugatan, Orang.nama
  from Gugatan
    join Orang on Gugatan.idPenggugat = Orang.id;`;

  connection.query(QUERY, (err, result) => {
    if (err) console.log(err);
    res.json({ data: result });
  });
});

router.route("/cari/tergugat").get((req, res) => {
  const QUERY = `select Gugatan.id, noGugatan, Orang.nama
  from Gugatan
    join Orang on Gugatan.idTergugat = Orang.id;`;

  connection.query(QUERY, (err, result) => {
    if (err) console.log(err);
    res.json({ data: result });
  });
});

router.route("/cari/hakim-ketua").get((req, res) => {
  const QUERY = `select Gugatan.id, noGugatan, Majelis.nama
  from Gugatan
    join Majelis on Gugatan.idHakimKetua = Majelis.id;`;

  connection.query(QUERY, (err, result) => {
    if (err) console.log(err);
    res.json({ data: result });
  });
});

router.route("/cari/hakim-anggota1").get((req, res) => {
  const QUERY = `select Gugatan.id, noGugatan, Majelis.nama
  from Gugatan
    join Majelis on Gugatan.idHakimAnggota1 = Majelis.id;`;

  connection.query(QUERY, (err, result) => {
    if (err) console.log(err);
    res.json({ data: result });
  });
});

router.route("/cari/hakim-anggota2").get((req, res) => {
  const QUERY = `select Gugatan.id, noGugatan, Majelis.nama
  from Gugatan
    join Majelis on Gugatan.idHakimAnggota2 = Majelis.id;`;

  connection.query(QUERY, (err, result) => {
    if (err) console.log(err);
    res.json({ data: result });
  });
});

router.route("/cari/panitera").get((req, res) => {
  const QUERY = `select Gugatan.id, noGugatan, Majelis.nama
  from Gugatan
    join Majelis on Gugatan.idPanitera = Majelis.id;`;

  connection.query(QUERY, (err, result) => {
    if (err) console.log(err);
    res.json({ data: result });
  });
});

router.route("/cari/hasil-sidang").get((req, res) => {
  const QUERY = `select Gugatan.id, noGugatan, HasilSidang.hasilSidang
    from Gugatan
      join HasilSidang on Gugatan.idHasilSidang = HasilSidang.id;`;

  connection.query(QUERY, (err, result) => {
    if (err) console.log(err);
    res.json({ data: result });
  });
});

router.route("/tambah").post((req, res) => {
  const noGugatan = req.body.noGugatan;
  const idPerkara = req.body.idPerkara;
  const idKategori = req.body.idKategori;
  const idPenggugat = req.body.idPenggugat;
  const idTergugat = req.body.idTergugat;
  const tanggalDaftarGugatan = req.body.tanggalDaftarGugatan;
  const idHakimKetua = req.body.idHakimKetua;
  const idHakimAnggota1 = req.body.idHakimAnggota1;
  const idHakimAnggota2 = req.body.idHakimAnggota2;
  const idPanitera = req.body.idPanitera;
  const tanggalSidang = req.body.tanggalSidang;
  const tanggalPutusan = req.body.tanggalPutusan;
  const idHasilSidang = req.body.idHasilSidang;

  const QUERY = `insert into Gugatan(noGugatan, idPerkara, idKategori, idPenggugat, idTergugat, tanggalDaftarGugatan, idHakimKetua, idHakimAnggota1, idHakimAnggota2, idPanitera, tanggalSidang, tanggalPutusan, idHasilSidang) values("${noGugatan}", ${idPerkara}, ${idKategori}, ${idPenggugat}, ${idTergugat}, "${tanggalDaftarGugatan}", ${idHakimKetua}, ${idHakimAnggota1}, ${idHakimAnggota2}, ${idPanitera}, "${tanggalSidang}", "${tanggalPutusan}", ${idHasilSidang})`;

  connection.query(QUERY, (err, result) => {
    if (err) console.log(err);
    res.json(result);
  });
});

router.route("/edit/:id").post((req, res) => {
  const id = req.params.id;
  const noGugatan = req.body.noGugatan;
  const idPerkara = req.body.idPerkara;
  const idKategori = req.body.idKategori;
  const idPenggugat = req.body.idPenggugat;
  const idTergugat = req.body.idTergugat;
  const tanggalDaftarGugatan = req.body.tanggalDaftarGugatan;
  const idHakimKetua = req.body.idHakimKetua;
  const idHakimAnggota1 = req.body.idHakimAnggota1;
  const idHakimAnggota2 = req.body.idHakimAnggota2;
  const idPanitera = req.body.idPanitera;
  const tanggalSidang = req.body.tanggalSidang;
  const tanggalPutusan = req.body.tanggalPutusan;
  const idHasilSidang = req.body.idHasilSidang;

  const QUERY = `update Gugatan
  set noGugatan="${noGugatan}", idPerkara=${idPerkara}, idKategori=${idKategori},
  idPenggugat=${idPenggugat}, idTergugat=${idTergugat}, tanggalDaftarGugatan="${tanggalDaftarGugatan}",
  idHakimKetua=${idHakimKetua}, idHakimAnggota1=${idHakimAnggota1}, idHakimAnggota2=${idHakimAnggota2},
  idPanitera=${idPanitera}, tanggalSidang="${tanggalSidang}", tanggalPutusan="${tanggalPutusan}",
  idHasilSidang=${idHasilSidang} where id=${id}`;

  connection.query(QUERY, (err, result) => {
    if (err) console.log(err);
    res.json(result);
  });
});

module.exports = router;
