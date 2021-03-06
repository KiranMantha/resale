## Setup

1. Install the required softwares listed here   
    1. [Visual studio code](http://code.visualstudio.com/)
    2. [dotnet core sdk](https://www.microsoft.com/net/download/core#/sdk)
    3. [MongoDb](https://www.mongodb.com/download-center#community)
    4. [RoboMongo](https://robomongo.org/download)
    5. Install c#, c# extensions, asp.net helper extensions in visual syudio code extensions menu.
2. run `dotnet restore` to restore all the packages.
3. run `dotnet build` to build the project
4. run `dotnet run` to start the webapi


## Bulk insert mongodb data

1. copy and place the attached dataset json contained in this application.
2. run `mongoimport --db <your-database-name> --collection <your-collection-name> --file <location>primer-dataset.json`


## Helpful Links

https://siderite.blogspot.com/2016/07/aspnet-core-web-api-with-visual-studio.html#at3511413001

https://www.linkedin.com/pulse/aspnet-core-10-angular2-mongodb-visual-studio-code-celimpilo-mncwango

https://www.codeproject.com/Articles/1151842/Using-MongoDB-NET-Driver-with-NET-Core-WebAPI

https://www.codeproject.com/Articles/1077319/Csharp-MongoDB-Polymorphic-Collections-with-Generi

https://github.com/fpetru/WebApiMongoDB
