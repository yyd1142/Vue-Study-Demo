import api from '@/api';
import { TabBar, HeaderBar } from "@/components";

export default {
    components: {
        TabBar,
        HeaderBar
    },
    data() {
        return {
            list: []
        };
    },
    mounted() {
        this.getNewsList();
    },
    methods: {
        getNewsList() {
            const params = `?m=list&page=1&count=3`;
            api.getList(params).then(res => {
                if (res.code === 0) {
                    const response = res.response;
                    this.list = response.datas;
                } else {
                    console.error(res);
                }
            })
        }
    },
};