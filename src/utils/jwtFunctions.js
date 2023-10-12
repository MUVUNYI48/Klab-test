import jwt from "jsonwebtoken";

export const generateToken = (data) => {
  let Token = jwt.sign(data, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXP
  });
  return Token;
};
