class Util {
  constructor() {
    this.statusCode = null;
    this.type = null;
    this.data = null;
    this.message = null;
  }

  setSuccess(statusCode, message, data) {
    this.statusCode = statusCode;
    this.message = message;
    this.data = data;
    this.type = 'success';
  }

  setError(statusCode, message) {
    this.statusCode = statusCode;
    this.message = message;
    this.type = 'error';
  }

  send(res) {
    const { statusCode,message,data,type } = this;
    const result = { statusCode,message,data };
    
    if (type === 'success') {
      delete result.data;
    }
    
    return res.status(statusCode).json(result);
  }
}

module.exports = new Util();
