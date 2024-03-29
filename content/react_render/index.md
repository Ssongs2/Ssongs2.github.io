---
emoji: 🧩
title: react | 렌더링을 언제 하길래 데이터 변경이 안돼?
date: '2022-01-06 09:56:00'
author: ssongs2
tags: 자문자답
categories: front
---

## 렌더링이란?  
리액트 앨리먼트를 html 형태로 변환하여 화면에 그려지는 것  

## 렌더링 이슈  
리덕스를 사용해서 state 상태관리를 하는데, setState로 렌더링을 한 번 더 하게하는 코드를 발견했다.  
setState를 지우니 자식컴포넌트 그리드의 데이터가 바인딩이 되지 않는다. (!?)

**문제의 코드**  

##### <span style="color:blue">AComponent</span>
```
import React, { Component } from 'react'; // 기본 react component
import { connect } from 'react-redux; // redux

import * as action from 'bl/action'; // redux - action

    class CptA extends Component {

        constructor(props) {
            super(props);

            this.state = { 
                aState: [{}],
                bState: false,
            }
        }

        functionA = () => {  // functionA가 실행되는 상황이라고 가정
            const { setAB } = this.props.setAB;

            apiA(apiAParam)
            .then((response) => {
                if(response.resultCode === 200 ){
                    // 아래의 코드를 지우면 자식컴포넌트 그리드의 데이터가 바인딩 되지 않는다(?)
                    this.setState({
                        aState: response.resultData,
                        bState: true
                    });

                    setAB(response.resultData, true);

                }
            })
        } 

        render(){
            return(
                {
                    <CptB className= Astate ? 'cptB' : 'cptB_complete'>
                      <CptC> // 데이터 그리드 - 컴포넌트  
                    </> 
                }
            )
        }
    }

// redux - state 가져오기
let mapStateToProps = (state) => {
    return {
        aState: state.a_rd.aState,
        bState: state.b_rd.bState
    }
}

// redux - state 변경
let mapDispatchToProps = (dispatch) => {
    return {
        setAB: (aState, bState) => dispatch(action.sendPage_act(aState, bState))
    }
}

CptA = connect(mapStateToProps, mapDispatchToProps)(CptA);
export default CptA;

```  

## 🥊 React가 렌더링을 실행할 때  
1. props가 변경되었을 때  
2. state가 변경되었을 때  
3. forceUpdate()를 실행하였을 때  
4. **부모 컴포넌트가 렌더링 되었을 때**  
  
  
## 해결의 과정

> a. 4번과 같이 부모 컴포넌트가 렌더링이 되면, 자식 컴포넌트가 렌더링이 된다고 인지   
 b. 리덕스 라이브러리를 사용하지 않은 순수 리액트에서만 해당되는 이야기  
 c. 리덕스 라이브러리를 사용한 경우는 1~3번만 렌더링이 됨  
 d. 현재는 setState로 상태변경이 이뤄져야 자식 컴포넌트에서의 렌더링이 제대로 됨.  
 e. setState({ bState: true }) 상태변경을 하면 렌더링이 되고, redux를 통한 상태변경을 하면 렌더링이 안되는 이유  
>> 1. bState는 현재 CptC에 영향을 주고있음.  
>> 2. aState만 setState로 변경한다고하면, 변경되지 않음.
>> 3. **결론: redux를 통한 상태변경은 CptC에서 데이터 바인딩이 된 그리드를 그릴 수가 없음. 그리드의 오류로밖에 결론이 내려지지 않음.**  
>> 4. 너무 억울.. 그리드는 다른 팀에서 제공한 라이브러리임.

```toc
```





