var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var ComentarioSchema = new Schema({ 
    comentario: String,
    data: String,
    descoberta: { type: Schema.Types.ObjectId, ref: 'comentarios' }
});

module.exports = mongoose.model('Comentario',ComentarioSchema);