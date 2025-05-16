const apiUrl = "/pets";

const petForm = document.getElementById("pet-form");
const petList = document.getElementById("pet-list");

async function carregarPets() {
  const res = await fetch(apiUrl);
  const pets = await res.json();

  petList.innerHTML = "";
  pets.forEach(pet => {
    const li = document.createElement("li");
    li.innerHTML = `
      ${pet.nome} - ${pet.especie} (${pet.idade} anos) 
      ${pet.emTratamento ? "<strong>[EM TRATAMENTO]</strong>" : ""}
      <button onclick="marcarTratamento('${pet._id}')">Tratar</button>
      <button onclick="removerPet('${pet._id}')">Remover</button>
    `;
    petList.appendChild(li);
  });
}

petForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const nome = document.getElementById("nome").value;
  const especie = document.getElementById("especie").value;
  const idade = document.getElementById("idade").value;

  await fetch(apiUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ nome, especie, idade }),
  });

  petForm.reset();
  carregarPets();
});

async function removerPet(id) {
  await fetch(`${apiUrl}/${id}`, { method: "DELETE" });
  carregarPets();
}

async function marcarTratamento(id) {
  await fetch(`${apiUrl}/${id}/tratamento`, { method: "PATCH" });
  carregarPets();
}

carregarPets();