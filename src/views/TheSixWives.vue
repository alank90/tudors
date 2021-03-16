<template>
  <div class="container">
    <h1>The Six Wives of Henry the VIII</h1>

    <div class="figure-container">
      <figure>
        <img
          src="../assets/img/TheWives/Catherine-of-Aragon.jpg"
          alt="Catherine of Aragon"
        />
        <figcaption>Catherine of Aragon (m. 1509 - 1533 Annulled)</figcaption>
      </figure>
      <figure>
        <img src="../assets/img/TheWives/Anne-Boleyn.jpg" alt="Anne Boleyn" />
        <figcaption>Anne Boleyn (m. 1533 - 1536 Executed)</figcaption>
      </figure>
      <figure>
        <img src="../assets/img/TheWives/Jane-Seymour.jpg" alt="Jane Seymour" />
        <figcaption>Jane Seymour (m. 1536 - 1537 Died)</figcaption>
      </figure>
      <figure>
        <img
          src="../assets/img/TheWives/Anne-of-Cleves.jpg"
          alt="Anne of Cleves"
        />
        <figcaption>Anne of Cleves (m. 1540 Jan. - July Annulled)</figcaption>
      </figure>
      <figure>
        <img
          src="../assets/img/TheWives/Catherine-Howard.jpg"
          alt="Catherine Howard"
        />
        <figcaption>Catherine Howard (m. 1540 - 1542 Executed)</figcaption>
      </figure>
      <figure>
        <img
          src="../assets/img/TheWives/Catherine-Parr.jpg"
          alt="Catherine Parr"
        />
        <figcaption>Catherine Parr (m. 1543 - 1547 Widowed)</figcaption>
      </figure>
      <figure>
        <img src="../assets/img/henry_viii.png" alt="Henry th VIII" />
        <figcaption>Henry VIII</figcaption>
      </figure>
    </div>
  </div>
</template>

<style scoped>
h1 {
  font-family: var(--font-cinzel);
  font-size: 2.3rem;
}

.figure-container {
  position: relative;
  width: 800px;
  height: 800px;
  border-radius: 50%;
  padding: 0;
  margin: 140px auto 160px;
  border: solid 5px #e94d4d;
}

figure {
  position: absolute;
  width: 100px;
  top: 50%;
  left: 50%;
}
figcaption {
  font-family: var(--font-p);
  width: 200%;
  text-align: left;
  font-weight: 575;
}
img {
  width: 100%;
  border-radius: 5px;
  transition: all 0.5s ease-in;
}
.figure-container > :not(*:nth-last-of-type(1)) img:hover {
  opacity: 85%;
  cursor: pointer;
  transform: scale(1.2);
}

.figure-container > *:nth-of-type(1) {
  transform: translate(-50%, -50%) rotate(0deg) translate(0, -440px)
    rotate(0deg);
}
.figure-container > *:nth-of-type(2) {
  transform: translate(-50%, -50%) rotate(60deg) translate(0, -440px)
    rotate(-60deg);
}
.figure-container > *:nth-of-type(3) {
  transform: translate(-50%, -50%) rotate(120deg) translate(0, -440px)
    rotate(-120deg);
}
.figure-container > *:nth-of-type(4) {
  transform: translate(-50%, -50%) rotate(180deg) translate(0, -440px)
    rotate(-180deg);
}
.figure-container > *:nth-of-type(5) {
  transform: translate(-50%, -50%) rotate(240deg) translate(0, -440px)
    rotate(-240deg);
}
.figure-container > *:nth-of-type(6) {
  transform: translate(-50%, -50%) rotate(300deg) translate(0, -440px)
    rotate(-300deg);
}
.figure-container > *:nth-last-of-type(1) {
  transform: translate(-50%, -50%);
}

p {
  font-size: var(--font-size);
  font-family: var(--font-p);
}
</style>
