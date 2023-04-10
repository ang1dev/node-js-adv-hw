import joi from 'joi';
const zookeeperSchema = joi.object({
    name: joi.string().required(),
    age: joi.number().required().min(0),
    location: joi.string().required(),
    isActive: joi.boolean().required(),
    
})

const zookeeperValidator = (req, res, next) => {
    const productData = req.body;
    const validate = zookeeperSchema.validate(productData);

    if (validate?.error) {
        res.status(400).send(validate?.error?.details[0]?.message)
    } else {
        next();
    }
}

export default zookeeperValidator;