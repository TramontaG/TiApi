export type WebSiteCache = {
    creationDate: Date,
    expiresIn: number,
    html: string,
}

export type Cached = {
    [key: string]: WebSiteCache,
}

export type WebSiteGetter = () => Promise<string>; 
