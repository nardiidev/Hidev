document.getElementById('current-year').textContent = new Date().getFullYear();
document.addEventListener('DOMContentLoaded', function() {
  const links = document.querySelectorAll('.link-list a');

  links.forEach(link => {
    link.addEventListener('click', function(event) {
      event.preventDefault(); // Prevent default link behavior

      // Remove 'selected' class from all links
      links.forEach(l => l.classList.remove('selected'));

      // Add 'selected' class to the clicked link
      this.classList.add('selected');
    });
  });
});