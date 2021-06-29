const mongoose  = require("mongoose");
mongoose
.connect("mongodb+srv://hp0281:app-farmacy@app-farmacy.c4kxi.mongodb.net/app-farmacy?retryWrites=true&w=majority", {
    useUnifiedTopology:true,
    useNewUrlParser: true,
    useFindAndModify: false
})
.then(db => console.log("DB is conenected"))
.catch((err) => console.error(err));