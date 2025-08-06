
var url = 'https://documentationappsapi.onrender.com'

/*
function fetchApi(method = 'GET', route, data = '') {

    var settings = {
        "url": `${url}${route}`,
        "method": method,
        "timeout": 0,
        "headers": {
            "Content-Type": "application/json"
        },
        "data": data,
    };


    $.ajax(settings).done(function (response) {
        return response
    });
}
    */

function fetchApi(method = 'GET', route, data = '') {



    return new Promise((resolve, reject) => {



        $.ajax({
            url: `${url}${route}`,
            method: method,
            timeout: 0,
            headers: {
                'Content-Type': 'application/json',
            },
            data: data,
            success: function (response) {

                resolve(response);
            },
            error: function (jqXHR, textStatus, errorThrown) {

                // Código HTTP
                const statusCode = jqXHR.status;

                // Mensagem de erro vinda do servidor (se houver)
                let mensagem = '';

                try {
                    const resposta = JSON.parse(jqXHR.responseText);
                    mensagem = resposta.message || resposta.error || 'Erro desconhecido';
                } catch (e) {
                    mensagem = jqXHR.responseText || 'Erro de comunicação com o servidor';
                }

                var obj = {
                    "success": false,
                    "message": message,
                    "statusCode": statusCode,
                    "data": null
                }

                resolve(obj)
            }
        });
    });
}