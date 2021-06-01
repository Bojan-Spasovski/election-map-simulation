

var addContender = function (name, color) {

    var politician = {};

    politician.name = name;

    politician.color = color;

    politician.electionResults = null;

    politician.totalVotes = 0;

    politician.tallyUpTotalVotes = function () {
        this.totalVotes = 0;

        for (var i = 0; i < this.electionResults.length; i++) {
            this.totalVotes = this.totalVotes + this.electionResults[i];

        }

    };

    return politician;

};


var bojan = addContender("Bojan Spasovski", [132, 17, 11]);

var donald = addContender("Donald Trump", [245, 141, 136])



bojan.electionResults = [5, 1, 7, 2, 44, 7, 5, 3, 5, 2, 12, 32, 2, 4, 4, 6, 12, 53, 12, 53, 45, 64, 3, 1, 7, 65, 45, 75, 23, 4, 3, 56, 7, 3, 23, 5, 34, 12, 23, 25, 43, 11, 5, 6, 32, 36, 12, 65, 17, 13, 13];

donald.electionResults = [23, 34, 2, 3, 5, 7, 7, 3, 3, 6, 7, 34, 2, 5, 6, 2, 5, 5, 4, 23, 53, 45, 34, 23, 23, 2, 6, 3, 8, 23, 53, 4, 5, 76, 3, 5, 2, 2, 11, 12, 43, 1, 25, 7, 2, 14, 36, 23, 45, 54, 13];

bojan.electionResults[9] = 25;
donald.electionResults[9] = 13;

bojan.electionResults[4] = 6;
donald.electionResults[4] = 32;

bojan.electionResults[14] = 12;
donald.electionResults[14] = 5;


var setStateResults = function (state) {

    theStates[state].winner = null;

    if (bojan.electionResults[state] > donald.electionResults[state]) {
        theStates[state].winner = bojan;
    }

    else if
        (donald.electionResults[state] > bojan.electionResults[state]) {
        theStates[state].winner = donald
    }

    var stateWinner = theStates[state].winner;

    if (stateWinner !== null) {
        theStates[state].rgbColor = stateWinner.color;
    }
    else {

        theStates[state].rgbColor = [11, 32, 57];
    }

    var stateInfoTable = document.getElementById('stateResults');
    var header = stateInfoTable.children[0];
    var body = stateInfoTable.children[1];
    var stateName = header.children[0].children[0];
    var abbrev = header.children[0].children[1];
    var candidate1Name = body.children[0].children[0];
    var candidate2Name = body.children[1].children[0];
    var candidate1Results = body.children[0].children[1];
    var candidate2Results = body.children[1].children[1];
    var winnersName = body.children[2].children[1];

    stateName.innerText = theStates[state].nameFull;
    abbrev.innerText = "(" + theStates[state].nameAbbrev + ")";

    candidate1Name.innerText = bojan.name;
    candidate2Name.innerText = donald.name;

    candidate1Results.innerText = bojan.electionResults[state];
    candidate2Results.innerText = donald.electionResults[state];

    if (theStates[state].winner === null) {

        winnersName.innerText = "DRAW";
    } else {
        winnersName.innerText = theStates[state].winner.name;
    }


};

bojan.tallyUpTotalVotes();
donald.tallyUpTotalVotes();

var winner = {};

if (bojan.totalVotes > donald.totalVotes) {
    winner = bojan.name;
}
else if (donald.totalVotes > bojan.totalVotes) {
    winner = donald.name;
} else {

    winner = "DRAW.";
}



console.log("The total amount of votes for candidate Bojan Spasovski is" + " " + bojan.totalVotes);

console.log("The total amount of votes for candidate Donald Trump is" + " " + donald.totalVotes);

console.log("AND THE WINNER IS" + " " + winner + " " + "!!!");

console.log("Bojan's color is: " + bojan.color);

console.log("donald's color is: " + donald.color);


var countryInfoTable = document.getElementById('countryResults');

var row = countryInfoTable.children[0].children[0];


row.children[0].innerText = bojan.name;
row.children[1].innerText = bojan.totalVotes;
row.children[2].innerText = donald.name;
row.children[3].innerText = donald.totalVotes;
row.children[5].innerText = winner;

