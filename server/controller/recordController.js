import { executeQuery } from "../helper"


export const createRecord = async (req, res) => {
    try{
       const {firstName, lastName, age, gender, 
                clubName, dateOfBirth, phoneNumber1, phoneNumber2, state, address,assistant,
                dateOfExamination,bloodPressure,bloodSugar, lfEyePty,lfEyeCat,lfEyeCatPty, rfEyePty,rfEyeCat,rfEyeCatPty}
                = req.body;
                const time = new Date();
                const year = time.getFullYear();;
                const month = time.getMonth() + 1;
                const today = time.getDate();
        let result = await executeQuery('select * from patientRecord');
        const counter = result.length;
        const recordNumber = `${year}${month}${today}${counter+1}`
        await executeQuery(`insert into patientRecord(firstName, lastName, age, gender, clubName, dateOfBirth, phoneNumber1, phoneNumber2, state, address,assistant,dateOfExamination,bloodPressure,bloodSugar, lfEyePty,lfEyeCat,lfEyeCatPty, rfEyePty,rfEyeCat,rfEyeCatPty,recordNumber, createdBy, examinationStatus,treatmentCompleted)values($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17,$18,$19,$20,$21,$22,$23,$24)`,[firstName, lastName, age, gender, 
                clubName, dateOfBirth, phoneNumber1, phoneNumber2, state, address,assistant,
                dateOfExamination,bloodPressure,bloodSugar, lfEyePty,lfEyeCat,lfEyeCatPty, rfEyePty,rfEyeCat,rfEyeCatPty,
                recordNumber, req.user.email, 'Stage 1', 0
                ])
        result = await executeQuery('select * from patientRecord where recordNumber = $1', [recordNumber])
        res.status(201).send({message:'Record created successfully', data: result[0]})
    }catch(error) { res.status(500).send({message:'some errors were encountered', error})}
    
}

export const getAllRecords = async (req, res) => {
    try{
        const result = await executeQuery('select * from patientRecord');
        res.status(200).send({message:'record fetched successfully', data: result})
    }catch(error) { res.status(500).send({message:'some errors were encountered', error})}
}


export const updateRecordStageTwo = async (req, res) => {
    try{
        const {lfEyePty,
            lfEyeGlucoma,
            rfEyeGlucoma,
            lfEyeCatPty,
            lfEyeCat,
            rfEyeCat,
            rfEyePty,
            rfEyeCatPty,
            lfEyeTreatment,
            rfEyeTreatment,
            lfEyeSurgeryDate,
            rfEyeSurgeryDate} = req.body;
        const recordNumber = req.params.id;
        console.log(recordNumber)
        await executeQuery(`update patientRecord set  lfEyePty= $1, lfEyeGlucoma= $2,
        rfEyeGlucoma=$3, lfEyeCatPty=$4, lfEyeCat= $5,rfEyeCat=$6,rfEyePty=$7,rfEyeCatPty=$8,lfEyeTreatment=$9,
        rfEyeTreatment=$10,lfEyeSurgeryDate=$11,rfEyeSurgeryDate=$12,examinationStatus=$13
        where recordNumber = $14`,[lfEyePty,
            lfEyeGlucoma,
            rfEyeGlucoma,
            lfEyeCatPty,
            lfEyeCat,
            rfEyeCat,
            rfEyePty,
            rfEyeCatPty,
            lfEyeTreatment,
            rfEyeTreatment,
            lfEyeSurgeryDate,
            rfEyeSurgeryDate,'Stage 2',recordNumber ])
         const result = await executeQuery('select * from patientRecord where recordNumber =$1',[recordNumber])
         res.status(200).send({message:'Record updated successfully', data: result[0]})
    }catch(error) {res.status(500).send({message:'some errors were encountered', error})}
}

export const updateRecordStageThree = async (req, res) => {
    try{
        const {rfEyeRemarks,
            lfEyeRemarks} = req.body;
        const recordNumber = req.params.id;
        await executeQuery(`update patientRecord set  rfEyeRemarks= $1, lfEyeRemarks= $2,examinationStatus=$3
        where recordNumber = $4`,[rfEyeRemarks,
            lfEyeRemarks,'Stage 3',recordNumber ])
         const result = await executeQuery('select * from patientRecord where recordNumber =$1',[recordNumber])
         res.status(200).send({message:'Record updated successfully', data: result[0]})
    }catch(error) { 
        console.log('error', error)
        res.status(500).send({message:'some errors were encountered', error})}
}
