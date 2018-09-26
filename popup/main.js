// Déclaration de la fonction xxx popup
function xxxPopup()
  {
  if (confirm("Hey, le site xxxvidsxxx est trop bien. Viens dessus c'est cool !!!"))
    {
    window.location = "https://www.youtube.com/watch?v=Gs069dndIYk";
    }
  else
    {
    alert('Tant pis pour toi !');
    }
  }

// Déclenchement de la fonction xxx popup au bout de 10 sec
//window.onload =
setTimeout(xxxPopup, 10000)


//Sélectionner l'intégralité de la page
const page = document.getElementsByTagName("body");




//fonction psychédélique : changer la class de body
function psyche()
  {
    const body =document.getElementById('bodyId');

    if (body.className === 'bodyStandard'){
      body.className = 'bodyFancy';
    }
    else {
      body.className = 'bodyStandard';
    }
  }


// test psyche en 3 sec
//window.onload = setTimeout(psyche, 3000)

// déclenchement de la fonction psyche quand on appui sur le bouton
document.getElementById('fancyButton').onclick = psyche;
