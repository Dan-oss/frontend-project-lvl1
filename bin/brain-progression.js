#!/usr/bin/env node

import { getGameData, rulesGame } from '../src/games/calc.js';
import gamePlay from '../src/index.js';

gamePlay(getGameData, rulesGame);
