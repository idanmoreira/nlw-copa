function createGame(player1, hour, player2){
    return `
    <li>
        <img src="./assets/icon-${player1}.svg" alt="Bandeira do ${player1}">
        <strong>${hour}</strong>
        <img src="./assets/icon-${player2}.svg" alt="Bandeira do ${player2}">
     </li>
    `
}
let delay = -0.4;

function createCard(date, day, games){
    delay = delay + 0.4;
    return `
    <div class="card"style="animation-delay: ${delay}s">
        <h2>${date} <span>${day}</span></h2>
        <ul>
            ${games}
        </ul>
    </div>
    `
}




document.querySelector("#app").innerHTML = `
<main id="cards">
    ${createCard("20/11", "domingo", createGame("catar", "13:00", "equador"))}
    ${createCard("21/11", "segunda", createGame("inglaterra", "10:00", "ira") + createGame("senegal", "10:00", "holanda") + createGame("usa", "13:00", "gales"))}
    ${createCard("22/11", "terça", createGame("argentina", "07:00", "arabias") + createGame("dinamarca", "10:00", "tunisia") + createGame("mexico", "13:00", "polonia") + createGame("franca", "16:00", "australia"))}
    ${createCard("23/11", "quarta", createGame("marrocos", "07:00", "croacia") + createGame("alemanha", "10:00", "japao") + createGame("espanha", "13:00", "costarica") + createGame("belgica", "16:00", "canada"))}
    ${createCard("24/11", "quinta", createGame("switzerland", "07:00", "cameroon") + createGame("uruguai", "10:00", "coreia") + createGame("portugal", "13:00", "gana") + createGame("brazil", "16:00", "serbia"))}
    ${createCard("25/11", "sexta", createGame("gales", "07:00", "ira") + createGame("catar", "10:00", "senegal") + createGame("holanda", "13:00", "equador") + createGame("inglaterra", "16:00", "usa"))}
    ${createCard("26/11", "sábado", createGame("tunisia", "07:00", "australia") + createGame("polonia", "10:00", "arabias") + createGame("franca", "13:00", "dinamarca") + createGame("argentina", "16:00", "mexico"))}
    ${createCard("27/11", "domingo", createGame("japao", "07:00", "costarica") + createGame("belgica", "10:00", "marrocos") + createGame("croacia", "13:00", "canada") + createGame("espanha", "16:00", "alemanha"))}
    ${createCard("28/11", "segunda", createGame("cameroon", "07:00", "serbia") + createGame("coreia", "13:00", "gana") + createGame("switzerland", "13:00", "brazil") + createGame("portugal", "16:00", "uruguai"))}
    ${createCard("29/11", "terça", createGame("equador", "07:00", "senegal") + createGame("holanda", "10:00", "catar") + createGame("ira", "13:00", "usa") + createGame("gales", "16:00", "inglaterra"))}
    ${createCard("30/11", "quarta", createGame("tunisia", "07:00", "franca") + createGame("australia", "10:00", "dinamarca") + createGame("polonia", "13:00", "argentina") + createGame("arabias", "16:00", "mexico"))}
    ${createCard("01/12", "quinta", createGame("croacia", "07:00", "belgica") + createGame("canada", "10:00", "marrocos") + createGame("japao", "13:00", "espanha") + createGame("costarica", "16:00", "alemanha"))}
    ${createCard("02/12", "sexta", createGame("coreia", "07:00", "portugal") + createGame("gana", "13:00", "uruguai")  + createGame("serbia", "16:00", "switzerland") + createGame("brazil", "16:00", "cameroon"))}
</main>
` 