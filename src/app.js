const onWorkerReady = () => {
  console.log('Зарегестрирован');
}


navigator.serviceWorker.register('sw.js');

navigator.serviceWorker.ready.then(onWorkerReady);