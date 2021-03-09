<template>
  <div class="timeline-container" id="timeline-1">
    <div class="timeline-header">
      <h2 class="timeline-header__title">The House of Tudor</h2>
      <h3 class="timeline-header__subtitle">An English Royal Dynasty</h3>
    </div>
    <div class="timeline">
      <div class="timeline-item" data-text="Henry the VII">
        <div class="timeline__content">
          <img
            class="timeline__img"
            src="../assets/img/henry_vii_timeline.jpg"
          />
          <h2 class="timeline__content-title">1485</h2>
          <p class="timeline__content-desc">
            Henry VII (Welsh: Harri Tudur; 28 January 1457 – 21 April 1509) was
            the King of England and Lord of Ireland from his seizure of the
            crown on 22 August 1485 to his death. He was the first monarch of
            the House of Tudor.
          </p>
        </div>
      </div>
      <div class="timeline-item" data-text="Henry the VIII">
        <div class="timeline__content">
          <img
            class="timeline__img"
            src="../assets/img/henry_viii_timeline.jpg"
          />
          <h2 class="timeline__content-title">1509</h2>
          <p class="timeline__content-desc">
            Henry VIII (28 June 1491 – 28 January 1547) was King of England from
            1509 until his death in 1547. Henry is best known for his six
            marriages, and, in particular, his efforts to have his first
            marriage (to Catherine of Aragon) annulled.
          </p>
        </div>
      </div>
      <div class="timeline-item" data-text="Edward the VI">
        <div class="timeline__content">
          <img
            class="timeline__img"
            src="../assets/img/edward_vi_timeline.jpg"
          />
          <h2 class="timeline__content-title">1547</h2>
          <p class="timeline__content-desc">
            Edward VI (12 October 1537 – 6 July 1553) was the King of England
            and Ireland from 28 January 1547 until his death. He was crowned on
            20 February at the age of nine. Edward was the son of Henry VIII and
            Jane Seymour.
          </p>
        </div>
      </div>
      <div class="timeline-item" data-text="Lady Jane Grey">
        <div class="timeline__content">
          <img
            class="timeline__img"
            src="../assets/img/lady_jane_timeline.jpg"
          />
          <h2 class="timeline__content-title">1553</h2>
          <p class="timeline__content-desc">
            Lady Jane Grey (c.1537– 12 February 1554), also known as Lady Jane
            Dudley (after her marriage) and as the "Nine Days' Queen", was an
            English noblewoman and de facto Queen of England and Ireland from 10
            July until 19 July 1553.
          </p>
        </div>
      </div>
      <div class="timeline-item" data-text="Mary The I">
        <div class="timeline__content">
          <img class="timeline__img" src="../assets/img/mary_i_timeline.jpg" />
          <h2 class="timeline__content-title">1553</h2>
          <p class="timeline__content-desc">
            Mary I (18 February 1516 – 17 November 1558), also known as Mary
            Tudor, and as "Bloody Mary" by her Protestant opponents, was the
            queen of England from July 1553 until her death. She is best known
            for her vigorous attempt to reverse the English Reformation, which
            had begun during the reign of her father, Henry VIII.
          </p>
        </div>
      </div>
      <div class="timeline-item" data-text="Elizabeth the I">
        <div class="timeline__content">
          <img
            class="timeline__img"
            src="../assets/img/elizabeth_i_timeline.jpg"
          />
          <h2 class="timeline__content-title">1559</h2>
          <p class="timeline__content-desc">
            Elizabeth I (7 September 1533 – 24 March 1603) was Queen of England
            and Ireland from 17 November 1558 until her death on 24 March 1603.
            Sometimes called <em>the Virgin Queen</em>, <em>Gloriana</em> or
            <em>Good Queen Bess</em>, Elizabeth was the last of the five
            monarchs of the House of Tudor. Elizabeth was the daughter of Henry
            VIII and Anne Boleyn, his second wife, who was executed
            two-and-a-half years after Elizabeth's birth.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "timeline",
  data() {
    return {};
  },
  mounted() {
    (function timeline() {
      const el = document.querySelector("#timeline-1");
      let selectors = {
        id: el,
        item: document.querySelectorAll(".timeline-item"),
        activeClass: "timeline-item--active",
        img: ".timeline__img"
      };

      const firstTimeLineItem = selectors.item[0];
      // Add .timeline-item--active to first selectors.item[] item
      firstTimeLineItem.classList.add(selectors.activeClass);
      // Get first .timeline-item > img[src's] value
      const firstImgItem = firstTimeLineItem.querySelector(".timeline__img");
      const srcValueFirstItem = firstImgItem.getAttribute("src");

      // Now set the el background to first img src's value
      el.style.backgroundImage = `url(${srcValueFirstItem})`;

      const itemLength = selectors.item.length;

      window.addEventListener("scroll", function() {
        let max, min;
        let pos = window.scrollY; // Scrollbar position

        selectors.item.forEach(function(currentElement, currentIndex) {
          // Get offset from top  for min
          let elPos = currentElement.getBoundingClientRect();

          let offset = {
            top: elPos.top + window.scrollY,
            left: elPos.left + window.scrollX
          };

          min = offset.top;
          max = elPos.height + offset.top;
          // First if is check for next to last element and then transition to last element
          // Currently not working.
          if (currentIndex == itemLength - 2 && pos > min + elPos.height / 2) {
            // Remove the next to last timeline-item--active class
            Array.from(
              document.querySelectorAll(".timeline-item--active")
            ).forEach(function(activeEl) {
              activeEl.classList.remove("timeline-item--active");
            });

            // Get the last .timeline-item > img[src's] value
            // That will be set to the background-image
            const lastTimeLineItem = selectors.item[selectors.item.length - 1];
            const lastImgItem = lastTimeLineItem.querySelector(
              ".timeline__img"
            );
            const srcValue = lastImgItem.getAttribute("src");

            // Now set the el background to first img src's value
            el.style.backgroundImage = `url(${srcValue})`;
            // Set as active class
            lastTimeLineItem.classList.add(selectors.activeClass);
          } else if (pos <= max - 40 && pos >= min) {
            const currentImgItem = currentElement.querySelector(
              ".timeline__img"
            );
            const srcValue = currentImgItem.getAttribute("src");
            // Now set the el background to current selectors.item[currentIndex] img src's value
            el.style.backgroundImage = `url(${srcValue})`;

            // remove current active class
            const activeClassItem = Array.from(selectors.item);
            activeClassItem.forEach(item => {
              if (item.classList.contains(selectors.activeClass)) {
                item.classList.remove(selectors.activeClass);
              }
            });

            // Set current selectors.itemitem[currentIndex] as active class
            currentElement.classList.add(selectors.activeClass);
          }
        });
      });
    })(); // End of timeline IIFE function
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Cardo|Pathway+Gothic+One");
.timeline {
  display: flex;
  margin: 0 auto;
  flex-wrap: wrap;
  flex-direction: column;
  max-width: 700px;
  position: relative;
}
.timeline__content-title {
  font-weight: normal;
  font-size: 66px;
  margin: -10px 0 0 0;
  transition: 0.4s;
  padding: 0 10px;
  box-sizing: border-box;
  font-family: "Pathway Gothic One", sans-serif;
  color: #fff;
}
.timeline__content-desc {
  margin: 0;
  font-size: 18px;
  box-sizing: border-box;
  color: rgba(255, 255, 255, 0.7);
  font-family: Cardo;
  font-weight: normal;
  line-height: 25px;
}
.timeline:before {
  position: absolute;
  left: 50%;
  width: 2px;
  height: 100%;
  margin-left: -1px;
  content: "";
  background: rgba(255, 255, 255, 0.07);
}
@media only screen and (max-width: 767px) {
  .timeline:before {
    left: 40px;
  }
}
.timeline-item {
  padding: 40px 0;
  opacity: 0.3;
  filter: blur(2px);
  transition: 0.5s;
  box-sizing: border-box;
  width: calc(50% - 40px);
  display: flex;
  position: relative;
  transform: translateY(-80px);
}
.timeline-item:before {
  content: attr(data-text);
  letter-spacing: 3px;
  width: 100%;
  position: absolute;
  color: rgba(255, 255, 255, 0.5);
  font-size: 2.3rem;
  font-family: "Pathway Gothic One", sans-serif;
  border-left: 2px solid rgba(255, 255, 255, 0.5);
  top: 70%;
  margin-top: -5px;
  padding-left: 15px;
  opacity: 0;
  right: calc(-100% - 56px);
}
.timeline-item:nth-child(even) {
  align-self: flex-end;
}
.timeline-item:nth-child(even):before {
  right: auto;
  text-align: right;
  left: calc(-100% - 56px);
  padding-left: 0;
  border-left: none;
  border-right: 2px solid rgba(255, 255, 255, 0.5);
  padding-right: 15px;
}
.timeline-item--active {
  opacity: 1;
  transform: translateY(0);
  filter: blur(0px);
}
.timeline-item--active:before {
  top: 50%;
  transition: 0.3s all 0.2s;
  opacity: 1;
}
.timeline-item--active .timeline__content-title {
  margin: -50px 0 20px 0;
}
@media only screen and (max-width: 767px) {
  .timeline-item {
    align-self: baseline !important;
    width: 100%;
    padding: 0 30px 150px 80px;
  }
  .timeline-item:before {
    left: 10px !important;
    padding: 0 !important;
    top: 50px;
    text-align: center !important;
    width: 60px;
    border: none !important;
  }
  .timeline-item:last-child {
    padding-bottom: 40px;
  }
}
.timeline__img {
  max-width: 100%;
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.4);
}
.timeline-container {
  width: 100%;
  position: relative;
  padding: 80px 0;
  transition: 0.3s ease 0s;
  background-attachment: fixed;
  background-size: cover;
}
.timeline-container:before {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(99, 99, 99, 0.8);
  content: "";
}
.timeline-header {
  width: 100%;
  text-align: center;
  margin-bottom: 80px;
  position: relative;
}
.timeline-header__title {
  color: #fff;
  font-size: 46px;
  font-family: Cardo;
  font-weight: normal;
  margin: 0;
}
.timeline-header__subtitle {
  color: rgba(255, 255, 255, 0.5);
  font-family: "Pathway Gothic One", sans-serif;
  font-size: 26px;
  letter-spacing: 5px;
  margin: 10px 0 0 0;
  font-weight: normal;
}

.demo-footer {
  padding: 60px 0;
  text-align: center;
}
.demo-footer a {
  color: #999;
  display: inline-block;
  font-family: Cardo;
}
</style>
