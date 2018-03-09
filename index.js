//banner 效果
{

	let imgs=document.querySelectorAll(".wbanner_img li");
	let pagers=document.querySelectorAll(".pagerbox li");
	let banner=document.querySelector("#wbanner");
	let next=document.querySelector(".next");
	let prev=document.querySelector(".prev");
	pagers.forEach(function(ele,index){
		ele.onclick=function(){
			for(var i=0;i<imgs.length;i++){
				imgs[i].classList.remove("active");
				pagers[i].classList.remove("active");
			}
			//this ele pagers[index]
			this.classList.add("active");
			imgs[index].classList.add("active");
			n=index;
		}
		
	});
	var n=0;
	let t=setInterval(move,3000);
	function move(){
		n++;
		//n=n%5;
		if(n===imgs.length){
			n=0;
		}
		if(n<0){
			n=imgs.length-1;
		}
		for(var i=0;i<imgs.length;i++){
			imgs[i].classList.remove("active");
			pagers[i].classList.remove("active");
		}
		imgs[n].classList.add("active");
		pagers[n].classList.add("active");
	}

	banner.onmouseenter=function(){
		clearInterval(t);
	}
	banner.onmouseleave=function(){
		t=setInterval(move,3000);
	}
	let flag=true;
	next.onclick=function(){
		if(flag){
			flag=false;
			move();
		}
	}
	prev.onclick=function(){
		if(flag){
			flag=false;
			n-=2;
			move();
		}
	}
	imgs.forEach(function(ele,index){
		ele.addEventListener("transitionend", function(){
			flag=true;
		})
				
	})

}
//闪购部分效果
{
	const prev=document.querySelector(".star_btn1");
	const next=document.querySelector(".star_btn2");
	const inner=document.querySelector(".star_inner");
	let n=0;
	next.onclick=function(){
		n++;
		prev.classList.remove("disable");
		if(n===2){
			this.classList.add("disable");
		}
		if(n===3){
			n=2;
			return;
		}
		inner.style.marginLeft=-1226*n+"px";
	}
	prev.onclick=function(){
		n--;
		next.classList.remove("disable");
		if(n===0){
			this.classList.add("disable");
		}
		if(n===-1){
			n=0;
			return;
		}
		inner.style.marginLeft=-1226*n+"px";
	}
}
//内容区域
{	
	function content(parent){
		const types=parent.querySelectorAll(".type");
		const goods=parent.querySelectorAll(".zhineng_right");
		types.forEach(function(ele,index){
			ele.onmouseenter=function(){
				for(var i=0;i<types.length;i++){
					types[i].classList.remove("dapei_xuanzhong");
					goods[i].classList.remove("active");
				}
				this.classList.add("dapei_xuanzhong");
				goods[index].classList.add("active");
			}
		})
	}
	const contentlist=document.querySelectorAll(".dapei");
	contentlist.forEach(function(ele){
		content(ele);
	})
	
}
