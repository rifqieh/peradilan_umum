const router = require("express").Router();
const connection = require("../db");

router.route("/").get((req, res) => {
  const QUERY = `select * from Banding`;
  connection.query(QUERY, (err, result) => {
    if (err) console.log(err);
    res.json({ data: result });
  });
});

router.route("/:id").get((req, res) => {
  const id = req.params.id;
  const QUERY = `select * from Banding where id=${id}`;
  connection.query(QUERY, (err, result) => {
    if (err) console.log(err);
    res.json({ data: result });
  });
});

router.route("/cari/banding").get((req, res) => {
  const QUERY = `select Banding.id, Gugatan.noGugatan, tanggalBanding, tanggalPutusanBanding, HasilSidang.hasilSidang
    from Banding
      join Gugatan on Banding.idGugatan = Gugatan.id
      join HasilSidang on Banding.idHasilPutusanBanding = HasilSidang.id;`;

  connection.query(QUERY, (err, result) => {
    if (err) console.log(err);
    res.json({ data: result });
  });
});

router.route("/cari/hasil-sidang").get((req, res) => {
  const QUERY = `select Banding.id, HasilSidang.hasilSidang
      from Banding
        join HasilSidang on Banding.idHasilPutusanBanding = HasilSidang.id;`;

  connection.query(QUERY, (err, result) => {
    if (err) console.log(err);
    res.json({ data: result });
  });
});

router.route("/tambah").post((req, res) => {
  const idGugatan = req.body.idGugatan;
  const tanggalBanding = req.body.tanggalBanding;
  const tanggalPutusanBanding = req.body.tanggalPutusanBanding;
  const idHasilPutusanBanding = req.body.idHasilPutusanBanding;

  const QUERY = `insert into Banding(idGugatan, tanggalBanding, tanggalPutusanBanding, idHasilPutusanBanding)
  values(${idGugatan}, "${tanggalBanding}", "${tanggalPutusanBanding}", ${idHasilPutusanBanding})`;

  connection.query(QUERY, (err, result) => {
    if (err) console.log(err);
    res.json(result);
  });
});

router.route("/edit/:id").post((req, res) => {
  const id = req.params.id;
  const idGugatan = req.body.idGugatan;
  const tanggalBanding = req.body.tanggalBanding;
  const tanggalPutusanBanding = req.body.tanggalPutusanBanding;
  const idHasilPutusanBanding = req.body.idHasilPutusanBanding;

  const QUERY = `update Banding
    set idGugatan=${idGugatan}, tanggalBanding="${tanggalBanding}", tanggalPutusanBanding="${tanggalPutusanBanding}", 
    idHasilPutusanBanding=${idHasilPutusanBanding} where id=${id}`;

  connection.query(QUERY, (err, result) => {
    if (err) console.log(err);
    res.json(result);
  });
});

router.route("/hapus/:id").delete((req, res) => {
  const id = req.params.id;
  const QUERY = `delete from Banding where id=${id}`;
  connection.query(QUERY, (err, result) => {
    if (err) console.log(err);
    res.json(result);
  });
});

module.exports = router;
