// http://www.cnblogs.com/TomXu/archive/2012/03/02/2355128.html
// 使用观察者模式的好处：
// 支持简单的广播通信，自动通知所有已经订阅过的对象。
// 页面载入后目标对象很容易与观察者存在一种动态关联，增加了灵活性。
// 目标对象与观察者之间的抽象耦合关系能够单独扩展以及重用。

//   发布中心，负责发送消息给订阅者
//   订阅者，可以订阅消息，收到推送后，做出具体反应

// 此demo局限，取消订阅必须知道特定的token（名字）才可以退订
// 取消订阅，取消的是单一用户对某一消息的订阅
// 如何取消对某一消息的订阅？
var pubsub = {};
(function (q) {
    var topics = []  // 管理订阅信息
    var subUid = -1
    // 发布方法
    q.publish =function(topic, info){
        var subscribers = topics
        var len = subscribers.length

        if(topics.length === 0){
            return false
        }
        while (len--) {
            subscribers[len].func(topic, info)
        }
        console.log(topics)
    }
    // 订阅方法
    q.subscribe =function(topic,func){
        var token = (++subUid).toString()
        topics.push({
            topic,
            token,
            func
        })
    }
    // 退订
    q.unsubscribe =function(token){ 
        if(!topics[token]){
            return false
        }
        for(let m =0; m<topics.length; m++){
            if (topics[m].token === token) { //全等则是严格模式，要求token都是字符串
                topics.splice(m, 1)
            }
        }
        return false
    }

} (pubsub))

// 订阅一次，试一试
pubsub.subscribe('example1',function(topic,info){
    console.log('第一次订阅-> '+topic,' : ',info)
})
pubsub.subscribe('example1',function(topic,info){
    console.log('第二次订阅->'+topic,' : ',info)
})

// 退订一个
pubsub.unsubscribe('0')

// 发布一篇
pubsub.publish('example1', '发布了一篇。hello watcher!')
pubsub.publish('example2', '发布了一篇。hello watcher!')






