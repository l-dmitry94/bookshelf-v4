import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';

import {
    fetchBook,
    fetchBooks,
    fetchCategoriesBooks,
    fetchCategoryBooks,
} from '../api';
import {
    deleteDisabledCategory,
    showAllBooksCategory,
    toggleActiveCategory,
} from '../helpers';
import {
    createMarkupBooks,
    createMarkupOnlyBooks,
    createMarkupTopBooks,
} from '../markup';
import refs from '../refs';

async function handleBookshelf() {
    try {
        const data = await fetchCategoriesBooks();
        refs.bookshelf.innerHTML = createMarkupTopBooks(data);

        const bookshelfWrapper = document.querySelector('.bookshelf__wrapper');

        bookshelfWrapper.addEventListener('click', handleMoreBtn);

        bookshelfWrapper.addEventListener('click', handleModal);
    } catch (error) {
        console.log(error);
    }
}

handleBookshelf();

refs.categoriesList.addEventListener('click', handleCategories);

async function handleCategories(event) {
    const { target } = event;

    if (!target.classList.contains('categories__button')) {
        return;
    }

    const categoriesBtn = document.querySelectorAll('.categories__button');
    toggleActiveCategory(target, categoriesBtn);

    const { category } = target.dataset;

    try {
        if (category === 'popular') {
            const popuparBooks = await fetchCategoriesBooks();
            refs.bookshelf.innerHTML = createMarkupTopBooks(popuparBooks);

            const bookshelfWrapper = document.querySelector(
                '.bookshelf__wrapper'
            );
            bookshelfWrapper.addEventListener('click', handleMoreBtn);
            bookshelfWrapper.addEventListener('click', handleModal);

            return;
        }

        const data = await fetchCategoryBooks(category);

        refs.bookshelf.innerHTML = createMarkupBooks(data, category);

        const listItem = document.querySelectorAll('.bookshelf__item');
        showAllBooksCategory(listItem);
        deleteDisabledCategory(target);

        const bookshelfList = document.querySelector(".bookshelf__list")
        bookshelfList.addEventListener('click', handleModal);

    } catch (error) {
        console.log(error);
    }
}

async function handleMoreBtn(event) {
    const { target } = event;

    if (!target.classList.contains('bookshelf__more')) {
        return;
    }

    const item = target.closest('.bookshelf__wrapper-item');
    const { category } = item.dataset;

    try {
        const data = await fetchCategoryBooks(category);

        item.innerHTML = createMarkupOnlyBooks(category, data);

        const bookshelfItem = item.querySelectorAll('.bookshelf__item');

        showAllBooksCategory(bookshelfItem);
    } catch (error) {
        console.log(error);
    }
}

async function handleModal(event) {
    event.preventDefault();

    const { target } = event;

    const linkElement = target.closest('.bookshelf__link');

    if (!linkElement) {
        return;
    }

    const { id } = linkElement.closest('.bookshelf__item').dataset;

    const book = await fetchBook(id);
    console.log(book);

    const instance = basicLightbox.create(
        `
        <div class="container">
            <div class="modal">
                    <div class="modal__wrapper">
                        <button class="modal__close">
                            <svg class="modal__close-icon">
                                <use href="#icon-close"></use>
                            </svg>
                        </button>
                        <div class="modal__inner">
                            <img
                                class="modal__image"
                                src="${book.book_image}"
                                alt="${book.title}"
                            />
                            <div class="modal__info">
                                <div class="modal__info-top">
                                    <div class="modal__head">
                                        <h3 class="modal__title">
                                            ${book.title}
                                        </h3>
                                        <p class="modal__author">${
                                            book.author
                                        }</p>
                                    </div>
                                    <p class="modal__descr">
                                        ${book.description}
                                    </p>
                                </div>
                                <a
                                    class="modal__platforms-link"
                                    href="${
                                        book.buy_links[0].url
                                    }" target="_blank"
                                >
                                    <img
                                        class="modal__platforms-icon"
                                        src="${new URL(
                                            '../../images/platform-amazon.png',
                                            import.meta.url
                                        )}"
                                        alt="title"
                                />
                                    <img
                                        class="modal__platforms-icon"
                                        src="${new URL(
                                            '../../images/platform-icon.png',
                                            import.meta.url
                                        )}"
                                        alt="title"
                                    />
                                </a>
                                </div>
                            </div>
                        </div>
                        <button class="modal__button" type="button">
                            add to shopping list
                        </button>
                    </div>
                </div>
            </div>
    `,
        {
            onShow: instance => {
                instance.element().querySelector('.modal__close').onclick =
                    instance.close;
            },
        }
    );

    instance.show();
}
