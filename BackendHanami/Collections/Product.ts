import mongoose, { Schema,mongo,model } from "mongoose";
import { config } from "../Config/congif";
import { TItem } from "../Types/ItemType";

const productSchema  = new Schema<TItem>({
    id:{
        type:Number,
        required:true,
    },
    name:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true,
    },
    rating:{
        type:Number,
        required:true,
    },
    isAvailable:{
        type:Boolean,
        required:true
    },
    isNew:{
        type:Boolean,
    },
    offer:{
        type:Number,
    },
    sizes: {
        type: Map,
        of: Number,
        required: true 
    },
    description:{
        type:String,
    },
})


const ProductModel = config.model<TItem>('products',productSchema)
console.log("Product Model is created");


export {ProductModel}
