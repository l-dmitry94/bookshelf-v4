import { addColorTitle, addLeadingZero, shortTitle } from '../helpers';

export function createMarkupCategories(arr) {
    return arr
        .map(
            ({ list_name }) => `
        <li class="categories__item">
            <button class="categories__button" type="button" data-category="${list_name}">${list_name}</button>
        </li>
    `
        )
        .join('');
}

export function createMarkupFonds(arr) {
    return arr
        .map(
            ({ title, url, img, retina }, index) => `
                <li class="fonds__item">
                    <span class="fonds__item-number">${addLeadingZero(
                        index + 1
                    )}</span>
                    <a class="fonds__link" href="${url}" target="_blank">
                        <img
                            class="fonds__img"
                            srcset="${img} 1x,
                                    ${retina} 2x
                            "
                            src="${img}"
                            alt="${title}"
                        />
                    </a>
                </li>
    `
        )
        .join('');
}

export function createMarkupTopBooks(arr, category = "Best Sellers Books") {
    return `
        <h1 class="bookshelf__title">${addColorTitle(category)}</h1>
        <ul class="bookshelf__wrapper">
            ${createMarkupCategoryBooks(arr)}
        </ul>
    `;
}

export function createMarkupCategoryBooks(arr) {
    return arr
        .map(
            ({ list_name, books }) => `
            <li class="bookshelf__wrapper-item" data-category="${list_name}">
                
                ${createMarkupOnlyBooks(list_name, books)}
                
                <button class="bookshelf__more" type="button">see more</button>
            </li>
    `
        )
        .join('');
}

export function createMarkupOnlyBooks(category, arr) {
    return `
            <p class="bookshelf__category">${category}</p>
            <ul class="bookshelf__list">
                ${createMarkupBooksCategory(arr)}
            </ul>
    `
}

export function createMarkupBooksCategory(arr) {
    return arr
        .map(
            ({ _id, book_image, author, title }) => `
            <li class="bookshelf__item" data-id="${_id}">
                <a class="bookshelf__link" href="#">
                    <img class="bookshelf__item-img" src="${book_image}" alt="${title}">
                    <div class="bookshelf__item-info">
                        <h3 class="bookshelf__item-title" title="${title}">
                            ${shortTitle(title)}
                        </h3>
                        <p class="bookshelf__item-author">
                            ${author}
                        </p>
                    </div>
                </a>
            </li>
    `
        )
        .join('');
}

export function createMarkupBooks(arr, category) {
    return `
        <h1 class="bookshelf__title">${addColorTitle(category)}</h1>
        <ul class="bookshelf__list">
            ${createMarkupBooksCategory(arr)}
        </ul>
    `;
}
