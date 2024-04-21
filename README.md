### 도구
**build**- vite<br>
**배포**- Netlify

### 📅 리팩토링 (컴포넌트 설계와 상태 관리)
<br>

- UI 관심사 별로 `컴포넌트 나누기`<br>
- 상위 컴포넌트와 하위 컴포넌트 관계가 생겼을 때 `상태 관리`<br>
- 컴포넌트를 분리하면 코드의 `재사용성`이 올라가고, 빠르게 화면 제작 가능
<br>

#### 🚀 컴포넌트 설계
<br>

1. 컴포넌트를 UI 관심사 별로 구분해서 생성<br>
-> src에 Components 폴더 만들어서 컴포넌트 관리<br>
-> App 컴포넌트 자체에 내부적으로 갖고 있던 로직들 각각의 컴포넌트의 위치에 맞게 이동<br>
2. 분리된 컴포넌트 JSX 표현부에 표시
<br>

#### 🚀 상태 관리
<br>

- 상태 위치
- 상태 주고받기 위한 구조
- Lifting State Up
<br>

리액트에서 컴포넌트는 한 가지 일만 하는 `단일 책임 원칙`을 따른다. 그리고 리액트의 데이터는 상위 컴포넌트에서 하위 컴포넌트로 전달하는 `단방향 데이터 흐름`이다. 그렇기 때문에 여러 개의 컴포넌트가 동일한 데이터를 바라보게 된다면 `공통의 상위 컴포넌트에 상태를 위치`시킨다. 컴포넌트의 `데이터는 props로 하위 컴포넌트에 전달`한다.

하위 컴포넌트의 이벤트 발생으로 상위 컴포넌트의 상태를 변경할 때는 'Lifting State Up'을 한다. `상위 컴포넌트에 작성된 상태 변경 함수를 props로 내린다. 그리고 `하위 컴포넌트에서 상태 변경 함수를 사용`한다. 이는 `역방향 데이터 흐름`으로 전달된다.  

