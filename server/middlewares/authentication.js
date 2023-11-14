const { verifyToken } = require("../helpers/jwt");
const { User } = require("../models");
async function authentication(req, res, next) {
  try {
    //1 cek apakah user menyertakan access token
    const { access_token } = req.headers;
    if (!access_token) {
      throw { name: "unauthenticated" };
    }
    //2 decode kodenya
    const data = verifyToken(access_token); //data itu payload
    //3. validasi apakah id dalam payload/data ada didalam database
    const findUser = await User.findByPk(data.id);
    if (!findUser) {
      throw "unauthenticated";
    }
    //4. kita bisa simpan informasi user yang telah login di request
    //buat key baru dalam req, bisa pake object bisa lsg value
    req.user = {
      // dapatin id bisa dari payload bisa dari findUser
      //bisa tambahkan dll jg bukan hanya id
      id: findUser.id,
      role: findUser.role,
      email: findUser.email,
    };
    next();
  } catch (error) {
    // console.log(error);
    // if ((error.name === "unauthenticated" || error.name === "JsonWebTokenError")) {
    //   //tanya ke buddy misal gpake jsonweberrortoken tp ttp masuk ke 401
    //   res.status(401).json({ messgae: "Invalid Token" });
    // } else {
    //   res.status(500).json({ messgae: "Internal server Error!" });
    // }
    //error nya pindah ke error handler di app.js
    next(error);
  }
}

module.exports = authentication;
