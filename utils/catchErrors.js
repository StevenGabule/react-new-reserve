function catchErrors(error, displayError) {
  let errorMsg;
  if (error.response) {
    // the request was made and the server responsed with a status code that is not in the range of 2xx
    errorMsg = error.response.data;
    console.log("Error response", errorMsg);

    // for cloudinary image uploads
    if (error.response.data.error) {
      errorMsg = error.response.data.error.message;
    }
  } else if (error.request) {
    // the request was made, but nore pose was receieved
    errorMsg = error.request;
    console.log("error request", errorMsg);
  } else {
    // something else happened in making the request that triggered an error
    errorMsg = error.message;
    console.log("Error message", errorMsg);
  }
  displayError(errorMsg);
}

export default catchErrors;
