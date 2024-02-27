document.addEventListener("DOMContentLoaded", function () {
    const advantagesBtn = document.getElementById("advantagesBtn");
    const usageBtn = document.getElementById("usageBtn");
    const advantagesBlock = document.getElementById("advantagesBlock");
    const usageBlock = document.getElementById("usageBlock");

    advantagesBtn.addEventListener("click", function () {
      advantagesBtn.classList.add("active");
      usageBtn.classList.remove("active");
      advantagesBlock.classList.add("active");
      usageBlock.classList.remove("active");
    });

    usageBtn.addEventListener("click", function () {
      usageBtn.classList.add("active");
      advantagesBtn.classList.remove("active");
      usageBlock.classList.add("active");
      advantagesBlock.classList.remove("active");
    });
  });