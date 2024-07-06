

// 1st way
const questions = document.querySelectorAll(".question");

questions.forEach(function (question){
    const btn = question.querySelector(".question-btn");

    btn.addEventListener("click", function () {
        questions.forEach(function(item){
            if (item !== question){
                item.classList.remove("show-text");
            }
        });

        question.classList.toggle("show-text");
    });
});


// Another way
/*
const btns = document.querySelectorAll(".question-btn");
const questions = document.querySelectorAll(".question");

btns.forEach(function (btn){
    btn.addEventListener("click", function(){
        const question = btn.parentElement.parentElement;

        questions.forEach(function(item){
            if (item !== question){
                item.classList.remove("show-text");
            }
        })

        question.classList.toggle("show-text");
    })
})
    */






