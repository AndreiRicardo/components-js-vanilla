class ValidUtils {
  static isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  static isValidPhoneNumber(phone) {
    const phoneRegex = /^\+?[1-9]\d{1,14}$/;
    return phoneRegex.test(phone);
  }

  static isValidUrl(url) {
    try {
      new URL(url);
      return true;
    } catch (e) {
      return false;
    }
  }
  static isValidDate(dateString) {
    const date = new Date(dateString);
    return !isNaN(date.getTime());
  }
    static isValidNumber(number) {
        return !isNaN(number) && isFinite(number);
    }
  static isWithinRange(value, min, max) {
    return this.isValidNumber(value) && value >= min && value <= max;
  }
}

const validationUtils = new ValidUtils();
export { validationUtils };
