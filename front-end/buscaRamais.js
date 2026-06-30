const input = document.getElementById("input-texto");
const select = document.getElementById("input-select");

function filtrarUsuarios() {
    const linhas = document.querySelectorAll(".row-user");
    const busca = input.value.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    const setorSelecionado = select.value.toLowerCase();

    linhas.forEach(linha => {
        const nome = linha.querySelector(".user p").textContent.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
        const ramal = linha.id;
        const setorAttr = linha.getAttribute('data-setor') || '';
        const setorTexto = setorAttr.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');

        const bateuTexto = nome.includes(busca) || ramal.includes(busca) || setorTexto.includes(busca);
        const bateuSetor = setorSelecionado === 'todos' || setorSelecionado === setorAttr.toLowerCase();

        if (bateuTexto && bateuSetor) {
            linha.style.display = '';
        } else {
            linha.style.display = 'none';
        }
    });
}

input.addEventListener("input", filtrarUsuarios);
select.addEventListener("change", filtrarUsuarios);