# timer_records  
  
![timer_record](https://user-images.githubusercontent.com/89592727/147553525-d2067d51-a9a0-4f12-964e-0794264d47c4.png)
  
  
  
테스트 페이지 : https://hellou8363.github.io/timer_records
  
Start : 시작  
Stop : 정지 - Start를 누르면 다시 진행  
Record : 현재 경과시간을 타이머 하단에 출력  
Circle Button : 시간 초기화(reset)  
  
.....  
  
setInterval 사용으로 1000ms당 second(초)가 1씩 증가하여 59까지 출력 후 60이 되면 second = 0;으로 초기화 후  
minute(분) 1증가 -> minute도 동일하게 59까지 출력 후 60이 되면 minute = 0;으로 초기화 후  
hour(시) 1증가 하는 방법으로 구현  
  
***  
setInterval은 타이머가 취소 될 때까지 반복  
  -> clearInterval 함수로 호출 스케줄링 취소  
  
setInterval 함수 사용 시 실행에 대한 제약이 없으면 setInterval를 호출(스톱워치의 경우 Start 버튼 클릭으로 호출)할 때마다  
setInterval 호출이 늘어나 배속증가 현상이 생기며 완전 정지를 위해 호출 된 횟수만큼 취소해야 함  
  
setInterval의 중복 해결 방법 :  
active = false;로 선언 및 초기화 후 Start 버튼을 클릭 할 때 if문으로 조건 확인 후 실행  
  -> false일 때, 타이머 실행 및 false -> true  
  -> true일 때, 현재 타이머 실행 중으로 Start 버튼을 눌러도 호출 X  
***


