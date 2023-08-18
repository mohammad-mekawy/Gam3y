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
});
