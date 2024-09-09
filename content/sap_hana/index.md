---
emoji: 🕸
title: ABAP | SAP HANA
date: '2024-09-04 16:30:00'
author: ssongs2
tags: study
categories: sap
---

# SAP HANA란?
- SAP HANA는 SAP의 인메모리 데이터베이스 플랫폼으로, HANA Database를 기반으로 하는 시스템

- R1 - R2 - R3를 거쳐 ECC (Enterprise Central Component) 이후 2010년에 출시된 최신 솔루션

- 기존에는 데이터를 디스크에 보관했지만, SAP HANA는 열 기반의 인메모리(In-Memory) 데이터베이스를 사용하여 데이터를 저장한다. 이를 통해 데이터 저장과 온라인 분석 처리(OLAP), 트랜잭션 처리(OLTP)를 동시에 지원하여 고속의 처리가 가능함.

<br />

## SAP HANA과 친해지기
#### 1. Classic ABAP Programing과 New ABAP Programing에 대한 접근
#### 2. 인메모리란
#### 3. SAP HANA의 혁신적인 기술

<br />

 ### 1️⃣ Classic ABAP Programming과 New ABAP Programming에 대한 접근

기존 Classic ABAP Programming은  데이터베이스에서 데이터를 읽어와 계산을 수행한 후에 데이터베이스에 결과를 저장하는 <B>DATA TO CODE방식</B>
</br>
- 기존 방식:

1. 데이터베이스에서 데이터 읽기
2. 애플리케이션 서버에서 계산 수행
3. 계산된 결과를 데이터베이스에 다시 저장
</br>

NEW ABAP Programming은 <U>데이터베이스에서 직접 계산을 한 후에 필요한 결과만 Application에 데이터</U>만 올려주는 방식으로 변화했다. 이는 데이터 처리 작업을 데이터베이스 엔진으로 이동시키는 <b>Code to Data Pushdown 방식</b>

</br>
- Pushdown 방식:

1. 데이터베이스에서 데이터 읽기
2. 데이터베이스에서 직접 계산 수행
3. 결과를 애플리케이션 서버로 전달

 ### 2️⃣ 인메모리란
인메모리 데이터베이스 (In-Memory Database, IMDB)는 데이터를 기존 디스크나 SSD가 아닌 컴퓨터의 메인 메모리(RAM)에 저장하는 데이터베이스.
이 기술을 사용하면 실시간 분석과 빠른 데이터 처리 속도가 가능함.

- 인메모리의 장점:
1. 빠른 데이터 접근 시간
2. 실시간 분석 가능
3. 높은 성능의 데이터 처리
 ### 3️⃣ SAP HANA를 더 좋게 만드는 요소
> HW Technology Innovations.
1. 멀티 코어 구조: 8CPU * 10개 코어
2. address space 프로세스의 주소공간; 프로세스들은 자신만의 개별적이고 독립적인 주소를 가지고 있어 메모리 접근 효율성이 높아진다.

> SAP SW Technology Innovations.
1. Row Store 와 Column Store

    - Row Store: 데이터를 행 단위로 저장하며, ID를 기준으로 데이터를 조회할 때 유리 예: WHERE ID = 'AA'. (Default)

    - Column Store: 데이터를 열 단위로 저장하며, 집계 연산이나 분석 쿼리에 유리 예: SELECT SUM(ID).

2. Compression
    - 데이터를 압축하여 메모리 사용을 최적화. 
    - 예를 들어, 특정 컬럼의 데이터를 압축하여 저장 공간을 절약합

3. Partitioning
    - 데이터를 작은 데이터 셋으로 나누어 분산 처리함으로써 대량의 데이터를 효율적으로 처리

4. Parallel Processing
    - 병렬 처리를 통해 대량의 데이터를 동시에 처리하여 성능을 향상

## SAP HANA 환경과 사용 사례
- SAP HANA Cloud: SAP HANA는 클라우드 환경에서도 제공되며, 클라우드 기반의 데이터 분석과 처리를 지원합니다.

- SAP HANA의 사용 사례: SAP HANA는 실시간 데이터 분석, 트랜잭션 처리, 그리고 비즈니스 인텔리전스(BI) 도구와의 통합에 널리 사용됩니다.
