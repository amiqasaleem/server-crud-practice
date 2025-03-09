import express from 'express';
import { nanoid } from 'nanoid'
const app = express()
const port = 3000
let users = [];

app.use(express.json());
//Ye sirf server check karne k liye:

app.get('/', (req, res) => {
  res.send('Server chal raha hai bindaas')
})

//Ye users fetch karne k liye:

app.get("/users", (req, res) => {
  res.send(users);
});

//Ye user create karne k liye: id: nanoid()

app.post('/user',(req, res) => {
  let user = { ...req.body, id:nanoid()};   
  users.push(user);
  res.send("user created successfully");
  console.log(user);
  
});
app.get('/user/:id', (req, res) => {
  const {id} = req.params;
  let foundUser = users.find((obj) => obj.id == id);

  res.send({
    user:foundUser,
    message:"User found Successfully"
  })
})




app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});

