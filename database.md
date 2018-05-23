
### 오라클 강좌
http://www.gurubee.net/oracle/sql

https://wikidocs.net/book/550
### 포스트그레 postgre sql
http://www.gurubee.net/postgresql/basic
### 오라클 아이디 비번
````
윈도우라면 우선 제어판 서비스에서 oracle service를 확인하시구요,
OracleService*** 로 시작되는 것이 오라클 메인 서비스 입니다. 확인하시고 start 하시구요,
-->(로컬디비 관리자) 로 들어가보세요.
c:>sqlplus / as sysdba 
그리고 사용자를 확인하실려면 
SQL>select username from dba_users;
로 확인하고 비번을 수정할 사용자를 찾았으면.,,
SQL> alter user 사용자명 identified by 바꿀비번;
이렇게 해보세요...
http://ojc.asia/bbs/board.php?bo_table=oracleQnA&wr_id=8610
````
#### 인스턴스? 메모리 + 프로세스
#### 프로세스 = 서버프로세스 + 백그라운드 프로세스
#### LGWR = LOG WRITER = commit 때, redo log buffer 차있을때
#### PMON = Process Monitor
#### SYMON = System Monitor
#### CKPT = CheckPoint = 발동되면 실제파일에 쓴다
#### 볼메트릭? Table 생성시 암호화, 개인정보가 있는 테이블을 암호화
#### 컨트롤 파일? control file
#### Redo Log File 
````
모든 변경사항을 알고있고, 이걸로 장애시점전으로 되돌아갈 수 있다. 아카이브 모드? 트랜잭션 모드?
````
#### 성능 : 액세스 해야할 블록의 갯수 not row의 갯수
#### SGA : 오라클 핵심, 인스턴스 제어 정보를 가지는 영역
#### 데이터 버퍼 캐시 : 데이터 조회, 변경이 실제로 일어난다. 
````
Free Buffer, Pinned Buffer, Dirty Buffer
````
#### 리두로그 버퍼?
#### shared pool : 옵티마이저와 밀접, SQL파싱, 실행계획 내용 저장
#### 결국 SGA에서 처리되고 백그라운드 프로세스에의해 파일로 써진다.
````
오라클은 모든 데이터를 메모리에 올려두고 한다.
서버 버퍼는 Free Buffer를 할당받아야 한다. 하지만 DB Buffer Cache를 누가 다 차지하고 있다면, 다른 서버 프로세스가 Free Buffer를 할당받지  못한다. 왜냐면 다 Pinned Buffer
````
#### 캐시 Cache 
````
라이브러리 캐시 : 쿼리문 재활용해 결국 io를 줄이고 데이터 버퍼 캐시를 적게 쓴다. 
````
#### 정렬작업
PGA안의 Sort Area에서 한다.
#### 인덱스 index 왜?
테이블 적게 쓰고 io 적게 하자
#### Fetch Size : 데이터 가져오는 사이즈
````
if 전체 데이터 100건, fetch size 10이면 dbms를 10번 호출
but fetch size를 너무 크게해버리면 메모리영역 많이 먹어서 조정이 필요하다.
````
````
DML은 SELECT와 FETCH만 없는 차이
1. SELECT 해서 Buffered에 올리고
2. DD에서 LOCK을 살피고
3. LOCK 없으면 작업진행
````

#### 체크포인트?
메모리 내용과 DISK 내용을 내린다. 
#### 커밋?
DATA를 영구히 반영한다.
````
Redo Log Buffer가 리두에 내리는 걸 commit한다. 즉 
어떤 시점에도 select에 lock이 안걸리는데
변경된 내용은 redo, 변경이전은 undo log buffer에 있고, undo를 셀렉트해서 보여줌.
````


