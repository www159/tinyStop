const {createModel} = require('../../model/todo')
module.exports = async (req, res) => {
    //连接todo数据库,根据session创建todo数据库文件
    console.log(req.session.userInfo.username)
    let todoList = await createModel(req.session.userInfo.username)
    console.log('create model',todoList)
    // await todoList.create({
    //   name: '喝酒',
    //   state: 0
    // })
    res.send(
                `<form action="" class="layui-form">
                    <div class="layui-layout-body">
                        <div class="layui-container" style="margin-top: 5%;">
                            <div style="padding: 30px; font-weight: bold; background: rgb(170, 168, 168);">
                                <div class="layui-row layui-col-space15">
                                   <div class="layui-col-md3 layui-col-sm3">
                                     <div class="layui-panel layui-bg-cyan">
                                       <div style="padding: 50px 40px;"  class="layui-col-md-offset2">
                                         信令服务器
                                         <div class="layui-form-checkbox layui-bg-cyan layui-col-md-offset1">
                                             <input type="checkbox" name="zzz" lay-skin="switch" lay-text="开启|关闭">
                                         </div>
                                                                                 
                                     </div>
                                     </div>   
                                   </div>
                                   <div class="layui-col-md3 layui-col-sm3">
                                     <div class="layui-panel layui-bg-cyan">
                                       <div style="padding: 50px 40px;">
                                         <div class="layui-col-md-offset5">插座</div>
                                         <div class="layui-form-checkbox layui-bg-cyan layui-col-md-offset4">
                                             <input type="checkbox" name="zzz" lay-skin="switch" lay-text="开启|关闭" disabled>
                                         </div>
                                       </div>
                                     </div>   
                                   </div>
                                   <div class="layui-col-md3 layui-col-sm3">
                                     <div class="layui-panel layui-bg-black">
                                     <div style="padding: 50px 40px;">
                                        <div class="layui-col-md-offset4">待开发</div>
                                            <div class="layui-form-checkbox layui-bg-black layui-col-md-offset4">
                                                <input type="checkbox" name="zzz" lay-skin="switch" lay-text="开启|关闭" disabled>
                                            </div>
                                     </div>
                                     </div>   
                                   </div>
                                   <div class="layui-col-md3 layui-col-sm3">
                                     <div class="layui-panel layui-bg-cyan">
                                         <div style="padding: 50px 40px;" class="layui-col-md-offset3">
                                             待开发
                                             <div class="layui-form-checkbox layui-bg-cyan">
                                                 <input type="checkbox" name="zzz" lay-skin="switch" lay-text="开启|关闭" disabled>
                                             </div>
                                         </div>
                                     </div>   
                                   </div>
                                 </div> 
                                <div>
                                    <div class="layui-collapse" style="margin-top: 3%;" lay-filter='todo'>
                                        <div class="layui-colla-item"  id='sup'>
                                          <h2 class="layui-colla-title layui-bg-black">todo-list</h2>
                                          <div class="layui-colla-content layui-bg-cyan" id="list" style="height:520px">
                                            <iframe id="todoFrame" style="width: 100%; height: 100%" src=""></iframe>
                                          </div>
                                        </div>
                                      </div>
                                </div>
                              </div>
                </div>
                </form>
                `
                )
}