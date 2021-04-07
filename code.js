var choices = ['R','P','S'];
var comp_score = 0;
var your_score = 0;

window.onkeypress = function (e){
    var comp_choice = choices[Math.floor(Math.random()*3)];
    var your_choice = e.key;
    your_choice = your_choice.toUpperCase();
    if(your_choice != 'R' && your_choice != 'P' && your_choice != 'S'){
        confirm("Please choose R or S or P ...");
    }else{
        if(your_choice == comp_choice){

        }else if((your_choice === 'R' && comp_choice === 'S') || (your_choice === 'P' && comp_choice === 'R') || (your_choice === 'S' && comp_choice === 'P')){
            your_score++;
        }else{
            comp_score++;
        }
        confirm(`You: ${your_choice} Comp: ${comp_choice}\nYou ${your_score} : ${comp_score} Computer`);
    }
}

