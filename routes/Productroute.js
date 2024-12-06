const app = require('express').Router()
const multer = require('multer');

const Productmodel=require("../model/product");

const storage = multer.memoryStorage(); 
const upload = multer({ storage: storage });
app.post('/Pnew', upload.single('photo'), async (request, response) => {
    try {
                const { Pname,Price,Desc,Cid,Status } = request.body
                const newdata = new Productmodel({
                    
                    Pname,
                    Price,
                    Desc,
                    Cid,
                    Status,
                    photo: {
                        data: request.file.buffer,
                        contentType: request.file.mimetype,
                    }
                })


                await newdata.save();
                res.status(200).json({ message: 'product added successfully' });
        }
    catch (error) 
    {
                response.status(500).json({ error: 'Internal Server Error' });
    }
}
)

app.get('/Pview',async(request,response)=>{
    var data = await Productmodel.find();
    console.log(data)
    response.send(data)
})
module.exports = app