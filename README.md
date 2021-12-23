## Project Overview

## Project Name

[World Cup 2018 Stats](https://github.com/Hosieelias/World-Cup-2018-Stats)

## Project Description

Allows user to search match days to find all world cup games on thhat day. Lets user look atr specific teams and see their stats for each game. User can also find the different players and show their stats. 

## API and Data Sample
[World Cup](https://raw.githubusercontent.com/openfootball/worldcup.json/master/2018/worldcup.json)

```Json 
{
  "name": "World Cup 2018",
  "rounds": [
    {
      "name": "Matchday 1",
      "matches": [
        {
          "num": 1,
          "date": "2018-06-14",
          "time": "18:00",
          "team1": { "name": "Russia",       "code": "RUS" },
          "team2": { "name": "Saudi Arabia", "code": "KSA" },
          "score1":  5,
          "score2":  0,
          "score1i": 2,
          "score2i": 0,
          "goals1": [
            { "name": "Gazinsky",   "minute": 12,              "score1": 1, "score2": 0 },
            { "name": "Cheryshev",  "minute": 43,              "score1": 2, "score2": 0 },
            { "name": "Dzyuba",     "minute": 71,              "score1": 3, "score2": 0 },
            { "name": "Cheryshev",  "minute": 90, "offset": 1, "score1": 4, "score2": 0 },
            { "name": "Golovin",    "minute": 90, "offset": 4, "score1": 5, "score2": 0 }
          ],
          "goals2": [],
          "group": "Group A",
          "stadium": { "key": "luzhniki", "name": "Luzhniki Stadium" },
          "city": "Moscow",
          "timezone": "UTC+3"
        }
      ]
    },
    {
      "name": "Matchday 2",
      "matches": [
        {
          "num": 2,
          "date": "2018-06-15",
          "time": "17:00",
          "team1": { "name": "Egypt",   "code": "EGY" },
          "team2": { "name": "Uruguay", "code": "URU" },
          "score1":  0,
          "score2":  1,
          "score1i": 0,
          "score2i": 0,
          "goals1": [],
          "goals2": [
            { "name": "Giménez",  "minute": 89,  "score1": 0, "score2": 1 }
          ],
          "group": "Group A",
          "stadium": { "key": "ekaterinburg", "name": "Ekaterinburg Arena" },          
          "city": "Ekaterinburg",
          "timezone": "UTC+5"
        },
 ```
## Wireframes

[wireframe for web](https://user-images.githubusercontent.com/94047631/145935563-b71eefd3-d558-4b69-b57f-dea2ba97d31f.png)
[wireframe for phone](https://user-images.githubusercontent.com/94047631/145935820-1cff8e7c-23f2-4b8d-90d7-1d7b563be338.png)


### MVP/PostMVP

The functionality will then be divided into two separate lists: MPV and PostMVP.  Carefully decided what is placed into your MVP as the client will expect this functionality to be implemented upon project completion.  

#### MVP

- Take user input from clickdown bar and get the matchday games
- call and use information from the api
- Show the user the games of the match day they chose and the scores
- shows teams that played
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
|Dec 10-12| Prompt / Wireframes / Priority Matrix / Timeframes | Completed
|Dec 13| Project Approval | Completed
|Dec 13| Core Application Structure (HTML, CSS, etc.) | completed
|Dec 14| Pseudocode / actual code | completed
|Dec 15| Initial Clickable Model  | completed
|Dec 16| MVP | completed
|Dec 17| Presentations | Incomplete

## Priority Matrix
[matrix](https://app.conceptboard.com/export/18c74c09-d339-4254-abc5-c20963612785/versions/;hi=0;low=144)

## Timeframes

 Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Basic HTML, CSS, JS setup | M | 3hrs| 3hrs | 3hrs |
| Setting up API function | H | 5hrs| 6hrs | 6hrs |
| Incorporating the user input and API call | H | 2hrs| 5hrs | 5hrs |
| Debugging of the user input/API call | H | 1hrs| 3hrs | 3hrs |
| Style header and search bar | L | 3hrs| 2hrs | 2hrs |
| Pulling data and creating variables from API | H | 3hrs| 3hrs | 3hrs |
| DOM manipulation to show the different matches from the users search results | H | 4hrs| 5hrs | 5hrs |
| Total | H | 38-41hrs| 35-40hrs | 35-40hrs |

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of and a brief description.  

```
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
```

## Change Log
 Use this section to document what changes were made and the reasoning behind those changes.  
