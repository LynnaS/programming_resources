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
        <h2>Javascript questions</h2>
        
        <p>To find answers to my javascript questions I would go to <a href="https://www.w3schools.com/js/">w3schools</a> , or </br>
        <a href="https://www.javascript.com/learn/javascript/functions>javascript.com</a> in their 'learn' area.</br>
        I have been studying with <a href="https://www.codecademy.com/learn/javascript">codecademy</a>.</br>
        I have also used <a href="http://stackoverflow.com/questions/tagged/javascript">stackoverflow</a> to try to find answers to questions.</p>
    
        <h2>How promises work in ES6</h2>
        
        <p><a href="">Ponyfoo describes a promice as </a>"a proxy for a value that will eventually become available". I found this resource quite confusing.</p>
        
        <p>Dave Atchley of <a href="http://www.datchley.name/es6-promises/">deatchley.name</a> describes promises as "much more than just an escape from callback hell". "Promises give us a way to handle asynchronous processing in a more synchronous fashion". Apparently callbacks don't let us use regular language features like "return" or "throw". This site then goes on to show us now to write promices, consume promices, correcting errors, etc. It looked pretty complicated.</p>
    
        <p><a href="http://jamesknelson.com/grokking-es6-promises-the-four-functions-you-need-to-avoid-callback-hell/"<James Nelson</a> has a site with a great comparison between callbacks and promises. The table befow has the information he gives.
         <div class="container">
            <h2>Comparing Callbacks and Promises</h2>            
            <table class="table">
                <thead>
                    <tr>
                        <th>Callback</th>
                        <th>Promise</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>are functions</td>
                        <td>are objects</td>
                    </tr>
                    <tr>
                        <td>are just blocks of code which can be run in response to events such as as timers going off or messages being received from the server. Any function can be a callback, and every callback is a function.</td>
                        <td>are objects which store information about whether or not those events have happened yet, and if they have, what their outcome is.</td>
                    </tr>
                    <tr>
                        <td>are passed as arguments</td>
                        <td>promises are returned</td>
                    </tr>
                    <tr>
                        <td>are defined independently of the functions they are called from – they are passed in as arguments. These functions then store the callback, and call it when the event actually happens</td>
                        <td>are created inside of asynchronous functions (those which might not return a response until later), and then returned. When an event happens, the asynchronous function will update the promise to notify the outside world.</td>
                    </tr>
                    <tr>
                        <td>handle success and failure</td>
                        <td>don’t handle anything</td>
                    </tr>
                    <tr>
                        <td>are generally called with information on whether an operation succeeded or failed, and must be able to handle both scenarios.</td>
                        <td>don’t handle anything by default, but success and failure handlers are attached later</td>
                    </tr>
                    <tr>
                        <td>can represent multiple events</td>
                        <td>represent at most one</td>
                    </tr>
                    <tr>
                        <td>can be called multiple times by the functions they are passed to</td>
                        <td>can only represent one event – they are either successful once, or failed once</td>
                    </tr>
                </tbody>
            </table>
        </div>
        
        <p>Mr. Nelson says that there are only four promises that you need to learn: new Promise(fn), promise.then(onResolve, onReject), promise.catch(onReject), and Promise.all([promise1, promise2, …]). I have to admit that it all looks confusing to me but he does lay it out nicely (if you know enough to be able to follow him).</p>
        
        <p><a href="http://exploringjs.com/es6/ch_promises.html">Exploringjs</a> is a chapter out of a book. I just looked at the outline, which is what pops up, and I thought it looked like it could be a book on its own. Promises are described as alternatives to callbacks for asynchronous computation. I googled "asynchronous computation" and found out that it means that a computation does not have to be finished before it goes onto another computation. There is lots of detail and clear examples.</p>
        
        <p><a href="https://www.promisejs.org/">Promisejs</a> discusses the motivation for using a promise, what it is, how to construct one, and browser links for your head. The site has patterns, API, generators, and implementation. I think it could be a good reference place.</p>
       
    </main>

    <footer>
        <p>&copy; Lynna, March 2017</p>
    </footer>

</body>
</html>
