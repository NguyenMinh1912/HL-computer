import client from "../server";
import storageService from "./StorageService";
import LoginRequest from "../../pages/Admin/model/request/LoginRequest";
import LoginResponse from "../../pages/Admin/model/response/LoginResponse";


class AuthenticateService {

    async login(request: LoginRequest): Promise<LoginResponse> {
        return await client.post('/hoanglong/api/v1/auth', request)
            .then(res => res.data);
    }

    isLogin(): boolean {
        try {
            const userInfo = storageService.get<LoginResponse>('userInfo');
            return !!userInfo;
        } catch (e) {
            console.error("AuthenticateService.isLogin ERROR = {}", e)
            return false;
        }
    }

    isAdmin(): boolean {
        return this.hasRole('admin');
    }

    isUser(): boolean {
        return this.hasRole('user');
    }

    hasRole(role: string): boolean {
        if (!this.isLogin()) {
            return false;
        }
        const userInfo = this.getCurrentUser();
        return userInfo.role.some(authority => authority.authority === role);
    }

    getCurrentUser(): LoginResponse {
        return storageService.get<LoginResponse>('userInfo');
    }

    logout(): void {
        if (this.isLogin()) {
            localStorage.setItem('userInfo', '');
        }
    }

    getToken(): string | undefined {
        let currentUser = this.getCurrentUser();
        if (!currentUser){
            return undefined;
        }
        return 'Bearer ' + currentUser.jwttoken;
    }
}

export default new AuthenticateService();