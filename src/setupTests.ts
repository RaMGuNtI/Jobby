import '@testing-library/jest-dom';
import 'whatwg-fetch';
import { TextEncoder, TextDecoder } from 'util';

// Fixes "TextEncoder is not defined" errors
global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;
