const hamburgerMenu = document.getElementById('hamburger-menu');
const sidebar = document.getElementById('sidebar');
const links = document.querySelectorAll('.sidebar ul li a');

// Toggle sidebar visibility
hamburgerMenu.addEventListener('click', () => {
  sidebar.classList.toggle('show'); // Add 'show' class for mobile
  sidebar.classList.toggle('hide'); // Toggle 'hide' for visibility
});

// Handle section switching
links.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();

    // Remove active class from all links
    links.forEach(link => link.classList.remove('active'));

    // Add active class to clicked link
    link.classList.add('active');

    // Hide all sections
    document.querySelectorAll('.content-section').forEach(section => {
      section.classList.remove('active');
    });

    // Show the corresponding section
    const target = link.getAttribute('data-target');
    document.getElementById(target).classList.add('active');

    // Close sidebar on mobile after clicking a link
    if (window.innerWidth <= 768) {
      sidebar.classList.remove('show');
    }
  });
});
