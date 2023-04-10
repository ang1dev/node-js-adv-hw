import express from "express";
import zookeepersRouter from './routes/zookeppers.routes.js'
import animalRouter from './routes/animal.routes.js'


const router = express.Router();

router.use('/zookeepers',zookeepersRouter)
router.use('/animals',animalRouter)

export default router;
