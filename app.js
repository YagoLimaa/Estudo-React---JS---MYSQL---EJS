const conexao = require('./database/banco')
const tabelas = require('./database/tabela')
const produtos = require('./database/produtos')
const customExpress = require('./config/customExpress')

//fnzd requisição das coisas que vão ser usadas nas pagina
const path = require('path');
const util = require('util');
const express = require('express');
const bodyParser = require('body-parser'); // é usado pra converter o body em varios formatos
const fileUpload = require('express-fileupload');
const { end } = require('./database/banco');

module.exports = app => {

    // seta a pasta das views(html)
app.use('/css' ,express.static(__dirname + 'public/img'));
app.set('/views', path.join(__dirname, 'views'));

    // fazendo a opções de upload
app.use(fileUpload());

    // seta o tipo de visualização/render da pagina
app.use(express.static(path.join(__dirname, 'public')))
app.set('view engine', 'ejs');  
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

    //Criação das rotas
    app.get('/', (req, res) => {
        let sql = "SELECT * FROM produtos";
        let query = conexao.query(sql,(err,rows) => {
            res.render('index',{
                title: 'Facs Supplements',
                produtos: rows
            });
        });
    });

    app.get('/adicionar', (req, res) => {
        res.render('adicionar',{
            title: 'Criar novo produto'
        });

    });

    app.post('/salvar', async(req,res) => {
        let arquivo;
        if(!req.files || Object.keys(req.files).length === 0 ){
            return res.status(400).send('Nenhum arquivo foi enviado.');
        }
        //arquivo = req.files.arquivo;
        //var img_nome = arquivo.name;

        //uploudPath = __dirname + '/public/img/' + arquivo.name;

        // usando mv() para por o arquivo no servidor
        /*arquivo.mv(dbExtensao,function(err){
         
            let data = {produto: req.body.produto, descricao: req.body.descricao, fabricante: req.body.fabricante, estoque: req.body.estoque, preco: req.body.preco};
            let sql = "INSERT INTO `produtos` SET  ? , `arquivo` = '" + dbExtensao + "'"
            let query = conexao.query(sql, data,(err,results) => {
                res.redirect('/');
            });
        });*/
        try{
            app.use(bodyParser.urlencoded({ extended: true }));
            arquivo = req.files.arquivo;
            var img_nome = arquivo.name;
            const tamanho = arquivo.data.length;
            const extensao = path.extname(img_nome);
            
    
            const AllowedExtensao = /png|gif|jpeg|jpg/;
            if(!AllowedExtensao.test(extensao)) return res.redirect('/editar/' + id); // TEM QUE ADICIONAR MSG DE ERRO
            if(tamanho > 5000000) return res.redirect('/editar/' + id); // TEM QUE ADICONAR MSG DE ERRO
    
            const md5 = arquivo.md5; 
            const URL = "/img/" + md5 + extensao;
    
            await util.promisify(arquivo.mv)("./public" + URL);
            const dbExtensao = (md5 + extensao);
            let data = {produto: req.body.produto, descricao: req.body.descricao, fabricante: req.body.fabricante, estoque: req.body.estoque, preco: req.body.preco};
            let sql = "INSERT INTO `produtos` SET  ? , `arquivo` = '" + dbExtensao + "'"
            let query = conexao.query(sql, data,(err,results) => {
                res.redirect('/');
            });
        }
    
        catch(err){
            res.status(500).json({
                message: err,
            });
        }

    });

    app.post('/atualizar', async(req, res) => {
        const id = req.body.id;
        console.log(id);
        let arquivo;
        let uploudPath;
        if(!req.files || Object.keys(req.files).length === 0 ){
            let sql = "update produtos SET produto='"+req.body.produto+"',  descricao='"+req.body.descricao+"',  fabricante='"+req.body.fabricante+"',  estoque='"+req.body.estoque+"',  preco='"+req.body.preco+"' where id ="+id;
            let query = conexao.query(sql,(err, results) => {
            
                res.redirect('/');
              });
        }else{
            try{
        app.use(bodyParser.urlencoded({ extended: true }));
        arquivo = req.files.arquivo;
        var img_nome = arquivo.name;
        const tamanho = arquivo.data.length;
        const extensao = path.extname(img_nome);
        

        const AllowedExtensao = /png|gif|jpeg|jpg/;
        if(!AllowedExtensao.test(extensao)) return res.redirect('/editar/' + id); // TEM QUE ADICIONAR MSG DE ERRO
        if(tamanho > 5000000) return res.redirect('/editar/' + id); // TEM QUE ADICONAR MSG DE ERRO

        const md5 = arquivo.md5; 
        const URL = "/img/" + md5 + extensao;

        await util.promisify(arquivo.mv)("./public" + URL);
        const dbExtensao = (md5 + extensao);



        let sql = "update produtos SET produto='"+req.body.produto+"',  descricao='"+req.body.descricao+"',  fabricante='"+req.body.fabricante+"',  estoque='"+req.body.estoque+"',  preco='"+req.body.preco+"',  arquivo='"+dbExtensao+"'where id ="+id;
        let query = conexao.query(sql,(err, results) => {
            
          res.redirect('/');
        });
        }
        
        catch(err){
            res.status(500).json({
                message: err,
            });
        }
        

    }
    });

    app.get('/editar/:id',(req, res) => {

        const id = req.params.id;
        let sql = `SELECT * FROM produtos where id = ${id}`;
        let query = conexao.query(sql,(err,results) => {
            res.render('editar', {
                title: 'Editando produto',
                produtos: results[0]
            });
        });
    })

    app.get('/deletar/:id',(req, res) => {
        const id = req.params.id;
        let sql = `DELETE FROM produtos where id = ${id}`;
        let query = conexao.query(sql,(err,results) => {
            res.redirect('/');
        });
    })
}

conexao.connect(erro => {
    if(erro) {
        console.log("banco conectado com sucesso");
    } else {
        console.log('banco conectado com sucesso');
        const app = customExpress()
        tabelas.init(conexao)
        produtos.init(conexao)
        app.listen(3000, () => console.log(`servidor rodando na porta http://localhost:3000`))
    }
})

