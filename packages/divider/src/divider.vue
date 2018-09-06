
<!--
luDivider
/*
 * @Author: dzj
 * @Date: 2018-08-31 11:40:53
 * @Last Modified by: dzj
 * @Last Modified time: 2018-09-01 15:17:36
 */
 -->
<script>
    export default {
        name: 'luDivider',
        props: {
            type: {
                type: String,
                default: 'horizontal'
            },
            orientation: {
                type: String,
                default: 'center'
            },
            dashed: {
                type: Boolean,
                default: false
            }
        },
        components: {},
        computed: {
            ori() {
                const val = this.orientation
                switch (val) {
                    case 'left': return 'lu-divider_div_left-title';
                    case 'right': return 'lu-divider_div_right-title';
                    case 'center': return 'lu-divider_div_center-title';
                }
            },
            dash() {
                const val = this.dashed
                return val ? 'is-dashed' : ''
            }
        },
        render(h) {
            const classes = []
            classes.push('lu-divider_div')
            classes.push(this.ori)
            classes.push(this.dash)
            return (
                <div class={classes}>
                    <span class="lu-divider_span">{this.$slots.default}</span>
                </div>
            )
        }
    }

</script>
