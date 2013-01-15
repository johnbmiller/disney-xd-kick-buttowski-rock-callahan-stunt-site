function rockposters(what){
	if(what=="open"){
// pause video
		fromJavascriptClickedPromo('ClickPromoPauseDVAS');
// open downloads
		document.getElementById('rock-downloads-container').style.display="block";
		document.getElementById('rock-shadow').style.display="block";
	}else{
// play video
		fromJavascriptClosedOverlay('CloseOverlayPlayDVAS');
// close downloads
		document.getElementById('rock-downloads-container').style.display="none";
		document.getElementById('rock-shadow').style.display="none";
	}
}

var jsReady = false;
var promoClicked = false;
function isReady(){return jsReady;}
function wasPromoClicked(){return promoClicked;}
function pageInit(){
	jsReady = true;
	// alert("JavaScript is ready");
	
}

function fromJavascriptClickedPromo(value){
	promoClicked = true;
	thisMovie('rock_container').fromJavascriptClickedPromo(value);
//	document.getElementById('rock_container').fromJavascriptClickedPromo=value;
}
function fromJavascriptClosedOverlay(value){
	thisMovie("rock_container").fromJavascriptClosedOverlay(value);
	promoClicked = false;
}
function thisMovie(movieName){
	if (navigator.appName.indexOf("Microsoft") != -1){
		return window[movieName];
	}else{
		return document[movieName];
	}
}

function crosswalk(){
	var timer=timer;
	var handflash=document.getElementById("dontwalk");
	handflash.style.display=(handflash.style.display=='block')?'none':'block';
	timer--;
	if(timer<=0){
		return;
	}else{
		setTimeout("crosswalk();",600);
	}
}

// bottom promos
promo1="http://disney.go.com/xd/kickbuttowski/awesome/";
promo2="http://disney.go.com/xd/kickbuttowski/games/bootcamp/";

if(location.href.match(/cds/i)){
	promo1="http://disney.go.com/xd/kickbuttowski/cds/awesome/";
	promo2="http://disney.go.com/xd/kickbuttowski/cds/games/bootcamp/";
}

promos='<div id="promocontainer">\
	<div class="promos" id="promo1"><a href="'+promo1+'"><img src="http://adisney.go.com/xd/media/kickbuttowski/photos/pro_162x156_kbu_rankofawesome.jpg" /></a></div>\
	<div class="promos" id="promo2"><a href="'+promo2+'"><img src="http://adisney.go.com/xd/media/kickbuttowski/photos/pro_kbu_bootcamp_144x120.jpg" /></a></div>\
</div>';