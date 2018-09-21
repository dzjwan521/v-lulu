import Vue from 'vue'
import Button from '../../../packages/button'

describe('Button', () => {
    it('should render correct contents', () => {
        const Constructor = Vue.extend(Button)
        const vm = new Constructor().$mount()
        expect(vm.type).to.be.equal('default')
    })
})
