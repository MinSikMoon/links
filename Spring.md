#### mybatis spring 테스트 연동
http://all-record.tistory.com/175


#### 컨트롤러 테스트 was 없이
http://doublesprogramming.tistory.com/175


#### git에서 clone한 메이븐 프로젝트가 이클립스 톰캣에서 인식안될때
- 일단 property -> facets에서 dynamicwebapp, html, javascript 추가하면 content폴더가 생기면서 web.xml생겨서 인식됨.
- 이후에 deployment 어쩌구 거기에서 maven depository추가하고 경로들 고쳐주면 작동된다.


#### json 리퀘 리스 해줄때 리스폰스 리퀘스트 ajax
````xml
<!-- jackson -->
<dependency>
          <groupId>com.fasterxml.jackson.core</groupId>
          <artifactId>jackson-databind</artifactId>
          <version>2.5.1</version>
</dependency>

해주고
vo 들 만들어준다음에
requestbody, responsebody 어노테이션해주면vo에 맞게 json으로 나감
@RequestMapping(value = "/", method = RequestMethod.POST)
	public @ResponseBody ResponseVo message(@RequestBody RequestVo request){
	 리스폰스vo만들어주고 
	 return response;
	}
````


#### 메이븐 maven으로 빌드할때
- 한번 clean해서 말아올린것들 다 지워주고 다시 패키징해준다.
#### 갑자기 클래스들 못찾겠다고 할때
- 프로젝트 clean해주고 deploy assembly 확인해주고 다시 build project해준다.
#### web.xml 인식 안되던것들 해결
-> web deployment assembly에 webapp폴더를 소스, deploy path를 루트로 하니까 작동됨.
#### 스프링 session sessionattributes
http://mindols.tistory.com/106

#### 보통
controller, vo -> service(vo) -> manager(vo) -> dao(vo) -> sqlmap

#### 스프링 폴더구조 설정들경로
http://pgm-progger.blogspot.com/2014/01/spring-base-setting.html

#### web.xml 추가 이클립스 eclipse
https://stackoverflow.com/questions/15380125/cannot-add-a-project-to-a-tomcat-server-in-eclipse
#### 이클립스 스프링 프로젝트 생성
메이븐 프로젝트로 생성한다.   
#### boot 좋은점
https://start.goodtime.co.kr/2014/10/%EC%9D%B4%EC%A0%9C%EB%8A%94-spring-boot%EB%A5%BC-%EC%8D%A8%EC%95%BC%ED%95%A0-%EB%95%8C%EB%8B%A4/
#### void로 리턴하는 메소드있다면?
````
만약 s3라는 메소드가 있는데, return이 void 면 s3라는 뷰를 찾게 된다. 
뷰폴더 안에서. s3.jsp라는 얘를 찾음.
````

#### methodNameResolver
https://m.blog.naver.com/PostView.nhn?blogId=q1q3q5&logNo=10104135462&proxyReferer=http%3A%2F%2Fwww.google.com%2Furl%3Fsa%3Dt%26rct%3Dj%26q%3D%26esrc%3Ds%26source%3Dweb%26cd%3D5%26ved%3D0ahUKEwiygKXgibzbAhVGe7wKHbO4B4MQFghPMAQ%26url%3Dhttp%253A%252F%252Fm.blog.naver.com%252Fq1q3q5%252F10104135462%26usg%3DAOvVaw1pbLdaN_zj_gNgNKXoqRMn
````
- 보통 controller에 장착되는 클래스다. 
- web.xml에서 디스패처 장착할때 디스패처 config파일에서 nameresolver bean 장착 보통시킨다. 이때 nameresolver의 속성(property) 중에 paramName이라는 게 있다. 
- 장착시킬때  <property name = "paramName">
          <value>request</></>
  이런식으로 해서 paramName 정해주고 또,
  컨트롤러 장착시킬때 
  <bean id = "abcController" name="/abc" class = "컨트롤러클래스">
    <property name = "nameResolver" ref = "내꺼 리졸버 id"
  해주면
  ~~~~url/abc?request=Method명
  이런식으로 요청보내면 해당컨트롤러의 메소드를 실행시킬 수 있게 된다. 
결국 디스패처에서 쓸수 있게 리졸버 한개 장착해주고(장착할때 paramNmae속성 정해주고) 각 컨트롤러에 이 리졸버 주입시켜주면 쓸수 있음. name으로 url지정하고 메소드까지 실행시키니 굿굿 

 그래서 컨트롤러 등록할때 id안넣고 name="/쓰고싶은url" class="컨트롤러클래스" aurowire="byname"으로 해서 리졸버 삽입한 컨트롤러 등록하기도 한다.
````
