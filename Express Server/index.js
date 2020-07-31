import express from 'express';




const app = express();
const port = 3000;
app.use(express.json());
app.use(express.urlencoded({extended: true}))

app.get("/data/:id", (req, res)=>{
  //res.json(`data.json`);
  res.send(req.params.id);
});

app.post('/add', (req, res)=>{
  console.log(req.body);
  res.sendStatus(200);
})


app.listen(port, ()=> console.log("Listening on port" + port))
