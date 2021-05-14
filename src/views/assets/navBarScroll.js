const navBarScroll = () => {
  // ============== Vars ========================== //
  const elementsToObserve = document.querySelectorAll(
    "section[id], nav:not(.main-head-nav) > ul > li"
  );

  //
  function scrollNavBar(observedEls) {
    observedEls.forEach(observedEl => {
      if (observedEl.isIntersecting) {
        // Filter out the nav observed elements //
        // Observed element gets selected when a <section> comes into view //
        if (observedEl.target.nodeName === "SECTION") {
          const idStr = observedEl.target.id;
          console.log("The observed id is: ", idStr);
          console.log("Element in view is: ", observedEl.target);
        }
      }
    });
  }

  // ============ Setup Observer's on all appropriate section[id]'s ======= //
  const observer = new IntersectionObserver(scrollNavBar);
  elementsToObserve.forEach(thisEl => observer.observe(thisEl));
};

export default navBarScroll;
