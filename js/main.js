// help from https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Traversing_an_HTML_table_with_JavaScript_and_DOM_Interfaces
//
//
// var teamStat = [teams.length];
// for(var i=0; i < teams.length; i++) {
//   teamStat.push({
//     team: teams[i],
//     winNum: wins[i],
//     lossNum: losses[i]
//   });
// }


// var body = document.getElementsByTagName('body')[0];
// var table = document.createElement('table');
// var tBody = document.createElement('tbody');
// var data = Object.keys(teamStat[0]);
//
// function createTable(table, data) {
//

function getBest() {
  var tempWin = 0;
  var tempTeam = 0;

  for (var i = 0; i < teams.length; i++) {
    if (wins[i] >= tempWin) {
      tempWin = wins[i];
      tempTeam = i;
    }
  }
  return teams[tempTeam];
}


var bestTeam = getBest();
console.log(bestTeam);
var teamStats;

// table head
var body = document.getElementsByTagName('body')[0];
var table = document.createElement('table');
var tBody = document.createElement('tbody');


var heading = table.createTHead();
var row = heading.insertRow();
var cellHA = row.insertCell(0);
var cellHB = row.insertCell(1);
var cellHC = row.insertCell(2);
cellHA.innerHTML = 'Teams';
cellHB.innerHTML = 'Wins';
cellHC.innerHTML = 'Losses';

 


for (var i = 0; i < teams.length; i++) {
  teamStats = {
    teamName: teams[i],
    teamWins: wins[i],
    teamLosses: losses[i]
  };


  var row = table.insertRow();

  var cellA = row.insertCell(0);
  var cellB = row.insertCell(1);
  var cellC = row.insertCell(2);

  cellA.innerHTML = teamStats.teamName;
  cellB.innerHTML = teamStats.teamWins;
  cellC.innerHTML = teamStats.teamLosses;

  table.appendChild(tBody);
  body.appendChild(table);
  tBody.appendChild(row);

  var tempTeam = teams[i];
  if (tempTeam === bestTeam) {
    row.style.backgroundColor = 'yellow';
    row.style.fontWeight = 'bolder';
  } else {
    row.style.color = 'black';
  }

  table.setAttribute('border', '1');
  table.style.width = '75%';
  table.style.tableLayout = 'fixed';
}






//
//
//
//
//
// //main.js for learing JS in Day 2
// var x=2;
// var username = "annie";
// var htmlBuilder = "";
//
// teams = new Array([]);
// teams = ["Braves", "Yankees", "Nationals"];
// wins = [62, 58, 66];
// losses = [55, 89, 56];
//
// console.log(teams);
//
// console.log(wins);
// console.log(wins[x]);
//
//
// htmlBuilder = '<h2>Teams:</h2>';
// htmlBuilder += '<div class="team-list">';
//
// for(var i=0; i <teams.length; i++){
//   console.log("inside the loop " +i);
//
//   htmlBuilder += teams[i] + " wins: " + wins[i] + " losses: " + losses[i] + "<br/>";
//   console.log(htmlBuilder);
//
//   if(losses[i] >= 60){
//     console.log("This team is bad")
//   }else{
//     console.log("this team is kinda good")
//   }
// }
//
// htmlBuilder += "</div>"
// document.getElementById('teams').innerHTML = htmlBuilder;
//
//
// //IN CLASS CHALLENGE
//
// var tempWin = 0;
// var tempTeam = "";
//
// for(var i=0; i <teams.length; i++){
//   if(wins[i] > wins[i+1])
//   tempWin = i;
//   tempTeam = teams[i];
//   console.log(tempWin + " " + tempTeam)
// }
//
// console.log("the winningest team is " + tempTeam)
