export default async function delayPromise(str, ms = 0) {
  const promise = new Promise(resolve => {
    setTimeout(() => resolve(str), ms)
  })
  console.log('sssxxxxxxdssss--lerna publish --canary --preid')
  return await promise
}
