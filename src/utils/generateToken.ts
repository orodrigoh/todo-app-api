import jtw from "jsonwebtoken";

function generateToken(params: string | object | Buffer) {
  return jtw.sign(params, process.env.SECRET_KEY, {
    expiresIn: 86400,
  });
}

export { generateToken };
