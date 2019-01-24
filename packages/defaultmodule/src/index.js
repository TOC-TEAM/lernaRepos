export default async function delayPromise(str, ms = 0) {
  const promise = new Promise(resolve => {
    setTimeout(() => resolve(str), ms)
  })
  console.log('lerna publish --canary --preid next')
  return await promise
}
