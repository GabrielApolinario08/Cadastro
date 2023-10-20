const nomeInput = document.querySelector('#nome') as HTMLInputElement
nomeInput.focus()
const btnCadastros = document.querySelector('.mostraCadastros') as HTMLButtonElement
const modal = document.querySelector('.closeModal')
const retornar = document.querySelector('.fecharModal') as HTMLButtonElement

function openModal(): void {
    modal?.classList.remove('closeModal')
    modal?.classList.add('openModal')
}

function retornarCadastro(): void {
    modal?.classList.remove('openModal')
    modal?.classList.add('closeModal')
}

btnCadastros?.addEventListener('click', openModal)
retornar?.addEventListener('click', retornarCadastro)


// Cadastrando clientes
const form = document.querySelector('.cadastrar') as HTMLFormElement

form?.addEventListener('submit', (event) => {
    event.preventDefault()
    let nome:string = nomeInput.value

    const idadeInput = document.querySelector('#idade') as HTMLInputElement
    let idade:number = Number(idadeInput.value)

    const serieSelect = document.querySelector('#serie') as HTMLSelectElement
    let serie:string = serieSelect.value
   
    const raInput = document.querySelector('#ra') as HTMLInputElement
    let ra:string = raInput.value

    const emailInput = document.querySelector('#email') as HTMLInputElement
    let email:string = emailInput.value
    console.log(email.length);
    
    if (validando(nome, idade, serie, ra, email)) {
        cadastrando(nome, idade, serie, ra, email)
        limpaInputs(nomeInput, idadeInput, serieSelect, raInput, emailInput)
    }
})

function validando(nome:string, idade:number, serie:string, ra:string, email:string): boolean {
    if (nome == "" || idade == 0 || serie == "" || ra == "" || email == "") {
        alert("ERRO! Insira as informações corretamente!")
        return false
    }

    const emailRegex = new RegExp(
        /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/
    )
    
    if(emailRegex.test(email)) {
        return true
    } else {
        return false
    }
}

function cadastrando(nome:string, idade:number, serie:string, ra:string, email:string): void {
    const table = document.querySelector('tbody') as HTMLTableSectionElement
    table.innerHTML += `
    <tr>
        <td>${nome}</td>
        <td>${idade}</td>
        <td>${serie}</td>
        <td>${ra}</td>
        <td>${email}</td>
    </tr>`
}

function limpaInputs (nomeInput:HTMLInputElement, idadeInput:HTMLInputElement, serie:HTMLSelectElement, ra:HTMLInputElement, email:HTMLInputElement) {
    nomeInput.value = ""
    idadeInput.value = ""
    serie.value = ""
    ra.value = ""
    email.value = ""
    nomeInput.focus()
}

