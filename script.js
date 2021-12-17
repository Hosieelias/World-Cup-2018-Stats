const searchBar = document.querySelectorAll("#input")
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
        let rounds = [res.data.rounds]
       console.log(res.data.rounds);
        return res
        
    }catch(error){
        console.log(error)
        console.log("try again")
    }

}
fetchRounds();

function fetchMatchInfo (){
    let match = form1.value;

    let currentwcRounds = wcRounds(match)
    console.log(currentwcRounds)
    removeData();

    let h1 = document.createElement("h1")
    h1.innerText = `${match}`
    divMatch.appendChild(h1);

    pawayScore.innerHTML = currentwcRounds.away_score;
    phomeScore.innerText = currentwcRounds.home_score;


}

