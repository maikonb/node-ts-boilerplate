import { names } from '../../modules/names/routes/names';
import * as express from 'express';

const router = express.Router();
router.use("/names", names);

export = router 