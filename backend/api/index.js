const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb+srv://bandipreethamreddy16:7JEzvLoIc0tSx522@cluster0.lttlf.mongodb.net/preetham?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const QuestionSchema = new mongoose.Schema({
  question: String,
  code: String,
});


const Question = mongoose.model("Question", QuestionSchema);
app.get("/",async(req,res)=>{
    res.send("hi")
})
app.post("/questions", async (req, res) => {
  const { question, code } = req.body;
  const newQuestion = new Question({ question, code });
  await newQuestion.save();
  res.json({ message: "Question added!" });
});

app.get("/questions", async (req, res) => {
  const questions = await Question.find();
  res.json(questions);
});

app.put("/questions/:id", async (req, res) => {
  const { id } = req.params;
  const { question, code } = req.body;
  await Question.findByIdAndUpdate(id, { question, code });
  res.json({ message: "Question updated!" });
});

app.delete("/questions/:id", async (req, res) => {
  const { id } = req.params;
  await Question.findByIdAndDelete(id);
  res.json({ message: "Question deleted!" });
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
