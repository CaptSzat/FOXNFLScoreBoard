let RL = document.getElementById("RL");
let RR = document.getElementById("RR");
let SR1 = document.getElementById("TRScore1");
let SL1 = document.getElementById("TLScore1");
let ScoreL = 0;
let ScoreR = 0;
localStorage.setItem('ScoreR', ScoreR);
localStorage.setItem('ScoreL', ScoreL);
let List = document.getElementById('List');
var txt = "";
var txt1 = "";
teams = [
    {
      "code": "ARI",
      "name": "Cardinals",
      "full_name": "Arizona Cardinals",
      "record" : "9-1", 
      "color" : "(151,35,63)",
      "border" : "(186,70,98)",
      "LPosR" : "",
      "RPosL" : "",
      "Top" : "",
      "image" : ""
    },
    {
      "code": "ATL",
      "name": "Falcons",
      "full_name": "Atlanta Falcons",
      "record" : "9-1", 
      "color" : "(167,25,48)",
      "border" : "(202,60,83)",
      "LPosR" : "",
      "RPosL" : "",
      "Top" : "",
      "image" : ""
    },
    {
      "code": "BAL",
      "name": "Ravens",
      "full_name": "Baltimore Ravens",
      "record" : "9-1", 
      "color" : "(26,25,95)",
      "border" : "(61,60,130)",
      "LPosR" : "160px",
      "RPosL" : "150px",
      "Top" : "-5px",
      "image" : "./SVG/Baltimore_Ravens_logo.svg"
    },
    {
      "code": "BUF",
      "name": "Bills",
      "full_name": "Buffalo Bills",
      "record" : "9-1",
      "color" : "(0,51,141)",
      "border" : "(35,86,176)",
      "LPosR" : "160px",
      "RPosL" : "155px",
      "Top" : "-15px",
      "image" : "./SVG/Buffalo_Bills_logo.svg"
    },
    {
      "code": "CAR",
      "name": "Panthers",
      "full_name": "Carolina Panthers",
      "record" : "9-1",
      "color" : "(0,133,202)",
      "border" : "(35,167,237)",
      "LPosR" : "",
      "RPosL" : "",
      "Top" : "",
      "image" : ""
    },
    {
      "code": "CHI",
      "name": "Bears",
      "full_name": "Chicago Bears",
      "record" : "9-1",
      "color" : "(11,22,42)",
      "border" : "(46,57,77)",
      "LPosR" : "",
      "RPosL" : "",
      "Top" : "",
      "image" : ""
    },
    {
      "code": "CIN",
      "name": "Bengals",
      "full_name": "Cincinnati Bengals",
      "record" : "9-1",
      "color" : "(251,79,20)",
      "border" : "(255,114,55)",
      "LPosR" : "160px",
      "RPosL" : "150px",
      "Top" : "-20px",
      "image" : "./SVG/Cincinnati_Bengals_logo.svg"
    },
    {
      "code": "CLE",
      "name": "Browns",
      "full_name": "Cleveland Browns",
      "record" : "9-1",
      "color" : "(255,60,0)",
      "border" : "(255,95,35)",
      "LPosR" : "",
      "RPosL" : "",
      "Top" : "",
      "image" : ""
    },
    {
      "code": "DAL",
      "name": "Cowboys",
      "full_name": "Dallas Cowboys",
      "record" : "9-1",
      "color" : "(0,53,148)",
      "border" : "(35,88,183)",
      "LPosR" : "",
      "RPosL" : "",
      "Top" : "",
      "image" : ""
    },
    {
      "code": "DEN",
      "name": "Broncos",
      "full_name": "Denver Broncos",
      "record" : "9-1",
      "color" : "(251,79,20)",
      "border" : "(255,104,55)",
      "LPosR" : "",
      "RPosL" : "",
      "Top" : "",
      "image" : ""
    },
    {
      "code": "DET",
      "name": "Lions",
      "full_name": "Detroit Lions",
      "record" : "9-1",
      "color" : "(0,118,182)",
      "border" : "(35,153,217)",
      "LPosR" : "",
      "RPosL" : "",
      "Top" : "",
      "image" : ""
    },
    {
      "code": "GB",
      "name": "Packers",
      "full_name": "Green Bay Packers",
      "record" : "9-1",
      "color" : "(24 48 40)",
      "border" : "(59,83,75)",
      "LPosR" : "",
      "RPosL" : "",
      "Top" : "",
      "image" : ""
    },
    {
      "code": "HOU",
      "name": "Texans",
      "full_name": "Houston Texans",
      "record" : "9-1",
      "color" : "(3,32,47)",
      "border" : "(38,67,82)",
      "LPosR" : "",
      "RPosL" : "",
      "Top" : "",
      "image" : ""
    },
    {
      "code": "IND",
      "name": "Colts",
      "full_name": "Indianapolis Colts",
      "record" : "9-1",
      "color" : "(0,44,95)",
      "border" : "(35,79,130)",
      "LPosR" : "",
      "RPosL" : "",
      "Top" : "",
      "image" : ""
    },
    {
      "code": "JAX",
      "name": "Jaguars",
      "full_name": "Jacksonville Jaguars",
      "record" : "9-1",
      "color" : "(0,103,120)",
      "border" : "(35,138,155)",
      "LPosR" : "",
      "RPosL" : "",
      "Top" : "",
      "image" : ""
    },
    {
      "code": "KC",
      "name": "Chiefs",
      "full_name": "Kansas City Chiefs",
      "record" : "9-1",
      "color" : "(227,24,55)",
      "border" : "(262,59,90)",
      "LPosR" : "",
      "RPosL" : "",
      "Top" : "",
      "image" : ""
    },
    {
      "code": "LA",
      "name": "Rams",
      "full_name": "Los Angeles Rams",
      "record" : "9-1",
      "color" : "(0,42,94)",
      "border" : "(35,77,129)",
      "LPosR" : "",
      "RPosL" : "",
      "Top" : "",
      "image" : ""
    },
    {
      "code": "MIA",
      "name": "Dolphins",
      "full_name": "Miami Dolphins",
      "record" : "9-1",
      "color" : "(0,142,151)",
      "border" : "(35,177,186)",
      "LPosR" : "180px",
      "RPosL" : "140px",
      "Top" : "-25px",
      "image" : "./SVG/Miami_Dolphins_logo.svg"
    },
    {
      "code": "MIN",
      "name": "Vikings",
      "full_name": "Minnesota Vikings",
      "record" : "9-1",
      "color" : "(79,38,131)",
      "border" : "(104,73,166)",
      "LPosR" : "",
      "RPosL" : "",
      "Top" : "",
      "image" : ""
    },
    {
      "code": "NE",
      "name": "Patriots",
      "full_name": "New England Patriots",
      "record" : "9-1",
      "color" : "(0,34,68)",
      "border" : "(35,69,103)",
      "LPosR" : "175px",
      "RPosL" : "140px",
      "Top" : "-5px",
      "image" : "./SVG/New_England_Patriots_logo.svg"
    },
    {
      "code": "NO",
      "name": "Saints",
      "full_name": "New Orleans Saints",
      "record" : "9-1",
      "color" : "(211,188,141)",
      "border" : "(246,123,176)",
      "LPosR" : "",
      "RPosL" : "",
      "Top" : "",
      "image" : ""
    },
    {
      "code": "NYG",
      "name": "Giants",
      "full_name": "New York Giants",
      "record" : "9-1",
      "color" : "(1,35,82)",
      "border" : "(36,70,117)",
      "LPosR" : "",
      "RPosL" : "",
      "Top" : "",
      "image" : ""
    },
    {
      "code": "NYJ",
      "name": "Jets",
      "full_name": "New York Jets",
      "record" : "9-1",
      "color" : "(18,87,64)",
      "border" : "(52,122,99)",
      "LPosR" : "150px",
      "RPosL" : "150px",
      "Top" : "-15px",
      "image" : ""
    },
    {
      "code": "LV",
      "name": "Raiders",
      "full_name": "Las Vegas Raiders",
      "record" : "9-1",
      "color" : "(0,0,0)",
      "border" : "(35,35,35)",
      "LPosR" : "",
      "RPosL" : "",
      "Top" : "",
      "image" : ""
    },
    {
      "code": "PHI",
      "name": "Eagles",
      "full_name": "Philadelphia Eagles",
      "record" : "9-1",
      "color" : "(0,76,84)",
      "border" : "(35,111,119)",
      "LPosR" : "",
      "RPosL" : "",
      "Top" : "",
      "image" : ""
    },
    {
      "code": "PIT",
      "name": "Steelers",
      "full_name": "Pittsburgh Steelers",
      "record" : "9-1",
      "color" : "(255,182,18)",
      "border" : "(255,217,52)",
      "LPosR" : "",
      "RPosL" : "",
      "Top" : "",
      "image" : ""
    },
    {
      "code": "LAC",
      "name": "Chargers",
      "full_name": "Los Angeles Chargers",
      "record" : "9-1",
      "color" : "(0,42,94)",
      "border" : "(35,77,129)",
      "LPosR" : "",
      "RPosL" : "",
      "Top" : "",
      "image" : ""
    },
    {
      "code": "SF",
      "name": "49ers",
      "full_name": "San Francisco 49ers",
      "record" : "9-1",
      "color" : "(170,0,0)",
      "border" : "(205,35,35)",
      "LPosR" : "",
      "RPosL" : "",
      "Top" : "",
      "image" : ""
    },
    {
      "code": "SEA",
      "name": "Seahawks",
      "full_name": "Seattle Seahawks",
      "record" : "9-1",
      "color" : "(0,34,68)",
      "border" : "(35,69,103)",
      "LPosR" : "",
      "RPosL" : "",
      "Top" : "",
      "image" : ""
    },
    {
      "code": "TB",
      "name": "Buccaneers",
      "full_name": "Tampa Bay Buccaneers",
      "record" : "9-1",
      "color" : "(213,10,10)",
      "border" : "(248,45,45)",
      "LPosR" : "",
      "RPosL" : "",
      "Top" : "",
      "image" : ""
    },
    {
      "code": "TEN",
      "name": "Titans",
      "full_name": "Tennessee Titans",
      "record" : "9-1",
      "color" : "(12,35,64)",
      "border" : "(47,70,99)",
      "LPosR" : "",
      "RPosL" : "",
      "Top" : "",
      "image" : ""
    },
    {
      "code": "WAS",
      "name": "Redskins",
      "full_name": "Washington Redskins",
      "record" : "9-1",
      "color" : "(63,16,16)",
      "border" : "(98,51,51)",
      "LPosR" : "",
      "RPosL" : "",
      "Top" : "",
      "image" : ""
    }
  ];
