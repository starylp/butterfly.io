var rAF=window.requestAnimationFrame||window.webkitRequestAnimationFrame||function(t){window.setTimeout(t,1e3/60)},frame=0,allFrameCount=0,lastTime=Date.now(),lastFameTime=Date.now(),loop=function(){var t=Date.now(),e=t-lastFameTime,n=Math.round(1e3/e);if(lastFameTime=t,allFrameCount++,frame++,t>1e3+lastTime){if((n=Math.round(1e3*frame/(t-lastTime)))<=6)var a='<span style="color:#bd0000">卡成ppt</span>';else if(n<=10)a='<span style="color:red">电竞级帧率</span>';else if(n<=14)a='<span style="color:yellow">难受</span>';else if(n<24)a='<span style="color:orange">卡</span>';else if(n<=40)a='<span style="color:green">...</span>';else a='<span style="color:#425aef">正常</span>';document.getElementById("fps").innerHTML=`FPS:${n} ${a}`,frame=0,lastTime=t}rAF(loop)};loop();var img=new Image;function Sakura(t,e,n,a,i){this.x=t,this.y=e,this.s=n,this.r=a,this.fn=i}function getRandom(t){var e,n;switch(t){case"x":e=Math.random()*window.innerWidth;break;case"y":e=Math.random()*window.innerHeight;break;case"s":e=Math.random();break;case"r":e=4*Math.random();break;case"fnx":n=1*Math.random()-.5,e=function(t,e){return t+.5*n-1.7};break;case"fny":n=1.5+.7*Math.random(),e=function(t,e){return e+n};break;case"fnr":n=.03*Math.random(),e=function(t){return t+n}}return e}function startSakura(){requestAnimationFrame=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||window.msRequestAnimationFrame||window.oRequestAnimationFrame;var t,e=document.createElement("canvas");staticx=!0,e.height=window.innerHeight,e.width=window.innerWidth,e.setAttribute("style","position: fixed;left: 0;top: 0;pointer-events: none;"),e.setAttribute("id","canvas_sakura"),document.getElementsByTagName("body")[0].appendChild(e),t=e.getContext("2d");for(var n=new SakuraList,a=0;a<50;a++){var i,s,r,o,m,d,h;s=getRandom("x"),r=getRandom("y"),m=getRandom("r"),o=getRandom("s"),d=getRandom("fnx"),h=getRandom("fny"),randomFnR=getRandom("fnr"),(i=new Sakura(s,r,o,m,{x:d,y:h,r:randomFnR})).draw(t),n.push(i)}stop=requestAnimationFrame((function(){t.clearRect(0,0,e.width,e.height),n.update(),n.draw(t),stop=requestAnimationFrame(arguments.callee)}))}function stopp(){if(staticx){var t=document.getElementById("canvas_sakura");t.parentNode.removeChild(t),window.cancelAnimationFrame(stop),staticx=!1}else startSakura()}img.src="https://img.cdn.nesxc.com/upload/wordpress/202202251325420webp",Sakura.prototype.draw=function(t){t.save();this.s;t.translate(this.x,this.y),t.rotate(this.r),t.drawImage(img,0,0,20*this.s,20*this.s),t.restore()},Sakura.prototype.update=function(){this.x=this.fn.x(this.x,this.y),this.y=this.fn.y(this.y,this.y),this.r=this.fn.r(this.r),(this.x>window.innerWidth||this.x<0||this.y>window.innerHeight||this.y<0)&&(this.r=getRandom("fnr"),Math.random()>.4?(this.x=getRandom("x"),this.y=0,this.s=getRandom("s"),this.r=getRandom("r")):(this.x=window.innerWidth,this.y=getRandom("y"),this.s=getRandom("s"),this.r=getRandom("r")))},SakuraList=function(){this.list=[]},SakuraList.prototype.push=function(t){this.list.push(t)},SakuraList.prototype.update=function(){for(var t=0,e=this.list.length;t<e;t++)this.list[t].update()},SakuraList.prototype.draw=function(t){for(var e=0,n=this.list.length;e<n;e++)this.list[e].draw(t)},SakuraList.prototype.get=function(t){return this.list[t]},SakuraList.prototype.size=function(){return this.list.length},window.onresize=function(){document.getElementById("canvas_snow")},img.onload=function(){startSakura()};