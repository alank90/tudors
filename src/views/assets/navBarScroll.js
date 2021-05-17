const navBarScroll = () => {
  // ============== Vars ========================== //
  const elementsToObserve = document.querySelectorAll("section[id]");

  //
  function scrollNavBar(observedEls) {
    const navBar = document.querySelector(".edward-bio");
    const scrollPageHeight = window.innerHeight + window.scrollY; //Page height w/scrolling
    console.log("scrollPage Height", scrollPageHeight);
    const viewportHeight = window.innerHeight;

    observedEls.forEach(observedEl => {
      if (observedEl.isIntersecting) {
        console.log("New Element to observe: ");
        // idStr is the <section> that has come into view //
        const idStr = observedEl.target.id;
        // navStr is the corresponding nav entry
        const navStr = document.querySelector(`[data-name=${idStr}]`);
        console.log("NavStr is ", navStr);
        const navStrPosition = navStr.getBoundingClientRect();
        console.log("Navbar Element Position: ", navStrPosition);
        console.log("viewport height: ", viewportHeight);
        console.log(
          "The <article> section element in view is: ",
          observedEl.target
        );
        const navStrTop = navStrPosition.top;
        console.log(
          "The top of the currently observed nav entry is: ",
          navStrTop
        );

        // Check if the newly entered <article> section's corresponding navbar entry
        // is out of viewport's range
        if (navStrTop > viewportHeight) {
          const shiftAmt = `${navStrTop + 125}px`;
          // Move the navBar up via the translateY() transform
          navBar.style.transform = `translateY(-${shiftAmt})`;
          console.log("shiftAmt is : ", shiftAmt);
        }
      }
    });
  }

  // ============ Setup Observer's on all appropriate section[id]'s ======= //
  const observer = new IntersectionObserver(scrollNavBar);
  elementsToObserve.forEach(thisEl => observer.observe(thisEl));
};

export default navBarScroll;
