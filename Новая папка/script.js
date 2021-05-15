var imgs=1,p1=1,p2=1,p3=1,p4=1,p5=1;
var stavka=3;
function start()	{

	  var boxed = 3; //начинаем считать кейсы
		var righ = 0;   //делаем анимацию увеличивая позицию в право
		var speed = Math.floor(Math.random() * (20 - 25 + 1)) + 20;  // Скорость прокрутки рулетки
		var delbox = 164; //Ширина кейса для удаления его
		var tim = setInterval(animated,12); 
		
		var c=true;
		var imagess = ["<li class='tape'><img src='img/"+imgs+".png' class='tape-img'></li>"]; 
		 
		$("button").css("opacity","0.5");
		$(".mainbutt").removeAttr("onclick");

		function getRandomInt(min, max) {
			min = Math.ceil(min);
			max = Math.floor(max);
			return Math.floor(Math.random() * (max - min)) + min; //Максимум не включается, минимум включается
		  }

		function imag()
		{
			c=!c;
			
			var n=getRandomInt(0,10);
			var v=30;
			v=getRandomInt(0,100);
			if(v==0)
				{n=0;}
				else
				{

					if(c)
				{
					n=getRandomInt(1,10);
					while(n%2==0)
					{n=getRandomInt(1,10);}
				}
				else
				{
					n=getRandomInt(1,10);
					while(n%2!=0)
					{n=getRandomInt(1,10);}
				}
		}
			
			imgs=n;
			ret();
			
			return "<li class='tape'><img src='img/"+imgs+".png' class='tape-img'></li>";
		}
		function ret()
		{
			p5=p4;
			p4=p3;
			p3=p2;
			p2=p1;
			p1=imgs;
		}
	 function animated() {
	    var imgs = Math.floor(Math.random() * (7 - 1 + 1)) + 8; //Случайная картинка
	    var child3 = $(".tape:nth-child(3) img"); //Подсвечиваем товар которыый по середине
	    var firS = $(".tape:first-child");
	    var cons = righ - delbox;	 //считаем на сколько блок зашел за границу
	
	 if (righ >= delbox) { 		//если блок за границей
		 firS.remove();			// удаляем его
	      $("#boxes").append(imag());//И добавляем новый
	      	righ = cons + speed; 
		  $(".tape").css("right",righ + "px");
		 boxed++;
		 if(boxed>20)
		 boxed=0; // Считаем кол-во блоков		
	} else {
		if(speed <= 2) {
			speed -= 0.003;
		} else if (speed <= 6) {
			speed -= 0.007;
		} else {
 	  	    speed -= 0.02;
 	}
 	   righ += speed;
 		$(".tape").css("right",righ + "px");
 	}
 	if (speed <= 0) {
 	  clearInterval(tim);
 	 	$(".tape").animate({right: "95px"},2400);
		$(".addimg img").attr("src"	,"img/20181001_.png");
	  setTimeout(swi,2500);
 	}
		$(".state").html("бокс: "+boxed+"<br>Позиция: "+ righ+"<br>Скорость: "+speed+"<br> Отступ: "+cons); 					
		}
	}
function swi() {
	 	var nnu = $(".tape:nth-child(3) img").attr("alt");
		 $(".mainbutt").attr("onclick","start()");
	 	 $(".blscreen").toggle(400);
	 	 $("button").css("opacity","1");	
	 	console.log(p5);
	 		switch(p5) {
			case 1:
				$(".winblock h4").text("1 QC");
				$(".winblock span").text("1 QC");
			break;
			 case 2:
				$(".winblock h4").text("2 QC");
				$(".winblock span").text("2 QC");
			break;
			 case 3:
				$(".winblock h4").text("3 QC");
				$(".winblock span").text("3 QC");
			break;
			 case 4:
				$(".winblock h4").text("4 QC");
				$(".winblock span").text("4 QC");
			break;
			 case 5:
				$(".winblock h4").text("5 QC");
				$(".winblock span").text("5 QC");
			break;
			 case 6:
				$(".winblock h4").text("6 QC");
				$(".winblock span").text("6 QC");
			break;
			 case 7:
				$(".winblock h4").text("7 QC");
				$(".winblock span").text("7 QC");
			break;
			case 8:
				$(".winblock h4").text("8 QC");
				$(".winblock span").text("8 QC");
			break;
			case 9:
				$(".winblock h4").text("9 QC");
				$(".winblock span").text("9 QC");
			break;
			case 10:
				$(".winblock h4").text("10 QC");
				$(".winblock span").text("10 QC");
			break;
			case 0:
				$(".winblock h4").text("20 QC");
				$(".winblock span").text("20 QC");
			break;
		}
}
//делаем список что выпадает
$(function () {
	console.log("123");
	    $("span").click(function () {
	 		$(".opn").toggle(300);
	});
	$(".close,.winbutt").click(function () {
		$(".blscreen").toggle(400);
	})
 });

 document.onload=function(){	
 }

 b1101.onclick = function(){
	if(stavka>0)
	{
	b1101.style.opacity="50%";
	b1101.disabled = true; 	
	stavka-=1;
	}
	};

	b1102.onclick = function(){
		if(stavka>0)
		{
		b1102.style.opacity="50%";
		b1102.disabled = true; 
		stavka-=1;
		}
		};
		b1103.onclick = function(){
			if(stavka>0)
			{
			b1103.style.opacity="50%";
			b1103.disabled = true; 
			stavka-=1;
			}
			};
			b1104.onclick = function(){
				if(stavka>0)
				{
				b1104.style.opacity="50%";
				b1104.disabled = true; 
				stavka-=1;
				}
				};

				b1105.onclick = function(){
					if(stavka>0)
					{
					b1105.style.opacity="50%";
					b1105.disabled = true; 
					stavka-=1;
					}
					};
					b1106.onclick = function(){
						if(stavka>0)
						{
						b1106.style.opacity="50%";
						b1106.disabled = true; 
						stavka-=1;
						}
						};
						b1107.onclick = function(){
							if(stavka>0)
							{
							b1107.style.opacity="50%";
							b1107.disabled = true; 
							stavka-=1;
							}
							};
							b1108.onclick = function(){
								if(stavka>0)
								{
								b1108.style.opacity="50%";
								b1108.disabled = true; 
								stavka-=1;
								}
								};
								b1109.onclick = function(){
									if(stavka>0)
									{
									b1109.style.opacity="50%";
									b1109.disabled = true; 
									stavka-=1;
									}
									};
									b1110.onclick = function(){
										if(stavka>0)
										{
										b1110.style.opacity="50%";
										b1110.disabled = true; 
										stavka-=1;
										}
										};
										b1100.onclick = function(){
											if(stavka>0)
											{
											b1100.style.opacity="50%";
											b1100.disabled = true; 
											stavka-=1;
											}
											};