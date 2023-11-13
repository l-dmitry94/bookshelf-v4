import refs from "../refs";

refs.closeIcon.style.display = "none"



refs.burgerBtn.addEventListener("click", handleClick);

function handleClick(event) {
    const isOpen = event.currentTarget.classList.toggle("active")
    
    if(isOpen) {
        refs.mobileMenu.classList.add("active");
        refs.closeIcon.style.display = "block";
        refs.burgerIcon.style.display = "none"


    } else {
        refs.mobileMenu.classList.remove("active");
        refs.closeIcon.style.display = "none";
        refs.burgerIcon.style.display = "block"
    }
}