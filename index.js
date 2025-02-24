const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const { default: mongoose } = require('mongoose');
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect('mongodb+srv://NishantGautam:Ng123@cluster0.45vj3.mongodb.net/NishantGautam-DB', {
      useNewUrlParser: true,
    }
  )

.then(() => console.log('MongoDb is connected'))
.catch((err) => console.log(err));


app.listen(process.env.PORT || 3000, function () {
  console.log('Express app running on port ' + (process.env.PORT || 3000));
});

