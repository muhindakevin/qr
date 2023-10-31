(function ($) {
	"use strict";

	jQuery(document).ready(function () {

		/* ---------- Sidebar ----------- */

		$(document).ready(function () {
			$(".sidebarBtn").click(function () {
				$(".sidebar").toggleClass("active");
				$(".sidebarBtn").toggleClass("toggle");
			});
		});

		/* ---------- Smooth Scroll Js ----------- */

		$("a.smooth-scroll").on("click", function (e) {
			var anchor = $(this);
			$("html, body")
				.stop()
				.animate(
					{
						scrollTop: $(anchor.attr("href")).offset().top - 50,
					},
					1000
				);
			e.preventDefault();
		});

		/* -------- Scroll Up ---------- */
    
		$(window).on("scroll", function () {
			if ($(this).scrollTop() > 250) {
				$(".scrollup").fadeIn();
			} else {
				$(".scrollup").fadeOut();
			}
		});
		$(".scrollup").on("click", function () {
			$("html, body").animate(
				{
					scrollTop: 0,
				},
				800
			);
			return false;
		});

		/* ------------ Wow Js -------- */
		new WOW().init();
	});
})(jQuery);



 function generate() {
		var typeNumber = 4;
		var errorCorrectionLevel = "L";
		var qr = qrcode(typeNumber, errorCorrectionLevel);
		var inputText = document.getElementById("name").value;
		qr.addData(inputText);
		qr.make();
		document.getElementById("placeHolder").innerHTML = qr.createImgTag();
		canvasScreen();
 }
 downloadQrCode = function (el) {
		var canvas = document.getElementById("myCanvas");
		var image = canvas.toDataURL("image/png");
		el.href = image;
 };
 function canvasScreen() {
		var a = document.getElementsByTagName("img")[0];
		a.setAttribute("id", "qrcode");
		var canvas = document.getElementById("myCanvas");
		var ctx = canvas.getContext("2d");
		var img = document.getElementById("qrcode");
		ctx.drawImage(img, 70, 0, 150, 150);
		document.getElementById("dBtn").style.display = "block";
 }