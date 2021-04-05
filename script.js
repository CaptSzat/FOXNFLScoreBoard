function reload(){
    if(localStorage.getItem('RL') === 'true'){
        document.getElementById('leftRibbon').classList.add('show-ribbon');
    } else{
        document.getElementById('leftRibbon').classList.remove('show-ribbon');
    }
    if(localStorage.getItem('RR') === 'true'){
        document.getElementById('rightRibbon').classList.add('show-ribbon');
    } else{
        document.getElementById('rightRibbon').classList.remove('show-ribbon');
    }
    if(localStorage.getItem('TRB') || localStorage.getItem('TLB') == 'true'){
        document.getElementById('RS').style.borderColor = localStorage.getItem('TR-Border');
        document.getElementById('RS').style.backgroundColor = localStorage.getItem('TR-Color');
        document.getElementById('LS').style.borderColor = localStorage.getItem('TL-Border');
        document.getElementById('LS').style.backgroundColor = localStorage.getItem('TL-Color');
        document.getElementById('leftRibbon').style.borderColor = localStorage.getItem('TL-Border');
        document.getElementById('leftRibbon').style.backgroundColor = localStorage.getItem('TL-Color');
        document.getElementById('LT').style.backgroundColor = localStorage.getItem('TL-Color');
        document.getElementById('rightRibbon').style.borderColor = localStorage.getItem('TR-Border');
        document.getElementById('rightRibbon').style.backgroundColor = localStorage.getItem('TR-Color');
        document.getElementById('RT').style.backgroundColor = localStorage.getItem('TR-Color');

        document.getElementById('RLogo').src = localStorage.getItem('TRLogo');
        document.getElementById('RLogo').style.left = localStorage.getItem('TRLogo-Pos');
        document.getElementById('RLogo').style.top = localStorage.getItem('TRLogo-Top');
        document.getElementById('LLogo').src = localStorage.getItem('TLLogo');
        document.getElementById('LLogo').style.right = localStorage.getItem('TLLogo-Pos');
        document.getElementById('LLogo').style.top = localStorage.getItem('TLLogo-Top');

        localStorage.setItem('TLB', 'false');
        localStorage.setItem('TRB', 'false');
    }
    document.getElementById('LScore').innerHTML = localStorage.getItem('ScoreL');
    document.getElementById('RScore').innerHTML = localStorage.getItem('ScoreR');
} setInterval('reload()', 1)