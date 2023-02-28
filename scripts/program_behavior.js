// Author: Addison Farley
// Date: 11/15/2022
// Class: SDEV 117
// File Name: program_behavior.js
// File Description: Dataset Assignment script page that controls data flow

//get access to our buttons
let previous = document.getElementById("previous");
let next = document.getElementById("next");

//the index of the current object shown
//on the web page
let index = 0;

//responds to clicks of the "previous" button
previous.onclick = function(event) {
    index--;

    //make sure that index is never less than zero...
    if(index < 0)
    {
        index = 0;
    }

    countries(index);
    getInfo(index);
    owners(index);
    altitudes(index);
    species(index);
    scores(index);

    display();
}

//responds to clicks of the "next" button
next.onclick = function(event) {
    index++;

    //make sure that index is never greater than
    //array.length - 1
    if(index > coffee.length - 1)
    {
        index = coffee.length - 1;
    }

    countries(index);
    getInfo(index);
    owners(index);
    altitudes(index);
    species(index);
    scores(index);

    display();
}

//shows the current record in the array of records
//at the position within the index variable
function display()
{
    console.log("Next index is " + index);
}

//start the page with information loaded at index 0
function startPage()
{
    countries(index);
    getInfo(index);
    owners(index);
    altitudes(index);
    species(index);
    scores(index);
}

startPage();

//functions to pull information from the json file
function countries(index)
{
    let country = document.getElementById("countryVal");

    country.innerHTML = coffee[index]["Location"]["Country"];

    return country.style.textTransform = "capitalize";;
}

function getInfo(index)
{
    let regions = document.getElementById("regionVal");

    regions.innerHTML = coffee[index]["Location"]["Region"];

    return regions.style.textTransform = "capitalize";
}

function owners(index)
{
    let owners = document.getElementById("ownerVal");

    owners.innerHTML = coffee[index]["Data"]["Owner"];

    return owners.style.textTransform = "capitalize";;
}

function altitudes(index)
{
    let altitudes = document.getElementById("altitudeVal");

    altitudes.innerHTML = coffee[index]["Location"]["Altitude"]["Average"] + " feet";

    return altitudes;
}

function species(index)
{
    let species = document.getElementById("speciesVal");

    species.innerHTML = coffee[index]["Data"]["Type"]["Species"];

    return species.style.textTransform = "capitalize";
}

function scores(index)
{
    let scores = document.getElementById("scoreVal");

    scores.innerHTML = coffee[index]["Data"]["Scores"]["Total"];

    return scores;
}

function averageScores()
{
    let avg = document.getElementById("averageScore");

    let total = 0;

    for(let i = 0; i < coffee.length - 1; i++)
    {
        total += coffee[i]["Data"]["Scores"]["Total"];
    }

    avg.innerHTML = "The average score of all coffee graded is: " + (total / coffee.length).toFixed(2);

    return avg;
}

function highestScore()
{
    let highestScore = document.getElementById("highestScore");

    let highest = 0;

    ind = 0;

    for(let i = 0; i < coffee.length - 1; i++)
    {
        if(coffee[i]["Data"]["Scores"]["Total"] > highest)
        {
            highest = coffee[i]["Data"]["Scores"]["Total"];
            ind = i;
        }
    }

    let country = coffee[ind]["Location"]["Country"];
    let company = coffee[ind]["Data"]["Owner"];

    highestScore.innerHTML = `The highest score of all coffee graded is:<br><b>Country</b>: ${country}<br><b>Company</b>: ${company}<br><b>Score</b>: ${highest}`

    return highestScore;
}

function lowestScore()
{
    let lowestScore = document.getElementById("lowestScore");

    let lowest = 100;

    ind = 0;

    for(let i = 0; i < coffee.length - 1; i++)
    {
        if(coffee[i]["Data"]["Scores"]["Total"] < lowest && coffee[i]["Data"]["Scores"]["Total"] > 0)
        {
            lowest = coffee[i]["Data"]["Scores"]["Total"];
            ind = i;
        }
    }

    let country = coffee[ind]["Location"]["Country"];
    let company = coffee[ind]["Data"]["Owner"];

    lowestScore.innerHTML = `The lowest score of all coffee graded is:<br><b>Country</b>: ${country}<br><b>Company</b>: ${company}<br><b>Score</b>: ${lowest}`

    return lowestScore;
}

function datasetLength()
{
    let dataLength = document.getElementById("datasetLength");

    dataLength.innerHTML = coffee.length;

    return dataLength;
}


//fill in the average scores in our html
averageScores();
highestScore();
lowestScore();
datasetLength();