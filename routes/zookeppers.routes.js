import express from  'express';
import ZookeeperController from '../controllers/zookeppers.controller.js';
import zookeeperValidator from '../middlewares/zookeeper-validator.middleware.js'


const router = express.Router();

router.get('/',ZookeeperController.getAllZookeppers)
router.post('/addnew',zookeeperValidator,ZookeeperController.addZookepper);
router.put('/:id',ZookeeperController.editZookepper)
router.delete('/delete/:id',ZookeeperController.deleteZookeper)


export default router;