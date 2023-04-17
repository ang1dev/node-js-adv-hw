import { Schema, model } from 'mongoose';
// import validator from 'validator';

const zookeeperSchema = new Schema({
    name: {
        type: String,
        required: [true, 'First name is required'],
        minLength: 5
    },

    age: {
        type: Number,
        min: [18, 'Age must be greater than 18'],
        max: 110,
        required: [true, 'Age is required']
    },
    location: {
        type: String,
        required: true
    },
    isActive: {
        type: Boolean,
        required: false,
        default: false

    },
    animals: [{
        type: Schema.Types.ObjectId,
        ref: "Animal",
    }]

})

const Zookeeper = model('Zookeeper', zookeeperSchema);

export default Zookeeper;