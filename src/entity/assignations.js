"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Assignation = void 0;
const typeorm_1 = require("typeorm");
const medecin_1 = require("./medecin");
const chambre_1 = require("./chambre");
const patient_1 = require("./patient");
let Assignation = class Assignation extends typeorm_1.BaseEntity {
};
exports.Assignation = Assignation;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Assignation.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => medecin_1.Medecin),
    __metadata("design:type", medecin_1.Medecin)
], Assignation.prototype, "doctor", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => patient_1.Patient),
    __metadata("design:type", patient_1.Patient)
], Assignation.prototype, "patient", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => chambre_1.Chambre),
    __metadata("design:type", chambre_1.Chambre)
], Assignation.prototype, "room", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" }),
    __metadata("design:type", Date)
], Assignation.prototype, "dateAssignation", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "timestamp", nullable: true }),
    __metadata("design:type", Date)
], Assignation.prototype, "dateSortie", void 0);
exports.Assignation = Assignation = __decorate([
    (0, typeorm_1.Entity)()
], Assignation);
