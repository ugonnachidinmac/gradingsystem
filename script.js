
let score = JSON.parse(localStorage.getItem('score'));

function check(score){
    let grade = '';

    if (score >= 75 && score <=100){
        grade = 'A';
}   else if (score >= 65 && score <= 74){
    grade = 'AB'
}else{
    grade= 'You don\'t have a score'
}
}

document.getElementById('grade').innerHTML = grade;