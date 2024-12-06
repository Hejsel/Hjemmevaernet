document.addEventListener('DOMContentLoaded', () => {
    const checkboxes = document.querySelectorAll('.checkbox-input');
    const bogElements = document.querySelectorAll('#bog');
  
    function filterBooks() {
      const selectedCategories = Array.from(checkboxes)
        .filter(checkbox => checkbox.checked)
        .map(checkbox => checkbox.parentElement.textContent.trim());
  
      bogElements.forEach(bog => {
        const categories = bog.dataset.category.split(',');
        if (selectedCategories.length === 0 || selectedCategories.some(cat => categories.includes(cat))) {
          bog.style.display = 'block';
        } else {
          bog.style.display = 'none';
        }
      });
    }
  
    checkboxes.forEach(checkbox => {
      checkbox.addEventListener('change', filterBooks);
    });
  
    const clearFilterButton = document.querySelector('#buttons');
    clearFilterButton.addEventListener('click', (e) => {
      e.preventDefault();
      checkboxes.forEach(checkbox => (checkbox.checked = false));
      filterBooks();
    });
  });
  

