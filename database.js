//comandos para el macosx Despues de hacer cambios descomentarmongod --config /usr/local/etc/mongod.conf --fork
/*
const mongoose = require('mongoose');
const uri = "mongodb+srv://jacobo:dbcebolla@cluster0-jwahi.mongodb.net/test?retryWrites=true&w=majority";

mongoose.connect(uri, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true
})

.then(db => console.log('db is conect'))
.catch(err => console.error(err));

*/

const mongoose = require('mongoose');
const uri = "mongodb://localhost/integradora";
mongoose.connect(uri, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true
})

.then(db => console.log('DB chida amasisese chingon compadre :v'))
.catch(err => console.error(err));

