import {Command} from 'commander';
import {readFile} from "node:fs/promises";
import {resolve} from "node:path";
const __dirname = import.meta.dirname;

const packageJson = await readFile(resolve(__dirname, '../../package.json'), 'utf8');
const packageConf = JSON.parse(packageJson);

export const program = new Command()
    .name(packageConf.name)
    .description(packageConf.description)
    .version(packageConf.version);
