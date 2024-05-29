if ('serviceWorker' in navigator){
    navigator.serviceWorker.register("sw.js")
        .then(()=>console.log("Зарегестрировали"))
        .catch(()=>console.log("Получили ошибку"))
}