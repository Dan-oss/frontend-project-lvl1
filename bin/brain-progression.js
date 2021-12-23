#!/usr/bin/env node

import { getGameData, rulesGame } from '../src/games/progression.js';
import gamePlay from '../src/index.js';

gamePlay(getGameData, rulesGame);
