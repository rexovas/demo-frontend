class FailureByDesign extends Error {
  constructor(code, message, status) {
    super(message);
    this.type = 'FailureByDesign';
    this.code = code;
    this.message = message;
    this.status = status;
  }
}

export default FailureByDesign;
