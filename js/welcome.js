function getDistance(a,e,s,c){const{sin:r,cos:t,asin:n,PI:o,hypot:i}=Math;let k=(a,e)=>(a*=o/180,{x:t(e*=o/180)*t(a),y:t(e)*r(a),z:r(e)}),b=k(a,e),p=k(s,c),u=2*n(i(b.x-p.x,b.y-p.y,b.z-p.z)/2)*6371;return Math.round(u)}function showWelcome(){if(!document.getElementById("welcome-info"))return;let a,e,s=getDistance(114.895,30.3909,ipLoacation.result.location.lng,ipLoacation.result.location.lat),c=ipLoacation.result.ad_info.nation;switch(ipLoacation.result.ad_info.nation){case"日本":a="よろしく，一起去看樱花吗";break;case"美国":a="Make America Great Again!";break;case"英国":a="想同你一起夜乘伦敦眼";break;case"俄罗斯":a="干了这瓶伏特加！";break;case"法国":a="C'est La Vie";break;case"德国":a="Die Zeit verging im Fluge.";break;case"澳大利亚":a="一起去大堡礁吧！";break;case"加拿大":a="拾起一片枫叶赠予你";break;case"中国":switch(c=ipLoacation.result.ad_info.province+" "+ipLoacation.result.ad_info.city,ipLoacation.result.ad_info.province){case"北京市":c="北京市",a="北——京——欢迎你~~~";break;case"天津市":c="天津市",a="讲段相声吧。";break;case"重庆市":c="重庆市",a="高德地图:已到达重庆，下面交给百度地图导航。";break;case"河北省":a="山势巍巍成壁垒，天下雄关。铁马金戈由此向，无限江山。";break;case"山西省":a="展开坐具长三尺，已占山河五百余。";break;case"内蒙古自治区":a="天苍苍，野茫茫，风吹草低见牛羊。";break;case"辽宁省":a="我想吃烤鸡架！";break;case"吉林省":a="状元阁就是东北烧烤之王。";break;case"黑龙江省":a="很喜欢哈尔滨大剧院。";break;case"上海市":c="上海市",a="众所周知，中国只有两个城市。";break;case"江苏省":switch(ipLoacation.result.ad_info.city){case"南京市":a="欢迎来自安徽省南京市的小伙伴。";break;case"苏州市":a="上有天堂，下有苏杭。";break;case"泰州市":a="这里也是我的故乡。";break;default:a="散装是必须要散装的。"}break;case"浙江省":a="东风渐绿西湖柳，雁已还人未南归。";break;case"安徽省":a="蚌埠住了，芜湖起飞。";break;case"福建省":a="井邑白云间，岩城远带山。";break;case"江西省":a="落霞与孤鹜齐飞，秋水共长天一色。";break;case"山东省":a="遥望齐州九点烟，一泓海水杯中泻。";break;case"湖北省":a="来碗热干面！";break;case"湖南省":a="74751，长沙斯塔克。";break;case"广东省":a="老板来两斤福建人。";break;case"广西壮族自治区":a="桂林山水甲天下。";break;case"海南省":a="朝观日出逐白浪，夕看云起收霞光。";break;case"四川省":a="康康川妹子。";break;case"贵州省":a="茅台，学生，再塞200。";break;case"云南省":a="玉龙飞舞云缠绕，万仞冰川直耸天。";break;case"西藏自治区":a="躺在茫茫草原上，仰望蓝天。";break;case"陕西省":a="来份臊子面加馍。";break;case"甘肃省":a="羌笛何须怨杨柳，春风不度玉门关。";break;case"青海省":a="牛肉干和老酸奶都好好吃。";break;case"宁夏回族自治区":a="大漠孤烟直，长河落日圆。";break;case"新疆维吾尔自治区":a="驼铃古道丝绸路，胡马犹闻唐汉风。";break;case"台湾省":a="我在这头，大陆在那头。";break;case"香港特别行政区":c="香港特别行政区",a="永定贼有残留地鬼嚎，迎击光非岁玉。";break;case"澳门特别行政区":c="澳门特别行政区",a="性感荷官，在线发牌。";break;default:a="社会主义大法好。"}break;default:a="带我去你的国家逛逛吧。"}let r=new Date;e=r.getHours()>=5&&r.getHours()<11?"<span>上午好</span>，一日之计在于晨":r.getHours()>=1&&r.getHours()<13?"<span>中午好</span>，该摸鱼吃午饭了":r.getHours()>=13&&r.getHours()<15?"<span>下午好</span>，懒懒地睡个午觉吧！":r.getHours()>=15&&r.getHours()<16?"<span>三点几啦</span>，饮茶先啦！":r.getHours()>=16&&r.getHours()<19?"<span>夕阳无限好！</span>":r.getHours()>=19&&r.getHours()<24?"<span>晚上好</span>，夜生活嗨起来！":"夜深了，早点休息，少熬夜",document.getElementById("welcome-info").innerHTML=`欢迎来自<span>${c}</span>的小伙伴，${e}<br>你距离ichika约有<span>${s}</span>公里，${a}`}$.ajax({type:"get",url:"https://apis.map.qq.com/ws/location/v1/ip",data:{key:"ZOPBZ-YDBKQ-WCH5N-B5JHX-LWSO3-RTFFE",output:"jsonp"},dataType:"jsonp",success:function(a){ipLoacation=a,showWelcome()}});