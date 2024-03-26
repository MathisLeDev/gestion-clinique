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
exports.Maladie1711122861159 = void 0;
const maladie_1 = require("../faker/maladie");
const maladie_2 = require("../entity/maladie");
class Maladie1711122861159 {
    up(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            const maladies = (0, maladie_1.fakeMaladie)();
            yield queryRunner.manager.save(maladie_2.Maladie, maladies);
        });
    }
    down(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
        });
    }
}
exports.Maladie1711122861159 = Maladie1711122861159;
