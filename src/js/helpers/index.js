export function addLeadingZero(value) {
    return value < 10 ? `0${value}` : value;
}

export function toggleActiveCategory(event, arr) {
    return arr.forEach(item => {
        item.classList.remove('active');
        item.removeAttribute('disabled');
        event.classList.add('active');
    });
}

export function deleteDisabledCategory(item) {
    return item.setAttribute('disabled', '');
}

export function showAllBooksCategory(arr) {
    return arr.forEach(item => item.style.display = "block");
}

export function shortTitle(str) {
    const maxLength = 27;
    return str.length > maxLength ? str.slice(0, maxLength).trim() + "..." : str
}

export function addColorTitle(str) {
    const arrWords = str.split(" ")
    const lastWord = arrWords[arrWords.length - 1]
    arrWords[arrWords.length - 1] = `<span class="bookshelf__title-color">${lastWord}</span>`;
    return arrWords.join(" ")
}