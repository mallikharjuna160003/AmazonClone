import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import { parseRequestUrl } from "./utils";
import Error404Screen from "./screens/Error404Screen";
import CartScreen from "./screens/CartScreen";

const routes = {
    '/': HomeScreen,
    '/product/:id': ProductScreen,
    '/cart/:id': CartScreen,
    '/cart': CartScreen,
};
const router = async () =>{
    const request = parseRequestUrl();
    console.log(request.resource);
    const parseUrl = (request.resource? `/${request.resource}`:'/')+
    (request.id? '/:id':'');
    console.log(parseUrl);
    console.log(routes);
    const screen = routes[parseUrl]? routes[parseUrl]: Error404Screen;
    console.log(screen);
    const main = document.getElementById("main-container");
    main.innerHTML = await screen.render(); 
    await screen.after_render();
};
window.addEventListener('load',router);
window.addEventListener('hashchange',router);

