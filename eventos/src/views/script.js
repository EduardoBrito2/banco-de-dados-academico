const API_URL = 'http://localhost:3000/eventos';

const criarEvento = async () => {
    const titulo = document.getElementById('input-nome-evento').value;
    const descricao = document.getElementById('input-descricao-evento').value;
    const data = document.getElementById('input-data-evento').value;
    const valor = parseFloat(document.getElementById('input-valor-evento').value) || 0;
    const local = document.getElementById('input-local-evento').value;

    const evento = { titulo, descricao, data, local, valor };

    try {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(evento)
        });

        if (!response.ok) throw new Error('Erro ao criar evento');

        await response.json();
        listarEventos();
    } catch (error) {
        console.error(error);
        alert('Erro ao criar evento');
    }
};

const listarEventos = async () => {
    try {
        const response = await fetch(API_URL);
        const eventos = await response.json();

        const container = document.getElementById('eventos-container');
        container.innerHTML = '';

        eventos.forEach(evento => {
            const card = document.createElement('div');
            card.className = 'event-card';
            card.innerHTML = `
                <h3>${evento.titulo}</h3>
                <p>${evento.descricao}</p>
                <p><strong>Data:</strong> ${new Date(evento.data).toLocaleDateString()}</p>
                <p><strong>Valor:</strong> R$ ${parseFloat(evento.valor).toFixed(2)}</p>
                <p><strong>Local:</strong> ${evento.local}</p>
                <button onclick="deletarEvento('${evento._id}')">Excluir</button>
                <button onclick="prepararEdicao('${evento._id}', '${evento.titulo}', '${evento.descricao}', '${evento.data}', '${evento.valor}')">Editar</button>
            `;
            container.appendChild(card);
        });
    } catch (error) {
        console.error(error);
        alert('Erro ao listar eventos');
    }
};

const deletarEvento = async (id) => {
    if (!confirm('Deseja excluir este evento?')) return;

    try {
        const response = await fetch(`${API_URL}/${id}`, {
            method: 'DELETE'
        });

        if (!response.ok) throw new Error('Erro ao excluir evento');
        listarEventos();
    } catch (error) {
        console.error(error);
        alert('Erro ao excluir evento');
    }
};

const prepararEdicao = (id, titulo, descricao, data, valor,local) => {
    document.getElementById('formulario-edicao').style.display = 'block';
    document.getElementById('editar-nome-evento').value = titulo;
    document.getElementById('editar-descricao-evento').value = descricao;
    document.getElementById('editar-local_evento').value = local;
    document.getElementById('editar-data-evento').value = data.split('T')[0];
    document.getElementById('editar-valor-evento').value = valor;
    document.getElementById('botao-salvar-edicao').setAttribute('data-id', id);
};

const salvarEdicao = async () => {
    const id = document.getElementById('botao-salvar-edicao').getAttribute('data-id');
    const titulo = document.getElementById('editar-nome-evento').value;
    const descricao = document.getElementById('editar-descricao-evento').value;
    const data = document.getElementById('editar-data-evento').value;
    const valor = parseFloat(document.getElementById('editar-valor-evento').value) || 0;
    const local = document.getElementById('editar-local_evento').value;

    try {
        const response = await fetch(`${API_URL}/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ titulo, descricao, data, valor, local })
        });

        if (!response.ok) throw new Error('Erro ao editar evento');

        document.getElementById('formulario-edicao').style.display = 'none';
        listarEventos();
    } catch (error) {
        console.error(error);
        alert('Erro ao editar evento');
    }
};

document.getElementById('botao-criar-evento').addEventListener('click', criarEvento);
document.getElementById('botao-salvar-edicao').addEventListener('click', salvarEdicao);

window.onload = listarEventos;
