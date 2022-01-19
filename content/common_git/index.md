---
emoji: 🕸
title: (common_git) Essential How to use git 
date: '2022-01-19 10:30:00'
author: ssongs2
tags: study
categories: study
---

## Essential How to use git

- Git init: 프로젝트 폴더에 .git 폴더를 생성 초기화한다.
- .gitignore: 숨김파일로 존재. 깃에 올리지 않을 폴더나 파일들을 관리. 절대 올리지 않을 파일을 미리 작성
- Git remote: 로컬 폴더와 git 레포지토리를 연결한다. ( git remote add origin .git)
- Git status: git 관리 하에 있는 폴더 안에서 변화가 있는 파일&폴더를 알려줌.
- Git diff: 이전 커밋과 비교하여 어떻게 달라졌는지 확인
- Git log: 커밋 로그를 볼 수 있음. 
- Git add: 서버에 올리기 전 변경점이 있는 파일을 stage로 올린다.
- Git commit: 커밋하여 서버에 올릴 준비 완료
- Git push: 커밋 내용을 서버로 보낸다.
- Git pull: 서버의 내용을 로컬에 내려받는다.

## 로컬 소스와 원격 git repository 연결방법

1. 터미널에서 연결할 로컬 디렉토리의 경로로 이동한다.
2. 명령어: git remote add [name] [url]   
    예) git remote add origin ~.git  
     *여기서 origin은 원격 저장소(remote)를 의미한다.

## 유용한 revert 방법

1. git revert [commit_id]: 특정 커밋의 내용을 되돌리는 방법
    * git revert --no-edit <commit_id>  
        *--no-edit는 커밋 메세지를 수정하도록 편집기가 실행되지 않도록 하는 옵션  

2. git revert -m n [commit_id]: 머지 커밋(Merge commit)을 되돌리는 방법  
    * 머지 커밋(Merge commit)을 되돌려야하는 상황  
        a. 예를 들어, 특정 브랜치 'tmp'에 **b_id** 커밋이 반영이 되면 안되는 상황  
        b. **a_id**와 **b_id**의 커밋된 특정 브랜치 **tmp_ab**가 있다.  
        c. Merge **tmp_ab** into 'tmp'를 하여 'tmp'브랜치에 **b_id**가 커밋 내용이 포함 됨.  
        d. tmp의 [commit_id]는 **c_id**
    * git revert -m 1 <commit_id>  

        a. git show **c_id** - **tmp_c**의 머지 커밋을 조회 시 다음과 같은 창이 뜸
        ```
          commit: c_id 
          Merge: a_id b_id
          Author:   
          Date:   
        ```
        b. git revert **c_id** -그냥 revert하면 다음과 같은 에러메세지가 발생  
        ```
        error commit b_id is a merge but no -m option was given.  
        ```
        c. **c_id** 커밋은 **a_id**와 **b_id**를 머지한 커밋이고, 이러한 커밋을 머지 커밋이라고 함.  

        d. 이런 커밋을 되돌릴 때는 어느 쪽 커밋으로 되돌릴지 m옵션으로 지정해 주어야 함.  
        ```
        git revert -m 1 c_id  // a_id커밋으로 되돌리기 위한 명령어
        git revert -m 2 c_id  // b_id커밋으로 되돌리기 위한 명령어
        ```