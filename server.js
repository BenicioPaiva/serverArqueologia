var morgan     = require("morgan");
var express     = require('express'); 
var app         = express(); 
var bodyParser  = require('body-parser');  
var db  = require('./config/main'); 
var router = express();

var mongoose = require('mongoose'); 
mongoose.Promise = require('bluebird');

mongoose.connect( db.database  , function(err,res){
    if(err){
        console.log('Não foi possivel conectar a '+db.database )
    }else{
        console.log('Conectado a Banco de Dados '+db.database ) 
    };    
    
}  );

var routeCadastros = require('./routes/cadastros');

app.use(bodyParser.urlencoded({limit: "10mb", extended: true, parameterLimit:10000}));
app.use(bodyParser.json({limit: "10mb"}));
app.use(morgan("dev"));

var port = process.env.PORT || 8000; 

var router  = express.Router(); 
 
router.use(function(req, res, next) {
    next();
});

router.get('/', function(req, res) {
    res.json({ message: 'API funcionando...' });
});

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type, Accept, Origin, Authorization');   
    next();
});
 
app.use('/api', router);
app.use('/cadastros', routeCadastros);

app.listen(port);
console.log('Server lendo na porta ' + port);  