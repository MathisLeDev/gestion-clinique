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
exports.Chambre1711478794720 = void 0;
const chambre_1 = require("../faker/chambre");
const chambre_2 = require("../entity/chambre");
class Chambre1711478794720 {
    up(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            const chambres = (0, chambre_1.fakeChambre)();
            yield queryRunner.manager.save(chambre_2.Chambre, chambres);
        });
    }
    down(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
        });
    }
}
exports.Chambre1711478794720 = Chambre1711478794720;
