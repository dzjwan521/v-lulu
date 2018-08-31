
<script>
    export default {
        name: "luRow",
        data() {
            return {};
        },
        props: {
            gutter: Number || String,
            type: String,
            justify: {
                type: String,
                default: 'start'
            },
            align: {
                type: String,
                default: 'top'
            }
        },
        components: {},
        computed: {
            style() {
                var style = {};
                if (this.gutter) {
                    style.marginLeft = `-${this.gutter / 2}px`;
                    style.marginRight = style.marginLeft;
                }
                return style
            }
        },
        methods: {},
        render(h) {
            const clazz = [
                'lu-row',
                this.justify !== 'start' ? `is-justify-${this.justify}` : '',
                this.align !== 'top' ? `is-align-${this.align}` : '',
                { 'lu-row_flex': this.type === 'flex' }
            ]
            return (
                <div style={this.style} class={clazz}>
                    {this.$slots.default}
                </div>
            )
        }
    };
</script>

