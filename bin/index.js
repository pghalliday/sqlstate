#!/usr/bin/env node
import {program} from "../dist/cli/index.js";
await program.parseAsync(process.argv);
