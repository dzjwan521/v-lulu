var myMixin = {
    created: function () {

    },
    mounted() {
        this.stopScroll();
    },
    destroyed() {
        this.resetScroll()
    },
    methods: {
        stopScroll() {
            document.body.style = "overflow: hidden;"
        },
        resetScroll() {
            document.body.style = ""
        },
        remove() {
            this.$destroy()
            document.body.removeChild(this.$el)
        }
    }
}
export default myMixin
