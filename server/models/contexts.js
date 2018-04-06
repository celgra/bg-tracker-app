import mongoose from 'mongoose';
const ObjectId = mongoose.Schema.Types.ObjectId;

const ContextSchema = new mongoose.Schema({name: String});

const Contexts = new mongoose.Schema({
    resultContexts: [ContextSchema]
});

export default Contexts;