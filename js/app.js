var animal = document.getElementsByClassName('animal');
var select = document.getElementById('select');
select.onchange = function() {

  if(select.value =='original'){
    for (var i = 0; i < animal.length; i++) {
      animal[i].classList.add('original');
      animal[i].classList.remove('white-black');
      animal[i].classList.remove('negative-colors');
      animal[i].classList.remove('sepia');
    }
  }  else if (select.value =='sepia') {
      for (var i = 0; i < animal.length; i++) {
        animal[i].classList.add('sepia');
        animal[i].classList.remove('original');
        animal[i].classList.remove('white-black');
        animal[i].classList.remove('negative-colors');
    }
  } else if (select.value == 'white-black') {
    for (var i = 0; i < animal.length; i++) {
      animal[i].classList.add('white-black');
      animal[i].classList.remove('original');
      animal[i].classList.remove('sepia');
      animal[i].classList.remove('negative-colors');
  }
} else if (select.value == 'negative-colors') {
  for (var i = 0; i < animal.length; i++) {
    animal[i].classList.add('negative-colors');
    animal[i].classList.remove('original');
    animal[i].classList.remove('white-black');
    animal[i].classList.remove('sepia');
}
}
}
