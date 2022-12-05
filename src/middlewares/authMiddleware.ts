import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

interface ITokenPayload {
  id: string;
  iat: number;
  exp: number;
}

function authMiddleware(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const { authorization } = request.headers;

  if (!authorization) {
    return response.status(401).send();
  }
  const token = authorization.replace("Bearer", "").trim();

  try {
    const data = jwt.verify(token, process.env.SECRET_KEY);
    const { id } = data as ITokenPayload;
    request.userId = id;
    return next();
  } catch {
    return response.status(401).send();
  }
}

export { authMiddleware };
