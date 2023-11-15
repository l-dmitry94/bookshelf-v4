import axios from 'axios';

const BASE_URL = 'https://books-backend.p.goit.global/books';

export async function fetchCategories() {
    const response = await axios({
        method: 'GET',
        url: `${BASE_URL}/category-list`,
    });

    return response.data;
}

export async function fetchCategoriesBooks() {
    const response = await axios({
        method: 'GET',
        url: `${BASE_URL}/top-books`,
    });

    return response.data;
}

export async function fetchCategoryBooks(category) {
    const response = await axios({
        method: 'GET',
        url: `${BASE_URL}/category?category=${category}`,
    });

    return response.data;
}

export const fonds = [
    {
        title: 'Save the Children',
        url: 'https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis',
        img: new URL('../../images/fonds/fond-1.png', import.meta.url),
        retina: new URL('../../images/fonds/fond-1@2x.png', import.meta.url),
    },
    {
        title: 'Project HOPE',
        url: 'https://www.projecthope.org/country/ukraine/',
        img: new URL('../../images/fonds/fond-2.png', import.meta.url),
        retina: new URL('../../images/fonds/fond-2@2x.png', import.meta.url),
    },
    {
        title: 'UNITED24',
        url: 'https://u24.gov.ua/uk',
        img: new URL('../../images/fonds/fond-3.png', import.meta.url),
        retina: new URL('../../images/fonds/fond-3@2x.png', import.meta.url),
    },
    {
        title: 'International Medical Corps',
        url: 'https://internationalmedicalcorps.org/country/ukraine/',
        img: new URL('../../images/fonds/fond-4.png', import.meta.url),
        retina: new URL('../../images/fonds/fond-4@2x.png', import.meta.url),
    },
    {
        title: 'Medicins Sans Frontieres',
        url: 'https://www.msf.org/ukraine',
        img: new URL('../../images/fonds/fond-5.png', import.meta.url),
        retina: new URL('../../images/fonds/fond-5@2x.png', import.meta.url),
    },
    {
        title: 'RAZOM',
        url: 'https://www.razomforukraine.org/',
        img: new URL('../../images/fonds/fond-6.png', import.meta.url),
        retina: new URL('../../images/fonds/fond-6@2x.png', import.meta.url),
    },
    {
        title: 'Action against hunger',
        url: 'https://www.actionagainsthunger.org/location/europe/ukraine/',
        img: new URL('../../images/fonds/fond-7.png', import.meta.url),
        retina: new URL('../../images/fonds/fond-7@2x.png', import.meta.url),
    },
    {
        title: 'World vision',
        url: 'https://www.wvi.org/emergencies/ukraine',
        img: new URL('../../images/fonds/fond-8.png', import.meta.url),
        retina: new URL('../../images/fonds/fond-8@2x.png', import.meta.url),
    },
    {
        title: 'Serhiy Prytula Charity Foundation',
        url: 'https://prytulafoundation.org/en',
        img: new URL('../../images/fonds/fond-9.png', import.meta.url),
        retina: new URL('../../images/fonds/fond-9@2x.png', import.meta.url),
    }
];

