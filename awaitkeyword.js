LOOK at the below two javascript snippets to understand how await keyword works.........
WTHOUT AWAIT KEYWORD ----------------------------------
function resolveAfter2Seconds() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('resolved');
    }, 2000);
  });
}

async function asyncCall() {
  console.log('calling');
  const result =   resolveAfter2Seconds();
  console.log('hello');
  console.log(result);
  // Expected output: "resolved"
}

asyncCall();
OUTPUT------
> "calling"
> "hello"
> [object Promise]
WITH AWAIT KEYWORD--------------------------
function resolveAfter2Seconds() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('resolved');
    }, 2000);
  });
}

async function asyncCall() {
  console.log('calling');
  const result =  await resolveAfter2Seconds();
  console.log('hello');
  console.log(result);
  // Expected output: "resolved"
}

asyncCall();
OUTPUT----------------
> "calling"
----------after two seconds---
> "hello"
> "resolved"

