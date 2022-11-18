const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://doaa:doaa112233@cluster0.ducbwz6.mongodb.net/?retryWrites=true&w=majority')
.then ( () => {
  console.log("DB is connected");
})
.catch( err => {
  console.log(err)
});