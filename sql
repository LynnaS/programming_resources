<!DOCTYPE html>
<html>
<head>
    <title>Programming Resources</title>

</head>

<body>
    <header>
        <h1>Programming Resources</h1>
        <h3>Homework for week 8.</h3>
    </header>

    <nav class="navbar navbar-default">
        <div class="container-fluid">
        <ul class="nav navbar-nav">
            <li class="active"><a href="index.html">Home</a></li>
            <li><a href="backend_server.html">Backend Server</a></li>
            <li><a href="git_problem.html">Git Problem</a></li>
            <li><a href="javascript.html">Javascript</a></li>
            <li><a href="sql.html">SQL</a></li>
            </ul>
        </div>
    </nav>

    <main>
        <h2>To SQL or to noSQL?</h2>

        <p>According to <a href="www.sqlcourse.com/intro.html">sqlcourse.com</a> Structured Query Language is the standard database language.It is a relational database.</p>
        <p>To quote <a href="https://en.wikipedia.org/wiki/NoSQL"</a> wikipedia "A NoSQL (originally referring to "non SQL", "non relational" or "not only SQL") database provides a mechanism for storage and retrieval of data which is modeled in means other than the tabular relations used in relational databases.".</p>

        <p>I rather liked <a href="http://www.thegeekstuff.com/2014/01/sql-vs-nosql-db/?utm_source=tuicool"</a> the geek stuff site. There was a lot of comparisons between sql and nosql. Some of that information is in the table below. If you read further the site explains the various languages. Clearly laid out.</p>
        
        <p>
         <div class="container">
            <h2>Comparing SQL and noSQL</h2>            
            <table class="table">
                <thead>
                    <tr>
                        <th>SQL</th>
                        <th>NoSQL</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>relational database</td>
                        <td>non-relational or distributed database</td>
                    </tr>
                    <tr>
                        <td>table based databases, rows of data</td>
                        <td>document based, key-value pairs, graph databases, wide column stores</td>
                    </tr>
                    <tr>
                        <td>predefined schema</td>
                        <td>dynamic schema for unstructured data</td>
                    </tr>
                    <tr>
                        <td>vertically scalable, scaled by increasing the horse-power of the hardware</td>
                        <td>horizontally scalable, scaled by increasing the databases servers in the pool of resources to reduce the load.</td>
                    </tr>
                    <tr>
                        <td>sql defines and manipulates the data, very powerful</td>
                        <td>focused on a collection of documents, syntax varies from one database to another</td>
                    </tr>
                    <tr>
                        <td>examples: MySql, Oracle, Sqlite, Postgres and MS-SQL</td>
                        <td>examples: MongoDB, BigTable, Redis, RavenDb, Cassandra, Hbase, Neo4j and CouchDb</td>
                    </tr>
                    <tr>
                        <td>good for complex queries</td>
                        <td>weaker, not good for complex queries</td>
                    </tr>
                    <tr>
                        <td>not best fit for hierarchical data storage</td>
                        <td>better for the hierarchical data storage as it follows the key-value pair way of storing data similar to JSON data</td>
                    </tr>
                    <tr>
                        <td>best fit for heavy duty transactional type applications, as it is more stable and promises the atomicity as well as integrity of the data</td>
                        <td>not comparable and sable enough in high load and for complex transactional applications</td>
                    </tr>
                    <tr>
                        <td>lots of support</td>
                        <td>rely on community support, few experts</td>
                    </tr>
      
                </tbody>
            </table>
        </div>

        <p><a href="http://www.thewindowsclub.com/difference-sql-nosql-comparision"</a>The Window Club had a nice almost point form format. Topic areas were: What is it?, How does it work?, Basic features, Limitations.</br>
        The site describes noSQL as structured storage and that traditional SQL is one of these ways to store information. I like that the author says that both ways are good. The new buzz on noSQL does not mean it is better. You have to figure out which one is best for your task at hand.</p>

    </main>


    <footer>
        <p>&copy; Lynna, March 2017</p>
    </footer>

</body>
</html>
