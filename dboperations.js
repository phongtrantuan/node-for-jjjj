var config = require("./dbconfig");
const sql = require("mssql");

async function getStudents() {
  try {
    let pool = await sql.connect(config);
    let students = await pool.request().query("SELECT * from Donvi");
    return students.recordsets;
  } catch (error) {
    console.log(error);
  }
}

async function getHV() {
  try {
    let pool = await sql.connect(config);
    let hv = await pool.request().query("SELECT * from Hocvien");
    return hv.recordsets;
  } catch (error) {
    console.log(error);
  }
}

async function searchHocVien(search) {
  try {
    let pool = await sql.connect(config);
    let searchHocVien = await pool
      .request()
      .input("SearchTerm", sql.NVarChar, search)
      .execute("Timkiemhocvien");

    // return res.recordsets;
    return searchHocVien.recordsets;
  } catch (err) {
    console.log(err);
  }
}

async function deleteHocVien(id) {
  try {
    let pool = await sql.connect(config);
    let deleteHocVien = await pool
      .request()
      .input("IDHV", sql.Int, id)
      .execute("Xoahocvien");

    // return res.recordsets;
    return deleteHocVien.recordsets;
  } catch (err) {
    console.log(err);
  }
}
async function updateHocVien(
  IDHV,
  Hoten,
  Diachi,
  SDT,
  Capbac,
  Chucvu,
  Ngaysinh,
  IDDonvi,
  IDNhomdaotao
) {
  try {
    let pool = await sql.connect(config);
    let insertHocVien = await pool
      .request()
      .input("IDHV", sql.Int, IDHV)
      .input("Hoten", sql.NVarChar, Hoten)
      .input("Diachi", sql.NVarChar, Diachi)
      .input("SDT", sql.NChar, SDT)
      .input("Capbac", sql.NVarChar, Capbac)
      .input("Chucvu", sql.NVarChar, Chucvu)
      .input("Ngaysinh", sql.Date, Ngaysinh)
      .input("IDDonvi", sql.Int, IDDonvi)
      .input("IDNhomdaotao", sql.Int, IDNhomdaotao)
      .execute("Suahocvien");

    // return res.recordsets;
    return insertHocVien.recordsets;
  } catch (err) {
    console.log(err);
  }
}

async function addHocVien(
  Hoten,
  Diachi,
  SDT,
  Capbac,
  Chucvu,
  Ngaysinh,
  IDDonvi,
  IDNhomdaotao
) {
  try {
    let pool = await sql.connect(config);
    console.log(`INSERT INTO HOCVIEN (Hoten, Ngaysinh, Diachi, SDT, Capbac, Chucvu, IDDonvi, IDNhomdaotao)
    VALUES ('${Hoten}', '${Ngaysinh}', '${Diachi}', '${SDT}', '${Capbac}', '${Chucvu}', '${IDDonvi}', '${IDNhomdaotao}');`);
    let insertHocVien = await pool
      .request()
      .input("Hoten", sql.NVarChar, Hoten)
      .input("Diachi", sql.NVarChar, Diachi)
      .input("SDT", sql.NChar, SDT)
      .input("Capbac", sql.NVarChar, Capbac)
      .input("Chucvu", sql.NVarChar, Chucvu)
      .input("Ngaysinh", sql.Date, Ngaysinh)
      .input("IDDonvi", sql.Int, IDDonvi)
      .input("IDNhomdaotao", sql.Int, IDNhomdaotao)
      .execute("Themhocvien");
    return insertHocVien.recordsets;
  } catch (err) {
    console.log(err);
  }
}

async function getCbo() {
  try {
    let pool = await sql.connect(config);
    let cb = await pool.request().query("SELECT * from CANBO");
    return cb.recordsets;
  } catch (error) {
    console.log(error);
  }
}

async function searchCanbo(search) {
  try {
    let pool = await sql.connect(config);
    let searchCanbo = await pool
      .request()
      .input("SearchTerm", sql.NVarChar, search)
      .execute("Timkiemcanbo");

    return searchCanbo.recordsets;
  } catch (err) {
    console.log(err);
  }
}
async function deleteCanbo(id) {
  try {
    let pool = await sql.connect(config);
    let deleteCanbo = await pool
      .request()
      .input("IDCB", sql.Int, id)
      .execute("Xoacanbo");
    return deleteCanbo.recordsets;
  } catch (err) {
    console.log(err);
  }
}

