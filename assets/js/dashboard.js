  document.addEventListener("DOMContentLoaded", function() {
  // This code ensures that the content of the page is loaded before attaching the event listener

  const inviteElement = document.querySelector('.invite');
  if (inviteElement) {
      inviteElement.addEventListener('click', function() {
          copyToClipboard("https://demos.motawreen.com/gam3y/");
          
          // Update the button's innerHTML to "Copied ✓"
          inviteElement.innerHTML = "Copied ✓";
      });
  }

  function copyToClipboard(text) {
      // Create a temporary input element to leverage the select method
      const tempInput = document.createElement('input');
      document.body.appendChild(tempInput);
      tempInput.value = text;
      tempInput.select();
      document.execCommand('copy');
      document.body.removeChild(tempInput);
  }
  $('#LatestSubjects').DataTable({
    paging: false,       // Disable pagination
    searching: false,    // Disable searching
    ordering: false,     // Disable ordering (sorting)
    scrollY: '175px',     // Vertical scrolling with fixed height for 3 rows
    scrollCollapse: true,// Collapse scrolling
    info: false,         // Disable table information
});

$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    items: 1,
    dots: true,
    autoplay: true,
    autoplayTimeout: 5000,  // Autoplay interval, in this case, 3 seconds
    smartSpeed: 1000,       // Speed of the transition in milliseconds
    slideSpeed: 1000        // Speed of slide animation in milliseconds
});
});
