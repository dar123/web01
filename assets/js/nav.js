document.addEventListener('DOMContentLoaded', function() {
  // 移動端下拉選單切換
  const dropdowns = document.querySelectorAll('.dropdown > a');
  
  dropdowns.forEach(dropdown => {
    dropdown.addEventListener('click', function(e) {
      if (window.innerWidth <= 768) {
        e.preventDefault();
        this.parentElement.classList.toggle('active');
      }
    });
  });
}); 