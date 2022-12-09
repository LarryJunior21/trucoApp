import jwt from 'jsonwebtoken';

export function generateToken(username: string) {
  return jwt.sign(username, process.env.TOKEN_SECRET as string);
}

//TODO authenticate token
