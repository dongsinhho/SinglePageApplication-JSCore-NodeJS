import PageAbstract from "./PageAbstract.js";


export default class extends PageAbstract {
    constructor() {
        super();
        this.setTitle("Contact");
    }

    async getHtml() {
        return `
            <h1 class="is-size-1">Thong tin lien he</h1>
            <h3 class="is-size-3">Ho Ngoc Dong Sinh</h3>
            <h4 class="is-size-4">So dien thoai 0373418673</h4>
            <p> Facebook: <span class="has-text-primary"> www.facebook.com/dongsinhho </span><br/> 
            Instagram: <span class="has-text-danger"> Shinnothere </span><br/> Gmail: <span class="has-text-info">sinhvua@gmail.com</span>
            <br/> Github: <span class="has-text-dark">dongsinhho </span></p>
            <p>
                <a href="/contact">View recent posts</a>
            </p>
        `
    }
}