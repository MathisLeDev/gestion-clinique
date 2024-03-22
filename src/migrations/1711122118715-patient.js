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
exports.Patient1711122118715 = void 0;
const patient_1 = require("../faker/patient");
const patient_2 = require("../entity/patient");
class Patient1711122118715 {
    up(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            const patients = (0, patient_1.fakepatient)();
            yield queryRunner.manager.save(patient_2.Patient, patients);
        });
    }
    down(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
        });
    }
}
exports.Patient1711122118715 = Patient1711122118715;
