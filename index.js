const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const PORT = process.env.PORT || 5000;
const cors = require("cors");

dotenv.config();
app.use(express.json());
app.use(cors({
    origin: [
      "http://localhost:3000",
    ],
    credentials: true,
  })
);

// connect to mongoDB
mongoose.set('strictQuery', false)
mongoose.connect(process.env.MDB_CONNECT) 
.then(()=>{console.log('Mongodb connected')});

// set up routes
// app.use("/api", require("./Router/RegistrationRouter"));
// app.use("/cnt", require("./Router/CountRouter"));
app.use("/auth", require("./Routes/Authentication"));
// app.use("/contactus", require("./Router/ContactRouter"));

app.listen(PORT, () => console.log(`Server started on port: ${PORT}`));
const path=require("path");

// app.use(express.static('client/build'));
//  app.get('*', (req, res) => {
//     res.sendFile(path.resolve('client','build','index.html'));
// });