import PageAbstract from "./PageAbstract.js";

export default class extends PageAbstract {
    constructor() {
        super();
        this.setTitle("Jobs");
    }

    async getHtml() {
        return `
            <h1 class="is-size-1">Kinh nghiem lam viec</h1>
            <h3 class="is-size-3">Thuc tap tai fpt software</h3>
            <h4 class="is-size-4">Cac du an da lam duoc: he thong cho thue xe dap, game android, web ban giay </h4>
            <p>
                <a href="/contact">View recent posts</a>
            </p>
        `
    }
}