// declaration de la fonction division nous permettant d'afficher le reste de la division
function division(){
//Déclaration des variables qui vont récuperer les valeurs des champs de saisie
  var number1 = document.getElementById('number1').value;
  var number2 = document.getElementById('number2').value;
  if (isNaN(number1) == true || isNaN(number2)){
    alert('erreur: ceci n\'est pas un nombre');
  }else{
    if (number2 != 0) {
      //Déclaration d'une variable contenant le reste de la division du Nombre1 et du Nombre2
      var result = number1 % number2;
      //Affichage du résultat
      //Math.round permet d'arrondir à l'entier le plus proche.
      alert(Math.round(result));
    }else{
      alert('erreur: division par 0 impossible');
    }
  }
}
