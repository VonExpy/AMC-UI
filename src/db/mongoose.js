const mongoose = require('mongoose')
// const connectionURL = 'mongodb://127.0.0.1:27017/promissory'
const connectionURL = 'mongodb+srv://vonexpy:India@123@cluster0.xj3k6m5.mongodb.net/?retryWrites=true&w=majority'
mongoose.connect(connectionURL,{useNewUrlParser:true,useCreateIndex:true,useFindAndModify:false,useUnifiedTopology: true})
