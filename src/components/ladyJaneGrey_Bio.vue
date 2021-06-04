<script>
import navbarProgress from "../views/assets/navbarProgress";

export default {
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

.shape-outside {
  float: left;
  width: 300px;
  margin: 10px 10px 10px 0;
  border-radius: 50%;
  -webkit-shape-outside: circle();
  shape-outside: circle();
}

img {
  max-width: 100%;
  height: auto;
  border-radius: 7px;
}

.img-container-right {
  max-width: 400px;
  height: auto;
  float: right;
  margin-top: 10px;
  margin-left: 5px;
  border-radius: 5px;
  text-align: center;
  font-weight: 575;
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
        <div class="img-container-right">
          <img
            src="../assets/img/lady_jane_I.jpg"
            alt="Lady Jane full portrait"
          />
          <p>Famous Portrait Of Lady Jane Grey</p>
        </div>
        <p>
          <strong>Lady Jane Grey</strong> (<abbr title="circa">c.</abbr
          ><span style="white-space: nowrap">&thinsp;1537</span>
          &ndash; 12 February 1554), later known as
          <strong>Lady Jane Dudley</strong> (after her marriage) and as the
          &quot;<strong>Nine Days&apos; Queen</strong>&quot;, was an English
          noblewoman and
          <a href="https://en.wikipedia.org/wiki/De_facto" title="De facto"
            >de facto</a
          >
          Queen of England and Ireland from 10 July until 19 July 1553.
        </p>
        <p>
          Jane was the great-granddaughter of
          <a
            href="https://en.wikipedia.org/wiki/Henry_VII_of_England"
            title="Jane Grey (disambiguation)"
            >Henry VII</a
          >
          through his younger daughter
          <a
            href="https://en.wikipedia.org/wiki/Mary_Tudor,_Queen_of_France"
            title="Mary Tudor, Queen of France"
            >Mary</a
          >, and was a first cousin once removed of
          <a href="https://en.wikipedia.org/wiki/Edward_VI" title=""
            >Edward VI</a
          >. She had an excellent
          <a
            href="https://en.wikipedia.org/wiki/Renaissance_humanism"
            title="Renaissance humanism"
            >humanist</a
          >
          education and a reputation as one of the most learned young women of
          her day. In May 1553, she married
          <a
            href="https://en.wikipedia.org/wiki/Lord_Guildford_Dudley"
            title="Lord Guildford Dudley"
            >Lord Guildford Dudley</a
          >, a younger son of Edward&apos;s chief minister
          <a
            href="https://en.wikipedia.org/wiki/John_Dudley,_Duke_of_Northumberland"
            title="John Dudley, Duke of Northumberland"
            >John Dudley, Duke of Northumberland</a
          >. In June 1553, Edward VI wrote his will, nominating Jane and her
          male heirs as successors to the Crown, in part because his half-sister
          <a
            href="https://en.wikipedia.org/wiki/Mary_I_of_England"
            title="Mary I of England"
            >Mary</a
          >
          was Roman Catholic, while Jane was a committed Protestant and would
          support the reformed
          <a
            href="https://en.wikipedia.org/wiki/Church_of_England"
            title="Church of England"
            >Church of England</a
          >, whose foundation Edward claimed to have laid. The will removed his
          half-sisters, Mary and
          <a
            href="https://en.wikipedia.org/wiki/Elizabeth_I_of_England"
            title="Elizabeth I of England"
            >Elizabeth</a
          >, from the line of succession on account of their illegitimacy,
          subverting their claims under the
          <a
            href="https://en.wikipedia.org/wiki/Third_Succession_Act"
            title="Third Succession Act"
            >Third Succession Act</a
          >.
        </p>
        <p>
          After Edward&apos;s death, Jane was proclaimed queen on 10 July 1553
          and awaited coronation in the
          <a
            href="https://en.wikipedia.org/wiki/Tower_of_London"
            title="Tower of London"
            >Tower of London</a
          >. Support for Mary grew very quickly, and most of Jane&apos;s
          supporters abandoned her. The
          <a
            href="https://en.wikipedia.org/wiki/Privy_Council_of_England"
            title="Privy Council of England"
            >Privy Council of England</a
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
            >Henry Grey, 1st Duke of Suffolk</a
          >, became involved with
          <a
            href="https://en.wikipedia.org/wiki/Wyatt%27s_rebellion"
            title="Wyatt's rebellion"
            >Wyatt&apos;s rebellion</a
          >
          against Queen Mary&apos;s intention to marry
          <a
            href="https://en.wikipedia.org/wiki/Philip_II_of_Spain"
            title="Philip II of Spain"
            >Philip II of Spain</a
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
            >Henry Grey, 1st Duke of Suffolk</a
          >, and his wife,
          <a
            href="https://en.wikipedia.org/wiki/Frances_Grey,_Duchess_of_Suffolk"
            title="Edward VI"
            >Frances</a
          >. The traditional view is that she was born at
          <a
            href="https://en.wikipedia.org/wiki/Bradgate_Park"
            title="Bradgate Park"
            >Bradgate Park</a
          >
          in
          <a
            href="https://en.wikipedia.org/wiki/Leicestershire"
            title="Leicestershire"
            >Leicestershire</a
          >
          in October 1537, while more recent research indicates that she was
          born somewhat earlier, possibly in London, in late 1536 or in the
          spring of 1537. Frances was the elder daughter of
          <a
            href="https://en.wikipedia.org/wiki/King_Henry_VIII"
            title="King Henry VIII"
            >King Henry VIII</a
          >&apos;s younger sister,
          <a
            href="https://en.wikipedia.org/wiki/Mary_Tudor,_Queen_of_France"
            title="Mary Tudor, Queen of France"
            >Mary</a
          >. Jane had two younger sisters:
          <a
            href="https://en.wikipedia.org/wiki/Lady_Katherine_Grey"
            title="Lady Katherine Grey"
            >Lady Katherine</a
          >
          and
          <a
            href="https://en.wikipedia.org/wiki/Lady_Mary_Grey"
            title="Lady Mary Grey"
            >Lady Mary</a
          >. Through their mother, the three sisters were great-granddaughters
          of
          <a
            href="https://en.wikipedia.org/wiki/Henry_VII_of_England"
            title="Henry VII of England"
            >Henry VII</a
          >; grandnieces of Henry VIII; and first cousins once removed of
          <a href="https://en.wikipedia.org/wiki/Edward_VI" title="Edward VI"
            >Edward VI</a
          >,
          <a href="https://en.wikipedia.org/wiki/Mary_I" title="Mary I"
            >Mary I</a
          >
          and
          <a
            href="https://en.wikipedia.org/wiki/Elizabeth_I"
            title="Elizabeth I"
            >Elizabeth I</a
          >.
        </p>
        <p>
          Jane received a humanist education, studying
          <a href="https://en.wikipedia.org/wiki/Latin" title="Latin">Latin</a>,
          <a
            href="https://en.wikipedia.org/wiki/Greek_language"
            title="Greek language"
            >Greek</a
          >
          and
          <a
            href="https://en.wikipedia.org/wiki/Hebrew_language"
            title="Hebrew language"
            >Hebrew</a
          >
          with
          <a
            href="https://en.wikipedia.org/wiki/John_Aylmer_(bishop)"
            title="John Aylmer (bishop)"
            >John Aylmer</a
          >, and Italian with
          <a
            href="https://en.wikipedia.org/wiki/Michelangelo_Florio"
            title="Michelangelo Florio"
            >Michelangelo Florio</a
          >. Through the influence of her father and her tutors, she became a
          committed Protestant and also corresponded with the
          <a href="https://en.wikipedia.org/wiki/Z%C3%BCrich" title="Zürich"
            >Z&uuml;rich</a
          >
          reformer
          <a
            href="https://en.wikipedia.org/wiki/Heinrich_Bullinger"
            title="Heinrich Bullinger"
            >Heinrich Bullinger</a
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
            >Roger Ascham</a
          >, who found her reading
          <a href="https://en.wikipedia.org/wiki/Plato" title="Plato">Plato</a>,
          she is said to have complained:&nbsp;
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
            that I think myself in hell.<sup class="reference"
              ><a
                href="https://en.wikipedia.org/wiki/Lady_Jane_Grey#cite_note-13"
                >[13]</a
              ></sup
            >
          </p>
        </blockquote>
        <p>
          In early February 1547, Jane was sent to live in the household of
          Edward VI&apos;s uncle,
          <a
            href="https://en.wikipedia.org/wiki/Thomas_Seymour,_1st_Baron_Seymour_of_Sudeley"
            title="Thomas Seymour, 1st Baron Seymour of Sudeley"
            >Thomas Seymour</a
          >, who soon married Henry VIII&apos;s widow,
          <a
            href="https://en.wikipedia.org/wiki/Catherine_Parr"
            title="Catherine Parr"
            >Catherine Parr</a
          >. Jane lived with the couple at
          <a
            href="https://en.wikipedia.org/wiki/Sudeley_Castle"
            title="Sudeley Castle"
            >Sudeley Castle</a
          >
          in
          <a
            href="https://en.wikipedia.org/wiki/Gloucestershire"
            title="Gloucestershire"
            >Gloucestershire</a
          >, as an attendant to Catherine, until Catherine&apos;s
          <a
            href="https://en.wikipedia.org/wiki/Death_in_childbirth"
            title="Death in childbirth"
            >death in childbirth</a
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
            >Lord Protector</a
          >,
          <a
            href="https://en.wikipedia.org/wiki/Edward_Seymour,_1st_Duke_of_Somerset"
            title=""
            >Edward Seymour, 1st Duke of Somerset</a
          >, felt threatened by Thomas&apos; popularity with the young King
          Edward. Among other things, Thomas Seymour was charged with proposing
          Jane as a bride for the king.
        </p>
        <p>
          In the course of Thomas Seymour&apos;s following
          <a
            href="https://en.wikipedia.org/wiki/Attainder"
            title="William Herbert, 1st Earl of Pembroke (1551 creation)"
            >attainder</a
          >
          and execution, Jane&apos;s father was lucky to stay largely out of
          trouble. After his fourth interrogation by the
          <a
            href="https://en.wikipedia.org/wiki/Privy_Council_of_England"
            title="Privy Council of England"
            >King&apos;s Council</a
          >, he proposed his daughter Jane as a bride for the Protector&apos;s
          eldest son,
          <a
            href="https://en.wikipedia.org/wiki/Edward_Seymour,_1st_Earl_of_Hertford"
            title="Edward Seymour, 1st Earl of Hertford"
            >Lord Hertford</a
          >. Nothing came of this, however, and Jane was not engaged until 25
          May 1553, her bridegroom being
          <a
            href="https://en.wikipedia.org/wiki/Lord_Guildford_Dudley"
            title="Lord Guildford Dudley"
            >Lord Guildford Dudley</a
          >, a younger son of
          <a
            href="https://en.wikipedia.org/wiki/John_Dudley,_1st_Duke_of_Northumberland"
            title="Roger Ascham"
            >John Dudley, 1st Duke of Northumberland</a
          >. The Duke,
          <a
            href="https://en.wikipedia.org/wiki/Lord_President_of_the_Council"
            title="Lord President of the Council"
            >Lord President</a
          >
          of the
          <a
            href="https://en.wikipedia.org/wiki/Privy_council"
            title="Privy council"
            >King&apos;s Council</a
          >
          from late 1549, was then the most powerful man in the country.<sup
            class="reference"
          ></sup>
          On 25 May 1553, the couple were married at
          <a
            href="https://en.wikipedia.org/wiki/Durham_House_(London)"
            title="Durham House (London)"
            >Durham House</a
          >
          in a triple wedding, in which Jane&apos;s sister
          <a
            href="https://en.wikipedia.org/wiki/Lady_Catherine_Grey"
            title="Lady Catherine Grey"
            >Catherine</a
          >
          was matched with the heir of the
          <a
            href="https://en.wikipedia.org/wiki/William_Herbert,_1st_Earl_of_Pembroke_(1551_creation)"
            title=""
            >Earl of Pembroke</a
          >,
          <a
            href="https://en.wikipedia.org/wiki/Henry_Herbert,_2nd_Earl_of_Pembroke"
            title="Henry Herbert, 2nd Earl of Pembroke"
            >Lord Herbert</a
          >, and another
          <a
            href="https://en.wikipedia.org/wiki/Katherine_Hastings,_Countess_of_Huntingdon"
            title="Katherine Hastings, Countess of Huntingdon"
            >Katherine</a
          >, Lord Guildford&apos;s sister, with
          <a
            href="https://en.wikipedia.org/wiki/Henry_Hastings,_3rd_Earl_of_Huntingdon"
            title="Henry Hastings, 3rd Earl of Huntingdon"
            >Henry Hastings</a
          >, the
          <a
            href="https://en.wikipedia.org/wiki/Francis_Hastings,_2nd_Earl_of_Huntingdon"
            title="Francis Hastings, 2nd Earl of Huntingdon"
            >Earl of Huntingdon</a
          >&apos;s heir.<sup class="reference"
            ><a
              href="https://en.wikipedia.org/wiki/Lady_Jane_Grey#cite_note-21"
            ></a
          ></sup>
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
            >Margaret</a
          >, who had married into the Scottish royal house and nobility.
        </p>
        <p>
          Both Mary and Elizabeth had been named illegitimate by statute during
          the reign of Henry VIII after his marriages to
          <a
            href="https://en.wikipedia.org/wiki/Catherine_of_Aragon"
            title="Catherine of Aragon"
            >Catherine of Aragon</a
          >
          and
          <a
            href="https://en.wikipedia.org/wiki/Anne_Boleyn"
            title="Edward Seymour, 1st Duke of Somerset"
            >Anne Boleyn</a
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
          Catholic.<sup class="reference"
            ><a
              href="https://en.wikipedia.org/wiki/Lady_Jane_Grey#cite_note-Alford_2002_171–172-23"
              >[23]</a
            ></sup
          ><sup class="reference"></sup
          ><sup class="reference"></sup> Edward&apos;s decision to name Jane
          Grey herself was possibly instigated by Northumberland.<sup
            class="reference"
          ></sup
          ><sup class="reference"></sup><sup class="reference"></sup
          ><sup class="reference"
            ><a
              href="https://en.wikipedia.org/wiki/Lady_Jane_Grey#cite_note-auto-31"
              >[31]</a
            ></sup
          >
        </p>
        <p>
          Edward VI personally supervised the copying of his will which was
          finally issued as letters patent on 21 June and signed by 102
          notables, among them the whole
          <a
            href="https://en.wikipedia.org/wiki/Privy_Council"
            title="Privy Council"
            >Privy Council</a
          >, peers, bishops, judges, and
          <a
            href="https://en.wikipedia.org/wiki/Court_of_Aldermen"
            title="Court of Aldermen"
            >London aldermen</a
          >. Edward also announced to have his &quot;declaration&quot; passed in
          <a
            href="https://en.wikipedia.org/wiki/Parliament_of_England"
            title="Parliament of England"
            >parliament</a
          >
          in September, and the necessary
          <a href="https://en.wikipedia.org/wiki/Writs" title="Writs">writs</a>
          were prepared.<sup class="reference"
            ><a
              href="https://en.wikipedia.org/wiki/Lady_Jane_Grey#cite_note-auto-31"
              >[31]</a
            ></sup
          >
          The King died on 6 July 1553, but his death was not announced until
          four days later. On 9 July Jane was informed that she was now queen,
          and according to her own later claims, accepted the crown only with
          reluctance. On 10 July, she was officially proclaimed Queen of
          England, France and Ireland after she had taken up secure residence in
          the
          <a
            href="https://en.wikipedia.org/wiki/Tower_of_London"
            title="Tower of London"
            >Tower of London</a
          >, where English monarchs customarily resided from the time of
          accession until coronation. Jane refused to name her husband Dudley as
          king, because that would require an
          <a
            href="https://en.wikipedia.org/wiki/Act_of_Parliament"
            title="Act of Parliament"
            >Act of Parliament</a
          >.<sup class="reference"
            ><a
              href="https://en.wikipedia.org/wiki/Lady_Jane_Grey#cite_note-Ives_p._189-34"
              >[34]</a
            ></sup
          >
          She would agree only to make him
          <a
            href="https://en.wikipedia.org/wiki/Duke_of_Clarence"
            title="Duke of Clarence"
            >Duke of Clarence</a
          >.<sup
            class="noprint Inline-Template Template-Fact"
            style="white-space: nowrap"
            >[<em
              ><a
                href="https://en.wikipedia.org/wiki/Wikipedia:Citation_needed"
                title="Wikipedia:Citation needed"
                ><span
                  title="This claim needs references to reliable sources. (April 2018)"
                  >citation needed</span
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
            >power</a
          >
          after Edward&apos;s death. Most importantly, he had to isolate and,
          ideally, capture Mary Tudor to prevent her from gathering support. As
          soon as Mary was sure of King Edward&apos;s demise, she left her
          residence at
          <a href="https://en.wikipedia.org/wiki/Hunsdon" title="Hunsdon"
            >Hunsdon</a
          >
          and set out to
          <a
            href="https://en.wikipedia.org/wiki/East_Anglia"
            title="East Anglia"
            >East Anglia</a
          >, where she began to rally her supporters. Northumberland set out
          from London with troops on 14 July to capture Mary. The
          <a
            href="https://en.wikipedia.org/wiki/Privy_Council_of_England"
            title="Privy Council of England"
            >Privy Council</a
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
            >Henry FitzAlan, 19th Earl of Arundel</a
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
            >high treason</a
          >, as were her husband, two of his brothers, and the former
          <a
            href="https://en.wikipedia.org/wiki/Archbishop_of_Canterbury"
            title="Margaret Tudor"
            >archbishop of Canterbury</a
          >,
          <a
            href="https://en.wikipedia.org/wiki/Thomas_Cranmer"
            title="Thomas Cranmer"
            >Thomas Cranmer</a
          >.<sup class="reference"
            ><a
              href="https://en.wikipedia.org/wiki/Lady_Jane_Grey#cite_note-auto1-38"
              >[38]</a
            ></sup
          >
          Their trial, by a special commission, took place on 13 November 1553,
          at
          <a
            href="https://en.wikipedia.org/wiki/Guildhall,_London"
            title="Guildhall, London"
            >Guildhall</a
          >
          in the
          <a
            href="https://en.wikipedia.org/wiki/City_of_London"
            title="David Starkey"
            >City of London</a
          >. The commission was chaired by
          <a
            href="https://en.wikipedia.org/wiki/Thomas_White_(merchant)"
            title="Thomas White (merchant)"
            >Sir Thomas White</a
          >,
          <a
            href="https://en.wikipedia.org/wiki/Lord_Mayor_of_London"
            title="Lord Mayor of London"
            >Lord Mayor of London</a
          >, and
          <a
            href="https://en.wikipedia.org/wiki/Thomas_Howard,_3rd_Duke_of_Norfolk"
            title="Thomas Howard, 3rd Duke of Norfolk"
            >Thomas Howard, 3rd Duke of Norfolk</a
          >. Other members included
          <a
            href="https://en.wikipedia.org/wiki/Edward_Stanley,_3rd_Earl_of_Derby"
            title=""
            >Edward Stanley, 3rd Earl of Derby</a
          >
          and
          <a
            href="https://en.wikipedia.org/wiki/John_Bourchier,_2nd_Earl_of_Bath"
            title="John Bourchier, 2nd Earl of Bath"
            >John Bourchier, 2nd Earl of Bath</a
          >. As was to be expected, all defendants were found guilty and
          sentenced to death. Jane&apos;s guilt, of having treacherously assumed
          the title and the power of the monarch, was evidenced by a number of
          documents she had signed as &quot;Jane the Quene&quot;.<sup
            class="reference"
            ><a
              href="https://en.wikipedia.org/wiki/Lady_Jane_Grey#cite_note-auto1-38"
              >[38]</a
            ></sup
          >
          Her sentence was to &quot;be burned alive on Tower Hill or beheaded as
          the Queen pleases&quot; (<a
            href="https://en.wikipedia.org/wiki/Execution_by_burning#Historical_usage"
            title="Execution by burning"
            >burning</a
          >
          was the
          <a
            href="https://en.wikipedia.org/wiki/Burning_of_women_in_England"
            title="Burning of women in England"
            >traditional English punishment</a
          >
          for
          <a href="https://en.wikipedia.org/wiki/Treason" title="Treason"
            >treason</a
          >
          committed by women). The
          <a
            href="https://en.wikipedia.org/wiki/List_of_ambassadors_of_the_Kingdom_of_England_to_the_Holy_Roman_Emperor"
            title="List of ambassadors of the Kingdom of England to the Holy Roman Emperor"
            >imperial ambassador</a
          >
          reported to
          <a
            href="https://en.wikipedia.org/wiki/Charles_V,_Holy_Roman_Emperor"
            title="Charles V, Holy Roman Emperor"
            >Charles V, Holy Roman Emperor</a
          >, that her life was to be spared.
        </p>

        <div class="img-container-right">
          <img
            alt="Official Letter"
            src="data:image/png;base64,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"
            srcset="
              //upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Lady_Jane_Grey_letter_as_Queen.JPG/255px-Lady_Jane_Grey_letter_as_Queen.JPG 1.5x,
              //upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Lady_Jane_Grey_letter_as_Queen.JPG/340px-Lady_Jane_Grey_letter_as_Queen.JPG 2x
            "
          />

          &nbsp;

          <p>
            Official letter of Lady Jane Grey signing herself as &quot;Jane the
            Quene&quot;.
            <a
              href="https://en.wikipedia.org/wiki/Inner_Temple_Library"
              title="Inner Temple Library"
              >Inner Temple Library</a
            >, London.
          </p>
        </div>

        <p>
          The rebellion of
          <a
            href="https://en.wikipedia.org/wiki/Thomas_Wyatt_the_Younger"
            title="Thomas Wyatt the Younger"
            >Thomas Wyatt the Younger</a
          >
          in January 1554 against Queen Mary&apos;s marriage plans with
          <a
            href="https://en.wikipedia.org/wiki/Philip_II_of_Spain"
            title="Philip II of Spain"
            >Philip of Spain</a
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
            >John Feckenham</a
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
            >execution</a
          >
          place at
          <a href="https://en.wikipedia.org/wiki/Tower_Hill" title=""
            >Tower Hill</a
          >, where he was beheaded. A horse and cart brought his remains back to
          the Tower, past the rooms where Jane was staying. Seeing her
          husband&apos;s corpse return, Jane is reported to have exclaimed:
          &quot;Oh, Guildford, Guildford.&quot; She was then taken out to
          <a
            href="https://en.wikipedia.org/wiki/Tower_Green"
            title="Tower Green"
            >Tower Green</a
          >, inside the Tower, to be beheaded. According to the account of her
          execution given in the anonymous
          <em>Chronicle of Queen Jane and of Two Years of Queen Mary</em>, which
          formed the basis for
          <a
            href="https://en.wikipedia.org/wiki/Raphael_Holinshed"
            title="Raphael Holinshed"
            >Raphael Holinshed</a
          >&apos;s depiction, Jane gave a speech upon ascending the scaffold:
        </p>
        <blockquote>
          <p>
            Good people, I am come hither to die, and by a law I am condemned to
            the same. The fact, indeed, against the Queen&apos;s highness was
            unlawful, and the consenting thereunto by me: but touching the
            procurement and desire thereof by me or on my behalf, I do wash my
            hands thereof in innocency, before God, and the face of you, good
            Christian people, this day.<sup class="reference"
              ><a
                href="https://en.wikipedia.org/wiki/Lady_Jane_Grey#cite_note-ladyjane-44"
                >[44]</a
              ></sup
            >
          </p>
        </blockquote>
        <div class="img-container-right">
          <img
            class="img-container-right"
            src="../assets/img/execution_lady_jane.jpg"
            alt="Lady Jane full portrait"
          />
          <p>
            <i>The Execution of Lady Grey</i> by French painter Paul Delaroche,
            1833
          </p>
        </div>
        <p>
          While admitting to action considered unlawful, she declared that
          &quot;I do wash my hands thereof in innocence&quot;.<sup
            class="reference"
            ><a
              href="https://en.wikipedia.org/wiki/Lady_Jane_Grey#cite_note-45"
            ></a></sup
          ><sup class="reference"
            ><a
              href="https://en.wikipedia.org/wiki/Lady_Jane_Grey#cite_note-46"
            ></a
          ></sup>
          Jane then recited
          <a href="https://en.wikipedia.org/wiki/Psalm_51" title="Psalm 51"
            >Psalm 51</a
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
            >Sir Thomas Brydges</a
          >, the Deputy Lieutenant of the Tower, helped her find her way. With
          her head on the block, Jane spoke the last words of Jesus as recounted
          by
          <a
            href="https://en.wikipedia.org/wiki/Gospel_of_Luke"
            title="Gospel of Luke"
            >Luke</a
          >: &quot;Lord, into thy hands I commend my spirit!&quot;<sup
            class="reference"
            ><a
              href="https://en.wikipedia.org/wiki/Lady_Jane_Grey#cite_note-ladyjane-44"
            ></a
          ></sup>
        </p>
        <p>
          Jane and Guildford are buried in the Chapel of
          <a
            href="https://en.wikipedia.org/wiki/Church_of_St_Peter_ad_Vincula"
            title=""
            >St Peter ad Vincula</a
          >
          on the north side of Tower Green. No memorial stone was erected at
          their grave.<sup class="reference"
            ><a
              href="https://en.wikipedia.org/wiki/Lady_Jane_Grey#cite_note-47"
            ></a
          ></sup>
          Jane&apos;s father, the Duke of Suffolk, was executed 11 days after
          Jane, on 23 February 1554.<sup class="reference"
            ><a
              href="https://en.wikipedia.org/wiki/Lady_Jane_Grey#cite_note-CP-48"
            ></a
          ></sup>
          Her mother, the Duchess of Suffolk, married her Master of the Horse
          and
          <a
            href="https://en.wikipedia.org/wiki/Chamberlain_(office)"
            title="Chamberlain (office)"
            >chamberlain</a
          >,
          <a
            href="https://en.wikipedia.org/wiki/Adrian_Stokes_(Master_of_Horse)"
            title="Edward Stanley, 3rd Earl of Derby"
            >Adrian Stokes</a
          >, in March 1555.<sup class="reference"
            ><a
              href="https://en.wikipedia.org/wiki/Lady_Jane_Grey#cite_note-49"
            ></a
          ></sup>
          She was fully pardoned by Mary and allowed to live at Court with her
          two surviving daughters. She died in 1559.&nbsp;
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
            >Albert Pollard</a
          >
          called her,<sup class="reference"
            ><a
              href="https://en.wikipedia.org/wiki/Lady_Jane_Grey#cite_note-50"
            ></a
          ></sup>
          was only 16 or 17 years old at the time of her execution. During and
          in the aftermath of the
          <a
            href="https://en.wikipedia.org/wiki/List_of_Protestant_martyrs_of_the_English_Reformation"
            title="List of Protestant martyrs of the English Reformation"
            >Marian persecutions</a
          >, Jane became viewed as a Protestant martyr for centuries, featuring
          prominently in the several editions of the
          <em
            ><a
              href="https://en.wikipedia.org/wiki/Book_of_Martyrs"
              title="Church of St Peter ad Vincula"
              >Book of Martyrs</a
            ></em
          >
          (<em>Actes and Monuments of these Latter and Perillous Dayes</em>) by
          <a href="https://en.wikipedia.org/wiki/John_Foxe" title="John Foxe"
            >John Foxe</a
          >. The tale of Lady Jane grew to legendary proportions in popular
          culture, producing romantic biographies, novels, plays, operas,
          paintings, and films.
        </p>
        <p>
          Jane Grey is the only English monarch in the last 500 years (though
          the legitimacy of her short reign is disputed) of whom no proven
          contemporary portrait survives.<sup class="reference"
            ><a
              href="https://en.wikipedia.org/wiki/Lady_Jane_Grey#cite_note-guardian-1"
              >[1]</a
            ></sup
          ><sup class="reference"
            ><a
              href="https://en.wikipedia.org/wiki/Lady_Jane_Grey#cite_note-telegraph-51"
            ></a
          ></sup>
          A painting in London&apos;s
          <a
            href="https://en.wikipedia.org/wiki/National_Portrait_Gallery_(United_Kingdom)"
            title="National Portrait Gallery (United Kingdom)"
            >National Portrait Gallery</a
          >
          was thought to be Jane for many years, but in 1996 it was confirmed to
          be of Catherine Parr.<sup class="reference"
            ><a
              href="https://en.wikipedia.org/wiki/Lady_Jane_Grey#cite_note-yale-52"
              >[52]</a
            ></sup
          >
          A portrait believed by some experts to be of Jane was discovered in a
          private home in 2005. Painted 40 to 50 years after Jane&apos;s death,
          the &quot;<a
            href="https://en.wikipedia.org/wiki/Streatham_portrait"
            title="Streatham portrait"
            >Streatham portrait</a
          >&quot; (so called after the area of London in which it resided for
          decades) depicts a young woman dressed in a red gown, adorned with
          jewels and holding a prayer book.<sup class="reference"
            ><a
              href="https://en.wikipedia.org/wiki/Lady_Jane_Grey#cite_note-guardian-1"
              >[1]</a
            ></sup
          >
          Historian and Tudor specialist
          <a href="https://en.wikipedia.org/wiki/David_Starkey" title=""
            >David Starkey</a
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
            >Yale Center for British Art</a
          >
          in the United States of America.
        </p>
      </section>
    </article>
  </div>
  <!-- End .component-container -->
</template>
