document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita el envío del formulario
  
    // Obtener los valores de los campos de entrada
    let monto = parseFloat(document.getElementById('monto').value);
    let tasa = parseFloat(document.getElementById('tasa').value);
    let plazo = parseInt(document.getElementById('plazo').value);
  
    let totalIntereses = 0;
    let totalPagado = 0;
  
    // Calcular los intereses y total pagado por mes
    for (let i = 1; i <= plazo; i++) {
      let intereses = monto * (tasa / 100);
      let pagoTotal = monto + intereses;
  
      totalIntereses += intereses;
      totalPagado += pagoTotal;
  
      console.log("Mes " + i + ":");
      console.log("Intereses: $" + intereses.toFixed(2));
      console.log("Total Pagado: $" + pagoTotal.toFixed(2));
  
      monto = pagoTotal;
    }
  
    console.log("Total de Intereses Pagados: $" + totalIntereses.toFixed(2));
    console.log("Total Pagado al Final del Plazo: $" + totalPagado.toFixed(2));
  });