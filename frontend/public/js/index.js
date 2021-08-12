import Dashboard from "./view/Dashboard.js";
import Contact from "./view/Contact.js";
import Jobs from "./view/Jobs.js";
import About from "./view/About.js";
import SignIn from "./view/SignIn.js";
import SignUp from "./view/SignUp.js";

const navigation = url => {
    history.pushState(null, null, url);
    router();
};

const router = async () => {
    const routes = [
        { path: "/", view: Dashboard},
        { path: "/home", view: Dashboard},
        { path: "/about", view: About},
        { path: "/jobs", view: Jobs},
        { path: "/contact", view: Contact},
        { path: "/signin", view: SignIn},
        { path: "/signup", view: SignUp}
    ];

    // Check route match
    const checkRoutes = routes.map (route => {
        return {
            route: route,
            isMatch: location.pathname === route.path
        };
    }) 
    let matchRoutes = checkRoutes.find(checkRoute => checkRoute.isMatch);
    if( !matchRoutes ) {
        matchRoutes = {
            route: routes[0],
            isMatch : true
        }
    }
    const view = new matchRoutes.route.view();
    document.querySelector("#app").innerHTML = await view.getHtml();
    document.querySelector("#handleSinglePage").innerHTML = await view.getScript();
    
    //console.log(checkRoutes);
}

window.addEventListener("popstate", router);

document.addEventListener("DOMContentLoaded", () => {
    document.body.addEventListener("click", e => {
        if (e.target.matches(".navbar-item"))
            e.preventDefault();
            navigation(e.target.href);
    })
    router();
})
