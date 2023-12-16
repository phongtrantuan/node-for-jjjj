var config = require("./dbconfig");
const sql = require("mssql");

async function getBctb(
  Tendonvi,
  Tennhom,
) {
  try {
    let pool = await sql.connect(config);
    let Bctbs = await pool
      .request()
      .input("TenDonVi", sql.NVarChar, Tendonvi)
      .input("TenNhomTB", sql.NVarChar, Tennhom)
      .execute("ThongtinBiencheDonViNhomTB");
    return Bctbs.recordsets;
  } catch (error) {
    console.log(error);
  }
}

async function getTendonvi() {
  try {
    let pool = await sql.connect(config);
    let tendonvis = await pool
      .request()
      .execute("Tendonvi");
    return tendonvis.recordsets;
  } catch (error) {
    console.log(error);
  }
}

async function getTennhomtrangbi() {
  try {
    let pool = await sql.connect(config);
    let tennhomtrangbis = await pool
      .request()
      .execute("Tennhomtrangbi");
    return tennhomtrangbis.recordsets;
  } catch (error) {
    console.log(error);
  }
}

async function deleteBctb(Tendonvi, Tennhom) {
  try {
    let pool = await sql.connect(config);
    let Bctb = await pool
      .request()
      .input("Tendonvi", sql.NVarChar, Tendonvi)
      .input("Tennhom", sql.NVarChar, Tennhom)
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
      .input("Tendonvi", sql.NVarChar, Tendonvi)
      .input("Tennhom", sql.NVarChar, Tennhom)
      .input("thoigianbienche", sql.NVarChar, Thoigianbienche)
      .execute("SuaDonviNhomtb");

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
      .input("Tendonvi", sql.NVarChar, Tendonvi)
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
  getTendonvi: getTendonvi,
  getTennhomtrangbi: getTennhomtrangbi,
  addBctb: addBctb,
  updateBctb: updateBctb,
  deleteBctb: deleteBctb,
};
