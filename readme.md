***********************************

login : 
    http://65.0.255.209:3000/api/v1/auth/login
    method "POST"
    payload = 
    
    {
    "username" : "your user name",
    "password" : "your password"
    }   

signup : 
    http://65.0.255.209:3000/api/v1/auth/signup
    method "POST"
    payload = 
    
    {
    "username" : "your user name",
    "password" : "your password"
    }  

create a book : 

    http://65.0.255.209:3000/api/v1/book/create

    method "POST"

    {
    "title" : "second Book",
    "summary": "this is the second book summary"
    }

update a book 

    http://65.0.255.209:3000/api/v1/book/update

     method "POST"

    {
    "id" : "654cb2cac68414311461817b",
    "title" : "The second Book",
    "summary": "this is the second book summary"
    }

read a book 

    http://65.0.255.209:3000/api/v1/book/read/:id

    method "GET"

list all books 

    http://65.0.255.209:3000/api/v1/book/list

delete a book

  http://65.0.255.209/:3000/api/v1/book/delete/:id

  method "DELETE"

