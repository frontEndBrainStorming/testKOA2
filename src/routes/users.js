const router = require('koa-router')()

router.prefix('/users') //prefix 

router.get('/', function(ctx, next) {
    ctx.body = 'this is a users response!'
})

router.get('/bar', function(ctx, next) {
    ctx.body = 'this is a users/bar response'
})
router.post('/login', async(ctx, next) => {
    const { userName, password } = ctx.request.body //和前端商量好变量名userName password
        //登录验证逻辑
    ctx.body = {
        str: '返回的',
        userName,
        password
    }
})
module.exports = router