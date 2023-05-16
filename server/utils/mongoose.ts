import MongodbUtils from "~/mongodb/mongoose";

const MONGODB_URL = `mongodb+srv://${process.env.MONGODB_USR}:${process.env.MONGODB_PW}${process.env.MONGODB_URL}`;

export const mongoUtils = new MongodbUtils(MONGODB_URL);
