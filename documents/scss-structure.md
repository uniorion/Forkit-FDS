## scss structure

```
  styles  
    ├── base  
    ├── libs    
    │   ├── normalize  
    │   ├── reset  
    │   ├── grid   
    │   ├── helpers  
    │   │    ├── layout  
    │   │    └── rwd  
    │   └── utils  
    ├── container 
    ├── components      
    │   ├── Common    
    │   ├── Map     
    │   ├── Pager     
    │   ├── PhotoCarousel   
    │   ├── PhotoViewer    
    │   ├── Restaurant    
    │   ├── Search    
    │   └── SearchBar    
    └── index.scss  
```

#### 1. __index.scss__ 은 entry 파일로 1depth 의 scss파일을 import 한다.
#### 2. 1depth 폴더에는 폴더명과 동일한 scss 파일을 두어 하위의 모든 scss 파일을 import 한다.

- base : 변수, 폰트설정, 레이아웃, mixin
- libs : 초기화 등의 외부 모듈, scss 작성을 돕는 mixin, function 등
- container : 컴포넌트의 틀이 되는 각 컨테이너의 스타일
- components : 각 컴포넌트의 스타일