import { Router } from "express";
import authenticate from "../middleware/authenticate";

const router = Router();


/**
 * @openapi
 * /auth/validate-token:
 *   get:
 *     summary: Validate a Firebase ID token
 *     tags: [Auth]
 *     security:
 *       - bearerAuth: []      # requires Authorization: Bearer <token>
 *     responses:
 *       "200":
 *         description: Token is valid
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Token is valid!
 *                 uid:
 *                   type: string
 *                   example: f67QULFqNgT2uKL27Oyt8iFy...
 *                 role:
 *                   type: string
 *                   nullable: true
 *                   example: admin
 *       "401":
 *         description: Missing or invalid token
 *         content:
 *           application/json:
 *             schema:
 *               $ref: "#/components/schemas/Error"
 */

router.get("/validate-token", authenticate, (_req, res) => {
  res.json({
    message: "Token is valid!",
    uid: res.locals.uid,
    role: res.locals.role,
  });
});

export default router;
