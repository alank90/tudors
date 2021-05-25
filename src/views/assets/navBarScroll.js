const navBarScroll = () => {
  // ============== Vars ========================== //
  const elementsToObserve = document.querySelectorAll("section[id]");
  const navBar = document.querySelector(".edward-bio");
  const navBarTop = navBar.getBoundingClientRect().top;
  let totalShiftAmount = 0;

  function scrollNavBar(observedEls) {
    console.log("navBarTop position is : ", navBarTop);
    const viewportHeight = window.innerHeight;

    observedEls.forEach(observedEl => {
      if (observedEl.isIntersecting) {
        console.log("viewport height: ", viewportHeight);
        // idStr is the <section> that has come into view //
        const idStr = observedEl.target.id;
        // navStr is the corresponding nav entry
        const navStr = document.querySelector(`[data-name=${idStr}]`);
        console.log("NavStr is ", navStr);
        const navElDimensions = navStr.getBoundingClientRect();
        console.log("navElDimensions are: ", navElDimensions);
        const sectionElPosition = observedEl.target.getBoundingClientRect();

        const navElTop = navElDimensions.top;

        let shiftAmt = navElTop;

        const sectionElTop = sectionElPosition.top;
        const sectionElBottom = sectionElPosition.bottom;
        console.log("Current Navbar Element Top Position: ", navElTop);
        console.log("The <section> element in view is: ", observedEl.target);
        console.log(
          "The top of the currently observed <section> entry is: ",
          sectionElPosition.top
        );
        console.log(
          "The bottom of the currently observed <section> entry is: ",
          sectionElPosition.bottom
        );

        // Check if the newly entered <article> section's corresponding navbar entry
        // entered the viewport from the top
        if (sectionElTop < sectionElBottom && sectionElTop > 0) {
          console.log("Scrolling Down!!!");
          if (navElTop > viewportHeight) {
            totalShiftAmount += -navElDimensions.height - 100;
            // Move the navBar up via the translateY() transform
            navBar.style.transform = `translateY(${totalShiftAmount}px)`;
            console.log("nav element is up totalShiftAmt : ", totalShiftAmount);
          }
        } else if (
          sectionElPosition.top < 0 &&
          navStr.dataset.name !== "intro"
        ) {
          shiftAmt = `${navElTop + 15}px`;
          // Move the navBar down via the translateY() transform
          /* navBar.style.transform = `translateY(${shiftAmt})`; */
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
