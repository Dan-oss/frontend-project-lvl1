#!/usr/bin/env node

import { getGameData, ruleGame } from '../src/games/prime.js';
import gamePlay from '../src/index.js';

gamePlay(getGameData, ruleGame);
