import { makeCommand, CMD_FEED_PAPER } from './commands';

describe('MakeCommand test', () => {

  const feedLines = 20;
  const cmd = makeCommand(CMD_FEED_PAPER, new Uint8Array([feedLines]));

  test('Command length', () => {
    expect(cmd).toHaveLength(9);
  });

  test('Command CRC', () => {
    expect(cmd[6]).toBe(feedLines);
    expect(cmd[7]).toBe(108);
  });
});
