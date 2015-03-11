// JavaScript Document

//-----------------------------Hidding divs until I need them--------------------
$("#cliffsImage").hide();
$("#cliffsTitle").hide();
$("#cliffsText").hide();
$("#malinImage").hide();
$("#malinTitle").hide();
$("#malinText").hide();
$("#rainCloudImage").hide();
$("#rainCloudText02").hide();
$("#rainCloudText01").hide();

$(document).ready(function()
{
	
	$(window).scroll(function(){
		var top=1;
		top=$(window).scrollTop();
		$("#welcomeImage").css({'opacity':(1500-top)/1500});
		$("#roadSign").css('right',top*0.05+'%');
		$("#backHills").css('left',top*-0.0007+'%');
		$("#frontHills").css('left',top*-0.002+'%');
		$("#sky").css('left',top*-0.00008+'%');
		
//----------------------------------------------------------------Cliffs of Moher infographic---------------------		
		if (($(window).scrollTop() > 3500) && ($(window).scrollTop() < 4500)) {	
			$("#cliffsTitle").slideDown('slow');
			$("#cliffsTitle").css(
			{
				'position': 'fixed',
				'left': '37.5%',
				'top': '2%'
			});
			$("#cliffsImage").fadeIn(1000);
			$("#cliffsImage").css(
			{
				'position': 'fixed',
				'left': '37.5%',
				'top': '11%'
			});
			$("#cliffsBackground").slideDown('slow');
			$("#cliffsBackground").css(
			{
				'position': 'fixed',
				'background-color': '#0F0E0E',
				'opacity': '0.4',
				'width': '25%',
				'height': '70%',
				'left': '37.5%',
				'top': '3%',
				'border-radius': '15px'
				/*'border': '10px solid white'*/
				/*'border-color': '#FFFFFF'*/
			});
			$("#cliffsText").fadeIn(1000);
			$("#cliffsText").css(
			{
				'position': 'fixed',
				'width': '20%',
				'left': '39.5%',
				'top': '40%',
				'text-align': 'justify',
				'color': 'white',
				'font-size': '22px',
				'font-family': 'Gotham, "Helvetica Neue", Helvetica, Arial, sans-serif'
			});
		}
		if (($(window).scrollTop() < 3500) || ($(window).scrollTop() > 4500)) {
			$("#cliffsImage").fadeOut(1000);
			$("#cliffsTitle").slideUp('fast');
			$("#cliffsBackground").slideUp('slow');
			$("#cliffsText").fadeOut(1000);
		}
		
//---------------------------------------------------------Rain Clouds Infographic---------------------		
		if (($(window).scrollTop() > 6000) && ($(window).scrollTop() < 9000)) {	
			$("#rainCloudText01").slideDown('slow');
			$("#rainCloudText01").css(
			{
				'position': 'fixed',
				'top': '1%',
				'left': '20%',
				'z-index': '2'
			});
		}
		if (($(window).scrollTop() < 6000) || ($(window).scrollTop() > 9000)) {
			$("#rainCloudText01").slideUp('slow');	
		}
		
		if (($(window).scrollTop() > 7000) && ($(window).scrollTop() < 9000)) {	
			$("#rainCloudImage").slideDown('slow');
			$("#rainCloudImage").css(
			{
				'position': 'fixed',
				'top': '8%',
				'left': '50%',
				'width': '8%',
				'z-index': '2'
			});
		}
		if (($(window).scrollTop() < 5500) || ($(window).scrollTop() > 9000)) {
			$("#rainCloudImage").slideUp('slow');	
		}
		
		if (($(window).scrollTop() > 8000) && ($(window).scrollTop() < 9000)) {	
			$("#rainCloudText02").slideDown('slow');
			$("#rainCloudText02").css(
			{
				'position': 'fixed',
				'top': '8%',
				'left': '60%',
				'z-index': '2'
				
			});
			$("#arrows").fadeIn(500).fadeOut(500);
			$("#arrows").css(
			{
				'position': 'fixed',
				'top': '20%',
				'left': '70%',
				'width': '5%',
				'z-index': '2'
			});
		}
		if (($(window).scrollTop() < 8000) || ($(window).scrollTop() > 9000)) {
			$("#rainCloudText02").slideUp('slow');
			$("#arrows").slideUp('fast');
			
		}
		
//-----------------------------------------------------------Malin Head Infographic-----------------------
		if (($(window).scrollTop() > 12000) && ($(window).scrollTop() < 13000)) {	
			$("#malinTitle").slideDown('slow');
			$("#malinTitle").css(
			{
				'position': 'fixed',
				'left': '37.5%',
				'top': '2%'
			});
			$("#malinImage").fadeIn(1000);
			$("#malinImage").css(
			{
				'position': 'fixed',
				'left': '37.5%',
				'top': '11%'
			});
			$("#malinBackground").slideDown('slow');
			$("#malinBackground").css(
			{
				'position': 'fixed',
				'background-color': '#0F0E0E',
				'opacity': '0.4',
				'width': '25%',
				'height': '70%',
				'left': '37.5%',
				'top': '3%',
				'border-radius': '15px'
				/*'border': '10px solid white'*/
				/*'border-color': '#FFFFFF'*/
			});
			$("#malinText").fadeIn(1000);
			$("#malinText").css(
			{
				'position': 'fixed',
				'width': '20%',
				'left': '39.5%',
				'top': '40%',
				'text-align': 'justify',
				'color': 'white',
				'font-size': '22px',
				'font-family': 'Gotham, "Helvetica Neue", Helvetica, Arial, sans-serif'
			});
		}
		if (($(window).scrollTop() < 12000) || ($(window).scrollTop() > 13000)) {
			$("#malinImage").fadeOut(1000);
			$("#malinTitle").slideUp('fast');
			$("#malinBackground").slideUp('slow');
			$("#malinText").fadeOut(1000);
		}
		
   	});
});