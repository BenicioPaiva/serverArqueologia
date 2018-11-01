var express     = require('express');
var router = express.Router();
var Descobertas = require('../models/descobertas');
var Comentarios = require('../models/comentarios');

router.post("/cadastrarDescoberta",function(req, res) {
    
        var descobertas = new Descobertas();
        
        descobertas.descoberta = req.body.param1;
        descobertas.descricao = req.body.param2;
        descobertas.data = req.body.param3;
        descobertas.pais = req.body.param4;
        descobertas.tipo_descoberta = req.body.param5;
        
        descobertas.save(function(error) {
            if(error){
                res.send(error);
            }
            else
            {     
                res.json({ message: 'Descoberta gravada com sucesso!' });
            }

        });
});

router.get("/listarDescobertas/:id", function(req, res) {
 
        //Função para Selecionar Todos os 'usuarios' e verificar se há algum erro:
        Descobertas.find( {} ,  function(err, descobertas) {            
            if(err)
                res.send(err);
 
            res.json(descobertas);
        });
});    


router.put("/alterarDescobertas/:id", function(req, res) {

        Descobertas.findById(req.params.id, function(err,descoberta){

            if(err){
                res.send(err);
            }else
            { 

           var descobertas = descoberta ;
            
           descobertas.descoberta = req.body.descoberta;
           descobertas.descricao = req.body.descricao;
           descobertas.data = req.body.data;
           descobertas.pais = req.body.pais;
           descobertas.tipo_descoberta = req.body.tipo_descoberta;

                descobertas.save(function(error) {
                    if(error){
                        res.send(error);;  //'Erro na gravação!'
                    } else {
                        res.json({ message: 'Descoberta Atualizada!' });
                    }

                });

            };
        
        });       
        
});

router.delete("/excluirDescobertas/:codigo", function(req, res) {

    Descobertas.findOneAndRemove({ _id : req.params.codigo } , function (err, descoberta) {  

      if (err == null){ 
        res.send("Excluido com sucesso!");
      }else{
        res.send('Erro na exclusão!');
      }  

    });

});

module.exports = router;