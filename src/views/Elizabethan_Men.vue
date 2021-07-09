<script>
export default {
  name: "elizabethanMen",
  mounted() {
    const el = document.querySelector(".image-container");
    let currentlyDisplayedBio = "earl-of-essex";

    el.addEventListener("mouseover", event => {
      let nextBioToDisplay = event.target.dataset.name;
      if (
        !(
          currentlyDisplayedBio === nextBioToDisplay ||
          nextBioToDisplay === undefined
        )
      ) {
        // get relevent DOM elements to manipulate
        const currentlyDisplayedBioEl = document.querySelector(
          `.${currentlyDisplayedBio}`
        );
        const nextBioToDisplayEl = document.querySelector(
          `.${nextBioToDisplay}`
        );

        // remove .visible class from currentlyDisplayedBio
        currentlyDisplayedBioEl.classList.remove("visible");

        // Add .visible to new Man's bio to display
        nextBioToDisplayEl.classList.add("visible");

        // Update currentlyDisplayedBio to new mousedover bio.
        currentlyDisplayedBio = nextBioToDisplay;
      }
    });
  }
};
</script>

<style scoped>
.container {
  position: relative;
  min-height: 900px;
  background: rgb(225, 222, 208);
  background: linear-gradient(
    90deg,
    rgba(225, 222, 208, 1) 0%,
    rgba(248, 229, 143, 0.9135855025603992) 100%
  );
}

h1 {
  font-family: var(--font-cinzel);
  font-size: 2.3rem;
  text-align: center;
}
h2,
h3 {
  font-family: var(--font-cinzel);
  text-align: center;
}

h3 {
  margin-top: 20px;
}

.image-container {
  display: flex;
  flex-wrap: nowrap;
  width: 100%;
  justify-content: space-around;
  align-items: flex-start;
  margin-bottom: 20px;
}

.image-container > img {
  width: 100px;
  height: auto;
}

.biography-container {
  position: relative;
}

.francis-bacon,
.william-shakespeare,
.earl-of-essex,
.chris-hatton {
  position: absolute;
  transform: translateX(-5000px);
  opacity: 0;
  transition: opacity 0.5s ease-in;
}

