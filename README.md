android App 개발하기

# todo app 개발

최초 개발 소스 커밋 진행함
=> 이후 redux 추가 및 타 언어로 코딩하여 적용하기

npm install -g exp
(1번 cmd 창에서) exp start
(2번 cmd 창에서[다른] 창에서) exp build:androide

# React 전 본격적으로 하기 전 알면 좋은 6가지-()안은 개인 생각

- (?)setState triggers a re-render
  1. https://reactjs.org/docs/perf.html: Performance Tools 를 이용하기
     => React 16 부터는 지원 하지 않기 때문에 브라우저 개발자 도구 사용하기
  2. shouldComponentUpdate의 true / false를 이용하기(해당 로직의 수고가 필요한지 미리 공부 하기)
- (O)setState updates the local state asynchronously
  1. setState 이후 this.state를 하는 것은 원하는 결과 얻지 못함
  2. this.setState((prevState) => ({value: prevState.value + 1}), [callback]);
     => updater 함수로 state 변경함, 이후 callback은 있는 경우 callback 실행 후 re-render 됨
     : https://reactjs.org/docs/react-component.html#setstate
- (O)Component Lifecycle is important!
  1. LifeCycle(React16)
     mount: constructor > getDerivedStateFromProps(기억할것) > render > componentDidMount
     update: getDerivedStateFromProps(오타주의) > shouldComponentUpdate > render > getSnapshotBeforeUpdate(오타주의) > componentDidUpdate
     unmount: componentWillUnmount
     etc: getDerivedStateStateFromError(기억할것) / componentDidCatch(기억할것)
- (?)Use componentWillReceiveProps
  1. React16에서 변경됨(getDerrivStateFromProps)
     : this.props와 nextProps와의 비교가 중요함
     : 동기로 처리해야함
- (O)Use React Developer Tools
- (O)Use CRA
  1. global 설치해 써도 좋음

# 리액스 자료:

https://github.com/reactkr/learn-react-in-korean

신규 글 작성

모바일 앱, 모바일 클라이언트, 모바일 관련 서버 풀로 지정하기

최초 앱 개발

모바일 피씨적용

테스트 소스도 만들기
