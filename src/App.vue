<template>
  <div id="app">
    <div class="wrapper">
      <header class="main-head">The Tudors</header>
      <nav class="main-nav">
        <ul>
          <li><a href="">The Tudors</a></li>
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/about">About</router-link></li>
        </ul>
      </nav>
      <main class="content">
        <h1>Tudors</h1>
        <p>Tudor Montage will be appearing here.</p>
        <router-view />
      </main>

      <footer class="main-footer">The footer</footer>
    </div>
  </div>
</template>

<style>
/* Include a normalize file */
@import "https://unpkg.com/sanitize.css";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

li {
  display: inline-block;
}

/* ========== Grid Definition ================ */
.wrapper {
  display: grid;
  grid-template-columns: repeat(12, [col-start] 1fr);
  gap: 20px;
}

/* Default Mobile screen Layout */
.wrapper > * {
  grid-column: col-start / span 12;
}

/* Grid Media Queries */
@media (min-width: 500px) {
  .side {
    grid-column: col-start / span 3;
    grid-row: 3;
  }
  .content,
  .main-footer {
    grid-column: col-start 4 / span 9;
  }
  nav ul {
    display: flex;
    justify-content: space-between;
  }
}

@media (min-width: 700px) {
  .main-nav {
    grid-column: col-start / span 12;
    grid-row: 2 / 2;
  }
  .content {
    grid-column: col-start 2 / span 10;
    grid-row: 3 / 4;
  }

  .main-footer {
    grid-column: col-start / span 12;
  }
  nav ul {
    flex-direction: row;
  }
}

/* =================== End Grid Definition ================= */

.main-head {
  border: 2px solid red;
}
.content {
  border: 2px solid purple;
}
.main-nav {
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
