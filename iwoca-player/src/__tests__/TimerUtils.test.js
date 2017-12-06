import TimerUtils from './../TimerUtils';

const SEC_IN_MIN = 60;
const SEC_IN_HOUR = 60 * SEC_IN_MIN;

describe('TimerUtilsTest', () => {
  it('knows how to display 0s', () => {
    expect(TimerUtils.getDurationString(0))
      .toBe('0:00');
  });
  it('knows how to display 1 second', () => {
    expect(TimerUtils.getDurationString(1))
      .toBe('0:01');
  });
  it('knows how to display 1 minute', () => {
    expect(TimerUtils.getDurationString(SEC_IN_MIN))
      .toBe('1:00');
  });
  it('knows how to display 1 hour', () => {
    expect(TimerUtils.getDurationString(SEC_IN_HOUR))
      .toBe('1:00:00');
  });
  it('knows how to display 1 hour 1 second', () => {
    expect(TimerUtils.getDurationString(SEC_IN_HOUR + 1))
      .toBe('1:00:01');
  });
  it('knows how to display 1 hour 1 minute 1 second', () => {
    expect(TimerUtils.getDurationString(SEC_IN_HOUR + SEC_IN_MIN + 1))
      .toBe('1:01:01');
  });
  it('knows how to display 5 minutes 39 seconds', () => {
    expect(TimerUtils.getDurationString(5 * SEC_IN_MIN + 39))
      .toBe('5:39');
  });
});
