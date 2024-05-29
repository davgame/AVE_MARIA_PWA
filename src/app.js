if ('serviceWorker' in navigator){
    navigator.serviceWorker.register("src/sw.js")
        .then(()=>console.log("Зарегестрировали"))
        .catch(()=>console.log("Получили ошибку"))
}