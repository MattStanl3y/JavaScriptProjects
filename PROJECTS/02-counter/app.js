let count = 0;


const btns = document.querySelectorAll(".btn");
const value = document.querySelector("#value");


btns.forEach(function (btn){
    btn.addEventListener("click", function (e){
        console.log("button clicked");
        handleEvent(e);
    });
});


function handleEvent(e){
    let typeEvent = e.currentTarget.classList;
    getCount(typeEvent);
    value.textContent = count;
    value.style.color = getColor();

}

function getCount(typeEvent){
    if (typeEvent.contains("increase")){
        count++;
    }
    else if (typeEvent.contains("decrease")){
        count--;
    }
    else{
        count = 0;
    }
}

function getColor(){
    if (count > 0){
        return "green";
    }
    else if (count < 0){
        return "red";
    }
    else{
        return "black";
    }
}