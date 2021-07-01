<template>
  <div class="masonry">
    <div class="masonry-brick henry_vii">
      <div
        @mouseover="toggleMasonryTitle"
        @mouseleave="toggleMasonryTitle"
        class="masonry-content"
      >
        <router-link to="/Henry_VII">
          <img
            src="../assets/img/henry_vii.jpg"
            title="Click to read more..."
            alt="Picture of Henry VII"
            class="masonry-content"
          />
        </router-link>
        <h3 class="masonry-title">Henry VII</h3>
        <p class="masonry-description">
          Henry VII (Welsh: Harri Tudur; 28 January 1457 – 21 April 1509) was
          the first monarch of the House of Tudor.
        </p>
      </div>
    </div>
    <!-- <router-view /> -->
    <div class="masonry-brick henry_viii">
      <div
        @mouseover="toggleMasonryTitle"
        @mouseleave="toggleMasonryTitle"
        class="masonry-content"
      >
        <router-link to="/Henry_VIII">
          <img
            src="../assets/img/henry_viii.png"
            title="Click to read more..."
            alt="Picture of Henry VIII"
          />
        </router-link>
        <h3 class="masonry-title">Henry VIII</h3>
        <p class="masonry-description">
          Henry VIII (28 June 1491 – 28 January 1547).
        </p>
      </div>
    </div>
    <div class="masonry-brick ed_vi">
      <div
        @mouseover="toggleMasonryTitle"
        @mouseleave="toggleMasonryTitle"
        class="masonry-content"
      >
        <router-link to="/edward_vi">
          <img
            src="../assets/img/edward_vi.png"
            title="Click to read more..."
            alt="Picture of Edward VI"
          />
        </router-link>
        <h3 class="masonry-title">Edward VI</h3>
        <p class="masonry-description">
          Edward VI (12 October 1537 – 6 July 1553).
        </p>
      </div>
    </div>
    <div class="masonry-brick jane_grey">
      <div
        @mouseover="toggleMasonryTitle"
        @mouseleave="toggleMasonryTitle"
        class="masonry-content"
      >
        <router-link to="/Lady_Jane_Grey">
          <img
            src="../assets/img/lady_jane_grey.png"
            title="Click to read more..."
            alt="Picture of Lady Jane Grey"
          />
        </router-link>
        <h3 class="masonry-title">Lady Jane Grey</h3>
        <p class="masonry-description">
          Lady Jane Grey (c.1537 – 12 February 1554), also known as Lady Jane
          Dudley (after her marriage) and as the "Nine Days' Queen", was an
          English noblewoman and de facto Queen of England and Ireland from 10
          July until 19 July 1553.
        </p>
      </div>
    </div>
    <div class="masonry-brick mary_i">
      <div
        @mouseover="toggleMasonryTitle"
        @mouseleave="toggleMasonryTitle"
        class="masonry-content"
      >
        <router-link to="/Mary_I">
          <img
            src="../assets/img/mary_i.png"
            title="Click to read more..."
            alt="Picture of Mary I"
          />
        </router-link>
        <h3 class="masonry-title">Mary I</h3>
        <p class="masonry-description">
          Mary I (18 February 1516 – 17 November 1558), also known as Mary
          Tudor, and as "Bloody Mary" by her Protestant opponents.
        </p>
      </div>
    </div>
    <div class="masonry-brick eliz_i">
      <div
        @mouseover="toggleMasonryTitle"
        @mouseleave="toggleMasonryTitle"
        class="masonry-content"
      >
        <router-link to="Elizabeth_I">
          <img
            src="../assets/img/elizabeth_i.png"
            title="Click to read more..."
            alt="Picture of Elizabeth I"
          />
        </router-link>
        <h3 class="masonry-title">Elizabeth I</h3>
        <p class="masonry-description">
          Elizabeth I (7 September 1533 – 24 March 1603).
        </p>
      </div>
    </div>
    <div class="masonry-brick armour">
      <div class="masonry-content">
        <img src="../assets/img/armour.png" alt="Picture of Armoured Knight" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "masonry",
  props: {
    msg: String
  },
  methods: {
    toggleMasonryTitle: function(event) {
      const el = event.currentTarget;
      const masonryTitleElement = el.firstChild.nextSibling;
      const masonryDesriptionElement = el.lastChild;
      const eventType = event.type;
      if (eventType === "mouseover") {
        masonryTitleElement.style.opacity = 1;
        masonryDesriptionElement.style.maxHeight = "500px";
        masonryDesriptionElement.style.overflow = "visible";
      }

      if (eventType === "mouseleave") {
        masonryTitleElement.style.opacity = 0;
        masonryDesriptionElement.style.maxHeight = "0";
        masonryDesriptionElement.style.overflow = "hidden";
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* Masonry CSS */
.masonry {
  display: grid;
  grid-gap: 1em; /* [1] Add some gap between rows and columns */
  grid-template-areas:
    "one   two    three"
    "four  five    six"
    "....  eight   ...";
  grid-template-columns: repeat(
    3,
    minmax(200px, 1fr)
  ); /* [2] Make columns adjust according to the available viewport */
}
.henry_vii {
  grid-area: one;
}
.henry_viii {
  grid-area: two;
}
.ed_vi {
  grid-area: three;
}
.mary_i {
  grid-area: four;
}
.armour {
  grid-area: five;
}
.lady_grey {
  grid-area: six;
}
.eliz_i {
  grid-area: eight;
}

.masonry-brick {
  color: #2f3640;
  display: flex;
  justify-content: space-around;
  align-items: center;
  opacity: 0.75;
  transition: opacity 0.25s ease-in-out;
}

.masonry-brick:hover {
  opacity: 1;
}

.masonry-title,
.masonry-description {
  margin: 0;
}

.masonry-title {
  font-weight: 700;
  position: absolute;
  opacity: 0;
  top: 150px;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  font-size: 1.6rem;
  max-width: 100%; /* Need a specific value to work */
  color: #f8f5f1;
  padding: 1rem 1.5rem;
  transition: opacity 0.4s ease-in;
}

.masonry-description {
  max-height: 0;
  overflow: hidden;
  font-family: var(--font-p);
  font-size: var(--font-size);
  border-top: 1px solid #eee;
  color: rgb(14, 13, 13);
  transition: all 0.5s ease-in;
}

.masonry-content {
  position: relative;
}

img {
  max-width: 100%;
  vertical-align: middle;
  border-radius: 10px;
}

/* Media Queries */
@media screen and (max-width: 600px) {
  .masonry {
    display: block;
  }
}
</style>
