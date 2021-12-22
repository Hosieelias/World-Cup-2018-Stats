const searchBar = document.querySelector("#input")
const buttonSearch = document.querySelector("#searchBt")
const divMatch = document.querySelector(".matches")
const pawayScore = document.querySelector(".awayscore")
const phomeScore = document.querySelector(".homescore")
const form1 = document.querySelector(".form")
const wcRounds = [];


async function fetchRounds(){
    try {
        const url = `https://raw.githubusercontent.com/openfootball/worldcup.json/master/2018/worldcup.json`
        const res = await axios.get(url)
        let rounds = res.data.rounds
    //    console.log(res.data.rounds);
        populateDropdown(rounds)
        
    }catch(error){
        console.log(error)
        console.log("try again")
    }

}
fetchRounds();

function populateDropdown(rounds){
    rounds.forEach(round => {
        let option = document.createElement('option')
        option.innerText = round.name
        option.value = round.name
        searchBar.appendChild(option)
    })
}

// searchBar.addEventListener("change", (e)=> {
//     //console.log(searchBar.value)



// })


function gamesOnMatchday (){
    let games = searchBar.value
    let currentRounds = populateDropdown(rounds)[games]
    console.log(games)
   let h2 = document.createElement('h2');
   h2.innerText = currentRounds.team1.name;
    gameData.appendChild(h2)
    let h3 = document.createElement('h3');
    h3.innerText = currentRounds.team2.name;
    gameData.appendChild(h3)
    
    let p = document.createElement('p')
    p.innerText = currentRounds.score1
    gameData.appendChild(p);

    async function fetchNewData(){
        removeText();


    }

}
searchBar.addEventListene  ("change", gamesOnMatchday);