console.log('script activated');
const headerCenter = document.getElementById('centerSide');
const headerRight = document.getElementById('rightSide');
const headerRight2 = document.getElementById('right2');
const details = document.getElementById('details');
const left = document.getElementById('left');
const center = document.getElementById('center');
const right = document.getElementById('right');
const headerDetails = {
  en: [
    `<div class= "cvBox">
    <span class= "myName">
    <br>
    Petri Räsänen
    </span>
    <p>
    <span class= "goldText">Age: </span> <span class= "blackText">38</span><br>
    <span class= "goldText">Civil status: </span> <span class= "blackText">Married</span>
    </p>
    </div>`,
    `<div class= "cvBox">
    <br>
    <span class= "smallHeader whiteText">Language skills:<br>
    </span>
    <p>
    <span class= "goldText">Native: </span>Finnish <br>
    <span class= "goldText">Fluent: </span>English <br>
    <span class= "goldText">Fluent: </span>Spanish <br>
    </p>
    </div>`,
    `<div class= "cvBox">
    <br>
    <span class= "smallHeader whiteText">Contact:<br>
    </span>
    <p>
    <span class= "goldText">Email:</span> <span class= "blackText">rasanen.petri@gmail.com</span><br>
    <span class= "goldText">Phone:</span> <span class= "blackText">+358 45 156 9881</span>
    </p>
    </div>`
  ]
};
const cvDetails = {
  fin: [`<div class= "finnish">

  <p class= "titles">
  Kielitaito:
  </p>
  <p>
  <article class= "facts fadingIn">
  Suomi. Äidinkieli.<br/><br/>
  Englanti. Erinomainen.<br/><br/>
  Espanja. Erinomainen.<br/><br/>
  </article>
  </p>
  <p class= "titles">
  Taitoja:
  </p>
  <p>
  <article class= "facts fadingIn">
  HTML5 ohjelmointi.<br/>
  - 3 vuoden kokemus, sisältäen mm. CSS, Javascript, React, Node.js, MongoDB, MySql, Git.<br/><br/>
  Asiakaspalvelu.<br/>
  - 6 vuoden ammattikokemus.<br/><br/>
  Tietokoneiden käyttö.<br/>
  - yli 20 vuoden kokemus. sis. Mac, Linux, Windows, Palvelimet, Officet jne.<br/><br/>
  </article>
  </p>
  </div>`,

  `<div class= "finnish">
  <p class= "titles">
  Koulutus:
  </p>
  <p>
  <article class= "facts fadingIn">
  2001. Merkonomi. Jyväskylän Kauppaoppilaitos.<br/><br/>
  2004. Datanomi. Pohjoisen Keski-Suomen Oppimiskeskus.<br/><br/>
  2018. Legacy Front End Developer Certification. Freecodecamp.org.
  </article>
  <p class= "titles">
  Luottotoimet:
  </p>
  <article class= "facts fadingIn">
  2019-20. Webmaster. Halssilan Hieronta.<br/>
  - developer ja webmaster:  https://halssilanhieronta.net<br/><br/>
  2018-20. Webmaster. Rising Eagle Ry.<br/>
  - developer ja webmaster: https://irtep.github.io/kyokushin-jkl/<br/><br/>
	2006 Jyväskylän Jigotain taidojaos.<br/>
  - tiedotusvastaava.<br/><br/>
	2005-06, Jyväskylän Jigotain taidojaos.
  - juniorivalmentaja.<br/><br/>
	2009-10, Jyväskylän Pirates.
  - joukkueenjohtaja.<br/><br/>
  </article>
  </p>
  </div>`,

  `<div id= "finnish">
  <p class= "titles">
  Työkokemus:
  </p>
  <p>
  <article class= "facts fadingIn">
  2019-20. Tämän hetkinen työni. <br/>Finse Oy.<br/>
  - 1 vuotta putkentaivuttaja.<br/>
  - 11 kk metallisahaaja.
  </article>
  </p>
  <p>
  <article class= "facts fadingIn">
  2015-2018. 3 vuotta, 2kk. <br/>Betsson Group.<br/>
  - 9kk Execution Coordinator, mainoskampanjoiden koordinointi ja toteutus.<br/>
  - 1 vuosi, 1kk Senior Customer Service Agent.<br/>
  - 1 vuosi, 6kk Customer Service Agent.
  </article>
  </p>
  <p>
  <article class= "facts fadingIn">
  2014-2015. 9kk. <br/>Group Backpackers S.A.C.<br/>
  - Hostellin vastaanottovirkailija.
  </article>
  </p>
  <p>
  <article class= "facts fadingIn">
  2011-2014. 2 vuotta 9kk. <br/>RCI Europe.<br/>
  - Holiday Sales Consult.
  </article>
  </p>
  <p>
  <article class= "facts fadingIn">
  2006-2011. 5 vuotta 5kk. <br/>Finse Oy.<br/>
  - metallisahaaja.
  </article>
  </p>
  <p>
  <article class= "facts fadingIn">
  2005-2006. 2kk. Kampus Data.<br/>
  - Varastomies, pakettiautokuljettaja.
  </article>
  </p>
  <p>
  <article class= "facts fadingIn">
  2000-2005. 3 vuotta. Euromaster.<br/>
  - 1-3 kuukauden työjaksoja rengasmekanikkona.<br/>
  - 3 kuukautta rengasmyyjänä.
  </article>
  </p>
  <p>
  <article class= "facts fadingIn">
  2000. 2kk. Tielaitos.<br/>
  - Viheralueiden hoito, pihatyöt.
  </article>
  </p>
  </div>
  `],
  en: [ /* ENGLISH EXPERTISE */
    `<div class= "english navyBlue blackText">
    <p class= "smallHeader whiteText">
    Expertise:
    </p>
    <p>
    <article class= "facts fadingIn violet">
    <span class= "empresa">Customer Service.</span><br/>
    - 6 years professional experience.<br/><br/>
    </article>
    <article class= "facts fadingIn">
    <span class= "empresa">HTML5 programming.</span><br/>
    - 3 years amateur experience, including: CSS, Javascript, React, Node.js, MongoDB, MySql, Git. etc.<br/><br/>
    </article>
    <article class= "facts fadingIn violet">
    <span class= "empresa">Computers.</span><br/>
    - Over 20 years experience. including. Mac, Linux, Windows, Servers, Office etc.<br/><br/>
    </article>
    </p>
    <p class= "smallHeader whiteText">
    Military service
    </p>
    <article class= "facts fadingIn violet">
    2002. Brigade of Karjala.<br>
    - rank: jääkäri(trooper), reserve<br>
    - rocket launcher shooter. (APILAS anti-tank shot)<br>
    </article>
    </div>`,
    /* ENGLISH EDUCATIONS */
    `<div class= "english blackText navyBlue">
    <p class= "smallHeader whiteText">
    Education:
    </p>
    <p>
    <article class= "facts fadingIn violet">
    2001. <span class= "empresa">Vocational qualification in Business and Administration. </span><br>Jyväskylän Kauppaoppilaitos.<br/><br/>
    </article>
    <article class= "facts fadingIn">
    2004. <span class= "empresa">Vocational qualification in Business information technology. </span><br>Pohjoisen Keski-Suomen Oppimiskeskus.<br/><br/>
    </article>
    <article class= "facts fadingIn violet">
    2018. <span class= "empresa"> Legacy Front End Developer Certification. </span><br>Freecodecamp.org.
    <br>
    </article>
    <p class= "smallHeader whiteText">
    Comissiones of trust:
    </p>
    <article class= "facts fadingIn violet">
    2019-20. <span class= "empresa">Webmaster.</span><br> Halssilan Hieronta.<br/>
    - developer and webmaster:  https://halssilanhieronta.net/<br/><br/>
    </article>
    <article class= "facts fadingIn">
    2018-20. <span class= "empresa">Webmaster.</span><br> Rising Eagle Ry.<br/>
    - developer and webmaster: https://irtep.github.io/kyokushin-jkl/<br/><br/>
    </article>
    <article class= "facts fadingIn violet">
    2006 <span class= "empresa">Adequate of announcements.</span><br/>
    Jyväskylän Jigotain taidojaos.<br/>
    <br/>
    </article>
    <article class= "facts fadingIn">
  	2005-06.<span class= "empresa">Coach of juniors </span>
    <br>Jyväskylän Jigotain taidojaos.
    <br><br>
    </article>
    <article class= "facts fadingIn violet">
  	2009-10 <span class= "empresa">Person in charge.</span><br>
    Jyväskylän Pirates.
    <br/><br/>
    </article>
    </p>
    </div>`,
    /*  WORK EXP IN ENGLISH */
    `<div class= "english blackText navyBlue">
    <p class= "smallHeader whiteText">
    Work Experience:
    </p>
    <p>
    <article class= "facts fadingIn violet">
    <span class= "empresa">Finse Oy.</span><br>
    2018-2020. Current job.<br/>
    - 1 year, Bending machine operator.<br/>
    - 11 months, Metalsawyer.
    </article>
    </p>
    <p>
    <article class= "facts fadingIn">
    <span class= "empresa">Betsson Group.</span><br>
    2015-2018. 3 years, 2 months. <br/>
    - 9 months, Execution Coordinator of marketing team.<br/>
    - 1 year, 1 month Senior Customer Support Agent.<br/>
    - 1 year, 6 months Customer Support Agent.
    </article>
    </p>
    <p>
    <article class= "facts fadingIn violet">
    <span class= "empresa">Group Backpackers S.A.C.</span><br>
    2014-2015. 9 months. <br/>
    - Hostel Recepcionist.
    </article>
    </p>
    <p>
    <article class= "facts fadingIn">
    <span class= "empresa">RCI Europe.</span><br>
    2011-2014. 2 years 9 months. <br/>
    - Holiday Sales Consult.
    - Comissions of trust: new hire coach, web champion, EVR champion, new members champion.
    </article>
    </p>
    <p>
    <article class= "facts fadingIn violet">
    <span class= "empresa">Finse Oy.</span><br>
    2006-2011. 5 years 5 months. <br/>
    - Metalsawyer.
    </article>
    </p>
    <p>
    <article class= "facts fadingIn">
    <span class= "empresa">Kampus Data Oy.</span><br>
    2005-2006. 9 months. <br/>
    - Warehouse operative, Driver of van.
    </article>
    </p>
    <p>
    <article class= "facts fadingIn violet">
    <span class= "empresa">Euromaster Oy</span><br>
    2000-2005. 3 years. .<br/>
    - 1-3 months part time jobs as tire mechanic.<br/>
    - 3 months salesman.
    </article>
    </p>
    </div>`
  ]
};

window.onload = ( ()=> {
  console.log('cvDetails: ',cvDetails);
  left.innerHTML = cvDetails.en[0];
  center.innerHTML = cvDetails.en[1];
  right.innerHTML = cvDetails.en[2];
  headerRight.innerHTML = headerDetails.en[1];
  headerRight2.innerHTML = headerDetails.en[2];
  headerCenter.innerHTML = headerDetails.en[0];
});
