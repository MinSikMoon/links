#### postgresql 시간, 숫자형
- https://www.postgresql.org/docs/9.1/static/datatype-numeric.html
- https://www.postgresql.org/docs/8.1/static/functions-datetime.html#FUNCTIONS-DATETIME-CURRENT
#### postgresql 데이터형 jdbc 매핑
http://grokbase.com/t/postgresql/pgsql-jdbc/10a87m2ze3/postgresql-data-types-mapped-java-classes-for-jdbc
````
1 data_type_id Data Type Id java.lang.Integer int4 11

2 smallint_type Smallint Type java.lang.Integer int2 6
3 int_type Int Type java.lang.Integer int4 11
4 bigint_type Bigint Type java.lang.Long int8 20
5 decimal_type Decimal Type java.math.BigDecimal numeric 18

6 numeric_type Numeric Type java.math.BigDecimal numeric 12
7 real_type Real Type java.lang.Float float4 14
8 doubleprecision_type Doubleprecision Type java.lang.Double float8 24
9 serial_type Serial Type java.lang.Integer int4 11

10 bigserial_type Bigserial Type java.lang.Long int8 20
11 varchar_type Varchar Type java.lang.String varchar 30
12 char_type Char Type java.lang.String bpchar 30
13 text_type Text Type java.lang.String text 2147483647

14 bytea_type Bytea Type [B bytea 2147483647
15 date_type Date Type java.sql.Date date 13
16 time_type Time Type java.sql.Time time 15
17 timetz_type Timetz Type java.sql.Time timetz 21
18 timestamp_type Timestamp Type java.sql.Timestamp timestamp 29

19 timestamptz_type Timestamptz Type java.sql.Timestamp timestamptz 35
20 interval_type Interval Type org.postgresql.util.PGInterval interval 49
21 boolean_type Boolean Type java.lang.Boolean bool 1

22 point_type Point Type org.postgresql.geometric.PGpoint point 2147483647 23
linesegment_type Linesegment Type org.postgresql.geometric.PGlseg lseg
2147483647

24 box_type Box Type org.postgresql.geometric.PGbox box 2147483647
25 path_type Path Type org.postgresql.geometric.PGpath path 2147483647

26 polygon_type Polygon Type org.postgresql.geometric.PGpolygon polygon
2147483647 27 circle_type Circle Type org.postgresql.geometric.PGcircle
circle 2147483647

28 cidr_type Cidr Type java.lang.Object cidr 2147483647
29 inet_type Inet Type java.lang.Object inet 2147483647
30 macaddr_type Macaddr Type java.lang.Object macaddr 2147483647

31 bit2_type Bit2 Type java.lang.Boolean bit 2
32 bitvarying5_type Bitvarying5 Type java.lang.Object varbit 5

````


#### sql poser architect 테이블 생성 강의
https://www.youtube.com/watch?v=hHBSMGr6yDg
#### POSTGRES 사용자 생성 권한
http://www.gurubee.net/lecture/2939
#### 같거나 작은 합? count over? over에 대한 상세한 
- http://blog.naver.com/PostView.nhn?blogId=whitefre&logNo=140148769754
- 출처: http://javaexpert.tistory.com/503 [올해는 블록체인이다.]
````sql
COUNT(expr) OVER(analytic_clause)

- 같거나 작은 조건에 대한 갯수 반환

/* 부서번호가 50인 부서 지원에 대해 각 직원의 급여보다 같거나 적게 받는 사람에 대한 누적 합을 반환. */

SELECT employee_id, salary

, COUNT(*) over(ORDER BY salary) AS "Count"

FROM employees

WHERE department_id = '50';
````


#### 다중 like 여러개 like 하기
````sql
오라클 다중 LIKE 사용하기 1.OR 사용?1
WHERE (name LIKE '%홍%' OR name LIKE '%김%' OR name LIKE '%서%')
2. 정규식 사용 (10g 이상)?
WHERE REGEXP_LIKE(name, '홍|김|서')
출처: http://yjcorp.tistory.com/16 [yj factory]
````

#### DELETE
````sql
DELETE FROM table T WHERE T.a = ~~~ 
````
#### LEFT JOIN, NVL
nvl : http://applejara.tistory.com/303
````SQL
select e.empno, e.ename, e.JOB, DECODE(mgr.ename,null,'관리자없음',mgr.ename)--NVL2(mgr.ename, mgr.ename, '노관리자') 관리자 --NVL은 숫자인수로만 들어감
from emp e
join dept d on d.deptno = e.deptno 
left join emp mgr on mgr.empno = e.mgr
order by e.job;

````

#### with, union all
http://powerofwriting.tistory.com/entry/Oracle-WITH-%EA%B5%AC%EB%AC%B8-%EC%98%88%EC%A0%9C
```` sql
with analyst as(
    select * from emp e
    where e.job = 'ANALYST'
),
clerk as (
    select * from emp e
    where e.job = 'CLERK'
)

select * from analyst, clerk; --전체 조인을 걸어줌 2*4

with analyst as(
    select * from emp e
    where e.job = 'ANALYST'
    
    union all
    
    select * from emp e
    where e.job = 'CLERK'
)

select * from analyst; -- 총 6건 2+4
````
#### case
https://wikidocs.net/3939
#### diffrence between 단일함수 그룹함수
https://wikidocs.net/3941
#### DISTINCT
https://www.w3schools.com/sql/trysql.asp?filename=trysql_select_no_distinct
````SQL
SELECT distinct city,Country FROM Customers
order by country
````
#### 날짜 관련
http://www.gurubee.net/lecture/1026
#### sql 스크립트 실행
````sql
-- 3. SCOTT USER로 접속해서 스크립트를 실행. 
SQL> CONN scott/tiger
SQL> @$ORACLE_HOME/sqlplus/demo/demobld.sql   
````
