function delayedMemoCall(startDelay){
    let currentDelay = startDelay;

    let delayer = async function(func, context){
        return await new Promise((resolve, reject) => {
            setTimeout(() => {
                func.call(context);
                resolve();
            }, currentDelay);
        });
    }

    delayer.setDelay = function(newDelay) {
        currentDelay = newDelay;
    }

    return delayer;
}


const obj = {
  testProp: 123,
  getData() {
    alert(this.testProp);
  }
}

const otherObj = {
  testProp: 456,
}

const delayer = delayedMemoCall(3000);

(async () => {
    await delayer(obj.getData, obj);// 123 after 3 seconds
    await delayer(obj.getData, otherObj); // 456 after 3 seconds
    await delayer(obj.getData, otherObj); // 456 after 3 seconds

    otherObj.testProp = 789; // mutation affects only next calls

    await delayer(obj.getData, otherObj); // 789 after 3 seconds

    delayer.setDelay(5000); // setting delay affects only next calls

    await delayer(obj.getData, otherObj); // 789 after 5 seconds
})();