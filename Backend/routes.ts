import express from 'express'
import cors  from 'cors'
import bodyParser from 'body-parser';
import { data } from './Data/Data';
import { TItem } from './Data/Data';


const router = express.Router()
const app = express();
app.use(cors());
const port = 5050;

app.use(bodyParser.json());
app.use('/api', router);

let items:TItem[]=[];
router.post('/items',(req,res)=>{
    // items = data;
    data.map((item:TItem)=>{
        items.push(item);
    })
    res.send("Items added");
})

router.get('/items',(req,res)=>{
    res.send(items)
})

router.get('/items/:id',(req,res)=>{
    const id = parseInt(req.params.id)
    const item = data.find((item:TItem)=>item.id===id)
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