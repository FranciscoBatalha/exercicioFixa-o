function  dividir( )
    {
        var dist = document.getElementById("deslocamento").value
        var speed = document.getElementById("tempo").value;

        document.getElementById("resultado1").value = (dist / speed).toFixed(1);
    }

    function ApagaNumeros () {
        document.getElementById("deslocamento").value = ""
        document.getElementById("tempo").value = ""
        document.getElementById("resultado1").value= ""
      }
      