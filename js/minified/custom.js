function scrollFunction(){document.body.scrollTop>600||document.documentElement.scrollTop>600?document.getElementById("myBtn").style.display="block":document.getElementById("myBtn").style.display="none"}function topFunction(){document.body.scrollTop=0,document.documentElement.scrollTop=0}jQuery("#responsive_headline").fitText(),jQuery(".intro-text").fitText(),jQuery("#logo-title").fitText(1.2,{minFontSize:"10px",maxFontSize:"64px"}),jQuery("#logo").fitText(1.2,{minFontSize:"20px",maxFontSize:"64px"}),$("#story-mode-button").on("click",function(){document.getElementById("story").style.display="none",document.getElementById("quotes").style.display="none",document.getElementById("story-mode").style.backgroundColor="black"}),$("#story-button").on("click",function(){document.getElementById("quotes").style.display="none",document.getElementById("story-mode").style.display="none"}),$("#quotes-button").on("click",function(){document.getElementById("story").style.display="none",document.getElementById("story-mode").style.display="none"}),window.onscroll=function(){scrollFunction()},$(document).ready(function(){$("#preloader-index").introLoader({animation:{name:"lettersLoader",options:{exitFx:"slideUp",ease:"linear",style:"custom",delayBefore:0,exitTime:300,loaderText:"Website is Ready!",lettersDelayTime:0}},spinJs:{lines:13,length:20,width:10,radius:30,corners:1,color:"#fff"}})});