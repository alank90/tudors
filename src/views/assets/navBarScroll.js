const navBarScroll = () => {
  // ============== Vars ========================== //
  const elementsToObserve = document.querySelectorAll("section[id]");

  //
  function scrollNavBar(observedEls) {
    const navBar = document.querySelector(".edward-bio");
    /* const scrollPageHeight = window.innerHeight + window.scrollY; //Page height w/scrolling
    console.log("scrollPage Height", scrollPageHeight); */
    const viewportHeight = window.innerHeight;

    observedEls.forEach(observedEl => {
      let shiftAmt = "";
      if (observedEl.isIntersecting) {
        console.log("New Element to observe: ");
        console.log("viewport height: ", viewportHeight);
        // idStr is the <section> that has come into view //
        const idStr = observedEl.target.id;
        // navStr is the corresponding nav entry
        const navStr = document.querySelector(`[data-name=${idStr}]`);
        console.log("NavStr is ", navStr);
        const navElPosition = navStr.getBoundingClientRect();
        const sectionElPosition = observedEl.target.getBoundingClientRect();
        console.log("Navbar Element Top Position: ", navElPosition);
        console.log("The <section> element in view is: ", observedEl.target);
        console.log("<section> element position is: ", sectionElPosition);

        const navElTop = navElPosition.top;
        console.log(
          "The top of the currently observed <section> entry is: ",
          sectionElPosition.top
        );
        console.log(
          "The bottom of the currently observed <section> entry is: ",
          sectionElPosition.bottom
        );

        // Check if the newly entered <article> section's corresponding navbar entry
        // is out of viewport's range
        if (navElTop > viewportHeight) {
          shiftAmt = `${navElTop + 15}px`;
          // Move the navBar up via the translateY() transform
          navBar.style.transform = `translateY(-${shiftAmt})`;
          console.log("nav element is up shiftAmt : ", shiftAmt);
        } else if (
          sectionElPosition.top < 0 &&
          navStr.dataset.name !== "intro"
        ) {
          shiftAmt = `${navElTop + 15}px`;
          // Move the navBar down via the translateY() transform
          navBar.style.transform = `translateY(${shiftAmt})`;
          console.log("nav element is down shift Amt : ", shiftAmt);
        }
      }
    });
  }

  // ============ Setup Observer's on all appropriate section[id]'s ======= //
  const observer = new IntersectionObserver(scrollNavBar);
  elementsToObserve.forEach(thisEl => observer.observe(thisEl));
};

export default navBarScroll;
