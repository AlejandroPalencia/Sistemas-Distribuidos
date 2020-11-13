async function fasync(nodo){

    console.log("comunicado con " + node)
}


async function awaitAll(data, f) {
    const tasks = data.map(y => f(y))
    return await Promise.all(tasks)

}

result = await awaitAll(['nodo1', 'nodo2', 'nodo3'], fasync)