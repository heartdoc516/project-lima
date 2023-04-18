import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export async function hashPassword(password, salt) {
  const hashedPassword = await bcrypt.hash(password, salt);
  return hashedPassword;
}

export async function comparePasswords(password, hashedPassword) {
  const passwordIsValid = await bcrypt.compare(password, hashedPassword);

  return passwordIsValid;
}

export function createJWT(userPayload, secret) {
  const token = jwt.sign(userPayload, secret, {
    expiresIn: Math.floor(Date.now() / 1000) + 60 * 60,
  });
  return token;
}

export function verifyJWT(token, secret) {
  const payload = jwt.verify(token, secret);
  return payload;
}
