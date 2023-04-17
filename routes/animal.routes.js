import express from 'express';
import AnimalController from '../controllers/animal.controller.js';

const router = express.Router();

router.get('/get',AnimalController.getAllAnimals);
router.post('/add',AnimalController.addAnimal)
router.put('/edit/:id',AnimalController.updateAnimal)
// See all animals by location
router.get("/location/:location", AnimalController.getAnimalsByLoc)
// See all animals by zookeeper
router.get("/zookeeper/:id", AnimalController.getAnimalsByZookeeper)

router.delete('/delete/:id',AnimalController.deleteAnimal)

export default router;