$("#土地開發").mouseover(function(){
	$(".土地開發介紹").css({"opacity": "1", "transition": "1.2s"});
	$(".土地開發圖片").css({"opacity": "1", "transition": "1.2s"});
	$(".建築營造介紹").css({"opacity": "0", "transition": "1.2s"});
	$(".建築營造圖片").css({"opacity": "0", "transition": "1.2s"});
});

$("#建築營造").mouseover(function(){
	$(".土地開發介紹").css({"opacity": "0", "transition": "1.2s"});
	$(".土地開發圖片").css({"opacity": "0", "transition": "1.2s"});
	$(".建築營造介紹").css({"opacity": "1", "transition": "1.2s"});
	$(".建築營造圖片").css({"opacity": "1", "transition": "1.2s"});
});


