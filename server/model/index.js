import Joi from "@hapi/joi";

export const loginSchema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required()
})

export const recordSchema = Joi.object({
    
 firstName: Joi.string().required(), 
 lastName: Joi.string().required(),
 age: Joi.number().required(),
gender: Joi.string().required(),
clubName: Joi.string().required(),
dateOfBirth: Joi.date().required(),
phoneNumber1: Joi.string().required(),
phoneNumber2: Joi.string().allow('', null),
state: Joi.string().required(),
address: Joi.string().required(),
assistant: Joi.string().allow('', null),
dateOfExamination: Joi.date().required(),
bloodPressure: Joi.string().min(6).required(),
bloodSugar: Joi.string().required().required(),
lfEyePty: Joi.number(),
lfEyeGlucoma: Joi.number(),
rfEyeGlucoma: Joi.number(),
lfEyeCatPty: Joi.number(),
lfEyeCat: Joi.number(),
rfEyeCat: Joi.number(),
rfEyePty: Joi.number(),
rfEyeCatPty: Joi.number(),
lfEyeTreatment: Joi.string().allow('', null),
rfEyeTreatment: Joi.string().allow('', null),
lfEyeSurgeryDate:  Joi.string().allow('', null),
rfEyeSurgeryDate: Joi.string().allow('', null),
lfEyeRemarks: Joi.string().allow('', null),
rfEyeRemarks: Joi.string().allow('', null),
examinationStatus: Joi.string().allow('', null),
treatmentCompleted: Joi.string().allow('', null)
})

export const stageThreeSchema = Joi.object({
    lfEyeRemarks: Joi.string().allow('', null),
    rfEyeRemarks: Joi.string().allow('', null),
})

export const stageOneRecordSchema = Joi.object({
   lfEyePty: Joi.number(),
   lfEyeGlucoma: Joi.number(),
   rfEyeGlucoma: Joi.number(),
   lfEyeCatPty: Joi.number(),
   lfEyeCat: Joi.number(),
   rfEyeCat: Joi.number(),
   rfEyePty: Joi.number(),
   rfEyeCatPty: Joi.number(),
   lfEyeTreatment: Joi.string().allow('', null),
   rfEyeTreatment: Joi.string().allow('', null),
   lfEyeSurgeryDate:  Joi.string().allow('', null),
   rfEyeSurgeryDate: Joi.string().allow('', null),
   examinationStatus: Joi.string().allow('', null),
   treatmentCompleted: Joi.string().allow('', null)
   })