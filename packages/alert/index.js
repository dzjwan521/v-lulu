/*
 * @Author: dzj
 * @Date: 2018-09-06 16:32:00
 * @Last Modified by:   dzj
 * @Last Modified time: 2018-09-06 16:32:00
 */

import Alert from './src/alert.vue';

Alert.install = function (Vue) {
    Vue.component(Alert.name, Alert);
};

export default Alert;
