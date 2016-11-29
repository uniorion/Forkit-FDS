##### :octocat: forkIt - FDS

# Team Project - forkIt

### 목차

> 1. [개요](#1-개요)
> 2. [일정](#2-일정)
> 3. [Work flow](#3-Work-flow)
> 4. [기술스택](#4-기술스택)
> 5. [가이드](#5-가이드)  
>   5.1 [코딩 컨벤션]()  
>   &nbsp;&nbsp; 5.1.1 [HTML]()  
>   &nbsp;&nbsp; 5.1.2 [CSS]()  
>   &nbsp;&nbsp; 5.1.3 [Javascript]()  
>   5.2 [이미지 가이드]()
> 6. [프로젝트 환경](#6-프로젝트 환경)
  
---

## 1. 개요

* 패스트캠퍼스의 4개 스쿨이 한 팀을 이루어 하나의 주제로 진행하는 프로젝트.
* 본 스쿨(임진호, 이진기)이 포함된 3조는 __'맛집'__ 을 주제로 선정하였으며 서비스명은 __forkIt__ 으로 정함.


## 2. 일정

* 2016.11.28 ~ 2016.12.16
* Scrum - 1주 단위 Backlog 작성, 4일 단위 Sprint


## 3. Work flow


## 4. 기술스택


## 5. 가이드


## 6. 프로젝트 환경
6.1 프로젝트 환경 구성
 - webpack : 웹 번들러
 - babel loader : ES6 문법 사용
 - sass loader : Sass 문법 사용
 - eslint : 문법, 코딩 규칙, 접근성 검사
 - react-addons-perf : 성능 검사

6.2 Boilerplate 사용
 - create-react-app 설치
 - eject 후에 sass-loader, eslint 설정
 - react-addons-perf 추가

6.3 프로젝트 실행
 - development
 ```shell
 npm start
 ```
 - production
 ```shell
 npm run build
 #실행 후 build 폴더의 내용을 서버로 복사
 ```