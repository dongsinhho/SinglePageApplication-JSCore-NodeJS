import PageAbstract from "./PageAbstract.js";


export default class extends PageAbstract {
    constructor() {
        super();
        this.setTitle("About");
    }

    async getHtml() {
        return `
            <h1 class="is-size-1">About</h1>
            <h3 class="is-size-3">This is About page</h3>
            <h4 class="is-size-4">Ngon ngu Javascript, HTML, CSS, C, Java</h4>
            <p>Cac mon hoc yeu thich <br/> Phat trien ung dung tren thiet bi di dong <br/> 
            Lap trinh ung dung mang <br/> Ky thuat phat trien he thong web
            <br/> Cong nghe Internet of Things <br/> Danh gia hieu nang he thong mang may tinh </p>
            <p>
                <a href="/contact">View recent posts</a>
            </p>
        `
    }
}