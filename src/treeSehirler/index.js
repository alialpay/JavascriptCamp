const ankaraButton = document.getElementById('ankara');

const mamakButton = document.getElementById('mamak');
const mamakMahalleleri = document.getElementById('mamak-mahalleleri');

const cankayaButton = document.getElementById('cankaya');
const cankayaMahalleleri = document.getElementById('cankaya-mahalleleri')

ankaraButton.addEventListener('click', function() {
  const ankaraIlceleri = document.getElementById('ankara-ilceleri');
if(ankaraIlceleri.style.display == 'block'){
    ankaraIlceleri.style.display = 'none';
}else{
    ankaraIlceleri.style.display = 'block';
};
});

mamakButton.addEventListener('click', function() {
  if(mamakMahalleleri.style.display === 'block'){
    mamakMahalleleri.style.display = 'none';
  }else {
    mamakMahalleleri.style.display = 'block';
  };
});

cankayaButton.addEventListener('click', function() {
    cankayaMahalleleri.style.display = 'block';
})
