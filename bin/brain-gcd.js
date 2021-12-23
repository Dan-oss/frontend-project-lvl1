#!/usr/bin/env node

import { getGameData, rulesGame } from '../src/games/gcd.js';
import gamePlay from '../src/index.js';

gamePlay(getGameData, rulesGame);
