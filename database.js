const mongoose  = require("mongoose");
mongoose
.connect("mongodb://Localhost:farmacy", {
    useUnifiedTopology:true,
    useNewUrlParser: true,
    useFindAndModify: false
})
.then(db => console.log("DB is conenected"))
.catch((err) => console.error(err));