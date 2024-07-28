var a=0,b=0,c=0,d=0,e=0;
let candidates = {
    Modi : a,
    RahulGandhi : b,
    Kejariwal : c,
    AmitShah : d,
    EknathShinde : e
}

console.log(candidates)
function vote(){
    let selectedVote = document.querySelector('input[name="par"]:checked').value;
    if(selectedVote === "Modi"){
        candidates.Modi = ++a;
    }
    else if(selectedVote === "RahulGandhi"){
        candidates.RahulGandhi = ++b;
    }
    else if(selectedVote === "Kejariwal"){
        candidates.Kejariwal = ++c;
    }
    else if(selectedVote === "AmitShah"){
        candidates.AmitShah = ++d;
    }
    else if(selectedVote === "EknathShinde"){
        candidates.EknathShinde = ++e;
    }
}

function getVote(){
    let result = document.getElementById('voteResults');
    result.innerHTML = ` Total Votes: <br> Modi = ${candidates.Modi} <br> Rahul Gandhi = ${candidates.RahulGandhi}<br> Kejariwal = ${candidates.Kejariwal}<br> Amit Shah = ${candidates.AmitShah}<br> Eknath Shinde = ${candidates.EknathShinde} `
}
