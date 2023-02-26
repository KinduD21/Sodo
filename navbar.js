// function onNavbarButtonClick(event) {
//   const thisId = event.target.getAttribute("data-id");
//   const gotom = setInterval(function () {
//     restaurant_go_to_navtab(thisId);
//     clearInterval(gotom);
//   }, 400);

//   carListItems.forEach((item) => {
//     item.classList.remove("active");
//   });
//   event.target.parentNode.classList.add("active");
// }

// function restaurant_go_to_navtab(id) {
//   const scrollingDiv = document.querySelector("#car-category-" + id);

//   window.scrollTo({
//     top: scrollingDiv.offsetTop,
//     behavior: "smooth",
//   });
// }

// window.addEventListener(
//   "scroll",
//   function (event) {
//     clearTimeout(isScrolling);

//     isScrolling = setTimeout(function () {
//       let active = 0;
//       for (let i = 0; i < 4; i++) {
//         const navbarButtonElem = document.querySelector(".circle-anchor" + i);

//         if (isScrolledIntoView(carCategoryElem)) {
//           carListItems.forEach((item) => {
//             item.classList.remove("circle-anchor_active");
//           });
//           document
//             .querySelector(".circle-anchor" + i)
//             .parentNode.classList.add("circle-anchor_active");
//           return;
//         }
//       }
//     }, 66);
//   },
//   false
// );

const navbarButtons = document.querySelectorAll(".circle-anchor");
const anchorWrapper = document.querySelector(".anchor_wrapper")

function isScrolledIntoView(elem) {
  let docViewTop = window.pageYOffset;
  let docViewBottom = docViewTop + window.innerHeight;

  let elemTop = elem.offsetTop;
  let elemBottom = elemTop + elem.offsetHeight;

  return elemBottom <= docViewBottom && elemTop >= docViewTop;
}

window.addEventListener("scroll", function () {
  for (let i = 0; i < 4; i++) {
    const anchorElem = document.querySelector("#anchor-" + i);

    if (isScrolledIntoView(anchorElem)) {
      navbarButtons.forEach((item) => {
        item.classList.remove("circle-anchor_active");
      });
      anchorWrapper
        .querySelector("#anchor-" + i)
        .classList.add("circle-anchor_active");
      return;
    }
  }
});
