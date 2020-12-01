"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const webpack_merge_1 = __importDefault(require("webpack-merge"));
const base_1 = __importDefault(require("./webpack/base"));
const dev_1 = __importDefault(require("./webpack/dev"));
const env_1 = require("./webpack/utils/env");
const prod_1 = __importDefault(require("./webpack/prod"));
exports.default = () => env_1.isProd ? webpack_merge_1.default(base_1.default, prod_1.default) : webpack_merge_1.default(base_1.default, dev_1.default);
