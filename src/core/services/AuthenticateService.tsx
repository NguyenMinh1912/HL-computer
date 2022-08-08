import client from "../server";
import storageService from "./StorageService";

class LoginResponse {
    jwttoken!: string;
    username!: string;
    email!: string;
    phoneNumber!: string;
    address!: string;
    role!: { authority: string }[];
}

class LoginRequest {
    username!: string;
    password!: string;
}

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

}

export default new AuthenticateService();