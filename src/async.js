// const myPromise = new Promise((resolve,reject) => {
//     if(false) {
//         setTimeout(() => {
//             resolve("I have succeeded");
//         },3000);
//     } else {
//         reject("I have failed");
//     }
// });

// myPromise
//     .then(value => console.log(value))
//     .catch(rejValue => console.log(rejValue));

//"I have falied" ----> in console 

    const myPromise = new Promise((resolve,reject) => {
        if(true) {
            setTimeout(() => {
                resolve("I have succeeded");
            },3000);
        } else {
            reject("I have failed");
        }
    });
    
    myPromise
        .then(value => value + "!!!!!!!!!!!!!!!!!")
        .then(newValue => console.log(newValue))
        .catch(rejValue => console.log(rejValue));