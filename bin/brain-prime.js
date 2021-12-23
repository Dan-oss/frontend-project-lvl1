#!/usr/bin/env node

import { getGameData, rulesGame } from '../src/games/prime.js';
import gamePlay from '../src/index.js';

gamePlay(getGameData, rulesGame);
