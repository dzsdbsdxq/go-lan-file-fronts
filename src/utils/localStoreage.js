export const setStore = (name, content, maxAge = null) => {
    if (!global.window || !name) {
        return
    }
    if (typeof content !== 'string') {
        content = JSON.stringify(content)
    }
    const storage = global.window.localStorage
    storage.setItem(name, content)
    //最大日期
    if (maxAge && !isNaN(parseInt(maxAge))) {
        const timeout = new Date().getTime() / 1000;
        storage.setItem(`${name}_expire`, timeout + maxAge)
        //设置当前时间+maxAge
    }
}

export const getStore = name => {
    //如果没有参数名就不往下走了
    if (!global.window || !name) {
        return
    }
    const content = window.localStorage.getItem(name)
    const _expire = window.localStorage.getItem(`${name}_expire`)
    //取的时候先判断_expire是否有，如果当前日期大于设置localstorage的日期，就不往下走
    if (_expire) {
        const now = new Date().getTime() / 1000;
        if (now > _expire) {
            return
        }
    }
//如果小于就能取到这个值
    try {
        return JSON.parse(content)
    } catch (e) {
        return content
    }
}

export const clearStore = name => {
    if(!global.window||!name){
        return
    }
    window.localStorage.removeItem(name)
}
