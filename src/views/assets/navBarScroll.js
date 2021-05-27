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
        console.log("Current NavStr is ", navStr);
        const navElDimensions = navStr.getBoundingClientRect();
        const sectionElPosition = observedEl.target.getBoundingClientRect();
        const navElTop = navElDimensions.top;
        const sectionElTop = sectionElPosition.top;
        const sectionElBottom = sectionElPosition.bottom;

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
          // Check if observedEl.target corresponding navbar entry is
          // visible. If not let's TranslateY() the navbar up
          if (navElTop > viewportHeight) {
            totalShiftAmount += -navElDimensions.height - 100;
            // Move the navBar up via the translateY() transform
            navBar.style.transform = `translateY(${totalShiftAmount}px)`;
            console.log(
              `Nav entry ${observedEl.target.id} is not in view. Let's shift navbar up ${totalShiftAmount}`
            );
          }
        } else if (
          sectionElPosition.top < 0 &&
          navStr.dataset.name !== "intro"
        ) {
          console.log("Srolling up!!!");

          // Check if observedEl.target corresponding navbar entry is
          // visible. If not let's TranslateY() the navbar down
          console.log(
            `Lets check if current navElement ${navElTop} is in viewport (less then 50px)`
          );
          if (navElTop < 50) {
            // Move the navBar down via the translateY() transform
            totalShiftAmount += navElDimensions.height + 100;
            navBar.style.transform = `translateY(${totalShiftAmount}px)`;
            console.log(
              `Nav entry ${observedEl.target.id} is not in view. Let's shift navbar up ${totalShiftAmount}`
            );
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
        console.log(`The totalShiftAmt is now: ${totalShiftAmount}`);
      }
    });
  }

  // ============ Setup Observer's on all appropriate section[id]'s ======= //
  const observer = new IntersectionObserver(scrollNavBar);
  elementsToObserve.forEach(thisEl => observer.observe(thisEl));
};

export default navBarScroll;
