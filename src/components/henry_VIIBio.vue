<script>
import navbarProgress from "../views/assets/navbarProgress.js";
import backToTop from "../components/backToTop.vue";

export default {
  components: { backToTop },
  mounted() {
    const querySelector = "nav.henry-bio";
    navbarProgress(querySelector);
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=PT+Mono&family=PT+Sans:wght@400;700&display=swap");
@import ".././assets/css/navbarProgress.css";
* {
  --highlight: #db100e;
  --body-pad-top: 70px;
  margin: 0;
  padding: 0;
}

section:not(:last-of-type) {
  padding-bottom: 15px;
}

h2 {
  font-family: var(--font-cinzel);
  padding-left: 10px;
  border-left: 4px solid var(--highlight);
}

p {
  text-justify: auto;
  text-align: left;
  font-size: var(--font-size);
  font-family: var(--font-p);
  text-indent: 2em;
}

p:first-of-type {
  padding-top: 10px;
}

p.intro {
  text-indent: 0;
}

p.intro::first-letter {
  color: #d90707;
  float: left;
  font-family: "Fleur";
  font-size: 75px;
  line-height: 60px;
  padding-top: 4px;
  padding-right: 8px;
  padding-left: 3px;
}

p:not(.intro)::first-letter {
  font-size: 1.2rem;
  font-weight: 550;
}

ul.children-container {
  width: 100%;
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-evenly;
  align-items: baseline;
  margin-top: 15px;
}

li {
  flex-basis: 300px;
  list-style: none;
}

li:not(.arthur_tudor) {
  list-style-type: none;
  margin-left: 10px;
}
li.arthur_tudor {
  flex-shrink: 0.9;
}

.shape-outside {
  width: 300px;
  margin: 10px 10px 10px 0;
  border-radius: 50%;
}

.img-container-left {
  max-width: 400px;
  height: auto;
  float: left;
  -webkit-shape-outside: circle();
  shape-outside: circle();
  margin-top: 10px;
  margin-right: 5px;
  margin-bottom: 10px;
  border-radius: 5px;
  text-align: center;
  font-weight: 575;
}
.img-container-left > p {
  margin-top: -10px;
  font-weight: 600;
  font-style: italic;
}

.img-container-right {
  max-width: 400px;
  height: auto;
  float: right;
  margin: 15px;
  border-radius: 5px;
  text-align: center;
  font-weight: 575;
}

img {
  width: 100%;
  border-radius: 7px;
}

/* === Grid and base layout === */
.component-container {
  display: grid;
  margin: 0;
  padding: var(--body-pad-top) 45px;
  border-radius: 5px;
  min-width: 350px;
  grid: auto / 200px minmax(300px, 700px);
  align-items: start;
  justify-content: center;
  gap: 20px;
  font: 16px/1.3 "PT Sans", sans-serif;
  color: #333;
  background: rgba(37, 87, 4, 0.2);
}

article {
  margin-top: -50px;
  padding-top: 50px;
}

a {
  color: var(--color-text);
}
article a {
  color: #222;
  text-decoration-color: var(--highlight);
}

/* === Adjustments === */

/* Scroll all the way up even if the first section starts a couple hundred pixels down the page */
section:first-of-type {
  margin-top: -300px;
  padding-top: 350px;
}

article,
section:last-of-type,
section:last-of-type p:last-of-type {
  margin-bottom: 0;
  padding-bottom: 0;
}
</style>

<template>
  <div class="component-container">
    <nav class="henry-bio">
      <ul>
        <li><a href="#intro">Intro</a></li>
        <li><a href="#ancestry">Ancestry and Early Life</a></li>
        <li>
          <a href="#accession">Rise to the Throne</a>
        </li>
        <li>
          <a href="#reign">Reign</a>
        </li>
        <li><a href="#appearence">Appearence and Character</a></li>
        <li><a href="#legacy">Legacy and memory</a></li>
        <li><a href="#children">Henry's children</a></li>
      </ul>
      <svg xmlns="http://www.w3.org/2000/svg">
        <path />
      </svg>
    </nav>

    <article id="top">
      <section id="intro">
        <h2>Intro</h2>
        <p class="intro">
          <strong>Henry VII</strong> (<a
            href="https://en.wikipedia.org/wiki/Welsh_language"
            title=""
            ><span>Welsh</span></a
          >: <i lang="cy">Harri Tudur</i>; 28 January 1457 &ndash; 21 April
          1509) was the
          <a href="https://en.wikipedia.org/wiki/King_of_England" title=""
            ><span>King of England</span></a
          >
          and
          <a
            href="https://en.wikipedia.org/wiki/Lord_of_Ireland"
            title="Lord of Ireland"
            ><span>Lord of Ireland</span></a
          >
          from his seizure of the crown on 22 August 1485 until his death in
          1509. He was the first monarch of the
          <a href="https://en.wikipedia.org/wiki/House_of_Tudor" title=""
            ><span>House of Tudor</span></a
          >.
        </p>
        <p>
          Henry's mother, Margaret Beaufort, was a descendant of the Lancastrian
          branch of the House of Plantagenet. Henry's father, Edmund Tudor, 1st
          Earl of Richmond, a half-brother of Henry VI of England and descendant
          of the Welsh Tudors of Penmynydd, died three months before his son
          Henry was born. During Henry's early years, his uncle Henry VI was
          fighting against Edward of York (later King Edward IV), a member of
          the Yorkist Plantagenet branch. After Edward re-took the throne in
          1471, Henry Tudor spent 14 years in exile in Brittany. He attained the
          throne when his forces, supported by France, Scotland, and Wales,
          defeated Edward IV's brother Richard III at the Battle of Bosworth
          Field, the culmination of the Wars of the Roses. He was the last king
          of England to win his throne on the field of battle. He cemented his
          claim by marrying Elizabeth of York, daughter of King Edward.
        </p>
        <p>
          Henry was successful in restoring power and stability to the English
          monarchy following the civil war. He is credited with a number of
          administrative, economic and diplomatic initiatives. His supportive
          policy toward England's wool industry and his standoff with the Low
          Countries had long-lasting benefit to the whole English economy. He
          paid very close attention to detail, and instead of spending lavishly
          he concentrated on raising new revenues. New taxes stabilised the
          government's finances. After his death, a commission found widespread
          abuses in the tax collection process. Henry reigned for nearly 24
          years and was peacefully succeeded by his son, Henry VIII.
        </p>
      </section>
      <section id="ancestry">
        <h2>Ancestry and early life</h2>
        <p>
          Henry VII was born at Pembroke Castle on 28 January 1457 to Lady
          Margaret Beaufort, Countess of Richmond. His father, Edmund Tudor, 1st
          Earl of Richmond, died three months before his birth. Henry's paternal
          grandfather, Owen Tudor, originally from the Tudors of Penmynydd, Isle
          of Anglesey in Wales, had been a page in the court of King Henry V. He
          rose to become one of the "Squires to the Body to the King" after
          military service at the Battle of Agincourt. Owen is said to have
          secretly married the widow of Henry V, Catherine of Valois. One of
          their sons was Edmund, Henry's father. Edmund was created Earl of
          Richmond in 1452, and "formally declared legitimate by Parliament".
        </p>
        <p>
          Henry's mother, Margaret, provided Henry's main claim to the English
          throne through the House of Beaufort. She was a great-granddaughter of
          John of Gaunt, 1st Duke of Lancaster (fourth son of Edward III), and
          his third wife Katherine Swynford. Katherine was Gaunt's mistress for
          about 25 years. When they married in 1396 they already had four
          children, including Henry's great-grandfather John Beaufort. Thus,
          Henry's claim was somewhat tenuous; it was from a woman, and by
          illegitimate descent. In theory, the Portuguese and Castilian royal
          families had a better claim as descendants of Catherine of Lancaster,
          the daughter of John of Gaunt and his second wife Constance of
          Castile.
        </p>
        <p>
          Gaunt's nephew Richard II legitimised Gaunt's children by Katherine
          Swynford by Letters Patent in 1397. In 1407, Henry IV, Gaunt's son by
          his first wife, issued new Letters Patent confirming the legitimacy of
          his half-siblings but also declaring them ineligible for the throne.
          Henry IV's action was of doubtful legality, as the Beauforts were
          previously legitimised by an Act of Parliament, but it further
          weakened Henry's claim.[citation needed] Nonetheless, by 1483 Henry
          was the senior male Lancastrian claimant remaining after the deaths in
          battle, by murder or execution of Henry VI (son of Henry V and
          Catherine of Valois), his son Edward of Westminster, Prince of Wales,
          and the other Beaufort line of descent through Lady Margaret's uncle,
          Edmund Beaufort, 2nd Duke of Somerset.
        </p>
        <p>
          Henry also made some political capital out of his Welsh ancestry in
          attracting military support and safeguarding his army's passage
          through Wales on its way to the Battle of Bosworth. He came from an
          old, established Anglesey family that claimed descent from Cadwaladr,
          in legend, the last ancient British king, and on occasion Henry
          displayed the red dragon of Cadwaladr. He took it, as well as the
          standard of St. George, on his procession through London after the
          victory at Bosworth. A contemporary writer and Henry's biographer,
          Bernard André, also made much of Henry's Welsh descent.
        </p>
        <p>
          In 1456, Henry's father Edmund Tudor was captured while fighting for
          Henry VI in South Wales against the Yorkists. He died shortly
          afterwards in Carmarthen Castle. His younger brother, Jasper Tudor,
          the Earl of Pembroke, undertook to protect Edmund's widow Margaret,
          who was 13 years old when she gave birth to Henry. When Edward IV
          became King in 1461, Jasper Tudor went into exile abroad. Pembroke
          Castle, and later the Earldom of Pembroke, were granted to the Yorkist
          William Herbert, who also assumed the guardianship of Margaret
          Beaufort and the young Henry
        </p>
        <p>
          Henry lived in the Herbert household until 1469, when Richard Neville,
          Earl of Warwick (the "Kingmaker"), went over to the Lancastrians.
          Herbert was captured fighting for the Yorkists and executed by
          Warwick. When Warwick restored Henry VI in 1470, Jasper Tudor returned
          from exile and brought Henry to court. When the Yorkist Edward IV
          regained the throne in 1471, Henry fled with other Lancastrians to
          Brittany. He spent most of the next 14 years under the protection of
          Francis II, Duke of Brittany. In November 1476, Francis fell ill and
          his principal advisers were more amenable to negotiating with King
          Edward. Henry was handed over and escorted to the Breton port of
          Saint-Malo. While there, he feigned stomach cramps and in the
          confusion fled into a monastery. Following the Battle of Tewkesbury in
          1471, Edward prepared to order Henry's extraction and probable
          execution. The townspeople took exception to his behaviour and Francis
          recovered from his illness. Thus, a small band of scouts rescued
          Henry.
        </p>
      </section>
      <section id="accession">
        <h2>Rise to the throne</h2>
        <div class="img-container-right">
          <img
            src="../assets/img/elizabeth_of_york.jpg"
            alt="Elizabeth of York"
          />
          <p>Elizabeth of York</p>
        </div>
        <p>
          By 1483, Henry's mother was actively promoting him as an alternative
          to Richard III, despite her being married to Lord Stanley, a Yorkist.
          At Rennes Cathedral on Christmas Day 1483, Henry pledged to marry
          Elizabeth of York, the eldest daughter of Edward IV. She was Edward's
          heir since the presumed death of her brothers, the Princes in the
          Tower, King Edward V and Richard of Shrewsbury, Duke of York. With
          money and supplies borrowed from his host, Francis II of Brittany,
          Henry tried to land in England, but his conspiracy unravelled
          resulting in the execution of his primary co-conspirator, Henry
          Stafford, 2nd Duke of Buckingham. Now supported by Francis II's prime
          minister, Pierre Landais, Richard III attempted to extradite Henry
          from Brittany, but Henry escaped to France. He was welcomed by the
          French, who readily supplied him with troops and equipment for a
          second invasion.
        </p>
        <p>
          Henry gained the support of the Woodvilles, in-laws of the late Edward
          IV, and sailed with a small French and Scottish force, landing at Mill
          Bay near Dale, Pembrokeshire. He marched toward England accompanied by
          his uncle Jasper and John de Vere, 13th Earl of Oxford. Wales was
          historically a Lancastrian stronghold, and Henry owed the support he
          gathered to his Welsh birth and ancestry, being directly descended,
          through his father, from Rhys ap Gruffydd. He amassed an army of about
          5,000 soldiers.
        </p>
        <p>
          Henry devised a plan to seize the throne by engaging Richard quickly
          because Richard had reinforcements in Nottingham and Leicester. Though
          outnumbered, Henry's Lancastrian forces decisively defeated Richard's
          Yorkist army at the Battle of Bosworth Field on 22 August 1485.
          Several of Richard's key allies, such as Henry Percy, 4th Earl of
          Northumberland, and also Lord Stanley and his brother William,
          crucially switched sides or left the battlefield. Richard III's death
          at Bosworth Field effectively ended the Wars of the Roses.
        </p>
      </section>
      <section id="reign">
        <h2>Reign</h2>
        <p>
          As king, Henry was styled by the Grace of God, King of England and
          France and Lord of Ireland. On his succession, Henry became entitled
          to bear the Royal Arms of England.
        </p>
        <p>
          o secure his hold on the throne, Henry declared himself king by right
          of conquest retroactively from 21 August 1485, the day before Bosworth
          Field. Thus, anyone who had fought for Richard against him would be
          guilty of treason and Henry could legally confiscate the lands and
          property of Richard III, while restoring his own. Henry spared
          Richard's nephew and designated heir, John de la Pole, Earl of
          Lincoln, and made the Yorkist heiress Margaret Plantagenet Countess of
          Salisbury suo jure. He took care not to address the baronage or summon
          Parliament until after his coronation, which took place in Westminster
          Abbey on 30 October 1485. After his coronation Henry issued an edict
          that any gentleman who swore fealty to him would, notwithstanding any
          previous attainder, be secure in his property and person.
        </p>
        <p>
          Henry honoured his pledge of December 1483 to marry Elizabeth of York.
          They were third cousins, as both were great-great-grandchildren of
          John of Gaunt. Henry and Elizabeth were married on 18 January 1486 at
          Westminster Abbey.[citation needed] The marriage unified the warring
          houses and gave his children a strong claim to the throne. The
          unification of the houses of York and Lancaster by this marriage is
          symbolised by the heraldic emblem of the Tudor rose, a combination of
          the white rose of York and the red rose of Lancaster. It also ended
          future discussion as to whether the descendants of the fourth son of
          Edward III, Edmund, Duke of York, through marriage to Philippa,
          heiress of the second son, Lionel, Duke of Clarence, had a superior or
          inferior claim to those of the third son John of Gaunt, who had held
          the throne for three generations.
        </p>
        <p>
          In addition, Henry had Parliament repeal Titulus Regius, the statute
          that declared Edward IV's marriage invalid and his children
          illegitimate, thus legitimising his wife. Amateur historians Bertram
          Fields and Sir Clements Markham have claimed that he may have been
          involved in the murder of the Princes in the Tower, as the repeal of
          Titulus Regius gave the Princes a stronger claim to the throne than
          his own. Alison Weir points out that the Rennes ceremony, two years
          earlier, was plausible only if Henry and his supporters were certain
          that the Princes were already dead.
        </p>
        <p>
          Henry married Elizabeth of York with the hope of uniting the Yorkist
          and Lancastrian sides of the Plantagenet dynastic disputes, and he was
          largely successful. However, such a level of paranoia persisted that
          anyone (John de la Pole, Earl of Lincoln, for example) with blood ties
          to the Plantagenets was suspected of coveting the throne. Henry
          secured his crown principally by dividing and undermining the power of
          the nobility, especially through the aggressive use of bonds and
          recognisances to secure loyalty. He also enacted laws against livery
          and maintenance, the great lords' practice of having large numbers of
          "retainers" who wore their lord's badge or uniform and formed a
          potential private army.
        </p>
        <p>
          Henry began taking precautions against rebellion while still in
          Leicester after Bosworth Field. For instance, Edward, Earl of Warwick,
          the ten-year-old son of Edward IV's brother George, Duke of Clarence,
          was the senior surviving male of the House of York. Before departing
          for London, Henry sent Robert Willoughby to Sheriff Hutton in
          Yorkshire, to arrest Warwick and take him to the Tower of London.
          Despite such precautions, Henry faced several rebellions over the next
          twelve years.[citation needed] The first was the 1486 rebellion of the
          Stafford brothers, abetted by Viscount Lovell, which collapsed without
          fighting
        </p>
        <p>
          Next, in 1487, Yorkists led by Lincoln rebelled in support of Lambert
          Simnel, a boy they claimed to be Edward of Warwick (who was actually a
          prisoner in the Tower). The rebellion began in Ireland, where the
          historically Yorkist nobility, headed by the powerful Gerald
          FitzGerald, 8th Earl of Kildare, proclaimed Simnel king and provided
          troops for his invasion of England. The rebellion was defeated and
          Lincoln killed at the Battle of Stoke. Henry showed remarkable
          clemency to the surviving rebels: he pardoned Kildare and the other
          Irish nobles, and he made the boy, Simnel, a servant in the royal
          kitchen where he was in charge of roasting meats on a spit
        </p>
        <p>
          In 1490, a young Fleming, Perkin Warbeck, appeared and claimed to be
          Richard of Shrewsbury, the younger of the "Princes in the Tower".
          Warbeck won the support of Edward IV's sister Margaret, Duchess of
          Burgundy. He led attempted invasions of Ireland in 1491 and England in
          1495, and persuaded James IV of Scotland to invade England in 1496. In
          1497 Warbeck landed in Cornwall with a few thousand troops, but was
          soon captured and executed.
        </p>
        <p>
          When the King's agents searched the property of William Stanley
          (Chamberlain of the Household, with direct access to Henry VII) they
          found a bag of coins amounting to around £10,000 and a collar of
          livery with Yorkist garnishings. Stanley was accused of supporting
          Warbeck's cause, arrested and later executed. In response to this
          threat within his own household, the King instituted more rigid
          security for access to his person.
        </p>
        <p>
          n 1499, Henry had the Earl of Warwick executed. However, he spared
          Warwick's elder sister Margaret. She survived until 1541, when she was
          executed by Henry VIII.
        </p>
      </section>
      <section id="appearence">
        <h2>Appearence and character</h2>
        <p>
          Good contemporary visual records of Henry's appearance exist in
          realistic portraits that are relatively free of idealisation. At 27,
          he was tall and slender, with small blue eyes, which were said to have
          a noticeable animation of expression, and noticeably bad teeth in a
          long, sallow face beneath very fair hair.
        </p>
        <p>
          Amiable and high-spirited, Henry was friendly if dignified in manner,
          and it was clear that he was extremely intelligent. His biographer,
          Professor Chrimes, credits him – even before he had become king – with
          "a high degree of personal magnetism, ability to inspire confidence,
          and a growing reputation for shrewd decisiveness". On the debit side,
          he may have looked a little delicate as he suffered from poor health.
        </p>
      </section>
      <section id="legacy">
        <h2>Legacy and memory</h2>
        <p>
          Historians have always compared Henry VII with his continental
          contemporaries, especially Louis XI of France and Ferdinand II of
          Aragon. By 1600 historians emphasised Henry's wisdom in drawing
          lessons in statecraft from other monarchs. In 1622 Francis Bacon
          published his History of the Reign of King Henry VII. By 1900 the "New
          Monarchy" interpretation stressed the common factors that in each
          country led to the revival of monarchical power. This approach raised
          puzzling questions about similarities and differences in the
          development of national states. In the late 20th century a model of
          European state formation was prominent in which Henry less resembles
          Louis and Ferdinand.
        </p>
      </section>
      <section id="children">
        <h2>Henry's children</h2>

        <div>
          <ul class="children-container">
            <li class="arthur_tudor">
              <a
                href="https://en.wikipedia.org/wiki/Arthur,_Prince_of_Wales"
                target="_blank"
                ><img alt="Arthur Tudor" src="../assets/img/arthur_tudor.png" />
              </a>
              <p>
                Arthur Tudor, eldest son; predeceased his father without
                progeny.
              </p>
            </li>

            <li>
              <a
                href="https://en.wikipedia.org/wiki/Margaret_Tudor"
                target="_blank"
              >
                <img
                  alt="Margaret Tudor"
                  src="../assets/img/margaret_tudor.jpg"
                />
              </a>
              <p>Margaret Tudor, eldest daughter</p>
            </li>

            <li>
              <router-link to="/Henry_VIII">
                <img
                  alt="Young Henry VIII"
                  src="../assets/img/henry_viii_young.png"
                />
              </router-link>
              <p>Henry VIII, second son and successor</p>
            </li>

            <li>
              <a
                href="https://en.wikipedia.org/wiki/Mary_Tudor,_Queen_of_France"
                target="_blank"
              >
                <img alt="Mary Tudor" src="../assets/img/mary_tudor.jpg" />
              </a>
              <p>Mary Tudor, younger daughter</p>
            </li>
          </ul>
        </div>
      </section>
    </article>

    <back-to-top></back-to-top>
  </div>
</template>
