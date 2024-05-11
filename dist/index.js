"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const morgan_1 = __importDefault(require("morgan"));
const dotenv_1 = __importDefault(require("dotenv"));
const express_1 = __importDefault(require("express"));
dotenv_1.default.config();
const app = (0, express_1.default)();
// listening PORT
const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use((0, morgan_1.default)('dev'));
app.get("/ping", (req, res) => {
    res.status(200).json({
        data: "hello this is works",
    });
});
app.get("/", (req, res) => {
    res.status(200).json({
        "author": "yuefii",
        "github_author": "https://github.com/yuefii",
        "github_project": "https://github.com/Yuefii/starter-express-typescript",
        "version": "1.0.0"
    });
});
