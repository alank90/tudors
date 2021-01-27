<template>
  <div id="app">
    <div class="wrapper">
      <header class="main-head">Led Zeppelin</header>
      <nav class="main-nav">
        <ul>
          <li><a href="">Led Zeppelin</a></li>
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/about">About</router-link></li>
        </ul>
      </nav>
      <article class="content">
        <h1>Main article area</h1>
        <p>Led zeppelin Montage will be appearing here.</p>
        <router-view />
      </article>
      <aside class="side">Sidebar</aside>
      <div class="ad">Advertising</div>
      <footer class="main-footer">The footer</footer>
    </div>
  </div>
</template>

<style>
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
  .ad {
    grid-column: col-start / span 3;
    grid-row: 4;
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
    grid-row: 2 / 4;
  }
  .content {
    grid-column: col-start 3 / span 8;
    grid-row: 2 / 4;
  }
  .side {
    grid-column: col-start 11 / span 2;
    grid-row: 2;
  }
  .ad {
    grid-column: col-start 11 / span 2;
    grid-row: 3;
  }
  .main-footer {
    grid-column: col-start / span 12;
  }
  nav ul {
    flex-direction: column;
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
