document.getElementsByClassName('container')[0].style.display = "block";
function next(id){
    document.getElementsByClassName('container')[id-1].style.display = "none";
    document.getElementsByClassName('container')[id].style.display = "flex";
}
function result(){
    var score = 0;
    if (document.getElementById('cor_1').checked){
        score++
    }
    if (document.getElementById('cor_2').checked){
        score++
    }
    if (document.getElementById('cor_3').checked){
        score++
    }
    if (document.getElementById('cor_4').checked){
        score++
    }
    if (document.getElementById('cor_5').checked){
        score++
    }
    alert("Вы сигма на "+score+"/5 баллов!");
}



