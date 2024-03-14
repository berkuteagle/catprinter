const VERSION = "0.0.1";

export { crc8 } from './crc';
export {
  CMD_RETRACT_PAPER,
  CMD_FEED_PAPER,
  CMD_DRAW_BITMAP,
  CMD_GET_DEVICE_INFO,
  CMD_REQUEST_DEVICE_STATE,
  CMD_SET_QUALITY,
  CMD_SET_LATTICE,
  CMD_SET_ENERGY,
  CMD_SET_FEED_SPEED,
  CMD_SET_DRAWING_MODE,
  makeCommand
} from './commands';

export type PrinterOptions = {};

export { VERSION };
