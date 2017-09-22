// 取消订阅，取消的是单一用户对某一消息的订阅
// 如何取消对某一消息的订阅？
var pubsub = {};
(function (q) {

    var topics = []  // 管理订阅信息
    var subUid = -1

    // 发布方法
    q.publish =function(topic, info){

        if(!topics[topic]){
            return false
        }
        setTimeout(function () {
            var subscribers = topics[topic]
            var len = subscribers?subscribers.length:0
            while (len--) {
                subscribers[len].func(topic, info)
            }

        },0)
        return true
    }

    // 订阅方法
    q.subscribe =function(topic,func){
        
        if(!topics[topic]){
            topics[topic] = []
        }
        var token = (++subUid).toString()
        topics[topic].push({
            token,
            func
        })
        return token
    }

    // 退订
    q.unsubscribe = function(token){ 

        for(let m in topics){
            if(topics[m]){
                for (let i = 0, j = topics[m].length; i < j; i++) {
                    if (topics[m][i].token === token) {
                        topics[m].splice(i, 1)
                        return
                    }
                }
            }
        }
        return false
    }

} (pubsub))

// 订阅一次，试一试
const subOne = pubsub.subscribe('example1',function(topic,info){
    console.log('收到订阅信息1-1： '+ topic,' : ',info)
})
const subTwo = pubsub.subscribe('example1',function(topic,info){
    console.log('收到订阅信息1-2： '+ topic,' : ',info)
})
pubsub.subscribe('example2',function(topic,info){
    console.log(topic,' : ',info)
})

pubsub.publish('example1', '发布了一篇。hello watcher!')
pubsub.publish('example2', '发布了一篇。hello watcher!')

// 退订一个
setTimeout(function () {
    pubsub.unsubscribe(subOne)
    // pubsub.unsubscribe(subTwo)
}, 0)

// 发布一篇
pubsub.publish('example1', '发布了一篇。hello watcher!')
pubsub.publish('example2', '发布了一篇。hello watcher!')







