    class LojaDeTenis {
        constructor() {
        this.tenis = [];
        }
        adicionarTenis(tenis) {
        this.tenis.push(tenis);
        }
        removerTenis(tenis) {
        const index = this.tenis.indexOf(tenis);
        if (index > -1) {
            this.tenis.splice(index, 1);
        }
        }
        listarTenis() {
        console.log(this.tenis);
        }
    }
    
    class LojaFísica extends LojaDeTenis {
        constructor(nome) {
        super();
        this.nome = nome;
        this.aberta = false;
        }
        abrirLoja() {
        this.aberta = true;
        console.log(`${this.nome} aberta!`);
        }
        fecharLoja() {
        this.aberta = false;
        console.log(`${this.nome} fechada!`);
        }
        horarioDeFuncionamento() {
        console.log(`${this.nome} funciona das 9h às 18h.`);
        }
    }
    
    class LojaOnline extends LojaDeTenis {
        constructor(nome) {
        super();
        this.nome = nome;
        this.clientes = [];
        }
        cadastrarCliente(cliente) {
        this.clientes.push(cliente);
        console.log(`Cliente ${cliente} cadastrado!`);
        }
        comprarTenis(tenis, cliente) {
        if (this.tenis.includes(tenis)) {
            console.log(
            `O tênis ${tenis} foi comprado pelo cliente ${cliente} na loja ${this.nome}!`
            );
        } else {
            console.log(`O tênis ${tenis} não está disponível na loja ${this.nome}.`);
        }
        }
        entregarPedido(cliente) {
        console.log(`O pedido do cliente ${cliente} foi entregue.`);
        }
    }
    
    const lojaFisica1 = new LojaFísica("Sneakers SHOP");
    const lojaOnline1 = new LojaOnline("Sneakers SHOP Online");
    const lojaFisica2 = new LojaFísica("Sneakers SHOP Outlet");
    
    lojaFisica1.adicionarTenis("NIKE COURT VISION");
    lojaFisica1.adicionarTenis("NIKE SB FORCE 58");
    lojaOnline1.adicionarTenis("NIKE AIR FORCE 1 REACTE");
    lojaOnline1.adicionarTenis("NIKE DUNK LOW");
    
    console.log(lojaFisica1.listarTenis());
    console.log(lojaOnline1.listarTenis());
    console.log(lojaFisica2.listarTenis());
    
    lojaFisica1.abrirLoja();
    lojaFisica1.horarioDeFuncionamento();
    lojaFisica1.fecharLoja();
    
    lojaOnline1.cadastrarCliente("Marcus");
    lojaOnline1.comprarTenis("NIKE DUNK LOW", "Marcus");