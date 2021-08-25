import * as express from "express"
import { Container } from "typescript-ioc";
import { CreateNameController } from "../use-cases/create/CreateNameController";
import { ListNamesController } from '../../../common/controllers';
import { DeleteNameController } from '../use-cases/delete/DeleteNameController';

const router = express.Router();

router.get('/', 
  async (req, res) => await Container.get(ListNamesController).execute(req, res)
);
router.post('/', 
  async (req, res) => await Container.get(CreateNameController).execute(req, res)
);
router.delete('/:uuid', 
  async (req, res) => await Container.get(DeleteNameController).execute(req,res)
);
// router.get('/:name', 
//   async (req, res) => await Container.get(FindNamesController).execute(req, res)
// );

export { router as names };