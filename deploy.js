const axios = require('axios')
const shelljs = require('shelljs')

// 请配置以下两个参数
const PROJECT = 'cutler'
const VERSION = 'sop'


const origin = shelljs.exec('git remote -v').match(/http.*?\.git/)[0]
const branchName = shelljs.exec('git rev-parse --abbrev-ref HEAD').replace(/[\r\t\n\s]/g, '')
debugger

axios.post(`http://local.eimos.com:3000/add?project=${PROJECT}&version=${VERSION}`, {
    repository: origin,
    branch: branchName
}).then(res => {
    debugger
})
