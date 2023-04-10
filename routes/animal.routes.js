import express from 'express';
import AnimalController from '../controllers/animal.controller.js';

const router = express.Router();

router.get('/get',AnimalController.getAllAnimals);
router.post('/add',AnimalController.addAnimal)
router.put('/edit/:id',AnimalController.updateAnimal)
router.delete('/delete/:id',AnimalController.deleteAnimal)

export default router;