// Variable Declaration

    const freelancerBtn = document.querySelector("#freelancer");
    const clientBtn = document.querySelector("#client");
    const freelancerForm = document.querySelector(".freelancer-form");
    const clientForm = document.querySelector(".client-form");

//end

freelancerBtn.addEventListener('click', () =>{
    freelancerBtn.style.backgroundColor = "#21264D";
    clientBtn.style.backgroundColor = "rgba(255, 255, 255, 0.2)";

    freelancerForm.style.left = "50%";
    clientForm.style.left = "-50%";

    freelancerForm.style.opacity = 1;
    clientForm.style.opacity = 0;

})

clientBtn.addEventListener('click', () =>{
    
    freelancerBtn.style.backgroundColor = "rgba(255, 255, 255, 0.2)";
    clientBtn.style.backgroundColor = "#21264D";

    freelancerForm.style.left = "150%";
    clientForm.style.left = "50%";

    freelancerForm.style.opacity = 0;
    clientForm.style.opacity = 1;

})
