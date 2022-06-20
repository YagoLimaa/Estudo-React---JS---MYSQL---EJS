const mysql=require('mysql');
		
		const conexao=mysql.createConnection({
		  host:'localhost',
		  user:'root',
		  password:'',
		  database:'facssupplements' // banco de dados para poder mudar
		});
		

module.exports = conexao 