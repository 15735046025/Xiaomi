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
//为你推荐部分效果
{
	const prev=document.querySelector(".star_btn11");
	const next=document.querySelector(".star_btn22");
	const inner=document.querySelector(".star_inner2");
	let n=0;
	next.onclick=function(){
		n++;
		prev.classList.remove("disable");
		if(n===3){
			this.classList.add("disable");
		}
		if(n===4){
			n=3;
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
//内容部分
{	
	function desc(parent){
		let prev=parent.querySelector(".neirong_lbtn");
		let next=parent.querySelector(".neirong_rbtn");
		let contents=parent.querySelectorAll(".neirong_foot");
		let inner=parent.querySelector(".neirong_inner");
		let pagers=parent.querySelectorAll(".neirong_xiaodian");

		let n=0;
		next.onclick=function(){
			n++;
			if(n===contents.length){
				n=contents.length-1;
				return;
			}
			inner.style.marginLeft=n*-296+"px";
			pagers[n].classList.add("active");
			pagers[n-1].classList.remove("active");
			obj=pagers[n];
		}
		prev.onclick=function(){
			n--;
			if(n<0){
				n=0;
				return;
			}
			inner.style.marginLeft=n*-296+"px";
			pagers[n].classList.add("active");
			pagers[n+1].classList.remove("active");
			obj=pagers[n];
		}
		let obj=pagers[0];
		pagers.forEach(function(ele,index){
			ele.onclick=function(){
				obj.classList.remove("active");
				ele.classList.add("active");
				obj=ele;
				inner.style.marginLeft=index*-296+"px";
				n=index;
			}

		})
	}
	const desclist=document.querySelectorAll(".neirong_item");
	desclist.forEach(function(ele){
		desc(ele);
	})
}
//banner部分效果
{
	let labels=document.querySelectorAll(".label");   
	let menus=document.querySelectorAll(".menu");  
	let obj=menus[0]; 
	labels.forEach(function(ele,index){
		ele.onmouseenter=function(){
			obj.style.display="none";
			menus[index].style.display="block";
			obj=menus[index];
		}
		ele.onmouseleave=function(){
			menus[index].style.display="none";
		}
	})
}
//导航部分效果
{
	let box=document.querySelector(".daohang_word");
	let top=document.querySelector(".daohang_wenzi");
	let bottom=document.querySelector(".daohang_bottom");
	let lists=document.querySelectorAll(".daohang_list");
	const titles=document.querySelectorAll(".daohang_wenzi span");
	top.onmouseenter=function(){
		bottom.style.height="230px";
		bottom.style.display="block";
	}
	box.onmouseleave=function(){
		bottom.style.height="0";
		bottom.style.display="none";
	}
	let obj=lists[0];
	titles.forEach(function(ele,index){
		ele.onmouseenter=function(){
			obj.style.display="none";
			lists[index].style.display="block";
			obj=lists[index];
		}
	})

	


}