import express from "express";
const app = express();
import cors from "cors";
import { nanoid } from "nanoid";

app.use(cors());
app.use(express.json());

let users = [];

//CHECKING SERVERS

app.get("/", (req, res) => {
  res.send("server is running");
});


//FETCHING ALL USERS
app.get("/users", (req, res) => {
  res.send(users);
});

//CREATING USER.

app.post("/user", (req, res) => {
  let user = { ...req.body, id: nanoid() };
  users.push(user);

  res.send("user created successfully");
});

//FETCHING AND FINDING ONE USER BASED ON THEIR ID

app.get("/user/:id", (req, res) => {
  const { id } = req.params;
  let foundUser = users.find((obj) => obj.id == id);

  res.send({
    user: foundUser,
    message: "user found successfully",
  });
});

//DELETING USER

app.delete("/user/:id", (req, res) => {
  const { id } = req.params;

  let index = users.findIndex((user) => user.id == id);
  users.splice(index, 1);

  res.send({
  deletedId: id,
    message:"user deleted successfully"
  });
});


// UPDATING USER

app.put("/user/:id",(req,res)=>{
    const { id } = req.params;

  let index = users.findIndex((user) => user.id == id);
  users.splice(index, 1,{...req.body,id:id});

  res.send({
  updatedUser: id,
    message:"user updated successfully"
  });


})

app.listen(3000, () => {
  console.log("server is listening ");
});