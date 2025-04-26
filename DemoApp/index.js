function main() {
  console.log("WELCOME!!!!!!!!!!");
  console.log("The value of NAME env variable is", process.env.NAME);
  for (let i = 0; i < 10; i++) {
    console.log(`HII !!! ${i + 1}`);
  }
}
main();
