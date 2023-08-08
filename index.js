const express =require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');

const userRoutes = require('./routes/users');

require('dotenv').config();

app.use(express.json({ extended: true }));
app.use(express.urlencoded());
app.use(bodyParser.json());


app.use(cors());
app.use('/users', userRoutes);
//app.use('/', require('routes'));

app.listen(process.env.PORT, () => {
    console.log(`Servidor Express en funcionamiento en el puerto ${process.env.PORT}`);
});