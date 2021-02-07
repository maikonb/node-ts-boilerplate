import { names } from './names';
import * as express from 'express';

const router = express.Router();
router.use("/names", names);

export = router 