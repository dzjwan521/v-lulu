<template>
  <transition name="lu-alert-fade">
    <div class="lu-alert"
         :class="[ typeClass, {'is-center': center} ]"
         v-show="visible">
      <i class="lu-alert__icon"
         :class="[ iconClass, isBigIcon ]"
         v-if="showIcon"></i>
      <div class="lu-alert__content">
        <span class="lu-alert__title"
              :class="isBoldTitle"
              style="">{{this.title}}</span>
        <p class="lu-alert__description"
           v-if="description">{{description}}</p>
        <i v-if="closable"
           class="lu-alert__closebtn"
           :class="[ closeText ? 'is-customed' : 'lu-icon-close2']"
           @click="close">{{closeText}}</i>
      </div>
    </div>
  </transition>
</template>
<script>
    function isTextNode(vnode) {
        if (
            Array.isArray(vnode) &&
            vnode.length === 1 &&
            vnode[0].tag === undefined &&
            vnode[0].text
        ) {
            return true;
        } else {
            return false;
        }
    }

    export default {
        name: "WAlert",
        props: {
            title: {
                type: String,
                requre: true,
                default() {
                    const defaultNode = this.$slots.default;
                    return isTextNode(defaultNode) ? defaultNode[0].text : undefined;
                }
            },
            type: {
                type: String,
                default: "info"
            },
            showIcon: {
                type: Boolean,
                default: false
            },
            center: {
                type: Boolean,
                default: false
            },
            closeText: {
                type: String
            },
            closable: {
                type: Boolean,
                default: true
            },
            description: {
                type: String
            }
        },
        data() {
            return {
                visible: true
            };
        },
        computed: {
            typeClass() {
                return `lu-alert--${this.type}`;
            },
            iconClass() {
                //暂无对应图标
                // return `lu-icon--${this.type}`
                return "lu-icon-fav";
            },
            isBoldTitle() {
                return this.description ? "is-bold" : "";
            },
            isBigIcon() {
                return this.description ? "is-big" : "";
            }
        },
        methods: {
            close(e) {
                this.visible = false;
                this.$emit("close");
            }
        }
    };
</script>
