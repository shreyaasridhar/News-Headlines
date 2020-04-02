const express = require("express");
const app = express();
const PORT = 3000;


app.get("/hello", (req, res) => {
  res.send("Creating the first endpoint");
});

app.listen(PORT,()=> {
	console.log(`Server listening on port ${PORT}`);
});
