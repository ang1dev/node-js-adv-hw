import { getDb } from "../db/mongo-connection.js";
import { ObjectId } from "mongodb";


export default class ZookepperModel {
    static async getAllZookeppers() {
        const collection = await getDb().collection('zookeeper')
      
        const zookeepers = await collection.find().toArray();
        console.log(zookeepers)
        console.log('zookepers', zookeepers);
        return zookeepers
    }

   
    static async addZookeper(zookepper) {
        console.log(zookepper)
        const collection = await getDb().collection('zookeeper');
        const addingNewZookeeper = await collection.insertOne(zookepper);
        return { id: addingNewZookeeper.insertedId, ...zookepper }

    }


    static async editZookeeper(zookeeperId, body) {
        const collection = await getDb().collection('zookeeper');
        const result = await collection.updateOne({ _id: new ObjectId(zookeeperId) }, { $set: body })
        return result;
    }

    static async deleteZookepper(zookeeperId) {
        const collection = await getDb().collection('zookeeper');
        const deleteResponse = await collection.deleteOne({ _id: new ObjectId(zookeeperId) });
        console.log(deleteResponse)
    }
}