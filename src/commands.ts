import { crc8 } from './crc';

const CMD_FEED_PAPER = 0xa1;

export type TCmd = typeof CMD_FEED_PAPER;

export {
  CMD_FEED_PAPER,
}

export function makeCommand(cmd: TCmd, data: Uint8Array): Uint8Array {
  return new Uint8Array([
    0x51, 0x78, cmd, 0x00, data.length, 0x00, ...data, crc8(data), 0xff
  ]);
}
