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

// cong viec: lay  cookie tu server va set-cookie cho user 
const login = () => {
    const name = document.getElementById("name").value;
    const password = document.getElementById("password").value;
    if(name.length < 4) {
        document.getElementById("notify1").style.display = "block";
        console.log("false");
        return false;
    }
    if(password.length<6) {
        document.getElementById("notify2").style.display = "block";
        return false;
    }

    const data = {
        "name": name,
        "password": password
    }

    const URL = "http://localhost:6001/api/login";
    var xhttp = new XMLHttpRequest();
    xhttp.withCredentials = true;
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            //do something with this.responseText

            console.log(this.responseText);
            console.log(this.getAllResponseHeaders());
            console.log(this.cookie);
        }
        else {
            console.log("bị lỗi --" + this.responseText)
        }
    }

    xhttp.open("POST", URL ,true);
    xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
   
    xhttp.send(JSON.stringify(data));
}

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
    
}

window.addEventListener("popstate", router);

document.addEventListener("DOMContentLoaded", () => {
    document.body.addEventListener("click", e => {
        if (e.target.matches(".navbar-item")) 
        {
            e.preventDefault();
            navigation(e.target.href);
        }
        if (e.target.matches("#login")) {
            e.preventDefault();
            login();
        }
            
    })
    router();
})
