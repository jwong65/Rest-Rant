//connect to the mongoose
const mongoose = require('mongoose')
mongoose.connect(process.env.MONGO_URI,{
    //These are optional, but will remove messages in terminal?
    useNewUrlParser:true,
    useUnifiedTopology: true
})