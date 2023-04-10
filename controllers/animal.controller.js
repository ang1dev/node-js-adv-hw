import AnimalModel from '../models/animal.model.js';

export default class AnimalController {
    static async getAllAnimals(req, res) {
        try {
            const animals = await AnimalModel.getAllAnimals(req.query);
            res.status(200).send(animals)
        } catch (error) {
            res.status(500).send({ message: "Something wen't wrong" })
        }
    }

    static async addAnimal(req, res) {
        try {
            const animal = await AnimalModel.addAnimal(req.body);
            res.status(200).send(animal)
        } catch (error) {
            res.status(500).send({ message: 'Error while adding animal!' })
        }
    }

    static async updateAnimal(req, res) {
        try {
            const updateAnimal = await AnimalModel.updateAnimal(req.params.id, req.body)
            res.status(200).send(updateAnimal)
        } catch (error) {
            res.status(500).send({ message: 'Error while updating animal info!' })
        }
    }

    static async deleteAnimal(req, res) {
        try {
            await AnimalModel.deleteAnimal(req.params.id);
            res.sendStatus(200);
        } catch (error) {
            res.status(500).send({ message: "Something went wrong" })
        }

    }

    


}