### Promise-list




https://user-images.githubusercontent.com/60090391/131777468-97a12e02-4924-4aa0-bd6c-9358fd2111ce.mov




### 배포 : https://wanted-freeonboarding.github.io/promise-list/


### figma : https://www.figma.com/file/Yn2T1PrpMAvqXM8986a3FX/wanted-team-library?node-id=312%3A2

<img width="784" alt="스크린샷 2021-09-02 오후 12 42 43" src="https://user-images.githubusercontent.com/60090391/131778376-8b9e51fb-753a-4be1-bacd-6ce72d512767.png">
(시간이 부족해 미처 랜딩페이지를 추가하지 못해 아쉬운 마음에... 추후 업데이트를 기대해주세요!😜)

- 기획 컨셉 : 나와의 약속
    - MZ세대는 보다 개인화되어 집단보다 개인의 가치를 추구하는 성향이 있다.

        → to do list of the MZ, by the MZ, for the MZ !

    - 자신을 소중히 함은 물론 자신과의 *약속(Promise)*도 소중히 여기므로써 자존감을 높이고 
      
      자기 발전을 추구할 수 있는 가치를 선사할 수 있는 웹 서비스를 제공한다.
      (개발자에게 promise는 조금 다른 의미지만...)
    - 기존의 투두리스트와 형식이 같으므로 당연히 일정도 효율적으로 관리할 수 있다.
    - 로그인 기능을 추가하여 다른 사람과의 약속도 함께 추가할 수 있게 만들 예정이다.
   
- 디자인 : 카카오톡 형식
    - 메인 컬러 : 미정(어쩌다보니 핑크)
    - 이유
        - 1이 사라지지 않으면 초조한 현대인들의 심리를 자극하여 해야 할 일을 미루지 않고 보다 성실히 마무리할 수 있도록 독려함
        - 친숙한 디자인으로 사용자가 거부감없이 보다 빠르게 적응할 수 있음
- 기능
    - ToDoList 기능 구현 목록
        - Create : 만들고
        - Read : 읽고
        - Update : 수정하고
        - Delete : 지운다!
        - 그리고 Node.js 기반의 api를 이용하여 간단한 요청을 주고 받습니다.
        
    - 구현하기 위해 사용된 기술 스택
        - HTML
        - CSS
        - TS
        - React
        - Redux
        - Redux saga



- git flow
    - main (배포 가능 수준) ← develop (개발 중) ← feature/기능

### 설치 및 실행 방법
```
git clone https://github.com/WANTED-freeOnBoarding/promise-list.git
yarn install
tsc -w 
yarn start 
```
- `tsc - w` : -w옵션은 실시간으로 컴파일 해주므로 다른 터미널에서 켭니다.
- `yarn start` : 마찬가지로 계속 돌아가야 하므로 또 다른 터미널
