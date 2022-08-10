class LoginResponse {
    jwttoken!: string;
    username!: string;
    email!: string;
    phoneNumber!: string;
    address!: string;
    role!: { authority: string }[];


    constructor(jwttoken: string, username: string, email: string, phoneNumber: string, address: string, role: { authority: string }[]) {
        this.jwttoken = jwttoken;
        this.username = username;
        this.email = email;
        this.phoneNumber = phoneNumber;
        this.address = address;
        this.role = role;
    }
}

export default LoginResponse;