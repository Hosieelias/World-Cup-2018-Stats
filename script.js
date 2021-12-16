


// const getTeams = () => {
//     axios.get("https://worldcup.sfg.io/matches")
// .then((response)=> {
    
//     let awayTeam = response.data[0].away_team;
//     console.log(awayTeam)
// })
// }


function matches(){
    axios.get("https://world-cup-json-2018.herokuapp.com/matches")
    .then(respond => console.log(respond.data)).catch(err => console.log(err))
}
matches();