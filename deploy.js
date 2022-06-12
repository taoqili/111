const axios = require('axios')
const shelljs = require('shelljs')

// 请配置以下两个参数
const project = 'cutler'
const version = 'sop'
const env = 'xuelei'


const repository = shelljs.exec('git remote -v').match(/http.*?\.git/)[0]
const branch = shelljs.exec('git rev-parse --abbrev-ref HEAD').replace(/[\r\t\n\s]/g, '')
console.log('%c正在发布，预计耗时1分钟左右，请耐心等候……', 'color: #43bb88;font-size: 24px;font-weight: bold;text-decoration: underline;');
axios.post(`http://local.eimos.com:3000/add`, {
    project,
    version,
    repository,
    branch
}).then(({data}) => {
    const {code, msg} = data
    console.log(msg)
})
