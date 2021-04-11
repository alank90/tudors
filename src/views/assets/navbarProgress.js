const navbarProgress = () => {
  // === Vars ===
  const elementsToObserve = document.querySelectorAll("section[id]"),
    visibleClass = "visible",
    nav = document.querySelector("nav.henry-bio"),
    navPath = nav.querySelector("svg path"),
    navListItems = [...nav.querySelectorAll("li")],
    navItems = navListItems
      .map(listItem => {
        const anchor = listItem.querySelector("a"),
          targetID = anchor && anchor.getAttribute("href").slice(1),
          target = document.getElementById(targetID);

        return { listItem, anchor, target };
      })
      .filter(item => item.target);

  // ============= Functions ===================== //
  function drawPath() {
    let path = [];
    let pathIndent;

    navItems.forEach((item, i) => {
      const x = item.anchor.offsetLeft + 3, // Note- the number 3 is a magic
        // number. It will vary depending on container it is used in. If you are
        // not seeing the progress bar it may be bacause x coordinate is off. The x
        // coordinate should be equal to 5. If it is not adust the magic number 3 accordingly.
        y = item.anchor.offsetTop,
        height = item.anchor.offsetHeight;

      if (i === 0) {
        path.push("M", x, y, "L", x, y + height);
        item.pathStart = 0;
      } else {
        if (pathIndent !== x) {
          path.push("L", x, y);
        }

        path.push("L", x, y);
        navPath.setAttribute("d", path.join(" "));
        item.pathStart = navPath.getTotalLength() || 0;
        path.push("L", x, y + height);
      } // end else

      pathIndent = x;
      navPath.setAttribute("d", path.join(" "));
      item.pathEnd = navPath.getTotalLength();
    });
  } // end function drawPath()

  function syncPath() {
    const someElsAreVisible = () =>
        nav.querySelectorAll(`.${visibleClass}`).length > 0,
      thisElIsVisible = el => el.classList.contains(visibleClass),
      pathLength = navPath.getTotalLength();

    let pathStart = pathLength,
      pathEnd = 0,
      lastPathStart,
      lastPathEnd;

    navItems.forEach(item => {
      if (thisElIsVisible(item.listItem)) {
        pathStart = Math.min(item.pathStart, pathStart);
        pathEnd = Math.max(item.pathEnd, pathEnd);
      }
    });

    if (someElsAreVisible() && pathStart < pathEnd) {
      if (pathStart !== lastPathStart || pathEnd !== lastPathEnd) {
        const dashArray = `1 ${pathStart} ${pathEnd - pathStart} ${pathLength}`;

        navPath.style.setProperty("stroke-dashoffset", "1");
        navPath.style.setProperty("stroke-dasharray", dashArray);
        navPath.style.setProperty("opacity", 1);
      }
    } else {
      navPath.style.setProperty("opacity", 0);
    }

    lastPathStart = pathStart;
    lastPathEnd = pathEnd;
  } // end the syncpath() Function

  function markVisibleSection(observedEls) {
    observedEls.forEach(observedEl => {
      const id = observedEl.target.getAttribute("id"),
        anchor = document.querySelector(`nav li a[href="#${id}"]`);

      if (!anchor) {
        return false;
      }

      const listItem = anchor.parentElement;

      if (observedEl.isIntersecting) {
        listItem.classList.add(visibleClass);
      } else {
        listItem.classList.remove(visibleClass);
      }

      syncPath();
    });
  } // end markVisibleSection() Function

  // =============== Draw Path and observe ========== //

  drawPath();

  const observer = new IntersectionObserver(markVisibleSection);
  elementsToObserve.forEach(thisEl => observer.observe(thisEl));
};

export default navbarProgress;
