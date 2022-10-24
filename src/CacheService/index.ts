import { Cached, WebSiteCache, WebSiteGetter } from "./models";

type HtmlParser<T = unknown> = (html: string) => T

class WebSiteCacheService<T = string> {
    cached: Cached = {}
    htmlParser?: (html: string) => T;
 
    constructor(parser?: HtmlParser<T>){
        this.htmlParser = parser;
    }

    /**
     * Memoized website getter. It remembers the HTML from the key
     * provided as the first parameter.
     * @param key 
     * @param webSiteGetter 
     * @returns 
     */
    async getWebsite(key: string, webSiteGetter: WebSiteGetter){
        if (!this.cached[key] || this.checkExpiration(this.cached[key])){
            const html = await webSiteGetter();
            console.log("GETTING FRESH WEBSITE");
            this.addToCache(key, html);
        }

        return this.returnCache(key, this.htmlParser);
    }

    private returnCache(key: string, parser?: HtmlParser){
        if (parser){
            return parser(this.cached[key].html) as T;
        } 
        return this.cached[key].html as T;
    }

    private addToCache(key: string, html: string){
        this.cached[key] = {
            creationDate: new Date(),
            expiresIn: 1000 * 60 * 60 * 24, //1 day in ms;
            html,
        };
    }

    checkExpiration(cache?: WebSiteCache){
        if (!cache) return false;
        return (cache.creationDate.getTime() + cache.expiresIn < new Date().getTime());
    }

    async overrideCache(key: string, webSiteGetter: WebSiteGetter){
        const html = await webSiteGetter();
        this.addToCache(key, html);
    }

    deleteFromCache(key: string){
        if (this.cached[key]){
            delete this.cached[key];
        }
    }
}

export default WebSiteCacheService;
