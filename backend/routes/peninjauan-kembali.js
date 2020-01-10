const router = require("express").Router();
const connection = require("../db");

router.route("/").get((req, res) => {
  const QUERY = `select * from PeninjauanKembali`;
  connection.query(QUERY, (err, result) => {
    if (err) console.log(err);
    res.json({ data: result });
  });
});

router.route("/:id").get((req, res) => {
  const id = req.params.id;
  const QUERY = `select * from PeninjauanKembali where id=${id}`;
  connection.query(QUERY, (err, result) => {
    if (err) console.log(err);
    res.json({ data: result });
  });
});

router.route("/cari/peninjauan-kembali").get((req, res) => {
  const QUERY = `select PeninjauanKembali.id, Gugatan.noGugatan, tanggalPeninjauanKembali, tanggalPutusanPeninjauanKembali, HasilSidang.hasilSidang
    from PeninjauanKembali
      join Gugatan on PeninjauanKembali.idGugatan = Gugatan.id
      join HasilSidang on PeninjauanKembali.idHasilPutusanPeninjauanKembali = HasilSidang.id;`;

  connection.query(QUERY, (err, result) => {
    if (err) console.log(err);
    res.json({ data: result });
  });
});

router.route("/cari/hasil-sidang").get((req, res) => {
  const QUERY = `select PeninjauanKembali.id, HasilSidang.hasilSidang
      from PeninjauanKembali
        join HasilSidang on PeninjauanKembali.idHasilPutusanPeninjauanKembali = HasilSidang.id;`;

  connection.query(QUERY, (err, result) => {
    if (err) console.log(err);
    res.json({ data: result });
  });
});

router.route("/tambah").post((req, res) => {
  const idGugatan = req.body.idGugatan;
  const tanggalPeninjauanKembali = req.body.tanggalPeninjauanKembali;
  const tanggalPutusanPeninjauanKembali =
    req.body.tanggalPutusanPeninjauanKembali;
  const idHasilPutusanPeninjauanKembali =
    req.body.idHasilPutusanPeninjauanKembali;

  const QUERY = `insert into PeninjauanKembali(idGugatan, tanggalPeninjauanKembali, tanggalPutusanPeninjauanKembali, idHasilPutusanPeninjauanKembali)
  values(${idGugatan}, "${tanggalPeninjauanKembali}", "${tanggalPutusanPeninjauanKembali}", ${idHasilPutusanPeninjauanKembali})`;

  connection.query(QUERY, (err, result) => {
    if (err) console.log(err);
    res.json(result);
  });
});

router.route("/edit/:id").post((req, res) => {
  const id = req.params.id;
  const idGugatan = req.body.idGugatan;
  const tanggalPeninjauanKembali = req.body.tanggalPeninjauanKembali;
  const tanggalPutusanPeninjauanKembali =
    req.body.tanggalPutusanPeninjauanKembali;
  const idHasilPutusanPeninjauanKembali =
    req.body.idHasilPutusanPeninjauanKembali;

  const QUERY = `update PeninjauanKembali
    set idGugatan=${idGugatan}, tanggalPeninjauanKembali="${tanggalPeninjauanKembali}", tanggalPutusanPeninjauanKembali="${tanggalPutusanPeninjauanKembali}", 
    idHasilPutusanPeninjauanKembali=${idHasilPutusanPeninjauanKembali} where id=${id}`;

  connection.query(QUERY, (err, result) => {
    if (err) console.log(err);
    res.json(result);
  });
});

router.route("/hapus/:id").delete((req, res) => {
  const id = req.params.id;
  const QUERY = `delete from PeninjauanKembali where id=${id}`;
  connection.query(QUERY, (err, result) => {
    if (err) console.log(err);
    res.json(result);
  });
});

module.exports = router;
