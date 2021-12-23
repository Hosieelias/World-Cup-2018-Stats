// const parse = require("nodemon/lib/cli/parse")
const searchBar = document.querySelector("#input")
const buttonSearch = document.querySelector("#searchBt")
const divMatch = document.querySelector(".matches")
const pawayScore = document.querySelector(".awayscore")
const phomeScore = document.querySelector(".homescore")
const form1 = document.querySelector(".form")
let parsedRounds;


async function fetchRounds(){
    try {
        const url = `https://raw.githubusercontent.com/openfootball/worldcup.json/master/2018/worldcup.json`
        const res = await axios.get(url)
        let rounds = res.data.rounds
        console.log(rounds);
        populateDropdown(rounds)
        parsedRounds = rounds
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
    // let games = searchBar.value
    // let currentRounds = populateDropdown(rounds)[games]
    let selectedRound = parsedRounds.find(round => round.name === searchBar.value)
   
    let h2 = document.createElement('h2');
    h2.innerText = selectedRound.matches[0].team1.name;
    divMatch.appendChild(h2)

        let p = document.createElement('p')
    p.innerText = selectedRound.matches[0].score1 + "-" + selectedRound.matches[0].score2
    divMatch.appendChild(p);

    // let p1 = document.createElement('p')
    // 
    // divMatch.appendChild(p1);
     
    let h3 = document.createElement('h3');
    h3.innerText = selectedRound.matches[0].team2.name;
    divMatch.appendChild(h3)

    async function fetchNewData(){
        removeText();

    }

}
searchBar.addEventListener("change", gamesOnMatchday);
buttonSearch.addEventListener("click", reload, false);