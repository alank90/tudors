<script>
import navbarProgress from "../views/assets/navbarProgress.js";
import navBarScroll from "../views/assets/navBarScroll.js";

export default {
  mounted() {
    const querySelector = "nav.edward-bio";
    navbarProgress(querySelector);
    navBarScroll();
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

.shape-outside {
  float: left;
  width: 300px;
  margin: 10px 10px 10px 0;
  border-radius: 50%;
  -webkit-shape-outside: circle();
  shape-outside: circle();
}

.shilling {
  float: right;
  width: 315px;
}

.jane-grey {
  float: right;
  width: 220px;
}

img {
  max-width: 100%;
  height: auto;
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

article a {
  color: #222;
  text-decoration-color: #376119;
  text-decoration-thickness: 2px;
}
</style>

<template>
  <div class="component-container">
    <nav class="edward-bio">
      <ul>
        <li data-name="intro"><a href="#intro">Intro</a></li>
        <li data-name="earlylife">
          <a href="#earlylife">Early Life</a>
          <ul>
            <li data-name="birth"><a href="#birth">Birth</a></li>
            <li data-name="upbringing">
              <a href="#upbringing">Upbringing and education</a>
            </li>
            <li data-name="wooing"><a href="#wooing">The Rough Wooing</a></li>
          </ul>
        </li>
        <li data-name="accession">
          <a href="#accession">Accession To The Throne</a>
        </li>
        <li data-name="somerset">
          <a href="#somerset">Somerset Protectorate</a>
          <ul>
            <li data-name="council">
              <a href="#council">Council of Regency</a>
            </li>
            <li data-name="seymour"><a href="#seymour">Thomas Seymour</a></li>
            <li data-name="war"><a href="#war">War</a></li>
            <li data-name="rebellion"><a href="#rebellion">Rebellion</a></li>
            <li data-name="fallofsomerset">
              <a href="#fallofsomerset">Fall of Somerset</a>
            </li>
          </ul>
        </li>
        <li data-name="northumberland">
          <a href="#northumberland">Northumberland's leadership</a>
        </li>
        <li data-name="reformation"><a href="#reformation">Reformation</a></li>
        <li data-name="succession">
          <a href="#succession">Succession crisis</a>
          <ul>
            <li data-name="devise">
              <a href="#devise">Devise for the succession</a>
            </li>
            <li data-name="illness">
              <a href="#illness">Illness and death</a>
            </li>
            <li data-name="ladyjane">
              <a href="#ladyjane">Lady Jane and Queen Mary</a>
            </li>
          </ul>
        </li>
        <li data-name="legacy"><a href="#legacy">Protestant legacy</a></li>
      </ul>
      <svg xmlns="http://www.w3.org/2000/svg">
        <path />
      </svg>
    </nav>

    <article id="top">
      <section id="intro">
        <h2>Intro</h2>
        <p class="intro">
          <strong>Edward VI</strong> (12 October 1537 &ndash; 6 July 1553) was
          the
          <a
            href="https://en.wikipedia.org/wiki/King_of_England"
            title="Edward Tudor (disambiguation)"
            >King of England</a
          >
          and
          <a
            href="https://en.wikipedia.org/wiki/Monarchy_of_Ireland"
            title="Monarchy of Ireland"
            >Ireland</a
          >
          from 28 January 1547 until his death in 1553. He was crowned on 20
          February at the age of nine.<sup
            ><a
              href="https://en.wikipedia.org/wiki/Edward_VI_of_England#cite_note-1"
            ></a
          ></sup>
          Edward was the son of
          <a href="https://en.wikipedia.org/wiki/Henry_VIII" title="Henry VIII"
            >Henry VIII</a
          >
          and
          <a
            href="https://en.wikipedia.org/wiki/Jane_Seymour"
            title="Lambert Simnel"
            >Jane Seymour</a
          >, and England&apos;s first monarch to be raised as a
          <a href="https://en.wikipedia.org/wiki/Protestant" title="Protestant"
            >Protestant</a
          >.<sup
            ><a
              href="https://en.wikipedia.org/wiki/Edward_VI_of_England#cite_note-2"
            ></a
          ></sup>
          During his reign, the realm was governed by a
          <a href="https://en.wikipedia.org/wiki/Regent" title="Regent"
            >regency</a
          >
          council because he never reached maturity. The council was first led
          by his uncle
          <a
            href="https://en.wikipedia.org/wiki/Edward_Seymour,_1st_Duke_of_Somerset"
            title="Edward Seymour, 1st Duke of Somerset"
            >Edward Seymour, 1st Duke of Somerset</a
          >
          (1547&ndash;1549), and then by
          <a
            href="https://en.wikipedia.org/wiki/John_Dudley,_1st_Earl_of_Warwick"
            title=""
            >John Dudley, 1st Earl of Warwick</a
          >
          (1550&ndash;1553), who from 1551 was
          <a
            href="https://en.wikipedia.org/wiki/Duke_of_Northumberland"
            title="Duke of Northumberland"
            >Duke of Northumberland</a
          >.
        </p>
        <p>
          Edward&apos;s reign was marked by economic problems and social unrest
          that in 1549 erupted into riot and rebellion. An expensive war with
          <a
            href="https://en.wikipedia.org/wiki/Kingdom_of_Scotland"
            title="Kingdom of Scotland"
            >Scotland</a
          >, at first successful, ended with military withdrawal from Scotland
          and
          <a href="https://en.wikipedia.org/wiki/Boulogne-sur-Mer" title=""
            >Boulogne-sur-Mer</a
          >
          in exchange for peace. The transformation of the
          <a href="https://en.wikipedia.org/wiki/Church_of_England" title=""
            >Church of England</a
          >
          into a recognisably Protestant body also occurred under Edward, who
          took great interest in religious matters. Although his father,
          Henry<span class="nowrap">&nbsp;</span>VIII, had severed the link
          between the Church and
          <a
            href="https://en.wikipedia.org/wiki/Catholic_Church"
            title="Catholic Church"
            >Rome</a
          >, Henry<span class="nowrap">&nbsp;</span>VIII had never permitted the
          renunciation of
          <a
            href="https://en.wikipedia.org/wiki/Catholic_doctrine"
            title="Catholic doctrine"
            >Catholic doctrine</a
          >
          or ceremony. It was during Edward&apos;s reign that Protestantism was
          <a
            href="https://en.wikipedia.org/wiki/Established_church"
            title="Established church"
            >established</a
          >
          for the first time in England with reforms that included the abolition
          of
          <a
            href="https://en.wikipedia.org/wiki/Clerical_celibacy"
            title="Edward Tudor (disambiguation)"
            >clerical celibacy</a
          >
          and the
          <a
            href="https://en.wikipedia.org/wiki/Mass_(liturgy)"
            title="Mass (liturgy)"
            >Mass</a
          >, and the imposition of compulsory services in English.
        </p>
        <p>
          In February 1553, at age 15, Edward fell ill. When his sickness was
          discovered to be terminal, he and his Council drew up a &quot;Devise
          for the Succession&quot;, to prevent the country&apos;s return to
          Catholicism. Edward named his
          <a
            href="https://en.wikipedia.org/wiki/Cousin#Relationship_charts"
            title="Cousin"
            >first cousin once removed</a
          >,
          <a
            href="https://en.wikipedia.org/wiki/Lady_Jane_Grey"
            title="Lady Jane Grey"
            >Lady Jane Grey</a
          >, as his heir, excluding his half-sisters,
          <a
            href="https://en.wikipedia.org/wiki/Mary_I_of_England"
            title="Mary I of England"
            >Mary</a
          >
          and
          <a
            href="https://en.wikipedia.org/wiki/Elizabeth_I"
            title="Elizabeth I"
            >Elizabeth</a
          >. This decision was disputed following Edward&apos;s death, and Jane
          was deposed by Mary nine days after becoming queen. During her reign,
          Mary reversed Edward&apos;s Protestant reforms, which nonetheless
          became the basis of the
          <a
            href="https://en.wikipedia.org/wiki/Elizabethan_Religious_Settlement"
            title=""
            >Elizabethan Religious Settlement</a
          >
          of 1559.&nbsp;
        </p>
      </section>

      <section id="earlylife">
        <h2>Early Life</h2>
        <hr />
        <section id="birth">
          <h3>Birth</h3>

          <img
            class="shape-outside"
            src="../assets/img/edward_child.png"
            alt="Edward as child"
          />

          <p>
            Edward was born on 12 October 1537 in his mother&apos;s room inside
            <a
              href="https://en.wikipedia.org/wiki/Hampton_Court_Palace"
              title="Hampton Court Palace"
              >Hampton Court Palace</a
            >, in
            <a
              href="https://en.wikipedia.org/wiki/Middlesex"
              title="Elizabeth I"
              >Middlesex</a
            >.<sup
              ><a
                href="https://en.wikipedia.org/wiki/Edward_VI_of_England#cite_note-4"
              ></a
            ></sup>
            He was the son of King
            <a
              href="https://en.wikipedia.org/wiki/Henry_VIII"
              title="Henry VIII"
              >Henry VIII</a
            >
            by his third wife,
            <a
              href="https://en.wikipedia.org/wiki/Jane_Seymour"
              title="Jane Seymour"
              >Jane Seymour</a
            >. Throughout the realm, the people greeted the birth of a male
            heir, &quot;whom we hungered for so long&quot;,<sup
              ><a
                href="https://en.wikipedia.org/wiki/Edward_VI_of_England#cite_note-5"
              ></a
            ></sup>
            with joy and relief.
            <em
              ><a href="https://en.wikipedia.org/wiki/Te_Deum" title=""
                >Te Deums</a
              ></em
            >
            were sung in churches, bonfires lit, and &quot;their was shott at
            the Tower that night above two thousand gonnes&quot;.<sup
              ><a
                href="https://en.wikipedia.org/wiki/Edward_VI_of_England#cite_note-Lbapt-6"
              ></a
            ></sup>
            Queen Jane, appearing to recover quickly from the birth, sent out
            personally signed letters announcing the birth of &quot;a Prince,
            conceived in most lawful matrimony between my Lord the King&apos;s
            Majesty and us&quot;. Edward was
            <a
              href="https://en.wikipedia.org/wiki/Infant_baptism"
              title="Infant baptism"
              >christened</a
            >
            on 15 October, with his half-sisters, the 21-year-old
            <a
              href="https://en.wikipedia.org/wiki/Mary_I_of_England"
              title="Mary I of England"
              >Lady Mary</a
            >
            as godmother and the 4-year-old
            <a
              href="https://en.wikipedia.org/wiki/Elizabeth_I"
              title="Elizabeth I"
              >Lady Elizabeth</a
            >
            carrying the
            <a href="https://en.wikipedia.org/wiki/Chrisom" title="Chrisom"
              >chrisom</a
            >;<sup
              ><a
                href="https://en.wikipedia.org/wiki/Edward_VI_of_England#cite_note-Lbapt-6"
              ></a
            ></sup>
            and the
            <a
              href="https://en.wikipedia.org/wiki/Garter_Principal_King_of_Arms"
              title="Garter Principal King of Arms"
              >Garter King of Arms</a
            >
            proclaimed him as
            <a
              href="https://en.wikipedia.org/wiki/Duke_of_Cornwall"
              title="Duke of Cornwall"
              >Duke of Cornwall</a
            >
            and
            <a
              href="https://en.wikipedia.org/wiki/Earl_of_Chester"
              title="Earl of Chester"
              >Earl of Chester</a
            >.<sup
              ><a
                href="https://en.wikipedia.org/wiki/Edward_VI_of_England#cite_note-7"
              ></a
            ></sup>
            The Queen, however, fell ill on 23 October from presumed postnatal
            complications, and died the following night. Henry VIII wrote to
            <a
              href="https://en.wikipedia.org/wiki/Francis_I_of_France"
              title="Francis I of France"
              >Francis I of France</a
            >
            that &quot;Divine Providence ... hath mingled my joy with bitterness
            of the death of her who brought me this happiness&quot;.<sup
              ><a
                href="https://en.wikipedia.org/wiki/Edward_VI_of_England#cite_note-8"
              ></a
            ></sup>
          </p>
        </section>

        <section id="upbringing">
          <h3>Upbringing and education</h3>
          <p>
            Edward was a healthy baby who
            <a
              href="https://en.wikipedia.org/wiki/Breastfeeding"
              title="Breastfeeding"
              >suckled</a
            >
            strongly from the outset. His father was delighted with him; in May
            1538, Henry was observed &quot;dallying with him in his arms ... and
            so holding him in a window to the sight and great comfort of the
            people&quot;.<sup
              ><a
                href="https://en.wikipedia.org/wiki/Edward_VI_of_England#cite_note-Loach_1999_p=8-11"
                >[11]</a
              ></sup
            >
            That September, the Lord Chancellor,
            <a
              href="https://en.wikipedia.org/wiki/Thomas_Audley,_1st_Baron_Audley_of_Walden"
              title="Thomas Audley, 1st Baron Audley of Walden"
              >Lord Audley</a
            >, reported Edward&apos;s rapid growth and vigour;<sup
              ><a
                href="https://en.wikipedia.org/wiki/Edward_VI_of_England#cite_note-Loach_1999_p=8-11"
                >[11]</a
              ></sup
            >
            and other accounts describe him as a tall and merry child. The
            tradition that Edward VI was a sickly boy has been challenged by
            more recent historians.<sup
              ><a
                href="https://en.wikipedia.org/wiki/Edward_VI_of_England#cite_note-12"
                >[12]</a
              ></sup
            >
            At the age of four, he fell ill with a life-threatening &quot;<a
              href="https://en.wikipedia.org/wiki/Plasmodium_malariae"
              title="Plasmodium malariae"
              >quartan fever</a
            >&quot;,<sup
              ><a
                href="https://en.wikipedia.org/wiki/Edward_VI_of_England#cite_note-13"
                >[13]</a
              ></sup
            >
            but, despite occasional illnesses and poor eyesight, he enjoyed
            generally good health until the last six months of his life.<sup
              ><a
                href="https://en.wikipedia.org/wiki/Edward_VI_of_England#cite_note-14"
                >[14]</a
              ></sup
            >
          </p>
          <p>
            Edward was initially placed in the care of
            <a
              href="https://en.wikipedia.org/wiki/Margaret_Bryan"
              title="Margaret Bryan"
              >Margaret Bryan</a
            >, &quot;lady mistress&quot; of the prince&apos;s household. She was
            succeeded by Blanche Herbert,
            <a href="https://en.wikipedia.org/wiki/Lady_Troy" title="Lady Troy"
              >Lady Troy</a
            >. Until the age of six, Edward was brought up, as he put it later
            in his <em>Chronicle</em>, &quot;among the women&quot;.<sup
              ><a
                href="https://en.wikipedia.org/wiki/Edward_VI_of_England#cite_note-15"
                >[15]</a
              ></sup
            >
            The formal royal household established around Edward was, at first,
            under
            <a
              href="https://en.wikipedia.org/wiki/Sir_William_Sidney"
              title="Sir William Sidney"
              >Sir William Sidney</a
            >, and later Sir Richard Page, stepfather of
            <a
              href="https://en.wikipedia.org/wiki/Edward_Seymour,_1st_Duke_of_Somerset"
              title="Edward Seymour, 1st Duke of Somerset"
              >Edward Seymour</a
            >&apos;s wife,
            <a
              href="https://en.wikipedia.org/wiki/Anne_Seymour,_Duchess_of_Somerset"
              title="Anne Seymour, Duchess of Somerset"
              >Anne Stanhope</a
            >. Henry demanded exacting standards of security and cleanliness in
            his son&apos;s household, stressing that Edward was &quot;this whole
            realm&apos;s most precious jewel&quot;.<sup
              ><a
                href="https://en.wikipedia.org/wiki/Edward_VI_of_England#cite_note-16"
                >[16]</a
              ></sup
            >
            Visitors described the prince, who was lavishly provided with toys
            and comforts, including his own troupe of
            <a href="https://en.wikipedia.org/wiki/Minstrel" title=""
              >minstrels</a
            >, as a contented child.<sup
              ><a
                href="https://en.wikipedia.org/wiki/Edward_VI_of_England#cite_note-17"
                >[17]</a
              ></sup
            >
          </p>
          <p>
            From the age of six, Edward began his formal education under
            <a
              href="https://en.wikipedia.org/wiki/Richard_Cox_(bishop)"
              title="Richard Cox (bishop)"
              >Richard Cox</a
            >
            and
            <a
              href="https://en.wikipedia.org/wiki/John_Cheke"
              title="John Cheke"
              >John Cheke</a
            >, concentrating, as he recalled himself, on &quot;learning of
            tongues, of the scripture, of philosophy, and all liberal
            sciences&quot;.<sup
              ><a
                href="https://en.wikipedia.org/wiki/Edward_VI_of_England#cite_note-18"
                >[18]</a
              ></sup
            >
            He received tuition from Elizabeth&apos;s tutor,
            <a
              href="https://en.wikipedia.org/wiki/Roger_Ascham"
              title="Roger Ascham"
              >Roger Ascham</a
            >, and
            <a
              href="https://en.wikipedia.org/wiki/Jean_Belmain"
              title="Jean Belmain"
              >Jean Belmain</a
            >, learning French, Spanish and Italian. In addition, he is known to
            have studied
            <a href="https://en.wikipedia.org/wiki/Geometry" title="Geometry"
              >geometry</a
            >
            and learned to play musical instruments, including the
            <a href="https://en.wikipedia.org/wiki/Lute" title="Lute">lute</a>
            and the
            <a href="https://en.wikipedia.org/wiki/Virginals" title="Virginals"
              >virginals</a
            >. He collected globes and maps and, according to coinage historian
            C. E. Challis, developed a grasp of monetary affairs that indicated
            a high intelligence. Edward&apos;s religious education is assumed to
            have favoured the reforming agenda.<sup
              ><a
                href="https://en.wikipedia.org/wiki/Edward_VI_of_England#cite_note-19"
                >[19]</a
              ></sup
            >
            His religious establishment was probably chosen by
            <a
              href="https://en.wikipedia.org/wiki/Archbishop_Thomas_Cranmer"
              title="Archbishop Thomas Cranmer"
              >Archbishop Thomas Cranmer</a
            >, a leading reformer. Both Cox and Cheke were &quot;reformed&quot;
            Catholics or
            <a href="https://en.wikipedia.org/wiki/Erasmians" title="Erasmians"
              >Erasmians</a
            >
            and later became
            <a
              href="https://en.wikipedia.org/wiki/Marian_exiles"
              title="Marian exiles"
              >Marian exiles</a
            >. By 1549, Edward had written a
            <a
              href="https://en.wikipedia.org/wiki/Treatise"
              title="Infant baptism"
              >treatise</a
            >
            on the pope as
            <a
              href="https://en.wikipedia.org/wiki/Antichrist"
              title="Antichrist"
              >Antichrist</a
            >
            and was making informed notes on theological controversies.<sup
              ><a
                href="https://en.wikipedia.org/wiki/Edward_VI_of_England#cite_note-20"
                >[20]</a
              ></sup
            >
            Many aspects of Edward&apos;s religion were essentially Catholic in
            his early years, including celebration of the
            <a
              href="https://en.wikipedia.org/wiki/Mass_(liturgy)"
              title="Mass (liturgy)"
              >mass</a
            >
            and reverence for images and relics of the saints.<sup
              ><a
                href="https://en.wikipedia.org/wiki/Edward_VI_of_England#cite_note-Skidmore_2007_p=38-21"
              ></a></sup
            >&nbsp;
          </p>
        </section>

        <section id="wooing">
          <h3>"The Rough Wooing"</h3>
          <p>
            On 1 July 1543, Henry VIII signed the
            <a href="https://en.wikipedia.org/wiki/Treaty_of_Greenwich" title=""
              >Treaty of Greenwich</a
            >
            with the
            <a href="https://en.wikipedia.org/wiki/Scotland" title="Scotland"
              >Scots</a
            >, sealing the peace with Edward&apos;s
            <a href="https://en.wikipedia.org/wiki/Betrothal" title="Betrothal"
              >betrothal</a
            >
            to the seven-month-old
            <a
              href="https://en.wikipedia.org/wiki/Mary,_Queen_of_Scots"
              title="Mary, Queen of Scots"
              >Mary, Queen of Scots</a
            >. The Scots were in a weak bargaining position after their defeat
            at
            <a
              href="https://en.wikipedia.org/wiki/Battle_of_Solway_Moss"
              title="Battle of Solway Moss"
              >Solway Moss</a
            >
            the previous November, and Henry, seeking to unite the two realms,
            stipulated that Mary be handed over to him to be brought up in
            England.<sup
              ><a
                href="https://en.wikipedia.org/wiki/Edward_VI_of_England#cite_note-33"
              ></a
            ></sup>
            When the Scots repudiated the treaty in December 1543 and renewed
            their alliance with France, Henry was enraged. In April 1544, he
            ordered Edward&apos;s uncle,
            <a
              href="https://en.wikipedia.org/wiki/Edward_Seymour,_1st_Duke_of_Somerset"
              title=""
              >Edward Seymour, Earl of Hertford</a
            >, to invade Scotland and &quot;put all to fire and sword,
            <a
              href="https://en.wikipedia.org/wiki/Burning_of_Edinburgh_(1544)"
              title="Burning of Edinburgh (1544)"
              >burn Edinburgh town</a
            >, so razed and defaced when you have sacked and gotten what ye can
            of it, as there may remain forever a perpetual memory of the
            vengeance of God lightened upon [them] for their falsehood and
            disloyalty&quot;.<sup
              ><a
                href="https://en.wikipedia.org/wiki/Edward_VI_of_England#cite_note-34"
              ></a
            ></sup>
            Seymour responded with the most savage campaign ever launched by the
            English against the Scots.<sup
              ><a
                href="https://en.wikipedia.org/wiki/Edward_VI_of_England#cite_note-35"
              ></a
            ></sup>
            The war, which continued into Edward&apos;s reign, has become known
            as &quot;<a
              href="https://en.wikipedia.org/wiki/The_Rough_Wooing"
              title="Minstrel"
              >The Rough Wooing</a
            >&quot;.
          </p>
        </section>
      </section>

      <section id="accession">
        <h2>Accession to throne</h2>
        <hr />
        <p>
          The nine-year-old Edward wrote to his father and stepmother on 10
          January 1547 from
          <a href="https://en.wikipedia.org/wiki/Hertford" title="Hertford"
            >Hertford</a
          >
          thanking them for his new year&apos;s gift of their portraits from
          life.<sup
            ><a
              href="https://en.wikipedia.org/wiki/Edward_VI_of_England#cite_note-36"
              >[36]</a
            ></sup
          >
          By 28 January 1547, Henry VIII was dead. Those close to the throne,
          led by Edward Seymour and
          <a
            href="https://en.wikipedia.org/wiki/William_Paget,_1st_Baron_Paget"
            title="William Paget, 1st Baron Paget"
            >William Paget</a
          >, agreed to delay the announcement of the king&apos;s death until
          arrangements had been made for a smooth succession. Seymour and
          <a
            href="https://en.wikipedia.org/wiki/Anthony_Browne_(died_1548)"
            title="Anthony Browne (died 1548)"
            >Sir Anthony Browne</a
          >, the
          <a
            href="https://en.wikipedia.org/wiki/Master_of_the_Horse"
            title="Master of the Horse"
            >Master of the Horse</a
          >, rode to collect Edward from Hertford and brought him to
          <a
            href="https://en.wikipedia.org/wiki/Enfield_Town"
            title="Enfield Town"
            >Enfield</a
          >, where Lady Elizabeth was living. He and Elizabeth were then told of
          the death of their father and heard a reading of the will.<sup
            ><a
              href="https://en.wikipedia.org/wiki/Edward_VI_of_England#cite_note-37"
              >[37]</a
            ></sup
          >
        </p>
        <p>
          The Lord Chancellor,
          <a
            href="https://en.wikipedia.org/wiki/Thomas_Wriothesley,_1st_Earl_of_Southampton"
            title="Thomas Wriothesley, 1st Earl of Southampton"
            >Thomas Wriothesley</a
          >, announced Henry&apos;s death to parliament on 31 January, and
          general proclamations of Edward&apos;s succession were ordered.<sup
            ><a
              href="https://en.wikipedia.org/wiki/Edward_VI_of_England#cite_note-Lsu-38"
              >[38]</a
            ></sup
          >
          The new king was taken to the
          <a
            href="https://en.wikipedia.org/wiki/Tower_of_London"
            title="Edward Seymour, 1st Duke of Somerset"
            >Tower of London</a
          >, where he was welcomed with &quot;great shot of ordnance in all
          places there about, as well out of the Tower as out of the
          ships&quot;.<sup
            ><a
              href="https://en.wikipedia.org/wiki/Edward_VI_of_England#cite_note-39"
              >[39]</a
            ></sup
          >
          The following day, the nobles of the realm made their
          <a href="https://en.wikipedia.org/wiki/Obeisance" title=""
            >obeisance</a
          >
          to Edward at the Tower, and Seymour was announced as
          <a
            href="https://en.wikipedia.org/wiki/Minority_reign"
            title="Minority reign"
            >Protector</a
          >.<sup
            ><a
              href="https://en.wikipedia.org/wiki/Edward_VI_of_England#cite_note-Lsu-38"
              >[38]</a
            ></sup
          >
          Henry VIII was buried at Windsor on 16 February, in the same tomb as
          Jane Seymour, as he had wished.
        </p>
        <p>
          Edward VI was crowned at
          <a
            href="https://en.wikipedia.org/wiki/Westminster_Abbey"
            title="Westminster Abbey"
            >Westminster Abbey</a
          >
          four days later on Sunday 20 February.<sup
            ><a
              href="https://en.wikipedia.org/wiki/Edward_VI_of_England#cite_note-40"
              >[40]</a
            ></sup
          >
          The ceremonies were shortened, because of the &quot;tedious length of
          the same which should weary and be hurtsome peradventure to the
          King&apos;s majesty, being yet of tender age&quot;, and also because
          the Reformation had rendered some of them inappropriate.<sup
            ><a
              href="https://en.wikipedia.org/wiki/Edward_VI_of_England#cite_note-41"
              >[41]</a
            ></sup
          >
        </p>

        <p>
          On the eve of the coronation, Edward progressed on horseback from the
          Tower to the
          <a
            href="https://en.wikipedia.org/wiki/Palace_of_Westminster"
            title="Palace of Westminster"
            >Palace of Westminster</a
          >
          through thronging crowds and pageants, many based on the pageants for
          a previous boy king,
          <a
            href="https://en.wikipedia.org/wiki/Henry_VI_of_England"
            title="Henry VI of England"
            >Henry VI</a
          >.<sup
            ><a
              href="https://en.wikipedia.org/wiki/Edward_VI_of_England#cite_note-42"
              >[42]</a
            ></sup
          >
          He laughed at a Spanish
          <a
            href="https://en.wikipedia.org/wiki/Tightrope_walking"
            title="Tightrope walking"
            >tightrope walker</a
          >
          who &quot;tumbled and played many pretty toys&quot; outside
          <a
            href="https://en.wikipedia.org/wiki/Old_St_Paul%27s_Cathedral"
            title="Old St Paul's Cathedral"
            >St Paul&apos;s Cathedral</a
          >.<sup
            ><a
              href="https://en.wikipedia.org/wiki/Edward_VI_of_England#cite_note-43"
              >[43]</a
            ></sup
          >
        </p>
        <p>
          At the coronation service, Cranmer affirmed the
          <a
            href="https://en.wikipedia.org/wiki/Acts_of_Supremacy"
            title="Acts of Supremacy"
            >royal supremacy</a
          >
          and called Edward a second
          <a href="https://en.wikipedia.org/wiki/Josiah" title="Josiah"
            >Josiah</a
          >,<sup
            ><a
              href="https://en.wikipedia.org/wiki/Edward_VI_of_England#cite_note-44"
              >[44]</a
            ></sup
          >
          urging him to continue the reformation of the
          <a
            href="https://en.wikipedia.org/wiki/Church_of_England"
            title="Church of England"
            >Church of England</a
          >, &quot;the tyranny of the Bishops of Rome banished from your
          subjects, and images removed&quot;.<sup
            ><a
              href="https://en.wikipedia.org/wiki/Edward_VI_of_England#cite_note-45"
              >[45]</a
            ></sup
          >
          After the service, Edward presided at a banquet in
          <a
            href="https://en.wikipedia.org/wiki/Westminster_Hall"
            title="Westminster Hall"
            >Westminster Hall</a
          >, where, he recalled in his <em>Chronicle</em>, he dined with his
          crown on his head.
        </p>
      </section>

      <section id="somerset">
        <h2>Somerset Protectorate</h2>
        <hr />
        <section id="council">
          <h3>Council of Regency</h3>

          <p>
            <a
              href="https://en.wikipedia.org/wiki/Will_of_Henry_VIII_of_England"
              title="Edward Seymour, 1st Duke of Somerset"
              >Henry VIII&apos;s will</a
            >
            named sixteen
            <a href="https://en.wikipedia.org/wiki/Executor" title="Executor"
              >executors</a
            >, who were to act as Edward&apos;s Council until he reached the age
            of eighteen. These executors were supplemented by twelve men
            &quot;of counsail&quot; who would assist the executors when called
            on.<sup
              ><a
                href="https://en.wikipedia.org/wiki/Edward_VI_of_England#cite_note-48"
                >[48]</a
              ></sup
            >
            The final state of Henry VIII&apos;s will has been the subject of
            controversy. Some historians suggest that those close to the king
            manipulated either him or the will itself to ensure a share-out of
            power to their benefit, both material and religious. In this
            reading, the composition of the
            <a href="https://en.wikipedia.org/wiki/Privy_Chamber" title=""
              >Privy Chamber</a
            >
            shifted towards the end of 1546 in favour of the reforming
            <a
              href="https://en.wikipedia.org/wiki/Political_faction"
              title="Political faction"
              >faction</a
            >.<sup
              ><a
                href="https://en.wikipedia.org/wiki/Edward_VI_of_England#cite_note-49"
                >[49]</a
              ></sup
            >
            In addition, two leading conservative Privy Councillors were removed
            from the centre of power.
          </p>
          <p>
            <a
              href="https://en.wikipedia.org/wiki/Stephen_Gardiner"
              title="Stephen Gardiner"
              >Stephen Gardiner</a
            >
            was refused access to Henry during his last months.
            <a
              href="https://en.wikipedia.org/wiki/Thomas_Howard,_3rd_Duke_of_Norfolk"
              title="Thomas Howard, 3rd Duke of Norfolk"
              >Thomas Howard, 3rd Duke of Norfolk</a
            >, found himself accused of
            <a href="https://en.wikipedia.org/wiki/Treason" title="Treason"
              >treason</a
            >; the day before the king&apos;s death his vast estates were
            seized, making them available for redistribution, and he spent the
            whole of Edward&apos;s reign in the
            <a
              href="https://en.wikipedia.org/wiki/Tower_of_London"
              title="Tower of London"
              >Tower of London</a
            >.<sup
              ><a
                href="https://en.wikipedia.org/wiki/Edward_VI_of_England#cite_note-50"
                >[50]</a
              ></sup
            >
            Other historians have argued that Gardiner&apos;s exclusion was
            based on non-religious matters, that Norfolk was not noticeably
            conservative in religion, that conservatives remained on the
            Council, and that the radicalism of such men as
            <a
              href="https://en.wikipedia.org/wiki/Anthony_Denny"
              title="Anthony Denny"
              >Sir Anthony Denny</a
            >, who controlled the dry stamp that replicated the king&apos;s
            signature, is debatable.<sup
              ><a
                href="https://en.wikipedia.org/wiki/Edward_VI_of_England#cite_note-51"
                >[51]</a
              ></sup
            >
          </p>
          <p>
            Whatever the case, Henry&apos;s death was followed by a lavish
            hand-out of lands and honours to the new power group.<sup
              ><a
                href="https://en.wikipedia.org/wiki/Edward_VI_of_England#cite_note-Loach_1999_pp=19–25-52"
                >[52]</a
              ></sup
            >
            The will contained an &quot;unfulfilled gifts&quot; clause, added at
            the last minute, which allowed Henry&apos;s executors to freely
            distribute lands and honours to themselves and the court,<sup
              ><a
                href="https://en.wikipedia.org/wiki/Edward_VI_of_England#cite_note-53"
                >[53]</a
              ></sup
            >
            particularly to
            <a
              href="https://en.wikipedia.org/wiki/Edward_Seymour,_1st_Duke_of_Somerset"
              title="Edward Seymour, 1st Duke of Somerset"
              >Edward Seymour, 1st Earl of Hertford</a
            >, the new king&apos;s uncle who became
            <a
              href="https://en.wikipedia.org/wiki/Lord_Protector"
              title="Lord Protector"
              >Lord Protector of the Realm</a
            >, Governor of the King&apos;s Person, and
            <a
              href="https://en.wikipedia.org/wiki/Duke_of_Somerset"
              title="Duke of Somerset"
              >Duke of Somerset</a
            >.<sup
              ><a
                href="https://en.wikipedia.org/wiki/Edward_VI_of_England#cite_note-Loach_1999_pp=19–25-52"
                >[52]</a
              ></sup
            >
          </p>
          <p>
            In fact, Henry VIII&apos;s will did not provide for the appointment
            of a Protector. It entrusted the government of the realm during his
            son&apos;s minority to a Regency Council that would rule
            collectively, by majority decision, with &quot;like and equal
            charge&quot;.<sup
              ><a
                href="https://en.wikipedia.org/wiki/Edward_VI_of_England#cite_note-54"
                >[54]</a
              ></sup
            >
            Nevertheless, a few days after Henry&apos;s death, on 4 February,
            the executors chose to invest almost regal power in Edward Seymour,
            now Duke of Somerset.<sup
              ><a
                href="https://en.wikipedia.org/wiki/Edward_VI_of_England#cite_note-55"
                >[55]</a
              ></sup
            >
            Thirteen out of the sixteen (the others being absent) agreed to his
            appointment as Protector, which they justified as their joint
            decision &quot;by virtue of the authority&quot; of Henry&apos;s
            will.<sup
              ><a
                href="https://en.wikipedia.org/wiki/Edward_VI_of_England#cite_note-56"
                >[56]</a
              ></sup
            >
            Somerset may have done a deal with some of the executors, who almost
            all received hand-outs.<sup
              ><a
                href="https://en.wikipedia.org/wiki/Edward_VI_of_England#cite_note-57"
                >[57]</a
              ></sup
            >
            He is known to have done so with
            <a
              href="https://en.wikipedia.org/wiki/William_Paget,_1st_Baron_Paget"
              title="William Paget, 1st Baron Paget"
              >William Paget</a
            >, private secretary to Henry VIII,<sup
              ><a
                href="https://en.wikipedia.org/wiki/Edward_VI_of_England#cite_note-58"
                >[58]</a
              ></sup
            >
            and to have secured the support of
            <a
              href="https://en.wikipedia.org/wiki/Anthony_Browne_(died_1548)"
              title="Anthony Browne (died 1548)"
              >Sir Anthony Browne</a
            >
            of the Privy Chamber.<sup
              ><a
                href="https://en.wikipedia.org/wiki/Edward_VI_of_England#cite_note-59"
                >[59]</a
              ></sup
            >
          </p>
          <p>
            Somerset&apos;s appointment was in keeping with historical
            precedent,<sup
              ><a
                href="https://en.wikipedia.org/wiki/Edward_VI_of_England#cite_note-60"
                >[60]</a
              ></sup
            >
            and his eligibility for the role was reinforced by his military
            successes in Scotland and France. In March 1547, he secured
            <a
              href="https://en.wikipedia.org/wiki/Letters_patent"
              title="Letters patent"
              >letters patent</a
            >
            from King Edward granting him the almost monarchical right to
            appoint members to the Privy Council himself and to consult them
            only when he wished.<sup
              ><a
                href="https://en.wikipedia.org/wiki/Edward_VI_of_England#cite_note-61"
                >[61]</a
              ></sup
            >
            In the words of historian
            <a
              href="https://en.wikipedia.org/wiki/Geoffrey_Elton"
              title="Geoffrey Elton"
              >Geoffrey Elton</a
            >, &quot;from that moment his autocratic system was
            complete&quot;.<sup
              ><a
                href="https://en.wikipedia.org/wiki/Edward_VI_of_England#cite_note-62"
                >[62]</a
              ></sup
            >
            He proceeded to rule largely by
            <a
              href="https://en.wikipedia.org/wiki/Proclamation"
              title="Proclamation"
              >proclamation</a
            >, calling on the Privy Council to do little more than rubber-stamp
            his decisions.<sup
              ><a
                href="https://en.wikipedia.org/wiki/Edward_VI_of_England#cite_note-63"
                >[63]</a
              ></sup
            >
          </p>
          <p>
            Somerset&apos;s takeover of power was smooth and efficient. The
            <a
              href="https://en.wikipedia.org/wiki/Holy_Roman_Empire"
              title="Holy Roman Empire"
              >imperial ambassador</a
            >,
            <a
              href="https://en.wikipedia.org/wiki/Fran%C3%A7ois_van_der_Delft"
              title="François van der Delft"
              >Fran&ccedil;ois van der Delft</a
            >, reported that he &quot;governs everything absolutely&quot;, with
            Paget operating as his secretary, though he predicted trouble from
            <a
              href="https://en.wikipedia.org/wiki/John_Dudley,_1st_Duke_of_Northumberland"
              title="John Dudley, 1st Duke of Northumberland"
              >John Dudley, Viscount Lisle</a
            >, who had recently been raised to
            <a
              href="https://en.wikipedia.org/wiki/Earl_of_Warwick"
              title="Earl of Warwick"
              >Earl of Warwick</a
            >
            in the share-out of honours.<sup
              ><a
                href="https://en.wikipedia.org/wiki/Edward_VI_of_England#cite_note-64"
                >[64]</a
              ></sup
            >
            In fact, in the early weeks of his Protectorate, Somerset was
            challenged only by the Chancellor,
            <a
              href="https://en.wikipedia.org/wiki/Thomas_Wriothesley,_1st_Earl_of_Southampton"
              title="Thomas Wriothesley, 1st Earl of Southampton"
              >Thomas Wriothesley</a
            >, whom the
            <a
              href="https://en.wikipedia.org/wiki/Earl_of_Southampton"
              title="Earl of Southampton"
              >Earldom of Southampton</a
            >
            had evidently failed to buy off, and by his own brother.<sup
              ><a
                href="https://en.wikipedia.org/wiki/Edward_VI_of_England#cite_note-65"
                >[65]</a
              ></sup
            >
            Wriothesley, a religious conservative, objected to Somerset&apos;s
            assumption of monarchical power over the Council. He then found
            himself abruptly dismissed from the chancellorship on charges of
            selling off some of his offices to delegates.
          </p>
        </section>

        <section id="seymour">
          <h3>Thomas Seymour</h3>
          Somerset faced less manageable opposition from his younger brother
          Thomas Seymour, who has been described as a "worm in the bud".[67] As
          King Edward's uncle, Thomas Seymour demanded the governorship of the
          king's person and a greater share of power.[68] Somerset tried to buy
          his brother off with a barony, an appointment to the Lord Admiralship,
          and a seat on the Privy Council—but Thomas was bent on scheming for
          power. He began smuggling pocket money to King Edward, telling him
          that Somerset held the purse strings too tight, making him a "beggarly
          king".[69] He also urged him to throw off the Protector within two
          years and "bear rule as other kings do"; but Edward, schooled to defer
          to the Council, failed to co-operate.[70] In the spring of 1547, using
          Edward's support to circumvent Somerset's opposition, Thomas Seymour
          secretly married Henry VIII's widow Catherine Parr, whose Protestant
          household included the 11-year-old Lady Jane Grey and the 13-year-old
          Lady Elizabeth.[71] In summer 1548, a pregnant Catherine Parr
          discovered Thomas Seymour embracing Lady Elizabeth.[72] As a result,
          Elizabeth was removed from Catherine Parr's household and transferred
          to Sir Anthony Denny's. That September, Catherine Parr died shortly
          after childbirth, and Thomas Seymour promptly resumed his attentions
          to Elizabeth by letter, planning to marry her. Elizabeth was
          receptive, but, like Edward, unready to agree to anything unless
          permitted by the Council.[73] In January 1549, the Council had Thomas
          Seymour arrested on various charges, including embezzlement at the
          Bristol mint. King Edward, whom Seymour was accused of planning to
          marry to Lady Jane Grey, himself testified about the pocket money.
          Lack of clear evidence for treason ruled out a trial, so Seymour was
          condemned instead by an Act of Attainder and beheaded on 20 March
          1549.
        </section>

        <section id="war">
          <h3>War</h3>
          <p>
            Somerset&apos;s only undoubted skill was as a soldier, which he had
            proven on expeditions to Scotland and in the defence of
            <a
              href="https://en.wikipedia.org/wiki/Boulogne-sur-Mer"
              title="François van der Delft"
              >Boulogne-sur-Mer</a
            >
            in 1546. From the first, his main interest as Protector was the war
            against Scotland.<sup
              ><a
                href="https://en.wikipedia.org/wiki/Edward_VI_of_England#cite_note-75"
                >[75]</a
              ></sup
            >
            After a crushing victory at the
            <a
              href="https://en.wikipedia.org/wiki/Battle_of_Pinkie"
              title="Battle of Pinkie"
              >Battle of Pinkie</a
            >
            in September 1547, he set up a network of garrisons in Scotland,
            stretching as far north as
            <a href="https://en.wikipedia.org/wiki/Dundee" title="Dundee"
              >Dundee</a
            >.<sup
              ><a
                href="https://en.wikipedia.org/wiki/Edward_VI_of_England#cite_note-76"
                >[76]</a
              ></sup
            >
            His initial successes, however, were followed by a loss of
            direction, as his aim of uniting the realms through conquest became
            increasingly unrealistic. The Scots allied with France, who sent
            reinforcements for the defence of Edinburgh in 1548.<sup
              ><a
                href="https://en.wikipedia.org/wiki/Edward_VI_of_England#cite_note-77"
                >[77]</a
              ></sup
            >
            The Queen of Scots was moved to France, where she was betrothed to
            the
            <a
              href="https://en.wikipedia.org/wiki/Francis_II_of_France"
              title=""
              >Dauphin</a
            >.<sup
              ><a
                href="https://en.wikipedia.org/wiki/Edward_VI_of_England#cite_note-78"
                >[78]</a
              ></sup
            >
            The cost of maintaining the Protector&apos;s massive armies and his
            permanent garrisons in Scotland also placed an unsustainable burden
            on the royal finances.<sup
              ><a
                href="https://en.wikipedia.org/wiki/Edward_VI_of_England#cite_note-Bwar-79"
                >[79]</a
              ></sup
            >
            A French attack on Boulogne in August 1549 at last forced Somerset
            to begin a withdrawal from Scotland.
          </p>
        </section>

        <section id="rebellion">
          <h3>Rebellion</h3>
          <p>
            During 1548, England was subject to social unrest. After April 1549,
            a series of armed revolts broke out, fuelled by various religious
            and agrarian grievances. The two most serious rebellions, which
            required major military intervention to put down, were in Devon and
            Cornwall and in Norfolk. The first, sometimes called the
            <a
              href="https://en.wikipedia.org/wiki/Prayer_Book_Rebellion"
              title="Prayer Book Rebellion"
              >Prayer Book Rebellion</a
            >, arose from the imposition of Protestantism, and the second, led
            by a tradesman called
            <a
              href="https://en.wikipedia.org/wiki/Kett%27s_Rebellion"
              title="Kett's Rebellion"
              >Robert Kett</a
            >, mainly from the encroachment of landlords on common grazing
            ground.<sup
              ><a
                href="https://en.wikipedia.org/wiki/Edward_VI_of_England#cite_note-81"
                >[81]</a
              ></sup
            >
            A complex aspect of the social unrest was that the protesters
            believed they were acting legitimately against
            <a href="https://en.wikipedia.org/wiki/Enclosure" title="Enclosure"
              >enclosing</a
            >
            landlords with the Protector&apos;s support, convinced that the
            landlords were the lawbreakers.<sup
              ><a
                href="https://en.wikipedia.org/wiki/Edward_VI_of_England#cite_note-82"
                >[82]</a
              ></sup
            >
          </p>
          <p>
            The same justification for outbreaks of unrest was voiced throughout
            the country, not only in Norfolk and the west. The origin of the
            popular view of Somerset as sympathetic to the rebel cause lies
            partly in his series of sometimes liberal, often contradictory,
            proclamations,<sup
              ><a
                href="https://en.wikipedia.org/wiki/Edward_VI_of_England#cite_note-83"
                >[83]</a
              ></sup
            >
            and partly in the uncoordinated activities of the commissions he
            sent out in 1548 and 1549 to investigate grievances about loss of
            tillage, encroachment of large sheep flocks on
            <a
              href="https://en.wikipedia.org/wiki/Common_land"
              title="Common land"
              >common land</a
            >, and similar issues.<sup
              ><a
                href="https://en.wikipedia.org/wiki/Edward_VI_of_England#cite_note-84"
                >[84]</a
              ></sup
            >
            Somerset&apos;s commissions were led by an evangelical M.P. called
            <a
              href="https://en.wikipedia.org/wiki/John_Hales_(died_1572)"
              title="John Hales (died 1572)"
              >John Hales</a
            >, whose socially liberal rhetoric linked the issue of enclosure
            with Reformation theology and the notion of a godly
            <a
              href="https://en.wikipedia.org/wiki/Commonwealth"
              title="Commonwealth"
              >commonwealth</a
            >.<sup
              ><a
                href="https://en.wikipedia.org/wiki/Edward_VI_of_England#cite_note-85"
                >[85]</a
              ></sup
            >
            Local groups often assumed that the findings of these commissions
            entitled them to act against offending landlords themselves.<sup
              ><a
                href="https://en.wikipedia.org/wiki/Edward_VI_of_England#cite_note-86"
                >[86]</a
              ></sup
            >
            King Edward wrote in his <em>Chronicle</em> that the 1549 risings
            began &quot;because certain commissions were sent down to pluck down
            enclosures&quot;.<sup
              ><a
                href="https://en.wikipedia.org/wiki/Edward_VI_of_England#cite_note-87"
                >[87]</a
              ></sup
            >
          </p>
          <p>
            Whatever the popular view of Somerset, the disastrous events of 1549
            were taken as evidence of a colossal failure of government, and the
            Council laid the responsibility at the Protector&apos;s door.<sup
              ><a
                href="https://en.wikipedia.org/wiki/Edward_VI_of_England#cite_note-E350-88"
                >[88]</a
              ></sup
            >
            In July 1549, Paget wrote to Somerset: &quot;Every man of the
            council have misliked your proceedings ... would to God, that, at
            the first stir you had followed the matter hotly, and caused justice
            to be ministered in solemn fashion to the terror of others
            ...&quot;.<sup
              ><a
                href="https://en.wikipedia.org/wiki/Edward_VI_of_England#cite_note-89"
              ></a
            ></sup>
          </p>
        </section>

        <section id="fallofsomerset">
          <h3>Fall of Somerset</h3>
          <p>
            The sequence of events that led to Somerset&apos;s removal from
            power has often been called a <em>coup d&apos;&eacute;tat</em>.<sup
              ><a
                href="https://en.wikipedia.org/wiki/Edward_VI_of_England#cite_note-E350-88"
                >[88]</a
              ></sup
            >
            By 1 October 1549, Somerset had been alerted that his rule faced a
            serious threat. He issued a proclamation calling for assistance,
            took possession of the king&apos;s person, and withdrew for safety
            to the fortified
            <a
              href="https://en.wikipedia.org/wiki/Windsor_Castle"
              title="Windsor Castle"
              >Windsor Castle</a
            >, where Edward wrote, &quot;Me thinks I am in prison&quot;.<sup
              ><a
                href="https://en.wikipedia.org/wiki/Edward_VI_of_England#cite_note-90"
                >[90]</a
              ></sup
            >
            Meanwhile, a united Council published details of Somerset&apos;s
            government mismanagement. They made clear that the Protector&apos;s
            power came from them, not from Henry VIII&apos;s will. On 11
            October, the Council had Somerset arrested and brought the king to
            <a
              href="https://en.wikipedia.org/wiki/Richmond_Palace"
              title="Richmond Palace"
              >Richmond</a
            >.<sup
              ><a
                href="https://en.wikipedia.org/wiki/Edward_VI_of_England#cite_note-E350-88"
                >[88]</a
              ></sup
            >
            Edward summarised the charges against Somerset in his
            <em>Chronicle</em>: &quot;ambition, vainglory, entering into rash
            wars in mine youth, negligent looking on Newhaven, enriching himself
            of my treasure, following his own opinion, and doing all by his own
            authority, etc.&quot;<sup
              ><a
                href="https://en.wikipedia.org/wiki/Edward_VI_of_England#cite_note-91"
                >[91]</a
              ></sup
            >
            In February 1550,
            <a
              href="https://en.wikipedia.org/wiki/John_Dudley,_1st_Duke_of_Northumberland"
              title="John Dudley, 1st Duke of Northumberland"
              >John Dudley, Earl of Warwick</a
            >, emerged as the leader of the Council and, in effect, as
            Somerset&apos;s successor. Although Somerset was released from the
            Tower and restored to the Council, he was executed for
            <a href="https://en.wikipedia.org/wiki/Felony" title="Felony"
              >felony</a
            >
            in January 1552 after scheming to overthrow Dudley&apos;s
            regime.<sup
              ><a
                href="https://en.wikipedia.org/wiki/Edward_VI_of_England#cite_note-92"
                >[92]</a
              ></sup
            >
            Edward noted his uncle&apos;s death in his <em>Chronicle</em>:
            &quot;the duke of Somerset had his head cut off upon Tower Hill
            between eight and nine o&apos;clock in the morning&quot;.<sup
              ><a
                href="https://en.wikipedia.org/wiki/Edward_VI_of_England#cite_note-93"
                >[93]</a
              ></sup
            >
          </p>
          <p>
            Historians contrast the efficiency of Somerset&apos;s takeover of
            power, in which they detect the organising skills of allies such as
            Paget, the &quot;master of practices&quot;, with the subsequent
            ineptitude of his rule.<sup
              ><a
                href="https://en.wikipedia.org/wiki/Edward_VI_of_England#cite_note-94"
                >[94]</a
              ></sup
            >
            By autumn 1549, his costly wars had lost momentum, the crown faced
            financial ruin, and riots and rebellions had broken out around the
            country. Until recent decades, Somerset&apos;s reputation with
            historians was high, in view of his many proclamations that appeared
            to back the common people against a rapacious landowning class.<sup
              ><a
                href="https://en.wikipedia.org/wiki/Edward_VI_of_England#cite_note-95"
                >[95]</a
              ></sup
            >
            More recently, however, he has often been portrayed as an arrogant
            and aloof ruler, lacking in political and administrative skills.
          </p>
        </section>
      </section>

      <section id="northumberland">
        <h2>Northumberland's leadership</h2>
        <p>
          In contrast, Somerset&apos;s successor
          <a
            href="https://en.wikipedia.org/wiki/John_Dudley,_1st_Duke_of_Northumberland"
            title="John Dudley, 1st Duke of Northumberland"
            >John Dudley</a
          >, Earl of Warwick, made
          <a
            href="https://en.wikipedia.org/wiki/Duke_of_Northumberland"
            title="Duke of Northumberland"
            >Duke of Northumberland</a
          >
          in 1551, was once regarded by historians merely as a grasping schemer
          who cynically elevated and enriched himself at the expense of the
          crown.<sup
            ><a
              href="https://en.wikipedia.org/wiki/Edward_VI_of_England#cite_note-97"
              >[97]</a
            ></sup
          >
          Since the 1970s, the administrative and economic achievements of his
          regime have been recognised, and he has been credited with restoring
          the authority of the royal Council and returning the government to an
          even keel after the disasters of Somerset&apos;s protectorate.<sup
            ><a
              href="https://en.wikipedia.org/wiki/Edward_VI_of_England#cite_note-98"
              >[98]</a
            ></sup
          >
        </p>
        <p>
          The Earl of Warwick&apos;s rival for leadership of the new regime was
          <a
            href="https://en.wikipedia.org/wiki/Thomas_Wriothesley,_1st_Earl_of_Southampton"
            title="Thomas Wriothesley, 1st Earl of Southampton"
            >Thomas Wriothesley, 1st Earl of Southampton</a
          >, whose conservative supporters had allied with Dudley&apos;s
          followers to create a unanimous Council, which they, and observers
          such as the Holy Roman Emperor
          <a
            href="https://en.wikipedia.org/wiki/Charles_V,_Holy_Roman_Emperor"
            title="Charles V, Holy Roman Emperor"
            >Charles V</a
          >&apos;s ambassador, expected to reverse Somerset&apos;s policy of
          religious reform.<sup
            ><a
              href="https://en.wikipedia.org/wiki/Edward_VI_of_England#cite_note-99"
              >[99]</a
            ></sup
          >
          Warwick, on the other hand, pinned his hopes on the king&apos;s strong
          Protestantism and, claiming that Edward was old enough to rule in
          person, moved himself and his people closer to the king, taking
          control of the Privy Chamber.<sup
            ><a
              href="https://en.wikipedia.org/wiki/Edward_VI_of_England#cite_note-Brigden_2000_p=193-100"
              >[100]</a
            ></sup
          >
          Paget, accepting a barony, joined Warwick when he realised that a
          conservative policy would not bring the emperor onto the English side
          over Boulogne.<sup
            ><a
              href="https://en.wikipedia.org/wiki/Edward_VI_of_England#cite_note-101"
              >[101]</a
            ></sup
          >
          Southampton prepared a case for executing Somerset, aiming to
          discredit Warwick through Somerset&apos;s statements that he had done
          all with Warwick&apos;s co-operation. As a counter-move, Warwick
          convinced parliament to free Somerset, which it did on 14 January
          1550. Warwick then had Southampton and his followers purged from the
          Council after winning the support of Council members in return for
          titles, and was made
          <a
            href="https://en.wikipedia.org/wiki/Lord_President_of_the_Council"
            title="Lord President of the Council"
            >Lord President of the Council</a
          >
          and great master of the king&apos;s household.<sup
            ><a
              href="https://en.wikipedia.org/wiki/Edward_VI_of_England#cite_note-102"
              >[102]</a
            ></sup
          >
          Although not called a Protector, he was now clearly the head of the
          government.<sup
            ><a
              href="https://en.wikipedia.org/wiki/Edward_VI_of_England#cite_note-103"
              >[103]</a
            ></sup
          >
        </p>
        <p>
          As Edward was growing up, he was able to understand more and more
          government business. However, his actual involvement in decisions has
          long been a matter of debate, and during the 20th century, historians
          have presented the whole gamut of possibilities, &quot;balanc[ing] an
          articulate puppet against a mature, precocious, and essentially adult
          king&quot;, in the words of Stephen Alford.<sup
            ><a
              href="https://en.wikipedia.org/wiki/Edward_VI_of_England#cite_note-104"
              >[104]</a
            ></sup
          >
          A special &quot;Counsel for the Estate&quot; was created when Edward
          was fourteen. Edward chose the members himself.<sup
            ><a
              href="https://en.wikipedia.org/wiki/Edward_VI_of_England#cite_note-105"
              >[105]</a
            ></sup
          >
          In the weekly meetings with this Council, Edward was &quot;to hear the
          debating of things of most importance&quot;.<sup
            ><a
              href="https://en.wikipedia.org/wiki/Edward_VI_of_England#cite_note-106"
              >[106]</a
            ></sup
          >
          A major point of contact with the king was the Privy Chamber, and
          there Edward worked closely with
          <a
            href="https://en.wikipedia.org/wiki/William_Cecil,_1st_Baron_Burghley"
            title="William Cecil, 1st Baron Burghley"
            >William Cecil</a
          >
          and
          <a
            href="https://en.wikipedia.org/wiki/William_Petre"
            title="William Petre"
            >William Petre</a
          >, the
          <a
            href="https://en.wikipedia.org/wiki/Secretary_of_State_(England)"
            title="Secretary of State (England)"
            >Principal Secretaries</a
          >.<sup
            ><a
              href="https://en.wikipedia.org/wiki/Edward_VI_of_England#cite_note-107"
              >[107]</a
            ></sup
          >
          The king&apos;s greatest influence was in matters of religion, where
          the Council followed the strongly Protestant policy that Edward
          favoured.<sup
            ><a
              href="https://en.wikipedia.org/wiki/Edward_VI_of_England#cite_note-108"
              >[108]</a
            ></sup
          >
        </p>
        <p>
          The Duke of Northumberland&apos;s mode of operation was very different
          from Somerset&apos;s. Careful to make sure he always commanded a
          majority of councillors, he encouraged a working council and used it
          to legitimise his authority. Lacking Somerset&apos;s
          blood-relationship with the king, he added members to the Council from
          his own faction in order to control it. He also added members of his
          family to the royal household.<sup
            ><a
              href="https://en.wikipedia.org/wiki/Edward_VI_of_England#cite_note-109"
              >[109]</a
            ></sup
          >
          He saw that to achieve personal dominance, he needed total procedural
          control of the Council.<sup
            ><a
              href="https://en.wikipedia.org/wiki/Edward_VI_of_England#cite_note-110"
              >[110]</a
            ></sup
          >
          In the words of historian
          <a
            href="https://en.wikipedia.org/wiki/John_Guy_(historian)"
            title="John Guy (historian)"
            >John Guy</a
          >, &quot;Like Somerset, he became quasi-king; the difference was that
          he managed the bureaucracy on the pretence that Edward had assumed
          full sovereignty, whereas Somerset had asserted the right to
          near-sovereignty as Protector&quot;.<sup
            ><a
              href="https://en.wikipedia.org/wiki/Edward_VI_of_England#cite_note-111"
              >[111]</a
            ></sup
          >
        </p>
        <div class="shilling">
          <div>
            <a
              href="https://en.wikipedia.org/wiki/File:King_Edward_VI_shilling.jpg"
              ><img
                alt="Shilling"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/King_Edward_VI_shilling.jpg/310px-King_Edward_VI_shilling.jpg"
                srcset="
                  //upload.wikimedia.org/wikipedia/commons/thumb/5/53/King_Edward_VI_shilling.jpg/465px-King_Edward_VI_shilling.jpg 1.5x,
                  //upload.wikimedia.org/wikipedia/commons/thumb/5/53/King_Edward_VI_shilling.jpg/620px-King_Edward_VI_shilling.jpg 2x
                "/></a
            >&nbsp;
          </div>

          <div>
            <a href="https://en.wikipedia.org/wiki/Shilling" title="Shilling"
              >Shilling</a
            >
            with portrait of Edward VI, struck 1551&ndash;1553
          </div>
        </div>
        <p>
          Warwick&apos;s war policies were more pragmatic than Somerset&apos;s,
          and they have earned him criticism for weakness. In 1550, he signed a
          peace treaty with France that agreed to withdrawal from Boulogne and
          recalled all English garrisons from Scotland. In 1551, Edward was
          betrothed to
          <a
            href="https://en.wikipedia.org/wiki/Elisabeth_of_Valois"
            title="Elisabeth of Valois"
            >Elisabeth of Valois</a
          >,
          <a
            href="https://en.wikipedia.org/wiki/Henry_II_of_France"
            title="Henry II of France"
            >King Henry II</a
          >&apos;s daughter,<sup
            ><a
              href="https://en.wikipedia.org/wiki/Edward_VI_of_England#cite_note-112"
              >[112]</a
            ></sup
          >
          and was made a
          <a
            href="https://en.wikipedia.org/wiki/Order_of_Saint_Michael"
            title="Order of Saint Michael"
            >Knight of Saint Michael</a
          >.<sup
            ><a
              href="https://en.wikipedia.org/wiki/Edward_VI_of_England#cite_note-113"
              >[113]</a
            ></sup
          >
          In practice, he realised that England could no longer support the cost
          of wars.<sup
            ><a
              href="https://en.wikipedia.org/wiki/Edward_VI_of_England#cite_note-114"
              >[114]</a
            ></sup
          >
          At home, he took measures to police local unrest. To forestall future
          rebellions, he kept permanent representatives of the crown in the
          localities, including
          <a
            href="https://en.wikipedia.org/wiki/Lord_lieutenant"
            title="Lord lieutenant"
            >lords lieutenant</a
          >, who commanded military forces and reported back to central
          government.<sup
            ><a
              href="https://en.wikipedia.org/wiki/Edward_VI_of_England#cite_note-115"
              >[115]</a
            ></sup
          >
        </p>
        <p>
          Working with
          <a
            href="https://en.wikipedia.org/wiki/William_Paulet,_1st_Marquess_of_Winchester"
            title="William Paulet, 1st Marquess of Winchester"
            >William Paulet</a
          >
          and
          <a
            href="https://en.wikipedia.org/wiki/Walter_Mildmay"
            title="Walter Mildmay"
            >Walter Mildmay</a
          >, Warwick tackled the disastrous state of the kingdom&apos;s
          finances.<sup
            ><a
              href="https://en.wikipedia.org/wiki/Edward_VI_of_England#cite_note-116"
              >[116]</a
            ></sup
          >
          However, his regime first succumbed to the temptations of a quick
          profit by further
          <a href="https://en.wikipedia.org/wiki/Debasement" title="Debasement"
            >debasing</a
          >
          the coinage.<sup
            ><a
              href="https://en.wikipedia.org/wiki/Edward_VI_of_England#cite_note-117"
              >[117]</a
            ></sup
          >
          The economic disaster that resulted caused Warwick to hand the
          initiative to the expert
          <a
            href="https://en.wikipedia.org/wiki/Thomas_Gresham"
            title="Thomas Gresham"
            >Thomas Gresham</a
          >. By 1552, confidence in the coinage was restored, prices fell, and
          trade at last improved. Though a full economic recovery was not
          achieved until Elizabeth&apos;s reign, its origins lay in the Duke of
          Northumberland&apos;s policies.<sup
            ><a
              href="https://en.wikipedia.org/wiki/Edward_VI_of_England#cite_note-118"
              >[118]</a
            ></sup
          >
          The regime also cracked down on widespread embezzlement of government
          finances, and carried out a thorough review of revenue collection
          practices, which has been called &quot;one of the more remarkable
          achievements of Tudor administration&quot;
        </p>
      </section>

      <section id="reformation">
        <h2>Reformation</h2>
        <hr />
        <p>
          In the matter of religion, the regime of Northumberland followed the
          same policy as that of Somerset, supporting an increasingly vigorous
          programme of reform.<sup
            ><a
              href="https://en.wikipedia.org/wiki/Edward_VI_of_England#cite_note-120"
              >[120]</a
            ></sup
          >
          Although Edward VI&apos;s practical influence on government was
          limited, his intense Protestantism made a reforming administration
          obligatory; his succession was managed by the reforming faction, who
          continued in power throughout his reign. The man Edward trusted most,
          Thomas Cranmer, Archbishop of Canterbury, introduced a series of
          religious reforms that revolutionised the English church from one
          that&mdash;while rejecting papal supremacy&mdash;remained essentially
          Catholic, to one that was institutionally Protestant. The confiscation
          of church property that had begun under Henry VIII resumed under
          Edward&mdash;notably with the dissolution of the
          <a href="https://en.wikipedia.org/wiki/Chantries" title="Chantries"
            >chantries</a
          >&mdash;to the great monetary advantage of the crown and the new
          owners of the seized property.<sup
            ><a
              href="https://en.wikipedia.org/wiki/Edward_VI_of_England#cite_note-121"
              >[121]</a
            ></sup
          >
          Church reform was therefore as much a political as a religious policy
          under Edward VI.<sup
            ><a
              href="https://en.wikipedia.org/wiki/Edward_VI_of_England#cite_note-122"
              >[122]</a
            ></sup
          >
          By the end of his reign, the church had been financially ruined, with
          much of the property of the bishops transferred into lay hands.<sup
            ><a
              href="https://en.wikipedia.org/wiki/Edward_VI_of_England#cite_note-123"
              >[123]</a
            ></sup
          >
        </p>
        <p>
          The religious convictions of both Somerset and Northumberland have
          proved elusive for historians, who are divided on the sincerity of
          their Protestantism.<sup
            ><a
              href="https://en.wikipedia.org/wiki/Edward_VI_of_England#cite_note-124"
              >[124]</a
            ></sup
          >
          There is less doubt, however, about the religious fervour<sup
            ><a
              href="https://en.wikipedia.org/wiki/Edward_VI_of_England#cite_note-125"
              >[125]</a
            ></sup
          >
          of King Edward, who was said to have read twelve chapters of scripture
          daily and enjoyed sermons, and was commemorated by
          <a href="https://en.wikipedia.org/wiki/John_Foxe" title="John Foxe"
            >John Foxe</a
          >
          as a &quot;godly imp&quot;.<sup
            ><a
              href="https://en.wikipedia.org/wiki/Edward_VI_of_England#cite_note-126"
              >[126]</a
            ></sup
          >
          Edward was depicted during his life and afterwards as a new
          <a href="https://en.wikipedia.org/wiki/Josiah" title="Josiah"
            >Josiah</a
          >, the biblical king who destroyed the
          <a href="https://en.wikipedia.org/wiki/Idolatry" title="Idolatry"
            >idols</a
          >
          of
          <a href="https://en.wikipedia.org/wiki/Baal" title="Baal">Baal</a
          >.<sup
            ><a
              href="https://en.wikipedia.org/wiki/Edward_VI_of_England#cite_note-127"
              >[127]</a
            ></sup
          >
          He could be
          <a href="https://en.wikipedia.org/wiki/Prig" title="Prig">priggish</a>
          in his anti-Catholicism and once asked Catherine Parr to persuade Lady
          Mary &quot;to attend no longer to foreign dances and merriments which
          do not become a most Christian princess&quot;.<sup
            ><a
              href="https://en.wikipedia.org/wiki/Edward_VI_of_England#cite_note-Skidmore_2007_p=38-21"
              >[21]</a
            ></sup
          >
          Edward&apos;s biographer Jennifer Loach cautions, however, against
          accepting too readily the pious image of Edward handed down by the
          reformers, as in
          <a href="https://en.wikipedia.org/wiki/John_Foxe" title="John Foxe"
            >John Foxe</a
          >&apos;s influential
          <em
            ><a
              href="https://en.wikipedia.org/wiki/Foxe%27s_Book_of_Martyrs"
              title="Foxe's Book of Martyrs"
              >Acts and Monuments</a
            ></em
          >, where a woodcut depicts the young king listening to a sermon by
          <a
            href="https://en.wikipedia.org/wiki/Hugh_Latimer"
            title="Hugh Latimer"
            >Hugh Latimer</a
          >.<sup
            ><a
              href="https://en.wikipedia.org/wiki/Edward_VI_of_England#cite_note-128"
              >[128]</a
            ></sup
          >
          In the early part of his life, Edward conformed to the prevailing
          Catholic practices, including attendance at
          <a
            href="https://en.wikipedia.org/wiki/Mass_(liturgy)"
            title="Mass (liturgy)"
            >mass</a
          >: but he became convinced, under the influence of Cranmer and the
          reformers among his tutors and courtiers, that &quot;true&quot;
          religion should be imposed in England.<sup
            ><a
              href="https://en.wikipedia.org/wiki/Edward_VI_of_England#cite_note-129"
              >[129]</a
            ></sup
          >
        </p>
        <p>
          The
          <a
            href="https://en.wikipedia.org/wiki/English_Reformation"
            title="English Reformation"
            >English Reformation</a
          >
          advanced under pressure from two directions: from the traditionalists
          on the one hand and the
          <a href="https://en.wikipedia.org/wiki/Zealots" title="Zealots"
            >zealots</a
          >
          on the other, who led incidents of
          <a
            href="https://en.wikipedia.org/wiki/Iconoclasm"
            title="Catherine Parr"
            >iconoclasm</a
          >
          (image-smashing) and complained that reform did not go far enough.
          Reformed doctrines were made official, such as
          <a href="https://en.wikipedia.org/wiki/Sola_fide" title="Sola fide"
            >justification by faith alone</a
          >
          and
          <a href="https://en.wikipedia.org/wiki/Eucharist" title="Eucharist"
            >communion</a
          >
          for
          <a href="https://en.wikipedia.org/wiki/Laity" title="Laity">laity</a>
          as well as clergy in
          <a
            href="https://en.wikipedia.org/wiki/Communion_under_both_kinds"
            title="Communion under both kinds"
            >both kinds</a
          >, of bread and wine.<sup
            ><a
              href="https://en.wikipedia.org/wiki/Edward_VI_of_England#cite_note-130"
              >[130]</a
            ></sup
          >
          The Ordinal of 1550 replaced the divine ordination of priests with a
          government-run appointment system, authorising
          <a
            href="https://en.wikipedia.org/wiki/Minister_(Christianity)"
            title="Minister (Christianity)"
            >ministers</a
          >
          to preach the gospel and administer the
          <a href="https://en.wikipedia.org/wiki/Sacraments" title="Sacraments"
            >sacraments</a
          >
          rather than, as before, &quot;to offer sacrifice and celebrate mass
          both for the living and the dead&quot;.<sup
            ><a
              href="https://en.wikipedia.org/wiki/Edward_VI_of_England#cite_note-131"
              >[131]</a
            ></sup
          >
          Cranmer set himself the task of writing a uniform
          <a href="https://en.wikipedia.org/wiki/Liturgy" title="Liturgy"
            >liturgy</a
          >
          in English, detailing all weekly and daily services and religious
          festivals, to be made compulsory in the first
          <a
            href="https://en.wikipedia.org/wiki/Act_of_Uniformity_1549"
            title="Act of Uniformity 1549"
            >Act of Uniformity of 1549</a
          >.<sup
            ><a
              href="https://en.wikipedia.org/wiki/Edward_VI_of_England#cite_note-E345-132"
              >[132]</a
            ></sup
          >
          The
          <em
            ><a
              href="https://en.wikipedia.org/wiki/Book_of_Common_Prayer"
              title="Book of Common Prayer"
              >Book of Common Prayer</a
            ></em
          >
          of 1549, intended as a compromise, was attacked by traditionalists for
          dispensing with many cherished rituals of the liturgy, such as the
          <a
            href="https://en.wikipedia.org/wiki/Elevation_(liturgy)"
            title="Elevation (liturgy)"
            >elevation</a
          >
          of the bread and wine,<sup
            ><a
              href="https://en.wikipedia.org/wiki/Edward_VI_of_England#cite_note-133"
              >[133]</a
            ></sup
          >
          while some reformers complained about the retention of too many
          &quot;popish&quot; elements, including vestiges of sacrificial rites
          at communion.<sup
            ><a
              href="https://en.wikipedia.org/wiki/Edward_VI_of_England#cite_note-E345-132"
              >[132]</a
            ></sup
          >
          The prayer book was also opposed by many senior Catholic clerics,
          including
          <a
            href="https://en.wikipedia.org/wiki/Stephen_Gardiner"
            title="Stephen Gardiner"
            >Stephen Gardiner</a
          >, Bishop of Winchester, and
          <a
            href="https://en.wikipedia.org/wiki/Edmund_Bonner"
            title="Edmund Bonner"
            >Edmund Bonner</a
          >, Bishop of London, who were both imprisoned in the
          <a
            href="https://en.wikipedia.org/wiki/Tower_of_London"
            title="Tower of London"
            >Tower</a
          >
          and, along with others, deprived of their sees.<sup
            ><a
              href="https://en.wikipedia.org/wiki/Edward_VI_of_England#cite_note-Brigden_2000_p=193-100"
              >[100]</a
            ></sup
          >
        </p>
        <p>
          After 1551, the Reformation advanced further, with the approval and
          encouragement of Edward, who began to exert more personal influence in
          his role as
          <a
            href="https://en.wikipedia.org/wiki/Supreme_Head"
            title="Supreme Head"
            >Supreme Head</a
          >
          of the church.<sup
            ><a
              href="https://en.wikipedia.org/wiki/Edward_VI_of_England#cite_note-134"
              >[134]</a
            ></sup
          >
          The new changes were also a response to criticism from such reformers
          as
          <a
            href="https://en.wikipedia.org/wiki/John_Hooper_(bishop)"
            title="John Hooper (bishop)"
            >John Hooper</a
          >, Bishop of Gloucester, and the Scot
          <a href="https://en.wikipedia.org/wiki/John_Knox" title="John Knox"
            >John Knox</a
          >, who was employed as a minister in
          <a
            href="https://en.wikipedia.org/wiki/Newcastle_upon_Tyne"
            title="Newcastle upon Tyne"
            >Newcastle upon Tyne</a
          >
          under the Duke of Northumberland and whose preaching at court prompted
          the king to oppose kneeling at communion.<sup
            ><a
              href="https://en.wikipedia.org/wiki/Edward_VI_of_England#cite_note-135"
              >[135]</a
            ></sup
          >
          Cranmer was also influenced by the views of the continental reformer
          <a href="https://en.wikipedia.org/wiki/Martin_Bucer" title=""
            >Martin Bucer</a
          >, who died in England in 1551, by
          <a
            href="https://en.wikipedia.org/wiki/Pietro_Martire_Vermigli"
            title="Pietro Martire Vermigli"
            >Peter Martyr</a
          >, who was teaching at Oxford, and by other foreign theologians.<sup
            ><a
              href="https://en.wikipedia.org/wiki/Edward_VI_of_England#cite_note-136"
              >[136]</a
            ></sup
          >
          The progress of the Reformation was further speeded by the
          consecration of more reformers as bishops.<sup
            ><a
              href="https://en.wikipedia.org/wiki/Edward_VI_of_England#cite_note-137"
              >[137]</a
            ></sup
          >
          In the winter of 1551&ndash;52, Cranmer rewrote the
          <em>Book of Common Prayer</em> in less ambiguous reformist terms,
          revised
          <a href="https://en.wikipedia.org/wiki/Canon_law" title="Canon law"
            >canon law</a
          >, and prepared a doctrinal statement, the
          <a
            href="https://en.wikipedia.org/wiki/Thirty-nine_Articles"
            title="Thirty-nine Articles"
            >Forty-two Articles</a
          >, to clarify the practice of the reformed religion, particularly in
          the divisive matter of the communion service.<sup
            ><a
              href="https://en.wikipedia.org/wiki/Edward_VI_of_England#cite_note-138"
              >[138]</a
            ></sup
          >
          Cranmer&apos;s formulation of the reformed religion, finally divesting
          the communion service of any notion of the
          <a
            href="https://en.wikipedia.org/wiki/Real_presence"
            title="Real presence"
            >real presence</a
          >
          of God in the bread and the wine, effectively abolished the
          <a
            href="https://en.wikipedia.org/wiki/Mass_(liturgy)"
            title="Mass (liturgy)"
            >mass</a
          >.<sup
            ><a
              href="https://en.wikipedia.org/wiki/Edward_VI_of_England#cite_note-139"
              >[139]</a
            ></sup
          >
          According to Elton, the publication of Cranmer&apos;s revised prayer
          book in 1552, supported by a second
          <a
            href="https://en.wikipedia.org/wiki/Act_of_Uniformity_1552"
            title="Act of Uniformity 1552"
            >Act of Uniformity</a
          >, &quot;marked the arrival of the English Church at
          Protestantism&quot;.<sup
            ><a
              href="https://en.wikipedia.org/wiki/Edward_VI_of_England#cite_note-140"
              >[140]</a
            ></sup
          >
          The prayer book of 1552 remains the foundation of the Church of
          England&apos;s services.<sup
            ><a
              href="https://en.wikipedia.org/wiki/Edward_VI_of_England#cite_note-141"
              >[141]</a
            ></sup
          >
          However, Cranmer was unable to implement all these reforms once it
          became clear in spring 1553 that King Edward, upon whom the whole
          Reformation in England depended, was dying
        </p>
      </section>

      <section id="succession">
        <h2>Succession Crisis</h2>
        <hr />

        <section id="devise">
          <h3>Devise for the succession</h3>
          <p>
            In February 1553, Edward VI became ill, and by June, after several
            improvements and relapses, he was in a hopeless condition.<sup
              ><a
                href="https://en.wikipedia.org/wiki/Edward_VI_of_England#cite_note-Ldeath-143"
                >[143]</a
              ></sup
            >
            The king&apos;s death and the succession of his Catholic half-sister
            Mary would jeopardise the English Reformation, and Edward&apos;s
            Council and officers had many reasons to fear it.<sup
              ><a
                href="https://en.wikipedia.org/wiki/Edward_VI_of_England#cite_note-144"
                >[144]</a
              ></sup
            >
            Edward himself opposed Mary&apos;s succession, not only on religious
            grounds but also on those of legitimacy and male inheritance, which
            also applied to Elizabeth.<sup
              ><a
                href="https://en.wikipedia.org/wiki/Edward_VI_of_England#cite_note-145"
                >[145]</a
              ></sup
            >
            He composed a draft document, headed &quot;My devise for the
            succession&quot;, in which he undertook to change the succession,
            most probably inspired by his father Henry VIII&apos;s
            precedent.<sup
              ><a
                href="https://en.wikipedia.org/wiki/Edward_VI_of_England#cite_note-146"
                >[146]</a
              ></sup
            >
            He passed over the claims of his half-sisters and, at last, settled
            the Crown on his first cousin once removed, the 16-year-old Lady
            Jane Grey, who on 25 May 1553 had married
            <a
              href="https://en.wikipedia.org/wiki/Lord_Guilford_Dudley"
              title="Lord Guilford Dudley"
              >Lord Guilford Dudley</a
            >, a younger son of the Duke of Northumberland.<sup
              ><a
                href="https://en.wikipedia.org/wiki/Edward_VI_of_England#cite_note-147"
                >[147]</a
              ></sup
            >
            In the document he writes:
          </p>
          <blockquote class="templatequote">
            <p>My devise for the Succession</p>
            <p>
              1. For lakke of issu
              <em
                >[masle inserted above the line, but afterwards crossed out]</em
              >
              of my body
              <em
                >[to the issu (masle above the line) cumming of thissu femal, as
                i have after declared inserted, but crossed out]</em
              >. To the L Franceses heires masles,
              <em>[For lakke of erased]</em>
              <em>[if she have any inserted]</em> such issu
              <em>[befor my death inserted]</em> to the L&apos; Janes
              <em>[and her inserted]</em> heires masles, To the L Katerins
              heires masles, To the L Maries heires masles, To the heires masles
              of the daughters wich she shal haue hereafter. Then to the L
              Margets heires masles. For lakke of such issu, To th&apos;eires
              masles of the L Janes daughters. To th&apos;eires masles of the L
              Katerins daughters, and so forth til yow come to the L Margets
              <em>[daughters inserted]</em> heires masles.
            </p>
            <p>
              2. If after my death theire masle be entred into 18 yere old, then
              he to have the hole rule and gouernauce therof.
            </p>
            <p>
              3. But if he be under 18, then his mother to be gouuernres til he
              entre 18 yere old, But to doe nothing w&apos;out th&apos;auise
              (and agremet inserted) of 6 parcel of a counsel to be pointed by
              my last will to the nombre of 20.
            </p>
            <p>
              4. If the mother die befor th&apos;eire entre into 18 the realme
              to be gouuerned by the cousel Prouided that after he be 14 yere al
              great matters of importaunce be opened to him.
            </p>
            <p>
              5. If i died w&apos;out issu, and there were none heire masle,
              then the L Fraunces to be (reget altered to) gouuernres. For lakke
              of her, the her eldest daughters,4 and for lakke of them the L
              Marget to be gouuernres after as is aforsaid, til sume heire masle
              be borne, and then the mother of that child to be gouuernres.
            </p>
            <p>
              6. And if during the rule of the gouuernres ther die 4 of the
              counsel, then shal she by her letters cal an asseble of the
              counsel w&apos;in on month folowing and chose 4 more, wherin she
              shal haue thre uoices. But after her death the 16 shal chose emong
              themselfes til th&apos;eire come to (18 erased) 14 yeare olde, and
              then he by ther aduice shal chose them&quot; (1553).
            </p>
            <div class="templatequotecite">
              &mdash;&thinsp;<cite
                >Edward VI, Devise for the Succession<sup
                  ><a
                    href="https://en.wikipedia.org/wiki/Edward_VI_of_England#cite_note-148"
                    >[148]</a
                  ></sup
                ></cite
              >
            </div>
          </blockquote>
          <p>
            In his document Edward provided, in case of &quot;lack of issue of
            my body&quot;, for the succession of male heirs only, that is, Jane
            Grey&apos;s mother&apos;s male heirs, Jane&apos;s, or her
            sisters&apos;.<sup
              ><a
                href="https://en.wikipedia.org/wiki/Edward_VI_of_England#cite_note-149"
                >[149]</a
              ></sup
            >
            As his death approached and possibly persuaded by
            Northumberland,<sup
              ><a
                href="https://en.wikipedia.org/wiki/Edward_VI_of_England#cite_note-150"
                >[150]</a
              ></sup
            >
            he altered the wording so that Jane and her sisters themselves
            should be able to succeed. Yet Edward conceded Jane&apos;s right
            only as an exception to male rule, demanded by reality, an example
            not to be followed if Jane or her sisters had only daughters.<sup
              ><a
                href="https://en.wikipedia.org/wiki/Edward_VI_of_England#cite_note-151"
                >[151]</a
              ></sup
            ><sup
              ><a
                href="https://en.wikipedia.org/wiki/Edward_VI_of_England#cite_note-153"
                >[a]</a
              ></sup
            >
            In the final document both Mary and Elizabeth were excluded because
            of bastardy;<sup
              ><a
                href="https://en.wikipedia.org/wiki/Edward_VI_of_England#cite_note-154"
                >[153]</a
              ></sup
            >
            since both had been declared bastards under Henry VIII and never
            made legitimate again, this reason could be advanced for both
            sisters.<sup
              ><a
                href="https://en.wikipedia.org/wiki/Edward_VI_of_England#cite_note-155"
                >[154]</a
              ></sup
            >
            The provisions to alter the succession directly contravened Henry
            VIII&apos;s
            <a
              href="https://en.wikipedia.org/wiki/Third_Succession_Act"
              title="Third Succession Act"
              >Third Succession Act</a
            >
            of 1543 and have been described as bizarre and illogical.<sup
              ><a
                href="https://en.wikipedia.org/wiki/Edward_VI_of_England#cite_note-156"
                >[155]</a
              ></sup
            >
          </p>

          <div class="jane-grey">
            <a
              target="_blank"
              href="https://en.wikipedia.org/wiki/File:Streathamladyjayne.jpg"
              ><img
                alt="A stiff Elizabethan-style three-quarter portrait of Lady Jane Grey wearing elaborate formal dress and holding a prayer book. She is a tall, pale, rather horsey-faced young woman."
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Streathamladyjayne.jpg/220px-Streathamladyjayne.jpg"
                class="thumbimage"
                srcset="
                  //upload.wikimedia.org/wikipedia/commons/thumb/8/87/Streathamladyjayne.jpg/330px-Streathamladyjayne.jpg 1.5x,
                  //upload.wikimedia.org/wikipedia/commons/thumb/8/87/Streathamladyjayne.jpg/440px-Streathamladyjayne.jpg 2x
                "
            /></a>

            <div>
              <a
                href="https://en.wikipedia.org/wiki/Lady_Jane_Grey"
                target="_blank"
                title="Lady Jane Grey"
                >Lady Jane Grey</a
              >, who was proclaimed queen four days after Edward&apos;s death.
            </div>
          </div>

          <p>
            In early June, Edward personally supervised the drafting of a clean
            version of his devise by lawyers, to which he lent his signature
            &quot;in six several places.&quot;<sup
              ><a
                href="https://en.wikipedia.org/wiki/Edward_VI_of_England#cite_note-157"
                >[156]</a
              ></sup
            >
            Then, on 15 June he summoned high ranking judges to his sickbed,
            commanding them on their allegiance &quot;with sharp words and angry
            countenance&quot; to prepare his devise as
            <a
              href="https://en.wikipedia.org/wiki/Letters_patent"
              title="Letters patent"
              >letters patent</a
            >
            and announced that he would have these passed in parliament.<sup
              ><a
                href="https://en.wikipedia.org/wiki/Edward_VI_of_England#cite_note-158"
                >[157]</a
              ></sup
            >
            His next measure was to have leading councillors and lawyers sign a
            bond in his presence, in which they agreed faithfully to perform
            Edward&apos;s will after his death.<sup
              ><a
                href="https://en.wikipedia.org/wiki/Edward_VI_of_England#cite_note-159"
                >[158]</a
              ></sup
            >
            A few months later,
            <a
              href="https://en.wikipedia.org/wiki/Chief_Justice_of_the_Common_Pleas"
              title="Chief Justice of the Common Pleas"
              >Chief Justice</a
            >
            <a
              href="https://en.wikipedia.org/wiki/Edward_Montagu_(judge)"
              title="Edward Montagu (judge)"
              >Edward Montagu</a
            >
            recalled that when he and his colleagues had raised legal objections
            to the devise, Northumberland had threatened them &quot;trembling
            for anger, and ... further said that he would fight in his shirt
            with any man in that quarrel&quot;.<sup
              ><a
                href="https://en.wikipedia.org/wiki/Edward_VI_of_England#cite_note-160"
                >[159]</a
              ></sup
            >
            Montagu also overheard a group of lords standing behind him conclude
            &quot;if they refused to do that, they were traitors&quot;.<sup
              ><a
                href="https://en.wikipedia.org/wiki/Edward_VI_of_England#cite_note-161"
                >[160]</a
              ></sup
            >
            At last, on 21 June, the devise was signed by over a hundred
            notables, including councillors, peers, archbishops, bishops, and
            sheriffs;<sup
              ><a
                href="https://en.wikipedia.org/wiki/Edward_VI_of_England#cite_note-162"
                >[161]</a
              ></sup
            >
            many of them later claimed that they had been bullied into doing so
            by Northumberland, although in the words of Edward&apos;s biographer
            Jennifer Loach, &quot;few of them gave any clear indication of
            reluctance at the time&quot;.<sup
              ><a
                href="https://en.wikipedia.org/wiki/Edward_VI_of_England#cite_note-163"
                >[162]</a
              ></sup
            >
          </p>
          <p>
            It was now common knowledge that Edward was dying, and foreign
            diplomats suspected that some scheme to debar Mary was under way.
            France found the prospect of the emperor&apos;s cousin on the
            English throne disagreeable and engaged in secret talks with
            Northumberland, indicating support.<sup
              ><a
                href="https://en.wikipedia.org/wiki/Edward_VI_of_England#cite_note-164"
                >[163]</a
              ></sup
            >
            The diplomats were certain that the overwhelming majority of the
            English people backed Mary, but nevertheless believed that Queen
            Jane would be successfully established.<sup
              ><a
                href="https://en.wikipedia.org/wiki/Edward_VI_of_England#cite_note-165"
                >[164]</a
              ></sup
            >
          </p>
          <p>
            For centuries, the attempt to alter the succession was mostly seen
            as a one-man-plot by the Duke of Northumberland.<sup
              ><a
                href="https://en.wikipedia.org/wiki/Edward_VI_of_England#cite_note-166"
                >[165]</a
              ></sup
            >
            Since the 1970s, however, many historians have attributed the
            inception of the &quot;devise&quot; and the insistence on its
            implementation to the king&apos;s initiative.<sup
              ><a
                href="https://en.wikipedia.org/wiki/Edward_VI_of_England#cite_note-167"
                >[166]</a
              ></sup
            >
            <a
              href="https://en.wikipedia.org/wiki/Diarmaid_MacCulloch"
              title="Diarmaid MacCulloch"
              >Diarmaid MacCulloch</a
            >
            has made out Edward&apos;s &quot;teenage dreams of founding an
            evangelical realm of Christ&quot;,<sup
              ><a
                href="https://en.wikipedia.org/wiki/Edward_VI_of_England#cite_note-168"
                >[167]</a
              ></sup
            >
            while
            <a
              href="https://en.wikipedia.org/wiki/David_Starkey"
              title="David Starkey"
              >David Starkey</a
            >
            has stated that &quot;Edward had a couple of co-operators, but the
            driving will was his&quot;.<sup
              ><a
                href="https://en.wikipedia.org/wiki/Edward_VI_of_England#cite_note-169"
                >[168]</a
              ></sup
            >
            Among other members of the Privy Chamber, Northumberland&apos;s
            intimate
            <a
              href="https://en.wikipedia.org/wiki/John_Gates_(courtier)"
              title="John Gates (courtier)"
              >Sir John Gates</a
            >
            has been suspected of suggesting to Edward to change his devise so
            that Lady Jane Grey herself&mdash;not just any sons of
            hers&mdash;could inherit the Crown.<sup
              ><a
                href="https://en.wikipedia.org/wiki/Edward_VI_of_England#cite_note-170"
                >[169]</a
              ></sup
            >
            Whatever the degree of his contribution, Edward was convinced that
            his word was law<sup
              ><a
                href="https://en.wikipedia.org/wiki/Edward_VI_of_England#cite_note-171"
                >[170]</a
              ></sup
            >
            and fully endorsed disinheriting his half-sisters: &quot;barring
            Mary from the succession was a cause in which the young King
            believed
          </p>
        </section>

        <section id="illness">
          <h3>Illness and death</h3>
          <p>
            Edward became ill during January 1553 with a fever and cough that
            gradually worsened. The
            <a
              href="https://en.wikipedia.org/wiki/List_of_ambassadors_of_the_Kingdom_of_England_to_the_Holy_Roman_Emperor"
              title="List of ambassadors of the Kingdom of England to the Holy Roman Emperor"
              >imperial ambassador</a
            >,
            <a
              href="https://en.wikipedia.org/wiki/Jean_Scheyfve"
              title="Jean Scheyfve"
              >Jean Scheyfve</a
            >, reported that &quot;he suffers a good deal when the fever is upon
            him, especially from a difficulty in drawing his breath, which is
            due to the compression of the organs on the right side&quot;.<sup
              ><a
                href="https://en.wikipedia.org/wiki/Edward_VI_of_England#cite_note-173"
                >[172]</a
              ></sup
            >
            Edward felt well enough in early April to take the air in the park
            at Westminster and to move to Greenwich, but by the end of the month
            he had weakened again. By 7 May he was &quot;much amended&quot;, and
            the royal doctors had no doubt of his recovery. A few days later the
            king was watching the ships on the Thames, sitting at his
            window.<sup
              ><a
                href="https://en.wikipedia.org/wiki/Edward_VI_of_England#cite_note-174"
                >[173]</a
              ></sup
            >
            However, he relapsed, and on 11 June Scheyfve, who had an informant
            in the king&apos;s household, reported that &quot;the matter he
            ejects from his mouth is sometimes coloured a greenish yellow and
            black, sometimes pink, like the colour of blood&quot;.<sup
              ><a
                href="https://en.wikipedia.org/wiki/Edward_VI_of_England#cite_note-175"
                >[174]</a
              ></sup
            >
            Now his doctors believed he was suffering from &quot;a suppurating
            tumour&quot; of the lung and admitted that Edward&apos;s life was
            beyond recovery.<sup
              ><a
                href="https://en.wikipedia.org/wiki/Edward_VI_of_England#cite_note-176"
                >[175]</a
              ></sup
            >
            Soon, his legs became so swollen that he had to lie on his back, and
            he lost the strength to resist the disease. To his tutor
            <a
              href="https://en.wikipedia.org/wiki/John_Cheke"
              title="John Cheke"
              >John Cheke</a
            >
            he whispered, &quot;I am glad to die&quot;.<sup
              ><a
                href="https://en.wikipedia.org/wiki/Edward_VI_of_England#cite_note-177"
                >[176]</a
              ></sup
            >
          </p>
          <p>
            Edward made his final appearance in public on 1 July, when he showed
            himself at his window in Greenwich Palace, horrifying those who saw
            him by his &quot;thin and wasted&quot; condition. During the next
            two days, large crowds arrived hoping to see the king again, but on
            3 July, they were told that the weather was too chilly for him to
            appear. Edward died at the age of 15 at
            <a
              href="https://en.wikipedia.org/wiki/Greenwich_Palace"
              title="Greenwich Palace"
              >Greenwich Palace</a
            >
            at 8 pm on 6 July 1553. According to
            <a href="https://en.wikipedia.org/wiki/John_Foxe" title="John Foxe"
              >John Foxe</a
            >&apos;s legendary account of his death, his last words were:
            &quot;I am faint; Lord have mercy upon me, and take my
            spirit&quot;.<sup
              ><a
                href="https://en.wikipedia.org/wiki/Edward_VI_of_England#cite_note-178"
                >[177]</a
              ></sup
            >
            He was buried in the
            <a
              href="https://en.wikipedia.org/wiki/Henry_VII_Lady_Chapel"
              title="Henry VII Lady Chapel"
              >Henry VII Lady Chapel</a
            >
            at
            <a
              href="https://en.wikipedia.org/wiki/Westminster_Abbey"
              title="Westminster Abbey"
              >Westminster Abbey</a
            >
            on 8 August 1553, with reformed rites performed by
            <a
              href="https://en.wikipedia.org/wiki/Thomas_Cranmer"
              title="Thomas Cranmer"
              >Thomas Cranmer</a
            >. The procession was led by &quot;a grett company of chylderyn in
            ther surples&quot; and watched by Londoners &quot;wepyng and
            lamenting&quot;; the funeral chariot, draped in cloth of gold, was
            topped by an effigy of Edward, with crown, sceptre, and garter.<sup
              ><a
                href="https://en.wikipedia.org/wiki/Edward_VI_of_England#cite_note-179"
                >[178]</a
              ></sup
            >
            Edward&apos;s burial place was unmarked until as late as 1966, when
            an inscribed stone was laid in the chapel floor by
            <a
              href="https://en.wikipedia.org/wiki/Christ%27s_Hospital"
              title="Christ's Hospital"
              >Christ&apos;s Hospital</a
            >
            school to commemorate their founder. The inscription reads as
            follows: &quot;In Memory Of King Edward VI Buried In This Chapel
            This Stone Was Placed Here By Christ&apos;s Hospital In Thanksgiving
            For Their Founder 7 October 1966&quot;.<sup
              ><a
                href="https://en.wikipedia.org/wiki/Edward_VI_of_England#cite_note-180"
                >[179]</a
              ></sup
            >
          </p>
          <p>
            The cause of Edward VI&apos;s death is not certain. As with many
            royal deaths in the 16th century, rumours of poisoning abounded, but
            no evidence has been found to support these.<sup
              ><a
                href="https://en.wikipedia.org/wiki/Edward_VI_of_England#cite_note-181"
                >[180]</a
              ></sup
            >
            The Duke of Northumberland, whose unpopularity was underlined by the
            events that followed Edward&apos;s death, was widely believed to
            have ordered the imagined poisoning.<sup
              ><a
                href="https://en.wikipedia.org/wiki/Edward_VI_of_England#cite_note-182"
                >[181]</a
              ></sup
            >
            Another theory held that Edward had been poisoned by Catholics
            seeking to bring Mary to the throne.<sup
              ><a
                href="https://en.wikipedia.org/wiki/Edward_VI_of_England#cite_note-183"
                >[182]</a
              ></sup
            >
            The surgeon who opened Edward&apos;s chest after his death found
            that &quot;the disease whereof his majesty died was the disease of
            the lungs&quot;.<sup
              ><a
                href="https://en.wikipedia.org/wiki/Edward_VI_of_England#cite_note-Sk260-184"
                >[183]</a
              ></sup
            >
            The Venetian ambassador reported that Edward had died of
            consumption&mdash;in other words,
            <a
              href="https://en.wikipedia.org/wiki/Tuberculosis"
              title="Tuberculosis"
              >tuberculosis</a
            >&mdash;a diagnosis accepted by many historians.<sup
              ><a
                href="https://en.wikipedia.org/wiki/Edward_VI_of_England#cite_note-185"
                >[184]</a
              ></sup
            >
            Skidmore believes that Edward contracted tuberculosis after a bout
            of
            <a href="https://en.wikipedia.org/wiki/Measles" title="Measles"
              >measles</a
            >
            and
            <a href="https://en.wikipedia.org/wiki/Smallpox" title="Smallpox"
              >smallpox</a
            >
            in 1552 that suppressed his natural immunity to the disease.<sup
              ><a
                href="https://en.wikipedia.org/wiki/Edward_VI_of_England#cite_note-Sk260-184"
                >[183]</a
              ></sup
            >
            Loach suggests instead that his symptoms were typical of acute
            <a
              href="https://en.wikipedia.org/wiki/Bronchopneumonia"
              title="Bronchopneumonia"
              >bronchopneumonia</a
            >, leading to a &quot;suppurating pulmonary infection&quot; or
            <a
              href="https://en.wikipedia.org/wiki/Lung_abscess"
              title="Lung abscess"
              >lung abscess</a
            >,
            <a href="https://en.wikipedia.org/wiki/Sepsis" title="Sepsis"
              >septicaemia</a
            >, and
            <a
              href="https://en.wikipedia.org/wiki/Renal_failure"
              title="Renal failure"
              >kidney failure</a
            >
          </p>
        </section>

        <section id="ladyjane">
          <h3>Queen Jane and Queen Mary</h3>
          <p>
            Lady Mary was last seen by Edward in February, and was kept informed
            about the state of her half-brother&apos;s health by Northumberland
            and through her contacts with the imperial ambassadors.<sup
              ><a
                href="https://en.wikipedia.org/wiki/Edward_VI_of_England#cite_note-186"
                >[185]</a
              ></sup
            >
            Aware of Edward&apos;s imminent death, she left
            <a
              href="https://en.wikipedia.org/wiki/Hunsdon_House"
              title="Hunsdon House"
              >Hunsdon House</a
            >, near London, and sped to her estates around
            <a
              href="https://en.wikipedia.org/wiki/Kenninghall"
              title="Kenninghall"
              >Kenninghall</a
            >
            in Norfolk, where she could count on the support of her
            <a href="https://en.wikipedia.org/wiki/Tenants" title="Tenants"
              >tenants</a
            >.<sup
              ><a
                href="https://en.wikipedia.org/wiki/Edward_VI_of_England#cite_note-187"
                >[186]</a
              ></sup
            >
            Northumberland sent ships to the Norfolk coast to prevent her escape
            or the arrival of reinforcements from the continent. He delayed the
            announcement of the king&apos;s death while he gathered his forces,
            and Jane Grey was taken to the Tower on 10 July.<sup
              ><a
                href="https://en.wikipedia.org/wiki/Edward_VI_of_England#cite_note-188"
                >[187]</a
              ></sup
            >
            On the same day, she was proclaimed queen in the streets of London,
            to murmurings of discontent. The Privy Council received a message
            from Mary asserting her &quot;right and title&quot; to the throne
            and commanding that the Council proclaim her queen, as she had
            already proclaimed herself.<sup
              ><a
                href="https://en.wikipedia.org/wiki/Edward_VI_of_England#cite_note-189"
                >[188]</a
              ></sup
            >
            The Council replied that Jane was queen by Edward&apos;s authority
            and that Mary, by contrast, was illegitimate and supported only by
            &quot;a few lewd, base people&quot;.<sup
              ><a
                href="https://en.wikipedia.org/wiki/Edward_VI_of_England#cite_note-190"
                >[189]</a
              ></sup
            >
          </p>
          <p>
            Northumberland soon realised that he had miscalculated drastically,
            not least in failing to secure Mary&apos;s person before
            Edward&apos;s death.<sup
              ><a
                href="https://en.wikipedia.org/wiki/Edward_VI_of_England#cite_note-191"
                >[190]</a
              ></sup
            >
            Although many of those who rallied to Mary were conservatives hoping
            for the defeat of Protestantism, her supporters also included many
            for whom her lawful claim to the throne overrode religious
            considerations.<sup
              ><a
                href="https://en.wikipedia.org/wiki/Edward_VI_of_England#cite_note-192"
                >[191]</a
              ></sup
            >
            Northumberland was obliged to relinquish control of a nervous
            Council in London and launch an unplanned pursuit of Mary into
            <a
              href="https://en.wikipedia.org/wiki/East_Anglia"
              title="East Anglia"
              >East Anglia</a
            >, from where news was arriving of her growing support, which
            included a number of nobles and gentlemen and &quot;innumerable
            companies of the common people&quot;.<sup
              ><a
                href="https://en.wikipedia.org/wiki/Edward_VI_of_England#cite_note-193"
                >[192]</a
              ></sup
            >
            On 14 July Northumberland marched out of London with three thousand
            men, reaching
            <a href="https://en.wikipedia.org/wiki/Cambridge" title="Cambridge"
              >Cambridge</a
            >
            the next day; meanwhile, Mary rallied her forces at
            <a
              href="https://en.wikipedia.org/wiki/Framlingham_Castle"
              title="Framlingham Castle"
              >Framlingham Castle</a
            >
            in Suffolk, gathering an army of nearly twenty thousand by 19
            July.<sup
              ><a
                href="https://en.wikipedia.org/wiki/Edward_VI_of_England#cite_note-194"
                >[193]</a
              ></sup
            >
          </p>
          <p>
            It now dawned on the Privy Council that it had made a terrible
            mistake. Led by the
            <a
              href="https://en.wikipedia.org/wiki/Henry_Fitzalan,_19th_Earl_of_Arundel"
              title="Henry Fitzalan, 19th Earl of Arundel"
              >Earl of Arundel</a
            >
            and the Earl of Pembroke, on 19 July the Council publicly proclaimed
            Mary as queen; Jane&apos;s nine-day reign came to an end. The
            proclamation triggered wild rejoicing throughout London.<sup
              ><a
                href="https://en.wikipedia.org/wiki/Edward_VI_of_England#cite_note-195"
                >[194]</a
              ></sup
            >
            Stranded in Cambridge, Northumberland proclaimed Mary
            himself&mdash;as he had been commanded to do by a letter from the
            Council.<sup
              ><a
                href="https://en.wikipedia.org/wiki/Edward_VI_of_England#cite_note-196"
                >[195]</a
              ></sup
            >
            <a
              href="https://en.wikipedia.org/wiki/William_Paget,_1st_Baron_Paget"
              title="William Paget, 1st Baron Paget"
              >William Paget</a
            >
            and the
            <a
              href="https://en.wikipedia.org/wiki/Henry_FitzAlan,_19th_Earl_of_Arundel"
              title="Henry FitzAlan, 19th Earl of Arundel"
              >Earl of Arundel</a
            >
            rode to Framlingham to beg Mary&apos;s pardon, and Arundel arrested
            Northumberland on 24 July. Northumberland was beheaded on 22 August,
            shortly after renouncing Protestantism.<sup
              ><a
                href="https://en.wikipedia.org/wiki/Edward_VI_of_England#cite_note-197"
                >[196]</a
              ></sup
            >
            His recantation dismayed his daughter-in-law, Jane, who followed him
            to the scaffold on 12 February 1554, after her father&apos;s
            involvement in
            <a
              href="https://en.wikipedia.org/wiki/Wyatt%27s_rebellion"
              title="Wyatt's rebellion"
              >Wyatt&apos;s rebellion</a
            >.<sup
              ><a
                href="https://en.wikipedia.org/wiki/Edward_VI_of_England#cite_note-198"
              ></a
            ></sup>
          </p>
        </section>
      </section>

      <section id="legacy">
        <h2>Protestant legacy</h2>
        <hr />
        <p>
          Although Edward reigned for only six years and died at the age of 15,
          his reign made a lasting contribution to the
          <a
            href="https://en.wikipedia.org/wiki/English_Reformation"
            title="English Reformation"
            >English Reformation</a
          >
          and the structure of the
          <a
            href="https://en.wikipedia.org/wiki/Church_of_England"
            title="Church of England"
            >Church of England</a
          >.<sup
            ><a
              href="https://en.wikipedia.org/wiki/Edward_VI_of_England#cite_note-200"
              >[199]</a
            ></sup
          >
          The last decade of Henry VIII&apos;s reign had seen a partial stalling
          of the Reformation, a drifting back to more conservative values.<sup
            ><a
              href="https://en.wikipedia.org/wiki/Edward_VI_of_England#cite_note-201"
              >[200]</a
            ></sup
          >
          By contrast, Edward&apos;s reign saw radical progress in the
          Reformation. In those six years, the Church transferred from an
          essentially Catholic liturgy and structure to one that is usually
          identified as Protestant.<sup
            ><a
              href="https://en.wikipedia.org/wiki/Edward_VI_of_England#cite_note-MacPr-203"
              >[b]</a
            ></sup
          >
          In particular, the introduction of the Book of Common Prayer, the
          Ordinal of 1550, and Cranmer&apos;s
          <a
            href="https://en.wikipedia.org/wiki/Thirty-nine_Articles"
            title="Thirty-nine Articles"
            >Forty-two Articles</a
          >
          formed the basis for English Church practices that continue to this
          day.<sup
            ><a
              href="https://en.wikipedia.org/wiki/Edward_VI_of_England#cite_note-204"
              >[202]</a
            ></sup
          >
          Edward himself fully approved these changes, and though they were the
          work of reformers such as Thomas Cranmer,
          <a
            href="https://en.wikipedia.org/wiki/Hugh_Latimer"
            title="Hugh Latimer"
            >Hugh Latimer</a
          >, and
          <a
            href="https://en.wikipedia.org/wiki/Nicholas_Ridley_(martyr)"
            title="Nicholas Ridley (martyr)"
            >Nicholas Ridley</a
          >, backed by Edward&apos;s determinedly evangelical Council, the fact
          of the king&apos;s religion was a catalyst in the acceleration of the
          Reformation during his reign.<sup
            ><a
              href="https://en.wikipedia.org/wiki/Edward_VI_of_England#cite_note-205"
              >[203]</a
            ></sup
          >
        </p>
        <p>
          Queen Mary&apos;s attempts to undo the reforming work of her
          brother&apos;s reign faced major obstacles. Despite her belief in the
          papal supremacy, she ruled constitutionally as the
          <a
            href="https://en.wikipedia.org/wiki/Supreme_Head"
            title="Supreme Head"
            >Supreme Head</a
          >
          of the English Church, a contradiction under which she bridled.<sup
            ><a
              href="https://en.wikipedia.org/wiki/Edward_VI_of_England#cite_note-206"
              >[204]</a
            ></sup
          >
          She found herself entirely unable to restore the vast number of
          ecclesiastical properties handed over or sold to private
          landowners.<sup
            ><a
              href="https://en.wikipedia.org/wiki/Edward_VI_of_England#cite_note-207"
              >[205]</a
            ></sup
          >
          Although she burned a number of leading Protestant churchmen, many
          reformers either went into exile or remained subversively active in
          England during her reign, producing a torrent of reforming propaganda
          that she was unable to stem.<sup
            ><a
              href="https://en.wikipedia.org/wiki/Edward_VI_of_England#cite_note-208"
              >[206]</a
            ></sup
          >
          Nevertheless, Protestantism was not yet &quot;printed in the
          stomachs&quot; of the English people,<sup
            ><a
              href="https://en.wikipedia.org/wiki/Edward_VI_of_England#cite_note-209"
              >[207]</a
            ></sup
          >
          and had Mary lived longer, her Catholic reconstruction might have
          succeeded, leaving Edward&apos;s reign, rather than hers, as a
          historical aberration.<sup
            ><a
              href="https://en.wikipedia.org/wiki/Edward_VI_of_England#cite_note-210"
              >[208]</a
            ></sup
          >
        </p>
        <p>
          On Mary&apos;s death in 1558, the English Reformation resumed its
          course, and most of the reforms instituted during Edward&apos;s reign
          were reinstated in the
          <a
            href="https://en.wikipedia.org/wiki/Elizabethan_Religious_Settlement"
            title="Elizabethan Religious Settlement"
            >Elizabethan Religious Settlement</a
          >. Queen Elizabeth replaced Mary&apos;s councillors and bishops with
          ex-Edwardians, such as
          <a
            href="https://en.wikipedia.org/wiki/William_Cecil,_1st_Baron_Burghley"
            title=""
            >William Cecil</a
          >, Northumberland&apos;s former secretary, and
          <a
            href="https://en.wikipedia.org/wiki/Richard_Cox_(bishop)"
            title="Richard Cox (bishop)"
            >Richard Cox</a
          >, Edward&apos;s old tutor, who preached an anti-Catholic sermon at
          the opening of parliament in 1559.<sup
            ><a
              href="https://en.wikipedia.org/wiki/Edward_VI_of_England#cite_note-211"
              >[209]</a
            ></sup
          >
          Parliament passed an
          <a
            href="https://en.wikipedia.org/wiki/Act_of_Uniformity_1559"
            title="Act of Uniformity 1559"
            >Act of Uniformity</a
          >
          the following spring that restored, with modifications, Cranmer&apos;s
          prayer book of 1552;<sup
            ><a
              href="https://en.wikipedia.org/wiki/Edward_VI_of_England#cite_note-212"
              >[210]</a
            ></sup
          >
          and the
          <a
            href="https://en.wikipedia.org/wiki/Thirty-nine_Articles"
            title="Thirty-nine Articles"
            >Thirty-nine Articles</a
          >
          of 1563 were largely based on Cranmer&apos;s Forty-two Articles. The
          theological developments of Edward&apos;s reign provided a vital
          source of reference for Elizabeth&apos;s religious policies, though
          the internationalism of the Edwardian Reformation was never revived.
        </p>
      </section>
    </article>
  </div>
</template>
