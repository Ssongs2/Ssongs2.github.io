---
emoji: 🕸
title: (jquery_plugin) 1탄_jQuery 플러그인
date: '2022-03-03 12:21:00'
author: ssongs2
tags: solution
categories: solution
---

누가 나 요즘 개발하는 거 다큐멘터리로 찍는다면  
'송은지의 개발언어는 역행한다.' (feat. 벤자민의 시간은 거꾸로간다.)로 타이틀을 지으리라. 

ECMAScript6 명세 또는 스펙을 따라 개발하던 javascript를  
이젠 ECMAScript5를 따르게 되며, 정말 많은 불편함을 몸소 겪고 있다.  

그동안 컴포넌트, 모듈에 대한 용어를 많이 이야기했다면,
이젠 플러그인이 자주 등장할 것 같다.

~~불편하지만, 레트로 정신승리를 해본다. ~~   

최신의 편리함을 느끼며 최신에 대한 공부를 게을리 하지 말아야겠다.

그저 플러그인만 알고싶었을 뿐인데 계속해서 따라오는 용어들 때문에, 
4탄으로 나누어 정리를 해본다.

1탄_jQuery 플러그인
2탄_AMD,CommonJS,UMD
3탄_용어_플러그인, 컴포넌트, 모듈
4탄_용어_프레임워크, 라이브러리

1탄_jQuery 플러그인
    - jQuery 플러그인이란?
    - jQuery 플러그인 작성
        - 기본적인 플러그인 만들기
        - 옵션을 받아서 사용하기
        - 메소드체이닝

jQuery 플러그인이란?
jQuery의 프로토타입 객체를 확장하는 새로운 메소드를 추가하는 것이다.
즉, jQuery의 기능을 사용하여 모두가 사용할 수 있는 공통의 기능을 만드는 것이다.

왜 jQuery 플러그인을 만드는가?
1. 일관성
2. 재사용성
jQuery기반의 일관된 코드 스타일을 사용함으로써, 유지보수에 도움을 준다.
jQuery 플러그인을 사용함으로써, 개발 생산성이 향상된다.

jQuery 플러그인 작성 

- 기본적인 플러그인 만들기

```
$.fn[pluginName] = function(){
    // 여기서 this는 jQuery.fn.init 생성자 함수를 뜻하며, 
    // jQuery 프로토타입 객체를 반환하는데, 이 객체에는 선택된 DOM요소가 포함되어 있다.
    // this[0] === $(this): 선택된 div
    var _this = this[0]
    return _this;
}

```

- 옵션을 받아서 사용하기

#1 

```
(function(factory){
    factory(jQuery);
}(function($){

$.fn[pluginName] = function(options){
    var _this = this[0]

    $.extend({}, $.fn.pluginName.defaults, options); 
    return _this;
}

$.fn.pluginName.defaults = {
    width: "100px",
    height: "100px"
};

}));

```

#2
```
(function($) {
var _DEFAULTS = {
    width: "100px",
    height: "100px"
}

var pluginName = function(element, opt){
    this._plugin = this;
    this.$baseElement = element;
    opt = $.extend(true, this.$baseElement.data(), opt || {});
    this.$baseElement.data($.extend(true, _DEFAULTS, opt || {} ));
}

$.fn[pluginName] = function(options){
    var _this = this[0]
        
    var plugin = $.data(_this, 'plugin_' + pluginName);
    
    return plugin[options].apply(plugin, Array.prototype.slice.call(arguments, 1));

}
}(jQuery));

```



















