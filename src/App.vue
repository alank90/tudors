<template>
  <div id="app">
    <header class="main-head">
      <span class="main-head-span">The Tudors</span>
      <nav class="main-head-nav">
        <ul>
          <li><a href="">The Tudors</a></li>
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/about">About</router-link></li>
        </ul>
      </nav>
    </header>

    <main class="content">
      <h1>Tudors</h1>
      <p>Tudor Montage will be appearing here.</p>
      <router-view />
    </main>

    <footer class="main-footer">The footer</footer>
  </div>
</template>

<style>
/* Include a normalize file */
@import "https://unpkg.com/sanitize.css";
@import "./assets/css/main.css";

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
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100vh;
}

.main-head {
  display: flex;
  justify-content: flex-start;
  align-items: center;
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

.main-head {
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
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
