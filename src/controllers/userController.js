"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const user_1 = require("../entity/user");
class UserController {
    constructor() {
    }
    static getUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const name = req.query.name;
            console.log(name);
            const user = yield user_1.User.findOne({ where: { firstName: name } });
            return res.json(user);
        });
    }
    static createUser(req, res) {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function* () {
            console.log(req.body);
            if (!((_a = req === null || req === void 0 ? void 0 : req.body) === null || _a === void 0 ? void 0 : _a.firstName) || !((_b = req === null || req === void 0 ? void 0 : req.body) === null || _b === void 0 ? void 0 : _b.lastName) || !((_c = req === null || req === void 0 ? void 0 : req.body) === null || _c === void 0 ? void 0 : _c.age)) {
                return res.status(400).send({
                    message: "Please provide firstName, lastName and age"
                });
            }
            const { firstName, lastName, age } = req.body;
            const user = user_1.User.create({ firstName, lastName, age });
            yield user.save();
            return res.json(user);
        });
    }
    static updateUser(req, res) {
        var _a, _b, _c, _d;
        return __awaiter(this, void 0, void 0, function* () {
            console.log(req.body);
            if (!((_a = req === null || req === void 0 ? void 0 : req.body) === null || _a === void 0 ? void 0 : _a.id) || !((_b = req === null || req === void 0 ? void 0 : req.body) === null || _b === void 0 ? void 0 : _b.firstName) || !((_c = req === null || req === void 0 ? void 0 : req.body) === null || _c === void 0 ? void 0 : _c.lastName) || !((_d = req === null || req === void 0 ? void 0 : req.body) === null || _d === void 0 ? void 0 : _d.age)) {
                return res.status(400).send({
                    message: "Please provide id, firstName, lastName and age"
                });
            }
            const user = yield user_1.User.findOne({ where: { id: req.body.id } });
            if (!user) {
                return res.status(400).send({
                    message: "User not found"
                });
            }
            user.firstName = req.body.firstName;
            user.lastName = req.body.lastName;
            user.age = req.body.age;
            yield user.save();
            return res.json(user);
        });
    }
}
exports.UserController = UserController;
