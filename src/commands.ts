import { crc8 } from './crc';

const CMD_RETRACT_PAPER = 0xa0;
const CMD_FEED_PAPER = 0xa1;
const CMD_DRAW_BITMAP = 0xa2;
const CMD_GET_DEVICE_INFO = 0xa8;

const CMD_REQUEST_DEVICE_STATE = 0xa3;

const CMD_SET_QUALITY = 0xa4;
const CMD_SET_LATTICE = 0xa6;
const CMD_SET_ENERGY = 0xaf;
const CMD_SET_FEED_SPEED = 0xbd;
const CMD_SET_DRAWING_MODE = 0xbe;

export type TCmd =
  typeof CMD_RETRACT_PAPER |
  typeof CMD_FEED_PAPER |
  typeof CMD_DRAW_BITMAP |
  typeof CMD_GET_DEVICE_INFO |
  typeof CMD_REQUEST_DEVICE_STATE |
  typeof CMD_SET_QUALITY |
  typeof CMD_SET_LATTICE |
  typeof CMD_SET_ENERGY |
  typeof CMD_SET_FEED_SPEED |
  typeof CMD_SET_DRAWING_MODE;

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
}

export function makeCommand(cmd: TCmd, data: Uint8Array): Uint8Array {
  return new Uint8Array([
    0x51, 0x78, cmd, 0x00, data.length, 0x00, ...data, crc8(data), 0xff
  ]);
}
