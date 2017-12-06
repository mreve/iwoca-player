const SEC_IN_MIN = 60;
const SEC_IN_HOUR = 60 * SEC_IN_MIN;

class TimerUtils {
    static getDurationString(
      duration: number,
    ) {
      let result = '';

      const hours = Math.floor(duration / SEC_IN_HOUR);
      duration %= SEC_IN_HOUR;

      const mins = Math.floor(duration / SEC_IN_MIN);
      duration %= SEC_IN_MIN;

      const secs = duration;

      if (hours > 0) {
        result += hours + ':';
      }

      if (hours > 0 && mins < 10) {
        result += '0';
      }

      result += mins + ':';
      if (secs < 10) {
        result += '0';
      }

      result += secs;
      return result;
    }
}

export default TimerUtils;
