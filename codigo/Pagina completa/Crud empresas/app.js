// declara um conjunto inicial de contatos
var db_contatos_inicial = {
    "data": [
        {
            "id": 1,
            "nome": "BH Recicla Reciclagem de Lixo Eletrônico e Outras Sucatas",
            "cidade": "Belo Horizonte",
            "bairro": "Av. General David Sarnoff, 2690",
            "telefone": "(31) 1111-1111",
            "reciclavel": "metal",
            "horario": "17:00"
            
        },
        {
            "id": 2,
            "nome": "Central de Recebimento de Vidro - Redesol MG",
            "cidade": "Belo Horizonte",
            "bairro": " R. Lume, 268 - São Salvador",
            "telefone": "(31) 2222-2222",
            "reciclavel": "plástico",
            "horario": "14:00"
           
        },
        {
            "id": 3,
            "nome": "Central de Tratamento de Resíduos Sólidos - Portaria II",
            "cidade": "Belo Horizonte",
            "bairro": "Av. General David Sarnoff, 2690",
            "telefone": "(31) 3333-3333",
            "reciclavel": "papel",
            "horario": "15:00"
        },
        {
            "id": 4,
            "nome": "central de fulano",
            "cidade": "betim",
            "bairro": "Av. General David Sarnoff, 2690",
            "telefone": "1-770-736-8031",
            "reciclavel": "metal",
            "horario": "19:00"
        },
        {
            "id": 5,
            "nome": " Eletrônico e Outras Sucatas",
            "cidade": "Belo Horizonte",
            "bairro": "Av. General David Sarnoff, 2690",
            "telefone": "1-770-736-8031",
            "reciclavel": "papel",
            "horario": "8:00"
        },
        {
            "id": 6,
            "nome": "recicla",
            "cidade": "Belo Horizonte",
            "bairro": "Av. General David Sarnoff, 2690",
            "telefone": "(31) 6666-6666",
            "reciclavel": "plastico",
            "horario": "19:00"
        },
        {
            "id": 7,
            "nome": "lixeirao",
            "cidade": "Belo Horizonte",
            "bairro": "Av. General David Sarnoff, 2690",
            "telefone": "(31) 7777-7777",
            "reciclavel": "metal",
            "horario": "10:00"
        },
        {
            "id": 8,
            "nome": " Reciclagem de Lixo ",
            "cidade": "Betim",
            "bairro": "Av. General David Sarnoff, 2690",
            "telefone": "(31) 8888-8888",
            "reciclavel": "metal",
            "horario": "7:00"
        },
        {
            "id": 9,
            "nome": "reciclao",
            "cidade": "Belo Horizonte",
            "bairro": "Av. General David Sarnoff, 2690",
            "telefone": "(31) 9999-9999",
            "reciclavel": "papel",
            "horario": "11:00"
        },
        {
            "id": 10,
            "nome": "reciclagem do bao",
            "cidade": "Belo Horizonte",
            "bairro": "Av. General David Sarnoff, 2690",
            "telefone": "(31) 1010-1010",
            "reciclavel": "vidro",
            "horario": "14:00"
        }
    ]
}

// Caso os dados já estejam no Local Storage, caso contrário, carrega os dados iniciais
var db = JSON.parse(localStorage.getItem('db_contato'));
if (!db) {
    db = db_contatos_inicial
};

// Exibe mensagem em um elemento de ID msg
function displayMessage(msg) {
    $('#msg').html('<div class="alert alert-warning">' + msg + '</div>');
}

function insertContato(contato) {
    // Calcula novo Id a partir do último código existente no array (PODE GERAR ERRO SE A BASE ESTIVER VAZIA)
    let novoId = 1;
    if (db.data.length != 0) 
      novoId = db.data[db.data.length - 1].id + 1;
    let novoContato = {
        "id": novoId,
        "nome": contato.nome,
        "cidade" : contato.cidade,
        "bairro" : contato.bairro,
        "telefone": contato.telefone,
        "reciclavel": contato.reciclavel,
        "horario": contato.horario
        
    };

    // Insere o novo objeto no array
    db.data.push(novoContato);
    displayMessage("Contato inserido com sucesso");

    // Atualiza os dados no Local Storage
    localStorage.setItem('db_contato', JSON.stringify(db));
}

function updateContato(id, contato) {
    // Localiza o indice do objeto a ser alterado no array a partir do seu ID
    let index = db.data.map(obj => obj.id).indexOf(id);

    // Altera os dados do objeto no array
    db.data[index].nome = contato.nome,
    db.data[index].cidade = contato.cidade,
    db.data[index].bairro = contato.bairro,
    db.data[index].telefone = contato.telefone,
    db.data[index].reciclavel = contato.reciclavel,
    db.data[index].horario = contato.horario
    

    displayMessage("Contato alterado com sucesso");

    // Atualiza os dados no Local Storage
    localStorage.setItem('db_contato', JSON.stringify(db));
}

function deleteContato(id) {    
    // Filtra o array removendo o elemento com o id passado
    db.data = db.data.filter(function (element) { return element.id != id });

    displayMessage("Contato removido com sucesso");

    // Atualiza os dados no Local Storage
    localStorage.setItem('db_contato', JSON.stringify(db));
}