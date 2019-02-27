export default {
    data() {
        return {
            tabs: [{
                name: '首页', path: "/"
            },{
                name: '资讯', path: "/news"
            },{
                name: '发现', path: "/find"
            },{
                name: '我的', path: "/my"
            }]
        }
    },
    methods: {
        onTabClick(item) {
            this.$router.replace(item.path);
        }
    },
};