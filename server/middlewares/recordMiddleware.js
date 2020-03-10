import { recordSchema, stageOneRecordSchema, stageThreeSchema } from "../model"

export const validateRecordSchema = (req, res, next) => {
    const {error} = recordSchema.validate(req.body);
    if(error) return  res.status(404).send({message:'missing or invalid body param', error})
    next()
}

export const validateStageOneSchema = (req, res, next) => {
    const {error} = stageOneRecordSchema.validate(req.body);
    if(error) return  res.status(404).send({message:'missing or invalid body param', error})
    next()
}

export const validateThreeSchema = (req, res, next) => {
    const {error} = stageThreeSchema.validate(req.body);
    if(error) return  res.status(404).send({message:'missing or invalid body param', error})
    next()
}

export const verifyAdmin = (req, res, next) => req.user.roleid !== 5 ? next() : res.status(401).send({message:'Unauthorized access'})