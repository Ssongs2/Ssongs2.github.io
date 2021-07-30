---
emoji: 🕸
title: (javascript) 동기? 비동기?
date: '2021-07-28 14:37:00'
author: ssongs2
tags: study
categories: study
---

## 비동기 처리

생각대로 되지않아 열받을 찰나 비동기 처리에 대한 문제임을 발견하고, 각성하는 바 정리해본다.

 ### 1️⃣ 첫 번째 사례
 - ajax


 ```bash
const ajax = new XMLHttpRequest();
const URL = "https://api.hnpwa.com/v0/news/1.json"

 function call(){
     ajax.open('GET', URL);
     ajax.send();

     return ajax.response;
 }

console.log(call()); // undefined
 ```
콘솔 창 로그는 undefined가 찍힌다.  
왜그럴까?  
비동기 처리의 문제이다.  
서버와 통신하는 ajax 객체가 응답을 받아오기 전에 출력한다.

 ### 2️⃣ 두 번째 사례
 - setTimeout();

 ```bash

 function func() {
     console.log("1");
 }

 setTimeout(func, 3000);
 console.log("2");
 ```

비동기 처리 개념을 모르고 해당 코드를 본다면 콘솔 창에는 "1", "2"가 찍힌다고 생각할 것이다.  
그런데 "2", "1"이 찍힌다.  
setTimeout() 함수에서 3초 후에 "1"을 찍게 되어있는데, 이 로직을 기다려주지 않고 나머지 코드를 먼저 실행한다.

## javascript에서의 비동기 처리

위의 사례에서 살펴봤듯이 서버 통신 혹은 시간 지연 함수와 같이 실행결과를 기다리지 않는다.  
비동기 처리가 필요한 이유는 사용자 경험이다.  
대량의 데이터를 처리하는 서버 통신에서 응답을 받아올 때까지 나머지 로직을 멈춘다면 사용자는 무한의 시간을 기다려야 한다.  

## 비동기 처리 방식의 해결

두둥! 
### 🥊콜백지옥






```toc
```