<template>
  <transition name="top-fade">
    <div class="lu-alert"
         :class="[ typeClass, {'is-center': center} ]"
         v-show="visible">
      <i class="lu-alert_icon"
         :class="[ iconClass, isBigIcon ]"
         v-if="showIcon"></i>
      <div class="lu-alert_content">
        <span class="lu-alert_title"
              :class="isBoldTitle"
              style="">{{this.title}}</span>
        <p class="lu-alert_description"
           v-if="description">{{description}}</p>
        <i v-if="closable"
           class="lu-alert_closebtn"
           :class="[ closeText ? 'is-customed' : 'iconfont icon-close']"
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
        name: "luAlert",
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
                return `lu-alert_${this.type}`;
            },
            iconClass() {
                return `iconfont lu-alert_icon_${this.type}`
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
