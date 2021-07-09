<template>
  <div id="app">
    <header class="main-head">
      <span class="main-head-span">The Tudors</span>
      <nav class="main-head-nav" id="ham-nav">
        <!-- The Hamburger -->
        <label for="hamburger">&#9776;</label>
        <input type="checkbox" id="hamburger" />
        <!-- Menu Items -->
        <ul id="ham-items">
          <li>
            <router-link class="link link--elara" to="/"
              ><span>Home</span></router-link
            >
          </li>
          <li>
            <router-link class="link link--elara" to="timeline"
              ><span>Timeline</span></router-link
            >
          </li>
          <li>
            <router-link class="link link--elara" to="/about"
              ><span>About</span></router-link
            >
          </li>
        </ul>
      </nav>
    </header>

    <main class="content">
      <router-view />
    </main>

    <footer class="main-footer">
      <a href="https://www.britannica.com/topic/House-of-Tudor" target="_blank"
        >House of Tudor</a
      ><a href="https://www.englishmonarchs.co.uk/tudor_21.htm" target="_blank"
        >Tudor Kings and Queens</a
      ><a href="https://www.britroyals.com/tudortree.asp" target="_blank"
        >Tudor Family Tree</a
      >
    </footer>
  </div>
</template>

<style>
/* Include a normalize file */
@import "https://unpkg.com/sanitize.css";
@import "./assets/css/main.css";

/* Import  fonts */
@import url("https://fonts.googleapis.com/css2?family=Cinzel+Decorative:wght@700&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Raleway:wght@500&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@500&display=swap");
@font-face {
  font-family: Fleur;
  src: local("Fleur"), url(./assets/fonts/FleurCornerCaps.ttf);
}

/* ========== Grid Definition ================ */
#app {
  display: grid;
  grid-template-columns: repeat(12, [col-start] 1fr);
  grid-template-rows: auto 1fr auto;
  width: 100vw;
}

/* Default Mobile screen Layout */
#app > * {
  grid-column: col-start / span 12;
}

/* Grid Media Queries */
@media (min-width: 500px) {
  main,
  .main-head,
  .main-footer {
    grid-column: col-start 4 / span 8;
  }
}

@media (min-width: 700px) {
  main {
    grid-column: col-start 2 / span 10;
    grid-row: 2 / 3;
    padding: 15px 5px 10px 5px;
  }

  .main-head,
  .main-footer {
    grid-column: col-start / span 12;
  }
}

/* =================== End Grid Definition ================= */
body {
  margin: 0; /* prevents scrollbars */
}

#app {
  font-family: var(--default-font);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: var(--color-text);
  height: 100vh;
  letter-spacing: var(--letter-spacing);
  line-height: var(--line-height);
}

.main-head {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: rgb(var(--nav-text-color));
  font-size: var(--nav-font-size);
  background: var(--nav-bg-gradient);
}

.main-head-span {
  font-family: "Cinzel Decorative", Helvetica;
  color: var(--color-text);
}

.main-head-nav {
  margin-left: auto; /* this forces nav-menu to far right */
}

.main-head li {
  display: inline-block;
  padding: 0 15px;
}

.main-footer {
  display: flex;
  font-size: 1.5rem;
  background: var(--footer-gradient);
  justify-content: space-around;
}

.main-footer > a {
  text-decoration: none;
  color: var(--color-text);
  -webkit-text-stroke: 0.5px rgb(231, 238, 167);
}

li a {
  font-size: var(--nav-font-size);
  color: rgb(var(--nav-text-color));
  text-decoration: none;
}
li a:hover {
  color: rgba(var(--nav-text-color), 0.5);
}

li a.router-link-exact-active {
  background: linear-gradient(
    90deg,
    rgb(236, 186, 4) 0%,
    rgb(231, 135, 5) 50%,
    rgb(236, 186, 4) 100%
  );
  mix-blend-mode: lighten;
  color: #fff;
  padding: 10px;
  cursor: none;
}

.link span {
  background: #4c8b20;
  background: linear-gradient(to right, #4c8b20 0%, #db1313 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

/* Link Hover effect */
.link {
  cursor: pointer;
  font-size: 18px;
  position: relative;
  white-space: nowrap;
}

.link::before,
.link::after {
  position: absolute;
  width: 100%;
  height: 1px;
  background: currentColor;
  top: 100%;
  left: 0;
  pointer-events: none;
}

.link::before {
  content: "";
  /* show by default */
}
.link--elara {
  font-size: 1.375rem;
}

.link--elara::before {
  transform-origin: 50% 100%;
  transition: clip-path 0.3s, transform 0.3s cubic-bezier(0.2, 1, 0.8, 1);
  clip-path: polygon(
    0% 0%,
    0% 100%,
    0 100%,
    0 0,
    100% 0,
    100% 100%,
    0 100%,
    0 100%,
    100% 100%,
    100% 0%
  );
}

.link--elara:hover::before {
  transform: translate3d(0, 2px, 0) scale3d(1.08, 3, 1);
  clip-path: polygon(
    0% 0%,
    0% 100%,
    50% 100%,
    50% 0,
    50% 0,
    50% 100%,
    50% 100%,
    0 100%,
    100% 100%,
    100% 0%
  );
}

.link--elara span {
  display: inline-block;
  transition: transform 0.3s cubic-bezier(0.2, 1, 0.8, 1);
}

.link--elara:hover span {
  transform: translate3d(0, -2px, 0);
}

/* ==== End Link hover effect ======= */

a[href="/TheSixWives"] {
  text-decoration: none;
}

/* ==== <a> tag hover effect ======== */
a[href^="http"]:not(footer > a),
a[href^="/"]:not(.link):not(footer > a):not([href="/TheSixWives"]) {
  background: linear-gradient(90deg, rgba(217, 7, 7, 1), rgba(248, 229, 143, 1))
    bottom left/0% 3px no-repeat;
  padding-bottom: 3px;
  line-height: 1.4em;
  transition: 0.25s linear;
  text-decoration: none;
}

a[href^="http"]:not(footer > a) span,
a[href^="/"]:not(.link):not([href="/TheSixWives"]) span {
  background: #da1207;
  background: linear-gradient(to right, #da1207 0%, #e89705 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

a[href^="http"]:not(footer > a):hover,
a[href^="/"]:not(.link):not([href="/TheSixWives"]):hover {
  background-size: 100% 3px;
}
/* ======== End <a> tag hover effects ===== */

/* ======= Hamburger Menu CSS ============= */
/* Hide Hamburger */
#ham-nav label,
#hamburger {
  display: none;
}
/* On Small Screens */
@media screen and (max-width: 768px) {
  /* Break into vertical menu */
  #ham-items li {
    display: block;
    border-top: 1px solid #333;
    padding: 5px;
    margin: 3px;
  }
  /* Show hamburger Icon */
  #ham-nav label {
    display: inline-block;
    color: white;
    background: #da1507;
    font-style: normal;
    font-style: 1.2em;
    margin-left: 50%;
    padding: 10px;
  }

  .main-head-nav {
    flex: 0 1 auto;
  }

  /* Toggle Show/Hide Menu */
  #ham-items {
    visibility: hidden;
    opacity: 0;
    max-height: 0;
    transition: opacity 0.8s ease-out, max-height 0.8s;
  }

  #ham-nav input:checked ~ #ham-items {
    visibility: visible;
    opacity: 1;
    max-height: 200px;
  }
}

/* ======= End Hamburger CSS ============== */
</style>
