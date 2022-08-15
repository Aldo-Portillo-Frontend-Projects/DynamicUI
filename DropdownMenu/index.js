const hamburger = document.getElementById('hamburger');
const dropdownContent = document.getElementById('dropdown-content')

// and for each one we add a 'click' listener
hamburger.addEventListener('click', () => {
    dropdownContent.style.display === 'flex' ? dropdownContent.style.display = 'none': dropdownContent.style.display = 'flex';
});
