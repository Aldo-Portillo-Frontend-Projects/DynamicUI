const hamburger = document.getElementById('hamburger');
const dropdownContent = document.getElementById('dropdown-content')

hamburger.addEventListener('click', () => {
    dropdownContent.style.display === 'flex' ? dropdownContent.style.display = 'none': dropdownContent.style.display = 'flex';
});