txt += '<select  id="teamOne">'
for (var i = 0; i < teams.length; i++) {
    txt += "<option " + 'value="'+ i +'">' + teams[i].name + "</option>";
}
txt += "</select>"
document.getElementById("T1").innerHTML = txt;
let teamOne = document.getElementById('teamOne');

txt1 += '<select  id="teamTwo">'
for (var i = 0; i < teams.length; i++) {
    txt1 += "<option " + 'value="'+ i +'">' + teams[i].name + "</option>";
}
txt1 += "</select>"
document.getElementById("T2").innerHTML = txt1;
let teamTwo = document.getElementById('teamTwo');
// ---------------------------------------------

document.getElementById('TL').innerHTML = teams[teamOne.value].name;
document.getElementById('TL').style.backgroundColor ="rgb" + teams[teamOne.value].color;
document.getElementById('TL').style.borderColor ="rgb" + teams[teamOne.value].border;
document.getElementById('TR').innerHTML = teams[teamTwo.value].name;
document.getElementById('TR').style.backgroundColor = "rgb" + teams[teamTwo.value].color;
document.getElementById('TR').style.borderColor ="rgb" + teams[teamTwo.value].border;


RL.addEventListener('click', function() {
    if(localStorage.getItem('RL') != 'true'){
        localStorage.setItem('RL', 'true');
    } else{
        localStorage.setItem('RL', 'false');
    }
});

