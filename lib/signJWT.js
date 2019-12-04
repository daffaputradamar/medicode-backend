const jwt = require("jsonwebtoken");

module.exports.signJWT = function signJWT(payload) {
  return new Promise(async (resolve, reject) => {
    const token = await jwt.sign(
      { data: payload },
      `${process.env.JWT_SECRET}`
    );
    resolve(token);
    reject(new Error("Error signing JWT"));
  });
};
