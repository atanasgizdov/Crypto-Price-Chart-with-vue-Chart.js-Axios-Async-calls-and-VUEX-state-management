
import { expect } from 'chai'
import { mutations } from "@/store/mainstore.js"

const state = {
  favorite_coins : [],
  count : 0
}

describe('mutations', () => {
  it('Increments Vuex state by 1', () => {
    // apply mutation
    mutations.increment(state)
    // assert result
    expect(state.count).to.equal(1)
  })
})

describe('addCoin', () => {
  it('Mocks up the addCoin Vuex state mutator', () => {
    // apply mutation
    mutations.addCoin(state)
    // assert result
    expect(state.favorite_coins[0]).to.equal('etherium')
    expect(state.favorite_coins[1]).to.equal('bitcoin')
  })
})
