# SearchableCookbook4Coder
SearchableCookbook4Coder

<h3>Background</h3>
Computer techonolgies are growing fast, and there are at least 5 skills are needed in one real project. As a coder, it would be difficult for you to remember all statements exactly for one specified language. This may even worse when two programming languages have similar statements, but with huge differences in detail. <p>

I build this simple app to provide pluginable, searchable, runnable and copiable statements for coders.<p> 

<h3>Almost completed plugins/cookbook:</h3><p>
1. Javascript adavanced topics and memory leak<p>
2. NodeJS<p>
3. ExpressJS<p>
4. AngularJS<p>
5. JQuery selectors<p>
6. Bootstrap<p>
7. Mongodb<p>
8. Java Jersey, Spring and Hiberante<p>

<h3>Coming soon:</h3><p>
1. Better integrated pages for above skills<p>
2. Html5<p>
3. SocketIO<p>
4. Mobile development<p>
...<p>

<h3>Note: You can also add/refine any documents to this project.</h3><p>


<h3>Setup:</h3><p>
1. git clone https://github.com/jimuyouyou/SearchableCookbook4Coder.git<p>
2. click index.html to run<p>
3. type any keyword in the search input field <p>

Screen shot:<p>
<img src="screenshot_scc.jpg"/><p>

<h3>Plugin development process:</h3><p>
1. Create a new folder under plugins, such plugins/PhoneGap<p>
2. Add any pages to PhoneGap folder, preferabley html, but you can put any format<p>
3. cd ../bin<p>
4. ./refresh.sh <p>
This simple linux script will link PhoneGap as a new plugin listed as left bar, and all pages under PhongeGap will be composed to one file named PhoneGap/index.html as a link. Of course, it is searchable!<p>
5. open index.html page again and you will be able to search what you have just created rapidly<p>

<h3>Toolsets already implemented:</h3><p>
1. searchable link - a_search.js under lib folder<p>
2. searchable table - table_search.js under lib folder<p>
3. configurable quick search fields - pCfg.js under lib folder<p>


<h3>License: MIT</h3>