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
exports.Medecin1711120300391 = void 0;
const medecin_1 = require("../faker/medecin");
const medecin_2 = require("../entity/medecin");
class Medecin1711120300391 {
    up(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            const medecins = (0, medecin_1.fakeMedecin)();
            yield queryRunner.manager.save(medecin_2.Medecin, medecins);
        });
    }
    down(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
        });
    }
}
exports.Medecin1711120300391 = Medecin1711120300391;
