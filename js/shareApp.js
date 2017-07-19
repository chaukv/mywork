// share app

var shareApp = new Vue({
		el:'#share',
		data:{
			enter:'123'
		},
		methods:{
			click1:function(){
				this.enter = '数组的相关操作<br>arr.length	//可读可写,可用来改变数组长度arr[i]		//数组的下标可读可写,字符串只可读<br>arr.push("abc")	//往数组后面添加abc,添加入多个,用逗号隔开,返回修改后数组的长度<br>arr.unshift("abc")	//往数组前面添加abc,可添加多个,用逗号隔开,返回修改后数组的长度<br>arr.pop();	//删除数组最后一个内容,返回的是删除的内容<br>arr.shift()	//删除数组第一个内容,返回的是删除的内容<br>arr.splice(x,y)	//从第x位开始删除y个内容<br>arr.splice(x,y,"abc")	//从第x位开始删除y个内容,并在x位置添加abc<br>arr.sort(function(x,y){return false;})	//根据第一个字符大小从小到大排序,默认为flase,可简写arr.sort();<br>arr.sort(function(x,y){return true;})	//根据第一个字符大小从大到小排序<br>arr.sort(function(x,y){return x-y;})	//从小到大排序<br>arr.sort(function(x,y){return y-x;})	//从大到小排序<br>arr.join(",")	//把一个数组以逗号为间隔拼接成字符串<br><br><hr><br>var arr1=[1,2,3]<br>arr2=[4,5];<br>arr1.concat(arr2)	//拼接数组1和数组2为一个新数组<br>filter 	//过滤,接受匿名函数加return的形式,该函数接收一个形参,代表每一个数据,会先返回一个布尔值<br>最后返回新数组,不改变原数组<br>Array.isArray()		//判断是不是数组'
			},
			click2:function(){
				this.enter = '都有 时间  函数 变化曲线 三种参数  选填<br>.show()			//显示,都是选填参数,函数在动画完成后执行<br>.hide()			//隐藏,都是选填参数,函数在动画完成后执行<br>.fadeIn()		//淡入,默认300毫秒<br>.fadeOut()		//淡出,默认300毫秒<br>slideDown()		//下拉显示<br>slideUp()		//上拉隐藏<br><br><hr><br><br>animate(json,时间,回调函数)	//json中是改变的属性和值,回调函数在动画完成后执行<br>.stop(boolean,boolean)		//停止动画,默认都为false,运动一半停住,都为true则瞬间到达终点<br>.delay(时间)			//延迟时间后执行<br>jQuery.fx.interval = n		//设置动画帧数n<br>'
			},
			click3:function(){
				this.enter = 'v-bind<br>作用:v-bind绑定页面中的元素属性<br>语法: v-bind:元素的属性名 = "data中的键名"<br>v-show<br>作用:通过判断,是否显示该内容.如果值为true,则显示,否则隐藏.<br>语法: v-show = "判断表达式"<br>v-if<br>作用:判断是否加载固定的内容,如果为真,则加载,为假则不加载.<br>语法: v-if = "判断表达式"<br>v-else<br>作用:必须和v-if搭配使用,如果v-if不成立则加载v-else的内容<br>v-for<br>作用:控制html元素中的循环,实现语句列表的生成.<br>用法:view:v-for = "item in 集合"&nbsp item: 集合的子项$nbsp集合:被遍历的集合,通常为数组.<br>用处:写在谁上,谁循环.<br>v-for = "(item,index) in 集合"//此处会遍历索引值<br>v-on<br>作用:对页面中的事件进行绑定<br>语法: v-on:事件类型 = "事件处理函数名"	, 缩写 @事件类型="事件处理函数名"<br>用法:view:用v-on:事件类型 = "methods中的方法名字",vue:在methods中去监听,也就是书写methods的该方法<br>v-model <br>作用: 接受用户输入的一些数据,直接就可以将这些数据挂在到data属性上,这样就产生了双向数据绑定.<br>语法: v-model = "data中的键名"<br>在data中,最好也要定义这个键名属性,不然会报错'
			},
			click4:function(){
				this.enter = '创建div,ul*4<br>var ulArr = document.querySelectorAll("ul");<br>function createImg(count){<br>for(var i =0; i < count;i++){<br>var img = document.createElement("img");<br>img.src = "img/"+ i +".jpg";<br>var li = document.createElement("li");<br>li.appendChild(img);<br>var minHeightUl = ulArr[0];<br>for(var j = 0;j < ulArr.length; j++){<br>if(minHeightUl.offsetHeight > ulArr[j].offsetHeight){<br>minHeightUl = ulArr[j];<br>}<br>}<br>minHeightUl.appendChild(li);<br>}<br>}<br>createImg(37);'
			},
			click5:function(){
				this.enter = '字符串相关操作<br>var str ="...";<br>str.length 	//字符串的字符长度,只能读取<br>str[i] 		//通过下标获取对应的那个字符,IE8及以上能用<br>str.charAt(i)	//同上,兼容所有浏览器<br>str.charCodeAt(i)	//返回对应序号字符的ANSI码<br>String.fromCharCode(x);	//返回ANSI码对应的字符<br>str.indexOf("...");	//返回字符串字符第一次出现的位置,若没有返回-1<br>str.indexOf("abc",x);	//返回字符串字符从x位置开始第一次出现的位置,若没有返回-1<br>str.substring(x,y)	//切割并返回字符串从x到y字符,包括x,不包括y,x比y大则自动调整成y到x,参数为负数则自动调整为0<br>str.slice(x,y)		//同上,但y必须大于x,当x,y为负数时,切割则倒着字符串执行<br>str="1 2 3 4 5";<br>str.split("  ")		//以空格为界线把字符串切开成数组,若传入的是空字符串,则全部单个切开<br>str="GouDan";<br>str.toUpperCase();	//全部转换为大写<br>str.toLowerCase();	//全部转换为小写'
			},
			click6:function(){
				this.enter = '常用正则表达式<br><br>/^[1-9]\d{4,10}$/	//QQ 号, 5-11位数字,不能以0开头<br><br>/^1[34578]\d{9}$/	//手机号 11位数字 ,1 34578开头<br><br>/^[1-9a-zA-Z_]\w*@[0-9a-zA-Z]+(\.[a-zA-Z]{2,})+$/	//邮箱<br><br>/^[1-9]\d{16}[\dxX]$/		//身份证<br><br>/^[a-zA-Z_]\w{5,17}$/		//用户名,不能以数字开头,6-18位<br><br>/^[\w\.+\-\/\\!@#$%\^&\*\(\)\[\]\|~?,:\;"\{\}=`<>]{6,18}$/		//密码'
			}
		}
	});