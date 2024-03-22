"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JwtMiddleware = void 0;
const jwt = require('jsonwebtoken');
const encodedtoken = process.env.TOKEN;
const JwtMiddleware = (req, res) => {
    const { authorization } = req.headers;
    if (authorization) {
        const token = authorization.trim().split(' ').pop();
        try {
            const verifyToken = jwt.verify(token, encodedtoken);
            if (verifyToken) {
                req.headers['x-gate-user'] = JSON.stringify(verifyToken["user"]);
                // delete req.headers.authorization;
                return true;
            }
        }
        catch (error) {
            // return 401 code
            res.status(401).send({
                name: 'Unauthorized',
                message: 'Missing or wrong JsonWebToken',
                statusCode: 401,
                time: Date.now()
            });
            return false;
        }
    }
    res.status(401).send({
        name: 'Unauthorized',
        message: 'Missing or wrong JsonWebToken',
        statusCode: 401,
        time: Date.now()
    });
    return false;
};
exports.JwtMiddleware = JwtMiddleware;
