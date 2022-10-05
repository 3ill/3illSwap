import  { abis } from '@my-app/contracts'
export const getRouterInfo = async (routerAddrress, web3) => {
  const router = new web3.eth.Contract(abis.router02, routerAddrress);

  return {
    factory: await router.methods.factory().call()
  }
}