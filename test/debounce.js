// 防抖

function now() {
    return +new Date();
}

/**
 * 
 * @param {function} func        回调函数 
 * @param {number} wait          时间窗口的间隔
 * @param {boolean} immediate    true,是否立即调用函数
 * @return {function}            返回客户调用函数
 */
function debounce(func, wait = 50, immediate = true) {
    let timer, context, args;

    // 延迟执行函数
    const later = () => setTimeout(() => {
        timer = null;

        if (!immediate) {
            func.apply(context, args);
            context = args = null;
        }
    }, wait);

    return function (...params) {
        if (!timer) {
            timer = later();
            if (immediate) {
                func.apply(this, params);
            } else {
                context = this;
                args = params;
            }
        } else {
            clearTimeout(timer);
            timer = later();
        }
    }
}