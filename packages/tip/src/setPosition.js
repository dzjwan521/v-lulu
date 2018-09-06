function setPosition(placement, offsetLeft, offsetTop, contentW, contentH, w, h) {
    switch (placement) {
        //上
        case 'top-start':
            return {
                top: offsetTop - contentH - 8,
                left: offsetLeft
            }
        case 'top-center':
            return {
                top: offsetTop - contentH - 8,
                left: offsetLeft - (contentW - w) / 2
            }
        case 'top-end':
            return {
                top: offsetTop - contentH - 8,
                left: offsetLeft - (contentW - w)
            }
            //下
        case 'bottom-start':
            return {
                top: offsetTop + h + 8,
                left: offsetLeft
            }
        case 'bottom-center':
            return {
                top: offsetTop + h + 8,
                left: offsetLeft - (contentW - w) / 2
            }
        case 'bottom-end':
            return {
                top: offsetTop + h + 8,
                left: offsetLeft - (contentW - w)
            }

            //左
        case 'left-start':
            return {
                top: offsetTop,
                left: offsetLeft - contentW - 8
            }
        case 'left-center':
            return {
                top: offsetTop - (contentH - h) / 2,
                left: offsetLeft - contentW - 8
            }
        case 'left-end':
            return {
                top: offsetTop - (contentH - h),
                left: offsetLeft - contentW - 8
            }
            //右
        case 'right-start':
            return {
                top: offsetTop,
                left: offsetLeft + w + 8
            }
        case 'right-center':
            return {
                top: offsetTop - (contentH - h) / 2,
                left: offsetLeft + w + 8
            }
        case 'right-end':
            return {
                top: offsetTop - (contentH - h),
                left: offsetLeft + w + 8
            }
    }
}
export default setPosition
