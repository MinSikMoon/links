#### 기초강의 
https://backlog.com/git-tutorial/kr/intro/intro1_3.html
#### what is branch? 브랜치따서 깃헙에 올리기
https://www.slipp.net/questions/9
````git
	자바지기
2012-10-20 16:17 
github에 새로운 브랜치를 만드는 방법이 어찌될까? 의외로 단순하다.

먼저 git clone을 통해 저장소를 checkout한다.

$ git clone https://github.com/javajigi/slipp-study-1.git $ cd slipp-study-1

master를 기준으로 로컬에 새로운 브랜치를 생성한다.

$ git checkout -b javajigi master

원격 브랜치가 이미 존재할 경우 원격 브랜치를 기준으로 로컬 브랜치를 생성하는 경우는 다음과 같다. $ git checkout -b javajigi origin/javajigi

위 명령을 실행하면 master 브랜치를 기준으로 로컬에 javajigi 브랜치가 생성된다.

$ git branch * javajigi master

위와 같이 local 브랜치를 생성한 후 다음 명령을 실행한다.

$ git push (예 : git push origin javajigi) $ git push : (예 : git push origin javajigi:develop)

위 명령을 실행하면 github에 javajigi라는 브랜치가 생성된다.

$ git branch -a * javajigi master remotes/origin/HEAD -> origin/master remotes/origin/javajigi remotes/origin/master

로컬 브랜치를 원격 브랜치와 연결하려면 다음과 같이 연결할 수 있다.

$ git branch --set-upstream javajigi origin/javajigi

````

#### what is fork?

#### 로컬, 리모트, 왜 분산? 
````
평소에는 내 PC의 로컬 저장소에서 작업하다가 작업한 내용을 공개하고 싶을 때에 원격 저장소에 업로드 합니다. 
물론 원격 저장소에서 다른 사람이 작업한 파일을 로컬 저장소로 가져올 수도 있습니다.
````
