import * as process from "process";

export default () => ({
    port: parseInt(process.env.PORT, 10) || 3000,
    google:{
        storageMediaBucket:process.env.STORAGE_MEDIA_BUCKET,
        projectId: process.env.PROJECT_ID,
    },
    auth: {
        jwtSecret: process.env.JWT_SECRET,
        jwtExpiration: process.env.JWT_EXPIRATION || "3d"
    },
    database:{
        mongoDbURI :   process.env.DB_URI,
        name :   process.env.DB_NAME,
    },
    baseURI: process.env.BASE_URI,
    frontEndURL:process.env.FRONT_END_URL,
    contifico: process.env.CONTIFICO,
    key: process.env.KEY,
});
