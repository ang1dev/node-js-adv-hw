import ZookepperModel from "../models/zookeppers.model.js";

export default class ZookeeperController {

    static async getAllZookeppers(req, res) {
        try {
            const zookeepers = await ZookepperModel.getAllZookeppers();
            res.status(200).send(zookeepers)
        } catch (error) {
            res.status(500).send({message: "Something wen't wrong"})
        }
    }

    static async addZookepper(req, res) {
        try {
            console.log(req);
            const zookeper = await ZookepperModel.addZookeper(req.body);
            res.status(200).send(zookeper);
            console.log(req.body)

        } catch (error) {
            res.status(500).send({ message: error.message})
        }

    }

     static async editZookepper(req, res) {
        try {
            const editZookeper = await ZookepperModel.editZookeeper(req.params.id, req.body);
            res.status(200).send(editZookeper);
        } catch (error) {
            res.status(500).send(error)
        }
    }

    static async deleteZookeper(req, res) {
        try {
            await ZookepperModel.deleteZookepper(req.params.id);
            res.sendStatus(200);
        } catch (error) {
            res.status(500).send({ message: "Something went wrong" })
        }
    }
}