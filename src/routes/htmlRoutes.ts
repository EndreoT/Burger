import * as express from 'express';
import * as htmlController from '../controllers/htmlController';

const router: express.Router = express.Router();

router.get('/', htmlController.getIndex);

export const htmlRouter = router;