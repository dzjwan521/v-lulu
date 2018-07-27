<!-- tips -->
<script>
export default {
    name:'luTip',
    functional:true,
    props:{
        align:{
            type:String,
            default:'center' //'left','right'
        },
        direction:{
            type:String,
            default:'top' //'left','right'
        },
        content:{
            type:String,
            required: true
        },
        eventType:{
            type:String,
            default:'hover' //'click'
        },
        delay:{
            type:Number,    //单位ms
            default:100
        },
        onShow:{
            type:Function
        },
        onHide:{
            type:Function
        }
    },
    computed:{

    },
   render(h,context){
       const {props,children}=context
        const alignMap={
            left:'left',
            center:'center',
            right:'right',
        }
        const directionMap={
            top:'top',
            bottom:'bottom',
            left:'left',
            right:'right'
        }

        style={

        }
        const
       return (
           <div class={style}>
                <span>{this.content}</span>
                {children}
           </div>
       )
   }

}

</script>
