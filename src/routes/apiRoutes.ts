import * as express from 'express';
import * as apiController from '../controllers/apiControllers';

const router: express.Router = express.Router();


router.get('/burgers', apiController.getAllBurgers);

router.get('/burgers/:burgerId', apiController.getBurger);

router.post('/burgers', apiController.addBurger);

router.put('/burgers/:burgerId', apiController.updateBurger);

router.delete('/burgers/:burgerId', apiController.deleteBurger);

export const apiRouter = router;