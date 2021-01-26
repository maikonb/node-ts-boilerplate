import * as express from "express"

const router = express.Router();

router.get('/', 
  (req, res) => {}
);

router.post('/', 
  (req, res) => { }
);

router.delete('/:nameId', 
  (req, res) => {}
);

router.get('/:name', 
  (req, res) => {}
);

export { router as names };