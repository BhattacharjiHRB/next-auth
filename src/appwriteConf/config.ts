import config from "@/conf/config";
import {Client,Account , ID } from "appwrite"



type CreateUserAccount ={
    email:string,
    password:string,
    name:string,


};

type LoginUserAccount ={
    email:string,
    password:string,
};

export const appwriteClient = new Client()

appwriteClient.setEndpoint(config.appwriteUrl).setProject(config.appwriteProjectId);

const account = new Account(appwriteClient)

export class AppwriteService{
    // Create a new account

    async createUserAccount({email, password, name}:CreateUserAccount){
        try {
           const userAccount = await account.create(ID.unique(),email, password, name);

            if(userAccount){
                return this.login({email,password });
            }else{
                return userAccount;
            }

            
        } catch (error: any) {
            throw error;
        }
        
    };
    async login({email,password}:LoginUserAccount){
        // 
        try {

           return await account.createEmailSession(email,password)
            
        } catch (error: any) {
            throw error;
        }
    };

    async isLoggedIn(): Promise<boolean> {
        try {
            const data = await this.getCurrentUser()
            return Boolean(data);
        } catch (error) {
            
        }
        return false;
    };

    async getCurrentUser() {
        try {
            return account.get();
        } catch (error) {
            console.log("getCurrentUser Error ",error);
        }
    };
    async logout() {
        try {
            return account.deleteSession("current");
        } catch (error) {
            console.log("Logout Error ",error);
        }
    };
}


const appwriteService = new AppwriteService();

export default appwriteService;