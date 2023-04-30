interface UserModelInterface {
    name: string;
    email?: string;
    verify: boolean;
    companyName: string;
    password: string;
    googleId: string;
    refreshToken: string;
}

export default UserModelInterface;