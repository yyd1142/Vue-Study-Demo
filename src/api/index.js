/**
 * Created by enjoyzhou on 17-2-16.
 */
import conf from './config';
import { httpGet, httpPost } from './requestService';

export default {
    // test 
    getList: httpGet('/api/platform/v2/dwInfo')
};
