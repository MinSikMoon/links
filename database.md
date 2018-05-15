
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
