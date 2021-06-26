<script>
import navbarProgress from "../views/assets/navbarProgress.js";
import backToTop from "../components/backToTop.vue";
import navBarScroll from "../views/assets/navBarScroll.js";

export default {
  components: { backToTop },
  mounted() {
    const querySelector = "nav.mary-bio";
    navbarProgress(querySelector);
    navBarScroll(querySelector);
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
    <nav class="mary-bio">
      <ul>
        <li data-name="intro"><a href="#intro">Intro</a></li>
        <li data-name="birth"><a href="#birth">Birth and family</a></li>
        <li data-name="childhood"><a href="#childhood">Childhood</a></li>
        <li data-name="adolescence"><a href="#adolescence">Adolesence</a></li>
        <li data-name="adulthood"><a href="#adulthood">Adulthood</a></li>
        <li data-name="accession"><a href="#accession">Accesion</a></li>
        <li data-name="reign">
          <a href="#reign">Reign</a>
          <ul>
            <li data-name="marriage">
              <a href="#marriage">Spanish Marriage</a>
            </li>
            <li data-name="pregnancy">
              <a href="#pregnancy">False Pregnancy</a>
            </li>
            <li data-name="religious-policy">
              <a href="#religious-policy">Religious Policy</a>
            </li>
            <li data-name="foreign-policy">
              <a href="#foreign-policy">Foreign policy</a>
            </li>
            <li data-name="commerce">
              <a href="#commerce">Commerce and revenue</a>
            </li>
          </ul>
        </li>
        <li data-name="death"><a href="#death">Death</a></li>
        <li data-name="legacy"><a href="#legacy">Legacy</a></li>
      </ul>
      <svg xmlns="http://www.w3.org/2000/svg">
        <path />
      </svg>
    </nav>

    <article id="top">
      <section id="intro">
        <h2>Intro</h2>
        <figure class="img-container-right">
          <img
            class="img-inside-container"
            src="../assets/img/maryTheFirst.jpg"
            alt="Mary the I"
          />
          <figcaption>Portrait by Antonis Mor, 1554</figcaption>
        </figure>
        <p>
          <strong>Mary I</strong> (18 February 1516 &ndash; 17 November 1558),
          also known as <strong>Mary Tudor</strong>, and as &quot;<strong
            >Bloody Mary</strong
          >&quot; by her
          <a href="https://en.wikipedia.org/wiki/Protestant" title="Protestant"
            ><span>Protestant</span></a
          >
          opponents, was
          <a
            href="https://en.wikipedia.org/wiki/List_of_English_monarchs"
            title="List of English monarchs"
            ><span>Queen of England</span></a
          >
          and Ireland from July 1553 until her death in 1558. She is best known
          for her vigorous attempt to reverse the
          <a
            href="https://en.wikipedia.org/wiki/English_Reformation"
            title="English Reformation"
            ><span>English Reformation</span></a
          >, which had begun during the reign of her father,
          <a
            href="https://en.wikipedia.org/wiki/Henry_VIII_of_England"
            title="Henry VIII of England"
            ><span>Henry VIII</span></a
          >. Her attempt to restore to the church the property confiscated in
          the previous two reigns was largely thwarted by
          <a
            href="https://en.wikipedia.org/wiki/List_of_parliaments_of_England#Parliaments_of_Mary_I"
            title="List of parliaments of England"
            ><span>parliament</span></a
          >, but during her five-year reign, Mary had over 280 religious
          dissenters
          <a
            href="https://en.wikipedia.org/wiki/Death_by_burning"
            title="Death by burning"
            ><span>burned at the stake</span></a
          >
          in the
          <a
            href="https://en.wikipedia.org/wiki/Marian_persecutions"
            title="Marian persecutions"
            ><span>Marian persecutions</span></a
          >.
        </p>
        <p>
          Mary was the only child of Henry VIII by his first wife,
          <a
            href="https://en.wikipedia.org/wiki/Catherine_of_Aragon"
            title="Catherine of Aragon"
            ><span>Catherine of Aragon</span></a
          >, to survive to adulthood. Her younger half-brother,
          <a href="https://en.wikipedia.org/wiki/Edward_VI" title="Edward VI"
            ><span>Edward VI</span></a
          >, succeeded their father in 1547 at the age of nine. When Edward
          became mortally ill in 1553, he attempted to remove Mary from the line
          of succession because he supposed, correctly, that she would reverse
          the Protestant reforms that had taken place during his reign. Upon his
          death, leading politicians proclaimed
          <a
            href="https://en.wikipedia.org/wiki/Lady_Jane_Grey"
            title="Lady Jane Grey"
            ><span>Lady Jane Grey</span></a
          >
          as queen. Mary speedily assembled a force in
          <a
            href="https://en.wikipedia.org/wiki/East_Anglia"
            title="East Anglia"
            ><span>East Anglia</span></a
          >
          and deposed Jane, who was ultimately beheaded. Mary
          was&mdash;excluding the disputed reigns of Jane and the
          <a
            href="https://en.wikipedia.org/wiki/Empress_Matilda"
            title="Empress Matilda"
            ><span>Empress Matilda</span></a
          >&mdash;the first
          <a
            href="https://en.wikipedia.org/wiki/Queen_regnant"
            title="Queen regnant"
            ><span>queen regnant</span></a
          >
          of England. In 1554, Mary married
          <a
            href="https://en.wikipedia.org/wiki/Philip_II_of_Spain"
            title="Philip II of Spain"
            ><span>Philip of Spain</span></a
          >, becoming
          <a
            href="https://en.wikipedia.org/wiki/Queen_consort"
            title="Queen consort"
            ><span>queen consort</span></a
          >
          of
          <a
            href="https://en.wikipedia.org/wiki/Habsburg_Spain"
            title="Habsburg Spain"
            ><span>Habsburg Spain</span></a
          >
          on his accession in 1556.
        </p>
        <p>
          After Mary&apos;s death in 1558, her re-establishment of Roman
          Catholicism was
          <a
            href="https://en.wikipedia.org/wiki/Elizabethan_Religious_Settlement"
            title="Elizabethan Religious Settlement"
            ><span>reversed</span></a
          >
          by her younger half-sister and successor,
          <a
            href="https://en.wikipedia.org/wiki/Elizabeth_I_of_England"
            title="Elizabeth I of England"
            ><span>Elizabeth I</span></a
          >.&nbsp;
        </p>
      </section>
      <section id="birth">
        <h2>Birth and family</h2>
        <p>
          Mary was born on 18 February 1516 at the
          <a
            href="https://en.wikipedia.org/wiki/Palace_of_Placentia"
            title="Palace of Placentia"
            ><span>Palace of Placentia</span></a
          >
          in
          <a
            href="https://en.wikipedia.org/wiki/Greenwich,_England"
            title="Greenwich, England"
            ><span>Greenwich, England</span></a
          >. She was the only child of
          <a
            href="https://en.wikipedia.org/wiki/Henry_VIII_of_England"
            title="Henry VIII of England"
            ><span>King Henry VIII</span></a
          >
          and his first wife
          <a
            href="https://en.wikipedia.org/wiki/Catherine_of_Aragon"
            title="Catherine of Aragon"
            ><span>Catherine of Aragon</span></a
          >
          to survive infancy. Her mother had suffered many miscarriages.<sup
            class="reference"
          ></sup>
          Before Mary&apos;s birth, four previous pregnancies had resulted in a
          <a href="https://en.wikipedia.org/wiki/Stillborn" title="Stillborn"
            ><span>stillborn</span></a
          >
          daughter and three short-lived or stillborn sons, including
          <a
            href="https://en.wikipedia.org/wiki/Henry,_Duke_of_Cornwall"
            title="Henry, Duke of Cornwall"
            ><span>Henry, Duke of Cornwall</span></a
          >.
        </p>
        <p>
          Mary was baptised into the Catholic faith at the Church of the
          Observant Friars in Greenwich three days after her birth.<sup
            class="reference"
          ></sup>
          Her godparents included
          <a
            href="https://en.wikipedia.org/wiki/Lord_Chancellor"
            title="Mary, Queen of Scots"
            ><span>Lord Chancellor</span></a
          >
          <a
            href="https://en.wikipedia.org/wiki/Thomas_Wolsey"
            title="Thomas Wolsey"
            ><span>Thomas Wolsey</span></a
          >, her great-aunt
          <a
            href="https://en.wikipedia.org/wiki/Catherine_of_York"
            title="Catherine of York"
            ><span>Catherine of York, Countess of Devon</span></a
          >, and
          <a
            href="https://en.wikipedia.org/wiki/Agnes_Howard,_Duchess_of_Norfolk"
            title="Agnes Howard, Duchess of Norfolk"
            ><span>Agnes Howard, Duchess of Norfolk</span></a
          >. Henry VIII&apos;s cousin, once removed,
          <a
            href="https://en.wikipedia.org/wiki/Margaret_Pole,_Countess_of_Salisbury"
            title="Margaret Pole, Countess of Salisbury"
            ><span>Margaret Pole, Countess of Salisbury</span></a
          >, stood sponsor for Mary&apos;s
          <a
            href="https://en.wikipedia.org/wiki/Confirmation"
            title="Confirmation"
            ><span>confirmation</span></a
          >, which was conducted immediately after the baptism.<sup
            class="reference"
          ></sup>
          The following year, Mary became a godmother herself when she was named
          as one of the sponsors of her cousin
          <a
            href="https://en.wikipedia.org/wiki/Frances_Grey,_Duchess_of_Suffolk"
            title=""
            ><span>Frances Brandon</span></a
          >. In 1520, the Countess of Salisbury was appointed Mary&apos;s
          <a href="https://en.wikipedia.org/wiki/Governess" title="Governess"
            ><span>governess</span></a
          >.
          <a
            href="https://en.wikipedia.org/wiki/John_Hussey,_1st_Baron_Hussey_of_Sleaford"
            title="John Hussey, 1st Baron Hussey of Sleaford"
            ><span>Sir John Hussey</span></a
          >, later Lord Hussey, was her
          <a
            href="https://en.wikipedia.org/wiki/Chamberlain_(office)"
            title="Chamberlain (office)"
            ><span>chamberlain</span></a
          >
          from 1530, and his wife, Lady Anne, daughter of
          <a
            href="https://en.wikipedia.org/wiki/George_Grey,_2nd_Earl_of_Kent"
            title="George Grey, 2nd Earl of Kent"
            ><span>George Grey, 2nd Earl of Kent</span></a
          >, was one of Mary&apos;s attendants
        </p>
      </section>
      <section id="childhood">
        <h2>Childhood</h2>

        <p>
          Mary was a precocious child. In July 1520, when scarcely four and a
          half years old, she entertained a visiting French delegation with a
          performance on the virginals (a type of harpsichord). A great part of
          her early education came from her mother, who consulted the Spanish
          humanist Juan Luis Vives for advice and commissioned him to write De
          Institutione Feminae Christianae, a treatise on the education of
          girls. By the age of nine, Mary could read and write Latin. She
          studied French, Spanish, music, dance, and perhaps Greek. Henry VIII
          doted on his daughter and boasted to the Venetian ambassador Sebastian
          Giustiniani that Mary never cried. Mary had a fair complexion with
          pale blue eyes and red or reddish-golden hair. She was ruddy-cheeked,
          a trait she inherited from her father.
        </p>
        <p>
          Despite his affection for Mary, Henry was deeply disappointed that his
          marriage had produced no sons. By the time Mary was nine years old, it
          was apparent that Henry and Catherine would have no more children,
          leaving Henry without a legitimate male heir. In 1525, Henry sent Mary
          to the border of Wales to preside, presumably in name only, over the
          Council of Wales and the Marches. She was given her own court based at
          Ludlow Castle and many of the royal prerogatives normally reserved for
          a Prince of Wales. Vives and others called her the Princess of Wales,
          although she was never technically invested with the title. She
          appears to have spent three years in the Welsh Marches, making regular
          visits to her father's court, before returning permanently to the home
          counties around London in mid-1528.
        </p>
        <p>
          Throughout Mary's childhood, Henry negotiated potential future
          marriages for her. When she was only two years old, she was promised
          to Francis, the infant son of King Francis I of France, but the
          contract was repudiated after three years. In 1522, at the age of six,
          she was instead contracted to marry her 22-year-old first cousin, Holy
          Roman Emperor Charles V. However, the engagement was broken off within
          a few years by Charles with Henry's agreement. Cardinal Wolsey,
          Henry's chief adviser, then resumed marriage negotiations with the
          French, and Henry suggested that Mary marry the Dauphin's father, King
          Francis I himself, who was eager for an alliance with England. A
          marriage treaty was signed which provided that Mary marry either
          Francis I or his second son Henry, Duke of Orleans, but Wolsey secured
          an alliance with France without the marriage. In 1528 Wolsey's agent
          Thomas Magnus discussed the idea of her marriage to her cousin James V
          of Scotland with the Scottish diplomat Adam Otterburn.
        </p>
        <p>
          According to the Venetian Mario Savorgnano, by this time Mary was
          developing into a pretty, well-proportioned young lady with a fine
          complexion
        </p>
      </section>
      <section id="adolescence">
        <h2>Adolescence</h2>

        <p>
          Meanwhile, the marriage of Mary&apos;s parents was in jeopardy.
          Disappointed at the lack of a male heir, and eager to remarry, Henry
          attempted to have his marriage to Catherine
          <a
            href="https://en.wikipedia.org/wiki/Annulment"
            title="Republic of Venice"
            ><span>annulled</span></a
          >, but
          <a
            href="https://en.wikipedia.org/wiki/Pope_Clement_VII"
            title="Pope Clement VII"
            ><span>Pope Clement VII</span></a
          >
          refused his request. Henry claimed, citing biblical passages (<a
            href="https://en.wikipedia.org/wiki/Book_of_Leviticus"
            title="Book of Leviticus"
            ><span>Leviticus</span></a
          >
          20:21), that his marriage to Catherine was unclean because she was the
          widow of his brother
          <a
            href="https://en.wikipedia.org/wiki/Arthur,_Prince_of_Wales"
            title="Arthur, Prince of Wales"
            ><span>Arthur</span></a
          >
          (Mary&apos;s uncle). Catherine claimed that her marriage to Arthur was
          never
          <a href="https://en.wikipedia.org/wiki/Consummate" title="Consummate"
            ><span>consummated</span></a
          >
          and so was not a valid marriage. Her first marriage had been annulled
          by a previous pope,
          <a
            href="https://en.wikipedia.org/wiki/Pope_Julius_II"
            title="Pope Julius II"
            ><span>Julius II</span></a
          >, on that basis. Clement may have been reluctant to act because he
          was influenced by Charles V, Catherine&apos;s nephew and Mary&apos;s
          former betrothed, whose troops had
          <a
            href="https://en.wikipedia.org/wiki/Sack_of_Rome_(1527)"
            title="Sack of Rome (1527)"
            ><span>surrounded and occupied Rome</span></a
          >
          in the
          <a
            href="https://en.wikipedia.org/wiki/War_of_the_League_of_Cognac"
            title="War of the League of Cognac"
            ><span>War of the League of Cognac</span></a
          >.
        </p>
        <p>
          From 1531, Mary was often sick with irregular menstruation and
          depression, although it is not clear whether this was caused by
          stress, puberty or a more deep-seated disease.<sup
            class="reference"
          ></sup>
          She was not permitted to see her mother, whom Henry had sent to live
          away from court. In early 1533, Henry married
          <a
            href="https://en.wikipedia.org/wiki/Anne_Boleyn"
            title="Anne Boleyn"
            ><span>Anne Boleyn</span></a
          >, who was pregnant with his child, and in May,
          <a
            href="https://en.wikipedia.org/wiki/Thomas_Cranmer"
            title="Thomas Cranmer"
            ><span>Thomas Cranmer</span></a
          >, the
          <a
            href="https://en.wikipedia.org/wiki/Archbishop_of_Canterbury"
            title="Archbishop of Canterbury"
            ><span>Archbishop of Canterbury</span></a
          >, formally declared the marriage with Catherine void and the marriage
          to Anne valid. Henry repudiated the Pope&apos;s authority, declaring
          himself Supreme Head of the
          <a
            href="https://en.wikipedia.org/wiki/Church_of_England"
            title="Church of England"
            ><span>Church of England</span></a
          >. Catherine was demoted to Dowager Princess of Wales (a title she
          would have held as Arthur&apos;s widow), and Mary was deemed
          illegitimate. She was styled &quot;The Lady Mary&quot; rather than
          Princess, and her place in the line of succession was transferred to
          her newborn half-sister,
          <a
            href="https://en.wikipedia.org/wiki/Elizabeth_I_of_England"
            title="Elizabeth I of England"
            ><span>Elizabeth</span></a
          >, Anne&apos;s daughter.<sup class="reference"></sup> Mary&apos;s
          household was dissolved; her servants (including the Countess of
          Salisbury) were dismissed and, in December 1533, she was sent to join
          the household of the infant Elizabeth at
          <a
            href="https://en.wikipedia.org/wiki/Hatfield,_Hertfordshire"
            title="Hatfield, Hertfordshire"
            ><span>Hatfield, Hertfordshire</span></a
          >.
        </p>
        <p>
          Mary determinedly refused to acknowledge that Anne was the queen or
          that Elizabeth was a princess, further enraging King Henry.<sup
            class="reference"
          ></sup>
          Under strain and with her movements restricted, Mary was frequently
          ill, which the royal physician attributed to her &quot;ill
          treatment&quot;. The Imperial ambassador
          <a href="https://en.wikipedia.org/wiki/Eustace_Chapuys" title=""
            ><span>Eustace Chapuys</span></a
          >
          became her close adviser, and interceded, unsuccessfully, on her
          behalf at court.<sup class="reference"></sup> The relationship between
          Mary and her father worsened; they did not speak to each other for
          three years.<sup class="reference"></sup> Although both she and her
          mother were ill, Mary was refused permission to visit Catherine.<sup
            class="reference"
          ></sup>
          When Catherine died in 1536, Mary was &quot;inconsolable&quot;.<sup
            class="reference"
          ></sup>
          Catherine was interred in
          <a
            href="https://en.wikipedia.org/wiki/Peterborough_Cathedral"
            title="Peterborough Cathedral"
            ><span>Peterborough Cathedral</span></a
          >, while Mary grieved in semi-seclusion at
          <a href="https://en.wikipedia.org/wiki/Hunsdon" title="Hunsdon"
            ><span>Hunsdon</span></a
          >
          in Hertfordshire
        </p>
      </section>
      <section id="adulthood">
        <h2>Adulthood</h2>

        <p>
          In 1536, Queen Anne fell from the king's favour and was beheaded.
          Elizabeth, like Mary, was declared illegitimate and stripped of her
          succession rights. Within two weeks of Anne's execution, Henry married
          Jane Seymour, who urged her husband to make peace with Mary. Henry
          insisted that Mary recognise him as head of the Church of England,
          repudiate papal authority, acknowledge that the marriage between her
          parents was unlawful, and accept her own illegitimacy. She attempted
          to reconcile with him by submitting to his authority as far as "God
          and my conscience" permitted, but was eventually bullied into signing
          a document agreeing to all of Henry's demands. Reconciled with her
          father, Mary resumed her place at court. Henry granted her a
          household, which included the reinstatement of Mary's favourite, Susan
          Clarencieux. Mary's privy purse expenses for this period show that
          Hatfield House, the Palace of Beaulieu (also called Newhall), Richmond
          and Hunsdon were among her principal places of residence, as well as
          Henry's palaces at Greenwich, Westminster and Hampton Court. Her
          expenses included fine clothes and gambling at cards, one of her
          favourite pastimes. Rebels in the North of England, including Lord
          Hussey, Mary's former chamberlain, campaigned against Henry's
          religious reforms, and one of their demands was that Mary be made
          legitimate. The rebellion, known as the Pilgrimage of Grace, was
          ruthlessly suppressed. Along with other rebels, Hussey was executed,
          but there is no suggestion that Mary was directly involved. The next
          year, 1537, Jane died after giving birth to a son, Edward. Mary was
          made godmother to her half-brother and acted as chief mourner at the
          queen's funeral.
        </p>

        <figure class="img-container-left">
          <img
            class="img-inside-container"
            src="../assets/img/adult_mary.jpg"
            alt="Mary as Young Adult"
          />
          <figcaption>Mary as a young woman in 1544</figcaption>
        </figure>

        <p>
          Mary was courted by Duke Philip of Bavaria from late 1539, but he was
          Lutheran and his suit for her hand was unsuccessful. Over 1539, the
          king's chief minister, Thomas Cromwell, negotiated a potential
          alliance with the Duchy of Cleves. Suggestions that Mary marry the
          Duke of Cleves, who was the same age, came to nothing, but a match
          between Henry and the Duke's sister Anne was agreed. When the king saw
          Anne for the first time in late December 1539, a week before the
          scheduled wedding, he found her unattractive but was unable, for
          diplomatic reasons and without a suitable pretext, to cancel the
          marriage. Cromwell fell from favour and was arrested for treason in
          June 1540; one of the unlikely charges against him was that he had
          plotted to marry Mary himself. Anne consented to the annulment of the
          marriage, which had not been consummated, and Cromwell was beheaded.
        </p>
        <p>
          1541, Henry had the Countess of Salisbury, Mary's old governess and
          godmother, executed on the pretext of a Catholic plot in which her son
          Reginald Pole was implicated. Her executioner was "a wretched and
          blundering youth" who "literally hacked her head and shoulders to
          pieces". In 1542, following the execution of Henry's fifth wife,
          Catherine Howard, the unmarried Henry invited Mary to attend the royal
          Christmas festivities. At court, while her father was between
          marriages and thus without a consort, Mary acted as hostess. In 1543,
          Henry married his sixth and last wife, Catherine Parr, who was able to
          bring the family closer together. Henry returned Mary and Elizabeth to
          the line of succession, through the Act of Succession 1544, placing
          them after Edward. But both remained legally illegitimate.
        </p>
        <p>
          Henry VIII died in 1547, and Edward succeeded him. Mary inherited
          estates in Norfolk, Suffolk and Essex, and was granted Hunsdon and
          Beaulieu as her own. Since Edward was still a child, rule passed to a
          regency council dominated by Protestants, who attempted to establish
          their faith throughout the country. For example, the Act of Uniformity
          1549 prescribed Protestant rites for church services, such as the use
          of Thomas Cranmer's Book of Common Prayer. Mary remained faithful to
          Roman Catholicism and defiantly celebrated traditional Mass in her own
          chapel. She appealed to her cousin Emperor Charles V to apply
          diplomatic pressure demanding that she be allowed to practise her
          religion.
        </p>
        <p>
          For most of Edward's reign, Mary remained on her own estates and
          rarely attended court. A plan between May and July 1550 to smuggle her
          out of England to the safety of the European mainland came to nothing.
          Religious differences between Mary and Edward continued. When Mary was
          in her thirties, she attended a reunion with Edward and Elizabeth for
          Christmas 1550, where the 13-year-old Edward embarrassed Mary, and
          reduced both her and himself to tears in front of the court, by
          publicly reproving her for ignoring his laws regarding worship. Mary
          repeatedly refused Edward's demands that she abandon Catholicism, and
          Edward persistently refused to drop his demands.
        </p>
      </section>
      <section id="accession">
        <h2>Accession</h2>
        <p>
          On 6 July 1553, at the age of 15, Edward VI died of a lung infection,
          possibly tuberculosis. He did not want the crown to go to Mary because
          he feared she would restore Catholicism and undo his and their
          father&apos;s reforms, and so he planned to exclude her from the line
          of succession. His advisers told him that he could not disinherit only
          one of his half-sisters: he would have to disinherit Elizabeth as
          well, even though she was a Protestant. Guided by
          <a
            href="https://en.wikipedia.org/wiki/John_Dudley,_1st_Duke_of_Northumberland"
            title="John Dudley, 1st Duke of Northumberland"
            ><span>John Dudley, 1st Duke of Northumberland</span></a
          >, and perhaps others, Edward excluded both from the line of
          succession in his will.
        </p>
        <p>
          Contradicting the
          <a
            href="https://en.wikipedia.org/wiki/Third_Succession_Act"
            title="Third Succession Act"
            ><span>Succession Act</span></a
          >, which restored Mary and Elizabeth to the line of succession, Edward
          named Dudley&apos;s daughter-in-law
          <a
            href="https://en.wikipedia.org/wiki/Lady_Jane_Grey"
            title="Lady Jane Grey"
            ><span>Lady Jane Grey</span></a
          >, the granddaughter of Henry VIII&apos;s younger sister
          <a
            href="https://en.wikipedia.org/wiki/Mary_Tudor,_Queen_of_France"
            title="Mary Tudor, Queen of France"
            ><span>Mary</span></a
          >, as his successor. Lady Jane&apos;s mother was
          <a
            href="https://en.wikipedia.org/wiki/Frances_Grey,_Duchess_of_Suffolk"
            title="Frances Grey, Duchess of Suffolk"
            ><span>Frances Brandon</span></a
          >, Mary&apos;s cousin and goddaughter. Just before Edward VI&apos;s
          death, Mary was summoned to London to visit her dying brother, but was
          warned that the summons was a pretext on which to capture her and
          thereby facilitate Jane&apos;s accession to the throne.<sup
            class="reference"
          ></sup>
          Therefore, instead of heading to London from her residence at Hunsdon,
          Mary fled to
          <a
            href="https://en.wikipedia.org/wiki/East_Anglia"
            title="East Anglia"
            ><span>East Anglia</span></a
          >, where she owned extensive estates and Dudley had ruthlessly put
          down
          <a
            href="https://en.wikipedia.org/wiki/Kett%27s_Rebellion"
            title="Kett's Rebellion"
            ><span>Kett&apos;s Rebellion</span></a
          >. Many adherents to the Catholic faith, opponents of Dudley&apos;s,
          lived there. On 9 July, from
          <a
            href="https://en.wikipedia.org/wiki/Kenninghall"
            title="Kenninghall"
            ><span>Kenninghall</span></a
          >, Norfolk, she wrote to the privy council with orders for her
          proclamation as Edward&apos;s successor.
        </p>
        <p>
          On 10 July 1553, Lady Jane was proclaimed queen by Dudley and his
          supporters, and on the same day Mary&apos;s letter to the council
          arrived in London. By 12 July, Mary and her supporters had assembled a
          military force at
          <a
            href="https://en.wikipedia.org/wiki/Framlingham_Castle"
            title="Framlingham Castle"
            ><span>Framlingham Castle</span></a
          >, Suffolk.<sup class="reference"></sup> Dudley&apos;s support
          collapsed,<sup class="reference"></sup> and Jane was deposed on 19
          July. She and Dudley were imprisoned in the
          <a
            href="https://en.wikipedia.org/wiki/Tower_of_London"
            title="Tower of London"
            ><span>Tower of London</span></a
          >. Mary rode triumphantly into London on 3 August 1553, on a wave of
          popular support. She was accompanied by her half-sister Elizabeth and
          a procession of over 800 nobles and gentlemen
        </p>
      </section>
      <section id="reign">
        <h2>Reign</h2>
        <hr />
        <p>
          One of Mary&apos;s first actions as queen was to order the release of
          the Roman Catholic
          <a
            href="https://en.wikipedia.org/wiki/Thomas_Howard,_3rd_Duke_of_Norfolk"
            title="Thomas Howard, 3rd Duke of Norfolk"
            ><span>Duke of Norfolk</span></a
          >
          and
          <a
            href="https://en.wikipedia.org/wiki/Stephen_Gardiner"
            title="Stephen Gardiner"
            ><span>Stephen Gardiner</span></a
          >
          from imprisonment in the Tower of London, as well as her kinsman
          <a
            href="https://en.wikipedia.org/wiki/Edward_Courtenay,_1st_Earl_of_Devon_(1553_creation)"
            title="Edward Courtenay, 1st Earl of Devon (1553 creation)"
            ><span>Edward Courtenay</span></a
          >. Mary understood that the young Lady Jane was essentially a pawn in
          Dudley&apos;s scheme, and Dudley was the only conspirator of rank
          executed for
          <a
            href="https://en.wikipedia.org/wiki/High_treason"
            title="High treason"
            ><span>high treason</span></a
          >
          in the immediate aftermath of the coup. Lady Jane and her husband,
          <a href="https://en.wikipedia.org/wiki/Lord_Guildford_Dudley" title=""
            ><span>Lord Guildford Dudley</span></a
          >, though found guilty, were kept under guard in the Tower rather than
          immediately executed, while Lady Jane&apos;s father,
          <a
            href="https://en.wikipedia.org/wiki/Henry_Grey,_1st_Duke_of_Suffolk"
            title="Lord Chancellor"
            ><span>Henry Grey, 1st Duke of Suffolk</span></a
          >, was released. Mary was left in a difficult position, as almost all
          the
          <a
            href="https://en.wikipedia.org/wiki/Privy_Council_of_England"
            title="Privy Council of England"
            ><span>Privy Counsellors</span></a
          >
          had been implicated in the plot to put Lady Jane on the throne.<sup
            class="reference"
          ></sup>
          She appointed Gardiner to the council and made him both
          <a
            href="https://en.wikipedia.org/wiki/Bishop_of_Winchester"
            title="Mistress of the Robes"
            ><span>Bishop of Winchester</span></a
          >
          and
          <a href="https://en.wikipedia.org/wiki/Lord_Chancellor" title=""
            ><span>Lord Chancellor</span></a
          >, offices he held until his death in November 1555.
          <a href="https://en.wikipedia.org/wiki/Susan_Clarencieux" title=""
            ><span>Susan Clarencieux</span></a
          >
          became
          <a href="https://en.wikipedia.org/wiki/Mistress_of_the_Robes" title=""
            ><span>Mistress of the Robes</span></a
          >. On 1 October 1553, Gardiner
          <a
            href="https://en.wikipedia.org/wiki/Coronation_of_the_British_monarch"
            title="Coronation of the British monarch"
            ><span>crowned</span></a
          >
          Mary at
          <a
            href="https://en.wikipedia.org/wiki/Westminster_Abbey"
            title="Westminster Abbey"
            ><span>Westminster Abbey</span></a
          >.
        </p>
        <section id="marriage">
          <h3>Spanish marriage</h3>
          <p>
            Now aged 37, Mary turned her attention to finding a husband and
            producing an heir, which would prevent the Protestant Elizabeth
            (still next-in-line under the terms of
            <a
              href="https://en.wikipedia.org/wiki/Henry_VIII%27s_will"
              title="Henry VIII's will"
              ><span>Henry VIII&apos;s will</span></a
            >
            and the
            <a
              href="https://en.wikipedia.org/wiki/Act_of_Succession_of_1544"
              title=""
              ><span>Act of Succession of 1544</span></a
            >) from succeeding to the throne. Edward Courtenay and Reginald Pole
            were both mentioned as prospective suitors, but her cousin Charles V
            suggested she marry his only son,
            <a
              href="https://en.wikipedia.org/wiki/Philip_II_of_Spain"
              title="Philip II of Spain"
              ><span>Prince Philip of Spain</span></a
            >. Philip had a
            <a
              href="https://en.wikipedia.org/wiki/Charles,_Prince_of_Asturias"
              title="Charles, Prince of Asturias"
              ><span>son</span></a
            >
            from a previous marriage and was heir apparent to vast territories
            in Continental Europe and the New World. As part of the marriage
            negotiations, a portrait of Philip, by
            <a href="https://en.wikipedia.org/wiki/Titian" title="Titian"
              ><span>Titian</span></a
            >, was sent to her in the latter half of 1553.
          </p>
          <figure class="img-container-left">
            <img
              class="img-inside-container"
              src="../assets/img/Philip_II.jpg"
              alt="Philip of Spain"
            />
            <figcaption>Philip of Spain by Titian</figcaption>
          </figure>
          <p>
            Lord Chancellor Gardiner and the
            <a
              href="https://en.wikipedia.org/wiki/House_of_Commons_of_England"
              title="House of Commons of England"
              ><span>House of Commons</span></a
            >
            unsuccessfully petitioned her to consider marrying an Englishman,
            fearing that England would be relegated to a dependency of the
            <a href="https://en.wikipedia.org/wiki/Habsburg" title="Habsburg"
              ><span>Habsburgs</span></a
            >. The marriage was unpopular with the English; Gardiner and his
            allies opposed it on the basis of patriotism, while Protestants were
            motivated by a fear of Catholicism. When Mary insisted on marrying
            Philip, insurrections broke out.
            <a
              href="https://en.wikipedia.org/wiki/Thomas_Wyatt_the_younger"
              title="Thomas Wyatt the younger"
              ><span>Thomas Wyatt the younger</span></a
            >
            led a force from
            <a href="https://en.wikipedia.org/wiki/Kent" title="Kent"
              ><span>Kent</span></a
            >
            to depose Mary in favour of Elizabeth, as part of a wider conspiracy
            now known as
            <a
              href="https://en.wikipedia.org/wiki/Wyatt%27s_rebellion"
              title="Wyatt's rebellion"
              ><span>Wyatt&apos;s rebellion</span></a
            >, which also involved the
            <a
              href="https://en.wikipedia.org/wiki/Henry_Grey,_1st_Duke_of_Suffolk"
              title="Henry Grey, 1st Duke of Suffolk"
              ><span>Duke of Suffolk</span></a
            >, Lady Jane&apos;s father.<sup class="reference"></sup> Mary
            declared publicly that she would summon Parliament to discuss the
            marriage and if Parliament decided that the marriage was not to the
            kingdom&apos;s advantage, she would refrain from pursuing it.<sup
              class="reference"
            ></sup>
            On reaching London, Wyatt was defeated and captured. Wyatt, the Duke
            of Suffolk, Lady Jane, and her husband
            <a
              href="https://en.wikipedia.org/wiki/Guildford_Dudley"
              title="Guildford Dudley"
              ><span>Guildford Dudley</span></a
            >
            were executed. Courtenay, who was implicated in the plot, was
            imprisoned and then exiled. Elizabeth, though protesting her
            innocence in the Wyatt affair, was imprisoned in the Tower of London
            for two months, then put under house arrest at
            <a
              href="https://en.wikipedia.org/wiki/Woodstock_Palace"
              title="Woodstock Palace"
              ><span>Woodstock Palace</span></a
            >.
          </p>
          <p>
            Mary was&mdash;excluding the brief, disputed reigns of the
            <a
              href="https://en.wikipedia.org/wiki/Empress_Matilda"
              title="Empress Matilda"
              ><span>Empress Matilda</span></a
            >
            and Lady Jane Grey&mdash;England&apos;s first
            <a
              href="https://en.wikipedia.org/wiki/Queen_regnant"
              title="Queen regnant"
              ><span>queen regnant</span></a
            >. Further, under the English common law doctrine of
            <em
              ><a
                href="https://en.wikipedia.org/wiki/Jure_uxoris"
                title="Jure uxoris"
                ><span>jure uxoris</span></a
              ></em
            >, the property and titles belonging to a woman became her
            husband&apos;s upon marriage, and it was feared that any man she
            married would thereby become King of England in fact and name.<sup
              class="reference"
            ></sup>
            While Mary&apos;s grandparents
            <a
              href="https://en.wikipedia.org/wiki/Ferdinand_and_Isabella"
              title="Ferdinand and Isabella"
              ><span>Ferdinand and Isabella</span></a
            >
            had retained sovereignty of their respective realms during their
            marriage, there was no precedent to follow in England.<sup
              class="reference"
            ></sup>
            Under the terms of
            <a
              href="https://en.wikipedia.org/wiki/Act_for_the_Marriage_of_Queen_Mary_to_Philip_of_Spain"
              title="Act for the Marriage of Queen Mary to Philip of Spain"
              ><span>Queen Mary&apos;s Marriage Act</span></a
            >, Philip was to be styled &quot;King of England&quot;, all official
            documents (including
            <a
              href="https://en.wikipedia.org/wiki/Act_of_Parliament"
              title="Act of Parliament"
              ><span>Acts of Parliament</span></a
            >) were to be dated with both their names, and Parliament was to be
            called under the joint authority of the couple, for Mary&apos;s
            lifetime only. England would not be obliged to provide military
            support to Philip&apos;s father in any war, and Philip could not act
            without his wife&apos;s consent or appoint foreigners to office in
            England.<sup class="reference"></sup> Philip was unhappy with these
            conditions but ready to agree for the sake of securing the marriage.
            He had no amorous feelings for Mary and sought the marriage for its
            political and strategic gains; his aide
            <a
              href="https://en.wikipedia.org/wiki/Ruy_G%C3%B3mez_de_Silva"
              title="Ruy Gómez de Silva"
              ><span>Ruy G&oacute;mez de Silva</span></a
            >
            wrote to a correspondent in Brussels, &quot;the marriage was
            concluded for no fleshly consideration, but in order to remedy the
            disorders of this kingdom and to preserve the
            <a
              href="https://en.wikipedia.org/wiki/Low_Countries"
              title="Low Countries"
              ><span>Low Countries</span></a
            >.&quot;
          </p>
          <p>
            To elevate his son to Mary&apos;s rank, Emperor Charles V ceded to
            Philip the crown of Naples as well as his claim to the
            <a
              href="https://en.wikipedia.org/wiki/Kingdom_of_Jerusalem"
              title="Kingdom of Jerusalem"
              ><span>Kingdom of Jerusalem</span></a
            >. Mary thus became Queen of Naples and titular Queen of Jerusalem
            upon marriage. Their wedding at
            <a
              href="https://en.wikipedia.org/wiki/Winchester_Cathedral"
              title="Winchester Cathedral"
              ><span>Winchester Cathedral</span></a
            >
            on 25 July 1554 took place just two days after their first meeting.
            Philip could not speak English, and so they spoke a mixture of
            Spanish, French, and Latin
          </p>
        </section>
        <section id="pregnancy">
          <h3>False pregnancy</h3>

          <p>
            In September 1554, Mary stopped menstruating. She gained weight, and
            felt nauseated in the mornings. For these reasons, almost the
            entirety of her court, including her doctors, believed she was
            pregnant. Parliament passed an
            <a
              href="https://en.wikipedia.org/wiki/Treason_Act_1554"
              title="Treason Act 1554"
              ><span>act making Philip regent</span></a
            >
            in the event of Mary&apos;s death in childbirth.<sup
              class="reference"
            ></sup>
            In the last week of April 1555, Elizabeth was released from house
            arrest, and called to court as a witness to the birth, which was
            expected imminently.<sup class="reference"></sup> According to
            Giovanni Michieli, the Venetian ambassador, Philip may have planned
            to marry Elizabeth in the event of Mary&apos;s death in childbirth,
            but in a letter to his brother-in-law,
            <a
              href="https://en.wikipedia.org/wiki/Maximilian_II,_Holy_Roman_Emperor"
              title="Guildford Dudley"
              ><span>Maximilian of Austria</span></a
            >, Philip expressed uncertainty as to whether his wife was pregnant.
          </p>
          <p>
            Thanksgiving services in the
            <a href="https://en.wikipedia.org/wiki/Diocese_of_London" title=""
              ><span>diocese of London</span></a
            >
            were held at the end of April after false rumours that Mary had
            given birth to a son spread across Europe.<sup
              class="reference"
            ></sup>
            Through May and June, the apparent delay in delivery fed gossip that
            Mary was not pregnant.
            <a
              href="https://en.wikipedia.org/wiki/Susan_Clarencieux"
              title="Susan Clarencieux"
              ><span>Susan Clarencieux</span></a
            >
            revealed her doubts to the French ambassador,
            <a
              href="https://en.wikipedia.org/wiki/Antoine_de_Noailles"
              title="Antoine de Noailles"
              ><span>Antoine de Noailles</span></a
            >.<sup class="reference"></sup> Mary continued to exhibit signs of
            pregnancy until July 1555, when her abdomen receded. Michieli
            dismissively ridiculed the pregnancy as more likely to &quot;end in
            wind rather than anything else&quot;. It was most likely a
            <a
              href="https://en.wikipedia.org/wiki/False_pregnancy"
              title="False pregnancy"
              ><span>false pregnancy</span></a
            >, perhaps induced by Mary&apos;s overwhelming desire to have a
            child.<sup class="reference"></sup> In August, soon after the
            disgrace of the false pregnancy, which Mary considered
            &quot;God&apos;s punishment&quot; for her having &quot;tolerated
            heretics&quot; in her realm, Philip left England to command his
            armies against France in
            <a href="https://en.wikipedia.org/wiki/Flanders" title="Flanders"
              ><span>Flanders</span></a
            >. Mary was heartbroken and fell into a deep depression. Michieli
            was touched by the queen&apos;s grief; he wrote she was
            &quot;extraordinarily in love&quot; with her husband and
            disconsolate at his departure.
          </p>
          <p>
            Elizabeth remained at court until October, apparently restored to
            favour. In the absence of any children, Philip was concerned that
            one of the next claimants to the English throne after his
            sister-in-law was the
            <a
              href="https://en.wikipedia.org/wiki/Mary,_Queen_of_Scots"
              title="Mary, Queen of Scots"
              ><span>Queen of Scots</span></a
            >, who was betrothed to the
            <a
              href="https://en.wikipedia.org/wiki/Francis_II_of_France"
              title="Francis II of France"
              ><span>Dauphin of France</span></a
            >. Philip persuaded his wife that Elizabeth should marry his cousin
            <a
              href="https://en.wikipedia.org/wiki/Emmanuel_Philibert,_Duke_of_Savoy"
              title="Emmanuel Philibert, Duke of Savoy"
              ><span>Emmanuel Philibert, Duke of Savoy</span></a
            >, to secure the Catholic succession and preserve the Habsburg
            interest in England, but Elizabeth refused to comply and
            parliamentary consent was unlikely.
          </p>
        </section>
        <section id="religious-policy">
          <h3>Religious policy</h3>

          <figure class="img-container-right">
            <img
              class="img-inside-container"
              src="../assets/img/gold_coin_mary.png"
              alt="Gold coin image of Mary"
            />
            <figcaption>
              Gold medal showing Mary as "Defender of the Faith", 1555
            </figcaption>
          </figure>

          <p>
            In the month following her accession, Mary issued a proclamation
            that she would not compel any of her subjects to follow her
            religion, but by the end of September 1553, leading Protestant
            churchmen&mdash;including Cranmer,
            <a
              href="https://en.wikipedia.org/wiki/John_Bradford"
              title="John Bradford"
              ><span>John Bradford</span></a
            >,
            <a
              href="https://en.wikipedia.org/wiki/John_Rogers_(Bible_editor_and_martyr)"
              title="John Rogers (Bible editor and martyr)"
              ><span>John Rogers</span></a
            >,
            <a
              href="https://en.wikipedia.org/wiki/John_Hooper_(bishop)"
              title="John Hooper (bishop)"
              ><span>John Hooper</span></a
            >, and
            <a
              href="https://en.wikipedia.org/wiki/Hugh_Latimer"
              title="Hugh Latimer"
              ><span>Hugh Latimer</span></a
            >&mdash;were imprisoned. Mary&apos;s first Parliament, which
            assembled in early October, declared her parents&apos; marriage
            valid and
            <a
              href="https://en.wikipedia.org/wiki/First_Statute_of_Repeal"
              title="First Statute of Repeal"
              ><span>abolished Edward&apos;s religious laws</span></a
            >. Church doctrine was restored to the form it had taken in the 1539
            <a
              href="https://en.wikipedia.org/wiki/Six_Articles_(1539)"
              title="Six Articles (1539)"
              ><span>Six Articles</span></a
            >
            of Henry VIII, which (among other things) reaffirmed clerical
            celibacy. Married priests were deprived of their
            <a href="https://en.wikipedia.org/wiki/Benefice" title="Benefice"
              ><span>benefices</span></a
            >.
          </p>
          <p>
            Mary had always rejected the break with Rome her father instituted
            and the establishment of Protestantism by her brother&apos;s
            regents. Philip persuaded Parliament to
            <a
              href="https://en.wikipedia.org/wiki/Second_Statute_of_Repeal"
              title="Second Statute of Repeal"
              ><span>repeal Henry&apos;s religious laws</span></a
            >, returning the English church to Roman jurisdiction. Reaching an
            agreement took many months and Mary and
            <a
              href="https://en.wikipedia.org/wiki/Pope_Julius_III"
              title="Pope Julius III"
              ><span>Pope Julius III</span></a
            >
            had to make a major concession: the
            <a
              href="https://en.wikipedia.org/wiki/Dissolution_of_the_Monasteries"
              title="Dissolution of the Monasteries"
              ><span>confiscated</span></a
            >
            monastery lands were not returned to the church but remained in the
            hands of their influential new owners. By the end of 1554, the pope
            had approved the deal, and the
            <a
              href="https://en.wikipedia.org/wiki/Revival_of_the_Heresy_Acts"
              title="Revival of the Heresy Acts"
              ><span>Heresy Acts were revived</span></a
            >.
          </p>
          <p>
            Around 800 rich Protestants, including
            <a
              href="https://en.wikipedia.org/wiki/John_Foxe"
              title="Emmanuel Philibert, Duke of Savoy"
              ><span>John Foxe</span></a
            >, fled into
            <a
              href="https://en.wikipedia.org/wiki/Marian_exiles"
              title="Marian exiles"
              ><span>exile</span></a
            >.<sup class="reference"></sup> Those who stayed and persisted in
            publicly proclaiming their beliefs became targets of heresy laws.
            The first executions occurred over five days in February 1555: John
            Rogers on 4 February,
            <a
              href="https://en.wikipedia.org/wiki/Laurence_Saunders"
              title="Laurence Saunders"
              ><span>Laurence Saunders</span></a
            >
            on 8 February, and
            <a
              href="https://en.wikipedia.org/wiki/Rowland_Taylor"
              title="Rowland Taylor"
              ><span>Rowland Taylor</span></a
            >
            and John Hooper on 9 February. Cranmer, the imprisoned
            <a
              href="https://en.wikipedia.org/wiki/Archbishop_of_Canterbury"
              title=""
              ><span>archbishop of Canterbury</span></a
            >, was forced to watch Bishops
            <a
              href="https://en.wikipedia.org/wiki/Nicholas_Ridley_(martyr)"
              title="Nicholas Ridley (martyr)"
              ><span>Ridley</span></a
            >
            and
            <a
              href="https://en.wikipedia.org/wiki/Hugh_Latimer"
              title="Hugh Latimer"
              ><span>Latimer</span></a
            >
            being burned at the stake. He recanted, repudiated Protestant
            theology, and rejoined the Catholic faith.<sup
              class="reference"
            ></sup>
            Under the normal process of the law, he should have been absolved as
            a repentant, but Mary refused to reprieve him. On the day of his
            burning, he dramatically withdrew his recantation.<sup
              class="reference"
            ></sup>
            In total, 283 were executed, most by burning.<sup
              class="reference"
            ></sup>
            The burnings proved so unpopular that even
            <a
              href="https://en.wikipedia.org/wiki/Alfonso_de_Castro"
              title="Alfonso de Castro"
              ><span>Alfonso de Castro</span></a
            >, one of Philip&apos;s own ecclesiastical staff, condemned them<sup
              class="reference"
            ></sup>
            and another adviser,
            <a
              href="https://en.wikipedia.org/wiki/Simon_Renard"
              title="Simon Renard"
              ><span>Simon Renard</span></a
            >, warned him that such &quot;cruel enforcement&quot; could
            &quot;cause a revolt&quot;.<sup class="reference"></sup> Mary
            persevered with the policy, which continued until her death and
            exacerbated anti-Catholic and anti-Spanish feeling among the English
            people. The victims became lauded as
            <a
              href="https://en.wikipedia.org/wiki/List_of_Protestant_martyrs_of_the_English_Reformation"
              title="List of Protestant martyrs of the English Reformation"
              ><span>martyrs</span></a
            >.
          </p>
          <p>
            <a
              href="https://en.wikipedia.org/wiki/Reginald_Pole"
              title="Reginald Pole"
              ><span>Reginald Pole</span></a
            >, the son of Mary&apos;s executed governess, arrived as papal
            legate in November 1554. He was ordained a priest and appointed
            Archbishop of Canterbury immediately after Cranmer&apos;s execution
            in March 1556.
          </p>
        </section>
        <section id="foreign-policy">
          <h3>Foreign policy</h3>
          <p>
            Furthering the
            <a
              href="https://en.wikipedia.org/wiki/Tudor_conquest_of_Ireland"
              title="Tudor conquest of Ireland"
              ><span>Tudor conquest of Ireland</span></a
            >, under Mary and Philip&apos;s reign English colonists were settled
            in the
            <a
              href="https://en.wikipedia.org/wiki/Irish_Midlands"
              title="Irish Midlands"
              ><span>Irish Midlands</span></a
            >.
            <a
              href="https://en.wikipedia.org/wiki/County_Laois"
              title="County Laois"
              ><span>Queen&apos;s</span></a
            >
            and
            <a
              href="https://en.wikipedia.org/wiki/County_Offaly"
              title="County Offaly"
              ><span>King&apos;s Counties</span></a
            >
            (now Counties Laois and Offaly) were founded, and their
            <a
              href="https://en.wikipedia.org/wiki/Plantations_of_Ireland"
              title="Plantations of Ireland"
              ><span>plantation</span></a
            >
            began. Their principal towns were respectively named Maryborough
            (now
            <a
              href="https://en.wikipedia.org/wiki/Portlaoise"
              title="Portlaoise"
              ><span>Portlaoise</span></a
            >) and Philipstown (now
            <a href="https://en.wikipedia.org/wiki/Daingean" title="Daingean"
              ><span>Daingean</span></a
            >).
          </p>
          <p>
            In January 1556, Mary&apos;s father-in-law the Emperor abdicated.
            Mary and Philip were still apart; he was declared King of Spain in
            Brussels, but she stayed in England. Philip negotiated an unsteady
            truce with the French in February 1556. The next month, the French
            ambassador in England,
            <a
              href="https://en.wikipedia.org/wiki/Antoine_de_Noailles"
              title="Antoine de Noailles"
              ><span>Antoine de Noailles</span></a
            >, was implicated in a plot against Mary when Sir
            <a
              href="https://en.wikipedia.org/wiki/Henry_Sutton_Dudley"
              title="Henry Sutton Dudley"
              ><span>Henry Dudley</span></a
            >, a second cousin of the executed
            <a
              href="https://en.wikipedia.org/wiki/John_Dudley,_1st_Duke_of_Northumberland"
              title=""
              ><span>Duke of Northumberland</span></a
            >, attempted to assemble an invasion force in France. The plot,
            known as the Dudley conspiracy, was betrayed, and the conspirators
            in England were rounded up. Dudley remained in exile in France, and
            Noailles prudently left Britain.
          </p>
          <p>
            Philip returned to England from March to July 1557 to persuade Mary
            to support Spain in a
            <a
              href="https://en.wikipedia.org/wiki/Italian_War_of_1551%E2%80%9359"
              title="Italian War of 1551–59"
              ><span>renewed war against France</span></a
            >. Mary was in favour of declaring war, but her councillors opposed
            it because French trade would be jeopardised, it contravened the
            foreign war provisions of the marriage treaty, and a bad economic
            legacy from Edward VI&apos;s reign and a series of poor harvests
            meant England lacked supplies and finances.<sup
              class="reference"
            ></sup>
            War was only declared in June 1557 after Reginald Pole&apos;s
            nephew,
            <a
              href="https://en.wikipedia.org/wiki/Thomas_Stafford_(rebel)"
              title="Thomas Stafford (rebel)"
              ><span>Thomas Stafford</span></a
            >, invaded England and seized
            <a
              href="https://en.wikipedia.org/wiki/Scarborough_Castle"
              title="Scarborough Castle"
              ><span>Scarborough Castle</span></a
            >
            with French help, in a failed attempt to depose Mary.<sup
              class="reference"
            ></sup>
            As a result of the war, relations between England and the Papacy
            became strained, since
            <a href="https://en.wikipedia.org/wiki/Pope_Paul_IV" title=""
              ><span>Pope Paul IV</span></a
            >
            was allied with
            <a
              href="https://en.wikipedia.org/wiki/Henry_II_of_France"
              title="Henry II of France"
              ><span>Henry II of France</span></a
            >. In August, English forces were victorious in the aftermath of the
            <a
              href="https://en.wikipedia.org/wiki/Battle_of_St._Quentin_(1557)"
              title="Battle of St. Quentin (1557)"
              ><span>Battle of Saint Quentin</span></a
            >, with one eyewitness reporting, &quot;Both sides fought most
            choicely, and the English best of all.&quot;<sup
              class="reference"
            ></sup>
            Celebrations were brief, as in January 1558 French forces
            <a
              href="https://en.wikipedia.org/wiki/Siege_of_Calais_(1558)"
              title="Siege of Calais (1558)"
              ><span>took Calais</span></a
            >, England&apos;s sole remaining possession on the European
            mainland. Although the territory was financially burdensome, its
            loss was a mortifying blow to the queen&apos;s prestige.<sup
              class="reference"
            ></sup>
            According to
            <a
              href="https://en.wikipedia.org/wiki/Holinshed%27s_Chronicles"
              title="Archbishop of Canterbury"
              ><span>Holinshed&apos;s Chronicles</span></a
            >, Mary later lamented, &quot;When I am dead and opened, you shall
            find &apos;Calais&apos; lying in my heart&quot;, although this may
            be apocryphal
          </p>
        </section>
        <section id="commerce">
          <h3>Commerce and revenue</h3>

          <p>
            The years of Mary's reign were consistently wet. The persistent rain
            and flooding led to famine. Another problem was the decline of the
            Antwerp cloth trade. Despite Mary's marriage to Philip, England did
            not benefit from Spain's enormously lucrative trade with the New
            World. The mercantilist Spanish guarded their trade routes
            jealously, and Mary could not condone English smuggling or piracy
            against her husband. In an attempt to increase trade and rescue the
            English economy, Mary's counsellors continued Northumberland's
            policy of seeking out new commercial opportunities. She granted a
            royal charter to the Muscovy Company under governor Sebastian Cabot,
            and commissioned a world atlas from Diogo Homem. Adventurers such as
            John Lok and William Towerson sailed south in an attempt to develop
            links with the coast of Africa.
          </p>

          <figure class="img-container-right">
            <img
              class="img-inner-container"
              src="../assets/img/mary_shilling.png"
              alt="Mary shilling"
            />
            <figcaption>Mary shilling</figcaption>
          </figure>

          <p>
            Financially, Mary's regime tried to reconcile a modern form of
            government—with correspondingly higher spending—with a medieval
            system of collecting taxation and dues. Mary retained the Edwardian
            appointee William Paulet, 1st Marquess of Winchester, as Lord High
            Treasurer and assigned him to oversee the revenue collection system.
            A failure to apply new tariffs to new forms of imports meant that a
            key source of revenue was neglected. To solve this, Mary's
            government published a revised "Book of Rates" (1558), which listed
            the tariffs and duties for every import. This publication was not
            extensively reviewed until 1604.
          </p>
          <p>
            English coinage was debased under both Henry VIII and Edward VI.
            Mary drafted plans for currency reform but they were not implemented
            until after her death.
          </p>
        </section>
      </section>
      <section id="death">
        <h2>Death</h2>

        <p>
          After Philip&apos;s visit in 1557, Mary again thought she was
          pregnant, with a baby due in March 1558. She decreed in her will that
          her husband would be the regent during the minority of their
          child.<sup class="reference"></sup> But no child was born, and Mary
          was forced to accept that her half-sister Elizabeth would be her
          lawful successor.
        </p>
        <p>
          Mary was weak and ill from May 1558. In pain, possibly from
          <a
            href="https://en.wikipedia.org/wiki/Ovarian_cyst"
            title="Ovarian cyst"
            ><span>ovarian cysts</span></a
          >
          or
          <a
            href="https://en.wikipedia.org/wiki/Uterine_cancer"
            title="Uterine cancer"
            ><span>uterine cancer</span></a
          >, she died on 17 November 1558, aged 42, at
          <a
            href="https://en.wikipedia.org/wiki/St_James%27s_Palace"
            title="St James's Palace"
            ><span>St James&apos;s Palace</span></a
          >, during an
          <a href="https://en.wikipedia.org/wiki/Influenza" title="Influenza"
            ><span>influenza</span></a
          >
          epidemic that also claimed Pole&apos;s life later that day. She was
          succeeded by Elizabeth. Philip, who was in Brussels, wrote to his
          sister
          <a
            href="https://en.wikipedia.org/wiki/Joan_of_Austria,_Princess_of_Portugal"
            title="Joan of Austria, Princess of Portugal"
            ><span>Joan</span></a
          >: &quot;I felt a reasonable regret for her death.&quot;<sup
            class="reference"
          ></sup>
        </p>
        <p>
          Although Mary&apos;s will stated that she wished to be buried next to
          her mother, she was interred in
          <a
            href="https://en.wikipedia.org/wiki/Westminster_Abbey"
            title="Westminster Abbey"
            ><span>Westminster Abbey</span></a
          >
          on 14 December, in a tomb she eventually shared with Elizabeth. The
          inscription on their tomb, affixed there by
          <a
            href="https://en.wikipedia.org/wiki/James_I_of_England"
            title="James I of England"
            ><span>James I</span></a
          >
          when he succeeded Elizabeth, is
          <em
            >Regno consortes et urna, hic obdormimus Elizabetha et Maria
            sorores, in spe resurrectionis</em
          >
          (&quot;Consorts in realm and tomb, we sisters Elizabeth and Mary here
          lie down to sleep in hope of the resurrection&quot;).
        </p>
      </section>

      <section id="legacy">
        <h2>Legacy</h2>

        <p>
          At her funeral service,
          <a
            href="https://en.wikipedia.org/wiki/John_White_(bishop)"
            title="John White (bishop)"
            ><span>John White</span></a
          >,
          <a
            href="https://en.wikipedia.org/wiki/Bishop_of_Winchester"
            title="Bishop of Winchester"
            ><span>bishop of Winchester</span></a
          >, praised Mary: &quot;She was a king&apos;s daughter; she was a
          king&apos;s sister; she was a king&apos;s wife. She was a queen, and
          by the same title a king also.&quot;<sup class="reference"></sup> She
          was the first woman to successfully claim the throne of England,
          despite competing claims and determined opposition, and enjoyed
          popular support and sympathy during the earliest parts of her reign,
          especially from the Roman Catholics of England.<sup
            class="reference"
          ></sup>
        </p>
        <p>
          Protestant writers at the time, and since, have often condemned
          Mary&apos;s reign. By the 17th century, the memory of her religious
          persecutions had led to the adoption of her
          <a href="https://en.wikipedia.org/wiki/Sobriquet" title="Sobriquet"
            ><span>sobriquet</span></a
          >
          &quot;Bloody Mary&quot;.
          <a href="https://en.wikipedia.org/wiki/John_Knox" title="John Knox"
            ><span>John Knox</span></a
          >
          attacked her in his
          <em
            ><a
              href="https://en.wikipedia.org/wiki/The_First_Blast_of_the_Trumpet_Against_the_Monstrous_Regiment_of_Women"
              title="The First Blast of the Trumpet Against the Monstrous Regiment of Women"
              ><span
                >First Blast of the Trumpet against the Monstrous Regiment of
                Women</span
              ></a
            ></em
          >
          (1558), and she was prominently vilified in
          <em
            ><a
              href="https://en.wikipedia.org/wiki/Actes_and_Monuments"
              title="Actes and Monuments"
              ><span>Actes and Monuments</span></a
            ></em
          >
          (1563), by
          <a href="https://en.wikipedia.org/wiki/John_Foxe" title="John Foxe"
            ><span>John Foxe</span></a
          >. Foxe&apos;s book remained popular throughout the following
          centuries and helped shape enduring perceptions of Mary as a
          bloodthirsty tyrant.<sup class="reference"></sup> Historian Lucy
          Wooding notes misogynistic undertones in descriptions of Mary.
          &quot;She&apos;s simultaneously being lambasted for being
          &apos;vindictive and fierce&apos; and &apos;spineless and weak&apos;,
          criticized for such actions as showing clemency to political prisoners
          and yielding authority to her husband.&quot;
        </p>
        <p>
          Mary is remembered in the 21st century for her vigorous efforts to
          restore the primacy of Roman Catholicism in England after the rise of
          Protestant influence during the previous reigns. Protestant historians
          have long deplored her reign, emphasizing that in just five years she
          burned several hundred Protestants at the stake. In the mid-20th
          century,
          <a
            href="https://en.wikipedia.org/wiki/H._F._M._Prescott"
            title="H. F. M. Prescott"
            ><span>H. F. M. Prescott</span></a
          >
          attempted to redress the tradition that Mary was intolerant and
          authoritarian, and scholarship since then has tended to view the
          older, simpler assessments of Mary with increasing reservations. A
          historiographical revisionism since the 1980s has improved her
          reputation among scholars to some degree.
          <a
            href="https://en.wikipedia.org/wiki/Christopher_Haigh"
            title="Christopher Haigh"
            ><span>Christopher Haigh</span></a
          >
          argued that her revival of religious festivities and Catholic
          practices was generally welcomed.<sup class="reference"></sup> Haigh
          concluded that the &quot;last years of Mary&apos;s reign were not a
          gruesome preparation for Protestant victory, but a continuing
          consolidation of Catholic strength.&quot;
        </p>
        <p>
          Catholic historians, such as
          <a
            href="https://en.wikipedia.org/wiki/John_Lingard"
            title="John Lingard"
            ><span>John Lingard</span></a
          >, thought Mary&apos;s policies failed not because they were wrong but
          because she had too short a reign to establish them and because of
          natural disasters beyond her control.<sup class="reference"></sup> In
          other countries, the Catholic Counter-Reformation was spearheaded by
          Jesuit missionaries, but Mary&apos;s chief religious advisor, Cardinal
          Reginald Pole, refused to allow the Jesuits into England.<sup
            class="reference"
          ></sup>
          Her marriage to Philip was unpopular among her subjects and her
          religious policies resulted in deep-seated resentment.<sup
            class="reference"
          ></sup>
          The military loss of Calais to France was a bitter humiliation to
          English pride. Failed harvests increased public discontent.<sup
            class="reference"
          ></sup>
          Philip spent most of his time abroad, while his wife remained in
          England, leaving her depressed at his absence and undermined by their
          inability to have children. After Mary&apos;s death, Philip sought to
          marry Elizabeth but she refused him. Although Mary&apos;s rule was
          ultimately ineffectual and unpopular, the policies of fiscal reform,
          naval expansion, and colonial exploration that were later lauded as
          Elizabethan accomplishments were started in Mary&apos;s reign.
        </p>
      </section>
    </article>

    <back-to-top></back-to-top>
  </div>
</template>
