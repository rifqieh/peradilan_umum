const router = require("express").Router();
const connection = require("../db");

router.route("/").get((req, res) => {
  const QUERY = `select Majelis.id, Majelis.nip, Majelis.nama, JabatanMajelis.jabatan from Majelis
  join JabatanMajelis on Majelis.idJabatan = JabatanMajelis.id;`;
  connection.query(QUERY, (err, result) => {
    if (err) console.log(err);
    res.json({ data: result });
  });
});

router.route("/:id").get((req, res) => {
  const id = req.params.id;
  const QUERY = `select * from Majelis where id=${id}`;
  connection.query(QUERY, (err, result) => {
    if (err) console.log(err);
    res.json({ data: result });
  });
});

router.route("/tambah").post((req, res) => {
  const nip = req.body.nip;
  const nama = req.body.nama;
  const idJabatan = req.body.jabatan;

  console.log("hiya");
  console.log(req.body);

  const QUERY = `insert into Majelis(nip, nama, idJabatan)
  values("${nip}", "${nama}", ${idJabatan})`;

  connection.query(QUERY, (err, result) => {
    if (err) console.log(err);
    res.json(result);
  });
});

router.route("/jabatan/:id").get((req, res) => {
  const id = req.params.id;
  const QUERY = `select * from Majelis where idJabatan=${id}`;
  connection.query(QUERY, (err, result) => {
    if (err) console.log(err);
    res.json({ data: result });
  });
});

router.route("/edit/:id").post((req, res) => {
  const id = req.params.id;
  const nip = req.body.nip;
  const nama = req.body.nama;
  const idJabatan = req.body.jabatan;

  console.log("hiya");
  console.log(req.body);

  const QUERY = `update Majelis
  set nip="${nip}", nama="${nama}", idJabatan="${idJabatan}"
  where id=${id}`;

  connection.query(QUERY, (err, result) => {
    if (err) console.log(err);
    res.json(result);
  });
});

router.route("/hapus/:id").delete((req, res) => {
  const id = req.params.id;
  const QUERY = `delete from Majelis where id=${id}`;
  connection.query(QUERY, (err, result) => {
    if (err) console.log(err);
    res.json(result);
  });
});

module.exports = router;
