const prompt = require('prompt-sync')();

const header =`
=======================================
               GIOH BANK
=======================================
`;
const loginHeader =`
=======================================
                LOGIN
=======================================
`;
const end1 =`
=======================================
      LOGIN EFETUADO COM SUCESSO
=======================================
`;
const home =`
------------ MENU INICIAL -------------
     Escolha uma das opções abaixo:
     [1] Login
     [2] Cadastro
     [3] Sobre a Empresa
     [4] Sair
`;
const loginHome = `
--------------- GIOH BANK ---------------
     Escolha uma das opções abaixo:
     [1] Saldo
     [2] Depósito
     [3] Saque
     [4] Sair da conta
`;
const createAccount = `
=======================================
             CRIAR CONTA
=======================================`;

const about = `
=======================================
            SOBRE A EMPRESA
=======================================
        
O Gioh Bank é um banco fictício criado
    como projeto de estudo em JavaScript,
    focado em simular funcionalidades
    bancárias como criação de contas,
gerenciamento de saldo e transferências.

Desenvolvido em um ambiente 100% textual,
    o projeto demonstra o potencial do
JavaScript para criar soluções práticas
            e funcionais.
`;

var emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

// Variáveis globais
var userLogin = "teste@email.com";
var userPassword = "12345678";

var balance = 0.00;

var isntConnected = true;
var isntRouteComplete = true;

// Início
while(isntRouteComplete){
    console.clear();
    console.log(header);
    console.log(home);

    var option = prompt("Digite aqui: ");

    while(option > 4 || String(parseInt(option)) === "NaN"){
        console.log("Esta não é uma opção válida.");
        console.log(home);
        option = prompt("Digite aqui: ");
        continue;
    }

    // Opção de Login
    while(option == 1){
        console.log(loginHeader);
        var user = prompt("Email: ");

        while(emailRegex.test(user) == false){
            console.log("Insira um email válido.");
            user = prompt("Email: ");
        }

        var password = prompt("Senha: ");

        while(password.length < 8) {
            console.log("Sua senha precisa conter 8 dígitos.");
            password = prompt("Senha: ");
        }

        if(user != userLogin || password != userPassword){
            console.clear()
            console.log("\nAs credenciais são inválidas.\nTente novamente.\n");
            continue;
        }
        else{
            console.clear();
            console.log(end1);
            
            let isntOperationComplete = true;

            while(isntOperationComplete){
                console.log(loginHome);
            
                let accountOption = prompt("Digite aqui: ");
                
                while(accountOption < 1 || accountOption > 4 || String(parseInt(accountOption)) === "NaN"){
                    console.log("Esta não é uma opção válida.");
                    accountOption = prompt("Digite aqui: ");
                }

                if(accountOption == 1){
                    console.clear();
                    console.log("Seu saldo é de R$ " + balance);
                }
                else if(accountOption == 2){
                    console.clear();
                    let deposit = prompt("Digite o valor que gostaria de depositar: R$ ");
                    if (deposit > 0) {
                        balance += parseFloat(deposit);
                        console.log("Você depositou R$ " + deposit);
                    }
                    else {
                        console.log("Valor inválido para depósito.");
                    }
                }
                else if(accountOption == 3){
                    console.clear();
                    let withdrawal = prompt("Digite o valor que gostaria de sacar: R$ ");
                    if (withdrawal > 0 && withdrawal <= balance) {
                        balance -= parseFloat(withdrawal);
                        console.log("Você sacou R$ " + withdrawal);
                    }
                    else{
                        console.log("Saldo insuficiente.");
                    }
                }
                else{
                    console.clear();
                    console.log("Você saiu da conta.");
                    isntOperationComplete = false;
                    
                }
            }
            break;
        }

    }
    // Opção de Cadastro
    if(option == 2 && isntConnected){
        console.clear();
        console.log(header);
        console.log(createAccount);

        userLogin = prompt("Entre com seu email: ");

        while(emailRegex.test(userLogin) == false){
            console.log("Insira um email válido.");
            userLogin = prompt("Entre com seu email: ");
        }

        userPassword = prompt("Crie uma senha: ");
        
        while(userPassword.length < 8){
            console.log("Sua senha precisa conter 8 dígitos.");
            userPassword = prompt("Crie uma senha: ");
            }
        
        console.log("Seu cadastro foi efetuado com sucesso.");
    }
    // Sobre a Empresa
    else if(option == 3){
        console.clear();
        console.log(about);
        prompt("Digite qualquer tecla para voltar ao início.");
    }
    // Sair
    else if(option == 4){
        console.clear();
        console.log("\nAgradecemos por utilizar nossos serviços!\n");
        isntRouteComplete = false;
    }
}