const express = require("express");
const app = express();

app.use(express.json());

const questions = [
  "شنو أكثر شي يميزها؟",
  "تحس الناس تحبها لو تتحملها؟",
  "تصير بيها مواقف محرجة؟",
  "أغلبها تصير بالليل لو بالنهار؟",
  "تحتاج فلوس حتى تصير؟",
  "بيها إحراج؟",
  "لو اختفت، تفتقدها؟"
];

app.get("/", (req, res) => {
  res.send("برا السالفة شغّالة ✅");
});

app.get("/question", (req, res) => {
  const q = questions[Math.floor(Math.random() * questions.length)];
  res.json({ question: q });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Server running");
});
