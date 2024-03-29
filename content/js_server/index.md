---
emoji: 🕸
title: js | 어떻게 실행하냐구요?
date: '2022-04-14 11:22:00'
author: ssongs2
tags: study
categories: front
---

HTML, CSS를 활용하여 화면을 그린 후, 결과물을 확인하기 위해서는,  
로컬의 경로를 브라우저 주소창에 입력하면된다.

그러면, javascript를 활용하여 비즈니스 로직를 작성 한 후 결과물을 확인하기 위해서는,  
<span style="color:red">어떻게 해야할까?</span>

자바스크립트를 해석하고, 실행하기 위해서는 자바스크립트 엔진이 필요하다  
자바스크립트 엔진을 내장하고 있는 브라우저와, Node.js환경에서 실행할 수 있다.

브라우저는 HTML, CSS, Javascript로 웹페이지를 화면에 렌더링하는 것이 목적이며,  
Node.js는 서버 개발 환경을 제공하는 것이 주된 목적이다.

따라서 브라우저와 Node.js에서 ECMAScript 이 외에 추가적으로 제공되는 기능은 호환되지 않는다.  

> 예를들어, 브라우저는 DOM API(HTML 요소를 선택하거나, 조작하는 기능들의 집합)를 제공하지만 Node.js는 제공하지 않는다.  

> 반대로, Node.js는 File API(파일을 생성하고 수정할 수 있는 File 시스템)를 제공하지만, 브라우저는 제공하지 않는다.  

<b><브라우저> HTML에 포함된 자바스크립트를 브라우저에서 실행</b>

App.html
```
<!DOCTYPE html>
<html>
    <head>
        <script type="text/javascript" src="./testJQuery.js"></script>
    </head>
    <body>
        <div></div>
    </body>
</html>

```


<b><Node.js> Node.js REPL</b>  
REPL(Read Eval Print Loop)은 Node.js는 물론 대부분의 언어(Java, Python 등)가
제공하는 가상환경으로 간단한 코드를 직접 실행해 결과를 확인이 가능하다.

```
$ node testJQuery.js
```

그런데 문제가 있다.  
아래는 testJQuery.js 코드이다.
```
const arr = [ 1, 2, 3 ];
arr.forEach(alert);

```
이 코드는 에러가 날 것이다.  
브라우저에 알림창을 띄우는 alert함수는 클라이언트 사이드 WEB API인데,    
Node.js 환경에서 실행되었기 때문에 에러가 발생한다.  
WEB API를 사용하지 않는 코드만 실행한다면 문제가 없다.    

따라서, WEB API가 포함된 자바스크립트를 실행하려면, Node.js환경이 아닌 브라우저에서 실행해야 한다.

```
<!DOCTYPE html>
<html>
    <head>
        <script type="text/javascript" src="./testJQuery.js"></script>
    </head>
    <body>
        <div></div>
    </body>
</html>

```

위와 같이, 자바스크립트 코드를 HTML에 삽입한 다음 HTML 파일을 브라우저에서 실행하는 방법으로는~  

<b><Node.js> Live Server 확장 플러그인</b>  
VS Code 확장 플러그인의 저장소인 "마켓 플레이스"에서 Live Server 확장 플러그인을 사용하여, 서버를 실행한다.
  
<b><Node.js> npm(node package manager)</b>  
자바스크립트 패키지 매니저를 활용하여, 서버를 실행한다.






