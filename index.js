const express = require('express');
const app = express();
const db = require('./models/index')

app.listen(6757, console.log('allalalala'));

app.use('/users', require('./routes/user'))

db.sequelize.sync();

app.get('/', (req, resp) => {
});