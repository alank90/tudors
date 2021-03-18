<template>
  <div class="container">
    <h1>The Six Wives of Henry the VIII</h1>

    <div class="figure-container">
      <figure>
        <img
          src="../assets/img/TheWives/Catherine-of-Aragon.jpg"
          data-name="Catherine of Aragon"
          alt="Catherine of Aragon"
        />
        <figcaption>Catherine of Aragon (m. 1509 - 1533 Annulled)</figcaption>
      </figure>
      <figure>
        <img
          src="../assets/img/TheWives/Anne-Boleyn.jpg"
          data-name="Anne Boleyn"
          alt="Anne Boleyn"
        />
        <figcaption>Anne Boleyn (m. 1533 - 1536 Executed)</figcaption>
      </figure>
      <figure>
        <img
          src="../assets/img/TheWives/Jane-Seymour.jpg"
          data-name="Jane Seymour"
          alt="Jane Seymour"
        />
        <figcaption>Jane Seymour (m. 1536 - 1537 Died)</figcaption>
      </figure>
      <figure>
        <img
          src="../assets/img/TheWives/Anne-of-Cleves.jpg"
          data-name="Anne-of-Cleves"
          alt="Anne of Cleves"
        />
        <figcaption>Anne of Cleves (m. 1540 Jan. - July Annulled)</figcaption>
      </figure>
      <figure>
        <img
          src="../assets/img/TheWives/Catherine-Howard.jpg"
          data-name="Catherine Howard"
          alt="Catherine Howard"
        />
        <figcaption>Catherine Howard (m. 1540 - 1542 Executed)</figcaption>
      </figure>
      <figure>
        <img
          data-name="Catherine Parr"
          src="../assets/img/TheWives/Catherine-Parr.jpg"
          alt="Catherine Parr"
        />
        <figcaption>Catherine Parr (m. 1543 - 1547 Widowed)</figcaption>
      </figure>
      <figure>
        <img
          src="../assets/img/henry_viii.png"
          data-name="HenryVIII"
          alt="Henry the VIII"
        />
        <figcaption>Henry VIII</figcaption>
      </figure>
    </div>

    <!-- ============ Below here is modal markup ============= -->
    <div class="modal">
      <div class="modal-header">
        <span class="close-btn">&#88;</span>
        <h2>Wives Name</h2>
      </div>

      <div v-html="theWivesBios[currentWife]" class="modal-content"></div>
    </div>
    <!-- ============ End modal markup ============= -->
  </div>
</template>

<script>
import theWivesBios from "./assets/theWivesBio";
export default {
  name: "theSixWives",
  data() {
    return {
      theWivesBios: theWivesBios,
      currentWife: ""
    };
  },
  mounted() {
    // This will setup the event listener and then render the appropriate
    // modal for the image clicked
    const elContainer = document.querySelector(".figure-container");
    elContainer.addEventListener("click", function(ev) {
      ev.preventDefault;
      const elFigure = ev.target;
      if (elFigure.nodeName.toLowerCase() === "img") {
        console.log(elFigure.dataset.name.toLowerCase().replace(/\s|-/g, ""));

        // Here we place our modal logic to toggle it
        const modal = document.querySelector(".modal");
        const closeBtn = document.querySelector(".close-btn");

        // Display the Modal
        modal.style.display = "block";

        this.currentWife = "testing";
        console.log(elFigure.dataset.name.toLowerCase().replace(/\s|-/g, ""));
        // Close modal logic
        closeBtn.onclick = function(e) {
          if (e.target.nodeName === "SPAN") {
            modal.style.display = "none";
          }
        };
        // Enables clicking anywhere to dismiss modal
        window.onclick = function(e) {
          if (e.target == modal) {
            modal.style.display = "none";
          }
        };
      }
    });
  }
};
</script>

<style scoped>
h1 {
  font-family: var(--font-cinzel);
  font-size: 2.3rem;
}
h2 {
  font-family: var(--font-cinzel);
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

/* ========= Modal Stylings ======== */
.modal {
  display: none;
  position: fixed;
  padding-top: 50px;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.5);
  overflow: auto;
}

.modal-header {
  width: 75%;
  margin: auto;
  background-color: white;
}

.modal-content {
  position: relative;
  background-color: white;
  padding: 20px;
  margin: auto;
  width: 75%;
  -webkit-animation-name: animatetop;
  -webkit-animation-duration: 0.4s;
  animation-name: animatetop;
  animation-duration: 0.4s;
}

h2 {
  margin: 10px 0 0;
  padding-top: 15px;
}

.close-btn {
  float: right;
  padding-right: 20px;
  color: rgb(136, 133, 133);
  font-size: 24px;
  font-weight: 600;
  transform: scale(1.5);
}
.close-btn:hover {
  color: darkgray;
}

@-webkit-keyframes animatetop {
  from {
    top: -300px;
    opacity: 0;
  }
  to {
    top: 0;
    opacity: 1;
  }
}
@keyframes animatetop {
  from {
    top: -300px;
    opacity: 0;
  }
  to {
    top: 0;
    opacity: 1;
  }
}
/* ========= End Modal Stylings ======== */
</style>
