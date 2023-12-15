var config = require("./dbconfig");
const sql = require("mssql");

async function getNtb() {
  try {
    let pool = await sql.connect(config);
    let hv = await pool.request().query("SELECT * from NHOM_TB");
    return hv.recordsets;
  } catch (error) {
    console.log(error);
  }
}

async function searchNtb(search) {
  try {
    let pool = await sql.connect(config);
    let searchNtb = await pool
      .request()
      .input("SearchTerm", sql.NVarChar, search)
      .execute("Timkiemnhomtrangbi");

    return searchNtb.recordsets;
  } catch (err) {
    console.log(err);
  }
}

async function deleteNtb(id) {
  try {
    let pool = await sql.connect(config);
    let ntb = await pool
      .request()
      .input("IDNTB", sql.Int, id)
      .execute("Xoanhomtb");

    return ntb.recordsets;
  } catch (err) {
    console.log(err);
  }
}

async function updateNtb(
  IDNTB,
  Tennhom,
) {
  try {
    let pool = await sql.connect(config);
    let updateNtb = await pool
      .request()
      .input("IDNTB", sql.Int, IDNTB)
      .input("Tennhomthietbi", sql.NVarChar, Tennhom)
      .execute("Suanhomthietbi");

    return updateNtb.recordsets;
  } catch (err) {
    console.log(err);
  }
}

async function addNtb(
  Tennhom,
) {
  try {
    let pool = await sql.connect(config);
    let insertNtb = await pool
      .request()
      .input("tennhom", sql.NVarChar, Tennhom)
      .execute("Themnhomthietbi");
    return insertNtb.recordsets;
  } catch (err) {
    console.log(err);
  }
}

module.exports = {
  getNtb: getNtb,
  searchNtb: searchNtb,
  addNtb: addNtb,
  updateNtb: updateNtb,
  deleteNtb: deleteNtb,
};
