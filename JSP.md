#### difference between jspx VS jsp
````
                                               Shay Shmeltzer-Oracle                    2008. 11. 17 오전 5:56                                     (611490에 대한 응답)                      jspx is an XML format for creating JSF pages.
 There are several reasons we thing jspx is better than simple jsp
 One is that it forces the separation of code from the view layer more strictly - there is no place to write java scriptlets in JSPX.
 The other is that since it is XML it is easier to manipulate the file with XSL transformations - for example to run an XSL that will upgrade your 10.1.3 ADF Faces components to Trinidad component in JDeveloper 11g. 
                      좋아요 좋아요 0개 표시
````
