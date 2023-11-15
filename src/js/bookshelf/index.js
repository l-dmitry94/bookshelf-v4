import { fetchCategoriesBooks, fetchCategoryBooks } from '../api';
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
            return;
        }

        const data = await fetchCategoryBooks(category);

        refs.bookshelf.innerHTML = createMarkupBooks(data, category);

        const listItem = document.querySelectorAll('.bookshelf__item');
        showAllBooksCategory(listItem);
        deleteDisabledCategory(target);
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
