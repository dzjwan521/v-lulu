
<!--
luDivider
/*
 * @Author: dzj
 * @Date: 2018-08-31 11:40:53
 * @Last Modified by: dzj
 * @Last Modified time: 2018-08-31 14:25:54
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
                default: 'left'
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
            }
        },
        render(h) {
            const classes = []
            classes.push('lu-divider_div')
            classes.push(this.ori)
            return (
                <div class={classes}>
                    <span class="lu-divider_div_text">{this.$slots.default}</span>
                </div>
            )
        }
    }

</script>
