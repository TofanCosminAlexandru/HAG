var displayedImage = document.querySelector('.displayed-img'); // imaginea principala
var secondaryImages = document.querySelector('.secondary-images'); // bara cu imaginile secundare

secondaryImages.onclick = function(e) {
	if(e.target && e.target.nodeName === 'IMG') { // daca element din div este apasat si acel element este img
		displayedImage.setAttribute('src', e.target.getAttribute('src'));
	}
};
