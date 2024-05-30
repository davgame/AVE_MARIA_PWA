if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('./src/sw.js')
        .then(registration => {
          console.log('Зарегестрировали', registration.scope);
        })
        .catch(error => {
          console.log('Ошибка регистрации', error);
        });
    });
 }