div.visible {
  position: relative;
  opacity: 1;
  transform: translateX(0);
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

.float-image {
  float: left;
}
</style>

<template>
  <div class="container">
    <h1>Prominent Elizabethan Era Men</h1>

    <div class="image-container">
      <img
        data-name="earl-of-essex"
        src="../assets/img/elizabethsMen/earlofEssex.jpg"
        alt="The Earl of Essex"
      />

      <img
        data-name="francis-bacon"
        src="../assets/img/elizabethsMen/francis_bacon.jpg"
        alt="The Earl of Essex"
      />
      <img
        data-name="chris-hatton"
        src="../assets/img/elizabethsMen/chris_hatton.jpg"
        alt="Chris Hatton"
      />

      <img
        data-name="william-shakespeare"
        src="../assets/img/elizabethsMen/will_shakespeare.jpg"
        alt="William Shakespeare"
      />
    </div>
    <div class="biography-container">
      <!-- ===== Earl of Essex Markup ============ -->
      <div class="earl-of-essex visible">
        <h2>The Earl of Essex</h2>
        <p class="intro">
          <strong>Robert Devereux, 2nd Earl of Essex</strong>, 10 November 1565
          &ndash; 25 February 1601) was an English nobleman and a favourite of
          <a
            href="https://en.wikipedia.org/wiki/Elizabeth_I"
            title="Elizabeth I"
            >Elizabeth I</a
          >. Politically ambitious, and a committed general, he was placed under
          house arrest following a poor campaign in Ireland during the
          <a
            href="https://en.wikipedia.org/wiki/Nine_Years%27_War_(Ireland)"
            title="Nine Years' War (Ireland)"
            >Nine Years&apos; War</a
          >
          in 1599. In 1601, he led an abortive
          <em>coup d&apos;&eacute;tat </em>
          against the government and was executed for treason.
        </p>
        <h3>Early life</h3>
        <p>
          Devereux was born on 10 November 1565 at Netherwood near
          <a href="https://en.wikipedia.org/wiki/Bromyard" title="Bromyard"
            >Bromyard</a
          >, in
          <a
            href="https://en.wikipedia.org/wiki/Herefordshire"
            title="Herefordshire"
            >Herefordshire</a
          >, the son of
          <a
            href="https://en.wikipedia.org/wiki/Walter_Devereux,_1st_Earl_of_Essex"
            title="Walter Devereux, 1st Earl of Essex"
            >Walter Devereux, 1st Earl of Essex</a
          >, and
          <a
            href="https://en.wikipedia.org/wiki/Lettice_Knollys"
            title="Lettice Knollys"
            >Lettice Knollys</a
          >. His maternal great-grandmother
          <a
            href="https://en.wikipedia.org/wiki/Mary_Boleyn"
            title="Mary Boleyn"
            >Mary Boleyn</a
          >
          was a sister of
          <a
            href="https://en.wikipedia.org/wiki/Anne_Boleyn"
            title="Anne Boleyn"
            >Anne Boleyn</a
          >, the mother of Queen Elizabeth I, making him a
          <a
            href="https://en.wikipedia.org/wiki/Cousin#First_cousins_twice_removed"
            title="Cousin"
            >first-cousin-twice-removed</a
          >
          of the Queen.&nbsp;
        </p>
        <h3><span>Court and military career</span></h3>

        <p>
          Devereux first came to court in 1584, and by 1587 had become a
          favourite of the Queen, who relished his lively mind and eloquence, as
          well as his skills as a showman and in courtly love. In June 1587 he
          replaced the Earl of Leicester as
          <a
            href="https://en.wikipedia.org/wiki/Master_of_the_Horse"
            title="Master of the Horse"
            >Master of the Horse</a
          >.<sup
            ><a
              href="https://en.wikipedia.org/wiki/Robert_Devereux,_2nd_Earl_of_Essex#cite_note-8"
              >[8]</a
            ></sup
          >
          After Leicester&apos;s death in 1588, the Queen transferred the late
          Earl&apos;s royal monopoly on sweet wines to Essex, providing him with
          revenue from taxes. In 1593, he was made a member of her
          <a
            href="https://en.wikipedia.org/wiki/Privy_Council_of_England"
            title="Privy Council of England"
            >Privy Council</a
          >.<sup
            ><a
              href="https://en.wikipedia.org/wiki/Robert_Devereux,_2nd_Earl_of_Essex#cite_note-compeerage-9"
              >[9]</a
            ></sup
          >
        </p>
        <p>
          Essex underestimated the Queen, however, and his later behaviour
          towards her lacked due respect and showed disdain for the influence of
          her principal secretary,
          <a
            href="https://en.wikipedia.org/wiki/Robert_Cecil,_1st_Earl_of_Salisbury"
            title="Robert Cecil, 1st Earl of Salisbury"
            >Robert Cecil</a
          >. On one occasion during a heated Privy Council debate on the
          problems in Ireland, the Queen reportedly cuffed an insolent Essex
          round the ear, prompting him to half draw his sword on her.
        </p>
        <p>
          In 1589, he took part in
          <a
            href="https://en.wikipedia.org/wiki/Francis_Drake"
            title="Francis Drake"
            >Francis Drake</a
          >&apos;s
          <a
            href="https://en.wikipedia.org/wiki/English_Armada"
            title="English Armada"
            >English Armada</a
          >, which sailed to Spain in an unsuccessful attempt to press home the
          English advantage following the defeat of the
          <a
            href="https://en.wikipedia.org/wiki/Spanish_Armada"
            title="Spanish Armada"
            >Spanish Armada</a
          >, although the Queen had ordered him not to take part. In 1591, he
          was given command of a force sent to the assistance of King
          <a
            href="https://en.wikipedia.org/wiki/Henry_IV_of_France"
            title="Henry IV of France"
            >Henry IV of France</a
          >. In 1596, he distinguished himself by the
          <a
            href="https://en.wikipedia.org/wiki/Capture_of_C%C3%A1diz"
            title="Capture of Cádiz"
            >capture of C&aacute;diz</a
          >. During the
          <a
            href="https://en.wikipedia.org/wiki/Islands_Voyage"
            title="Islands Voyage"
            >Islands Voyage</a
          >
          expedition to the
          <a href="https://en.wikipedia.org/wiki/Azores" title="Azores"
            >Azores</a
          >
          in 1597, with
          <a
            href="https://en.wikipedia.org/wiki/Walter_Raleigh"
            title="Walter Raleigh"
            >Walter Raleigh</a
          >
          as his second-in-command, he defied the Queen&apos;s orders, pursuing
          the Spanish treasure fleet without first defeating the Spanish battle
          fleet.
        </p>
        <p>
          When the
          <a
            href="https://en.wikipedia.org/wiki/3rd_Spanish_Armada"
            title="3rd Spanish Armada"
            >3rd Spanish Armada</a
          >
          first appeared off the English coast in October 1597, the English
          fleet was far out to sea, with the coast almost undefended, and panic
          ensued. This further damaged the relationship between the Queen and
          Essex, even though he was initially given full command of the English
          fleet when he reached England a few days later. Fortunately a storm
          dispersed the Spanish fleet. A number of ships were captured by the
          English and though there were a few landings, the Spanish
          withdrew.&nbsp;
        </p>
        <h3><span>Ireland</span></h3>
        <p>
          Essex&apos;s greatest failure was as
          <a
            href="https://en.wikipedia.org/wiki/Lord_Lieutenant_of_Ireland"
            title="Lord Lieutenant of Ireland"
            >Lord Lieutenant of Ireland</a
          >, a post which he talked himself into in 1599. The
          <a
            href="https://en.wikipedia.org/wiki/Nine_Years%27_War_(Ireland)"
            title="Nine Years' War (Ireland)"
            >Nine Years&apos; War</a
          >
          (1595&ndash;1603) was in its middle stages, and no English commander
          had been successful. More military force was required to defeat the
          Irish chieftains, led by
          <a
            href="https://en.wikipedia.org/wiki/Hugh_O%27Neill,_3rd_Earl_of_Tyrone"
            title="Hugh O'Neill, 3rd Earl of Tyrone"
            >Hugh O&apos;Neill, the Earl of Tyrone</a
          >, and supplied from Spain and Scotland.
        </p>
        <p>
          Essex led the largest expeditionary force ever sent to
          Ireland&mdash;16,000 troops&mdash;with orders to put an end to the
          rebellion. He departed London to the cheers of the Queen&apos;s
          subjects, and it was expected the rebellion would be crushed
          instantly, but the limits of Crown resources and of the Irish
          campaigning season dictated otherwise.
        </p>
        <p>
          Essex had declared to the
          <a
            href="https://en.wikipedia.org/wiki/Privy_Council_of_the_United_Kingdom"
            title="Privy Council of the United Kingdom"
            >Privy Council</a
          >
          that he would confront O&apos;Neill in
          <a href="https://en.wikipedia.org/wiki/Ulster" title="Ulster"
            >Ulster</a
          >. Instead, he led his army into southern Ireland, where he fought a
          series of inconclusive engagements, wasted his funds, and dispersed
          his army into garrisons, while the Irish won two important battles in
          other parts of the country. Rather than face O&apos;Neill in battle,
          Essex entered a truce that some considered humiliating to the Crown
          and to the detriment of English authority. The Queen herself told
          Essex that if she had wished to abandon Ireland it would scarcely have
          been necessary to send him there.
        </p>
        <p>
          In all of his campaigns Essex secured the loyalty of his officers by
          conferring knighthoods, an honour the Queen herself dispensed
          sparingly, and by the end of his time in Ireland more than half the
          knights in England owed their rank to him. The rebels were said to
          have joked that, &quot;he never drew sword but to make knights.&quot;
          But his practice of conferring knighthoods could in time enable Essex
          to challenge the powerful factions at Cecil&apos;s command.
        </p>
        <p>
          He was the second Chancellor of
          <a
            href="https://en.wikipedia.org/wiki/University_of_Dublin"
            title="University of Dublin"
            >Trinity College, Dublin</a
          >, serving from 1598 to 1601.&nbsp;
        </p>
        <h3>Essex rebellion</h3>
        <div>
          More:
          <a
            href="https://en.wikipedia.org/wiki/Essex%27s_Rebellion"
            title="Essex's Rebellion"
            >Essex&apos;s Rebellion</a
          >
        </div>
        <p>
          In August, his freedom was granted, but the source of his basic
          income&mdash;the sweet wines monopoly&mdash;was not renewed. His
          situation had become desperate, and he shifted &quot;from sorrow and
          repentance to rage and rebellion.&quot; In early 1601, he began to
          fortify
          <a
            href="https://en.wikipedia.org/wiki/Essex_House_(London)"
            title="Essex House (London)"
            >Essex House</a
          >, his town mansion on the
          <a
            href="https://en.wikipedia.org/wiki/Strand,_London"
            title="Strand, London"
            >Strand</a
          >, and gathered his followers. On the morning of 8 February, he
          marched out of Essex House with a party of nobles and gentlemen (some
          later involved in the 1605
          <a
            href="https://en.wikipedia.org/wiki/Gunpowder_Plot"
            title="Gunpowder Plot"
            >Gunpowder Plot</a
          >) and entered the city of London in an attempt to force an audience
          with the Queen. Cecil immediately had him proclaimed a traitor. A
          force under
          <a
            href="https://en.wikipedia.org/wiki/John_Leveson"
            title="John Leveson"
            >Sir John Leveson</a
          >
          placed a barrier across the street at
          <a
            href="https://en.wikipedia.org/wiki/Ludgate_Hill"
            title="Ludgate Hill"
            >Ludgate Hill</a
          >. When Essex&apos;s men tried to force their way through,
          Essex&apos;s stepfather,
          <a
            href="https://en.wikipedia.org/wiki/Christopher_Blount"
            title="Christopher Blount"
            >Sir Christopher Blount</a
          >, was injured in the resulting skirmish, and Essex withdrew with his
          men to Essex House. Essex surrendered after Crown forces besieged
          Essex House.
        </p>
        <h3>Treason trial and death</h3>
        <p>
          On 19 February 1601, Essex was tried before his peers on charges of
          treason. Quoting from <em>State Trials</em> (compiled by T. B. Howell
          and T. J. Howell, 33 vols., London, 1809&ndash;26, vol. I, pp.
          1334-1360), author Laura Hanes Cadwallader summarized the indictment:
        </p>
        <blockquote>
          <p>
            The indictment charged Essex with &quot;conspiring and imagining at
            London, . . . to depose and slay the Queen, and to subvert the
            Government.&quot; It also stated that Essex had &quot;endeavoured to
            raise himself to the Crown of England, and usurp the royal
            dignity,&quot; and that in order to fulfill these intentions, he and
            others &quot;rose and assembled themselves in open rebellion, and
            moved and persuaded many of the citizens of London to join them in
            their treason, and endeavored to get the city of London into their
            possession and power, and wounded and killed many of the
            Queen&apos;s subjects then and there assembled for the purpose of
            quelling such rebellion.&quot; Essex was charged also with holding
            the Lord Keeper and the other Privy Councillors in custody &quot;for
            four hours and more.&quot;
          </p>
        </blockquote>
        <p>
          Part of the evidence showed that he was in favour of toleration of
          religious dissent. In his own evidence, he countered the charge of
          dealing with
          <a
            href="https://en.wikipedia.org/wiki/Catholic_Church"
            title="Catholic Church"
            >Catholics</a
          >, swearing that &quot;papists have been hired and suborned to witness
          against me.&quot; Essex also asserted that Cecil had stated that none
          in the world but the
          <a href="https://en.wikipedia.org/wiki/Infanta" title="Infanta"
            >Infanta</a
          >
          of Spain had right to the Crown of England, whereupon Cecil (who had
          been following the trial at a doorway concealed behind some tapestry)
          stepped out to make a dramatic denial, going down on his knees to give
          thanks to God for the opportunity. > The witness whom Essex expected
          to confirm this allegation, his uncle William Knollys, was called and
          admitted there had once been read in Cecil&apos;s presence a book
          treating such matters. The book may have been either
          <em>The book of succession</em> supposedly by R. Doleman but probably
          by
          <a
            href="https://en.wikipedia.org/wiki/Robert_Persons"
            title="Robert Persons"
            >Robert Persons</a
          >
          or Persons&apos;
          <em
            ><a
              href="https://en.wikipedia.org/wiki/A_Conference_about_the_Next_Succession_to_the_Crown_of_England"
              title="A Conference about the Next Succession to the Crown of England"
              >A Conference about the Next Succession to the Crown of England</a
            ></em
          >, works which favoured a Catholic successor friendly to Spain.
          However Knollys denied hearing Cecil make the statement. Thanking God
          again, Cecil expressed his gratitude that Essex was exposed as a
          <a href="https://en.wikipedia.org/wiki/Traitor" title="Traitor"
            >traitor</a
          >
          while he himself was found an honest man.
        </p>
        <p>
          Essex was found guilty and, on 25 February 1601, was beheaded on Tower
          Green, becoming the last person to be beheaded in the
          <a
            href="https://en.wikipedia.org/wiki/Tower_of_London"
            title="Tower of London"
            >Tower of London</a
          >. It was reported to have taken three strokes by the executioner
          <a
            href="https://en.wikipedia.org/wiki/Thomas_Derrick"
            title="Thomas Derrick"
            >Thomas Derrick</a
          >
          to complete the beheading. Previously Thomas Derrick had been
          convicted of rape but was pardoned by the Earl of Essex himself
          (clearing him of the death penalty) on the condition that he become an
          executioner at Tyburn. At Sir
          <a
            href="https://en.wikipedia.org/wiki/Walter_Raleigh"
            title="Walter Raleigh"
            >Walter Raleigh</a
          >&apos;s own execution on 29 October 1618, it was alleged that Raleigh
          had said to a co-conspirator, &quot;Do not, as my Lord Essex did, take
          heed of a preacher. By his persuasion, he confessed, and made himself
          guilty.&quot; In that same trial, Raleigh also denied that he had
          stood at a window during the execution of Essex&apos;s sentence,
          disdainfully puffing out tobacco smoke in sight of the condemned man.
          Essex at &nbsp;the end shocked many by denouncing his sister
          <a
            href="https://en.wikipedia.org/wiki/Penelope_Devereux"
            title="Penelope Devereux"
            >Penelope, Lady Rich</a
          >
          as his co-conspirator: the Queen, who was determined to show as much
          clemency as possible, ignored the charge.
        </p>
        <p>
          Some days before the execution, Captain
          <a
            href="https://en.wikipedia.org/wiki/Thomas_Lee_(army_captain)"
            title="Thomas Lee (army captain)"
            >Thomas Lee</a
          >
          was apprehended as he kept watch on the door to the Queen&apos;s
          chambers. His plan had been to confine her until she signed a warrant
          for the release of Essex. Capt. Lee, who had served in Ireland with
          the Earl, and who acted as a go-between with the Ulster rebels, was
          tried and put to death the next day.
        </p>
        <p>
          Essex&apos;s conviction for treason meant that the earldom was forfeit
          and his son did not inherit the title. However, after the Queen&apos;s
          death, King
          <a
            href="https://en.wikipedia.org/wiki/James_I_of_England"
            title="James I of England"
            >James I</a
          >
          reinstated the earldom in favour of the disinherited son,
          <a
            href="https://en.wikipedia.org/wiki/Robert_Devereux,_3rd_Earl_of_Essex"
            title="Robert Devereux, 3rd Earl of Essex"
            >Robert Devereux, 3rd Earl of Essex</a
          >.
        </p>
        <h3><span>The Essex Ring</span></h3>
        <p>
          There is a widely repeated romantic legend about a ring given by
          Elizabeth to Essex. There is a possible reference to the legend by
          <a
            href="https://en.wikipedia.org/wiki/John_Webster"
            title="John Webster"
            >John Webster</a
          >
          in his 1623 play
          <em
            ><a
              href="https://en.wikipedia.org/wiki/The_Devil%27s_Law_Case"
              title="The Devil's Law Case"
              >The Devil&apos;s Law Case</a
            ></em
          >
          suggesting that it was known at this time, but the first printed
          version of it is in the 1695 romantic novel
          <em
            >The Secret History of the most renowned Queen Elizabeth and the
            Earl of Essex, by a Person of Quality</em
          >. The version is given by
          <a href="https://en.wikipedia.org/wiki/David_Hume" title="David Hume"
            >David Hume</a
          >
          in his
          <em
            ><a
              href="https://en.wikipedia.org/wiki/The_History_of_England_(Hume)"
              title="The History of England (Hume)"
              >History of England</a
            ></em
          >
          says that Elizabeth had given Essex a ring after the expedition to
          Cadiz that he should send to her if he was in trouble. After his
          trial, he tried to send the ring to Elizabeth via the
          <a
            href="https://en.wikipedia.org/wiki/Catherine_Howard,_Countess_of_Nottingham"
            title="Catherine Howard, Countess of Nottingham"
            >Countess of Nottingham</a
          >, but the countess kept the ring as her husband was an enemy of
          Essex, as a result of which Essex was executed. On her deathbed, the
          countess is said to have confessed this to Elizabeth, who angrily
          replied: &quot;May God forgive you, Madam, but I never can.&quot; The
          Queen&apos;s Diamond Jubilee Galleries in
          <a
            href="https://en.wikipedia.org/wiki/Westminster_Abbey"
            title="Westminster Abbey"
            >Westminster Abbey</a
          >
          possess a gold ring which is claimed to be this one.
        </p>
        <p>
          Some historians consider this story of the ring to be a myth, partly
          because there are no contemporaneous accounts of it.
          <a
            href="https://en.wikipedia.org/wiki/John_Lingard"
            title="John Lingard"
            >John Lingard</a
          >
          in his history of England says the story appears to be a fiction,
          <a
            href="https://en.wikipedia.org/wiki/Lytton_Strachey"
            title="Lytton Strachey"
            >Lytton Strachey</a
          >
          states &quot;Such a narrative is appropriate enough to the place where
          it was first fully elaborated &mdash; a sentimental novelette, but it
          does not belong to history&quot;, and
          <a
            href="https://en.wikipedia.org/wiki/Alison_Weir"
            title="Alison Weir"
            >Alison Weir</a
          >
          calls it a fabrication. >
        </p>
        <p>
          Nevertheless, this version of the story forms the basis of the plot of
          <a
            href="https://en.wikipedia.org/wiki/Gaetano_Donizetti"
            title="Gaetano Donizetti"
            >Gaetano Donizetti</a
          >&apos;s opera
          <em
            ><a
              href="https://en.wikipedia.org/wiki/Roberto_Devereux"
              title="Roberto Devereux"
              >Roberto Devereux</a
            ></em
          >, with a further twist added to the story, in that Essex is cheating
          on both the Queen and his best friend by having an affair with Lady
          Nottingham (who in the opera is given the wrong first name of Sarah
          rather than Catherine): and that this turns out to be (a) the reason
          why Lord Nottingham turns against his now former friend, when he
          discovers the ring in question and prevents her sending it, and (b) is
          the ultimate reason for Queen Elizabeth withdrawing her support for
          Essex at his trial. The actual question of Devereux&apos;s genuine
          guilt or innocence is sidelined (as is his actual failed rebellion),
          and the trial is presented as effectively a Parliamentary witch-hunt
          led by Cecil and Raleigh.&nbsp;
        </p>
      </div>
      <!-- ===== End of Earl of Essex ============ -->

      <!-- ===== Francis Bacon  ================== -->
      <div class="francis-bacon">
        <h2>Francis Bacon</h2>
        <p class="intro">
          <strong>Francis Bacon, 1st Viscount St Alban</strong> 22 January 1561
          &ndash; 9 April 1626), also known as <strong>Lord Verulam</strong>,
          was an English philosopher and statesman who served as
          <a
            href="https://en.wikipedia.org/wiki/Attorney_General_for_England_and_Wales"
            title="Attorney General for England and Wales"
            >Attorney General</a
          >
          and as
          <a
            href="https://en.wikipedia.org/wiki/Lord_Chancellor"
            title="Lord Chancellor"
            >Lord Chancellor</a
          >
          of
          <a
            href="https://en.wikipedia.org/wiki/Kingdom_of_England"
            title="Kingdom of England"
            >England</a
          >. His works are seen as developing the
          <a
            href="https://en.wikipedia.org/wiki/Scientific_method"
            title="Scientific method"
            >scientific method</a
          >
          and remained influential through the
          <a
            href="https://en.wikipedia.org/wiki/Scientific_revolution"
            title="Scientific revolution"
            >scientific revolution</a
          >
        </p>
        <p>
          Bacon has been called the father of
          <a href="https://en.wikipedia.org/wiki/Empiricism" title="Empiricism"
            >empiricism</a
          >.<sup
            ><a
              href="https://en.wikipedia.org/wiki/Francis_Bacon#cite_note-8"
            ></a
          ></sup>
          He argued for the possibility of scientific knowledge based only upon
          <a
            href="https://en.wikipedia.org/wiki/Inductive_reasoning"
            title="Inductive reasoning"
            >inductive reasoning</a
          >
          and careful observation of events in
          <a
            href="https://en.wikipedia.org/wiki/Nature_(philosophy)"
            title="Nature (philosophy)"
            >nature</a
          >. Most importantly, he argued science could be achieved by use of a
          sceptical and methodical approach whereby scientists aim to avoid
          misleading themselves. Although his most specific proposals about such
          a method, the
          <a
            href="https://en.wikipedia.org/wiki/Baconian_method"
            title="Baconian method"
            >Baconian method</a
          >, did not have long-lasting influence, the general idea of the
          importance and possibility of a sceptical methodology makes Bacon the
          father of the scientific method. This method was a new rhetorical and
          theoretical framework for science, whose practical details are still
          central to debates on science and
          <a
            href="https://en.wikipedia.org/wiki/Methodology"
            title="Methodology"
            >methodology</a
          >.
        </p>
        <p>
          Francis Bacon was a patron of libraries and developed a system for
          cataloguing books under three categories &mdash;
          <a href="https://en.wikipedia.org/wiki/History" title="History"
            >history</a
          >,
          <a href="https://en.wikipedia.org/wiki/Poetry" title="Poetry"
            >poetry</a
          >, and
          <a href="https://en.wikipedia.org/wiki/Philosophy" title="Philosophy"
            >philosophy</a
          >
          &mdash;which could further be divided into specific subjects and
          subheadings. Bacon was educated at
          <a
            href="https://en.wikipedia.org/wiki/Trinity_College,_Cambridge"
            title="Trinity College, Cambridge"
            >Trinity College, Cambridge</a
          >, where he rigorously followed the medieval curriculum, largely in
          Latin.
        </p>
        <p>
          Bacon was the first recipient of the
          <a
            href="https://en.wikipedia.org/wiki/Queen%27s_counsel"
            title="Queen's counsel"
            >Queen&apos;s counsel</a
          >
          designation, conferred in 1597 when
          <a
            href="https://en.wikipedia.org/wiki/Elizabeth_I_of_England"
            title="Elizabeth I of England"
            >Elizabeth I of England</a
          >
          reserved him as her legal advisor. After the accession of
          <a
            href="https://en.wikipedia.org/wiki/James_VI_and_I"
            title="James VI and I"
            >James VI and I</a
          >
          in 1603, Bacon was
          <a
            href="https://en.wikipedia.org/wiki/Knight_Bachelor"
            title="Knight Bachelor"
            >knighted</a
          >, then created
          <a
            href="https://en.wikipedia.org/wiki/Baron_Verulam"
            title="Baron Verulam"
            >Baron Verulam</a
          >
          in 1618 and Viscount St Alban in 1621.
        </p>
        <p>
          He had no heirs and so both titles became extinct on his death in 1626
          at the age of 65. He died of
          <a href="https://en.wikipedia.org/wiki/Pneumonia" title="Pneumonia"
            >pneumonia</a
          >, with one account by
          <a
            href="https://en.wikipedia.org/wiki/John_Aubrey"
            title="John Aubrey"
            >John Aubrey</a
          >
          stating that he had contracted it while studying the effects of
          freezing on meat preservation. He is buried at
          <a
            href="https://en.wikipedia.org/wiki/St_Michael%27s_Church,_St_Albans"
            title="St Michael's Church, St Albans"
            >St Michael&apos;s Church, St Albans</a
          >, Hertfordshire.
        </p>
        <p><br /></p>
        <h3>Early life</h3>

        <p>
          Francis Bacon was born on 22 January 1561 at
          <a
            href="https://en.wikipedia.org/wiki/York_House,_Strand"
            title="York House, Strand"
            >York House</a
          >
          near the
          <a
            href="https://en.wikipedia.org/wiki/Strand,_London"
            title="Strand, London"
            >Strand</a
          >
          in
          <a href="https://en.wikipedia.org/wiki/London" title="London"
            >London</a
          >, the son of
          <a
            href="https://en.wikipedia.org/wiki/Nicholas_Bacon_(Lord_Keeper)"
            title="Nicholas Bacon (Lord Keeper)"
            >Sir Nicholas Bacon</a
          >
          (<a
            href="https://en.wikipedia.org/wiki/Lord_Keeper_of_the_Great_Seal"
            title="Lord Keeper of the Great Seal"
            >Lord Keeper of the Great Seal</a
          >) by his second wife,
          <a href="https://en.wikipedia.org/wiki/Anne_Bacon" title="Anne Bacon"
            >Anne (Cooke) Bacon</a
          >, the daughter of the noted
          <a
            href="https://en.wikipedia.org/wiki/Renaissance_humanism"
            title="Renaissance humanism"
            >Renaissance humanist</a
          >
          <a
            href="https://en.wikipedia.org/wiki/Anthony_Cooke"
            title="Anthony Cooke"
            >Anthony Cooke</a
          >. His mother&apos;s sister was married to
          <a
            href="https://en.wikipedia.org/wiki/William_Cecil,_1st_Baron_Burghley"
            title="William Cecil, 1st Baron Burghley"
            >William Cecil, 1st Baron Burghley</a
          >, making Burghley Bacon&apos;s uncle.<sup
            ><a
              href="https://en.wikipedia.org/wiki/Francis_Bacon#cite_note-FOOTNOTEPollard1911816-11"
              >[9]</a
            ></sup
          >
        </p>
        <p>
          Biographers believe that Bacon was educated at home in his early years
          owing to poor health, which would plague him throughout his life. He
          received tuition from John Walsall, a graduate of Oxford with a strong
          leaning toward
          <a href="https://en.wikipedia.org/wiki/Puritan" title="Puritan"
            >Puritanism</a
          >. He went up to
          <a
            href="https://en.wikipedia.org/wiki/Trinity_College,_Cambridge"
            title="Trinity College, Cambridge"
            >Trinity College</a
          >
          at the
          <a
            href="https://en.wikipedia.org/wiki/University_of_Cambridge"
            title="University of Cambridge"
            >University of Cambridge</a
          >
          on 5 April 1573 at the age of 12,<sup
            ><a href="https://en.wikipedia.org/wiki/Francis_Bacon#cite_note-12"
              >[10]</a
            ></sup
          >
          living for three years there, together with his older brother
          <a
            href="https://en.wikipedia.org/wiki/Anthony_Bacon_(1558%E2%80%931601)"
            title="Anthony Bacon (1558–1601)"
            >Anthony Bacon</a
          >
          under the personal tutelage of
          <a
            href="https://en.wikipedia.org/wiki/John_Whitgift"
            title="John Whitgift"
            >Dr John Whitgift</a
          >, future
          <a
            href="https://en.wikipedia.org/wiki/Archbishop_of_Canterbury"
            title="Archbishop of Canterbury"
            >Archbishop of Canterbury</a
          >. Bacon&apos;s education was conducted largely in Latin and followed
          the medieval curriculum. It was at
          <a href="https://en.wikipedia.org/wiki/Cambridge" title="Cambridge"
            >Cambridge</a
          >
          that Bacon first met
          <a
            href="https://en.wikipedia.org/wiki/Queen_Elizabeth_I"
            title="Queen Elizabeth I"
            >Queen Elizabeth</a
          >, who was impressed by his precocious intellect, and was accustomed
          to calling him &quot;The young lord keeper&quot;.<sup
            ><a href="https://en.wikipedia.org/wiki/Francis_Bacon#cite_note-13"
              >[11]</a
            ></sup
          >
        </p>
        <p>
          His studies brought him to the belief that the methods and results of
          science as then practised were erroneous. His reverence for
          <a href="https://en.wikipedia.org/wiki/Aristotle" title="Aristotle"
            >Aristotle</a
          >
          conflicted with his rejection of
          <a
            href="https://en.wikipedia.org/wiki/Aristotelianism"
            title="Aristotelianism"
            >Aristotelian philosophy</a
          >, which seemed to him barren, disputatious and wrong in its
          objectives.
        </p>

        <div style="width: 222px">&nbsp;</div>

        <div>
          <div style="width: 222px">
            <div><br /></div>
          </div>
        </div>
        <p>
          On 27 June 1576, he and Anthony entered
          <em>de societate magistrorum</em> at
          <a
            href="https://en.wikipedia.org/wiki/Gray%27s_Inn"
            title="Gray's Inn"
            >Gray&apos;s Inn</a
          >. A few months later, Francis went abroad with Sir
          <a
            href="https://en.wikipedia.org/wiki/Amias_Paulet"
            title="Amias Paulet"
            >Amias Paulet</a
          >, the English ambassador at Paris, while Anthony continued his
          studies at home. The state of government and society in France under
          <a
            href="https://en.wikipedia.org/wiki/Henry_III_of_France"
            title="Henry III of France"
            >Henry III</a
          >
          afforded him valuable political instruction. For the next three years
          he visited
          <a href="https://en.wikipedia.org/wiki/Blois" title="Blois">Blois</a>,
          <a href="https://en.wikipedia.org/wiki/Poitiers" title="Poitiers"
            >Poitiers</a
          >,
          <a href="https://en.wikipedia.org/wiki/Tours" title="Tours">Tours</a>,
          Italy, and Spain. There is no evidence that he studied at the
          <a
            href="https://en.wikipedia.org/wiki/University_of_Poitiers"
            title="University of Poitiers"
            >University of Poitiers</a
          >.<sup
            ><a href="https://en.wikipedia.org/wiki/Francis_Bacon#cite_note-16"
              >[14]</a
            ></sup
          >
          During his travels, Bacon studied language, statecraft, and civil law
          while performing routine diplomatic tasks. On at least one occasion he
          delivered diplomatic letters to England for
          <a
            href="https://en.wikipedia.org/wiki/Francis_Walsingham"
            title="Francis Walsingham"
            >Walsingham</a
          >, Burghley, and
          <a
            href="https://en.wikipedia.org/wiki/Robert_Dudley,_1st_Earl_of_Leicester"
            title="Robert Dudley, 1st Earl of Leicester"
            >Leicester</a
          >, as well as for the queen.
        </p>
        <p>
          The sudden death of his father in February 1579 prompted Bacon to
          return to England. Sir Nicholas had laid up a considerable sum of
          money to purchase an estate for his youngest son, but he died before
          doing so, and Francis was left with only a fifth of that money.<sup
            ><a
              href="https://en.wikipedia.org/wiki/Francis_Bacon#cite_note-FOOTNOTEAdamsonMitchell1911136-14"
            ></a
          ></sup>
          Having borrowed money, Bacon got into debt. To support himself, he
          took up his residence in law at Gray&apos;s Inn in 1579,<sup
            ><a
              href="https://en.wikipedia.org/wiki/Francis_Bacon#cite_note-FOOTNOTEAdamsonMitchell1911136-14"
            ></a
          ></sup>
          his income being supplemented by a grant from his mother Lady Anne of
          the manor of
          <a
            href="https://en.wikipedia.org/wiki/Marks_(manor_house)"
            title="Marks (manor house)"
            >Marks</a
          >
          near
          <a href="https://en.wikipedia.org/wiki/Romford" title="Romford"
            >Romford</a
          >
          in Essex, which generated a rent of &pound;46.
        </p>
        <h3><span>Parliamentarian</span></h3>
        <p>
          Bacon stated that he had three goals: to uncover truth, to serve his
          country, and to serve his church. He sought to further these ends by
          seeking a prestigious post. In 1580, through his uncle,
          <a
            href="https://en.wikipedia.org/wiki/William_Cecil,_1st_Baron_Burghley"
            title="William Cecil, 1st Baron Burghley"
            >Lord Burghley</a
          >, he applied for a post at court that might enable him to pursue a
          life of learning, but his application failed. For two years he worked
          quietly at
          <a
            href="https://en.wikipedia.org/wiki/Gray%27s_Inn"
            title="Gray's Inn"
            >Gray&apos;s Inn</a
          >, until he was admitted as an
          <a
            href="https://en.wikipedia.org/wiki/Outer_barrister"
            title="Outer barrister"
            >outer barrister</a
          >
          in 1582.<sup
            ><a href="https://en.wikipedia.org/wiki/Francis_Bacon#cite_note-18"
              >[16]</a
            ></sup
          >
        </p>
        <p>
          His parliamentary career began when he was elected
          <a
            href="https://en.wikipedia.org/wiki/Member_of_Parliament_(UK)"
            title="Member of Parliament (UK)"
            >MP</a
          >
          for
          <a
            href="https://en.wikipedia.org/wiki/Bossiney_(UK_Parliament_constituency)"
            title="Bossiney (UK Parliament constituency)"
            >Bossiney, Cornwall</a
          >, in a
          <a
            href="https://en.wikipedia.org/wiki/By-election"
            title="By-election"
            >by-election</a
          >
          in 1581. In 1584 he took his seat in
          <a
            href="https://en.wikipedia.org/wiki/Parliament_of_England"
            title="Parliament of England"
            >Parliament</a
          >
          for
          <a
            c
            href="https://en.wikipedia.org/wiki/Melcombe_Regis_(UK_Parliament_constituency)"
            title="Melcombe Regis (UK Parliament constituency)"
            >Melcombe</a
          >
          in Dorset, and in 1586 for
          <a
            href="https://en.wikipedia.org/wiki/Taunton_(UK_Parliament_constituency)"
            title="Taunton (UK Parliament constituency)"
            >Taunton</a
          >. At this time, he began to write on the condition of parties in the
          church, as well as on the topic of philosophical reform in the lost
          tract <em>Temporis Partus Maximus</em>. Yet he failed to gain a
          position that he thought would lead him to success. He showed signs of
          sympathy to Puritanism, attending the sermons of the Puritan chaplain
          of Gray&apos;s Inn and accompanying his mother to the
          <a
            href="https://en.wikipedia.org/wiki/Temple_Church"
            title="Temple Church"
            >Temple Church</a
          >
          to hear
          <a
            href="https://en.wikipedia.org/wiki/Walter_Travers"
            title="Walter Travers"
            >Walter Travers</a
          >. This led to the publication of his earliest surviving tract, which
          criticized the English church&apos;s suppression of the Puritan
          clergy. In the Parliament of 1586, he openly urged execution for the
          Catholic
          <a
            href="https://en.wikipedia.org/wiki/Mary,_Queen_of_Scots"
            title="Mary, Queen of Scots"
            >Mary, Queen of Scots</a
          >.
        </p>
        <p>
          About this time, he again approached his powerful uncle for help; this
          move was followed by his rapid progress at the bar. He became a
          <a href="https://en.wikipedia.org/wiki/Bencher" title="Bencher"
            >bencher</a
          >
          in 1586 and was elected a
          <a
            href="https://en.wikipedia.org/wiki/Reader_(Inns_of_Court)"
            title="Reader (Inns of Court)"
            >Reader</a
          >
          in 1587, delivering his first set of lectures in Lent the following
          year. In 1589, he received the valuable appointment of
          <a
            href="https://en.wikipedia.org/wiki/Reversion_(law)"
            title="Reversion (law)"
            >reversion</a
          >
          to the Clerkship of the
          <a
            href="https://en.wikipedia.org/wiki/Star_Chamber"
            title="Star Chamber"
            >Star Chamber</a
          >, although he did not formally take office until 1608; the post was
          worth &pound;1,600 a year.<sup
            ><a
              href="https://en.wikipedia.org/wiki/Francis_Bacon#cite_note-FOOTNOTEPeltonen2007-3"
              >[3]</a
            ></sup
          >
        </p>
        <p>
          In 1588 he became MP for
          <a
            href="https://en.wikipedia.org/wiki/Liverpool_(UK_Parliament_constituency)"
            title="Liverpool (UK Parliament constituency)"
            >Liverpool</a
          >
          and then for
          <a
            href="https://en.wikipedia.org/wiki/Middlesex_(UK_Parliament_constituency)"
            title="Middlesex (UK Parliament constituency)"
            >Middlesex</a
          >
          in 1593. He later sat three times for
          <a
            href="https://en.wikipedia.org/wiki/Ipswich_(UK_Parliament_constituency)"
            title="Ipswich (UK Parliament constituency)"
            >Ipswich</a
          >
          (1597, 1601, 1604) and once for
          <a
            href="https://en.wikipedia.org/wiki/Cambridge_University_(UK_Parliament_constituency)"
            title="Cambridge University (UK Parliament constituency)"
            >Cambridge University</a
          >
          (1614).<sup
            ><a href="https://en.wikipedia.org/wiki/Francis_Bacon#cite_note-19"
              >[17]</a
            ></sup
          >
        </p>
        <p>
          He became known as a liberal-minded reformer, eager to amend and
          simplify the law. Though a friend of the crown, he opposed feudal
          privileges and dictatorial powers. He spoke against religious
          persecution. He struck at the House of Lords in its usurpation of the
          Money Bills. He advocated for the union of England and Scotland, which
          made him a significant influence toward the consolidation of the
          United Kingdom; and he later would advocate for the integration of
          Ireland into the Union. Closer constitutional ties, he believed, would
          bring greater peace and strength to these countries.
        </p>
        <h3>
          <span>Final years of the Queen&apos;s reign</span>
        </h3>
        <p>
          Bacon soon became acquainted with
          <a
            href="https://en.wikipedia.org/wiki/Robert_Devereux,_2nd_Earl_of_Essex"
            title="Robert Devereux, 2nd Earl of Essex"
            >The 2nd Earl of Essex</a
          >, Queen Elizabeth&apos;s favourite. By 1591 he acted as the
          earl&apos;s confidential adviser.
        </p>
        <p>
          In 1592 he was commissioned to write a tract in response to the Jesuit
          <a
            href="https://en.wikipedia.org/wiki/Robert_Parsons_(Jesuit)"
            title="Robert Parsons (Jesuit)"
            >Robert Parson</a
          >&apos;s anti-government polemic, which he titled
          <em>Certain observations made upon a libel</em>, identifying England
          with the ideals of democratic
          <a
            href="https://en.wikipedia.org/wiki/History_of_Athens"
            title="History of Athens"
            >Athens</a
          >
          against the belligerence of Spain.
        </p>
        <p>
          Bacon took his third parliamentary seat for
          <a href="https://en.wikipedia.org/wiki/Middlesex" title="Middlesex"
            >Middlesex</a
          >
          when in February 1593 Elizabeth summoned Parliament to investigate a
          Roman Catholic plot against her. Bacon&apos;s opposition to a bill
          that would levy triple subsidies in half the usual time offended the
          Queen: opponents accused him of seeking popularity, and for a time the
          Court excluded him from favour.
        </p>

        <p>
          When the office of
          <a
            href="https://en.wikipedia.org/wiki/Attorney-General_for_England_and_Wales"
            title="Attorney-General for England and Wales"
            >Attorney General</a
          >
          fell vacant in 1594, Lord Essex&apos;s influence was not enough to
          secure the position for Bacon and it was given to Sir
          <a
            href="https://en.wikipedia.org/wiki/Edward_Coke"
            title="Edward Coke"
            >Edward Coke</a
          >. Likewise, Bacon failed to secure the lesser office of
          <a
            href="https://en.wikipedia.org/wiki/Solicitor-General_for_England_and_Wales"
            title="Solicitor-General for England and Wales"
            >Solicitor General</a
          >
          in 1595, the Queen pointedly snubbing him by appointing Sir
          <a
            href="https://en.wikipedia.org/wiki/Thomas_Fleming_(judge)"
            title="Thomas Fleming (judge)"
            >Thomas Fleming</a
          >
          instead. To console him for these disappointments, Essex presented him
          with a property at
          <a href="https://en.wikipedia.org/wiki/Twickenham" title="Twickenham"
            >Twickenham</a
          >, which Bacon subsequently sold for &pound;1,800.<sup
            ><a
              href="https://en.wikipedia.org/wiki/Francis_Bacon#cite_note-25"
            ></a
          ></sup>
        </p>
        <p>
          In 1597 Bacon became the first
          <a
            href="https://en.wikipedia.org/wiki/Queen%27s_Counsel"
            title="Queen's Counsel"
            >Queen&apos;s Counsel</a
          >
          designate, when Queen Elizabeth reserved him as her legal counsel. In
          1597, he was also given a patent, giving him precedence at the Bar.
          Despite his designations, he was unable to gain the status and
          notoriety of others. In a plan to revive his position he
          unsuccessfully courted the wealthy young widow Lady
          <a
            href="https://en.wikipedia.org/wiki/Elizabeth_Hatton"
            title="Elizabeth Hatton"
            >Elizabeth Hatton</a
          >.<sup
            ><a
              href="https://en.wikipedia.org/wiki/Francis_Bacon#cite_note-28"
            ></a
          ></sup>
          His courtship failed after she broke off their relationship upon
          accepting marriage to Sir Edward Coke, a further spark of enmity
          between the men. In 1598 Bacon was arrested for debt. Afterward,
          however, his standing in the Queen&apos;s eyes improved. Gradually,
          Bacon earned the standing of one of the learned counsels. His
          relationship with the Queen further improved when he severed ties with
          Essex&mdash;a shrewd move, as Essex would be executed for treason in
          1601.
        </p>
        <p>
          With others, Bacon was appointed to investigate the charges against
          Essex. A number of Essex&apos;s followers confessed that Essex had
          planned a rebellion against the Queen. Bacon was subsequently a part
          of the legal team headed by the
          <a
            href="https://en.wikipedia.org/wiki/Attorney_General_for_England_and_Wales"
            title="Attorney General for England and Wales"
            >Attorney General</a
          >
          Sir Edward Coke at Essex&apos;s treason trial. After the execution,
          the Queen ordered Bacon to write the official government account of
          the trial, which was later published as
          <em
            >A DECLARATION of the Practices and Treasons attempted and committed
            by Robert late Earle of Essex and his Complices, against her
            Majestie and her Kingdoms ...</em
          >
          after Bacon&apos;s first draft was heavily edited by the Queen and her
          ministers.
        </p>
        <p>
          According to his personal secretary and chaplain,
          <a
            href="https://en.wikipedia.org/wiki/William_Rawley"
            title="William Rawley"
            >William Rawley</a
          >, as a judge Bacon was always tender-hearted, &quot;looking upon the
          examples with the eye of severity, but upon the person with the eye of
          pity and compassion&quot;. And also that &quot;he was free from
          malice&quot;, &quot;no revenger of injuries&quot;, and &quot;no
          defamer of any man&quot;.
        </p>
        <h3>Death</h3>
        <p>
          On 9 April 1626, Francis Bacon died of
          <a href="https://en.wikipedia.org/wiki/Pneumonia" title="Pneumonia"
            >pneumonia</a
          >
          while at Arundel mansion at
          <a href="https://en.wikipedia.org/wiki/Highgate" title="Highgate"
            >Highgate</a
          >
          outside London. An influential account of the circumstances of his
          death was given by John Aubrey&apos;s <em>Brief Lives</em>.
          Aubrey&apos;s vivid account, which portrays Bacon as a martyr to
          experimental scientific method, had him journeying to High-gate
          through the snow with the King&apos;s physician when he is suddenly
          inspired by the possibility of using the snow to preserve meat:
        </p>
        <blockquote>
          <p>
            They were resolved they would try the experiment presently. They
            alighted out of the coach and went into a poor woman&apos;s house at
            the bottom of Highgate hill, and bought a fowl, and made the woman
            <a
              href="https://en.wiktionary.org/wiki/exenterate"
              title="wiktionary:exenterate"
              >exenterate</a
            >
            it.
          </p>
        </blockquote>
        <p>
          After stuffing the fowl with snow, Bacon contracted a fatal case of
          <a href="https://en.wikipedia.org/wiki/Pneumonia" title="Pneumonia"
            >pneumonia</a
          >. Some people, including Aubrey, consider these two contiguous,
          possibly coincidental events as related and causative of his death:
        </p>
        <blockquote>
          <p>
            The Snow so chilled him that he immediately fell so extremely ill,
            that he could not return to his Lodging &hellip; but went to the
            Earle of Arundel&apos;s house at Highgate, where they put him into
            &hellip; a damp bed that had not been layn-in &hellip; which gave
            him such a cold that in 2 or 3 days as I remember Mr Hobbes told me,
            he died of Suffocation.
          </p>
        </blockquote>
        <p>
          Aubrey has been criticized for his evident credulousness in this and
          other works; on the other hand, he knew
          <a
            href="https://en.wikipedia.org/wiki/Thomas_Hobbes"
            title="Thomas Hobbes"
            >Thomas Hobbes</a
          >, Bacon&apos;s fellow-philosopher and friend. Being unwittingly on
          his deathbed, the philosopher dictated his last letter to his absent
          host and friend
          <a
            href="https://en.wikipedia.org/wiki/Thomas_Howard,_21st_Earl_of_Arundel"
            title="Thomas Howard, 21st Earl of Arundel"
            >Lord Arundel</a
          >:
        </p>
        <blockquote>
          <p>
            My very good Lord,&mdash;I was likely to have had the fortune of
            <a
              href="https://en.wikipedia.org/wiki/Pliny_the_Elder"
              title="Pliny the Elder"
              >Caius Plinius the elder</a
            >, who lost his life by trying an experiment about the burning of
            <a
              href="https://en.wikipedia.org/wiki/Mount_Vesuvius"
              title="Mount Vesuvius"
              >Mount Vesuvius</a
            >; for I was also desirous to try an experiment or two touching the
            conservation and in-duration of bodies. As for the experiment
            itself, it succeeded excellently well; but in the journey between
            London and High-gate, I was taken with such a fit of
            <a href="https://en.wikipedia.org/wiki/Cough" title="Cough"
              >casting</a
            >
            as I know not whether it were the Stone, or some surfeit or cold, or
            indeed a touch of them all three. But when I came to your
            Lordship&apos;s House, I was not able to go back, and therefore was
            forced to take up my lodging here, where your housekeeper is very
            careful and diligent about me, which I assure myself your Lordship
            will not only pardon towards him, but think the better of him for
            it. For indeed your Lordship&apos;s House was happy to me, and I
            kiss your noble hands for the welcome which I am sure you give me to
            it. I know how unfit it is for me to write with any other hand than
            mine own, but by my troth my fingers are so disjointed with sickness
            that I cannot steadily hold a pen.<sup
              ><a
                href="https://en.wikipedia.org/wiki/Francis_Bacon#cite_note-65"
              ></a
            ></sup>
          </p>
        </blockquote>
        <p>
          Another account appears in a biography by William Rawley, Bacon&apos;s
          personal secretary and chaplain:
        </p>
        <blockquote>
          <p>
            He died on the ninth day of April in the year 1626, in the early
            morning of the day then celebrated for our Savior&apos;s
            resurrection, in the sixty-sixth year of his age, at the Earl of
            Arundel&apos;s house in Highgate, near London, to which place he
            casually repaired about a week before; God so ordaining that he
            should die there of a gentle fever, accidentally accompanied with a
            great cold, whereby the defluxion of
            <a href="https://en.wikipedia.org/wiki/Rheum" title="Rheum"
              >rheum</a
            >
            fell so plentifully upon his breast, that he died by
            suffocation.<sup
              ><a
                href="https://en.wikipedia.org/wiki/Francis_Bacon#cite_note-Rawley-bio-66"
              ></a
            ></sup>
          </p>
        </blockquote>
        <p>
          He was buried in
          <a
            href="https://en.wikipedia.org/wiki/St._Michael%27s_Church,_St._Albans"
            title="St. Michael's Church, St. Albans"
            >St Michael&apos;s church</a
          >
          in St Albans. At the news of his death, over 30 great minds collected
          together their eulogies of him, which were then later published in
          Latin.<sup
            ><a
              href="https://en.wikipedia.org/wiki/Francis_Bacon#cite_note-67"
            ></a
          ></sup>
          He left personal assets of about &pound;7,000 and lands that realised
          &pound;6,000 when sold.<sup
            ><a
              href="https://en.wikipedia.org/wiki/Francis_Bacon#cite_note-BGL-68"
            ></a
          ></sup>
          His debts amounted to more than &pound;23,000, equivalent to more than
          &pound;3m at current value.
        </p>
      </div>

      <!-- ===== End of Francis Bacon ============ -->

      <!-- ===== William Shakespeare Markup ====== -->
      <div class="william-shakespeare">
        <h2>William Shakespeare</h2>
        <p class="intro">
          William Shakespeare (bapt. 26 April 1564 &ndash; 23 April 1616) was an
          English playwright, poet, and actor, widely regarded as the greatest
          writer in the English language and the world&apos;s greatest
          dramatist. He is often called England&apos;s national poet and the
          &quot;Bard of Avon&quot; (or simply &quot;the Bard&quot;) His extant
          works, including collaborations, consist of some 39 plays, 154
          sonnets, three long narrative poems, and a few other verses, some of
          uncertain authorship. His plays have been translated into every major
          living language and are performed more often than those of any other
          playwright. They also continue to be studied and reinterpreted.
        </p>

        <p>
          Shakespeare was born and raised in Stratford-upon-Avon, Warwickshire.
          At the age of 18, he married Anne Hathaway, with whom he had three
          children: Susanna and twins Hamnet and Judith. Sometime between 1585
          and 1592, he began a successful career in London as an actor, writer,
          and part-owner of a playing company called the Lord Chamberlain&apos;s
          Men, later known as the King&apos;s Men. At age 49 (around 1613), he
          appears to have retired to Stratford, where he died three years later.
          Few records of Shakespeare&apos;s private life survive; this has
          stimulated considerable speculation about such matters as his physical
          appearance, his sexuality, his religious beliefs, and whether the
          works attributed to him were written by others.
        </p>
        <p>
          Shakespeare produced most of his known works between 1589 and 1613.
          His early plays were primarily comedies and histories and are regarded
          as some of the best work produced in these genres. He then wrote
          mainly tragedies until 1608, among them Hamlet, Romeo and Juliet,
          Othello, King Lear, and Macbeth, all considered to be among the finest
          works in the English language. In the last phase of his life, he wrote
          tragicomedies (also known as romances) and collaborated with other
          playwrights.
        </p>
        <p>
          Many of Shakespeare&apos;s plays were published in editions of varying
          quality and accuracy in his lifetime. However, in 1623, two fellow
          actors and friends of Shakespeare&apos;s, John Heminges and Henry
          Condell, published a more definitive text known as the First Folio, a
          posthumous collected edition of Shakespeare&apos;s dramatic works that
          included all but two of his plays. The volume was prefaced with a poem
          by Ben Jonson, in which Jonson presciently hailed Shakespeare in a
          now-famous quote as &quot;not of an age, but for all time&quot;.
        </p>

        <p>
          Shakespeare&apos;s work has made a lasting impression on later theatre
          and literature. In particular, he expanded the dramatic potential of
          characterisation, plot, language, and genre.[209] Until Romeo and
          Juliet, for example, romance had not been viewed as a worthy topic for
          tragedy. Soliloquies had been used mainly to convey information about
          characters or events, but Shakespeare used them to explore
          characters&apos; minds. His work heavily influenced later poetry. The
          Romantic poets attempted to revive Shakespearean verse drama, though
          with little success. Critic George Steiner described all English verse
          dramas from Coleridge to Tennyson as &quot;feeble variations on
          Shakespearean themes.&quot;
        </p>
        <p>
          Shakespeare influenced novelists such as Thomas Hardy, William
          Faulkner, and Charles Dickens. The American novelist Herman
          Melville&apos;s soliloquies owe much to Shakespeare; his Captain Ahab
          in Moby-Dick is a classic tragic hero, inspired by King Lear. Scholars
          have identified 20,000 pieces of music linked to Shakespeare&apos;s
          works. These include three operas by Giuseppe Verdi, Macbeth, Otello
          and Falstaff, whose critical standing compares with that of the source
          plays. Shakespeare has also inspired many painters, including the
          Romantics and the Pre-Raphaelites. The Swiss Romantic artist Henry
          Fuseli, a friend of William Blake, even translated Macbeth into
          German. The psychoanalyst Sigmund Freud drew on Shakespearean
          psychology, in particular, that of Hamlet, for his theories of human
          nature.
        </p>
        <p>
          In Shakespeare&apos;s day, English grammar, spelling, and
          pronunciation were less standardised than they are now, and his use of
          language helped shape modern English.[218] Samuel Johnson quoted him
          more often than any other author in his A Dictionary of the English
          Language, the first serious work of its type. Expressions such as
          &quot;with bated breath&quot; (Merchant of Venice) and &quot;a
          foregone conclusion&quot; (Othello) have found their way into everyday
          English speech.]
        </p>
        <p>
          Shakespeare&apos;s influence extends far beyond his native England and
          the English language. His reception in Germany was particularly
          significant; as early as the 18th century Shakespeare was widely
          translated and popularised in Germany, and gradually became a
          &quot;classic of the German Weimar era;&quot; Christoph Martin Wieland
          was the first to produce complete translations of Shakespeare&apos;s
          plays in any language. Actor and theatre director Simon Callow writes,
          &quot;this master, this titan, this genius, so profoundly British and
          so effortlessly universal, each different culture &ndash; German,
          Italian, Russian &ndash; was obliged to respond to the Shakespearean
          example; for the most part, they embraced it, and him, with joyous
          abandon, as the possibilities of language and character in action that
          he celebrated liberated writers across the continent. Some of the most
          deeply affecting productions of Shakespeare have been non-English, and
          non-European. He is that unique writer: he has something for
          everyone.&quot;
        </p>
        <h3>Critical Reputation</h3>
        <q>He was not of an age, but for all time.</q>
        <p>&mdash;Ben Jonson</p>
        <p>
          Shakespeare was not revered in his lifetime, but he received a large
          amount of praise. In 1598, the cleric and author Francis Meres singled
          him out from a group of English playwrights as &quot;the most
          excellent&quot; in both comedy and tragedy. The authors of the
          Parnassus plays at St John&apos;s College, Cambridge, numbered him
          with Chaucer, Gower, and Spenser. In the First Folio, Ben Jonson
          called Shakespeare the &quot;Soul of the age, the applause, delight,
          the wonder of our stage&quot;, although he had remarked elsewhere that
          &quot;Shakespeare wanted art&quot; (lacked skill).
        </p>

        <p>
          Between the Restoration of the monarchy in 1660 and the end of the
          17th century, classical ideas were in vogue. As a result, critics of
          the time mostly rated Shakespeare below John Fletcher and Ben Jonson.
          Thomas Rymer, for example, condemned Shakespeare for mixing the comic
          with the tragic. Nevertheless, poet and critic John Dryden rated
          Shakespeare highly, saying of Jonson, &quot;I admire him, but I love
          Shakespeare&quot;. For several decades, Rymer&apos;s view held sway;
          but during the 18th century, critics began to respond to Shakespeare
          on his own terms and acclaim what they termed his natural genius. A
          series of scholarly editions of his work, notably those of Samuel
          Johnson in 1765 and Edmond Malone in 1790, added to his growing
          reputation. By 1800, he was firmly enshrined as the national poet. In
          the 18th and 19th centuries, his reputation also spread abroad. Among
          those who championed him were the writers Voltaire, Goethe, Stendhal,
          and Victor Hugo.
        </p>
        <p>
          A recently garlanded statue of William Shakespeare in Lincoln Park,
          Chicago, typical of many created in the 19th and early 20th centuries
        </p>
        <p>
          During the Romantic era, Shakespeare was praised by the poet and
          literary philosopher Samuel Taylor Coleridge, and the critic August
          Wilhelm Schlegel translated his plays in the spirit of German
          Romanticism. In the 19th century, critical admiration for
          Shakespeare&apos;s genius often bordered on adulation. &quot;This King
          Shakespeare,&quot; the essayist Thomas Carlyle wrote in 1840,
          &quot;does not he shine, in crowned sovereignty, over us all, as the
          noblest, gentlest, yet strongest of rallying signs;
          indestructible&quot;. The Victorians produced his plays as lavish
          spectacles on a grand scale. The playwright and critic George Bernard
          Shaw mocked the cult of Shakespeare worship as &quot;bardolatry&quot;,
          claiming that the new naturalism of Ibsen&apos;s plays had made
          Shakespeare obsolete.
        </p>
        <p>
          The modernist revolution in the arts during the early 20th century,
          far from discarding Shakespeare, eagerly enlisted his work in the
          service of the avant-garde. The Expressionists in Germany and the
          Futurists in Moscow mounted productions of his plays. Marxist
          playwright and director Bertolt Brecht devised an epic theatre under
          the influence of Shakespeare. The poet and critic T.S. Eliot argued
          against Shaw that Shakespeare&apos;s &quot;primitiveness&quot; in fact
          made him truly modern. Eliot, along with G. Wilson Knight and the
          school of New Criticism, led a movement towards a closer reading of
          Shakespeare&apos;s imagery. In the 1950s, a wave of new critical
          approaches replaced modernism and paved the way for
          &quot;post-modern&quot; studies of Shakespeare. By the 1980s,
          Shakespeare studies were open to movements such as structuralism,
          feminism, New Historicism, African-American studies, and queer
          studies. Comparing Shakespeare&apos;s accomplishments to those of
          leading figures in philosophy and theology, Harold Bloom wrote:
          &quot;Shakespeare was larger than Plato and than St. Augustine. He
          encloses us because we see with his fundamental perceptions.&quot;
        </p>
        <h3>Speculation about Shakespeare</h3>
        <p>
          Around 230 years after Shakespeare&apos;s death, doubts began to be
          expressed about the authorship of the works attributed to him.
          Proposed alternative candidates include Francis Bacon, Christopher
          Marlowe, and Edward de Vere, 17th Earl of Oxford. Several &quot;group
          theories&quot; have also been proposed. Only a small minority of
          academics believe there is reason to question the traditional
          attribution, but interest in the subject, particularly the Oxfordian
          theory of Shakespeare authorship, continues into the 21st century.
        </p>
        <p>Religion</p>
        <p>
          Shakespeare conformed to the official state religion, but his private
          views on religion have been the subject of debate. Shakespeare&apos;s
          will uses a Protestant formula, and he was a confirmed member of the
          Church of England, where he was married, his children were baptised,
          and where he is buried. Some scholars claim that members of
          Shakespeare&apos;s family were Catholics, at a time when practising
          Catholicism in England was against the law. Shakespeare&apos;s mother,
          Mary Arden, certainly came from a pious Catholic family. The strongest
          evidence might be a Catholic statement of faith signed by his father,
          John Shakespeare, found in 1757 in the rafters of his former house in
          Henley Street. However, the document is now lost and scholars differ
          as to its authenticity. In 1591, the authorities reported that John
          Shakespeare had missed church &quot;for fear of process for
          debt&quot;, a common Catholic excuse. In 1606, the name of
          William&apos;s daughter Susanna appears on a list of those who failed
          to attend Easter communion in Stratford. Other authors argue that
          there is a lack of evidence about Shakespeare&apos;s religious
          beliefs. Scholars find evidence both for and against
          Shakespeare&apos;s Catholicism, Protestantism, or lack of belief in
          his plays, but the truth may be impossible to prove.
        </p>

        <h3>Sexuality</h3>
        <p>
          Few details of Shakespeare&apos;s sexuality are known. At 18, he
          married 26-year-old Anne Hathaway, who was pregnant. Susanna, the
          first of their three children, was born six months later on 26 May
          1583. Over the centuries, some readers have posited that
          Shakespeare&apos;s sonnets are autobiographical, and point to them as
          evidence of his love for a young man. Others read the same passages as
          the expression of intense friendship rather than romantic love. The 26
          so-called &quot;Dark Lady&quot; sonnets, addressed to a married woman,
          are taken as evidence of heterosexual liaisons.
        </p>

        <h3>Portraiture</h3>
        <p>
          No written contemporary description of Shakespeare&apos;s physical
          appearance survives, and no evidence suggests that he ever
          commissioned a portrait, so the Droeshout engraving, which Ben Jonson
          approved of as a good likeness, and his Stratford monument provide
          perhaps the best evidence of his appearance. From the 18th century,
          the desire for authentic Shakespeare portraits fuelled claims that
          various surviving pictures depicted Shakespeare. That demand also led
          to the production of several fake portraits, as well as
          misattributions, repaintings, and relabelling of portraits of other
          people
        </p>
      </div>
      <!-- ===== End of William Shakespeare Markup ====== -->

      <!-- ======= Christopher hatton Markup ============ -->

      <div class="chris-hatton">
        <h2>Christopher Hatton</h2>
        <p class="intro">
          <strong>Sir Christopher Hatton</strong>
          <a
            href="https://en.wikipedia.org/wiki/Knight_of_the_Garter"
            title="Knight of the Garter"
            >KG</a
          >
          (1540 &ndash; 20 November 1591) was an English politician,
          <a
            href="https://en.wikipedia.org/wiki/Lord_Chancellor"
            title="Lord Chancellor"
            >Lord Chancellor</a
          >
          of
          <a href="https://en.wikipedia.org/wiki/England" title="England"
            >England</a
          >
          and a
          <a href="https://en.wikipedia.org/wiki/Favourite" title="Favourite"
            >favourite</a
          >
          of
          <a
            class="mw-redirect"
            href="https://en.wikipedia.org/wiki/Elizabeth_I_of_England"
            title="Elizabeth I of England"
            >Elizabeth I of England</a
          >. He was one of the judges who found
          <a
            href="https://en.wikipedia.org/wiki/Mary,_Queen_of_Scots"
            title="Mary, Queen of Scots"
            >Mary, Queen of Scots</a
          >
          guilty of treason.&nbsp;
        </p>
        <h3>Early Years</h3>
        <p>
          Sir Christopher was the second son of William Hatton (died 29 August
          1546) of Holdenby, Northamptonshire, and his second wife, Alice
          Saunders, daughter of Lawrence Saunders (died 1544) of Harrington,
          Northamptonshire. His wife, Alice Brokesby was the daughter of Robert
          Brokesby (died 28 March 1531) of Shoby, Leicestershire, and of Alice
          Shirley.
        </p>
        <p>
          On his father&apos;s side, the Hatton pedigree is said to be
          &quot;traced beyond records&quot;. In the reign of Henry VII, Henry
          Hatton of Quisty Birches in Cheshire married Elizabeth, sole heiress
          of William Holdenby of Holdenby, Northamptonshire. Their son, John
          Hatton, settled at Holdenby and had three sons, of whom Christopher
          Hatton&apos;s father, William, was the eldest. He is said to have had
          two brothers, Thomas and William, and a sister Dorothy (died 1569),
          who married first John Newport (died 1566) of Hunningham,
          Warwickshire, then William Underhill (died 1570) of Idlicote,
          Warwickshire, whose son, also William Underhill (died 1597), sold New
          Place to William Shakespeare.
        </p>
        <p>
          In 1567, Hatton&apos;s brother Thomas married John Newport&apos;s
          sister, Ursula Newport. However Hatton&apos;s two brothers appear to
          have died relatively young and without issue. It was his sister
          Dorothy&apos;s son by John Newport who eventually became Hatton&apos;s
          heir.
        </p>
        <p>
          Hatton&apos;s education is said to have been supervised by his
          maternal uncle, William Saunders (died c. 1583). Otherwise nothing is
          known of his life until he entered St Mary Hall, Oxford as a gentleman
          commoner at the age of 15 or 16. He left Oxford without a degree and
          enrolled in the Inner Temple on 26 May 1560. It is not known whether
          he was called to the bar.
        </p>
        <p>
          In 1561 Hatton played the part of Master of the Game at a masque at
          the Inner Temple,[10] and on a similar occasion attracted the
          attention of Queen Elizabeth. Handsome and skilled, Hatton&apos;s
          dancing quickly won him the Queen&apos;s favour and the nickname
          &quot;The Dancing Chancellor&quot;. He came to court, according to
          Naunton, &quot;by the galliard, for he came thither as a private
          gentleman of the Inns of Court in a masque, and for his activity and
          person, which was tall and proportionable, taken into the Queen&apos;s
          favour.&quot; In 1564 he became one of the Queen&apos;s gentlemen
          pensioners and a gentleman of the privy chamber, and in July 1572
          captain of the yeomen of the guard. On 11 November 1577 he became
          vice-chamberlain of the royal household and was sworn into the Privy
          Council. That same month he was knighted. In June 1578, the Queen
          formally granted him the Bishop of Ely&apos;s house in Ely Place,
          Holborn, despite vigorous protests from the Bishop. These
          appointments, with the valuable grants the Queen showered on him in
          these early years,[18] prompted rumours that he was her lover, a
          charge specifically made in 1584 by Mary, Queen of Scots. There were
          certainly close personal relations between them. In correspondence the
          Queen called him her &quot;Lyddes&quot;. He is said to have referred
          to himself in at least one letter as her &quot;sheep&quot;. Yet Hatton
          &quot;was probably innocent in the matter.&quot;
        </p>
        <p>
          Hatton represented Higham Ferrers in Parliament in 1571 and from May
          1572 was a member for Northamptonshire. He was active in Parliament in
          prosecutions of John Stubbs and William Parry. In 1581, he was one of
          those appointed to arrange a marriage between the Queen and Francois,
          Duke of Alen&ccedil;on, although he urged the Queen against it.
        </p>
        <p>
          According to one account, Hatton once assured Mary, Queen of Scots he
          would fetch her to London if Queen Elizabeth died. Whatever the truth
          of this, Hatton&apos;s loyalty to his sovereign seems to have remained
          unquestioned. On one occasion, in December 1584, he led 400 kneeling
          members of the House of Commons in a prayer for the Queen&apos;s
          safety.
        </p>
        <p>
          Hatton was a member of the law court that tried Anthony Babington in
          1586 and one of the commissioners who found Mary, Queen of Scots,
          guilty of treason the following year. He vigorously denounced her in
          Parliament and advised William Davison to forward the warrant for her
          execution to Fotheringhay.
        </p>
        <p>
          Hatton sent a ring with a letter to Sir Thomas Smith, to be presented
          to Queen Elizabeth. It was to be worn at the breast, and Hatton
          claimed for it &quot;the virtue to expel infectious airs, and is, as
          it (the letter) telleth me, to be worn between the sweet duggs, the
          chaste nest of pure constancy.&quot; Sir Robert Cecil reported in
          August 1591 that the queen, who was at Portsmouth, wore a jewel in the
          form of bagpipes on her ruff that Hatton had sent her. Christopher
          Hatton as Lord Chancellor with his seal on the table by his side, by
          Nicholas Hilliard, 1588&ndash;1591
        </p>
        <p>
          In 1587 Hatton became Lord Chancellor. Though he had no great
          knowledge of the law, he appears to have acted with sense and
          judgement. He was said to have been a Roman Catholic in all but name,
          but treated religious questions in a moderate and tolerant way.
        </p>
        <p>
          Hatton was chancellor of the University of Oxford. He is reported to
          have been parsimonious, but he patronized men of letters and Edmund
          Spenser was among his friends. He wrote the fourth act of a tragedy,
          Tancred and Gismund. His death occasioned several panegyrics in prose
          and verse.
        </p>
        <p>
          Although he seems to have had an illegitimate daughter, Hatton never
          married, and his large and valuable estates descended to his nephew,
          Sir William Newport (1560&ndash;1597), who took the surname Hatton.
          When the latter died without male issue in 1597, the estates passed to
          a kinsman, another Sir Christopher Hatton (died 1619), whose son and
          successor, Christopher, was created Baron Hatton of Kirby.
        </p>
        <h3>Wealth</h3>
        <p>
          Hatton became wealthy through his progressing career and the
          Queen&apos;s fondness for him, and in 1583 he embarked on building at
          Holdenby, Northamptonshire, what was to be the largest privately owned
          Elizabethan house in England. It had 123 huge glass windows at a time
          when glass was very expensive &ndash; window numbers became a way to
          show wealth. It had two great courts and was as large as Hampton Court
          palace. It was three storeys high and had two large state rooms, one
          for himself and another for the Queen, should she ever stay, which she
          never did.
        </p>
        <p>
          Lord Burghley, visiting the house in his old age, was impressed with
          the grand staircase from the hall to the state rooms and proclaimed
          the house so faultless he forgot the &quot;infirmity of his legs&quot;
          whilst he walked around. No expense was spared. Hatton even paid to
          move a village because it spoiled the view from one of his windows.
          However, the cost of the house drained his purse, so that Hatton was
          short of money for the rest of his life. No stranger to the financial
          strain of building, Burghley wrote to Hatton: &quot;God send us both
          long to enjoy her, for whom we both meant to exceed our purses in
          these.&quot;
        </p>
        <p>
          To maintain his dwindling wealth, Hatton began investing in some
          voyages of Francis Drake, including Drake&apos;s acts of piracy in
          Spanish America. During Drake&apos;s subsequent circumnavigation of
          the globe, when he reached the straits of Magellan, he renamed his
          ship The Golden Hind in honour of Hatton&apos;s coat of arms, which
          contained a golden hind, and of all the Spanish gold on board. Hatton
          made a profit of &pound;2300 from this expedition.Death
        </p>
        <p>
          Despite his successes Hatton died with large debts, a few years after
          his Holdenby mansion was completed in 1583. Hatton claimed to refuse
          to sleep there until Queen Elizabeth I would do so. The remains of the
          original Holdenby House are a room incorporated into a replacement
          building in the 1870s; part of the pillared doorway with two arches
          inscribed with the date 1583 in the gardens; and drawings and plans.
          He had begun to build his other country house, Kirby Hall, in 1570. It
          was based on French architectural designs and expanded in Classical
          style over the decades.
        </p>
        <p>
          Hatton&apos;s health declined in 1591. The Queen visited him on 11
          November. Nine days later he died at Ely Place and was given a state
          funeral at St Paul&apos;s Cathedral on 16 December. A grand monument
          to him stood at the high altar of Old St Paul&apos;s, &quot;towering
          above it &ndash; an outrage to the susceptibilities of the devout but
          an object of marvel to London sightseers &ndash; until the Great Fire
          of 1666 dethroned and destroyed it.&quot; Hatton is listed on a modern
          monument in the crypt as one of the important graves lost.
        </p>
        <p></p>
        <h3>Death</h3>
        <p>
          Despite his successes Hatton died with large debts, a few years after
          his Holdenby mansion was completed in 1583. Hatton claimed to refuse
          to sleep there until Queen Elizabeth I would do so. The remains of the
          original Holdenby House are a room incorporated into a replacement
          building in the 1870s; part of the pillared doorway with two arches
          inscribed with the date 1583 in the gardens; and drawings and plans.
          He had begun to build his other country house, Kirby Hall, in 1570. It
          was based on French architectural designs and expanded in Classical
          style over the decades.
        </p>
        <p>
          Hatton&apos;s health declined in 1591. The Queen visited him on 11
          November. Nine days later he died at Ely Place and was given a state
          funeral at St Paul&apos;s Cathedral on 16 December. A grand monument
          to him stood at the high altar of Old St Paul&apos;s, &quot;towering
          above it &ndash; an outrage to the susceptibilities of the devout but
          an object of marvel to London sightseers &ndash; until the Great Fire
          of 1666 dethroned and destroyed it.&quot; Hatton is listed on a modern
          monument in the crypt as one of the important graves lost.
        </p>
      </div>
      <!-- ======= End of Christopher Hatton Markup ============ -->
    </div>
  </div>
</template>
