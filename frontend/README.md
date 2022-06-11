JS AMAZONA
1. Create Folder Structure
   1. create root folder as jsamazona
   2. and frontend and backend Folder
   3. create src folder in frontend
   4. create index.html with heading jsamazona
   5. run npm init in frontend Folder
   6. npm install live-server
   7. add start command as live-server src --verbose
   8. run npm start
2.Design Website
   1. create style.css
   2. link style.css to index.html
   3. create div.grid-container
   4. create header, main and footer
   5. style html, body
   6. style grid-container, header, main and footer
3. Create static Home Screen
   1. Create Ul.products
   2. create li
   3. create div.product
   4. add .product-image, .product-name, .product-brand, .product-price
   5.style ul.products and internal divs
   6. duplicate 2 times to show 3 products
4. Render Dynamic Home Screen
   1. create data.js
   2. export an array of 6products
   3. create screen/HomeScreen.js
   4. export HomeScreen as an object with render() method
   5. implement render()
   6. import data.js
   7. return products mapped to list inside an ul
   8. create app.js
   9. link it to index.html as module
   10. set main id to main_container
   11. create router() function
   12. set main_container innerHTML to HomeScreen.render()
   13. ser load event of window to router() function
5. Build Url router
   1. Create routes as route:screen object for home screen
   2. create utils.js 
   3. export parseRequestURL()
   4. set url as hash adderess split by slash
   5. return resource, id and verb of url 
   6. update router()
   7. set request as parseRequestURL()
   8. build parseUrl and compare with routes
   9. If route exists render it, else render Error404
   10. create screens/Error404.js and render error message  
6. Create Node.Js server
   1. run npm init in root jsamazon folder 
   2. npm install express
   3. create server.js
   4. add start command as node backend/server.js
   5. require express
   6. move data.js from frontend to backend
   7. create route for /api/products/
   8. return products in data.js
   9. run npm start
7. Load Products from Backend
   1. edit HomeScreen.js
   2. make render async
   3. fetch products from '/api/products'
   4. make router() async and call await HomeScreen.render()
   5. use cors on backend
8. Add Webpack
   1. cd frontend
   2. npm install -D webpack webpack-cli webpack-dev-server
   3. npm uninstall live-server
   4. "start": "webpack-dev-servevr --mode development --watch-content-base --open"
   5. move index.html, style.css and images to frontend Folder
   6. rename app.js to index.js
   7. update index.html
   8. add <script src="main"></script> before body
   9. npm start
   10. npm install axios
   11. change fetch to axios in HomeScreen
9. Install Babel For ES6 Syntax
   1. npm install -D babel core, cli, node, preset-env
   2. create .babelrc and set presets to @babel/preset-env
   3. npm install -D nodemon
   4. set start: nodemon --watch backend --exec babel-node backend/server.js
   5. convert require to import in server.js
   6. npm start
10. Enable Code Linting
   1. npm install -D eslint
   2. install VSCode eslint extension
   3. create .eslintrc and set module.exports for env to Node
   4. Set VScode setting for editor.codeActionsOnSave source.fixAll.eslint to true
   5. check result for linting error
   6. npm install eslint-config-airbnb-base and eslint-plugin-import
   7. set extends to airbnb-base
   8. set parserOptions to ecmaVersion 11 and sourceType to module
   9. set rules for no-console to 0 to ignore linting error
11. Install VSCode extension
   1. JavaScript(ES6) code snippets
   2. ES7 React/Redux/GraphQL/React-Native snippets
   3. Prettier - Code formatter
   4. HTML&LESS grammer injections
   5. CSS Peek
12. Create Rating Component
   1. create components/Rating.js
   2. create div.rating
   3. link to fontawesome.css in index.html
   4. define Rating object with render()
   5. if !props.value return empty div
   6. else use fa fa-star, fa-star-half-o and fa-star-o
   7. last span for props.text || ''
   8. style div.rating, span and last span
   9. Edit HomeScreen
   10. Add div.product=rating and use Rating Component
   
   



