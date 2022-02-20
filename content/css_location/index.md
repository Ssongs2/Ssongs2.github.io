---
emoji: 🦠
title: (CSS_location) display와 position
date: '2022-02-18 22:00:00'
author: ssongs2
tags: solution
categories: solution
---

무작정 CSS를 적용하고자 했을 때 가장 헷갈렸던 두 가지의 속성을 정리해보려고 한다.
display와 position 두 속성이 많이 헷갈렸다.

display는 웹페이지의 레이아웃을 결정하는 CSS의 중요한 속성이고,
position은 레이아웃 안에서 구체적으로 HTML요소의 위치를 결정하는 속성이다.
그러면 두 가지 속성을 조금 자세히 살펴보자.

display의 값으로는 아래 세 가지 뿐이다.
1. block
2. inline
3. inline-block

모든 HTML요소는 display의 값으로 1. block 혹은 2 inline을 가진다.

**block**
의 경우 <div>, <h1>,<p>,<ul> 등이 있다.
block은 말 그대로 레이아웃에서 하나의 블럭(라인)을 차지한다.

**inline**
의 경우 <span>,<a>,<img> 가 있으며
하나의 라인을 차지하지 않고, HTML요소가 가진 너비만큼만 차지한다.



