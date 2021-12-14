## Project Overview

## Project Name

World Cup

## Project Description

Gives information on which teams scored and how well each team did in the 2018 world cup.

## API and Data Sample
[World Cup 2018] (https://raw.githubusercontent.com/openfootball/worldcup.json/master/2018/worldcup.json)

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
                    ],
                    "group": "Group C",
                    "stadium": {
                        "key": "kazan",
                        "name": "Kazan Arena"
                    },
                    "city": "Kazan",
                    "timezone": "UTC+3"
                },
                {
                    "num": 6,
                    "date": "2018-06-16",
                    "time": "19:00",
                    "team1": {
                        "name": "Peru",
                        "code": "PER"
                    },
                    "team2": {
                        "name": "Denmark",
                        "code": "DEN"
                    },
                    "score1": 0,
                    "score2": 1,
                    "score1i": 0,
                    "score2i": 0,
                    "goals1": [],
                    "goals2": [
                        {
                            "name": "Poulsen",
                            "minute": 59,
                            "score1": 0,
                            "score2": 1
                        }
                    ],
                    "group": "Group C",
                    "stadium": {
                        "key": "mordovia",
                        "name": "Mordovia Arena"
                    },
                    "city": "Saransk",
                    "timezone": "UTC+3"
                },
                {
                    "num": 7,
                    "date": "2018-06-16",
                    "time": "16:00",
                    "team1": {
                        "name": "Argentina",
                        "code": "ARG"
                    },
                    "team2": {
                        "name": "Iceland",
                        "code": "ISL"
                    },
                    "score1": 1,
                    "score2": 1,
                    "score1i": 1,
                    "score2i": 1,
                    "goals1": [
                        {
                            "name": "Agüero",
                            "minute": 19,
                            "score1": 1,
                            "score2": 0
                        }
                    ],
                    "goals2": [
                        {
                            "name": "Finnbogason",
                            "minute": 23,
                            "score1": 1,
                            "score2": 1
                        }
                    ],
                    "group": "Group D",
                    "stadium": {
                        "key": "spartak",
                        "name": "Spartak Stadium"
                    },
                    "city": "Moscow",
                    "timezone": "UTC+3"
                },
                {
                    "num": 8,
                    "date": "2018-06-16",
                    "time": "21:00",
                    "team1": {
                        "name": "Croatia",
                        "code": "CRO"
                    },
                    "team2": {
                        "name": "Nigeria",
                        "code": "NGA"
                    },
                    "score1": 2,
                    "score2": 0,
                    "score1i": 1,
                    "score2i": 0,
                    "goals1": [
                        {
                            "name": "Etebo",
                            "minute": 32,
                            "score1": 1,
                            "score2": 0,
                            "owngoal": true
                        },
                        {
                            "name": "Modrić",
                            "minute": 71,
                            "score1": 2,
                            "score2": 0,
                            "penalty": true
                        }
                    ],
                    "goals2": [],
                    "group": "Group D",
                    "stadium": {
                        "key": "kaliningrad",
                        "name": "Kaliningrad Stadium"
                    },
                    "city": "Kaliningrad",
                    "timezone": "UTC+2"
                }
            ]
        },
	}
        ```
## Wireframes

Upload images of your wireframes to an image hosting site or add them to an assets folder in your repo and link them here with a description of each specific wireframe.

### MVP/PostMVP

The functionality will then be divided into two separate lists: MPV and PostMVP.  Carefully decided what is placed into your MVP as the client will expect this functionality to be implemented upon project completion.  

#### MVP 
*These are examples only. Replace with your own MVP features.*

- Find and use external api 
- Render data on page 
- Allow user to choose favorites 

#### PostMVP  
*These are examples only. Replace with your own Post-MVP features.*

- Add second API
- Use local storage to save user favorites

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

Tell us how long you anticipate spending on each area of development. Be sure to consider how many hours a day you plan to be coding and how many days you have available until presentation day.

Time frames are also key in the development cycle.  You have limited time to code all phases of the game.  Your estimates can then be used to evalute game possibilities based on time needed and the actual time you have before game must be submitted. It's always best to pad the time by a few hours so that you account for the unknown so add and additional hour or two to each component to play it safe. Throughout your project, keep track of your Time Invested and Actual Time and update your README regularly.

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Adding Form | H | 3hrs| 3.5hrs | 3.5hrs |
| Working with API | H | 3hrs| 2.5hrs | 2.5hrs |
| Total | H | 6hrs| 5hrs | 5hrs |

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of and a brief description.  

```
function reverse(string) {
	// here is the code to reverse a string of text
}
```

## Change Log
 Use this section to document what changes were made and the reasoning behind those changes.  
