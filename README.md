## Project Overview

## Project Name

[World Cup 2018 Stats](https://github.com/Hosieelias/World-Cup-2018-Stats.git)

## Project Description

Gives information on which teams scored and how well each team did in the 2018 world cup.

## API and Data Sample
[World Cup](https://raw.githubusercontent.com/openfootball/worldcup.json/master/2018/worldcup.json)

```Json 
{
"name": "Matchday 3",
            "matches": [
                {
                    "num": 5,
                    "date": "2018-06-16",
                    "time": "13:00",
                    "team1": {
                        "name": "France",
                        "code": "FRA"
                    },
                    "team2": {
                        "name": "Australia",
                        "code": "AUS"
                    },
                    "score1": 2,
                    "score2": 1,
                    "score1i": 0,
                    "score2i": 0,
                    "goals1": [
                        {
                            "name": "Griezmann",
                            "minute": 58,
                            "score1": 1,
                            "score2": 0,
                            "penalty": true
                        },
                        {
                            "name": "Behich",
                            "minute": 81,
                            "score1": 2,
                            "score2": 1,
                            "owngoal": true
                        }
                    ],
                    "goals2": [
                        {
                            "name": "Jedinak",
                            "minute": 62,
                            "score1": 1,
                            "score2": 1,
                            "penalty": true
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

Include a full list of features that have been prioritized based on the `Time and Importance` Matrix.  Link this image in a similar manner to your wireframes

## Timeframes

 Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Basic HTML, CSS, JS setup | M | 2hrs| 0hrs | 0hrs |
| HTML page setup | M | 2hrs| 0hrs | 0hrs |
| Setting up API function | H | 2hrs| 0hrs | 0hrs |
| Incorporating the user input and API call | H | 2hrs| 0hrs | 0hrs |
| Debugging of the user input/API call | H | 1hrs| 0hrs | 0hrs |
| Style header and search bar | L | 3hrs| 0hrs | 0hrs |
| Pulling data and creating variables from API | H | 3hrs| 0hrs | 0hrs |
| DOM manipulation to show the different matches from the users search results | H | 4hrs| 0hrs | 0hrs |
| styling of team information from search results | H | 3hrs| 0hrs | 0hrs |
| styling of player information from search results | L | 3hrs| 0hrs | 0hrs |
| JS logic for best goals for each team | L | 3hrs| 0hrs | 0hrs |
| DOM output to page from JS effectiveness logic | L | 4hrs| 0hrs | 0hrs |
| CSS styling for the video clips | L | 6hrs| 0hrs | 0hrs |
| Create the ability to save favorite team | L | 4hrs| 0hrs | 0hrs |
| CSS style of the save feature | L | 3hrs| 0hrs | 0hrs |
| Total | H | 45hrs| 0hrs | 0hrs |

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of and a brief description.  

```
function reverse(string) {
	// here is the code to reverse a string of text
}
```

## Change Log
 Use this section to document what changes were made and the reasoning behind those changes.  
