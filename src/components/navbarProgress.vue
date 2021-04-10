<template>
  <nav class="henry-bio">
    <ul>
      <li><a href="#intro">Intro</a></li>
      <li>
        <a href="#accession">Accession To The Throne</a>
      </li>
      <li>
        <a href="#popularity">Loss Of Popularity</a>
      </li>
      <li><a href="#rome">The Breach With Rome</a></li>
      <li><a href="#reforms">Domestic Reforms</a></li>
      <li><a href="#decline">Physical and Mental Decline</a></li>
      <li><a href="#legacy">Legacy of Henry VIII</a></li>
    </ul>
    <svg xmlns="http://www.w3.org/2000/svg">
      <path />
    </svg>
  </nav>
</template>

<script>
export default {
  mounted() {
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
        const x = item.anchor.offsetLeft - 5,
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
          const dashArray = `1 ${pathStart} ${pathEnd -
            pathStart} ${pathLength}`;

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
  }
};
</script>

<style>
* {
  --highlight: #a87f90;
}

nav {
  position: sticky;
  left: 0;
  top: var(--body-pad-top); /* Tells nav where to stop on scroll */
  line-height: 1.5;
}

/* === Navbar and marker === */

nav ul {
  margin: 0;
  padding-left: 10px;
  list-style: none;
}

/* nav li > ul {
	padding-left: 30px;
} */

nav a {
  display: inline-block;
  color: #7f7f7f;
  text-decoration: none;
  transition: all 300ms ease-in-out;
}

nav li.visible > a {
  color: #222;
  transform: translate(15px);
}

nav svg {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
}

nav path {
  transition: all 300ms ease;
  fill: transparent;
  stroke: var(--highlight);
  stroke-width: 3px;
  stroke-dasharray: 0 0 0 1000;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style>
