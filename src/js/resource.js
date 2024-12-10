document.addEventListener('DOMContentLoaded', () => {
  const checkboxes = document.querySelectorAll('.checkbox-input');
  const bogElements = document.querySelectorAll('#bog');
  const hrElements = document.querySelectorAll('#bog ~ hr'); // Vælg <hr> direkte efter hver #bog

  function filterBooks() {
      const selectedCategories = Array.from(checkboxes)
          .filter(checkbox => checkbox.checked)
          .map(checkbox => checkbox.parentElement.textContent.trim());

      bogElements.forEach((bog, index) => {
          const categories = bog.dataset.category.split(',');
          if (selectedCategories.length === 0 || selectedCategories.some(cat => categories.includes(cat))) {
              bog.style.display = 'flex'; // Vis bog
              if (hrElements[index]) {
                  hrElements[index].style.display = 'block'; // Vis tilhørende <hr>
              }
          } else {
              bog.style.display = 'none'; // Skjul bog
              if (hrElements[index]) {
                  hrElements[index].style.display = 'none'; // Skjul tilhørende <hr>
              }
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
