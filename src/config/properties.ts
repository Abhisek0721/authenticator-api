import dotenv from "dotenv";

dotenv.config();

interface propertiesInterface {
    PORT: number; // in development
    SERVER_URL: string;
    MONGO_URI: string;
    JWT_SECRET: string;
    AES_SECRET: string;
}

const properties:propertiesInterface = {
    PORT: Number(process.env.PORT) || 3000,
    SERVER_URL: process.env.SERVER_URL || ``,
    MONGO_URI: process.env.MONGO_URI || 
        `mongodb+srv://authenticatorAbhi:authenticatorAbhi2001@cluster0.rm1wmo7.mongodb.net/authenticator`,
    JWT_SECRET: process.env.JWT_SECRET || "jdfjsdkjfdskjhuyu",
    AES_SECRET: process.env.AES_SECRET || "trertjsdkjfdskjhuyu"
}

export default properties;