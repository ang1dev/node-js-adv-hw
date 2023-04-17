import Zookeeper from "../models/zookeppers.model.js"
export default class ZookeeperService {
    static async getAllZookeppers() {
        const zookeepers = await Zookeeper.find({})

        return zookeepers;
    }

    static async addZookeper(zookeeperData) {

        const zookeeper = new Zookeeper(zookeeperData);

        const response = await zookeeper.save()
        return response;

    }

    static async getZookeeperById(id) {
        const zookeeper = await Zookeeper.findById(id)
        console.log(zookeeper)
        return zookeeper;
    }

    static async editZookeeper(zookeeperId, body) {
        const zookeeper = await Zookeeper.findById(zookeeperId);

        if (!zookeeper) throw new Error(`Zookeeper with ID:${zookeeperId} doesn't exist!`)

        const keys = Object.keys(body);

        keys.forEach(key => {
            if (key !== '_id' && key !== '__v') {
                zookeeper[key] = body[key]
            }
        })

        const editedZookeeper = await zookeeper.save();
        return editedZookeeper;
    }



    static async deleteZookepper(zookeeperId) {
        await Zookeeper.findByIdAndDelete(zookeeperId)
    }

}