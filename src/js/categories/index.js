import refs from '../refs';
import { fetchCategories } from '../api';
import { createMarkupCategories } from '../markup';

async function handleCategory() {
    try {
        const data = await fetchCategories();
        refs.categoriesList.insertAdjacentHTML(
            'beforeend',
            createMarkupCategories(data)
        );
    } catch (error) {
        console.log(error);
    }
}

handleCategory();
