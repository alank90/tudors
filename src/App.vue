<template>
  <div id="app">
    <div class="wrapper">
      <header class="main-head">The header</header>
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

/* Grid Definition */
.wrapper {
  display: grid;
  gap: 20px;
  grid-template-areas:
    "header"
    "nav"
    "content"
    "sidebar"
    "ad"
    "footer";
}

.main-head {
  grid-area: header;
  border: 2px solid red;
}
.content {
  grid-area: content;
  border: 2px solid purple;
}
.main-nav {
  grid-area: nav;
  border: 2px solid yellow;
}
.side {
  grid-area: sidebar;
  border: 2px solid yellowgreen;
}
.ad {
  grid-area: ad;
  border: 2px solid steelblue;
}
.main-footer {
  grid-area: footer;
  border: 2px solid brown;
}

/* Grid Media Queries for larger screens */
@media (min-width: 500px) {
  .wrapper {
    grid-template-columns: 1fr 3fr;
    grid-template-areas:
      "header  header"
      "nav     nav"
      "sidebar content"
      "ad      footer";
  }
  nav ul {
    display: flex;
    justify-content: space-between;
  }
}

@media (min-width: 700px) {
  .wrapper {
    grid-template-columns: 1fr 4fr 1fr;
    grid-template-areas:
      "header header  header"
      "nav    content sidebar"
      "nav    content ad"
      "footer footer  footer";
  }
  nav ul {
    flex-direction: row;
    list-style: none;
  }
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
