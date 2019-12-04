const { connect } = require("mongoose");

const connectionString = `mongodb+srv://medicode:medicode@medicode-osbkq.mongodb.net/test?retryWrites=true&w=majority`;

connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => {
    console.log("Connected to mongodb");
  })
  .catch(err => {
    console.log(err);
  });
