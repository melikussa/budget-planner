## First time setup

1) Install JDK and JRE 
1.a) JRE download & install (https://www.java.com/download/ie_manual.jsp)
1.b) JDK Download x64 windows installer from https://www.oracle.com/pk/java/technologies/downloads/#jdk22-windows and run the installer.
1.c) Make sure to update environment variables: create JAVA_HOME system environmental variable with value like "C:\Program Files\Java\jdk-22". Also add "C:\Program Files\Common Files\Oracle\Java\javapath" to Path system environmental variable.
1.d) Confirm installation works by running `java -version`. 

2) Install Maven.
a) Download stable zip form https://dlcdn.apache.org/maven/maven-3/3.8.8/binaries/apache-maven-3.8.8-bin.zip and unzip it somewhere like C:\Maven
b) Make sure to update environment variables: make sure "C:\Maven\apache-maven-3.8.8\bin" (or similar) is added to Path system environmental variable.
c) Confirm installation works by running `mvn -version`.


## Launching app

1) Navigate to server/budgetplanner
2) Run `mvn spring-boot:run`
3) Check results on relevant port (default will be http://localhost:8080/)