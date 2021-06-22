<script>
import navbarProgress from "../views/assets/navbarProgress";
import backToTop from "../components/backToTop.vue";

export default {
  components: { backToTop },
  mounted() {
    const querySelector = "nav.lady-jane-bio";
    navbarProgress(querySelector);
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=PT+Mono&family=PT+Sans:wght@400;700&display=swap");
@import ".././assets/css/navbarProgress.css";

section:not(:last-of-type) {
  padding-bottom: 15px;
}

h2 {
  font-family: var(--font-cinzel);
  padding-left: 10px;
  border-left: 4px solid var(--highlight);
}

hr {
  margin: 3px 0;
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

article a {
  color: #222;
  text-decoration-color: #376119;
  text-decoration-thickness: 2px;
}
</style>

<template>
  <div class="component-container">
    <nav class="lady-jane-bio">
      <ul>
        <li data-name="intro"><a href="#intro">Intro</a></li>
        <li data-name="early-life">
          <a href="#early-life">Early Life and education</a>
        </li>
        <li data-name="marriage">
          <a href="#marriage">Contracts for marriage</a>
        </li>
        <li data-name="accession">
          <a href="#accession">Claim to the throne and accesion</a>
        </li>
        <li data-name="execution">
          <a href="#execution">Trial and execution</a>
        </li>
        <li data-name="legacy"><a href="#legacy">Legacy</a></li>
      </ul>
      <svg xmlns="http://www.w3.org/2000/svg">
        <path />
      </svg>
    </nav>

    <article id="top">
      <section id="intro">
        <h2>Intro</h2>
        <hr />
        <figure class="container-right">
          <img
            src="../assets/img/lady_jane_I.jpg"
            alt="Lady Jane full portrait"
          />
          <figcaption>Famous Portrait Of Lady Jane Grey</figcaption>
        </figure>
        <p>
          <strong>Lady Jane Grey</strong> (<abbr title="circa">c.</abbr
          ><span style="white-space: nowrap">&thinsp;1537</span>
          &ndash; 12 February 1554), later known as
          <strong>Lady Jane Dudley</strong> (after her marriage) and as the
          &quot;<strong>Nine Days&apos; Queen</strong>&quot;, was an English
          noblewoman and
          <a href="https://en.wikipedia.org/wiki/De_facto" title="De facto"
            ><span>de facto</span></a
          >
          Queen of England and Ireland from 10 July until 19 July 1553.
        </p>
        <p>
          Jane was the great-granddaughter of
          <a
            href="https://en.wikipedia.org/wiki/Henry_VII_of_England"
            title="Jane Grey (disambiguation)"
            ><span>Henry VII</span></a
          >
          through his younger daughter
          <a
            href="https://en.wikipedia.org/wiki/Mary_Tudor,_Queen_of_France"
            title="Mary Tudor, Queen of France"
            ><span>Mary</span></a
          >, and was a first cousin once removed of
          <a href="https://en.wikipedia.org/wiki/Edward_VI" title=""
            ><span>Edward VI</span></a
          >. She had an excellent
          <a
            href="https://en.wikipedia.org/wiki/Renaissance_humanism"
            title="Renaissance humanism"
            ><span>humanist</span></a
          >
          education and a reputation as one of the most learned young women of
          her day. In May 1553, she married
          <a
            href="https://en.wikipedia.org/wiki/Lord_Guildford_Dudley"
            title="Lord Guildford Dudley"
            ><span>Lord Guildford Dudley</span></a
          >, a younger son of Edward&apos;s chief minister
          <a
            href="https://en.wikipedia.org/wiki/John_Dudley,_Duke_of_Northumberland"
            title="John Dudley, Duke of Northumberland"
            ><span>John Dudley, Duke of Northumberland</span></a
          >. In June 1553, Edward VI wrote his will, nominating Jane and her
          male heirs as successors to the Crown, in part because his half-sister
          <a href="/Mary_I" title="Mary I of England"><span>Mary</span></a>
          was Roman Catholic, while Jane was a committed Protestant and would
          support the reformed
          <a
            href="https://en.wikipedia.org/wiki/Church_of_England"
            title="Church of England"
            ><span>Church of England</span></a
          >, whose foundation Edward claimed to have laid. The will removed his
          half-sisters, Mary and
          <a href="/Elizabeth_I" title="Elizabeth I of England"
            ><span>Elizabeth</span></a
          >, from the line of succession on account of their illegitimacy,
          subverting their claims under the
          <a
            href="https://en.wikipedia.org/wiki/Third_Succession_Act"
            title="Third Succession Act"
            ><span>Third Succession Act</span></a
          >.
        </p>
        <p>
          After Edward&apos;s death, Jane was proclaimed queen on 10 July 1553
          and awaited coronation in the
          <a
            href="https://en.wikipedia.org/wiki/Tower_of_London"
            title="Tower of London"
            ><span>Tower of London</span></a
          >. Support for Mary grew very quickly, and most of Jane&apos;s
          supporters abandoned her. The
          <a
            href="https://en.wikipedia.org/wiki/Privy_Council_of_England"
            title="Privy Council of England"
            ><span>Privy Council of England</span></a
          >
          suddenly changed sides and proclaimed Mary as queen on 19 July 1553,
          deposing Jane. Her primary supporter, her father-in-law the Duke of
          Northumberland, was accused of treason and executed less than a month
          later. Jane was held prisoner in the Tower and was convicted of high
          treason in November 1553, which carried a sentence of
          death&mdash;though Mary initially spared her life. However, Jane soon
          became viewed as a threat to the Crown when her father,
          <a
            href="https://en.wikipedia.org/wiki/Henry_Grey,_1st_Duke_of_Suffolk"
            title="Henry Grey, 1st Duke of Suffolk"
            ><span>Henry Grey, 1st Duke of Suffolk</span></a
          >, became involved with
          <a
            href="https://en.wikipedia.org/wiki/Wyatt%27s_rebellion"
            title="Wyatt's rebellion"
            ><span>Wyatt&apos;s rebellion</span></a
          >
          against Queen Mary&apos;s intention to marry
          <a
            href="https://en.wikipedia.org/wiki/Philip_II_of_Spain"
            title="Philip II of Spain"
            ><span>Philip II of Spain</span></a
          >. Both Jane and her husband were executed on 12 February 1554.&nbsp;
        </p>
      </section>

      <section id="education">
        <h2>Early Life and education</h2>
        <hr />
        <p>
          Lady Jane Grey was the eldest daughter of
          <a
            href="https://en.wikipedia.org/wiki/Henry_Grey,_1st_Duke_of_Suffolk"
            title="Henry Grey, 1st Duke of Suffolk"
            ><span>Henry Grey, 1st Duke of Suffolk</span></a
          >, and his wife,
          <a
            href="https://en.wikipedia.org/wiki/Frances_Grey,_Duchess_of_Suffolk"
            title="Edward VI"
            ><span>Frances</span></a
          >. The traditional view is that she was born at
          <a
            href="https://en.wikipedia.org/wiki/Bradgate_Park"
            title="Bradgate Park"
            ><span>Bradgate Park</span></a
          >
          in
          <a
            href="https://en.wikipedia.org/wiki/Leicestershire"
            title="Leicestershire"
            ><span>Leicestershire</span></a
          >
          in October 1537, while more recent research indicates that she was
          born somewhat earlier, possibly in London, in late 1536 or in the
          spring of 1537. Frances was the elder daughter of
          <a
            href="https://en.wikipedia.org/wiki/King_Henry_VIII"
            title="King Henry VIII"
            ><span>King Henry VIII</span></a
          >&apos;s younger sister,
          <a
            href="https://en.wikipedia.org/wiki/Mary_Tudor,_Queen_of_France"
            title="Mary Tudor, Queen of France"
            ><span>Mary</span></a
          >. Jane had two younger sisters:
          <a
            href="https://en.wikipedia.org/wiki/Lady_Katherine_Grey"
            title="Lady Katherine Grey"
            ><span>Lady Katherine</span></a
          >
          and
          <a
            href="https://en.wikipedia.org/wiki/Lady_Mary_Grey"
            title="Lady Mary Grey"
            ><span>Lady Mary</span></a
          >. Through their mother, the three sisters were great-granddaughters
          of
          <a
            href="https://en.wikipedia.org/wiki/Henry_VII_of_England"
            title="Henry VII of England"
            ><span>Henry VII</span></a
          >; grandnieces of Henry VIII; and first cousins once removed of
          <a href="https://en.wikipedia.org/wiki/Edward_VI" title="Edward VI"
            ><span>Edward VI</span></a
          >,
          <a href="https://en.wikipedia.org/wiki/Mary_I" title="Mary I"
            ><span>Mary I</span></a
          >
          and
          <a
            href="https://en.wikipedia.org/wiki/Elizabeth_I"
            title="Elizabeth I"
            ><span>Elizabeth I</span></a
          >.
        </p>
        <p>
          Jane received a humanist education, studying
          <a href="https://en.wikipedia.org/wiki/Latin" title="Latin"
            ><span>Latin</span></a
          >,
          <a
            href="https://en.wikipedia.org/wiki/Greek_language"
            title="Greek language"
            ><span>Greek</span></a
          >
          and
          <a
            href="https://en.wikipedia.org/wiki/Hebrew_language"
            title="Hebrew language"
            ><span>Hebrew</span></a
          >
          with
          <a
            href="https://en.wikipedia.org/wiki/John_Aylmer_(bishop)"
            title="John Aylmer (bishop)"
            ><span>John Aylmer</span></a
          >, and Italian with
          <a
            href="https://en.wikipedia.org/wiki/Michelangelo_Florio"
            title="Michelangelo Florio"
            ><span>Michelangelo Florio</span></a
          >. Through the influence of her father and her tutors, she became a
          committed Protestant and also corresponded with the
          <a href="https://en.wikipedia.org/wiki/Z%C3%BCrich" title="Zürich"
            ><span>Z&uuml;rich</span></a
          >
          reformer
          <a
            href="https://en.wikipedia.org/wiki/Heinrich_Bullinger"
            title="Heinrich Bullinger"
            ><span>Heinrich Bullinger</span></a
          >.
        </p>
        <p>
          Jane preferred book studies to hunting parties<sup
            class="reference"
          ></sup>
          and regarded her strict upbringing, which was typical of the time,<sup
            class="reference"
          ></sup>
          as harsh. To the visiting scholar
          <a href="https://en.wikipedia.org/wiki/Roger_Ascham" title=""
            ><span>Roger Ascham</span></a
          >, who found her reading
          <a href="https://en.wikipedia.org/wiki/Plato" title="Plato"
            ><span>Plato</span></a
          >, she is said to have complained:&nbsp;
        </p>
        <blockquote>
          <p>
            For when I am in the presence either of father or mother, whether I
            speak, keep silence, sit, stand or go, eat, drink, be merry or sad,
            be sewing, playing, dancing, or doing anything else, I must do it as
            it were in such weight, measure and number, even so perfectly as God
            made the world; or else I am so sharply taunted, so cruelly
            threatened, yea presently sometimes with pinches, nips and bobs and
            other ways (which I will not name for the honour I bear them) ...
            that I think myself in hell.
          </p>
        </blockquote>
        <p>
          In early February 1547, Jane was sent to live in the household of
          Edward VI&apos;s uncle,
          <a
            href="https://en.wikipedia.org/wiki/Thomas_Seymour,_1st_Baron_Seymour_of_Sudeley"
            title="Thomas Seymour, 1st Baron Seymour of Sudeley"
            ><span>Thomas Seymour</span></a
          >, who soon married Henry VIII&apos;s widow,
          <a
            href="https://en.wikipedia.org/wiki/Catherine_Parr"
            title="Catherine Parr"
            ><span>Catherine Parr</span></a
          >. Jane lived with the couple at
          <a
            href="https://en.wikipedia.org/wiki/Sudeley_Castle"
            title="Sudeley Castle"
            ><span>Sudeley Castle</span></a
          >
          in
          <a
            href="https://en.wikipedia.org/wiki/Gloucestershire"
            title="Gloucestershire"
            ><span>Gloucestershire</span></a
          >, as an attendant to Catherine, until Catherine&apos;s
          <a
            href="https://en.wikipedia.org/wiki/Death_in_childbirth"
            title="Death in childbirth"
            ><span>death in childbirth</span></a
          >
          in September 1548
        </p>
      </section>

      <section id="marriage">
        <h2>Contracts for marriage</h2>
        <hr />
        <p>
          Lady Jane acted as chief mourner at Catherine Parr&apos;s funeral;
          Thomas Seymour showed continued interest to keep her in his household,
          and she returned there for about two months before he was arrested at
          the end of 1548. Seymour&apos;s brother, the
          <a
            href="https://en.wikipedia.org/wiki/Lord_Protector"
            title="Lord Protector"
            ><span>Lord Protector</span></a
          >,
          <a
            href="https://en.wikipedia.org/wiki/Edward_Seymour,_1st_Duke_of_Somerset"
            title=""
            ><span>Edward Seymour, 1st Duke of Somerset</span></a
          >, felt threatened by Thomas&apos; popularity with the young King
          Edward. Among other things, Thomas Seymour was charged with proposing
          Jane as a bride for the king.
        </p>
        <p>
          In the course of Thomas Seymour&apos;s following
          <a
            href="https://en.wikipedia.org/wiki/Attainder"
            title="William Herbert, 1st Earl of Pembroke (1551 creation)"
            ><span>attainder</span></a
          >
          and execution, Jane&apos;s father was lucky to stay largely out of
          trouble. After his fourth interrogation by the
          <a
            href="https://en.wikipedia.org/wiki/Privy_Council_of_England"
            title="Privy Council of England"
            ><span>King&apos;s Council</span></a
          >, he proposed his daughter Jane as a bride for the Protector&apos;s
          eldest son,
          <a
            href="https://en.wikipedia.org/wiki/Edward_Seymour,_1st_Earl_of_Hertford"
            title="Edward Seymour, 1st Earl of Hertford"
            ><span>Lord Hertford</span></a
          >. Nothing came of this, however, and Jane was not engaged until 25
          May 1553, her bridegroom being
          <a
            href="https://en.wikipedia.org/wiki/Lord_Guildford_Dudley"
            title="Lord Guildford Dudley"
            ><span>Lord Guildford Dudley</span></a
          >, a younger son of
          <a
            href="https://en.wikipedia.org/wiki/John_Dudley,_1st_Duke_of_Northumberland"
            title="Roger Ascham"
            ><span>John Dudley, 1st Duke of Northumberland</span></a
          >. The Duke,
          <a
            href="https://en.wikipedia.org/wiki/Lord_President_of_the_Council"
            title="Lord President of the Council"
            ><span>Lord President</span></a
          >
          of the
          <a
            href="https://en.wikipedia.org/wiki/Privy_council"
            title="Privy council"
            ><span>King&apos;s Council</span></a
          >
          from late 1549, was then the most powerful man in the country.<sup
            class="reference"
          ></sup>
          On 25 May 1553, the couple were married at
          <a
            href="https://en.wikipedia.org/wiki/Durham_House_(London)"
            title="Durham House (London)"
            ><span>Durham House</span></a
          >
          in a triple wedding, in which Jane&apos;s sister
          <a
            href="https://en.wikipedia.org/wiki/Lady_Catherine_Grey"
            title="Lady Catherine Grey"
            ><span>Catherine</span></a
          >
          was matched with the heir of the
          <a
            href="https://en.wikipedia.org/wiki/William_Herbert,_1st_Earl_of_Pembroke_(1551_creation)"
            title=""
            ><span>Earl of Pembroke</span></a
          >,
          <a
            href="https://en.wikipedia.org/wiki/Henry_Herbert,_2nd_Earl_of_Pembroke"
            title="Henry Herbert, 2nd Earl of Pembroke"
            ><span>Lord Herbert</span></a
          >, and another
          <a
            href="https://en.wikipedia.org/wiki/Katherine_Hastings,_Countess_of_Huntingdon"
            title="Katherine Hastings, Countess of Huntingdon"
            ><span>Katherine</span></a
          >, Lord Guildford&apos;s sister, with
          <a
            href="https://en.wikipedia.org/wiki/Henry_Hastings,_3rd_Earl_of_Huntingdon"
            title="Henry Hastings, 3rd Earl of Huntingdon"
            ><span>Henry Hastings</span></a
          >, the
          <a
            href="https://en.wikipedia.org/wiki/Francis_Hastings,_2nd_Earl_of_Huntingdon"
            title="Francis Hastings, 2nd Earl of Huntingdon"
            ><span>Earl of Huntingdon</span></a
          >&apos;s heir.
        </p>
      </section>

      <section id="accession">
        <h2>Claim to the throne and accession</h2>
        <hr />
        <p>
          The Third Succession Act of 1544 restored Henry VIII&apos;s daughters,
          Mary and Elizabeth, to the line of succession, although they were
          still regarded as illegitimate. Furthermore, this Act authorised Henry
          VIII to alter the succession by his will. Henry&apos;s will reinforced
          the succession of his three children, and then declared that, should
          none of them leave descendants, the throne would pass to heirs of his
          younger sister, Mary, which included Jane. For reasons unknown, Henry
          excluded Jane&apos;s mother, Frances Grey, from the succession,<sup
            class="reference"
          ></sup>
          and also bypassed the claims of the descendants of his elder sister,
          <a href="https://en.wikipedia.org/wiki/Margaret_Tudor" title=""
            ><span>Margaret</span></a
          >, who had married into the Scottish royal house and nobility.
        </p>
        <p>
          Both Mary and Elizabeth had been named illegitimate by statute during
          the reign of Henry VIII after his marriages to
          <a
            href="https://en.wikipedia.org/wiki/Catherine_of_Aragon"
            title="Catherine of Aragon"
            ><span>Catherine of Aragon</span></a
          >
          and
          <a
            href="https://en.wikipedia.org/wiki/Anne_Boleyn"
            title="Edward Seymour, 1st Duke of Somerset"
            ><span>Anne Boleyn</span></a
          >
          had been declared void.<sup class="reference"></sup> When the
          15-year-old Edward VI lay dying in the early summer of 1553, his
          Catholic half-sister Mary was still his heir presumptive. However,
          Edward, in a draft will (&quot;My devise for the Succession&quot;)
          composed earlier in 1553, had first restricted the succession to
          (non-existent) male descendants of Frances Brandon and her daughters,
          before he named his Protestant cousin &quot;Lady Jane and her heirs
          male&quot; as his successors, probably in June 1553; the intent was to
          ensure his Protestant legacy, thereby bypassing Mary, who was a Roman
          Catholic. Edward&apos;s decision to name Jane Grey herself was
          possibly instigated by Northumberland.
        </p>
        <p>
          Edward VI personally supervised the copying of his will which was
          finally issued as letters patent on 21 June and signed by 102
          notables, among them the whole
          <a
            href="https://en.wikipedia.org/wiki/Privy_Council"
            title="Privy Council"
            ><span>Privy Council</span></a
          >, peers, bishops, judges, and
          <a
            href="https://en.wikipedia.org/wiki/Court_of_Aldermen"
            title="Court of Aldermen"
            ><span>London aldermen</span></a
          >. Edward also announced to have his &quot;declaration&quot; passed in
          <a
            href="https://en.wikipedia.org/wiki/Parliament_of_England"
            title="Parliament of England"
            ><span>parliament</span></a
          >
          in September, and the necessary
          <a href="https://en.wikipedia.org/wiki/Writs" title="Writs"
            ><span>writs</span></a
          >
          were prepared. The King died on 6 July 1553, but his death was not
          announced until four days later. On 9 July Jane was informed that she
          was now queen, and according to her own later claims, accepted the
          crown only with reluctance. On 10 July, she was officially proclaimed
          Queen of England, France and Ireland after she had taken up secure
          residence in the
          <a
            href="https://en.wikipedia.org/wiki/Tower_of_London"
            title="Tower of London"
            ><span>Tower of London</span></a
          >, where English monarchs customarily resided from the time of
          accession until coronation. Jane refused to name her husband Dudley as
          king, because that would require an
          <a
            href="https://en.wikipedia.org/wiki/Act_of_Parliament"
            title="Act of Parliament"
            ><span>Act of Parliament</span></a
          >. She would agree only to make him
          <a
            href="https://en.wikipedia.org/wiki/Duke_of_Clarence"
            title="Duke of Clarence"
            ><span>Duke of Clarence</span></a
          >.<sup
            class="noprint Inline-Template Template-Fact"
            style="white-space: nowrap"
            >[<em
              ><a
                href="https://en.wikipedia.org/wiki/Wikipedia:Citation_needed"
                title="Wikipedia:Citation needed"
                ><span
                  ><span
                    title="This claim needs references to reliable sources. (April 2018)"
                    >citation needed</span
                  ></span
                ></a
              ></em
            >]</sup
          >
        </p>
        <p>
          Northumberland faced a number of key tasks to consolidate his
          <a
            href="https://en.wikipedia.org/wiki/Political_power"
            title="Political power"
            ><span>power</span></a
          >
          after Edward&apos;s death. Most importantly, he had to isolate and,
          ideally, capture Mary Tudor to prevent her from gathering support. As
          soon as Mary was sure of King Edward&apos;s demise, she left her
          residence at
          <a href="https://en.wikipedia.org/wiki/Hunsdon" title="Hunsdon"
            ><span>Hunsdon</span></a
          >
          and set out to
          <a
            href="https://en.wikipedia.org/wiki/East_Anglia"
            title="East Anglia"
            ><span>East Anglia</span></a
          >, where she began to rally her supporters. Northumberland set out
          from London with troops on 14 July to capture Mary. The
          <a
            href="https://en.wikipedia.org/wiki/Privy_Council_of_England"
            title="Privy Council of England"
            ><span>Privy Council</span></a
          >
          switched their allegiance and proclaimed Mary queen in London, on 19
          July. The historical consensus assumes that this was in recognition of
          overwhelming support of the population for Mary. However, there is no
          clear evidence for that outside Norfolk and Suffolk, where
          Northumberland had put down Kett&apos;s Rebellion, hence, where
          princess Mary sought refuge. Rather, it seems that
          <a
            href="https://en.wikipedia.org/wiki/Henry_FitzAlan,_19th_Earl_of_Arundel"
            title="Henry FitzAlan, 19th Earl of Arundel"
            ><span>Henry FitzAlan, 19th Earl of Arundel</span></a
          >&mdash;whom Northumberland had arrested and detained twice as an ally
          of Somerset, before rehabilitating&mdash;engineered a coup
          d&apos;&eacute;tat in the Privy Council in Northumberland&apos;s
          absence.
        </p>
        <p>
          Jane is often called the Nine-Day Queen, although if her reign is
          dated from the moment of Edward&apos;s death on 6 July 1553, her reign
          could have been a few days longer. On 19 July 1553, Jane was
          imprisoned in the Tower&apos;s Gentleman Gaoler&apos;s (Jailer&apos;s)
          apartments, her husband in the Beauchamp Tower. The Duke of
          Northumberland was executed on 22 August 1553. In September,
          Parliament declared Mary the rightful successor and denounced and
          revoked Jane&apos;s proclamation as that of a usurper.
        </p>
      </section>

      <section id="execution">
        <h2>Trial and execution</h2>
        <hr />
        <p>
          Referred to by the court as Jane Dudley, wife of Guildford, Jane was
          charged with
          <a
            href="https://en.wikipedia.org/wiki/High_treason"
            title="High treason"
            ><span>high treason</span></a
          >, as were her husband, two of his brothers, and the former
          <a
            href="https://en.wikipedia.org/wiki/Archbishop_of_Canterbury"
            title="Margaret Tudor"
            ><span>archbishop of Canterbury</span></a
          >,
          <a
            href="https://en.wikipedia.org/wiki/Thomas_Cranmer"
            title="Thomas Cranmer"
            ><span>Thomas Cranmer</span></a
          >. Their trial, by a special commission, took place on 13 November
          1553, at
          <a
            href="https://en.wikipedia.org/wiki/Guildhall,_London"
            title="Guildhall, London"
            ><span>Guildhall</span></a
          >
          in the
          <a
            href="https://en.wikipedia.org/wiki/City_of_London"
            title="David Starkey"
            ><span>City of London</span></a
          >. The commission was chaired by
          <a
            href="https://en.wikipedia.org/wiki/Thomas_White_(merchant)"
            title="Thomas White (merchant)"
            ><span>Sir Thomas White</span></a
          >,
          <a
            href="https://en.wikipedia.org/wiki/Lord_Mayor_of_London"
            title="Lord Mayor of London"
            ><span>Lord Mayor of London</span></a
          >, and
          <a
            href="https://en.wikipedia.org/wiki/Thomas_Howard,_3rd_Duke_of_Norfolk"
            title="Thomas Howard, 3rd Duke of Norfolk"
            ><span>Thomas Howard, 3rd Duke of Norfolk</span></a
          >. Other members included
          <a
            href="https://en.wikipedia.org/wiki/Edward_Stanley,_3rd_Earl_of_Derby"
            title=""
            ><span>Edward Stanley, 3rd Earl of Derby</span></a
          >
          and
          <a
            href="https://en.wikipedia.org/wiki/John_Bourchier,_2nd_Earl_of_Bath"
            title="John Bourchier, 2nd Earl of Bath"
            ><span>John Bourchier, 2nd Earl of Bath</span></a
          >. As was to be expected, all defendants were found guilty and
          sentenced to death. Jane&apos;s guilt, of having treacherously assumed
          the title and the power of the monarch, was evidenced by a number of
          documents she had signed as &quot;Jane the Quene&quot;. Her sentence
          was to &quot;be burned alive on Tower Hill or beheaded as the Queen
          pleases&quot; (<a
            href="https://en.wikipedia.org/wiki/Execution_by_burning#Historical_usage"
            title="Execution by burning"
            ><span>burning</span></a
          >
          was the
          <a
            href="https://en.wikipedia.org/wiki/Burning_of_women_in_England"
            title="Burning of women in England"
            ><span>traditional English punishment</span></a
          >
          for
          <a href="https://en.wikipedia.org/wiki/Treason" title="Treason"
            ><span>treason</span></a
          >
          committed by women). The
          <a
            href="https://en.wikipedia.org/wiki/List_of_ambassadors_of_the_Kingdom_of_England_to_the_Holy_Roman_Emperor"
            title="List of ambassadors of the Kingdom of England to the Holy Roman Emperor"
            ><span>imperial ambassador</span></a
          >
          reported to
          <a
            href="https://en.wikipedia.org/wiki/Charles_V,_Holy_Roman_Emperor"
            title="Charles V, Holy Roman Emperor"
            ><span>Charles V, Holy Roman Emperor</span></a
          >, that her life was to be spared.
        </p>

        <figure class="img-container-right">
          <img
            class="img-inside-container"
            alt="Official Letter"
            src="../assets/img/open-letterII.png"
          />

          &nbsp;

          <figcaption>
            Official letter of Lady Jane Grey signing herself as &quot;Jane the
            Quene&quot;.
            <a
              href="https://en.wikipedia.org/wiki/Inner_Temple_Library"
              title="Inner Temple Library"
              ><span>Inner Temple Library</span></a
            >, London.
          </figcaption>
        </figure>

        <p>
          The rebellion of
          <a
            href="https://en.wikipedia.org/wiki/Thomas_Wyatt_the_Younger"
            title="Thomas Wyatt the Younger"
            ><span>Thomas Wyatt the Younger</span></a
          >
          in January 1554 against Queen Mary&apos;s marriage plans with
          <a
            href="https://en.wikipedia.org/wiki/Philip_II_of_Spain"
            title="Philip II of Spain"
            ><span>Philip of Spain</span></a
          >
          sealed Jane&apos;s fate. Her father, Henry Grey, 1st Duke of Suffolk,
          and his two brothers joined the rebellion, and so the government
          decided to go through with the verdict against Jane and Guildford.
          Their execution was first scheduled for 9 February 1554, but was then
          postponed for three days to give Jane a chance to convert to the
          Catholic faith. Mary sent her chaplain
          <a
            href="https://en.wikipedia.org/wiki/John_Feckenham"
            title="John Feckenham"
            ><span>John Feckenham</span></a
          >
          to Jane, who was initially not pleased about this.<sup
            class="reference"
          ></sup>
          Though she would not give in to his efforts &quot;to save her
          soul&quot;, she became friends with him and allowed him to accompany
          her to the scaffold.
        </p>
        <p>
          On the morning of 12 February 1554, the authorities took Guildford
          from his rooms at the Tower of London to the public
          <a href="https://en.wikipedia.org/wiki/Execution" title="Execution"
            ><span>execution</span></a
          >
          place at
          <a href="https://en.wikipedia.org/wiki/Tower_Hill" title=""
            ><span>Tower Hill</span></a
          >, where he was beheaded. A horse and cart brought his remains back to
          the Tower, past the rooms where Jane was staying. Seeing her
          husband&apos;s corpse return, Jane is reported to have exclaimed:
          &quot;Oh, Guildford, Guildford.&quot; She was then taken out to
          <a
            href="https://en.wikipedia.org/wiki/Tower_Green"
            title="Tower Green"
            ><span>Tower Green</span></a
          >, inside the Tower, to be beheaded. According to the account of her
          execution given in the anonymous
          <em>Chronicle of Queen Jane and of Two Years of Queen Mary</em>, which
          formed the basis for
          <a
            href="https://en.wikipedia.org/wiki/Raphael_Holinshed"
            title="Raphael Holinshed"
            ><span>Raphael Holinshed</span></a
          >&apos;s depiction, Jane gave a speech upon ascending the scaffold:
        </p>
        <blockquote>
          <p>
            Good people, I am come hither to die, and by a law I am condemned to
            the same. The fact, indeed, against the Queen&apos;s highness was
            unlawful, and the consenting thereunto by me: but touching the
            procurement and desire thereof by me or on my behalf, I do wash my
            hands thereof in innocency, before God, and the face of you, good
            Christian people, this day.
          </p>
        </blockquote>
        <figure class="container-right">
          <img
            src="../assets/img/execution_lady_jane.jpg"
            alt="Lady Jane execution"
          />
          <figcaption>
            <i>The Execution of Lady Grey</i> by French painter Paul Delaroche,
            1833
          </figcaption>
        </figure>
        <p>
          While admitting to action considered unlawful, she declared that
          &quot;I do wash my hands thereof in innocence&quot;. Jane then recited
          <a href="https://en.wikipedia.org/wiki/Psalm_51" title="Psalm 51"
            ><span>Psalm 51</span></a
          >
          (<em>Have mercy upon me, O God</em>) in English, and handed her gloves
          and handkerchief to her maid. The executioner asked her forgiveness,
          which she granted him, pleading: &quot;I pray you dispatch me
          quickly.&quot; Referring to her head, she asked, &quot;Will you take
          it off before I lay me down?&quot;, and the axeman answered: &quot;No,
          madam.&quot; She then blindfolded herself. Jane then failed to find
          the block with her hands, and cried, &quot;What shall I do? Where is
          it?&quot; Probably
          <a
            href="https://en.wikipedia.org/wiki/Thomas_Brydges"
            title="Thomas Brydges"
            ><span>Sir Thomas Brydges</span></a
          >, the Deputy Lieutenant of the Tower, helped her find her way. With
          her head on the block, Jane spoke the last words of Jesus as recounted
          by
          <a
            href="https://en.wikipedia.org/wiki/Gospel_of_Luke"
            title="Gospel of Luke"
            ><span>Luke</span></a
          >: &quot;Lord, into thy hands I commend my spirit!&quot;
        </p>
        <p>
          Jane and Guildford are buried in the Chapel of
          <a
            href="https://en.wikipedia.org/wiki/Church_of_St_Peter_ad_Vincula"
            title=""
            ><span>St Peter ad Vincula</span></a
          >
          on the north side of Tower Green. No memorial stone was erected at
          their grave. Jane&apos;s father, the Duke of Suffolk, was executed 11
          days after Jane, on 23 February 1554 Her mother, the Duchess of
          Suffolk, married her Master of the Horse and
          <a
            href="https://en.wikipedia.org/wiki/Chamberlain_(office)"
            title="Chamberlain (office)"
            ><span>chamberlain</span></a
          >,
          <a
            href="https://en.wikipedia.org/wiki/Adrian_Stokes_(Master_of_Horse)"
            title="Edward Stanley, 3rd Earl of Derby"
            ><span>Adrian Stokes</span></a
          >, in March 1555. She was fully pardoned by Mary and allowed to live
          at Court with her two surviving daughters. She died in 1559.&nbsp;
        </p>
      </section>

      <section id="legacy">
        <h2>Legacy</h2>
        <hr />
        <p>
          &quot;The traitor-heroine of the Reformation&quot;, as historian
          <a
            href="https://en.wikipedia.org/wiki/Albert_Pollard"
            title="Albert Pollard"
            ><span>Albert Pollard</span></a
          >
          called her, was only 16 or 17 years old at the time of her execution.
          During and in the aftermath of the
          <a
            href="https://en.wikipedia.org/wiki/List_of_Protestant_martyrs_of_the_English_Reformation"
            title="List of Protestant martyrs of the English Reformation"
            ><span>Marian persecutions</span></a
          >, Jane became viewed as a Protestant martyr for centuries, featuring
          prominently in the several editions of the
          <em
            ><a
              href="https://en.wikipedia.org/wiki/Book_of_Martyrs"
              title="Church of St Peter ad Vincula"
              ><span>Book of Martyrs</span></a
            ></em
          >
          (<em>Actes and Monuments of these Latter and Perillous Dayes</em>) by
          <a href="https://en.wikipedia.org/wiki/John_Foxe" title="John Foxe"
            ><span>John Foxe</span></a
          >. The tale of Lady Jane grew to legendary proportions in popular
          culture, producing romantic biographies, novels, plays, operas,
          paintings, and films.
        </p>
        <p>
          Jane Grey is the only English monarch in the last 500 years (though
          the legitimacy of her short reign is disputed) of whom no proven
          contemporary portrait survives. A painting in London&apos;s
          <a
            href="https://en.wikipedia.org/wiki/National_Portrait_Gallery_(United_Kingdom)"
            title="National Portrait Gallery (United Kingdom)"
            ><span>National Portrait Gallery</span></a
          >
          was thought to be Jane for many years, but in 1996 it was confirmed to
          be of Catherine Parr. A portrait believed by some experts to be of
          Jane was discovered in a private home in 2005. Painted 40 to 50 years
          after Jane&apos;s death, the &quot;<a
            href="https://en.wikipedia.org/wiki/Streatham_portrait"
            title="Streatham portrait"
            ><span>Streatham portrait</span></a
          >&quot; (so called after the area of London in which it resided for
          decades) depicts a young woman dressed in a red gown, adorned with
          jewels and holding a prayer book. Historian and Tudor specialist
          <a href="https://en.wikipedia.org/wiki/David_Starkey" title=""
            ><span>David Starkey</span></a
          >
          is sceptical, &quot;It&apos;s an appallingly bad picture and
          there&apos;s absolutely no reason to suppose it&apos;s got anything to
          do with Lady Jane Grey.&quot;<sup class="reference"></sup> Another
          portrait, a miniature, was shown to the news media in 2007 by Starkey
          who stated that he was &quot;90 per cent certain&quot; that it is of
          Lady Jane Grey. This painting had been discovered at the
          <a
            href="https://en.wikipedia.org/wiki/Yale_Center_for_British_Art"
            title="Yale Center for British Art"
            ><span>Yale Center for British Art</span></a
          >
          in the United States of America.
        </p>
      </section>
    </article>

    <backToTop></backToTop>
  </div>
  <!-- End .component-container -->
</template>
