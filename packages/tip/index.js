import Tip from './src/tip.vue';

Tip.install = function (Tip) {
    Vue.component(Tip.name, Tip);
};

export default Tip;
