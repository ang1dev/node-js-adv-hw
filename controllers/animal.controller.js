import AnimalService from "../services/animal.service.js";
import ZookeeperService from "../services/zookeeper.service.js";
export default class AnimalController {
    static async getAllAnimals(req, res) {
        try {
            const animals = await AnimalService.getAllAnimals(req.query);
            res.status(200).send(animals)
        } catch (error) {
            res.status(500).send({ message: "Something wen't wrong" })
        }
    }

    static async getAnimalsByLoc(req,res){
        try {
            const location = req.params.location;
            const animals = await AnimalService.getAnimalsByLoc(location);
            res.status(200).send(animals);
          } catch (error) {
            res.status(500).send(error.message);
          }

    }


    static async addAnimal(req, res) {
        console.log(req)
        try {
            const animal = await AnimalService.addAnimal(req.body);
            res.status(200).send(animal)
            console.log(req.body)
        } catch (error) {
            console.log(error)
            res.status(500).send({ message: 'Error while adding animal!' })

        }
    }


    static async getAnimalsByZookeeper(req, res) {
        const id = req.params.id;
       
        try {
            const zookeeper = await ZookeeperService.getZookeeperById(id);
           const animal = await AnimalService.getAnimalsByZookeeper(id);
            
            const result = {
                zookeeper: zookeeper,
                animal: animal
            }
            console.log(result)
            res.status(200).send(result);
          
        } catch (error) {
            console.log(error)
            res.status(500).send('Error while fetching students')
        }
    }



    static async updateAnimal(req, res) {
        try {
            const updateAnimal = await AnimalService.updateAnimal(req.params.id, req.body)
            res.status(200).send(updateAnimal)
        } catch (error) {
            res.status(500).send({ message: 'Error while updating animal info!' })
        }
    }

    static async deleteAnimal(req, res) {
        try {
            await AnimalService.deleteAnimal(req.params.id);
            res.sendStatus(200);
        } catch (error) {
            res.status(500).send({ message: "Something went wrong" })
        }

    }




}