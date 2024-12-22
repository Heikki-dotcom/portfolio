// menu.js

$(document).ready(function () {
	$(document).on('#btnMenu','click',function (e) {
		e.preventDefault();
		const offcanvasElementList = document.querySelectorAll('.offcanvas')
		const offcanvasList = [...offcanvasElementList].map(offcanvasEl => new bootstrap.Offcanvas(offcanvasEl))
	});
});