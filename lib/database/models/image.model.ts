import { Schema, model, models } from "mongoose";

 export interface IImage extends Document{
    title: string;
    transformationtype: string;
    publicId: string;
    secureUrl: string;
    width?: number;
    height?: number;
    config?: object;
    TransformationUrl?: string;
    aspectRatio?: string;
    color?: string;
    prompt?: string;
    author:{
        _id: string;
        firstName: string;
        lastName: string
    };
    createdAt?: Date;
    updatedAt?: Date;
}


const ImageSchema = new Schema ({
    title: { type: String, reuired: true },
    transformationtype: { type: String, reuired: true },
    publicId: { type: String, reuired: true },
    secureUrl: { type: URL, require: true },
    width: { type: Number },
    height: { type: Number },
    config: { type: Object },
    TransformationUrl: { type: URL },
    aspectRatio: { type: String },
    color:  { type: String},
    prompt: { type: String},
    author: { type: Schema.Types.ObjectId, ref: 'User' },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
});

const Image = models?.Image || model ('Image',
ImageSchema);

export default Image;