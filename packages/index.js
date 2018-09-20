import Button from './button/index.js';
import Row from './row/index'
import Col from './col/index'
import Divider from './divider/index'
import Tip from './tip/index'
import luDatePicker from './date-picker/index'
import loadingBar from './loading-bar/index'
import Alert from './alert'
import Tag from './tag'
import Input from './input'
import Modal from './modal'
import Radio from './radio'
import Checkbox from './checkbox'
import Showmore from './show-more'

const components = [
    Button,
    Row,
    Col,
    Divider,
    Tip,
    luDatePicker,
    Alert,
    Tag,
    Showmore,
    Input,
    Radio,
    Checkbox
]

const install = function (Vue) {
    if (install.installed) return
    components.map(component => Vue.component(component.name, component))
    Vue.prototype.$loadingBar = loadingBar
    Vue.prototype.$modal = Modal
    Vue.prototype.$alert = Modal.alert
    Vue.prototype.$prompt = Modal.prompt
    Vue.prototype.$confirm = Modal.confirm
}

if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue)
}

export default {
    install,
    Button,
    Row,
    Col,
    Divider,
    Tip,
    luDatePicker,
    loadingBar,
    Alert,
    Tag,
    Showmore,
    Input,
    Modal,
    Radio,
    Checkbox
}
