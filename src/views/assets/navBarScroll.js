const navBarScroll = () => {
  // ============== Vars ========================== //
  const elementsToObserve = document.querySelectorAll("section[id]");
  const navBar = document.querySelector(".edward-bio");

  let totalShiftAmount = 0;

  function scrollNavBar(observedEls) {
    const viewportHeight = window.innerHeight;

    observedEls.forEach(observedEl => {
      if (observedEl.isIntersecting) {
        // ==== Vars ================= //
        // idStr is the <section> that has come into view //
        const idStr = observedEl.target.id;
        // navStr is the corresponding nav entry
        const navStr = document.querySelector(`[data-name=${idStr}]`);
        const navElDimensions = navStr.getBoundingClientRect();
        const sectionElPosition = observedEl.target.getBoundingClientRect();
        const navElTop = navElDimensions.top;
        const sectionElTop = sectionElPosition.top;
        const sectionElBottom = sectionElPosition.bottom;

        // Check if the newly entered <article> section's corresponding navbar entry
        // entered the viewport from the top
        if (sectionElTop < sectionElBottom && sectionElTop > 0) {
          // Check if observedEl.target corresponding navbar entry is
          // visible. If not let's TranslateY() the navbar up
          if (navElTop > viewportHeight) {
            totalShiftAmount += -navElDimensions.height - 100;
            // Move the navBar up via the translateY() transform
            navBar.style.transform = `translateY(${totalShiftAmount}px)`;
          }
        } else if (
          sectionElPosition.top < 0 &&
          navStr.dataset.name !== "intro"
        ) {
          // Check if observedEl.target corresponding navbar entry is
          // visible. If not let's TranslateY() the navbar down

          if (navElTop < 50) {
            // Move the navBar down via the translateY() transform
            totalShiftAmount += navElDimensions.height + 100;
            navBar.style.transform = `translateY(${totalShiftAmount}px)`;
          }
        } else {
          // get the first nav el and reset the navbar to original
          // position if it is and totalShiftAmt is not zero(there has been scrolling)
          const firstNavEl = document.querySelector(
            ".component-container ul > li:first-child"
          );

          if (firstNavEl.dataset.name === "intro" && totalShiftAmount !== 0) {
            console.log(`Back at top, totalShiftAmt is ${totalShiftAmount}`);
            // Return navbar to starting position and zero out totalShiftAmt
            totalShiftAmount = 0;
            navBar.style.transform = `translateY(${totalShiftAmount}px)`;
          }
        }
      }
    });
  }

  // ============ Setup Observer's on all appropriate section[id]'s ======= //
  const observer = new IntersectionObserver(scrollNavBar);
  elementsToObserve.forEach(thisEl => observer.observe(thisEl));
};

export default navBarScroll;
