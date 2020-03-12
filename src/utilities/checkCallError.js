import FailureByDesign from './Errors';

const checkCallError = (call) => {
  console.log('CALL', call);
  if (!call.ok) {
    let { response } = call;
    let error = {};
    if (response) {
      try {
        response = JSON.parse(response);
      } catch (e) {} // eslint-disable-line no-empty
      error = response.error; // eslint-disable-line prefer-destructuring
    }
    const standardErrors = [403, 404, 500];
    if (standardErrors.includes(call.status)) {
      throw new FailureByDesign(error.type, error.details, call.status);
    }
    // Catch-all for non 2XX http responses
    throw new FailureByDesign(
      'BAD_RESPONSE',
      `Bad response from Data API. Status code: ${call.status} Response: ${JSON.stringify(call.response)}`,
    );
  }
};

export default checkCallError;
