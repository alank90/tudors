<template>
  <div id="app">
    <header class="main-head">
      <span class="main-head-span">The Tudors</span>
      <nav class="main-head-nav">
        <ul>
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="timeline">Timeline</router-link></li>
          <li><router-link to="/about">About</router-link></li>
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

/* ========== Global CSS Variables =============================== */
:root {
  --default-font: "Noto Sans", sans-serif;
  --font-p: "Raleway", sans-serif;
  --font-size: 18px;
  --line-height: 1.5;
  --letter-spacing: 2px;
  --nav-text-color: 217, 7, 7;
  --nav-font-size: 1.4rem;
}

body {
  margin: 0; /* prevents scrollbars */
}

#app {
  font-family: var(--default-font);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
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
  background-color: #e7e7e8;
}

.main-head-span {
  flex-basis: 20%;
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
  background-color: black;
  color: #fff;
  border-radius: 5px;
  padding: 10px;
  cursor: not-allowed;
}

/* .main-head {
  border: 2px solid red;
}
.content {
  border: 2px solid purple;
}
.main-head-nav {
  border: 2px solid yellow;
}
.side {
  border: 2px solid yellowgreen;
}
.ad {
  border: 2px solid steelblue;
}
.main-footer {
  border: 2px solid brown;
} */
</style>
