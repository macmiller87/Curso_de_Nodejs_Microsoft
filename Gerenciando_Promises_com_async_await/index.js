// Exemplo de promises com funçoes e métodos async e await, são funções assincronas

function promiseTimeout(ms) {

    return new Promise((resolve, reject) => {
  
      setTimeout(resolve, ms)
    })
  
}

async function simulatelogOperation() {

    await promiseTimeout(1000)
    return 42;
  
}

async function run() {

    const a = await simulatelogOperation();
    console.log(a);
  
  }
  
run();