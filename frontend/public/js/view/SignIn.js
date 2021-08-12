import PageAbstract from "./PageAbstract.js";

export default class extends PageAbstract {
    constructor() {
        super();
        this.setTitle("Sign In");
    }

    async getScript() {
        return `
        function login() {
            

            var xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200) {
                    //do something with this.responseText
                    console.log(this.responseText);
                }
                else {
                    console.log("bị lỗi " + this.status + this.responseText)
                }
            }
        
            xhttp.open("POST", "http://localhost:6001/api/login",true);
            xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
           
            xhttp.send(JSON.stringify({"name":"sinh","password":"sinh123"}));
        }

        `
    }
    // cong viec: làm validate dữ liệu và chuyển thành dạng json để gửi lên server bằng cách 
    // lấy thông tin từ input html.
    // lấy cookie sau khi login
    async getHtml() {
        return `
            <div class="column is-half is-offset-one-quarter">
                <div class="field">
                    <p class="control has-icons-left has-icons-right">
                        <input class="input" type="email" placeholder="Email">
                        <span class="icon is-small is-left">
                            <i class="fas fa-envelope"></i>
                        </span>
                        <span class="icon is-small is-right">
                            <i class="fas fa-check"></i>
                        </span>
                    </p>
                </div>
                <div class="field">
                    <p class="control has-icons-left">
                        <input class="input" type="password" placeholder="Password">
                        <span class="icon is-small is-left">
                        <i class="fas fa-lock"></i>
                        </span>
                    </p>
                </div>
                <div class="field">
                    <p class="control">
                        <button class="button is-success" onclick="login()">
                        Login
                        </button>
                    </p>
                </div>
            </div>
        `
    }
}