RR.addEventListener('click', function() {
    if(localStorage.getItem('RR') != 'true'){
        localStorage.setItem('RR', 'true');
    } else{
        localStorage.setItem('RR', 'false');
    }
});

SL1.addEventListener('click', function() {
      ScoreL = ScoreL + 1;
      localStorage.setItem('ScoreL', ScoreL);
  
});
SR1.addEventListener('click', function() {
  ScoreR = ScoreR + 1;
  localStorage.setItem('ScoreR', ScoreR);
});

teamOne.addEventListener("change", function() {
    document.getElementById('TL').innerHTML = teams[teamOne.value].name;
    localStorage.setItem('TLB', 'true');
    document.getElementById('TL').style.backgroundColor ="rgb" + teams[teamOne.value].color;
    localStorage.setItem('TL-Color', "rgb" + teams[teamOne.value].color);
    document.getElementById('TL').style.borderColor ="rgb" + teams[teamOne.value].border;
    localStorage.setItem('TL-Border', "rgb" + teams[teamOne.value].border);
    localStorage.setItem('TLLogo', teams[teamOne.value].image);
    localStorage.setItem('TLLogo-Pos', teams[teamOne.value].LPosR);
    localStorage.setItem('TLLogo-Top', teams[teamOne.value].Top);
});
teamTwo.addEventListener("change", function() {
    document.getElementById('TR').innerHTML = teams[teamTwo.value].name;
    localStorage.setItem('TRB', 'true');
    document.getElementById('TR').style.backgroundColor = "rgb" + teams[teamTwo.value].color;
    localStorage.setItem('TR-Color', "rgb" + teams[teamTwo.value].color);
    document.getElementById('TR').style.borderColor ="rgb" + teams[teamTwo.value].border;
    localStorage.setItem('TR-Border', "rgb" + teams[teamTwo.value].border);
    localStorage.setItem('TRLogo', teams[teamTwo.value].image);
    localStorage.setItem('TRLogo-Pos', teams[teamTwo.value].RPosL);
    localStorage.setItem('TRLogo-Top', teams[teamTwo.value].Top);
});