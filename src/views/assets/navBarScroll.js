const navBarScroll = () => {
  // ============== Vars ========================== //
  const elementsToObserve = document.querySelectorAll("section[id]");

  //
  function scrollNavBar(observedEls) {
    const navBar = document.querySelector(".edward-bio");
    const pathEl = document.querySelector("path");

    observedEls.forEach(observedEl => {
      if (observedEl.isIntersecting) {
        // Filter out the nav observed elements //
        // Observed element gets selected when a <section> comes into view //
        if (observedEl.target.nodeName === "SECTION") {
          const idStr = observedEl.target.id;
          const navStr = document.querySelector(`[data-name=${idStr}]`);
          console.log("NavStr is ", navStr);

          const navElementTop = navStr.getBoundingClientRect();
          const pageHeight = window.innerHeight;
          console.log("Element Position: ", navElementTop);
          console.log("Page height: ", pageHeight);
          console.log("The observed id is: ", idStr);
          console.log("Element in view is: ", observedEl.target);

          // If navElementTop.top > pageHeight the navElement isnt visible //
          // We then translateY the navBar up
          /* if (navElementTop.top > pageHeight) {
            navBar.style.transform = "translateY(-200px)";
            console.log("Adjusting navBar.");
            pathEl.style.transform = "translateY(-200px)";
          } */
        }
      }
    });
  }

  // ============ Setup Observer's on all appropriate section[id]'s ======= //
  const observer = new IntersectionObserver(scrollNavBar);
  elementsToObserve.forEach(thisEl => observer.observe(thisEl));
};

export default navBarScroll;
