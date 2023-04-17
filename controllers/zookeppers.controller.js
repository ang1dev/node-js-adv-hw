import ZookeeperService from "../services/zookeeper.service.js";

export default class ZookeeperController {

    static async getAllZookeppers(req, res) {
        try {
            const zookeepers = await ZookeeperService.getAllZookeppers();
            res.status(200).send(zookeepers)
        } catch (error) {
            res.status(500).send({message: "Something wen't wrong"})
        }
    }

    static async addZookepper(req, res) {
        try {
            console.log(req);
            const zookeper = await ZookeeperService.addZookeper(req.body);
            res.status(200).send(zookeper);
            console.log(req.body)

        } catch (error) {
            res.status(500).send({ message: error.message})
        }

    }

     static async editZookepper(req, res) {
        try {
            const editZookeper = await ZookeeperService.editZookeeper(req.params.id, req.body);
            res.status(200).send(editZookeper);
        } catch (error) {
            res.status(500).send(error)
        }
    }

    static async deleteZookeper(req, res) {
        try {
            await ZookeeperService.deleteZookepper(req.params.id);
            res.sendStatus(200);
        } catch (error) {
            res.status(500).send({ message: "Something went wrong" })
        }
    }
}