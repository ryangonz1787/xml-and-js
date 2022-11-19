/**
 * 1. Replace regular functions with arrow functions
 * 2. Fix callback hell by rewriting it with async/await
 * 3. Make sure the "Finish" is logged after all the data is converted
 */



/*
function timeout(ms, callback) {
  return new Promise(function (resolve) {
   setTimeout(function () {
     resolve();
     callback();
   }, ms);
 });
}
*/

const timeout = async(ms) => {
    await new Promise ((resolve) => setTimeout(resolve, ms));
}




 

/*------------------------------------*/




/*function generateRandomNumber() {
  return Math.floor(Math.random() * 40);
}*/

const generateRandomNumber = async () => {
      await Math.floor(Math.random()*40);
}



/*------------------------------------------------------------*/

const generateData2 = async () => {
  await timeout(1000);

  const data = await new Promise
  Array.from({ length:20 }).map(() => generateRandomNumber());

  console.log(data);

};

generateData2();


/*------------------------------------------------------------*/


/*------------------------------------*/


/*function generateData(callback) {
  timeout(1000, function () {
    const data = Array.from({ length: 20 }, generateRandomNumber);
    callback(data);
  });
}
*/

const generateData = async() => {
    await timeout(1000);
    const data = Array.from({ length: 20 }, generateRandomNumber);
    return data;
}


/*----------------------------------*/

/*
function convertToFeet(meters, callback) {
  const feet = meters * 3.2808;
  timeout(3500, function () {
    callback(feet);
  });
}
*/


const convertToFeet = async(meters) => {
    const feet = meters * 3.2808; 
         await timeout(3500); 
        return feet;
  }

/*------------------------------------*/

/*------------------------------------------------------------*/

const convertToFeet2 = async (meters, callback) => {
  const feet = meters * 3.2808;

  await timeout(3500);
  
  return feet;
};



/*------------------------------------------------------------*/

/*
function processData(data, callback) {
  data.map(function (value) {
    callback(value);
  });
}
*/

const processData = async(data) => {
   await generateData((value) => {
      (value);
    });
  }


/*------------------------------------*/

/*
function logResult(meters, feet) {
  console.log(`Converted ${meters}m to ${feet}ft`);
}
*/

const logResult = (meters, feet) => {
    console.log(`Converted ${meters}m to ${feet}ft`);
}

/*------------------------------------*/

 /*function main() {
   console.log("Start");
   generateData( function (data) {
     processData(data, function (value) {
       convertToFeet(value, function (result) {
         logResult(value, result);
      });
    });
  });
   console.log("Finish");
}
*/


/*------------------------------------------------------------*/

const logResult2



/*------------------------------------------------------------*/




const main = async() => {
    console.log("Start");
    const data = await generateData2();
    const converted = await processData (data);
    converted.map(({converted, original}) =>{
      logResult(original, converted);
    });

    console.log("Finish");
}

main();