async function updateCanbo(
  IDCB,
  Ten,
  Ngaysinh,
  Capbac,
  Chucvu,
  Diachi,
  IDTaikhoan,
  IDDonvi
) {
  try {
    let pool = await sql.connect(config);
    let updateCanbo = await pool
      .request()
      .input("IDCB", sql.Int, IDCB)
      .input("Ten", sql.NVarChar, Ten)
      .input("Ngaysinh", sql.Date, Ngaysinh)
      .input("Capbac", sql.NVarChar, Capbac)
      .input("Chucvu", sql.NVarChar, Chucvu)
      .input("Diachi", sql.NVarChar, Diachi)
      .input("IDTaikhoan", sql.Int, IDTaikhoan)
      .input("IDDonvi", sql.Int, IDDonvi)
      .execute("Suacanbo");
      console.log("success in")
      console.log(Ten)
    return updateCanbo.recordsets;
  } catch (err) {
    console.log(err);
  }
}

async function addCanbo(
  Ten,
  Ngaysinh,
  Capbac,
  Chucvu,
  Diachi,
  IDTaikhoan,
  IDDonvi
) {
  try {
    let pool = await sql.connect(config);
    console.log(`INSERT INTO CANBO (Ten, Ngaysinh,Capbac, Chucvu, Diachi, IDTaikhoan, IDDonvi )
    VALUES ('${Ten}', '${Ngaysinh}','${Capbac}', '${Chucvu}', '${Diachi}',   '${IDTaikhoan},'${IDDonvi}' ');`);
    let insertCanbo = await pool
      .request()
      .input("Ten", sql.NVarChar, Ten)
      .input("Ngaysinh", sql.Date, Ngaysinh)
      .input("Capbac", sql.NVarChar, Capbac)
      .input("Chucvu", sql.NVarChar, Chucvu)
      .input("Diachi", sql.NVarChar, Diachi)
      .input("IDTaikhoan", sql.Int, IDTaikhoan)
      .input("IDDonvi", sql.Int, IDDonvi)
      .execute("Themcanbo");
    return insertCanbo.recordsets;
  } catch (err) {
    console.log(err);
  }
}

async function getDvi() {
  try {
    let pool = await sql.connect(config);
    let cb = await pool.request().query("SELECT * from DONVI");
    return cb.recordsets;
  } catch (error) {
    console.log(error);
  }
}

async function searchDonvi(search) {
  try {
    let pool = await sql.connect(config);
    let searchDonvi = await pool
      .request()
      .input("SearchTerm", sql.NVarChar, search)
      .execute("Timkiemdonvi");
    return searchDonvi.recordsets;
  } catch (err) {
    console.log(err);
  }
}
async function deleteDonvi(id) {
  try {
    let pool = await sql.connect(config);
    let deleteDonvi = await pool
      .request()
      .input("IDDV", sql.Int, id)
      .execute("Xoadonvi");
    return deleteDonvi.recordsets;
  } catch (err) {
    console.log(err);
  }
}

async function updateDonvi(
  IDDV,
  Tendonvi,
  Loaidonvi,
  IDDonvicha
) {
  try {
    let pool = await sql.connect(config);
    let updateDonvi= await pool
      .request()
      .input("IDDV", sql.Int, IDDV)
      .input("Tendonvi", sql.NVarChar, Tendonvi)
      .input("Loaidonvi", sql.NVarChar, Loaidonvi)
      .input("IDDonvicha", sql.Int, IDDonvicha)
      .execute("Suadonvi");
      console.log("success in")
      console.log(Tendonvi)
    return updateDonvi.recordsets;
  } catch (err) {
    console.log(err);
  }
}

async function addDonvi(
  Tendonvi,
  Loaidonvi,
  IDDonvicha,
) {
  try {
    let pool = await sql.connect(config);
    console.log(`INSERT INTO DONVI (Tendonvi, Loaidonvi, IDDonvicha )
    VALUES ('${Tendonvi}','${Loaidonvi}','${IDDonvicha}');`);
    let insertDonvi = await pool
      .request()
      .input("Tendonvi", sql.NVarChar, Tendonvi)
      .input("Loaidonvi", sql.NVarChar, Loaidonvi)
      .input("IDDonvicha", sql.Int, IDDonvicha)
      .execute("Themdonvi");
    return insertDonvi.recordsets;
  } catch (err) {
    console.log(err);
  }
}

module.exports = {
  getStudents: getStudents,
  getHV: getHV,
  addHocVien: addHocVien,
  updateHocVien: updateHocVien,
  deleteHocVien: deleteHocVien,
  searchHocVien: searchHocVien,
  getCbo: getCbo,
  addCanbo: addCanbo,
  updateCanbo: updateCanbo,
  deleteCanbo: deleteCanbo,
  searchCanbo: searchCanbo,
  getDvi: getDvi,
  addDonvi: addDonvi,
  updateDonvi: updateDonvi,
  deleteDonvi: deleteDonvi,
  searchDonvi: searchDonvi
};
