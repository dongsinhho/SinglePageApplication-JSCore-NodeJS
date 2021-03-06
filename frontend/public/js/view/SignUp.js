import PageAbstract from "./PageAbstract.js";

export default class extends PageAbstract {
    constructor() {
        super();
        this.setTitle("Sign Up");
    }

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
                        <button class="button is-success">
                        Sign Up
                        </button>
                    </p>
                </div>
            </div>
        `
    }
}