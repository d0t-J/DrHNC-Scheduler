document.addEventListener("DOMContentLoaded", function () {
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  var toggle = document.getElementById("navToggle");
  var desktopLinks = document.querySelector(".site-nav .nav-links");
  var mobileNav = document.getElementById("mobileNav");

  if (toggle && mobileNav && desktopLinks) {
    // Mirror the desktop links into the mobile panel once.
    mobileNav.innerHTML = desktopLinks.innerHTML;
    mobileNav.querySelectorAll("a").forEach(function (a) {
      a.style.padding = "10px 0";
      a.style.fontSize = "1rem";
    });

    toggle.addEventListener("click", function () {
      var isOpen = mobileNav.style.display === "flex";
      mobileNav.style.display = isOpen ? "none" : "flex";
      toggle.setAttribute("aria-expanded", String(!isOpen));
    });

    mobileNav.addEventListener("click", function (e) {
      if (e.target.tagName === "A") {
        mobileNav.style.display = "none";
        toggle.setAttribute("aria-expanded", "false");
      }
    });
  }
});
