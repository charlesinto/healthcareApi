import express from 'express';
import { verifyToken } from '../middlewares/authMiddleware';
import { validateRecordSchema, verifyAdmin, validateStageOneSchema, validateThreeSchema } from '../middlewares/recordMiddleware';
import { createRecord, getAllRecords, updateRecordStageTwo, updateRecordStageThree } from '../controller/recordController';

const router = express.Router();

router.post('/create-record', verifyToken, validateRecordSchema, createRecord )
router.put('/stage2/update/:id', verifyToken, verifyAdmin, validateStageOneSchema, updateRecordStageTwo)
router.put('/stage3/update/:id', verifyToken, verifyAdmin, validateThreeSchema, updateRecordStageThree)
router.get('/',verifyToken, getAllRecords)

export default router