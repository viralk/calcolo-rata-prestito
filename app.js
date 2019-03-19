let calcola = document.getElementById('calcola');

calcola.addEventListener('click', function() {

  const CAPITALE = parseInt(document.getElementById('capitale').value);
  const NUM_RATE = parseInt(document.getElementById('numero-rate').value);
  const TAN = parseFloat(document.getElementById('tan').value);

  calcoloRata(CAPITALE, NUM_RATE, TAN);

})



function calcoloRata(capitale, numRate, tan) {

  // Calcolo il tasso da utilizzare nel conteggio a partire dal TAN fisso
  let tasso = (tan / 100) / 12;
  console.log(tasso);

  // Calcolo l'importo della rata (fisso a 2 decimali)
  let rata = capitale * (tasso / (1 - Math.pow(1 + tasso, - numRate)));
  console.log(rata.toFixed(2));

  // Calcolo il capitale totale (capitale + interessi) da restituire
  let totale = rata * numRate;
  console.log(totale.toFixed(2));

}