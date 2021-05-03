<script>
import navbarProgress from "../views/assets/navbarProgress.js";
export default {
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
  display: flex;
  flex-wrap: no;
  justify-content: space-around;
  align-items: center;
}

li {
  list-style-type: none;
}

li > img {
  max-width: 55%;
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
            >Welsh</a
          >: <i lang="cy">Harri Tudur</i>; 28 January 1457 &ndash; 21 April
          1509) was the
          <a href="https://en.wikipedia.org/wiki/King_of_England" title=""
            >King of England</a
          >
          and
          <a
            href="https://en.wikipedia.org/wiki/Lord_of_Ireland"
            title="Lord of Ireland"
            >Lord of Ireland</a
          >
          from his seizure of the crown on 22 August 1485 until his death in
          1509. He was the first monarch of the
          <a href="https://en.wikipedia.org/wiki/House_of_Tudor" title=""
            >House of Tudor</a
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
          Earl of Richmond, died three months before his birth.[1] Henry's
          paternal grandfather, Owen Tudor, originally from the Tudors of
          Penmynydd, Isle of Anglesey in Wales, had been a page in the court of
          King Henry V. He rose to become one of the "Squires to the Body to the
          King" after military service at the Battle of Agincourt.[2] Owen is
          said to have secretly married the widow of Henry V, Catherine of
          Valois. One of their sons was Edmund, Henry's father. Edmund was
          created Earl of Richmond in 1452, and "formally declared legitimate by
          Parliament".[3]
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
          his half-siblings but also declaring them ineligible for the
          throne.[4] Henry IV's action was of doubtful legality, as the
          Beauforts were previously legitimised by an Act of Parliament, but it
          further weakened Henry's claim.[citation needed] Nonetheless, by 1483
          Henry was the senior male Lancastrian claimant remaining after the
          deaths in battle, by murder or execution of Henry VI (son of Henry V
          and Catherine of Valois), his son Edward of Westminster, Prince of
          Wales, and the other Beaufort line of descent through Lady Margaret's
          uncle, Edmund Beaufort, 2nd Duke of Somerset.
        </p>
        <p>
          Henry also made some political capital out of his Welsh ancestry in
          attracting military support and safeguarding his army's passage
          through Wales on its way to the Battle of Bosworth.[5][6] He came from
          an old, established Anglesey family that claimed descent from
          Cadwaladr, in legend, the last ancient British king,[7] and on
          occasion Henry displayed the red dragon of Cadwaladr.[5] He took it,
          as well as the standard of St. George, on his procession through
          London after the victory at Bosworth.[8] A contemporary writer and
          Henry's biographer, Bernard André, also made much of Henry's Welsh
          descent.
        </p>
        <p>
          In 1456, Henry's father Edmund Tudor was captured while fighting for
          Henry VI in South Wales against the Yorkists. He died shortly
          afterwards in Carmarthen Castle. His younger brother, Jasper Tudor,
          the Earl of Pembroke, undertook to protect Edmund's widow Margaret,
          who was 13 years old when she gave birth to Henry.[9] When Edward IV
          became King in 1461, Jasper Tudor went into exile abroad. Pembroke
          Castle, and later the Earldom of Pembroke, were granted to the Yorkist
          William Herbert, who also assumed the guardianship of Margaret
          Beaufort and the young Henry
        </p>
        <p>
          Henry lived in the Herbert household until 1469, when Richard Neville,
          Earl of Warwick (the "Kingmaker"), went over to the Lancastrians.
          Herbert was captured fighting for the Yorkists and executed by
          Warwick.[11] When Warwick restored Henry VI in 1470, Jasper Tudor
          returned from exile and brought Henry to court.[11] When the Yorkist
          Edward IV regained the throne in 1471, Henry fled with other
          Lancastrians to Brittany. He spent most of the next 14 years under the
          protection of Francis II, Duke of Brittany. In November 1476, Francis
          fell ill and his principal advisers were more amenable to negotiating
          with King Edward. Henry was handed over and escorted to the Breton
          port of Saint-Malo. While there, he feigned stomach cramps and in the
          confusion fled into a monastery. Following the Battle of Tewkesbury in
          1471, Edward prepared to order Henry's extraction and probable
          execution. The townspeople took exception to his behaviour and Francis
          recovered from his illness. Thus, a small band of scouts rescued
          Henry.
        </p>
      </section>
      <section id="accession">
        <h2>Rise to the throne</h2>
        <p>
          By 1483, Henry's mother was actively promoting him as an alternative
          to Richard III, despite her being married to Lord Stanley, a Yorkist.
          At Rennes Cathedral on Christmas Day 1483, Henry pledged to marry
          Elizabeth of York, the eldest daughter of Edward IV. She was Edward's
          heir since the presumed death of her brothers, the Princes in the
          Tower, King Edward V and Richard of Shrewsbury, Duke of York.[12] With
          money and supplies borrowed from his host, Francis II of Brittany,
          Henry tried to land in England, but his conspiracy unravelled
          resulting in the execution of his primary co-conspirator, Henry
          Stafford, 2nd Duke of Buckingham.[13] Now supported by Francis II's
          prime minister, Pierre Landais, Richard III attempted to extradite
          Henry from Brittany, but Henry escaped to France.[14] He was welcomed
          by the French, who readily supplied him with troops and equipment for
          a second invasion.
        </p>
        <p>
          Henry gained the support of the Woodvilles, in-laws of the late Edward
          IV, and sailed with a small French and Scottish force, landing at Mill
          Bay near Dale, Pembrokeshire.[15] He marched toward England
          accompanied by his uncle Jasper and John de Vere, 13th Earl of Oxford.
          Wales was historically a Lancastrian stronghold, and Henry owed the
          support he gathered to his Welsh birth and ancestry, being directly
          descended, through his father, from Rhys ap Gruffydd.[16] He amassed
          an army of about 5,000 soldiers.
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
          Field.[19] Thus, anyone who had fought for Richard against him would
          be guilty of treason and Henry could legally confiscate the lands and
          property of Richard III, while restoring his own. Henry spared
          Richard's nephew and designated heir, John de la Pole, Earl of
          Lincoln, and made the Yorkist heiress Margaret Plantagenet Countess of
          Salisbury suo jure. He took care not to address the baronage or summon
          Parliament until after his coronation, which took place in Westminster
          Abbey on 30 October 1485.[20] After his coronation Henry issued an
          edict that any gentleman who swore fealty to him would,
          notwithstanding any previous attainder, be secure in his property and
          person.
        </p>
        <p>
          Henry honoured his pledge of December 1483 to marry Elizabeth of
          York.[13][21] They were third cousins, as both were
          great-great-grandchildren of John of Gaunt.[22] Henry and Elizabeth
          were married on 18 January 1486 at Westminster Abbey.[citation needed]
          The marriage unified the warring houses and gave his children a strong
          claim to the throne. The unification of the houses of York and
          Lancaster by this marriage is symbolised by the heraldic emblem of the
          Tudor rose, a combination of the white rose of York and the red rose
          of Lancaster. It also ended future discussion as to whether the
          descendants of the fourth son of Edward III, Edmund, Duke of York,
          through marriage to Philippa, heiress of the second son, Lionel, Duke
          of Clarence, had a superior or inferior claim to those of the third
          son John of Gaunt, who had held the throne for three generations.
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
          anyone (John de la Pole, Earl of Lincoln,[24] for example) with blood
          ties to the Plantagenets was suspected of coveting the throne.[25]
          Henry secured his crown principally by dividing and undermining the
          power of the nobility, especially through the aggressive use of bonds
          and recognisances to secure loyalty. He also enacted laws against
          livery and maintenance, the great lords' practice of having large
          numbers of "retainers" who wore their lord's badge or uniform and
          formed a potential private army.
        </p>
        <p>
          Henry began taking precautions against rebellion while still in
          Leicester after Bosworth Field. For instance, Edward, Earl of Warwick,
          the ten-year-old son of Edward IV's brother George, Duke of Clarence,
          was the senior surviving male of the House of York.[26] Before
          departing for London, Henry sent Robert Willoughby to Sheriff Hutton
          in Yorkshire, to arrest Warwick and take him to the Tower of
          London.[27] Despite such precautions, Henry faced several rebellions
          over the next twelve years.[citation needed] The first was the 1486
          rebellion of the Stafford brothers, abetted by Viscount Lovell, which
          collapsed without fighting
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
          n 1499, Henry had the Earl of Warwick executed.[32] However, he spared
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
            <li>
              <a href="https://en.wikipedia.org/wiki/Arthur,_Prince_of_Wales"
                ><img alt="Arthur Tudor" src="../assets/img/arthur_tudor.png" />
              </a>
              <p>
                Arthur Tudor, eldest son; predeceased his father without
                progeny.
              </p>
            </li>

            <li>
              <a href="https://en.wikipedia.org/wiki/Margaret_Tudor"></a>
              <img
                alt="Margaret Tudor"
                src="../assets/img/margaret_tudor.jpg"
              />

              <p>Margaret Tudor, eldest daughter</p>
            </li>

            <li>
              <img
                alt=""
                src="data:image/png;base64,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"
                srcset="
                  //upload.wikimedia.org/wikipedia/commons/thumb/5/5a/HenryVIII_1509.jpg/118px-HenryVIII_1509.jpg 1.5x,
                  //upload.wikimedia.org/wikipedia/commons/thumb/5/5a/HenryVIII_1509.jpg/158px-HenryVIII_1509.jpg 2x
                "
              />

              <p>Henry VIII, second son and successor</p>
            </li>

            <li>
              <img
                alt=""
                src="data:image/png;base64,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"
                srcset="
                  //upload.wikimedia.org/wikipedia/commons/thumb/e/e4/1496_Mary_Tudor.jpg/109px-1496_Mary_Tudor.jpg 1.5x,
                  //upload.wikimedia.org/wikipedia/commons/thumb/e/e4/1496_Mary_Tudor.jpg/146px-1496_Mary_Tudor.jpg 2x
                "
              />

              <p>Mary Tudor, younger daughter</p>
            </li>
          </ul>
        </div>
      </section>
    </article>
  </div>
</template>
