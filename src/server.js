"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app_data_source_1 = require("./app-data-source");
const routes_1 = __importDefault(require("./routes/routes"));
// establish database connection
app_data_source_1.appDataSource
    .initialize()
    .then(() => {
    console.log("Data Source has been initialized!");
})
    .catch((err) => {
    console.error("Error during Data Source initialization:", err);
});
const app = (0, express_1.default)();
const port = 3001;
app.use(express_1.default.json()); // Add this line to handle JSON requests
app.get('/', (req, res) => {
    res.send('Hello, this is Express + TypeScript');
});
app.use(routes_1.default);
app.listen(port, () => {
    console.log(`[Server]: I am running at https://localhost:${port}`);
});
//add listerer for each request
app.use((req, res, next) => {
    //JwtMiddleware(req, res);
    next();
});
