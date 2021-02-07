import * as express from "express"
import { Container } from "typescript-ioc";
import { GetNamesController } from "../controllers/names/GetNamesController";

const router = express.Router();

router.get('/', (req, res) => Container.get(GetNamesController).execute(req, res) );
router.post('/', (req, res) => { });
router.delete('/:nameId', (req, res) => {});
router.get('/:name', (req, res) => {});

export { router as names };