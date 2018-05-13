$(function() {
	var c = new Coder("style-text");
	c.load("<p><div class='bef_comment writecode'>/**</div>");       //声明一个div元素
	c.load("<div class='bef_comment writecode'>&nbsp;*</div>");      //空格
	c.load("<div class='bef_comment writecode'>&nbsp;*hi,my name is Da Huo, and I am a software engineer graduated from University of Melbourne with master degree</div>");
	c.load("<div class='bef_comment writecode'>&nbsp;*My main work is to code to offer solutions to my clients and use photoshop to process pictures</div>",2000);
	c.load("<div class='bef_comment writecode'>&nbsp;*Let me show you my skills</div>");
	c.load("<div class='bef_comment writecode'>&nbsp;*/</div></p>"); //第一段结束
	
	
	c.load("<p><div class='bef_comment writecode'>/**</div>");
	c.load("<div class='bef_comment writecode'>&nbsp;*Let's begin</div>");
	c.load("<div class='bef_comment writecode'>&nbsp;*/</div></p>");  //第二段结束
	
	
	c.load("<p><div class='code writecode'><span class='bef_selector'>*</span> {</div>");
	c.load("<div class='code writecode'>&nbsp;<span class='bef_key'>-webkit-transition</span>: <span class='bef_value'> all 1s</span>;</div>");
	c.load("<div class='code writecode'>}</div></p>");                //第三段结束
	
	
	c.load("<p><div class='bef_comment writecode'>/**</div>");
	c.load("<div class='bef_comment writecode'>&nbsp;*Don't be anxious, I will show you my work</div>");
	c.load("<div class='bef_comment writecode'>&nbsp;*You must be bored with the blank and black texts</div>");
	c.load("<div class='bef_comment writecode'>&nbsp;*Now let me change these</div>");
	c.load("<div class='bef_comment writecode'>&nbsp;*/</div></p>");  //第四段结束
	
	
	c.load("<p><div class='code writecode'><span class='bef_selector'>html</span> {</div>");
	c.load("<div class='code writecode'>&nbsp;<span class='bef_key'>background</span>: <span class='bef_value'>rgb(194, 102, 31)</span>;</div>");
	c.setClass("html", [{
		"name": "background",
		"val": "rgb(194, 102, 31)"
	}]);                                                              //设置html这个tag的全局CSS外形
	c.load("<div class='code writecode'>}</div></p>");                //第五段结束，设置了页面背景底色
	
	
	c.load("<p><div class='bef_comment writecode'>/**</div>");
	c.load("<div class='bef_comment writecode'>&nbsp;*Let me change the color of texts</div>");
	c.load("<div class='bef_comment writecode'>&nbsp;*/</div></p>");  //第六段结束
	
	
	c.load("<p><div class='code writecode'><span class='bef_selector'>pre,a</span> {</div>");
	c.load("<div class='code writecode'>&nbsp;<span class='bef_key'>color</span>: <span class='bef_value'>white</span>;</div>");  //将color:white组合在一起
	c.setClass("pre", [{
		"name": "color",
		"val": "white"
	}]);                                                              //设置pre这个tag底下的CSS外观
	c.load("<div class='code writecode'>}</div></p>");                //第七段结束，设置字体颜色为白色
		
	
	c.load("<p><div class='bef_comment writecode'>/**</div>");
	c.load("<div class='bef_comment writecode'>&nbsp;*Now looks better</div>");
	c.load("<div class='bef_comment writecode'>&nbsp;*It is not suitable to make coding in this page</div>");
	c.load("<div class='bef_comment writecode'>&nbsp;*Let me create a new area</div>");
	c.load("<div class='bef_comment writecode'>&nbsp;*/</div></p>");  //第八段结束
	
	
	c.load("<p><div class='code writecode'><span class='bef_selector'>pre</span><span class='bef_key'>:not(:empty)</span> {</div>");
	c.load("<div class='code writecode'>&nbsp;<span class='bef_key'>overflow</span>: <span class='bef_value'>hidden</span>;</div>");
	c.setClass("#style-text", [{
		"name": "overflow",
		"val": "hidden"
	}]);
	c.load("<div class='code writecode'>&nbsp;<span class='bef_key'>background</span>: <span class='bef_value'>rgb(117, 57, 41)</span>;</div>");
	c.setClass("#style-text", [{
		"name": "background",
		"val": "rgb(117, 57, 41)"
	}]);
	c.load("<div class='code writecode'>&nbsp;<span class='bef_key'>border</span>: <span class='bef_value'>1px solid #ccc</span>;</div>");
	c.setClass("#style-text", [{
		"name": "border",
		"val": "1px solid #ccc"
	}]);
	c.load("<div class='code writecode'>&nbsp;<span class='bef_key'>max-height</span>: <span class='bef_value'>44.6%</span>;</div>");
	c.setClass("#style-text", [{
		"name": "max-height",
		"val": "50%"
	}]);
	c.load("<div class='code writecode'>&nbsp;<span class='bef_key'>width</span>: <span class='bef_value'>49%</span>;</div>");
	c.setClass("#style-text", [{
		"name": "width",
		"val": "50%"
	}]);
//	$('#pre:not(:empty)').addClass("toarea");
	c.load("<div class='code writecode'>&nbsp;<span class='bef_key'>font-size</span>: <span class='bef_value'>14<span class='bef_px'>px</span></span>;</div>");
	c.setClass("#style-text", [{
		"name": "font-size",
		"val": "14px"
	}]);
	c.load("<div class='code writecode'>&nbsp;<span class='bef_key'>font-family</span>: <span class='bef_value'>monospace</span>;</div>");
	c.setClass("#style-text", [{
		"name": "font-family",
		"val": "monospace"
	}]);
	c.load("<div class='code writecode'>&nbsp;<span class='bef_key'>padding</span>: <span class='bef_value'>10<span class='bef_px'>px</span> 10<span class='bef_px'>px</span> 20<span class='bef_px'>px</span></span>;</div>");
	c.setClass("#style-text", [{
		"name": "padding",
		"val": "10px 10px 20px"
	}]);
	c.load("<div class='code writecode'>&nbsp;<span class='bef_key'>box-shadow</span>: <span class='bef_value'>-4<span class='bef_px'>px</span> 4<span class='bef_px'>px</span> 2<span class='bef_px'>px</span> 0 rgba(0,0,0,0.3)</span>;</div>");
	c.setClass("#style-text", [{
		"name": "box-shadow",
		"val": "-4px 4px 2px 0 rgba(0,0,0,0.3)"
	}]);
	c.load("<div class='code writecode'>&nbsp;<span class='bef_key'>white-space</span>: <span class='bef_value'>pre-wrap</span>;</div>");
	c.setClass("#style-text", [{
		"name": "white-space",
		"val": "pre-wrap"
	}]);
	c.load("<div class='code writecode'>&nbsp;<span class='bef_key'>outline</span>: <span class='bef_value'>0</span>;</div>");
	c.setClass("#style-text", [{
		"name": "outline",
		"val": "0"
	}]);                                                  //修改style-text的各种CSS属性
	c.load("<div class='code writecode'>}</div></p>");    //第九段结束，用于设计背景框
	
	
	c.load("<p><div class='bef_comment writecode'>/**</div>");
	c.load("<div class='bef_comment writecode'>&nbsp;*OK，now let us change the position</div>");
	c.load("<div class='bef_comment writecode'>&nbsp;*let's make some change</div>");
	c.load("<div class='bef_comment writecode'>&nbsp;*/</div></p>");   //第十段结束
	
	
	c.load("<p><div class='code writecode'><span class='bef_selector'>#style-text</span> {</div>");
  	c.load("<div class='code writecode'>&nbsp;<span class='bef_key'>-webkit-transform</span>: <span class='bef_value'>translateX(95%)</span>;</div>");
  	c.setClass("#style-text", [{
		"name": "-webkit-transform",
		"val": "translateX(95%)"
	}]);
  	c.load("<div class='code writecode'>&nbsp;<span class='bef_key'>position</span>: <span class='bef_value'>absolute</span>;</div>");
  	c.setClass("#style-text", [{
		"name": "position",
		"val": "absolute"
	}]);                                                               //设置ID为style-text的元素的CSS效果
	c.load("<div class='code writecode'>}</div></p>");                 //第十一段结束，用于变换文字框位置
	
	
	c.load("<p><div class='bef_comment writecode'>/**</div>");
	c.load("<div class='bef_comment writecode'>&nbsp;*Now looks good, but all texts are white</div>");
	c.load("<div class='bef_comment writecode'>&nbsp;*Let's make them easier to read</div>");
	c.load("<div class='bef_comment writecode'>&nbsp;*/</div></p>");   //第十二段结束，提示即将变换文字颜色
	
	
	c.load("<p><div class='code writecode'><span class='bef_selector'>.comment</span>&nbsp;{ <span class='bef_key'>color</span>: <span class='bef_value'>#857F6B</span>; <span class='bef_key'>font-style</span>: <span class='bef_value'>italic</span>; }</div>");
	c.addClass(".bef_comment","comment");                             //类名里包含bef_comment就算，后面这些在CSS里，用于设置具体的CSS样式
	c.load("<div class='code writecode'><span class='bef_selector'>.selector</span>&nbsp;{ <span class='bef_key'>color</span>: <span class='bef_value'>#E69F0F</span>; }</div>");
	c.addClass(".bef_selector","selector");
	c.load("<div class='code writecode'><span class='selector'>.selector .key</span>&nbsp;{ <span class='bef_key'>color</span>: <span class='bef_value'>#64D5EA</span>; }</div>");
	c.addClass(".bef_key","key");
	c.load("<div class='code writecode'><span class='selector'>.key</span>&nbsp;{ <span class='key'>color</span>: <span class='bef_value'>#64D5EA</span>; }</div>");
	c.load("<div class='code writecode'><span class='selector'>.value</span>&nbsp;{ <span class='key'>color</span>: <span class='bef_value'>#BE84F2</span>; }</div>");
	c.addClass(".bef_value","value");
	c.load("<div class='code writecode'><span class='selector'>.value.px</span>&nbsp;{ <span class='key'>color</span>: <span class='value'>#F92772</span>; }</div></p>");	                                                                  	
	c.addClass(".value .bef_px","px");                                //第十三段，用于设置字体颜色，因为load的时候就已经append到dom结构底下了，所以setClass也可以设置其下面的其他class
	
	
	c.load("<p><div class='comment writecode'>/**</div>");
	c.load("<div class='comment writecode'>&nbsp;*Now we are almost ready</div>");
	c.load("<div class='comment writecode'>&nbsp;*Let's make 3D rotation</div>");
	c.load("<div class='comment writecode'>&nbsp;*/</div></p>");      //第十四段，要开始3D旋转变换了
	          
			  
	c.load("<p><div class='code writecode'><span class='selector'>#content</span> {</div>");
  	c.load("<div class='code writecode'>&nbsp;<span class='key'>-webkit-perspective</span>: <span class='value'>1000<span class='px'>px</span></span>;</div>");
  	c.setClass("#content", [{
		"name": "-webkit-perspective",
		"val": "1000px"
	}]);
  	c.load("<div class='code writecode'>}</div></p>");                //第十五段
	
	
  	c.load("<p><div class='code writecode'><span class='selector'>#style-text</span> {</div>");
  	c.load("<div class='code writecode'>&nbsp;<span class='key'>-webkit-transform</span>: <span class='value'>translateX(98.5%) rotateY(-10deg)</span>;</div>");
  	c.setClass("#style-text", [{
		"name": "-webkit-transform",
		"val": "translateX(98.5%) rotateY(-10deg)"
	}]);
	c.load("<div class='code writecode'>&nbsp;<span class='key'>-webkit-transform-origin</span>: <span class='value'>right</span>;</div>");
  	c.setClass("#style-text", [{
		"name": "-webkit-transform-origin",
		"val": "right"
	}]);
	c.load("<div class='code writecode'>&nbsp;<span class='key'>max-height</span>: <span class='value'>94.5%</span>;</div>");
  	c.setClass("#style-text", [{
		"name": "max-height",
		"val": "95.0%"
	}]);
  	c.load("<div class='code writecode'>}</div></p>");               //第十六段，用于3D转换整个页面模板
	
	
  	c.load("<p><div class='comment writecode'>/**</div>");
	c.load("<div class='comment writecode'>&nbsp;*Now let's write my resume</div>");
	c.load("<div class='comment writecode'>&nbsp;*You must have waited for a long time</div>");
	c.load("<div class='comment writecode'>&nbsp;*/</div></p>");     //第十七段，即将开始书写简历
	
	
	c.addClass("#work-text","pre_work-text");
	c.load("<p><div class='code writecode'><span class='selector'>pre</span><span class='key'>:not(#style-text)</span> { </div>");
	c.load("<div class='code writecode'>&nbsp;<span class='key'>-webkit-transform</span>: <span class='value'>rotateY(10deg)</span>;</div>");
	c.load("<div class='code writecode'>&nbsp;<span class='key'>-webkit-transform-origin</span>: <span class='value'>left</span>;</div>");
	c.load("<div class='code writecode'>}</div></p>");               //第十八段，提示即将调整简历的页面效果，也要rotate
	
	
	var r = new Coder("work-text");                                  //声明一个新板子
	r.load("<div id='md'></div>");
	var w = new Coder("md");                                         
	w.load("<h1 class='writecode'>resume</h1>");                     //标题1 resume
	w.load("<p><div class='writecode'>Da Huo</div>");
	w.load("<div class='writecode'>Software Engineer(Graduated from University of Melbourne)</div>");
	w.load("<div class='writecode'>front-end+Android+Java developer </div></p>");    //第一段，介绍自己背景
	
	
	w.load("<h1 class='writecode'>contact me</h1>");                 //标题2 联系方式
	w.load("<ul>");
	w.load("<li class='writecode'>mail:robertdahuo@gmail.com</li>");
	w.load("<li class='writecode'>linkedin:<a href='https://www.linkedin.com/in/da-huo-39a9b311a'>https://www.linkedin.com/in/da-huo-39a9b311a</a></li>");
	w.load("<li class='writecode'>github:<a href='https://github.com/DAHUO-Melbourne'>https://github.com/DAHUO-Melbourne</a></li>");   //列表项，连带着reference
	w.load("</ul>");                                                 //联系方式列表
	
	
	w.load("<h1 class='writecode'>technical skills</h1>");           //标题3 专业技能
	w.load("<ul>");
	w.load("<li class='writecode'>skillful in JavaScript, Android and JUnit Test, has 3 months internship in IBM China</li>");
	w.load("<li class='writecode'>use HTML5 to make web pages</li>");
	w.load("<li class='writecode'>use CSS3 to adjust the effect of the web page</li>");
	w.load("<li class='writecode'>use photoshop to process the pictures</li>");
	w.load("<li class='writecode'>operation of MySQL and relevant knowledge</li>");
	w.load("<li class='writecode'>skillful use windows and relevant microsoft office softwares</li>");
	w.load("<li class='writecode'>use git to control the version of the program</li>");
	w.load("</ul>");                                                 
	
	
	w.load("<h1 class='writecode'>projects</h1>");                  //标题4 相关项目
	w.load("<ul>");
	w.load("<li class='writecode'><a href='https://github.com/DAHUO-Melbourne/MobileProj2'>elderfitness</a></li>");
	w.load("<li class='writecode'><a href='https://github.com/DAHUO-Melbourne/AntiTigerPoachingAndroidApp'>AntiTigerPoaching</a></li>");
	w.load("<li class='writecode'><a href='https://github.com/DAHUO-Melbourne/AI_Project_Paceman_V1'>Python-Pacman</a></li>");
	w.load("<li class='writecode'>Game of BattleCity</li>");
	w.load("<li class='writecode'>Game of Snake</li>");
	w.load("</ul>");
	
	
	c.load("<p><div class='comment writecode'>/**</div>");
	c.load("<div class='comment writecode'>&nbsp;*Let's make some dynamic effecs on the resume</div>");
	c.load("<div class='comment writecode'>&nbsp;*/</div></p>");     //回到右边控制板上，预备进行动态操作
	
	
	c.load("<p><div class='code writecode'><span class='selector'>#work-text</span> { </div>");
	c.load("<div class='code writecode'>&nbsp;<span class='key'>-webkit-transform</span>: <span class='value'>rotateX(0deg) rotateY(190deg) rotateZ(180deg)</span>;</div>");
	c.load("<div class='code writecode'>}</div></p>");
	
	
	c.load("<p><div class='code writecode'><span class='selector'>#work-text #md</span> { </div>");
	c.load("<div class='code writecode'>&nbsp;<span class='key'>-webkit-transform</span>: <span class='value'>rotateY(190deg) rotateZ(180deg)</span>;</div>");
	c.load("<div class='code writecode'>}</div></p>");
	
	
	c.load("<p><div class='comment writecode'>/**</div>");
	c.load("<div class='comment writecode'>&nbsp;*Ready?</div>");
	c.load("<div class='comment writecode'>&nbsp;*</div>");
	c.load("<div class='comment writecode'>&nbsp;*3....</div>");
	c.load("<div class='comment writecode'>&nbsp;*2....</div>");
	c.load("<div class='comment writecode'>&nbsp;*1....</div>");
	c.load("<div class='comment writecode'>&nbsp;*</div>");
	c.load("<div class='comment writecode'>&nbsp;*.</div>");
	c.load("<div class='comment writecode'>&nbsp;*</div>");
	c.load("<div class='comment writecode'>&nbsp;*Here we go!</div>");
	c.load("<div class='comment writecode'>&nbsp;*/</div></p>");
	
	
	c.setClass("#work-text", [{
		"name": "-webkit-transform",
		"val": "rotateX(0deg) rotateY(190deg) rotateZ(180deg)"
	}]);
	c.setClass("#work-text #md", [{
		"name": "-webkit-transform",
		"val": "rotateY(190deg) rotateZ(180deg)"
	}]);                                                  //旋转效果实现
	
	
	c.load("<p><div class='comment writecode'>/**</div>");
	c.load("<div class='comment writecode'>&nbsp;*we can also make adjustment on the text</div>");
	c.load("<div class='comment writecode'>&nbsp;*/</div></p>");   //预备对text效果，也就是左侧简历显示效果进行调整，也就是说
	
	
	c.load("<p><div class='code writecode'><span class='selector'>#md</span> { </div>");
	c.load("<div class='code writecode'>&nbsp;<span class='key'>font-family</span>: <span class='value'>'Helvetica Neue', Helvetica, sans-serif</span>;</div>");
	c.setClass("#md", [{
		"name": "font-family",
		"val": "'Helvetica Neue', Helvetica, sans-serif"
	}]);
	c.load("<div class='code writecode'>}</div></p>");             //对左侧text简历板子进行效果调整
	
	
	c.load("<p><div class='code writecode'><span class='selector'>#md h1</span> { </div>");
	c.load("<div class='code writecode'>&nbsp;<span class='key'>border-bottom</span>: <span class='value'>1px solid #ccc</span>;</div>");
	c.setClass("#md h1", [{
		"name": "border-bottom",
		"val": "1px solid #ccc"
	}]);                                                          //加隔线
	c.load("<div class='code writecode'>&nbsp;<span class='key'>padding-bottom</span>: <span class='value'>5px</span>;</div>");
	c.setClass("#md h1", [{
		"name": "padding-bottom",
		"val": "5px"
	}]);
	c.load("<div class='code writecode'>}</div></p>");            //对左侧板子的效果进行调整，具体的调整为
	
	
	c.load("<p><div class='code writecode'><span class='selector'>#md li</span> { </div>");
	c.load("<div class='code writecode'>&nbsp;<span class='key'>margin</span>: <span class='value'>5<span class='px'>px</span> 0</span>;</div>");
	c.setClass("#md li", [{
		"name": "margin",
		"val": "5px 0"
	}]);
	c.load("<div class='code writecode'>}</div></p>");            //调整resume的显示效果
	
	
	c.load("<p><div class='code writecode'><span class='selector'>#md h1,#md ul</span> { </div>");
	c.load("<div class='code writecode'>&nbsp;<span class='key'>margin</span>: <span class='value'>0</span>;</div>");
	c.setClass("#md h1,#md ul", [{
		"name": "margin",
		"val": "0"
	}]);
	c.load("<div class='code writecode'>}</div></p>");            //调整resume的显示效果
	
	
	c.load("<p><div class='comment writecode'>/**</div>");
	c.load("<div class='comment writecode'>&nbsp;*That's Okay</div>");
	c.load("<div class='comment writecode'>&nbsp;*");
	c.load("<div class='comment writecode'>&nbsp;*If you want to contact me</div>");
	c.load("<div class='comment writecode'>&nbsp;*wechat: hd5201314lx</div>");
	c.load("<div class='comment writecode'>&nbsp;*mobile:0450950778</div>");
	c.load("<div class='comment writecode'>&nbsp;*Thank you for reading my resume!</div>");
	c.load("<div class='comment writecode'>&nbsp;*/</div></p>");       //最后的备注

});

var m = 0;

var Coder = function(dom) {                                            //参数为dom，就是对参数里的这个dom对象进行操作，该对象在HTML中有声明
	this._dom = dom;                                                   //将参数的dom对象传入到this中的_dom中
};

Coder.prototype = {
	constructor: Coder,
	load: function(code, second) {                                     //load函数
		var dom = this._dom;
//		var o = this;
		var _second = second ? second : 1000;
		_second = m + _second;
		setTimeout(function() {
			$('#' + dom).scrollTop( $('#' + dom)[0].scrollHeight );
			$("#" + dom).append(code);                                 //调用Jquery中的scrollTop和append函数
		}, _second);
		m = _second;
	},
	setClass: function(dom, styles,second) {
		var _second = second ? second : 0;
		_second = m + _second;
		for (var i in styles) {
			setTimeout(function() {
				$(dom).css(styles[i].name, styles[i].val);             //调用Jquery中的css函数来设置具体操作,设置具体显示效果
			}, _second);
		}
		m = _second;
	},
	addClass:function(dom,className){
		var second = m;
		setTimeout(function() {
			$(dom).addClass(className);                                //调用Jquery中的addClass函数来具体操作，前面那个是具体dom元素，后面的是具体设置效果
		}, second);
	}
}