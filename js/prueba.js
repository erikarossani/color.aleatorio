window.addEventListener("load", function() {
	var boton = document.getElementById("calcular");
	boton.addEventListener("click", function() {

        var resultado = setInterval(color, 2000);
  
});
	function color (){
		document.body.style.backgroundColor = "#" + Math.floor(Math.random()*16777215).toString(16);
	}

});
     
 



