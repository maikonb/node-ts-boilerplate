import * as express from "express"
import { Container } from "typescript-ioc";
import { CreateNameController } from "../controllers/names/CreateNameController";
import { DeleteNameController } from "../controllers/names/DeleteNameController";
import { FindNamesController } from "../controllers/names/FindNamesController";
import { GetNamesController } from "../controllers/names/GetNamesController";

const router = express.Router();

router.get('/', 
  async (req, res) => await Container.get(GetNamesController).execute(req, res)
);
router.post('/', 
  async (req, res) => await Container.get(CreateNameController).execute(req, res)
);
router.delete('/:nameId', 
  async (req, res) => await Container.get(DeleteNameController).execute(req,res)
);
router.get('/:name', 
  async (req, res) => await Container.get(FindNamesController).execute(req, res)
);

export { router as names };