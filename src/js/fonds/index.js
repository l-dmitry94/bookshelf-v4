import refs from '../refs';
import { fonds } from '../api';
import { createMarkupFonds } from '../markup';

function handleFonds() {
    const data = fonds;
    refs.fondsList.innerHTML = createMarkupFonds(data);
}

handleFonds();

refs.fondsBtn.addEventListener('click', (event) => {
    refs.fondsList.classList.toggle('active')
    event.currentTarget.classList.toggle("active")
}
);
