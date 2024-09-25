const base = {
    get() {
        return {
            url : "http://localhost:8080/campusServices/",
            name: "campusServices",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/campusServices/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "校园二手交易小程序"
        } 
    }
}
export default base
