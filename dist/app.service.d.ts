import { Cache } from "cache-manager";
export declare class AppService {
    private cacheManager;
    constructor(cacheManager: Cache);
    getHello(): Promise<string>;
}
