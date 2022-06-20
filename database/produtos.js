class tabelas {
    init(conexao) {
        this.conexao = conexao

        this.criarItem1()
        this.criarItem2()
        this.criarItem3()
        this.criarItem4()
        this.criarItem5()
        this.criarItem6()
        this.criarItem7()
        this.criarItem8()
        this.criarItem9()
        this.criarItem10()
    }

    criarItem1() {
        const sql = "INSERT IGNORE INTO produtos SET id=1, produto='whey protein morango', descricao='whey protein sabor morango growth', fabricante='growth', estoque=100, preco=60, arquivo='default.png'"

        this.conexao.query(sql, erro => {
            if(erro) {
                console.log(erro)
                console.log("Erro na criação do item 1")
            } else {
                console.log('Item 1 criado com sucesso')
            }
        })
    }
    criarItem2() {
        const sql = "INSERT IGNORE INTO produtos SET id=2, produto='creatina limao', descricao='creatina sabor limao max titanium', fabricante='max titanium', estoque=100, preco=30, arquivo='default.png'"

        this.conexao.query(sql, erro => {
            if(erro) {
                console.log(erro)
                console.log("Erro na criação do item 2")
            } else {
                console.log('Item 2 criado com sucesso')
            }
        })
    }
    criarItem3() {
        const sql = "INSERT IGNORE INTO produtos SET id=3, produto='albumina chocolate', descricao='albumina sabor chocolate probiotica', fabricante='probiotica', estoque=100, preco=55, arquivo='default.png'"

        this.conexao.query(sql, erro => {
            if(erro) {
                console.log(erro)
                console.log("Erro na criação do item 3")
            } else {
                console.log('Item 3 criado com sucesso')
            }
        })
    }
    criarItem4() {
        const sql = "INSERT IGNORE INTO produtos SET id=4, produto='pre-treino cereja', descricao='pre-treino sabor cereja black skull', fabricante='black skull', estoque=100, preco=40, arquivo='default.png'"

        this.conexao.query(sql, erro => {
            if(erro) {
                console.log(erro)
                console.log("Erro na criação do item 4")
            } else {
                console.log('Item 4 criado com sucesso')
            }
        })
    }
    criarItem5() {
        const sql = "INSERT IGNORE INTO produtos SET id=5, produto='hipercalorico baunilha', descricao='hipercalorico sabor baunilha growth', fabricante='growth', estoque=100, preco=80, arquivo='default.png'"

        this.conexao.query(sql, erro => {
            if(erro) {
                console.log(erro)
                console.log("Erro na criação do item 5")
            } else {
                console.log('Item 5 criado com sucesso')
            }
        })
    }
    criarItem6() {
        const sql = "INSERT IGNORE INTO produtos SET id=6, produto='glutamina', descricao='glutamina sabor natural growth', fabricante='growth', estoque=100, preco=60, arquivo='default.png'"

        this.conexao.query(sql, erro => {
            if(erro) {
                console.log(erro)
                console.log("Erro na criação do item 6")
            } else {
                console.log('Item 6 criado com sucesso')
            }
        })
    }
    criarItem7() {
        const sql = "INSERT IGNORE INTO produtos SET id=7, produto='multivitaminico', descricao='multivitaminico max titanium', fabricante='max titanium', estoque=100, preco=25, arquivo='default.png'"

        this.conexao.query(sql, erro => {
            if(erro) {
                console.log(erro)
                console.log("Erro na criação do item 7")
            } else {
                console.log('Item 7 criado com sucesso')
            }
        })
    }
    criarItem8() {
        const sql = "INSERT IGNORE INTO produtos SET id=8, produto='bcaa chocolate branco', descricao='bcaa sabor chocolate branco growth', fabricante='growth', estoque=100, preco=40, arquivo='default.png'"

        this.conexao.query(sql, erro => {
            if(erro) {
                console.log(erro)
                console.log("Erro na criação do item 8")
            } else {
                console.log('Item 8 criado com sucesso')
            }
        })
    }
    criarItem9() {
        const sql = "INSERT IGNORE INTO produtos SET id=9, produto='cafeina', descricao='cafeina sabor cafe probiotica', fabricante='probiotica', estoque=100, preco=40, arquivo='default.png'"

        this.conexao.query(sql, erro => {
            if(erro) {
                console.log(erro)
                console.log("Erro na criação do item 9")
            } else {
                console.log('Item 9 criado com sucesso')
            }
        })
    }
    criarItem10() {
        const sql = "INSERT IGNORE INTO produtos SET id=10, produto='barra de proteina', descricao='barra de proteina sabor chocolate growth', fabricante='growth', estoque=100, preco=10, arquivo='default.png'"

        this.conexao.query(sql, erro => {
            if(erro) {
                console.log(erro)
                console.log("Erro na criação do item 10")
            } else {
                console.log('Item 10 criado com sucesso')
            }
        })
    }
    
}
 
module.exports = new tabelas 