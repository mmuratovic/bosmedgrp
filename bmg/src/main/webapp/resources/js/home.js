$(document).ready(function() {
	$('#liveSign').hide();
	$(".nav a").on("click", function(){
		   $(".nav").find(".active").removeClass("active");
		   $(this).parent().addClass("active");
	});
	
	var $beharPlayer = $("#radioBeharPlayer")[0];
	$('#playButton').on("click", function() {
		  var $icon = $(this).find('i');
		  if ($icon.hasClass('fa-play-circle-o')) {
		    $icon.removeClass('fa-play-circle-o').addClass('fa-stop-circle-o');
		    $beharPlayer.load();
		    $beharPlayer.play();
		  } else {
		    $icon.removeClass('fa-stop-circle-o').addClass('fa-play-circle-o');
		    $beharPlayer.pause(); 
			$beharPlayer.currentTime = $.now();
		  }
	});
	
	/* calculation for radio Behar if it goes LIVE or not */
	var d_names = new Array("Sunday", "Monday", "Tuesday",
			"Wednesday", "Thursday", "Friday", "Saturday");
	var m_names = new Array("January", "February", "March", 
			"April", "May", "June", "July", "August", "September", 
			"October", "November", "December");
	var short_hours_months = new Array("January", "November", "December");
	var num_hours = 3;
	var isLive = false;
	var curr_min;
	function checkLiveStatus(){
		var d = new Date();
		utc = d.getTime() + (d.getTimezoneOffset() * 60000);
		nd = new Date(utc + (3600000*(-6))); /* STL -6 */
		var curr_day = nd.getDay();
		var curr_month = nd.getMonth();
		var curr_hour = nd.getHours();
		curr_min = nd.getMinutes();
		
		var start = 15;
		for(var month = 0; month < 3; month++){
			if(m_names[curr_month] === short_hours_months[month]) 
				num_hours = 2;
		}
		if(d_names[curr_day] === "Sunday"){
			for(var hours = 0; hours < num_hours; hours++){
				if(curr_hour === (start+hours)){
					isLive = true;
					break;
				}
			}
		}
	};
	
	function isRadioBeharLive(){ 
		isLive = false;
		checkLiveStatus();
		setLiveStatus();
	};	
		
	function setLiveStatus(){
		if(isLive){
			$('#liveSign').show();
		}else{
			if($("#liveSign").length){
				$('#liveSign').hide();
			}
		};
	};
	
	isRadioBeharLive();
	setInterval (isRadioBeharLive, 60000 );
});


