const express = require("express");
const cors = require("cors");
const bodyParses = require("body-parser");

const app = express();

app.use(cors());
app.use(bodyParses.urlencoded({ extended: false }));
app.use(bodyParses.json());

app.listen(4000, () => {
  console.log("server berjalan pada port 4000");
});

//ROUTER
const orangRouter = require("./routes/orang");
const majelisRouter = require("./routes/majelis");
const gugatanRouter = require("./routes/gugatan");
const bandingRouter = require("./routes/banding");
const kasasiRouter = require("./routes/kasasi");
const peninjauanKembaliRouter = require("./routes/peninjauan-kembali");

//USE
app.use("/orang", orangRouter);
app.use("/majelis", majelisRouter);
app.use("/gugatan", gugatanRouter);
app.use("/banding", bandingRouter);
app.use("/kasasi", kasasiRouter);
app.use("/peninjauan-kembali", peninjauanKembaliRouter);
