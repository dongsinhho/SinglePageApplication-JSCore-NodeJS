import PageAbstract from "./PageAbstract.js";

export default class extends PageAbstract {
    constructor() {
        super();
        this.setTitle("Sign In");
    }

    // cong viec: làm validate dữ liệu và chuyển thành dạng json để gửi lên server bằng cách 
    // lấy thông tin từ input html.
    // lấy cookie sau khi login
    async getHtml() {
        return `
        <form>
            <div class="column is-half is-offset-one-quarter">
                <div class="field">
                    <p class="control has-icons-left has-icons-right">
                        <input class="input" type="text" placeholder="Name" id="name">
                        <span class="icon is-small is-left">
                            <i class="fas fa-envelope"></i>
                        </span>
                        <p class="help is-danger" id="notify1" style="display: none;">Tên không hợp lệ</p>
                    </p>
                </div>
                <div class="field">
                    <p class="control has-icons-left">
                        <input class="input" type="password" placeholder="Password" id="password">
                        <span class="icon is-small is-left">
                        <i class="fas fa-lock"></i>
                        </span>
                    </p>
                    <p class="help is-danger" id="notify2" style="display: none;">Mật khẩu không hợp lệ</p>
                </div>
                <div class="field">
                    <p class="control">
                        <button class="button is-success" id="login">
                        Login
                        </button>
                    </p>
                </div>
            </div>
        </form>
        `
    }
}