export default async function delayPromise(str, ms = 0) {
  const promise = new Promise(resolve => {
    setTimeout(() => resolve(str), ms)
  })
  console.log('lerna publish --dist-tag next')
  return await promise
}
