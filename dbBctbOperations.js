var config = require("./dbconfig");
const sql = require("mssql");

async function getBctb() {
  try {
    let pool = await sql.connect(config);
    let Bctbs = await pool.request().query("SELECT * from DONVI_NHOMTB");
    return Bctbs.recordsets;
  } catch (error) {
    console.log(error);
  }
}

// async function searchBctb(search) {
//   try {
//     let pool = await sql.connect(config);
//     let searchBctb = await pool
//       .request()
//       .input("SearchTerm", sql.NVarChar, search)
//       .execute("Timkiemloaitrangbi");

//     return searchBctb.recordsets;
//   } catch (err) {
//     console.log(err);
//   }
// }

async function deleteBctb(Tendonvi, Tennhom) {
  try {
    let pool = await sql.connect(config);
    let Bctb = await pool
      .request()
      .input("Tendonvi", sql.Int, Tendonvi)
      .input("Tennhom", sql.Int, Tennhom)
      .execute("XoaDonviNhomtb");

    return Bctb.recordsets;
  } catch (err) {
    console.log(err);
  }
}

async function updateBctb(
  Tendonvi,
  Tennhom,
  Thoigianbienche,
) {
  try {
    let pool = await sql.connect(config);
    let updateBctb = await pool
      .request()
      .input("Tendonvi", sql.Int, Tendonvi)
      .input("Tennhom", sql.NVarChar, Tennhom)
      .input("thoigianbienche", sql.NVarChar, Thoigianbienche)
      .execute("Sualoaithietbi");

    return updateBctb.recordsets;
  } catch (err) {
    console.log(err);
  }
}

async function addBctb(
  Tendonvi,
  Tennhom,
  Thoigianbienche,
) {
  try {
    let pool = await sql.connect(config);
    let insertBctb = await pool
      .request()
      .input("Tendonvi", sql.Int, Tendonvi)
      .input("Tennhom", sql.NVarChar, Tennhom)
      .input("thoigianbienche", sql.NVarChar, Thoigianbienche)
      .execute("BiencheDonviNhomtb");
    return insertBctb.recordsets;
  } catch (err) {
    console.log(err);
  }
}

module.exports = {
  getBctb: getBctb,
  // searchBctb: searchBctb,
  addBctb: addBctb,
  updateBctb: updateBctb,
  deleteBctb: deleteBctb,
};
