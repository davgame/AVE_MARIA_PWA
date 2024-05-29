if ('serviceWorker' in navigator){
    navigator.serviceWorker.register("public/sw.js")
        .then(()=>console.log("Зарегестрировали"))
        .catch(()=>console.log("Получили ошибку"))
}