// 本试卷唯一 ID: CB162FBD7BAD4A8310648F8728C79C62, 请勿修改本行内容
/**
 * 回答方式: 直接保存或者复制本js文件, 然后在原处作答. 注意不要改动函数结构
 * 在原本的函数体里返回正确答案
 * 本卷直接用代码判卷, 没有人工干预. 格式改动会导致试卷无效
 */
module.exports = {
    // 选择题, 单项选择, 每题4分
    // 直接返回正确答案字符串, 如 `return 'A';`
    // 实现题, 每题10分

    qn0: () => {
        // 只是样例! 不用改动
        //
        // A. 别选我
        //
        // B. 别选我
        //
        // C. 选我, 选我就得分
        //
        // D. 别选我
        return 'C';
    },
    qn1: () => {
        // 关于HTTPS / SSL / TLS, 以下错误的是:
        //
        // A. 公司内网需要监控解密HTTPS时, 可以在客户端安装公司自己的CA证书
        //
        // B. 后续的HTTPS通讯, 客户端和服务器端的通讯会使用非对称加密
        //
        // C. 最常用的非对称加密算法RSA, 是基于大素数分解质因数实现的
        //
        // D. 当客户端收到服务器端发送的证书, 证书充当公钥. 为了验证证书有效性, 用客户端已经安装的CA证书检查
        return A;
    },
    qn2: () => {
        // 以下代码片段, 选择它的打印输出 (省略换行)
        //
        //    ```js
        //    function fn2(){
        //      for(var i=0;i<4;i++){
        //        var timer=setInterval(function(i,timer){
        //          console.log(i);
        //          clearInterval(timer)
        //        },10,i,timer);
        //      }
        //    }
        //    fn2();
        //    ```
        //
        // A. 打印为空
        //
        // B. 0 1 2 3 随机顺序出现, 总个数一致
        //
        // C. 0 1 2 3 3 3 3 重复
        //
        // D. 0 1 2 3 0 1 2 3 四个数重复
        return C;
    },
    qn3: () => {
        // 以下代码片段, 选择它的打印输出 (省略换行)
        //    ```js
        //    const a = [];
        //    for (var i=0; i<10; i++) {
        //      a.push(function() {
        //        return console.log(i);
        //      });
        //    }
        //    a[0]();
        //    a[1]();
        //    ```
        //
        // A. 10 10
        //
        // B. 0 1
        //
        // C. 不打印
        //
        // D. undefined undefined
        return A;
    },
    qn4: () => {
        // 前端在 foobar.com, 向 api.foobar.com 发送请求, 以下哪个请求不需要OPTIONS preflight (以Chrome为准):
        //
        // A. 一个POST请求, 有User-Agent和Connection头
        //
        // B. 一个GET请求, 有Content-Type头, 值为application/json
        //
        // C. 一个PUT请求, 没有头
        //
        // D. 一个HEAD请求, 有Authorization头
        return C;
    },
    qn5: () => {
        // 以下方法中, 返回值类型和其他最不同的:
        //
        // A. Array.map
        //
        // B. Array.forEach
        //
        // C. Array.splice
        //
        // D. Array.reduce
        return A;
    },
    qn6: () => {
        // 以下哪个场景*不适合*使用WebSocket:
        //
        // A. 去中心化游戏应用, 两人对战用WebSocket通知对手位置, 对战结束后胜负结果上链
        //
        // B. 交易页面, 用户用RESTful API下单, WebSocket告知用户订单成交
        //
        // C. 用户在线聊天, 发送聊天内容和接收聊天内容都用WebSocket传输
        //
        // D. 身份审核, 提交文件后1-2个工作日审核完毕, WebSocket通知用户审核完毕
        return B;
    },
    qn7: () => {
        // 以下哪个不是服务器端渲染SSR的问题:
        //
        // A. 框架支持不完善
        //
        // B. 搜索引擎不执行JS
        //
        // C. 性能开销大
        //
        // D. 缓存机制复杂
        return B;
    },
    qn8: () => {
        // 以下代码片段, 选择它的打印输出 (省略换行)
        //
        //    ```js
        //    function fn1(){
        //      for(var i=0;i<4;i++){
        //        var timer=setTimeout(function(i){
        //          console.log(i);
        //          clearTimeout(timer)
        //        },10,i);
        //      }
        //    }
        //    fn1();
        //    ```
        //
        // A. 0 1 2 3
        //
        // B. 3 2 1 0
        //
        // C. 0 1 2
        //
        // D. 打印为空
        return C;
    },
    qn9: () => {
        // 以下哪个元素, 不符合在默认情况下, 设置margin上下距离和宽高无效, 但是其他样式有效:
        //
        // A. input
        //
        // B. label
        //
        // C. span
        //
        // D. p
        //
        // E. a
        //
        // F. code
        //
        // G. strong
        //
        // H. sub
        //
        // I. button
        return D;
    },
    qn10: () => {
        // 以下表达式中能去除所有空格的是:
        //
        // A. str = str.replace(/\s*/g,"");
        //
        // B. str = str.replace( /^\s*/, “”);
        //
        // C. str = str.replace(/(\s*$)/g, "");
        //
        // D. str = str.replace(/^\s*|\s*$/g,"");
        return A;
    },
    qn11: () => {
        // CSS中, flex是哪三个flex关键字的简写 (可以查文档):
        //
        // A. flex-direction, flex-grow, flex-shrink
        //
        // B. flex-direction, flex-wrap, flex-flow
        //
        // C. flex-direction, flex-basis, flex-flow
        //
        // D. flex-grow, flex-shrink, flex-basis
        return D;
    },
    qn12: () => {
        // 关于Linux命令, 错误的是:
        //
        // A. grep -C 3 "关键词" 命令可以找到包含"关键词"的行, 以及展示上面3行和下面3行
        //
        // B. cat out.txt | vim 这个命令用管道可以把out.txt中的文本导到vim中编辑
        //
        // C. ls -l命令可以列出文件, 但不包含隐藏文件
        //
        // D. man <some_command> 可以查看命令的手册, man代表manual
        return B;
    },
    qn13: () => {
        // 关于HTML自定义标签, 错误的是:
        //
        // A. 已知的HTML自定义标签才能应用CSS, 以及用JS操作. 未知的HTML标签会成为HTMLUnknownElement的实例
        //
        // B. HTML自定义标签可以应用CSS
        //
        // C. <greeting></greeting> 这段HTML代码是合法的, 可以被正常展示
        //
        // D. HTML自定义标签可以用JS操作
        return A;
    },
    qn14: () => {
        // 以下关于Redux, 错误的是:
        //
        // A. Redux用于应用的状态管理
        //
        // B. Redux store可以从js文件export并在任意位置使用
        //
        // C. Reducer中不能做异步操作
        //
        // D. 使用Redux时需要先引入React依赖
        return B;
    },
    qn15: () => {
        // 以下哪个权重最大:
        //
        // A. 内联样式
        //
        // B. 类选择器（如 .content）
        //
        // C. 标签选择器（如 div、p）
        //
        // D. ID选择器（如 #content ）
        return A;
    },
    qn16: () => {
        // 关于git, 以下命令中只涉及本地仓库的为:
        //
        // A. git branch -l -a
        //
        // B. git push
        //
        // C. git reset --hard ORIG_HEAD
        //
        // D. git fetch --all
        return C;
    },
    qn17: () => {
        // 以下哪个HTTP状态码非错误状态:
        //
        // A. 400
        //
        // B. 404
        //
        // C. 500
        //
        // D. 303
        return C;
    },
    qn18: () => {
        // 关于let和var, 以下正确的是:
        //
        // A. let是块级作用域, var是函数级作用域, let和var变量定义都会提升 (hoist)
        //
        // B. let是块级作用域, var是函数级作用域, var变量定义会提升 (hoist), let不会
        //
        // C. let是函数级作用域, var是块级作用域, let和var变量定义都会提升 (hoist)
        //
        // D. let是函数级作用域, var是块级作用域, let变量定义会提升 (hoist), var不会
        return B;
    },
    qn19: () => {
        // 以下代码片段, 选择它的打印输出 (省略换行)
        //
        //    ```js
        //    console.log(0.25 + 0.25 === 0.5);
        //    console.log(0.1 + 0.2 === 0.3);
        //    ```
        //
        // A. true false
        //
        // B. true true
        //
        // C. false true
        //
        // D. false false
        return A;
    },
    qn20: () => {
        // 以下代码片段, 选择它的打印输出 (省略换行)
        //    ```js
        //    var m = true;
        //    setTimeout(
        //      function() {
        //        m = false;
        //      }, 3000);
        //    );
        //    while(m) {}
        //    console.log('DONE');
        //    ```
        //
        // A. 代码抛错
        //
        // B. 不打印
        //
        // C. DONE (约3秒后打印, 不精确)
        //
        // D. DONE (立即打印)
        return A;
    },

    /**
     * 统计数组中每个字符串出现次数
     * @param string[] strs: 字符串数组, 例如 ['aa', 'ab', 'ab', 'cc', 'cba']
     * @return {[key: string]: number} 出现次数对象, 例如 { aa: 1, ab: 2, cc: 1, cba: 1 }
     */
    frequencyMap: strs => {
        //TODO your code goes here...
        let obj = {};
        strs.map(item => {
            if (obj[item]) {
                obj[item]++;
            } else {
                obj[item] = 1;
            }
        });
        return obj;
    },
    /**
     * 请处理给定字符串:
     *   - 去掉无用字符和乱码, 只保留大小写英文字母, 单引号, 和空格
     *   - 把一个或多个连续无用字符和乱码换成一个空格. 注意多个乱码只替换成一个空格
     * @param str: 字符串, 例 "I'm我我我driving是to乱乱Beijing码after breakfast88"
     * @return str: 例 "I'm driving to Beijing after breakfast "
     */
    decode: str => {
        //TODO your code goes here...
        let reg1 = /[^(a-zA-Z|\')]/g;
        let reg2 = /\s+/g;
        return str.replace(reg1, " ").replace(reg2, " ");
    },
    /**
     * 会议室, 输入是一个数组, 所有会议的开始和结束时间. 输出一共需要多少个会议室
     * @param meetings: 二维数组, 例 [[10, 20], [20, 30]],
     * @return int: 需要的会议室的个数, 例 1
     * 另一个测试用例: [[10,20], [19,30]] => 2
     */
    minRequiredMeetingsRooms: meetings => {
        //TODO your code goes here...
        let obj = [];
        meetings.forEach(item => {
            obj.push({
                start: item[0],
                end: item[1]
            })
        });
        if (!obj || obj.length < 1) {
            return;
        };
        obj.sort((obj1, obj2) => {
            return obj1.end - obj2.end;
        });
        let count = 1,
            now = obj[0].end;
        for (let i = 1; i < obj.length; i++) {
            if (now > obj[i].start) {
                count++;
                now = obj[i].end;
            }
        }
        return count;
    },
    /**
     * 部门安排所有组合
     * @param departments: dict, key是部门名, value是每个部门对应所有员工ID数组
     *   例 {'frontend': [1, 2], 'backend': [3, 4], 'devops': [5]}
     * @param required_department: dict, 该任务需要参与的部门和需要的人数
     *   例 {'frontend': 2, 'backend': 1}
     * @return 所有可能的员工组合, 例 [[1, 2, 3], [1, 2, 4]]. 按员工ID升序排序
     */
    staffCombinations: (department_staff_dict, required_staff) => {
        //TODO your code goes here...
        return null;
    },
    /**
     * 大整数相加. 正常相加会溢出的两个整数, 以字符串方式相加
     * @param num1 加数, 字符串, 例 '123456789123456789'
     * @param num2 加数, 字符串, 例 '987654321987654321'
     * @return 和, 例             '1111111111111111110'
     */
    addStrings: (num1, num2) => {
        //TODO your code goes here...
        //补零a和b对齐
        if (num1.length < num2.length) {
            num1 = "0" + num1;
        }
        if (num2.length < num1.length) {
            num2 = "0" + num2;
        }
        //进位
        let addOne = 0;
        //结果数组
        let result = [];
        //个位数开始相加
        for (let i = num1.length - 1; i >= 0; i--) {
            let c1 = num1.charAt(i) - 0;
            let c2 = num2.charAt(i) - 0;
            let sum = c1 + c2 + addOne;
            if (sum > 9) {
                result.unshift(sum - 10);
                addOne = 1;
            } else {
                result.unshift(sum);
                addOne = 0;
            }
        }
        if (addOne) {
            result.unshift(addOne);
        }
        if (!result[0]) {
            result.splice(0, 1);
        }
        return result.join("");
    },
}