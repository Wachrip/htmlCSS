onmessage = function (e) {
  var workerResult = +e.data[0] / +e.data[1];
  postMessage(workerResult);
};
