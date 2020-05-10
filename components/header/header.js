const header = () => {
    const navigationList = document.querySelector('.navigationList'); //ul
    const user = document.querySelector('.user');

    const currentActivePage = document.querySelector('.activeLink'); //a
    const currentPageName = document.querySelector('.currentPageName'); //p
    currentPageName.textContent = currentActivePage.dataset.page;


    const setActiveLink = (event) => {
        if (event.target === event.currentTarget) {
            return
        }
        const currentActiveLink = document.querySelector('.activeLink');
        currentActiveLink && currentActiveLink.classList.remove('activeLink');
        event.target.classList.add('activeLink');

        currentPageName.textContent = event.target.dataset.page;
    }

    const setUser = (event) => {
        event.currentTarget.classList.toggle('activeUser');
    }

    navigationList.addEventListener('click', setActiveLink);
    user.addEventListener('click', setUser);

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

