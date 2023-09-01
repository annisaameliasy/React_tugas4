"use strict";

var response = require("./res");
var connection = require("./koneksi");

exports.index = function (req, res) {
  response.ok("Aplikasi REST API ku berjalan!", res);
};

//menampilkan semua data pinjaman
exports.tampilsemuapinjam = function (req, res) {
  connection.query("SELECT * FROM tb_pinjaman", function (error, rows, fileds) {
    if (error) {
      console.log(error);
    } else {
      response.ok(rows, res);
    }
  });
};

//menampilkan semua data pinjaman berdasarkan id
exports.tampilpinjamid = function (req, res) {
  let id = req.params.id;
  connection.query(
    "SELECT * FROM tb_pinjaman WHERE id = ?",
    [id],
    function (error, rows, fields) {
      if (error) {
        console.log(error);
      } else {
        response.ok(rows, res);
      }
    }
  );
};

//menambahkan data pinjam
exports.tambahPinjam = function (req, res) {
  //akan mengambil data tanggal,nama,buku dari req.body (data yang akan di POST berdasarkan iputan)
  var tanggal = req.body.tanggal;
  var nama = req.body.nama;
  var buku = req.body.buku;

  connection.query(
    "INSERT INTO tb_pinjaman (tanggal_pinjam,nama,nama_buku) VALUES(?,?,?)",
    [tanggal, nama, buku],
    function (error, rows, fields) {
      if (error) {
        console.log(error);
      } else {
        response.ok("Berhasil Menambahkan Data!", res);
      }
    }
  );
};
