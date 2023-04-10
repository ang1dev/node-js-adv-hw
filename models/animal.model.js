import { getDb } from "../db/mongo-connection.js";
import { ObjectId } from "mongodb";

export default class AnimalModel {
    static async getAllAnimals(query) {
        console.log(query)
        try {
            const collection = await getDb().collection('animals');
            var animals = await collection.find().toArray()
            if(query.location){

            return animals.filter(s => s.location == query.location)
             
            }
            return animals;
        } catch (error) {
            console.log(error);
        }

    }

  static async addAnimal(animal){
        const collection = await getDb().collection('animals');
        // console.log(collection)
        const newAnimal = await collection.insertOne(animal);
        return { id: newAnimal.insertedId, ...animal};

    }

    static async updateAnimal(animalId,body){
        const collection = await getDb().collection('animals');
        const result = await collection.updateOne({ _id: new ObjectId(animalId) }, { $set: body })
        return result;
    }

    static async deleteAnimal(animalId){
        const collection = await getDb().collection('animals');
        const result = await collection.deleteOne({_id:new ObjectId(animalId)})
        console.log(`Animal with id: ${animalId} was deleted`)
    
    }

}