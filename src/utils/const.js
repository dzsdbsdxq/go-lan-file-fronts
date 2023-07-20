export const config = {
    http:{
        url:process.env.NODE_ENV == "development"?"http://127.0.0.1:8009/":"https://ido.icu/",
    },
    websocket:{
        url:process.env.NODE_ENV == "development"?"ws://127.0.0.1:8010/acc":"wss://ido.icu/acc",
        reConnect:5
    },
    editor:null,
    content:"",
    apiKey:"R1dVc0ZaWWpNVU1ieWZWcGpJQmxOemUrOGxlcjRRamNqeVZjUjV2UGZ4YktBbC9rWW05cWcweTNGVUdqMXFrcVV5WUhEKzN4eVZlamViZWZDcTV5UFE9PQ==",
    editorKey:Math.random(),
}
