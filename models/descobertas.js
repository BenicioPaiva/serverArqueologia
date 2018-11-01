var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var DescobertaSchema = new Schema({ 
    descoberta: String,
    descricao: String,
    data:Date,
    pais: String,
    tipo_descoberta: String
});

module.exports = mongoose.model('Descoberta',DescobertaSchema);