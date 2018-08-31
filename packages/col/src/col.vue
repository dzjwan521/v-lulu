
<!--
/*
 * @Author: dzj
 * @Date: 2018-08-30 10:44:43
 * @Last Modified by: dzj
 * @Last Modified time: 2018-08-31 11:00:28
 */
  -->
<script>
    export default {
        name: "luCol",
        props: {
            span: {
                type: [String, Number],
                default: 24,
            },
            order: [String, Number],
            offset: [String, Number],
            pull: [String, Number],
            push: [String, Number],
            xs: [Number, Object],
            sm: [Number, Object],
            md: [Number, Object],
            lg: [Number, Object]
        },
        components: {},
        computed: {
            gutter() {
                let parent = this.$parent;
                while (parent && parent.$options._componentTag !== 'lu-Row') {
                    parent = parent.$parent;
                    // console.log(parent);
                }
                return parent ? parent.gutter : 0;
            }
        },
        render(h, context) {
            let style = {}
            if (this.gutter) {
                style.paddingLeft = this.gutter / 2 + 'px';
                style.paddingRight = style.paddingLeft;
            }

            const classes = [
                'lu-col',
                "lu-col-" + this.span
            ]
            const propList = ['span', 'offset', 'pull', 'push', 'order']
            propList.forEach(prop => {
                if (this[prop]) {
                    classes.push(
                        prop !== 'span'
                            ? `lu-col-${prop}-${this[prop]}`
                            : `lu-col-${this[prop]}`
                    );
                }
            });

            const screenList = ['xs', 'sm', 'md', 'lg']
            screenList.forEach(size => {
                if (typeof this[size] === 'number') {
                    classes.push(`lu-col-${size}-${this[size]}`);
                } else if (typeof this[size] === 'object') {
                    let props = this[size];
                    Object.keys(props).forEach(prop => {
                        classes.push(
                            prop !== 'span'
                                ? `lu-col-${size}-${prop}-${props[prop]}`
                                : `lu-col-${size}-${props[prop]}`
                        );
                    });
                }
            });

            return (
                <div class={classes} style={style}>
                    {this.$slots.default}
                </div>
            )
        }
    };
</script>
