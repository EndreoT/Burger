import * as express from 'express';
import * as htmlController from '../controllers/htmlController';

const router = express.Router();

router.get('/burgers', htmlController.getIndex);

export const htmlRouter = router;