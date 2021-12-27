---
emoji: 🧩
title: (React) componentWillReceiveProps - this.props and nextProps always same
date: '2021-12-16 16:47:00'
author: ssongs2
tags: 자문자답
categories: solution
---

## <span style="color:red">문제</span> 
  
부모로부터 내려받은 props의 값을, 자식의 componentWillReceiveProps 함수에서,
this.props와 nextProps의 값을 디버깅해보면 언제나 똑같다.

## 💡 구글링
  
https://stackoverflow.com/questions/47227329/componentwillreceiveprops-this-props-and-nextprops-always-the-same
  
  <br>  

>#### 🔨 stackOverFlow 문제 요약
👉 부모 컴포넌트인 ProductText는 단방향으로 공급되는 state를 가진다.  
👉 부모 컴포넌트에서 배열이 변경될 때, 자식 컴포넌트에서 변경된 배열 prop를 감지해 callback 함수를 호출하고 싶다.  
👉 하지만 자식의 componentWillReceiveProps 함수에서 this.props와 nextProps 언제나 같아 변화를 감지할 수 없다.  
<br>  

>#### 🔨 해결책
👉 부모의 state가 불변하도록 변경되지 않았다.  
👉 그 이유는, 같은 메모리 주소의 값을 변경하였던 것.  

## 💡 내 문제점 - 나의 코드

**부모 컴포넌트**

```bash
    constructor(props){
        super(props)

        this.state = {
            faxRecvInfo = []    // 받는사람 정보
        }
    }

    onSaveOrgPopup = (e) => {
        let _faxRecvInfo = this.state.faxRecvInfo,
            _faxRecvList = {}

        for (let i=0; i< e.length; i++) {
            _faxRecvList = {
                "name": "ssongs2",
                "faxNo": "0507-1111-1111"
            }
        }
        _faxRecvInfo.push(_faxRecvList);
        this.setState({ faxRecvInfo: _faxRecvInfo });
    }

    render() {
        const { faxRecvInfo } = this.state;

        return (
            <>
                <Child
                    faxRecvInfo={faxRecvInfo}>
            </>
        )
    }
  
```
**자식 컴포넌트**

```bash
    componentWillReceiveProps(nextProps){
        console.log("this.props:", this.props, nextProps);                 // 왜? 똑같아?
        if(this.props.faxRecvInfo != nextProps.faxRecvInfo){}
    }

    render(){
        return (
            <>
            </>
        )
    }

```

## 💡 해결 - 나의 코드

**부모 컴포넌트**  
: 깊은 복사가 되어, 원본의 state가 변경이 됨. <br>
  얕은 복사를 통해 기존 state가 변경되었던 문제를 해결  <br>
  ####Array.from()
```bash
    ...

    onSaveOrgPopup = (e) => {
        let _faxRecvInfo = Array.from(this.state.faxRecvInfo),
            _faxRecvList = {}

        ...

         _faxRecvInfo.push(_faxRecvList);
        this.setState({ faxRecvInfo: _faxRecvInfo });
    }

    ...
  
```
<br />

### appending basic knowledge

얕은복사와 깊은복사 - [https://ssongs2.github.io/js_copy/](https://ssongs2.github.io/js_copy/)

```toc
```



