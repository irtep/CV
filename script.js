console.log('script activated');
const details = document.getElementById('details');
const left = document.getElementById('left');
const center = document.getElementById('center');
const right = document.getElementById('right');
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
  2019-> Webmaster. Halssilan Hieronta.<br/>
  - developer ja webmaster:  https://halssilanhieronta.net<br/><br/>
  2018-> Webmaster. Rising Eagle Ry.<br/>
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
  2019 -> Tämän hetkinen työni. <br/>Finse Oy.<br/>
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
  `]
};

window.onload = ( ()=> {
  console.log('cvDetails: ',cvDetails);
  left.innerHTML = cvDetails.fin[0];
  center.innerHTML = cvDetails.fin[1];
  right.innerHTML = cvDetails.fin[2];
});
