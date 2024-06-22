const btns = document.querySelectorAll(".tab-btn");
const desc = document.querySelectorAll(".content");
const area = document.querySelector(".about");


area.addEventListener("click", (e) => {
    //if button is clicked, get the id type
    const id = e.target.dataset.id;
    if (id){
        btns.forEach((btn) => {
            //remove active for all buttons(reset)
            btn.classList.remove("active");
        });
        //add active class to button
        e.target.classList.add("active");
        
        desc.forEach((dtype) => {
            //reset description
            dtype.classList.remove("active")
        })
        // datasetid is same as element id
        // get that and add active
        const element = document.getElementById(id);
        element.classList.add("active");
    }
});