---
emoji: 🕸
title: (javascript) 얕은 복사? 깊은 복사?
date: '2021-12-17 15:30:00'
author: ssongs2
tags: study
categories: study
---

## 얕은 복사(Shallow Copy)
  
객체가 담겨있는 변수를 다른 변수에 할당하면 call by reference (참조)가 일어난다.  
값이 담긴 주솟값들로 이루어진 묶음을 가리키는 주솟값을 복사한다.  
복사된 객체는 원본 객체의 주솟값을 참조하고 있는 것이다.  

```
const obj = { a: 1, b: 2};
const objCopy = obj;

objCopy.a = 2;

console.log("obj === objCopy: ", obj === objCopy); // true
console.log("obj.a:", obj.a); // 2
```

## 깊은 복사(Deep Copy)
  
독립적인 메모리에 값 자체를 할당하여 생성하는 것으로, 깊은 복사를 통해 원본의 객체와는 다른 고유한 객체를 생성한다.

### Object.assign() 

>#### 사용법
Object.assign(생성할 객체, 원본 객체) 메서드의 첫 번째 인수로 빈 객체를 넣어주며,
두 번째 인수로 할당할 객체를 넣어준다.

```
const obj = { a:1, b: 2};
const objCopy = Object.assign({}, obj);

objCopy.a = 2;

console.log("obj === objCopy: ", obj === objCopy); // false
console.log("obj.a:", obj.a); // 1

```

### ... (Spread Operator)

>#### 사용법  
...연산자를 사용하여 고유한 객체를 생성한다.

```
const obj = { a:1, b:2 };
const objCopy = ...obj;

```
깊은 복사의 방법 Object.assign()과 ...는 <span style="color:red">1레벨 깊이</span>에서는  
우리의 생각대로 깊은 복사가 가능하지만, <span style="color:red">그 이상 레벨의 복사에서는 아래의 방법을 통해 복사를 진행해야 한다.</span>

### 완벽한 Deep Copy를 위한 방법   
 **1. 재귀적으로 깊은 복사를 수행:** 원본의 객체의 최고 레벨의 깊이에 관여하여 복사하는 방법으로 객체의 깊이가 길어질수록 시간복잡도(Time Complexity)가 늘어난다.  
 **2. Lodash의 cloneDeep 함수 수행:**  자바스크립트의 함수형 라이브러리로 Lodash의 cloneDeep함수를 사용하면 완벽하게 깊은 복사를 사용할 수 있다.  
 **3. JSON.parse()와 JSON.stringify()함수 사용:**  문자열로 변환하는 순간 참조 값이 끊기기 때문에 새로운 Object로 만들어서 사용할 수 있음  

```toc
```