"use strict";

module.exports = function (app) {
  var jsonku = require("./controller");

  app.route("/").get(jsonku.index);

  app.route("/tampilpinjam").get(jsonku.tampilsemuapinjam);

  app.route("/tampilpinjam/:id").get(jsonku.tampilpinjamid);

  app.route("/tambahpinjam").post(jsonku.tambahPinjam);
};
