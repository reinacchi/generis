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
const fs_1 = require("fs");
const child_process_1 = require("child_process");
const path_1 = __importDefault(require("path"));
const templates_1 = require("./templates/templates");
const utils_1 = require("./utils");
const dir = process.cwd();
function exists(filePath) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield fs_1.promises.access(filePath);
            return true;
        } catch (err) {
            return false;
        }
    });
}
exports.exists = exists;
function createProjectDetailsFile(filePath, name, language) {
    const connect = {
        name,
        language
    };
    return fs_1.promises.writeFile(path_1.default.join(filePath, "generis.json"), JSON.stringify(connect, null, 2));
}
exports.createProjectDetailsFile = createProjectDetailsFile;
function createDirectory(filePath) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            return fs_1.promises.mkdir(filePath);
        } catch (err) {
            return err;
        }
    });
}
exports.createDirectory = createDirectory;
function createSrcFolder(filePath) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            return fs_1.promises.mkdir(path_1.default.join(filePath, "src"));
        } catch (err) {
            return err;
        }
    });
}
exports.createSrcFolder = createSrcFolder;
function createEnvironmentFile(filePath, data) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            return fs_1.promises.writeFile(path_1.default.join(filePath, ".env"), data);
        } catch (err) {
            return err;
        }
    });
}
exports.createEnvironmentFile = createEnvironmentFile;
function createMainFile(filePath, data, language) {
    return __awaiter(this, void 0, void 0, function* () {
        return language === "ts" ? fs_1.promises.writeFile(path_1.default.join(filePath, "src", "bot.ts"), data) : fs_1.promises.writeFile(path_1.default.join(filePath, "src", "bot.js"), data);
    });
}
exports.createMainFile = createMainFile;
function getFile(filePath) {
    return __awaiter(this, void 0, void 0, function* () {
        const text = yield fs_1.promises.readFile(filePath, "utf8");
        const json = JSON.parse(text);
        return json;
    });
}
exports.getFile = getFile;
function generateTemplates(filePath) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield fs_1.promises.mkdir(path_1.default.join(filePath, "src", "utils"));
            yield fs_1.promises.mkdir(path_1.default.join(filePath, "src", "utils", "structures"));
            yield fs_1.promises.writeFile(path_1.default.join(filePath, "src", "utils", "registry.js"), templates_1.getRegistryFile());
            yield fs_1.promises.writeFile(path_1.default.join(filePath, "src", "utils", "structures", "BaseCommand.js"), templates_1.getBaseCommand());
            yield fs_1.promises.writeFile(path_1.default.join(filePath, "src", "utils", "structures", "BaseEvent.js"), templates_1.getBaseEvent());
            yield fs_1.promises.mkdir(path_1.default.join(filePath, "src", "commands"));
            yield fs_1.promises.mkdir(path_1.default.join(filePath, "src", "events"));
            yield fs_1.promises.mkdir(path_1.default.join(filePath, "src", "commands", "test"));
            yield fs_1.promises.mkdir(path_1.default.join(filePath, "src", "events", "ready"));
            yield fs_1.promises.mkdir(path_1.default.join(filePath, "src", "events", "message"));
            yield fs_1.promises.writeFile(path_1.default.join(filePath, "src", "events", "ready", "ready.js"), templates_1.getReadyEvent());
            yield fs_1.promises.writeFile(path_1.default.join(filePath, "src", "events", "message", "message.js"), templates_1.getMessageEvent());
            yield fs_1.promises.writeFile(path_1.default.join(filePath, "src", "commands", "general", "PingCommand.js"), templates_1.getPingCommand());
        } catch (err) {
            throw new Error(err);
        }
    });
}
exports.generateTemplates = generateTemplates;
function generateTSTemplates(filePath) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield fs_1.promises.mkdir(path_1.default.join(filePath, "src", "utils"));
            yield fs_1.promises.mkdir(path_1.default.join(filePath, "src", "utils", "structures"));
            yield fs_1.promises.writeFile(path_1.default.join(filePath, "src", "utils", "registry.ts"), templates_1.getRegistryFileTS());
            yield fs_1.promises.writeFile(path_1.default.join(filePath, "src", "utils", "structures", "BaseCommand.ts"), templates_1.getBaseCommandTS());
            yield fs_1.promises.writeFile(path_1.default.join(filePath, "src", "utils", "structures", "BaseEvent.ts"), templates_1.getBaseEventTS());
            yield fs_1.promises.mkdir(path_1.default.join(filePath, "src", "commands"));
            yield fs_1.promises.mkdir(path_1.default.join(filePath, "src", "events"));
            yield fs_1.promises.mkdir(path_1.default.join(filePath, "src", "client"));
            yield fs_1.promises.writeFile(path_1.default.join(filePath, "src", "client", "client.ts"), templates_1.getTypescriptBotFile());
            yield fs_1.promises.mkdir(path_1.default.join(filePath, "src", "commands", "test"));
            yield fs_1.promises.mkdir(path_1.default.join(filePath, "src", "events", "ready"));
            yield fs_1.promises.mkdir(path_1.default.join(filePath, "src", "events", "message"));
            yield fs_1.promises.writeFile(path_1.default.join(filePath, "src", "events", "ready", "ready.ts"), templates_1.getReadyEventTS());
            yield fs_1.promises.writeFile(path_1.default.join(filePath, "src", "events", "message", "message.ts"), templates_1.getMessageEventTS());
            yield fs_1.promises.writeFile(path_1.default.join(filePath, "src", "commands", "general", "PingCommand.ts"), templates_1.getPingCommandTS());
        } catch (err) {
            throw new Error(err);
        }
    });
}
exports.generateTSTemplates = generateTSTemplates;
function createCommandFile(filePath, name, category, language) {
    return __awaiter(this, void 0, void 0, function* () {
        return language === "js"
            ? fs_1.promises.writeFile(path_1.default.join(filePath, `${utils_1.capitalize(name)}Command.js`), templates_1.getCommandTemplate(name, category))
            : fs_1.promises.writeFile(path_1.default.join(filePath, `${utils_1.capitalize(name)}Command.ts`), templates_1.getCommandTemplateTS(name, category));
    });
}
exports.createCommandFile = createCommandFile;
function createEventFile(filePath, template) {
    return __awaiter(this, void 0, void 0, function* () {
        return fs_1.promises.writeFile(filePath, template);
    });
}
exports.createEventFile = createEventFile;
function modifyPackageJSONFile(filePath, language) {
    return __awaiter(this, void 0, void 0, function* () {
        const buffer = yield fs_1.promises.readFile(path_1.default.join(filePath, "package.json"), "utf8");
        const json = JSON.parse(buffer);
        json.scripts.dev = language === "js" ? "nodemon ./src/bot.js" : "nodemon --exec ts-node src/bot.ts";
        json.scripts.start = language === "js" ? "node ./src/bot.js" : "node ./build/bot.js";
        if (language === "ts") {
            json.scripts.build = "tsc --build";
        }
        return fs_1.promises.writeFile(path_1.default.join(filePath, "package.json"), JSON.stringify(json, null, 2));
    });
}
exports.modifyPackageJSONFile = modifyPackageJSONFile;
function deleteDirectory(filePath) {
    return __awaiter(this, void 0, void 0, function* () {
        return fs_1.promises.rmdir(filePath, {
            recursive: true
        });
    });
}
exports.deleteDirectory = deleteDirectory;
function initializeNPM(filePath) {
    return __awaiter(this, void 0, void 0, function* () {
        return child_process_1.execSync("npm init -y", {
            cwd: filePath
        });
    });
}
exports.initializeNPM = initializeNPM;
function installEris(filePath) {
    return __awaiter(this, void 0, void 0, function* () {
        return child_process_1.execSync("npm i eris@latest", {
            cwd: filePath,
            stdio: "ignore"
        });
    });
}
exports.installEris = installEris;
function installTypescript(filePath) {
    return __awaiter(this, void 0, void 0, function* () {
        return child_process_1.execSync("npm i -D typescript", {
            cwd: filePath,
            stdio: "ignore"
        });
    });
}
exports.installTypescript = installTypescript;
function installTSNode(filePath) {
    return __awaiter(this, void 0, void 0, function* () {
        return child_process_1.execSync("npm i -D ts-node", {
            cwd: filePath,
            stdio: "ignore"
        });
    });
}
exports.installTSNode = installTSNode;
function setupTSConfigTemplate(filePath) {
    return __awaiter(this, void 0, void 0, function* () {
        return fs_1.promises.writeFile(path_1.default.join(filePath, "tsconfig.json"), templates_1.TSCONFIG);
    });
}
exports.setupTSConfigTemplate = setupTSConfigTemplate;
function installDotenv(filePath) {
    return __awaiter(this, void 0, void 0, function* () {
        return child_process_1.execSync("npm i dotenv", {
            cwd: filePath,
            stdio: "ignore"
        });
    });
}
exports.installDotenv = installDotenv;