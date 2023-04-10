import express from  'express';
import ZookeeperController from '../controllers/zookeppers.controller.js';
import zookeeperValidator from '../middlewares/zookeeper-validator.middleware.js'


const router = express.Router();

router.get('/',zookeeperValidator,ZookeeperController.getAllZookeppers)
router.post('/addnew',zookeeperValidator,ZookeeperController.addZookepper);
router.put('/:id',zookeeperValidator,ZookeeperController.editZookepper)
router.delete('/delete/:id',zookeeperValidator,ZookeeperController.deleteZookeper)


export default router;