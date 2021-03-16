<template>
  <div class="container">
    <h1>The Six Wives of Henry the VIII</h1>

    <div class="img-container">
      <div class="image">
        <img
          src="../assets/img/TheWives/Catherine-of-Aragon.jpg"
          alt="Catherine of Aragon"
        />
        <p>Catherine</p>
      </div>
      <img src="../assets/img/TheWives/Anne-Boleyn.jpg" alt="Anne Boleyn" />
      <img src="../assets/img/TheWives/Jane-Seymour.jpg" alt="Jane Seymour" />
      <img
        src="../assets/img/TheWives/Anne-of-Cleves.jpg"
        alt="Anne of Cleves"
      />
      <img
        src="../assets/img/TheWives/Catherine-Howard.jpg"
        alt="Catherine Howard"
      />
      <img
        src="../assets/img/TheWives/Catherine-Parr.jpg"
        alt="Catherine Parr"
      />
      <img src="../assets/img/henry_viii.png" alt="Henry th VIII" />
    </div>
  </div>
</template>

<style scoped>
h1 {
  font-family: var(--font-cinzel);
  font-size: 2.3rem;
}

.img-container {
  position: relative;
  width: 800px;
  height: 800px;
  border-radius: 50%;
  padding: 0;
  margin: 40px auto 160px;
  border: solid 5px #e94d4d;
}

img {
  position: absolute;
  width: 100px;
  top: 50%;
  left: 50%;
}

.img-container > div > *:nth-of-type(1) {
  transform: rotate(0deg) translate(0, -440px) rotate(0deg);
}

.img-container > *:nth-of-type(2) {
  transform: rotate(60deg) translate(0, -440px) rotate(-60deg);
}
.img-container > *:nth-of-type(3) {
  transform: rotate(120deg) translate(0, -440px) rotate(-120deg);
}
.img-container > *:nth-of-type(4) {
  transform: rotate(180deg) translate(0, -440px) rotate(-180deg);
}
.img-container > *:nth-of-type(5) {
  transform: rotate(240deg) translate(0, -440px) rotate(-240deg);
}
.img-container > *:nth-of-type(6) {
  transform: rotate(300deg) translate(0, -440px) rotate(-300deg);
}

p {
  font-size: var(--font-size);
  font-family: var(--font-p);
}
</style>
