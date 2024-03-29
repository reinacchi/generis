#!/usr/bin/env node
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
/* eslint-disable import/no-unresolved */
const prompts_1 = __importDefault(require("prompts"));
const chalk_1 = __importDefault(require("chalk"));
const questions_1 = require("./questions");
const handler_1 = require("./handler");
(() => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const args = process.argv.slice(2);
        if (args.length === 2) {
            // Check Command Argument
            const [option, data] = args;
            yield handler_1.handleOption(option, data);
        } else {
            const { option, data } = yield prompts_1.default(questions_1.questions);
            yield handler_1.handleOption(option, data);
        }
    } catch (err) {
        console.log(chalk_1.default.red.bold(err));
    }
}))();