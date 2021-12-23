#!/usr/bin/env node

import { getGameData, ruleGame } from '../src/games/even.js';
import gamePlay from '../src/index.js';

gamePlay(getGameData, ruleGame);
