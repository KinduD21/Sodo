const anchorWrapper = document.querySelector(".anchor_wrapper");
const navbarButtons = anchorWrapper.querySelectorAll(".circle-anchor");

function isScrolledIntoView(elem) {
  let elemTop = elem.offsetTop - 110;
  let elemBottom = elemTop + elem.offsetHeight - 110;
  return window.pageYOffset >= elemTop && window.pageYOffset <= elemBottom;
}

window.addEventListener("scroll", function () {
  const container = document.querySelector(".base-container");

  container.querySelectorAll("section").forEach((section) => {

    if (isScrolledIntoView(section)) {
      navbarButtons.forEach((btn) => {
        btn.classList.remove("circle-anchor_active");

        if (section.getAttribute("id") === btn.dataset.href) {
          btn.classList.add("circle-anchor_active");
        }
      });
    }
  });
});
