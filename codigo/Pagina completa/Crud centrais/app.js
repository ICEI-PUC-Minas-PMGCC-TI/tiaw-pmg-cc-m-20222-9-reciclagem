// declara um conjunto inicial de contatos
var db_contatos_inicial = {
    "data": [
        {
            "id": 1,
            "empresa": "Reciclagem Buritis",
            "cidade": "Belo Horizonte",
            "bairro": "Buritis",
            "lixos" : "metal e plástico",
            "cnpj" : "91.464.693/0001-29",
            "email": "Sincere@april.biz",
            "telefone": "1-770-736-8031",
            "website": "hildegard.org"
        },
        {
            "id": 2,
            "empresa": "Reciclagem Funcionarios",
            "cidade": "Belo Horizonte",
            "bairro": "Funcionarios",
            "lixos" : "metal e plástico",
            "cnpj" : "21.429.513/0001-92",
            "email": "Shanna@melissa.tv",
            "telefone": "010-692-6593",
            "website": "anastasia.net"
        },
        {
            "id": 3,
            "empresa": "Reciclagem Barreiro",
            "cidade": "Belo Horizonte",
            "bairro": "Barreiro",
            "lixos" : "metal e plástico",
            "cnpj" : "98.017.273/0001-43",
            "email": "Nathan@yesenia.net",
            "telefone": "1-463-123-4447",
            "website": "ramiro.info"
        },
        {
            "id": 4,
            "empresa": "Reciclagem Gutierrez",
            "cidade": "Belo Horizonte",
            "bairro": "Gutierrez",
            "lixos" : "metal e plástico",
            "cnpj" : "69.289.364/0001-30",
            "email": "Julianne.OConner@kory.org",
            "telefone": "493-170-9623 x156",
            "website": "kale.biz"
        },
        {
            "id": 5,
            "empresa": "Reciclagem Coração Eucarístico",
            "cidade": "Belo Horizonte",
            "bairro": "Coração Eucarístico",
            "lixos" : "metal e plástico",
            "cnpj" : "",
            "email": "Lucio_Hettinger@annie.ca",
            "telefone": "(254)954-1289",
            "website": "demarco.info"
        },
        {
            "id": 6,
            "empresa": "Reciclagem Pampulha",
            "cidade": "Belo Horizonte",
            "bairro": "Pampulha",
            "lixos" : "metal e plástico",
            "cnpj" : "58.826.044/0001-55",
            "email": "Karley_Dach@jasper.info",
            "telefone": "1-477-935-8478",
            "website": "ola.org"
        },
        {
            "id": 7,
            "empresa": "Reciclagem Belvedere",
            "cidade": "Belo Horizonte",
            "bairro": "Belvedere",
            "lixos" : "metal e plástico",
            "cnpj" : "36.769.378/0001-00",
            "email": "Telly.Hoeger@billy.biz",
            "telefone": "210.067.6132",
            "website": "elvis.io"
        },
        {
            "id": 8,
            "empresa": "Reciclagem Nova Suiça",
            "cidade": "Belo Horizonte",
            "bairro": "Nova Suiça",
            "lixos" : "metal e plástico",
            "cnpj" : "29.644.667/0001-09",
            "email": "Sherwood@rosamond.me",
            "telefone": "586.493.6943",
            "website": "jacynthe.com"
        },
        {
            "id": 9,
            "empresa": "Reciclagem Castelo",
            "cidade": "Belo Horizonte",
            "bairro": "Castelo",
            "lixos" : "metal e plástico",
            "cnpj" : "41.505.805/0001-74",
            "email": "Chaim_McDermott@dana.io",
            "telefone": "(775)976-6794",
            "website": "conrad.com"
        },
        {
            "id": 10,
            "empresa": "Reciclagem Nova Cachoeirinha",
            "cidade": "Belo Horizonte",
            "bairro": "Nova Cachoeirinha",
            "lixos" : "metal e plástico",
            "cnpj" : "82.318.846/0001-39",
            "email": "Rey.Padberg@karina.biz",
            "telefone": "024-648-3804",
            "website": "ambrose.net"
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
        "empresa": contato.empresa,
        "email" : contato.email,
        "telefone": contato.telefone,
        "cidade" : contato.cidade,
        "bairro": contato.bairro,
        "lixos" : contato.lixos,
        "cnpj" : contato.cnpj,
        "website": contato.website
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
    db.data[index].empresa = contato.empresa,
    db.data[index].email = contato.email,
    db.data[index].telefone = contato.telefone,
    db.data[index].cidade = contato.cidade,
    db.data[index].bairro = contato.bairro,
    db.data[index].lixos = contato.lixos,
    db.data[index].cnpj = contato.cnpj,
    db.data[index].website = contato.website

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