const formF = document.querySelector("#form")


const findTeam = async (input) => {
    try {
        const searchURL = `https://worldcup.sfg.io/matches/${input}/`
        const response = await axios.get(searchURL)
        matcheData(response)

        return response
    }catch (error){
        console.log(error)
    }
}
const matchesDiv = document.querySelector("#matches");

function matcheData(response){
   teamObj = response
   console.log(teamObj)
   const gameInfo = document.createElement("div")
   gameInfo.classList = "match-info"

   const teamName = document.createElement("h2")
   const day = document.createElement("p")
   const  score = document.createElement("p")
    

}
