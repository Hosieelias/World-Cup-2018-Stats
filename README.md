## Project Overview

## Project Name

[World Cup 2018 Stats]()

## Project Description

Allows user to search match days to find all world cup games on thhat day. Lets user look atr specific teams and see their stats for each game. User can also find the different players and show their stats. 

## API and Data Sample
[World Cup](https://world-cup-json-2018.herokuapp.com/matches)

```Json 
"stage_name": "First stage",
"home_team_country": "Russia",
"away_team_country": "Saudi Arabia",
"datetime": "2018-06-14T15:00:00Z",
"winner": "Russia",
"winner_code": "RUS",
"home_team": {
"country": "Russia",
"code": "RUS",
"goals": 5,
"penalties": 0
},
"away_team": {
"country": "Saudi Arabia",
"code": "KSA",
"goals": 0,
"penalties": 0
},
"home_team_events": [
{
"id": 5,
"type_of_event": "goal",
"player": "Iury GAZINSKY",
"time": "12'"
},
{
"id": 1,
"type_of_event": "substitution-in",
"player": "Denis CHERYSHEV",
"time": "24'"
}
 ```
## Wireframes

[wireframe for web](https://user-images.githubusercontent.com/94047631/145935563-b71eefd3-d558-4b69-b57f-dea2ba97d31f.png)
[wireframe for phone](https://user-images.githubusercontent.com/94047631/145935820-1cff8e7c-23f2-4b8d-90d7-1d7b563be338.png)


### MVP/PostMVP

The functionality will then be divided into two separate lists: MPV and PostMVP.  Carefully decided what is placed into your MVP as the client will expect this functionality to be implemented upon project completion.  

#### MVP

- Take user input from search bar and get specific match day
- call and use information from the api
- Show the user the games of the match day they chose and the scores
- shows the stats of the game the user selects
- responsive CSS

#### PostMVP  

- Allow for more in-depth stats on teams performances
- Use local storage to save users favorite teams
- Allow for another page with player stats
- add images of all teams 
- add best goal clip for each team

## Project Schedule

This schedule will be used to keep track of your progress throughout the week and align with our expectations.  

You are **responsible** for scheduling time with your squad to seek approval for each deliverable by the end of the corresponding day, excluding `Saturday` and `Sunday`.

|  Day | Deliverable | Status
|---|---| ---|
|Dec 10-12| Prompt / Wireframes / Priority Matrix / Timeframes | Incomplete
|Dec 13| Project Approval | Incomplete
|Dec 13| Core Application Structure (HTML, CSS, etc.) | Incomplete
|Dec 14| Pseudocode / actual code | Incomplete
|Dec 15| Initial Clickable Model  | Incomplete
|Dec 16| MVP | Incomplete
|Dec 17| Presentations | Incomplete

## Priority Matrix
[matrix](https://app.conceptboard.com/export/18c74c09-d339-4254-abc5-c20963612785/versions/;hi=0;low=144)

## Timeframes

 Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Basic HTML, CSS, JS setup | M | 3hrs| 0hrs | 0hrs |
| Setting up API function | H | 2hrs| 0hrs | 0hrs |
| Incorporating the user input and API call | H | 2hrs| 0hrs | 0hrs |
| Debugging of the user input/API call | H | 1hrs| 0hrs | 0hrs |
| Style header and search bar | L | 3hrs| 0hrs | 0hrs |
| Pulling data and creating variables from API | H | 3hrs| 0hrs | 0hrs |
| DOM manipulation to show the different matches from the users search results | H | 4hrs| 0hrs | 0hrs |
| styling of team information from search results | H | 3hrs| 0hrs | 0hrs |
| styling of player information from search results | L | 3hrs| 0hrs | 0hrs |
| JS logic for best goals for each team | L | 4hrs| 0hrs | 0hrs |
| CSS styling for the video clips | L | 6hrs| 0hrs | 0hrs |
| Create the ability to save favorite team | L | 4hrs| 0hrs | 0hrs |
| CSS style of the save feature | L | 3hrs| 0hrs | 0hrs |
| Total | H | 41hrs| 0hrs | 0hrs |

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of and a brief description.  

```
function reverse(string) {
	// here is the code to reverse a string of text
}
```

## Change Log
 Use this section to document what changes were made and the reasoning behind those changes.  
