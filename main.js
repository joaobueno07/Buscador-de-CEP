// https://api.postmon.com.br/v1/cep/*cep_a_consultar*

const botaoEnviar = document.querySelector('#botao-enviar');
const divInfo = document.querySelector('#conteudo-cep');
const valorCep = document.querySelector('#campo-cep');
const bairro = document.querySelector('#bairro');
const endereco = document.querySelector('#logradouro');
const cidade = document.querySelector('#cidade');
const cidadeInfo = document.querySelector('#cidade_info');
const cep = document.querySelector('#cep');
const estado = document.querySelector('#estado');
const estadoInfo = document.querySelector('#estado_info');


async function getCep(cep) {
    const url = `https://api.postmon.com.br/v1/cep/${cep}`;
    const response = await fetch(url);
    const data = await response.json();

    return data;
}


async function showData(cepData) {
    const dadosCEP = await getCep(cepData);

    bairro.innerHTML = dadosCEP.bairro;
    endereco.innerHTML = dadosCEP.logradouro;
    cidade.innerHTML = dadosCEP.cidade;
    cidadeInfo.innerHTML = ` <strong>A área é de:</strong> ${dadosCEP.cidade_info.area_km2} km quadrados <br>
    <strong>Código do IBGE:</strong> ${dadosCEP.cidade_info.codigo_ibge}`;
    cep.innerHTML = dadosCEP.cep;
    estado.innerHTML = dadosCEP.estado;
    estadoInfo.innerHTML = `<strong>A área é de:</strong> ${dadosCEP.estado_info.area_km2} <br>
    <strong>Código IBGE:</strong> ${dadosCEP.estado_info.codigo_ibge} <br>
    <strong>Nome do Estado:</strong> ${dadosCEP.estado_info.nome}`;



}

botaoEnviar.addEventListener('click', function() {
    const codigo = valorCep.value;
    divInfo.classList.remove('hide');
    showData(codigo);

});