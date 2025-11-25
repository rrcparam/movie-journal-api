import { Request, Response, NextFunction } from "express";

export const errorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const status = err.name === "AuthenticationError" || err.name === "AuthorizationError"
    ? 401
    : 500;

  res.status(status).json({
    error: err.name,
    message: err.message,
    code: err.code || "UNKNOWN_ERROR",
  });
};
