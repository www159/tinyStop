layui.use(['form', 'element'], () => {
    let elem = layui.element
    let form = layui.form
    elem.on('nav(nav)', (ele) => {
        //高亮显示
        // let item = $('#'+ele[0].id).parent()
        // let items = $('.layui-nav-item')
        // // console.log(items[0])
        // for(let i in items){
        //     $(i).removeClass('layui-this')
        // }
        // if(item.children().length == 1){
        //     item.addClass('layui-this')
        //     elem.render()
        // }

        //申请ajax渲染
        console.log(1)
        if(!$('todoFrame').length && ele[0].id === 'func'){
            window.location.href = '/home/func'
        }
        if(ele[0].id === 'main'){//TODO只对管理员开放
           window.location.href = '/home/main'
        }
        if(ele[0].id === 'back'){
            $.ajax({
                url: '/home/back/isLogin',
                type: 'get',
                success: function(res){//
                    if(res === 'unlogged'){
                        layer.msg('请登录', {
                            time: 0,
                            btn: ['登录', '我是路人'],
                            btn1: function(index, layero){
                                window.location.href = '/login'
                            },
                            btn2: function(index, layero){
                                layer.close(index)
                            }
                        })
                    }
                    else{
                        window.location.href = '/home/back'
                    }
                    // window.location.href = '/home/back'
                }
            })
        }
    })

    let hasTodoRender = false
    elem.on('collapse(todo)', (data) => {
        if(data.show && !hasTodoRender){
            layer.msg('打开todo-list', {
                time: 0,
                btn: ['好吧', '不要'],
                btn1: (index, layero) => {
                    //ajax渲染todoList
                    $('#todoFrame').attr('src', '/html/todoList.html')
                    hasTodoRender = true
                    layer.close(index)
                },
                btn2: (index, layero) => {
                    layer.msg('...')
                    return false
                }
            })
        }
    })

    form.on('switch(singalsh)', function(data){
        // console.log(data)
        let loader = layer.load(0)
        let checked = data.elem.checked
        if(checked){
            $.ajax({
                url:'/home/btn/signal/on',
                type: 'get',
                success: function(res){
                    layer.close(loader)
                    layer.msg('开启成功')
                },
                error: function(err){

                    layer.close(loader)
                    layer.msg('开启失败')
                    console.error(err)
                }
            })
        }
        else{
            $.ajax({
                url:'/home/btn/signal/off',
                type: 'get',
                success: function(res){
                    layer.close(loader)
                    layer.msg('关闭成功')
                },
                error: function(err){
                    layer.close(loader)
                    layer.msg('关闭失败')
                }
            })
        }
        return false
    })
})