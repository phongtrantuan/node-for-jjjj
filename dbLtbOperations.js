var config = require("./dbconfig");
const sql = require("mssql");

async function getLtb() {
  try {
    let pool = await sql.connect(config);
    let ltbs = await pool.request().query("SELECT * from LOAI_TB");
    return ltbs.recordsets;
  } catch (error) {
    console.log(error);
  }
}

async function searchLtb(search) {
  try {
    let pool = await sql.connect(config);
    let searchLtb = await pool
      .request()
      .input("SearchTerm", sql.NVarChar, search)
      .execute("Timkiemloaitrangbi");

    return searchLtb.recordsets;
  } catch (err) {
    console.log(err);
  }
}

async function deleteLtb(id) {
  try {
    let pool = await sql.connect(config);
    let Ltb = await pool
      .request()
      .input("IDLTB", sql.Int, id)
      .execute("Xoaloaitb");

    return Ltb.recordsets;
  } catch (err) {
    console.log(err);
  }
}

async function updateLtb(
  IDLTB,
  Tenloai,
  IDnhomtb,
) {
  try {
    let pool = await sql.connect(config);
    let updateLtb = await pool
      .request()
      .input("IDLTB", sql.Int, IDLTB)
      .input("Tenloaithietbi", sql.NVarChar, Tenloai)
      .input("IDnhomthietbi", sql.NVarChar, IDnhomtb)
      .execute("Sualoaithietbi");

    return updateLtb.recordsets;
  } catch (err) {
    console.log(err);
  }
}

async function addLtb(
  Tenloai,
  IDnhomtb,
) {
  try {
    let pool = await sql.connect(config);
    let insertLtb = await pool
      .request()
      .input("tenloai", sql.NVarChar, Tenloai)
      .input("IDnhomtb", sql.NVarChar, IDnhomtb)
      .execute("Themloaithietbi");
    return insertLtb.recordsets;
  } catch (err) {
    console.log(err);
  }
}

module.exports = {
  getLtb: getLtb,
  searchLtb: searchLtb,
  addLtb: addLtb,
  updateLtb: updateLtb,
  deleteLtb: deleteLtb,
};
