import mongoose from 'mongoose';

const fakultasSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            unique: true,
        },
    },
    {
        timpestamps: true,
    },
)

const FakultasModel = mongoose.model("fakultas",fakultasSchema)
export default FakultasModel