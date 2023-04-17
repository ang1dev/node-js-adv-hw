import express from  'express';
import ZookeeperController from '../controllers/zookeppers.controller.js';



const router = express.Router();

router.get('/',ZookeeperController.getAllZookeppers)
router.post('/addnew',ZookeeperController.addZookepper);
// // See all animals by zookeeper
// router.get("/animal/:animalId", ZookeeperController.getAnimalsByZookeeper)
router.put('/:id',ZookeeperController.editZookepper)
router.delete('/delete/:id',ZookeeperController.deleteZookeper)


export default router;