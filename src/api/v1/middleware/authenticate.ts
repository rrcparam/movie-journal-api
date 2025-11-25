import { Request, Response, NextFunction } from "express";
import { auth } from "../../../config/firebaseConfig";

export const authenticate = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const header = req.headers.authorization;

        if (!header || !header.startsWith("Bearer ")) {
            return res.status(401).json({ message: "No token provided" });
        }

        const token = header.split(" ")[1];

        const decoded = await auth.verifyIdToken(token);

        res.locals.uid = decoded.uid;

        next();
    } catch (err) {
        return res.status(401).json({ message: "Invalid token" });
    }
};

export default authenticate;
