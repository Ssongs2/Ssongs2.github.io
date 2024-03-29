---
emoji: 🕸
title: jquery | 2탄_AMD,CommonJS,UMD  
date: '2022-03-23 09:10:00'
author: ssongs2
tags: study
categories: front
---

플러그인을 만들려고 구글링 했더니, 계속 나오는 용어 AMD, CommonJS, UMD
플러그인이나 모듈같은 것은 다른사람의 코드나, 나의 코드를 <span style="color:red;">재사용</span>하고 싶을 때 사용한다.

1. 처음 자바스크립트는 모듈을 가져오거나, 내보내는 방법이 없어 하나의 파일에 모든 기능이 들어가야 했다.AMD, CommonJS, UMD가 등장한 이 후 모듈화 개발을 할 수 있게 되었다.

2. 여러 모듈을 불러온 경우, 각 모듈에서 같은 변수를 사용할 때 변수 충돌이 일어나는데, 이 충돌 문제를 해결하기 위한 방법으로 AMD, CommonJS, UMD... 이 있다.

<b>즉, 모듈화 개발을 하거나, 변수 충돌 문제를 해결하기 위해 사용하는 방식이다.</b>

### AMD(Asynchronous Module Definition) 

```
define(['jquery'], function($){
    console.log($);

    return {
        jquery: $
    }
})
```
AMD는 비동기 상황에서 자바스크립트 모듈을 사용하기 위함이다.  
AMD는 브라우저를 중점을 두어, 네트워크 모듈들을 다 내려받은 후 비동기적으로 동작하므로, 클라이언트 사이드 개발에 적합하다.  
AMD 모듈 방식을 채택하기 위해서는 이를 구현한 가장 유명한 RequireJS 스크립트를 다운로드받아 스크립트를 불러와야 한다.  

### CommonJS

```
const $ = require('jquery');

module.exports = {
    $ : $
}
```
CommonJS는 모든 파일이 로컬 디스크에 있어 필요할 때 바로 불러올 수 있는 상황을 전제로 한다.  
동기적인 동작이 가능한 서버사이드 자바스크립트 환경을 전제로 하며 Node.js에서 채택한 방식이다.  
기본적으로 CommonJS 모듈 방식을 채택하기 위해서는 webpack등의 처리가 필요하다.  

### UMD

```
(function(root, factory) {
    if(typeof define === 'function' && define.amd) { // AMD 여부 확인
        define(['jquery'], factory)
    }
    else if(typeof exports === 'object' && module.exports) { // CommonJS 여부 확인
        module.exports = factory(require('jquery'));
    } 
    else { 
        root.myModule = factory(root.$);
    }
}(this, function($){
  retrun x : $
}));
```

UMD는 모듈 방식이라기보다 디자인 패턴에 가깝다.    
AMD, CommonJS의 모듈 방식까지 모든 경우를 커버할 수 있는데,  
AMD와 CommonJS 방식 둘다 아닌 경우 모듈을 winodw에 담게 되는 것이다. 
보통 플러그인을 까보면 UMD 방식으로 모든 경우를 커버하는 것을 볼 수 있다.   

+ 추가(ESM) 
ECMAScript에서 지원하는 자바스크립트 공식 모듈 시스템으로, 아직 브라우저에서 지원하지 않아 번들러와 함께 사용해야한다.  
'import'를 사용하여 쉽게 모듈을 가져와 사용할 수 있다.

```
<script type="module" src="index.mjs"> 
```
추가하여, 브라우저에서도 모듈 시스템을 사용할 수 있다.

📖 <b>참고<b>  
https://www.zerocho.com/category/JavaScript/post/5b67e7847bbbd3001b43fd73  

https://beomy.github.io/tech/javascript/cjs-amd-umd-esm/#umd-universal-module-definition

```toc

```

