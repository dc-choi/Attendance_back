# school-manage program

이 프로젝트는 기존의 출석부 프로젝트를 보완하기 위해서 제작된 프로젝트입니다.

[v1의 프로젝트 내역...](https://github.com/dc-choi/Attendance)

## 만들게 된 계기
<details>
<summary>자세히 보기</summary>

중고등부 주일학교는 시무식을 앞두고 각자 생각하는 개인, 그리고 공동체의 목표와 비전에 대해서 생각을 해보게 되었습니다. 솔직히 말씀드리자면 사실 처음에는 잘 와닿지 않고 무엇을 생각해야 하나 많은 고민이 있었는데요...

제 나름의 생각을 해본 결과, 우선 난 어떤 사람인지에 대해서 생각하고, 현재 중고등부의 문제점, 그리고 내가 중고등부에 기여를 할 수 있는 점이 무엇인지 생각을 해보았습니다.

그 결과 내가 가지고 있는 웹 프로그래밍 지식이라면 중고등부의 시스템을 어느 정도 전산화할 수 있지 않을까? 생각을 하게 되었습니다. 현 중고등부의 시스템 중 어떤 부분을 전산화 할 수 있을까? 를 생각하다가 출석부 프로그램을 만들게 되면 편리할 거 같아서 제작하였습니다.

기존의 중고등부의 문제점은 다음과 같습니다.

1. 코로나로 인해 아이들이 나오지 않게 되면서 20년도부터 출석 체크를 하지 않아, 기존 출석부의 데이터와 현 상황이 맞지 않게 되었습니다.
2. 매년 엑셀로 된 출석부를 다시 만들어야 해서, 아이들의 정보를 다시 입력하고, 새로운 아이들의 정보를 입력하는 데 많은 어려움이 있었습니다.
3. 매년 출석 상을 보상해야 하는데, 기존의 출석부로는 아이들의 출석 통계를 내는 게 어려웠습니다.
4. 엑셀로 된 출석부를 가지고 있지않으면, 출석체크가 불가능합니다.

출석부 프로그램을 제작함으로써, 개선되는 점은 다음과 같습니다.

1. 매년 출석부를 다시 만들지 않아도, 한번만 아이들의 정보를 등록하면 졸업하기 전까지 정보를 계속 유지할 수 있습니다.
2. 출석부 프로그램을 누구나 언제든 출석사항을 기록하고 확인 할 수 있습니다.
3. 회의록을 통해 확인해야하는 출석현황과 다르게 직관적으로 확인이 가능합니다.
4. 출석 상에 대한 통계를 낼때, 간편하게 산출할 수 있습니다.

저의 작은 노력으로 중고등부 공동체가 좋은 방향으로 변화했으면 좋겠습니다. 감사합니다.

</details>

## 개발기간
22.02.19 ~ 현재 (첫 배포는 기획한지 2주만에 진행)

## 시스템 구성도

![시스템 구성도](https://github.com/dc-choi/school_manage_back/blob/develop/img/v2.0.0%20work%20flow.png)

<details>
<summary> ~ v1.4.0 시스템 구성도</summary>

![시스템 구성도](https://github.com/dc-choi/Attendance/blob/master/img/v1.2.1%20%EC%95%84%ED%82%A4%ED%85%8D%EC%B3%90.png)

</details>

<details>
<summary> ~ v1.2.0 시스템 구성도</summary>

![시스템 구성도](https://github.com/dc-choi/Attendance/blob/master/img/%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8%20%EA%B0%9C%EB%B0%9C%ED%99%98%EA%B2%BD.png)

</details>

## 사용 기술

- FrontEnd
    - HTML5
    - CSS3
    - JavaScript
    - jQuery 3.6.0

- BackEnd
    - TypeScript 4.6.3
    - Node.js 16.17.0
    - Express 4.16.1
    - Sequelize 6.16.2
    - MYSQL 8.0.30

- DevOps
    - ~~Ubuntu 20.04.4 LTS~~
    - ~~AWS EC2~~
    - Amazon Linux 2 2.0.20220805.0
    - AWS Lightsail
    - Nginx
    - GitHub

## ERD

![ERD](https://github.com/dc-choi/school_manage_back/blob/develop/img/v2.0.0%20ERD.JPG)

## 주요 기능

- 로그인: 각 계정별로 로그인하여 계정에 속한 그룹을 관리할 수 있습니다.
- 그룹 리스트: 주일학교 학생들이 속한 그룹을 보고, 추가하고, 수정하고, 삭제할 수 있습니다.
- 학생 명단: 주일학교 학생들의 명단을 보고, 추가하고, 수정하고, 삭제할 수 있습니다.
- 출석부: 주일학교 학생들의 출석을 보고, 추가하고, 수정하고, 삭제할 수 있습니다.
- 통계(추후 패치를 통해 추가 예정): 학생들의 출석 현황을 간단하게 확인 할 수 있습니다.

<!-- ## 출석부 프로그램 초기 화면 구성
[오븐을 이용한 프로토타입](https://ovenapp.io/view/uUt1nneSOrTuih71pV814CGUcr6lRVKP/I6IRP) -->

## 패치내역

[버전 관리 규칙에 대해서...](https://dc-choi.tistory.com/62)

- v2.0.2 (22.09.30) : 출석 부분의 코드를 리펙터링 했습니다.
    1. 기존의 저장함수 하나에서 모든 처리를 진행하던 부분을 함수를 쪼개서 입력하였습니다.
    2. alert가 두번 발생하는 부분을 async/await와 new Promise를 적절하게 사용하여 한번만 발생하도록 하였습니다.

- v2.0.1 (22.09.29) : 출석이 입력되지 않는 버그와 413 payload to large 버그를 수정하였습니다.
    1. html상에서 id의 값을 잘 불러오지 못하는 버그가 발생했습니다. 이 부분을 수정하였습니다.
    2. 413 payload to large 버그가 발생했습니다. 초기에는 요청의 최대 사이즈 크기인줄 알아서 nginx와 express의 요청 설정을 수정하였으나,
    나중에는 jQuery AJAX의 기본 content-type이 x-www-form-urlencoded로 전송하는 것을 확인하였습니다.
    현재 출석을 입력할 때에만 content-type을 application/json로 설정합니다. RESTful하게 코드를 짜고 있기 때문에 이 부분은 추후에 변경할 예정입니다.

- v2.0.0 (22.09.28) : 기존의 프로젝트는 유지보수하기에 적합한 구조는 아니였습니다. 그 문제를 해결하기 위해 다음 사항들을 변경하였습니다.
    1. 유지보수하기 편하게 레이어를 나누었습니다.
    2. TypeScript를 적용하였습니다. 그에 따라 자연스럽게 모듈시스템도 TypeScript에 맞춰서 따라갔습니다.
    3. eslint를 적용하여 코딩컨벤션을 잘 유지하도록 하였습니다.
    4. DB 스키마를 변경하였습니다. 로그인 및 다른 요구사항이 생겼을 경우 잘 대응할 수 있도록 유연한 구조를 가지도록 변경했습니다.
    5. 로그인 기능을 추가하였습니다. 이제 계정별로 그룹을 관리 할 수 있습니다. 현재 초등부, 중고등부 같이 관리할 수 있습니다.
    6. 전화번호을 -빼고 입력하도록 수정하였습니다.

<details>
<summary> v1의 패치내역 </summary>

- v1.4.0 (22.09.06) : 기존 EC2의 Ubuntu 20.04.4 LTS에서 AWS Lightsail의 Amazon Linux 2 2.0.20220805.0로 변경
	1. 서버 유지비용이 너무 많이 들어서 비슷한 서비스를 찾던 중, Lightsail을 확인하고 Lightsail로 변경하였습니다.
	2. 더불어 AWS의 유지보수도 원활하게 받기 위해 OS 변경 작업도 진행하였습니다.

- v1.3.1 (22.07.30) : 출석부의 버그를 고쳤습니다.
	1. 매달 마지막 날이 정상적으로 찍히지않는 버그를 확인하고 수정했습니다.

- v1.3.0 (22.07.19) : Nginx를 이용하여 도메인, HTTPS를 적용하였습니다.
	1. 전화 번호를 저장할 때 양식에 맞춰서 자동으로 Form을 맞추도록 합니다.
	2. NPM으로 패키지를 관리하는 것이 아닌, Yarn으로 관리를 하도록 변경하였습니다.

- v1.2.1 (22.07.12) : Nginx를 이용하여 도메인, HTTPS를 적용하였습니다.
	1. 도메인 적용
	2. HTTPS 적용
	3. 리버스 프록시 적용

- v1.2.0 (22.06.18) : 디자인을 수정하였습니다.
	1. 프로젝트 디자인 수정.

- v1.1.1 (22.06.08) : 버그를 수정하였습니다.
	1. 학생수가 10명 이상일때, 출석 입력이 되지 않는 버그 수정

- v1.1.0 (22.03.03) : 기능 및 버그를 추가, 수정하였습니다.
	1. 학생 조회에서 검색시 페이징이 정상적으로 적용되지않던 버그 수정
	2. 그룹 CRUD 기능 추가
	3. DB 설계 변경으로 인한 사이드 이펙트 수정

</details>

## 향후 패치방향

1. 아직 통계 페이지가 완성되지않았습니다. 최대한 빠른 시일내에 완성할 예정입니다.
2. 아이들에 대한 상세정보를 적을 수 없습니다. 이에 따른 상세 정보 추가, 수정, 삭제하는 기능을 추가 할 예정입니다.
3. 아이들이 한살 먹으면 자동으로 아이들의 나이를 한살 증가시켜주는 기능을 추가 할 예정입니다. 초등부의 경우, 자동으로 학년도 올라가도록 설정 할 것이고, 중고등부로 올라올때 초등부의 그룹에서 자동으로 해제되도록 할 것입니다.
4. FrontEnd를 그냥 HTML, CSS, JS로만 관리하는 것이 아닌, Vue.js를 적용해야 할 거 같습니다.
5. TestCode를 작성해야 할 거 같습니다.
6. 자동으로 조 편성을 해주는 기능을 추가해야 할 거 같습니다. 중고등부는 초등부와 다르게 나이에 상관없이 조별로 활동하기 때문입니다.
7. 그룹별 학생 수가 많아지면 출석 입력이 느려지는 것을 확인했습니다. 프론트에서 스피닝 기능부분을 만들어야겠습니다.

## 느낀점

<details>
<summary> 22년 상반기 느낀점 </summary>

22.03.02: AWS를 이용해서 처음 배포를 진행했었는데 22년 3월 1일 22시부터 배포를 시작해서 다음날 02시까지 총 4시간의 배포를 진행했었습니다. 1.0.0 버전은 정말 간단하게 시작을 했었지만, 그래도 배포라는것이 정말 쉽지않고 내가 생각한만큼 잘 되지않는다는것을 배웠습니다. 다음에 배포를 진행할 경우 좀 더 테스트를 하고 계획을 세우고 배포를 진행하고 싶습니다. [참고링크: [Node.js] EC2에 Express APP 배포하기](https://dc-choi.tistory.com/50)

22.03.03: 페이징 버그 및 그룹 추가, 삭제, 수정 기능을 추가했습니다. DB 스키마를 변경함으로써, PM2로 매니징 하던 웹 서버를 종료 후 EC2에 설치된 Mysql Server에 새 DB 스키마를 적용하고 웹 서버에는 바뀐 소스코드를 적용한 다음 다시 시작을 하였습니다. 수동으로 서비스를 중지하고 배포를 진행했던 점이 좀 아쉬웠습니다. 이 프로젝트에 CI/CD를 적용시키고 싶습니다.

22.06.08: 오랜만에 버그 수정을 하였습니다. 10명 이상의 그룹에서 출석 내역을 저장하게 되면 페이로드가 1000개가 넘어, 요청이 완료되지 않았습니다. 기존 요청에서 입력한 칸의 데이터를 입력하는 API와 입력하지 않은 칸의 데이터를 입력하는 API를 나눴습니다. HTTP에 대해서 더 공부를 해야할 거 같습니다.

22.06.18: 부트스트랩을 이용해서 프론트의 디자인을 수정했습니다. 좀 더 보기 이쁜 화면이 사용자들에게 친숙하게 와닿을 것이라고 생각했고, 사람들에게 물어본 결과 수정이 필요하다고 판단하여 수정을 진행했습니다. 다음에는 전문적으로 수정할 수 있는 사람과 협업을 해야할거같습니다.

</details>

22.07.12: Nginx를 사용해서 리버스 프록시를 적용하였고, HTTPS까지 적용하였습니다. 또한, 도메인을 적용하여 기존의 알아보기 힘든 IP주소대신 도메인으로 접속할 수 있게 되었습니다. 기존의 외우기 힘들었던 IP주소 대신 도메인 주소로 접속이 가능하게 되어서 사용자들이 좋아했었습니다. [참고링크: [Deploy] Nginx 설치 및 HTTPS 적용](https://dc-choi.tistory.com/68)

22.07.19: 좀 더 가벼운 패키지 매니저인 Yarn을 도입하였습니다. 차이점으로는 조금 더 서버를 시작하는게 더 빨라진거같습니다. 또한, 자동으로 전화번호 Form을 완성하도록 수정하였습니다.

22.07.30: 출석부 매달 마지막 날이 그 전달의 마지막날을 찍고있는 버그를 확인하고 수정했습니다. 테스트가 정말 중요한거같습니다. 여러번 확인한다는것은 언제나 옳은거 같습니다.

22.09.06: 기존 EC2에서 Lightsail로 변경하였습니다. 변경의 가장 큰 이유는 감당할 수 없는 요금 때문이였습니다. 또한 OS도 우분투에서 아마존 리눅스로 변경하였습니다. AWS에서는 아마존 리눅스를 사용하는 것이 유지보수에 도움이 된다는 조언을 들었기 때문입니다.

22.09.28: v2.0.0으로 변경하였습니다. 기존의 소스코드는 너무 유지보수가 어려워서 아예 버전을 올려서 유지보수를 진행하게 되었습니다. 클린 아키텍처와 클린 코드에 대해서 생각하게 되었고, 좋은 구조란 사용자의 요구사항에 따라 유연하게 변경될 수 있는 구조라고 생각했습니다. 계속해서 유지보수를 열심히 해야겠습니다.

22.09.29: 출석부가 재대로 입력이 되지 않는 버그가 발생했습니다. 또한 413 에러를 만났는데, 요청의 기본 설정을 변경해도 그대로 에러가 나는 것을 확인했습니다. 확인해본 결과 jQuery AJAX의 기본 content-type이 x-www-form-urlencoded로 전송하는 것을 확인하였습니다. Axios의 기본 content-type이 application/json인 것을 생각하면, 생각지도 못한 오류를 만났던 거 같습니다. REST API를 사용하는 경우에는 application/json로만 데이터를 주게 받게 되는데, 이 부분을 한번 더 상기할 수 있었고, HTTP에 대해서 다시 한번 공부를 해야겠다고 결심했습니다.

22.09.30: 출석부 버그를 고치면서 리펙터링을 진행했습니다. 기존의 저장함수 하나에서 모든 처리를 진행하던 부분을 함수를 쪼개서 입력하였습니다. 가독성이 더 좋도록 수정하였고, 기존의 alert도 두번이 나타나는 로직을 한번만 나타나도록 해야겠습니다. alert가 뜨는 동안 사용자가 기다려야해서 프론트에 스피닝 기능을 추가할 예정입니다.
