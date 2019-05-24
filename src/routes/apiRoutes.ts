import * as express from 'express';
import * as apiController from '../controllers/apiControllers';

const router = express.Router();

router.get('/burgers', apiController.getAllBurgers);

export const apiRouter = router;