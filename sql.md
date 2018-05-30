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
