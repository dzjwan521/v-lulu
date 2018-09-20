import Popup from './src/popup.vue'
import Vue from 'vue'
const PopupConstructor = Vue.extend(Popup)
const opts = {
    title: '提示',
    cancleBtn: '取消',
    confirmBtn: '确定',
    message: '',
    level: '',
    type: '',
    callback: null
}
let instance

const Modal = function (options) {
    return new Promise((resolve, reject) => {
        const newOpt = Object.assign({}, opts, options, {
            resolve,
            reject
        })
        newInstance(newOpt)
    })
}

Modal.alert = (options) => {
    return new Promise((resolve, reject) => {
        const newOpt = Object.assign({}, opts, options, {
            type: 'alert',
            resolve,
            reject
        })
        newInstance(newOpt)
    })
}

Modal.prompt = (options) => {
    return new Promise((resolve, reject) => {

        const newOpt = Object.assign({}, opts, options, {
            type: 'prompt',
            resolve,
            reject
        })
        newInstance(newOpt)
    })
}
Modal.confirm = (options) => {
    return new Promise((resolve, reject) => {
        const newOpt = Object.assign({}, opts, options, {
            type: 'confirm',
            resolve,
            reject
        })
        newInstance(newOpt)
    })
}

function newInstance(newOpt) {
    instance = new PopupConstructor()

    for (let prop in newOpt) {
        if (newOpt.hasOwnProperty(prop)) {
            instance[prop] = newOpt[prop];
        }
    }
    let callback = instance.callback;
    if (typeof callback === 'function') {
        callback(instance.inputValue, action);
    } else {
        instance.callback = defaultCallback
    }

    if (isVNode(instance.message)) {
        instance.$slots.default = [instance.message];
        instance.message = null;
    } else {
        delete instance.$slots.default;
    }
    instance.$mount()
    document.body.appendChild(instance.$el)
    Vue.nextTick(() => {
        instance.show()
    });
}

function defaultCallback(action) {
    if (instance) {
        if (instance.resolve && (action === 'confirm')) {
            instance.resolve({
                action,
                value: instance.inputValue,
            });
        } else if (instance.reject) {
            instance.reject(action);
        }
    }
}

function removeInstance() {
    if (instance) {
        instance.hide()
        instance.$destroy()
        document.body.removeChild(instance.$el)
        instance = null
    }
}

const hasOwnProperty = Object.prototype.hasOwnProperty;
export function hasOwn(obj, key) {
    return hasOwnProperty.call(obj, key);
};

function isVNode(node) {
    return node !== null && typeof node === 'object' && hasOwn(node, 'componentOptions');
};

export default Modal
