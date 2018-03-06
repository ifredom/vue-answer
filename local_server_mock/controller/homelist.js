var express = require('express');
var router = express.Router();

router.post('/', function(req, res, next) {
    res.json({
        statusCode: 200,
        data: [
            {
                id:'1',
                username: '知乎',
                lang: 'PHP',
                conver: '最受关注',
                zan: 101,
                content:
                    '我来过，我很乖。有一个小女孩，她的名字叫佘艳，她有一双亮晶晶的大眼睛和一颗透亮的童心。她是一个孤儿，她在这个世界上只活了8年'
            },
            {
                id: '2',
                username: '简书',
                lang: 'javascript',
                conver: '最多阅读',
                zan: 6,
                content:
                    '每个人都有一道伤口，或深或浅，盖上布，以为不存在。我把最殷红的鲜血涂在那里。你不懂我，我不怪你。'
            },
            {
                id: '3',
                username: 'github',
                lang: 'java',
                conver: '最具价值',
                zan: 161,
                content:
                    '每个人都有一场爱恋，用心、用情、用力，感动也感伤。我把最炙热的心情藏在那里。你不懂我，我不怪你。每个人都有一行眼泪，'
            },
            {
                id: '4',
                username: '掘金',
                lang: 'java',
                conver: '发掘潜力',
                zan: 132,
                content:
                    '喝下的冰冷的水，酝酿成的热泪。我把最心酸的委屈汇在那里。你不懂我，我不怪你。每个人都有一段告白，忐忑、不安，却饱含真心和勇气。我把最抒情'
            },
            {
                id: '5',
                username: 'Twitter',
                lang: 'java',
                conver: '发掘潜力',
                zan: 145,
                content: '且看下回分解了~~'
            },
            {
                id: '6',
                username: '世界的另一面',
                lang: 'java',
                conver: '发掘潜力',
                zan: 1,
                content: '且看下回分解了~~'
            }
        ],
        msg: '成功获取首页列表'
    });
    res.end();
});

module.exports = router;
