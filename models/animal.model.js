import { Schema, model } from 'mongoose';




const animalrSchema = new Schema({
    name: {
        type: String,
        required: [true, 'First name is required'],
        minLength: 2
    },

    age: {
        type: Number,
        min: [1, 'Age must be a postive number'],
        max: [3000, 'Age must be a postive number'],
        required: true
    },
    location: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true,
        enum: ["M", "F"]

    },
    characteristics: {

        food: { type: String, required: false },
        colour: { type: String, required: false },
        isDangerous: { type: Boolean, default: false },
        weight: { type: Number, required: false, min: 0 },
        enclosure: { type: String, required: true }
    },

    zookeeper: {
        type: Schema.Types.ObjectId,
        ref: "Zookeeper",
        required: false,
    }

})

const Animal = model('Animal', animalrSchema);

export default Animal;