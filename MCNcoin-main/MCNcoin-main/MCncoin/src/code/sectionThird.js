document.addEventListener('DOMContentLoaded', function() {
  const buttons = document.querySelectorAll('.toggle-button');
  const contentBlocks = document.querySelectorAll('.content-block');

  buttons.forEach(function(button) {
    button.addEventListener('click', function() {
      buttons.forEach(function(btn) {
        btn.classList.remove('active');
      });
      this.classList.add('active');

      const targetContentId = this.getAttribute('data-target');
      contentBlocks.forEach(function(block) {
        block.classList.remove('active');
      });
      document.getElementById(targetContentId).classList.add('active');
    });
  });
});
