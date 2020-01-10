const router = require("express").Router();
const connection = require("../db");

router.route("/").get((req, res) => {
  const QUERY = `select * from Kasasi`;
  connection.query(QUERY, (err, result) => {
    if (err) console.log(err);
    res.json({ data: result });
  });
});

router.route("/:id").get((req, res) => {
  const id = req.params.id;
  const QUERY = `select * from Kasasi where id=${id}`;
  connection.query(QUERY, (err, result) => {
    if (err) console.log(err);
    res.json({ data: result });
  });
});

router.route("/cari/kasasi").get((req, res) => {
  const QUERY = `select Kasasi.id, Gugatan.noGugatan, tanggalKasasi, tanggalPutusanKasasi, HasilSidang.hasilSidang
    from Kasasi
      join Gugatan on Kasasi.idGugatan = Gugatan.id
      join HasilSidang on Kasasi.idHasilPutusanKasasi = HasilSidang.id;`;

  connection.query(QUERY, (err, result) => {
    if (err) console.log(err);
    res.json({ data: result });
  });
});

router.route("/cari/hasil-sidang").get((req, res) => {
  const QUERY = `select Kasasi.id, HasilSidang.hasilSidang
      from Kasasi
        join HasilSidang on Kasasi.idHasilPutusanKasasi = HasilSidang.id;`;

  connection.query(QUERY, (err, result) => {
    if (err) console.log(err);
    res.json({ data: result });
  });
});

router.route("/tambah").post((req, res) => {
  const idGugatan = req.body.idGugatan;
  const tanggalKasasi = req.body.tanggalKasasi;
  const tanggalPutusanKasasi = req.body.tanggalPutusanKasasi;
  const idHasilPutusanKasasi = req.body.idHasilPutusanKasasi;

  const QUERY = `insert into Kasasi(idGugatan, tanggalKasasi, tanggalPutusanKasasi, idHasilPutusanKasasi)
  values(${idGugatan}, "${tanggalKasasi}", "${tanggalPutusanKasasi}", ${idHasilPutusanKasasi})`;

  connection.query(QUERY, (err, result) => {
    if (err) console.log(err);
    res.json(result);
  });
});

router.route("/edit/:id").post((req, res) => {
  const id = req.params.id;
  const idGugatan = req.body.idGugatan;
  const tanggalKasasi = req.body.tanggalKasasi;
  const tanggalPutusanKasasi = req.body.tanggalPutusanKasasi;
  const idHasilPutusanKasasi = req.body.idHasilPutusanKasasi;

  const QUERY = `update Kasasi
    set idGugatan=${idGugatan}, tanggalKasasi="${tanggalKasasi}", tanggalPutusanKasasi="${tanggalPutusanKasasi}", 
    idHasilPutusanKasasi=${idHasilPutusanKasasi} where id=${id}`;

  connection.query(QUERY, (err, result) => {
    if (err) console.log(err);
    res.json(result);
  });
});

router.route("/hapus/:id").delete((req, res) => {
  const id = req.params.id;
  const QUERY = `delete from Kasasi where id=${id}`;
  connection.query(QUERY, (err, result) => {
    if (err) console.log(err);
    res.json(result);
  });
});

module.exports = router;
