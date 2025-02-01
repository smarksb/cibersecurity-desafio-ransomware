require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log("MongoDB conectado!"))
  .catch(err => console.log(err));

const TaskSchema = new mongoose.Schema({
    title: String,
    completed: Boolean
});

const Task = mongoose.model("Task", TaskSchema);

app.get("/tasks", async (req, res) => {
    const tasks = await Task.find();
    res.json(tasks);
});

app.post("/tasks", async (req, res) => {
    const newTask = new Task(req.body);
    await newTask.save();
    res.json(newTask);
});

app.put("/tasks/:id", async (req, res) => {
    await Task.findByIdAndUpdate(req.params.id, req.body);
    res.json({ message: "Tarefa atualizada!" });
});

app.delete("/tasks/:id", async (req, res) => {
    await Task.findByIdAndDelete(req.params.id);
    res.json({ message: "Tarefa removida!" });
});

app.listen(5000, () => console.log("Servidor rodando na porta 5000"));
