function laskeBrutto(paivat, tunnit, palkka) {
  const tulos = paivat * tunnit * palkka;
  return tulos;
}

function laskeNetto(brutto, vakuus, elake, ennakonpidatys) {
  const vakuusmaksu = (brutto / 100) * vakuus;
  const elakemaksu = (brutto / 100) * elake;
  const ennakonpidatysmaksu = (brutto / 100) * ennakonpidatys;

  const netto = brutto - vakuusmaksu - elakemaksu - ennakonpidatysmaksu;

  return netto;
}

function jaaKateen(
  tulot,
  asuminen,
  ruoka,
  harrastukset,
  juoksevat,
  viihde,
  muut
) {
  const kateen =
    tulot - asuminen - ruoka - harrastukset - juoksevat - viihde - muut;

  return kateen;
}

function openTab(evt, cityName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}
