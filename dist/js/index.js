"use strict";
const nomeInput = document.querySelector('#nome');
nomeInput.focus();
const btnCadastros = document.querySelector('.mostraCadastros');
const modal = document.querySelector('.closeModal');
const retornar = document.querySelector('.fecharModal');
function openModal() {
    modal === null || modal === void 0 ? void 0 : modal.classList.remove('closeModal');
    modal === null || modal === void 0 ? void 0 : modal.classList.add('openModal');
}
function retornarCadastro() {
    modal === null || modal === void 0 ? void 0 : modal.classList.remove('openModal');
    modal === null || modal === void 0 ? void 0 : modal.classList.add('closeModal');
}
btnCadastros === null || btnCadastros === void 0 ? void 0 : btnCadastros.addEventListener('click', openModal);
retornar === null || retornar === void 0 ? void 0 : retornar.addEventListener('click', retornarCadastro);
// Cadastrando clientes
const form = document.querySelector('.cadastrar');
form === null || form === void 0 ? void 0 : form.addEventListener('submit', (event) => {
    event.preventDefault();
    let nome = nomeInput.value;
    const idadeInput = document.querySelector('#idade');
    let idade = Number(idadeInput.value);
    const serieSelect = document.querySelector('#serie');
    let serie = serieSelect.value;
    const raInput = document.querySelector('#ra');
    let ra = raInput.value;
    const emailInput = document.querySelector('#email');
    let email = emailInput.value;
    console.log(email.length);
    if (validando(nome, idade, serie, ra, email)) {
        cadastrando(nome, idade, serie, ra, email);
        limpaInputs(nomeInput, idadeInput, serieSelect, raInput, emailInput);
    }
});
function validando(nome, idade, serie, ra, email) {
    if (nome == "" || idade == 0 || serie == "" || ra == "" || email == "") {
        alert("ERRO! Insira as informações corretamente!");
        return false;
    }
    const emailRegex = new RegExp(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/);
    if (emailRegex.test(email)) {
        return true;
    }
    else {
        return false;
    }
}
function cadastrando(nome, idade, serie, ra, email) {
    const table = document.querySelector('tbody');
    table.innerHTML += `
    <tr>
        <td>${nome}</td>
        <td>${idade}</td>
        <td>${serie}</td>
        <td>${ra}</td>
        <td>${email}</td>
    </tr>`;
}
function limpaInputs(nomeInput, idadeInput, serie, ra, email) {
    nomeInput.value = "";
    idadeInput.value = "";
    serie.value = "";
    ra.value = "";
    email.value = "";
    nomeInput.focus();
}
