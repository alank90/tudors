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
        <figcaption class="caption">
          Catherine of Aragon (m. 1509 - 1533 Annulled)
        </figcaption>
      </figure>
      <figure>
        <img
          src="../assets/img/TheWives/Anne-Boleyn.jpg"
          data-name="Anne Boleyn"
          alt="Anne Boleyn"
        />
        <figcaption class="caption">
          Anne Boleyn (m. 1533 - 1536 Executed)
        </figcaption>
      </figure>
      <figure>
        <img
          src="../assets/img/TheWives/Jane-Seymour.jpg"
          data-name="Jane Seymour"
          alt="Jane Seymour"
        />
        <figcaption class="caption">
          Jane Seymour (m. 1536 - 1537 Died)
        </figcaption>
      </figure>
      <figure>
        <img
          src="../assets/img/TheWives/Anne-of-Cleves.jpg"
          data-name="Anne of Cleves"
          alt="Anne of Cleves"
        />
        <figcaption class="caption">
          Anne of Cleves (m. 1540 Jan. - July Annulled)
        </figcaption>
      </figure>
      <figure>
        <img
          src="../assets/img/TheWives/Catherine-Howard.jpg"
          data-name="Catherine Howard"
          alt="Catherine Howard"
        />
        <figcaption class="caption">
          Catherine Howard (m. 1540 - 1542 Executed)
        </figcaption>
      </figure>
      <figure>
        <img
          data-name="Catherine Parr"
          src="../assets/img/TheWives/Catherine-Parr.jpg"
          alt="Catherine Parr"
        />
        <figcaption class="caption">
          Catherine Parr (m. 1543 - 1547 Widowed)
        </figcaption>
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
        <h2>{{ currentWifeHeaderName }}</h2>
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
      currentWife: "",
      currentWifeHeaderName: ""
    };
  },
  mounted() {
    // This will setup the event listener and then render the appropriate
    // modal for the image clicked
    const elContainer = document.querySelector(".figure-container");

    // Here we place our modal logic to toggle it
    const modal = document.querySelector(".modal");
    const closeBtn = document.querySelector(".close-btn");

    elContainer.addEventListener("click", ev => {
      ev.preventDefault;
      const elClicked = ev.target;
      this.currentWife = elClicked.dataset.name
        .toLowerCase()
        .replace(/\s|-/g, "");

      if (
        elClicked.nodeName.toLowerCase() === "img" &&
        !elClicked.src.includes("henry_viii")
      ) {
        // Display the Modal
        modal.style.display = "block";
        this.currentWifeHeaderName = elClicked.dataset.name;

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

    // Add event listener's to fade border on image hover
    document.querySelectorAll("img").forEach(item => {
      item.addEventListener("mouseover", ev => {
        if (ev.target.dataset.name != "HenryVIII") {
          elContainer.style.borderColor = "#ffe6e6";
        }
      });
    });

    document.querySelectorAll("img").forEach(item => {
      item.addEventListener("mouseleave", () => {
        elContainer.style.borderColor = "#e94d4d";
      });
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
  margin: 165px auto 160px;
  border: solid 5px #e94d4d;
  transition: border ease-out 0.5s;
}

figure {
  position: absolute;
  width: 10vw;
  top: 50%;
  left: 50%;
  overflow: visible;
}

figcaption.caption {
  font-family: var(--font-p);
  max-width: 700px;
  width: 20vw;
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
  -webkit-animation-name: animatetop;
  -webkit-animation-duration: 0.4s;
  animation-name: animatetop;
  animation-duration: 0.4s;
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
