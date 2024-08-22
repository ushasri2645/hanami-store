import express from 'express'
import cors  from 'cors'
import bodyParser from 'body-parser';
import { TItem } from '../Types/ItemType';
import { insertProducts } from '../Insertion/Insertion';
import { ProductModel } from '../Collections/Product';
export const router = express.Router()


const app = express();
app.use(cors());
const port = 5050;

app.use(bodyParser.json());
app.use('/api', router);

let items:TItem[]=[];
router.post('/items',async(req,res)=>{
    try{
        await insertProducts();
        res.send("Products succesfully added");
    }
    catch(e){
        res.send("Error");
    }
})

router.get('/items',async(req,res)=>{
    const items = await ProductModel.find();
    if(items){
        res.send(items);
    }
    else{
        res.send([])
    }
})

router.get('/items/:id',async(req,res)=>{
    const id = parseInt(req.params.id)
    const item = await ProductModel.findOne({id:id})
    if(item){
        res.send(item);
    }
    else{
        res.send("Item Not Found")
    }
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });


