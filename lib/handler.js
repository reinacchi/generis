"use strict";
const __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
            resolve(value); 
        }); 
    }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value)); 
            } catch (e) {
                reject(e); 
            } 
        }
        function rejected(value) {
            try {
                step(generator["throw"](value)); 
            } catch (e) {
                reject(e); 
            } 
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); 
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable no-console */
/* eslint-disable import/no-unresolved */
const prompts_1 = __importDefault(require("prompts"));
const constants_1 = require("./constants");
const scaffold_1 = require("./scaffold");
const questions_1 = require("./questions");
function handleOption(option, data) {
    return __awaiter(this, void 0, void 0, function* () {
        if (option === constants_1.Constants.NEW) {
            const { language } = yield prompts_1.default(questions_1.languageSelect);
            yield scaffold_1.createNewProject(data, language);
        } else if (option === constants_1.Constants.GEN) {
            if (data === constants_1.Type.COMMAND) {
                const { name, category } = yield prompts_1.default(questions_1.templateGenerate);
                yield scaffold_1.generateNewCommand(name, category)
                    .then(() => console.log("Created."))
                    .catch((err) => console.log(err));
            } else if (data === constants_1.Type.EVENT) {
                const { events } = yield prompts_1.default(questions_1.eventGenerate);
                yield scaffold_1.generateNewEvent(events);
            }
        }
    });
}
exports.handleOption = handleOption;