#!/usr/bin/env node

import { getGameData, ruleGame } from '../src/games/gcd.js';
import gamePlay from '../src/index.js';

gamePlay(getGameData, ruleGame);
