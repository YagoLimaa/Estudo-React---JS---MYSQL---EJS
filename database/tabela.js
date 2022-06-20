class tabelas {
    init(conexao) {
        this.conexao = conexao

        this.criarTabela()
    }
 
    criarTabela() {
        const sql = 'CREATE TABLE IF NOT EXISTS produtos (id int NOT NULL AUTO_INCREMENT, produto varchar(50) NOT NULL, descricao varchar(50), fabricante varchar(30) NOT NULL, estoque int NOT NULL, preco float NOT NULL,arquivo varchar(255) NOT NULL, PRIMARY KEY(id))'
 
        this.conexao.query(sql, erro => {
            if(erro) {
                console.log(erro)
                console.log("Erro na criação da tabela")
            } else {
                console.log('Tabela produtos criada com sucesso')
            }
        })

    }
}
 
module.exports = new tabelas