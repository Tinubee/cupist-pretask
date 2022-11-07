## 큐피스트 사전과제

![Home](https://user-images.githubusercontent.com/53461370/200212444-9562ce6f-a69c-4ea8-861a-ce6f722126c2.gif)
![EditProfile](https://user-images.githubusercontent.com/53461370/200212448-51ced80e-4a7c-4260-9734-83650dbd8eae.gif)


## 구현 기술

### 홈화면
- 페이지 진입시 오늘의 추천 api와, 추가 추천 api react-query 사용해여 동시 호출
- 카드 정보에 소개가 있을 경우 기본정보 하단에 노출 없을 경우 기본정보 하단에 작업, 거리, 키 노출
- 오늘의 추천 api로 가져온 항목은 오늘의 추천 태그 노출
- 리스트 하단 도달시 추가추천 목록 불러오기
- 맞춤 추천 선택 클릭시 추천 api 최상단 노출
- x 버튼 클릭시 목록에서 삭제
- 상단 네비 오른쪽 아이콘 클릭시 프로필수정 페이지로 이동

### 프로필
- 페이지 진입시 api호출하여 내정보 불러오기
- 키, 체형, 학력 클릭시 팝업으로 수정 기능

## 사용 모듈
- react-navigation : Tab 구성을 위해서 사용
- syted-component : 스타일링을 위해사용
- react-native-modal : 프로필 수정시 설정화면을 위해 사용
- recoil : 전역 상태관리를 위해 사용
- material-top-tabs : 상탄 탭구성을 위해 사용
