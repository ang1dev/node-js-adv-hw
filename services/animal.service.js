import Animal from '../models/animal.model.js'
import Zookeeper from '../models/zookeppers.model.js';

export default class AnimalService {
    static async getAllAnimals() {
        const animals = await Animal.find()
        return animals;

    }
    static async getAnimalsByLoc(location) {
        const animals = await Animal.find({ location })
        return animals;
    }


    static async getAnimalsByZookeeper(zookeeperId) {
        const animals = await Animal.find({ zookeeper: zookeeperId })
        return animals;
    }

    static async addAnimal(animalData) {
        console.log(animalData)
        const animal = new Animal(animalData);
        console.log(animal)

        const response = await animal.save()
        return response;
    }

    static async updateAnimal(animalId, body) {

        const animal = await Animal.findById(animalId);

        if (!animal) throw new Error(`Animal with ID:${animalId} doesn't exist!`)

        const keys = Object.keys(body);

        keys.forEach(key => {
            if (key !== '_id' && key !== '__v') {
                animal[key] = body[key]
            }
        })

        const editedAnimal = await animal.save();
        return editedAnimal;
    }

    static async deleteAnimal(animalId) {
        await Animal.findByIdAndDelete(animalId)
    }

}

