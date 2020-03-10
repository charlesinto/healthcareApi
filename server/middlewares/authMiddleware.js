import { loginSchema } from "../model"
import jwt from "jsonwebtoken";

export const valiadateEmailAndPassword = (req, res, next) => {
    const {error,} = loginSchema.validate(req.boy)
    if(error){
        return res.status(400).send({
            message: `Email and Password is required`,
            validationMessage: error
        })
    }
    next()
}

export const verifyToken = (req, res, next) => {
    const bearerHeader = req.body.token || req.headers['x-access-token'];
        if (!bearerHeader){
            return res.status(401).send({
                message: 'Unauthorized user'
            });
        } else if(typeof bearerHeader !== undefined){
            jwt.verify(bearerHeader, process.env.SECRET_KEY,(err, authData) => {
                if(err) {
                    return res.status(403).send({
                        message: "Forbidden access"
                    });
                }
              req.user = authData;
              next();
            })
            
        }
}