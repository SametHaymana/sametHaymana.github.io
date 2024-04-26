var names = ["Ben", "Joel", "Judy", "Anne"];
var scores = [88, 98, 77, 88];

var $ = function (id) { return document.getElementById(id); };

window.onload = function () {
    
    $("add").onclick = addScore;
    $("name").focus();
};


function displayResults() {

    var sum = 0;
    var highestScore = 0;
    var highestScorers = [];
    
    for (var i = 0; i < scores.length; i++) {
        sum += scores[i];
        
        if (scores[i] > highestScore) 
		{
            highestScore = scores[i];
            highestScorers = [names[i]];
        } 
		else if (scores[i] === highestScore) 
		{
           highestScorers.push(names[i]);
        }
    }
    
    var average = sum / scores.length;
    
    $("results").innerHTML = `
        <h2>Results</h2>
        <p>Average score: ${average.toFixed(2)}</p>
        <p>Highest score: ${highestScore} (Names: ${highestScorers.join(", ")})</p>
    `;
}


function displayScores() 
{
   
    var table = $("scores_table");

    table.innerHTML = `
        <tr>
            <th>Name</th>
            <th>Score</th>
        </tr>
    `;
    
    for (var i = 0; i < names.length; i++) 
	{
        var row = table.insertRow();
        var nameCell = row.insertCell(0);
        var scoreCell = row.insertCell(1);
        
        nameCell.textContent = names[i];
        scoreCell.textContent = scores[i];
    }
}


function addScore() 
{
    
    var name = $("name").value.trim();
    var score = parseInt($("score").value);
    
    if (name === "" || isNaN(score) || score < 0 || score > 100) 
	{
        alert("You must enter a name and a valid score (0-100).");
        return;
    }
    
    names.push(name);
    scores.push(score);
    
    displayResults();
    displayScores();
    
    $("name").value = "";
    $("score").value = "";
    $("name").focus();
}