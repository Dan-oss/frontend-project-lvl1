#!/usr/bin/env node

import { getGameData, rulesGame } from '../src/games/even.js';
import gamePlay from '../src/index.js';

gamePlay(getGameData, rulesGame);
