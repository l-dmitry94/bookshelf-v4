import refs from "../refs";

refs.burgerBtn.addEventListener("click", handleClick);

function handleClick(event) {
    const isOpen = event.currentTarget.classList.toggle("active")
    
    if(isOpen) {
        refs.mobileMenu.classList.add("active")
    } else {
        refs.mobileMenu.classList.remove("active");
    }
}