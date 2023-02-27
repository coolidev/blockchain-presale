import { ethers } from 'ethers';
import {getRpcUrl } from '../config';

const RPC_URL = getRpcUrl();

export const simpleRpcProvider = new ethers.providers.JsonRpcProvider(RPC_URL);
