<template>
  <div id="app">
    <header class="main-head">
      <span class="main-head-span">The Tudors</span>
      <nav class="main-head-nav">
        <ul>
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

    <footer class="main-footer">The footer</footer>
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
/* ========== Grid Definition ================ */
#app {
  display: grid;
  grid-template-columns: repeat(12, [col-start] 1fr);
  grid-template-rows: auto 1fr auto;
}

/* Default Mobile screen Layout */
#app > * {
  grid-column: col-start / span 12;
}

/* Grid Media Queries */
@media (min-width: 500px) {
  main,
  .main-footer {
    grid-column: col-start 4 / span 8;
  }
}

@media (min-width: 700px) {
  #app > main {
    grid-column: col-start 2 / span 10;
    grid-row: 2 / 3;
    padding: 15px 5px 10px 5px;
  }

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
  text-align: center;
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
  flex-basis: 20%;
  font-family: "Cinzel Decorative", Helvetica;
  color: var(--color-text);
}

.main-head-nav {
  flex-basis: 40%;
  margin-left: auto; /* this forces nav-menu to far right */
}

.main-head li {
  display: inline-block;
  padding: 0 15px;
}

.main-footer {
  font-size: 2.5rem;
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
    45deg,
    rgba(233, 77, 64, 1) 0%,
    rgba(255, 190, 160, 1) 100%
  );
  mix-blend-mode: lighten;
  color: #fff;
  border-radius: 5px;
  padding: 10px;
  cursor: none;
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

/* End Link hover effect */
</style>
