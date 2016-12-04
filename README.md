##### :octocat: forkIt - FDS

# Team Project - forkIt

### 목차

> 1. [개요](#1-개요)  
> 2. [일정](#2-일정)  
> 3. [가이드](#3-가이드)  
>   3.1 [디자인 가이드](#31-디자인-가이드)  
>   3.2 [코드 가이드](#32-코드-가이드)  
>   &nbsp;&nbsp;3.2.1 [HTML](#321-html)  
>   &nbsp;&nbsp;3.2.2 [CSS](#322-css)  
>   &nbsp;&nbsp;3.2.3 [JavaScript](#323-javascript)  
>   &nbsp;&nbsp;3.2.4 [JavaScript](#324-eslint-설정)  
> 4. [Github Work flow](#4-github-work-flow)  
> 5. [기술스택](#5-기술스택)  
>   5.1 [언어 및 주요 기술, 도구](#51-언어-및-주요-기술-도구)  
>   5.2 [기타 도구](#52-기타-도구)  
>   5.3 [Boilerplate](#53-boilerplate)  
> 6. [프로젝트 실행](#6-프로젝트-실행)  
> 
> 99. [참조](#99-참조) 

<br>

## 1. 개요

* 패스트캠퍼스의 4개 스쿨이 한 팀을 이루어 하나의 주제로 진행하는 프로젝트.
* 본 스쿨(임진호, 이진기)이 포함된 3조는 __'맛집'__ 을 주제로 선정하였으며 서비스명은 __forkIt__ 으로 정함.

<br>

## 2. 일정

* 2016.11.28 ~ 2016.12.16
* Scrum - 1주 단위 Backlog 작성, 4일 단위 Sprint

<br>

## 3. 가이드

### 3.1 디자인 가이드

* Mobile, Desktop 뷰 제공.

  |            | Mobile        |  Desktop      |
  |:-----------|:-------------:|:-------------:|
  | 기준폭     | 320px         | 1366px        |
  | 커버리지   | 320 ~ 1024px  | 1025 ~        |
  | 양쪽마진   | 0             | 120px         |
  | 거터       | 16px          | 24px          |
  | 컬럼수     | 6             | 12            |
  | 컬럼넓이   | 40px          | 78px          |

<br>

### 3.2 코드 가이드

#### 3.2.1 HTML

##### 기본
 - 소프트탭(2칸 공백 사용)
 - 문자열은 큰 따옴표 사용

##### 태그 속성 순서
 1. class: 재사용 가능함
 2. id, name: 식별 가능
 3. src, for, type, href, value
 4. title, alt : 접근성 관련
 5. aria, role : 접근성 확장 관련

<br>

#### 3.2.2 CSS/Sass

##### 기본
 - 소프트탭(2칸 공백 사용)
 - 문자열은 큰 따옴표 사용
 - 콜론 `:` 앞은 공백없음, 뒤는 공백 1칸. 예)color: #fff;
 - 중괄호 `{`, `}`는 각각 새 라인에 사용
 - 다중선택자(,)는 줄 바꿔서 표시
 - ID 선택자는 레이아웃 외에 되도록 사용 금지(HTML document에서 유일한 것에만 사용)
 - 스크립트용 클래스는 js-접두어 사용
 - border가 없는 경우 0을 사용
 - 중첩 선택자는 3회까지(3회 이상인 경우 HTML과의 연결을 느슨하게 하거나 클래스로 분리가능한지 확인)
 - class, 변수, 믹스인, 함수 등 css/sass 이름 규칙은 소문자 단어와 소문자 단어 사이 하이픈(`-`)을 사용한다. 예) class-name

##### 작성위치
 - 베이스(초기화, 기본스타일)와 레이아웃(위치, 박스)는 styles 폴더 아래 작성
 - 독립적으로 재사용 가능한 스타일의 경우 styles/lib 폴더 아래 작성
 - React의 컨테이너, 컴포넌트와 관련된 스타일의 경우 React의 폴더 구조와 같게 styles 아래 구성(예: /componens/header 의 스타일은 /styles/components/header에 작성)

##### property별 작성 순서
 1. 위치
 2. 박스
 3. 텍스트
 4. 시각적 꾸밈 요소(테두리, 배경 등)
 5. @include
 6. 중첩 선택자

<br>

#### 3.2.3 JavaScript
 - ESLint 설정을 기본으로 따름.
 - 내부에서만 사용하는 변수, 메서드는 이름 앞에 _를 붙임.(예외 : props, state의 멤버 이름은 _를 붙이지 않는다.)

<br>

#### 3.2.4 ESLint 설정
 - 기본적으로 Github에 공개되어있는 [facebookincubator/create-react-app](https://github.com/facebookincubator/create-react-app/blob/master/packages/eslint-config-react-app/index.js)의 설정을 따름
 - 들여쓰기 공백 2칸
 - single quotes 사용
 - semi colon 항상 사용
 - jsx-a11y/recommended 사용
 - camelCase 사용

<br>

## 4. Github Work flow
 - upstream에 개발 통합용 브랜치 생성 : develop
 - 브랜치를 Fork 한 후에 개발
 - 개발 중인 내용을 `WIP`(Working In Progress)를 제목에 붙여 Pull request에서 리뷰가 가능하도록 함
 - `WIP`가 없는 Pull request에 대해서 리뷰 후 특이사항이 없으면 Approve 한 후에 Merge

<br>

## 5. 기술스택

### 5.1 언어 및 주요 기술, 도구
 - HTML
 - Sass
 - ES6
 - React
 - Webpack
 - Github

<br>

### 5.2 기타 도구
 - babel-loader : ES6 문법 사용
 - sass-loader : Sass 문법 사용
 - eslint : 문법, 코딩 규칙, 접근성 검사
 - react-addons-perf : 성능 검사
 - react-router : React 라우터 구성
 - react-a11y : 접근성 검사를 위해 사용하려 했으나 eslint-plugin-jsx-a11y에서 이를 사용하므로 별도 설정하지 않음

<br>

### 5.3 Boilerplate
 - create-react-app 설치
 - eject 후에 sass-loader, eslint 설정
 - react-addons-perf 추가

<br>

## 6. 프로젝트 실행
 - development : ```npm start```
 - production : ```npm run build``` 실행 후 build 폴더의 내용을 서버로 복사

<br>

## 99. 참조
 - [yamoo9's Sass StartKit](https://github.com/yamoo9/yamoo9-Sass-StartKit)