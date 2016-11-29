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