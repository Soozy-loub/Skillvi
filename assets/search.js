/*=============== SEARCH BAR JS ===============*/
const toggleSearch = (search, button) => {
    const searchBar = document.getElementById(search),
          searchButton = document.getElementById(button);

    // Toggle on click
    searchButton.addEventListener('click', () => {
        searchBar.classList.toggle('show-search');
    });

    // Add on hover (mouseover)
    searchButton.addEventListener('mouseover', () => {
        searchBar.classList.add('show-search');
    });

    // Close when mouse leaves the area
    searchBar.addEventListener('mouseleave', () => {
        searchBar.classList.remove('show-search');
    });
};

toggleSearch('search-bar', 'search-button');
