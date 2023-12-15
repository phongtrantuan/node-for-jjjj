var Db = require("./dboperations");
var Order = require("./order");
const dboperations = require("./dboperations");

var express = require("express");
var bodyParser = require("body-parser");
var cors = require("cors");
var app = express();
var router = express.Router();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use("/api", router);

router.use((request, response, next) => {
  console.log("middleware");
  next();
});

router.route("/test").get((request, response) => {
  response.json({ status: "ok" });
});
router.route("/students").get((request, response) => {
  dboperations.getStudents().then((result) => {
    console.log(result);
    response.json(result[0]);
  });
});

router.route("/hv").get((request, response) => {
  dboperations.getHV().then((result) => {
    response.json(result[0]);
  });
});

router.route("/addHocVien").post((request, response) => {
  // app.post('/', (req, res) => {
  const {
    Hoten,
    Diachi,
    SDT,
    Capbac,
    Chucvu,
    Ngaysinh,
    IDDonvi,
    IDNhomdaotao,
  } = request.body;
  console.log(request.body);
  // const { authorization } = req.headers;
  dboperations
    .addHocVien(
      Hoten,
      Diachi,
      SDT,
      Capbac,
      Chucvu,
      Ngaysinh,
      IDDonvi,
      IDNhomdaotao
    )
    .then((result) => {
      console.log(result);
      response.json(result);
    });
});
router.route("/updateHocVien").post((request, response) => {
  const {
    IDHV,
    Hoten,
    Diachi,
    SDT,
    Capbac,
    Chucvu,
    Ngaysinh,
    IDDonvi,
    IDNhomdaotao,
  } = request.body;
  console.log(request.body);
  dboperations
    .updateHocVien(
      IDHV,
      Hoten,
      Diachi,
      SDT,
      Capbac,
      Chucvu,
      Ngaysinh,
      IDDonvi,
      IDNhomdaotao
    )
    .then((result) => {
      console.log(result);
      response.json(result);
    });
});
router.route("/deleteHocVien").post((request, response) => {
  const { id } = request.body;
  console.log(request.body);
  dboperations.deleteHocVien(id).then((result) => {
    console.log(result);
    response.json(result);
  });
});
router.route("/hocvien").get((request, response) => {
  const { search } = request.query;
  console.log("search", search);
  dboperations.searchHocVien(search).then((result) => {
    console.log(result);
    response.json(result[0]);
  });
});

router.route("/cb").get((request, response) => {
  dboperations.getCbo().then((result) => {
    response.json(result[0]);
  });
});
router.route("/addCanbo").post((request, response) => {
  const { Ten, Ngaysinh, Capbac, Chucvu, Diachi, IDTaikhoan, IDDonvi } =
    request.body;
  console.log(request.body);
  dboperations
    .addCanbo(Ten, Ngaysinh, Capbac, Chucvu, Diachi, IDTaikhoan, IDDonvi)
    .then((result) => {
      console.log(result);
      response.json(result);
    });
});

router.route("/updateCanbo").post((request, response) => {
  const { IDCB, Ten, Ngaysinh, Capbac, Chucvu, Diachi, IDTaikhoan, IDDonvi } =
    request.body;
  console.log(request.body);
  dboperations
    .updateCanbo(
      IDCB,
      Ten,
      Ngaysinh,
      Capbac,
      Chucvu,
      Diachi,
      IDTaikhoan,
      IDDonvi
    )
    .then((result) => {
      console.log("check", result);
      response.json(result);
    });
});

router.route("/deleteCanbo").post((request, response) => {
  const { id } = request.body;
  console.log(request.body);
  dboperations.deleteCanbo(id).then((result) => {
    console.log(result);
    response.json(result);
  });
});

router.route("/canbo").get((request, response) => {
  const { search } = request.query;
  console.log("search", search);
  dboperations.searchCanbo(search).then((result) => {
    console.log(result);
    response.json(result[0]);
  });
});
router.route("/orders/:id").get((request, response) => {
  dboperations.getOrder(request.params.id).then((result) => {
    response.json(result[0]);
  });
});

router.route("/orders").post((request, response) => {
  let order = { ...request.body };

  dboperations.addOrder(order).then((result) => {
    response.status(201).json(result);
  });
});

router.route("/dv").get((request, response) => {
  dboperations.getDvi().then((result) => {
    console.log("check", result[0]);
    response.json(result[0]);
  });
});

router.route("/addDonvi").post((request, response) => {
  // app.post('/', (req, res) => {
  const { Tendonvi, Loaidonvi, IDDonvicha } = request.body;
  console.log(request.body);
  // const { authorization } = req.headers;
  dboperations.addDonvi(Tendonvi, Loaidonvi, IDDonvicha).then((result) => {
    console.log(result);
    response.json(result);
  });
});
router.route("/updateDonvi").post((request, response) => {
  const { IDDV, Tendonvi, Loaidonvi, IDDonvicha } = request.body;
  console.log(request.body);
  dboperations
    .updateDonvi(IDDV, Tendonvi, Loaidonvi, IDDonvicha)
    .then((result) => {
      console.log(result);
      response.json(result);
    });
});
router.route("/deleteDonvi").post((request, response) => {
  const { id } = request.body;
  console.log(request.body);
  dboperations.deleteDonvi(id).then((result) => {
    console.log(result);
    response.json(result);
  });
});
router.route("/donvi").get((request, response) => {
  const { search } = request.query;
  console.log("search", search);
  dboperations.searchDonvi(search).then((result) => {
    console.log(result);
    response.json(result[0]);
  });
});

var port = process.env.PORT || 3001;
app.listen(port);
console.log("Order API is runnning at " + port);
