import conf from '../conf/conf.js';
import { Client, Account, ID } from "appwrite";


export class AuthService {
    client = new Client();
    account;
    sessionKey = "appwrite:hasSession";

    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
        this.account = new Account(this.client);
            
    }

    async createAccount({email, password, name}) {
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name);
            if (userAccount) {
                // call another method
                return this.login({email, password});
            } else {
               return  userAccount;
            }
        } catch (error) {
            throw error;
        }
    }

    async login({email, password}) {
        try {
            const session = await this.account.createEmailPasswordSession(email, password);
            try {
                if (typeof window !== "undefined") {
                    window.localStorage.setItem(this.sessionKey, "1");
                }
            } catch {}
            return session;
        } catch (error) {
            throw error;
        }
    }

    async getCurrentUser() {
        try {
            return await this.account.get();
        } catch (error) {
            // When there is no active session, Appwrite returns 401. Treat as "not logged in".
            if (error?.code !== 401) {
                console.log("Appwrite serive :: getCurrentUser :: error", error);
            }
        }

        return null;
    }

    async logout() {

        try {
            await this.account.deleteSessions("current");
        } catch (error) {
            console.log("Appwrite serive :: logout :: error", error);
        } finally {
            try {
                if (typeof window !== "undefined") {
                    window.localStorage.removeItem(this.sessionKey);
                }
            } catch {}
        }
    }
}

const authService = new AuthService();

export default authService
