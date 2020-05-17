import { createMarkup } from '../pages/games.js';
import { games, programs } from '../../data.js';


const header = () => {
    const navigationList = document.querySelector('.navigationList'); //ul
    const listItems = document.querySelector('.listItems'); //ul


    const user = document.querySelector('.user');

    const currentActivePage = document.querySelector('.activeLink'); //a
    const currentPageName = document.querySelector('.currentPageName'); //p
    listItems.innerHTML = createMarkup(games);


    const setActiveLink = (event) => {
        if (event.target === event.currentTarget) {
            return
        }
        const currentActiveLink = document.querySelector('.activeLink');
        currentActiveLink && currentActiveLink.classList.remove('activeLink');
        event.target.classList.add('activeLink');

        switch (event.target.dataset.page) {
            case 'games':
                listItems.innerHTML = createMarkup(games);
                break;
            case 'programs':
                listItems.innerHTML = createMarkup(programs)
                break;
            case 'news':
                listItems.innerHTML = createMarkup(programs)
                break;
            default:
                break;
        }
    }

    const setUser = (event) => {
        event.currentTarget.classList.toggle('activeUser');
    }

    const addToCart = (event) => {
        console.log(event.target)
    }

    navigationList.addEventListener('click', setActiveLink);
    user.addEventListener('click', setUser);
    listItems.addEventListener('click', addToCart)

}

export default header;


















// const navigationList = document.querySelector('.navigationList');
// // console.log(navigationList);

// // ============= styled elements ===================

// // navigationList.style.backgroundColor = 'green';
// // navigationList.classList.add('backgroundStyle');
// // navigationList.classList.remove('backgroundStyle');
// // navigationList.classList.toggle('navigationList');

// // const stylesToggle = document.querySelector('.stylesToggle');
// // stylesToggle.addEventListener('click', () => navigationList.classList.toggle('navigationList'))

