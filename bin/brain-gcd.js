#!/usr/bin/env node
/* eslint-disable no-alert, no-console */
/* eslint-disable import/prefer-default-export */
import { gameDate, rulesGame } from './games/gcd.js';
import gamePlay from '../src/index.js';

gamePlay(gameDate, rulesGame);
