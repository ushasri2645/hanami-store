import { ProductModel } from "../Collections/Product";
import { TItem } from "../Types/ItemType";
import { data } from "../Data/Data";

export const insertProducts = async() => {
    try{
        await ProductModel.insertMany(data);
        console.log("Data inserted Succesfully");
    }
    catch(err:any){
        console.log("Error while inserting data");
    }   
}

