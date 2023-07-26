<template>
    <div style=' width:100%; height:300px'>
    <div class="title">
        <h1>用户新增</h1>
    </div>
    <el-divider />
    <div class = "newUserBox">
        <div class = 'newUserTest'>
            <div class="tag-box">
                <el-check-tag class="tag" :checked="newUser.checked1" @change="newUserChange('checked1')" size="large">日新增</el-check-tag>
                <el-check-tag class="tag" :checked="newUser.checked2" @change="newUserChange('checked2')" size="large">新玩家登录次数</el-check-tag>
                <el-check-tag class="tag" :checked="newUser.checked3" @change="newUserChange('checked3')" size="large">日新增被邀请用户</el-check-tag>
                <el-check-tag class="tag" :checked="newUser.checked4" @change="newUserChange('checked4')" size="large">非华为包安卓新增用户</el-check-tag>
                <el-check-tag class="tag" :checked="newUser.checked5" @change="newUserChange('checked5')" size="large">苹果包新增用户</el-check-tag>
                <el-check-tag class="tag" :checked="newUser.checked6" @change="newUserChange('checked6')" size="large">新-苹果包新增用户</el-check-tag>
                <el-check-tag class="tag" :checked="newUser.checked7" @change="newUserChange('checked7')" size="large">华为包新增用户</el-check-tag>
                <el-check-tag class="tag" :checked="newUser.checked8" @change="newUserChange('checked8')" size="large">fb账号新增用户</el-check-tag>
                <el-check-tag class="tag" :checked="newUser.checked9" @change="newUserChange('checked9')" size="large">谷歌账号新增用户</el-check-tag>
                <el-check-tag class="tag" :checked="newUser.checked10" @change="newUserChange('checked10')" size="large">游客账号新增用户</el-check-tag>
                <el-check-tag class="tag" :checked="newUser.checked11" @change="newUserChange('checked11')" size="large">华为账号新增用户</el-check-tag>
            </div>
            <div class="block">
                <el-date-picker
                    v-model="newUser.newUserTime"
                    type="daterange"
                    range-separator="To"
                    start-placeholder="Start date"
                    end-placeholder="End date"
                    :size="size"
                    :clearable = "false"
                />
                <el-icon :size="20" @click="switchType('1')" style=' margin-left:15px ' >
                    <RefreshLeft />
                </el-icon>
            </div>
        </div>
        <div id="newUser" v-show="newUser.type" newRetention style='width:100%; height:300px'></div>
        <div v-show="!newUser.type" style='width:100%;'>
            <div class="table">
                <el-table :data="tableData" stripe style="width: 100%">
                    <el-table-column prop="time" label="提交时间"  />
                    <el-table-column prop="region" label="地区"  />
                    <el-table-column prop="platform" label="平台">
                    <template #default="scope">
                            <span v-show="scope.row.platform==1">IOS</span>
                            <span v-show="scope.row.platform==2">Android</span>
                    </template>
                    </el-table-column>
                    <el-table-column prop="channel" label="渠道">
                        <template #default="scope">
                            <span v-show="scope.row.channel==1">Facebook</span>
                            <span v-show="scope.row.channel==2">Google</span>
                            <span v-show="scope.row.channel==3">Unity</span>
                            <span v-show="scope.row.channel==4">Applovin</span>
                        </template>
                    </el-table-column>
                    <el-table-column prop="method" label="投放方式">
                        <template #default="scope">
                            <span v-show="scope.row.method==1">Install</span>
                            <span v-show="scope.row.method==2">付费</span>
                            <span v-show="scope.row.method==3">AEO</span>
                            <span v-show="scope.row.method==4">VO</span>
                            <span v-show="scope.row.method==5">MAIA</span>
                            <span v-show="scope.row.method==6">recall</span>
                        </template>
                    </el-table-column>
                    <el-table-column prop="date" label="投放日期"  />
                    <el-table-column prop="advertising" label="广告名称"  />
                    <el-table-column prop="cost" label="花费" />
                    <el-table-column prop="exchange" label="汇率"/>
                    <el-table-column prop="exhibition" label="展示"  />
                    <el-table-column prop="click" label="点击"  />
                    <el-table-column prop="install" label="安装"  />
                </el-table>
            </div>
            <div class="demo-pagination-block">
                <el-pagination
                v-model:current-page="currentPage2"
                v-model:page-size="pageSize2"
                :page-sizes="[100, 200, 300, 400]"
                :small="small"
                :disabled="disabled"
                :background="background"
                layout="sizes, prev, pager, next"
                :total="1000"
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                />
            </div>
        </div>
    </div>
     <div class = "newRetentionBox">
        <div class = 'newRetentionTest'>
            <div class="tag-box">
                <el-check-tag class="tag" :checked="newRetention.checked1" @change="newRetentionChange('checked1')" size="large">日新增用户留存</el-check-tag>
                <el-check-tag class="tag" :checked="newRetention.checked2" @change="newRetentionChange('checked2')" size="large">日新增用户留存率</el-check-tag>
                <el-check-tag class="tag" :checked="newRetention.checked3" @change="newRetentionChange('checked3')" size="large">安卓新增用户留存率</el-check-tag>
                <el-check-tag class="tag" :checked="newRetention.checked4" @change="newRetentionChange('checked4')" size="large">苹果新增用户留存率</el-check-tag>
                <el-check-tag class="tag" :checked="newRetention.checked5" @change="newRetentionChange('checked5')" size="large">华为新增用户留存率</el-check-tag>
                <el-check-tag class="tag" :checked="newRetention.checked6" @change="newRetentionChange('checked6')" size="large">被邀请玩家留存</el-check-tag>
                <el-check-tag class="tag" :checked="newRetention.checked7" @change="newRetentionChange('checked7')" size="large">不是被邀请玩家留存</el-check-tag>
            </div>
            <div class="block">
                <el-date-picker
                    v-model="newRetention.newRetentionTime"
                    type="daterange"
                    range-separator="To"
                    start-placeholder="Start date"
                    end-placeholder="End date"
                    :size="size"
                    :clearable = "false"
                />
                <el-icon :size="20" @click="switchType('2')" style=' margin-left:15px ' >
                    <RefreshLeft />
                </el-icon>
            </div>
        </div>
        <div id="newRetention" v-show="newRetention.type" style='width:100%; height:300px'></div>
        <div v-show="!newRetention.type" style='width:100%;'>
            <div class="table">
                <el-table :data="tableData" stripe style="width: 100%">
                    <el-table-column prop="time" label="提交时间"  />
                    <el-table-column prop="region" label="地区"  />
                    <el-table-column prop="platform" label="平台">
                    <template #default="scope">
                            <span v-show="scope.row.platform==1">IOS</span>
                            <span v-show="scope.row.platform==2">Android</span>
                    </template>
                    </el-table-column>
                    <el-table-column prop="channel" label="渠道">
                        <template #default="scope">
                            <span v-show="scope.row.channel==1">Facebook</span>
                            <span v-show="scope.row.channel==2">Google</span>
                            <span v-show="scope.row.channel==3">Unity</span>
                            <span v-show="scope.row.channel==4">Applovin</span>
                        </template>
                    </el-table-column>
                    <el-table-column prop="method" label="投放方式">
                        <template #default="scope">
                            <span v-show="scope.row.method==1">Install</span>
                            <span v-show="scope.row.method==2">付费</span>
                            <span v-show="scope.row.method==3">AEO</span>
                            <span v-show="scope.row.method==4">VO</span>
                            <span v-show="scope.row.method==5">MAIA</span>
                            <span v-show="scope.row.method==6">recall</span>
                        </template>
                    </el-table-column>
                    <el-table-column prop="date" label="投放日期"  />
                    <el-table-column prop="advertising" label="广告名称"  />
                    <el-table-column prop="cost" label="花费" />
                    <el-table-column prop="exchange" label="汇率"/>
                    <el-table-column prop="exhibition" label="展示"  />
                    <el-table-column prop="click" label="点击"  />
                    <el-table-column prop="install" label="安装"  />
                </el-table>
            </div>
            <div class="demo-pagination-block">
                <el-pagination
                v-model:current-page="currentPage2"
                v-model:page-size="pageSize2"
                :page-sizes="[100, 200, 300, 400]"
                :small="small"
                :disabled="disabled"
                :background="background"
                layout="sizes, prev, pager, next"
                :total="1000"
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                />
            </div>
        </div>
    </div>
  </div>
</template>
 
<script>
// import { onMounted } from "vue";
import * as echarts from 'echarts';



export default {
    data(){
        return {
            tableData: [
                {
                    time:'2016-05-03',
                    region:'TR',
                    platform:'1',
                    channel:'2',
                    method:'5',
                    date:'2016-05-03',
                    advertising:'No. 189, Grove St, Los Angeles',
                    cost:'25',
                    exchange:'20',
                    exhibition:'No. 189, Grove St, Los Angeles',
                    click:'No. 189, Grove St, Los Angeles',
                    install:'No. 189, Grove St, Los Angeles',
                },
            ],
            sevenDay: [],
            newUser: {
                type: true,
                newUserTime:'',      
                checked1: true,
                checked2: false,
                checked3: false,
                checked4: false,
                checked5: false,
                checked6: false,
                checked7: false,
                checked8: false,
                checked9: false,
                checked10: false,
                checked11: false,
                data:[10, 30, 24, 218, 135, 147, 260],
            },
            newRetention: {
                type: true,
                newRetentionTime:'',      
                checked1: true,
                checked2: false,
                checked3: false,
                checked4: false,
                checked5: false,
                checked6: false,
                checked7: false,
                checked8: false,
                checked9: false,
                checked10: false,
                data:[10, 30, 24, 218, 135, 147, 260],
            },
        }
    },
    watch: {
       'newUser.newUserTime': {
            handler() {
                var {stimedata,etimedata,dayLength} =  this.customDate(this.newUser.newUserTime);
                var customDay = this.customFormatDate(stimedata,etimedata,dayLength);
                this.getNewUser(this.newUser, customDay);
            }
       },
       'newRetention.newRetentionTime': {
            handler() {
                var {stimedata,etimedata,dayLength} =  this.customDate(this.newRetention.newRetentionTime);
                var customDay = this.customFormatDate(stimedata,etimedata,dayLength);
                this.getNewRetention(this.newUser, customDay);
            }
       }
    },
    methods:{
        switchType(type) {
             switch (type) {
                case '1':
                    this.newUser.type = !this.newUser.type
                    break;
                case '2':
                    this.newRetention.type = !this.newRetention.type
                    break;
                default:
                    break;
            }
        },
        newUserChange(checked) {
            this.newUser.checked1 = false;
            this.newUser.checked2 = false;
            this.newUser.checked3 = false;
            this.newUser.checked4 = false;
            this.newUser.checked5 = false;
            this.newUser.checked6 = false;
            this.newUser.checked7 = false;
            this.newUser.checked8 = false;
            this.newUser.checked9 = false;
            this.newUser.checked10 = false;
            this.newUser.checked11 = false;
            switch (checked) {
                case 'checked1':
                    this.newUser.checked1 = true;
                    break;
                case 'checked2':
                    this.newUser.checked2 = true;
                    break;
                case 'checked3':
                    this.newUser.checked3 = true;
                    break;
                 case 'checked4':
                    this.newUser.checked4 = true;
                    break;
                case 'checked5':
                    this.newUser.checked5 = true;
                    break;
                case 'checked6':
                    this.newUser.checked6 = true;
                    break;
                case 'checked7':
                    this.newUser.checked7 = true;
                    break;
                case 'checked8':
                    this.newUser.checked8 = true;
                    break;
                case 'checked9':
                    this.newUser.checked9 = true;
                    break;
                case 'checked10':
                    this.newUser.checked10 = true;
                    break;  
                case 'checked11':
                    this.newUser.checked11 = true;
                    break;       
                default:
                    break;
            }
        },
        newRetentionChange(checked) {
            this.newRetention.checked1 = false;
            this.newRetention.checked2 = false;
            this.newRetention.checked3 = false;
            this.newRetention.checked4 = false;
            this.newRetention.checked5 = false;
            this.newRetention.checked6 = false;
            this.newRetention.checked7 = false;
            switch (checked) {
                case 'checked1':
                    this.newRetention.checked1 = true;
                    break;
                case 'checked2':
                    this.newRetention.checked2 = true;
                    break;
                case 'checked3':
                    this.newRetention.checked3 = true;
                    break;
                 case 'checked4':
                    this.newRetention.checked4 = true;
                    break;
                case 'checked5':
                    this.newRetention.checked5 = true;
                    break;
                case 'checked6':
                    this.newRetention.checked6 = true;
                    break;
                case 'checked7':
                    this.newRetention.checked7 = true;
                    break;
                default:
                    break;
            }
        },
 
        //初始化默认七天
        formatDate() {
            var sortedDateList = [];
            var sevenDay = []
            var nowTime = new Date(new Date().setHours(0, 0, 0, 0) + 24 * 60 * 60 * 1000 - 1);
            nowTime -= (6 * 24 * 60 * 60 * 1000);
            for(var i = 0; i < 7 ; i++){
                let time = nowTime + (i * 24 * 60 * 60 * 1000);
                sortedDateList.push(time);
            }
            sortedDateList.forEach(function(item) {
                var tmpDate = new Date(item);
                var day = tmpDate.getDate();
                var month = tmpDate.getMonth() + 1;
                var year = tmpDate.getFullYear();
                sevenDay.push (year + '-' + month + '-' + day)
            });
            this.getNewUser(this.newUser, sevenDay);
            this.getNewRetention(this.newRetention, sevenDay);
        },

        customFormatDate(stimedata,etimedata,dayLength) {
            var sortedDateList = [];
            var customDay = []
            for(var i = 0; i < dayLength ; i++){
                let time = stimedata + (i * 24 * 60 * 60 * 1000);
                sortedDateList.push(time);
            }
            sortedDateList.forEach(function(item) {
                var tmpDate = new Date(item);
                var day = tmpDate.getDate();
                var month = tmpDate.getMonth() + 1;
                var year = tmpDate.getFullYear();
                customDay.push (year + '-' + month + '-' + day)
            });
            return customDay;
        },

        customDate(time) {
            var stime = time[0];
            var etime = time[1];
            var stimedata = stime.getTime();
            var etimedata = etime.getTime() + 24 * 60 * 60 * 1000;
            var dayLength = (etimedata-stimedata)/(24 * 60 * 60 * 1000);
            return {stimedata,etimedata,dayLength}
        },

        getNewUser(data, day){
            // 基于准备好的dom，初始化echarts实例
            var chartDom = document.getElementById('newUser');
            var myChart = echarts.init(chartDom);
            // 指定图表的配置项和数据
            var option;
                       option = {
                legend: {

                },
                xAxis: {
                    type: 'category',
                    data: day
                },
                yAxis: {
                    type: 'value'
                },
                series: [
                    {
                    data: data.data,
                    type: 'line'
                    },
                    {
                    data:[150, 230, 224, 218, 135, 147, 260],
                    type: 'bar'
                    },
                ]
            };
            option && myChart.setOption(option);
        },
        getNewRetention(data, day){
            // 基于准备好的dom，初始化echarts实例
            var chartDom = document.getElementById('newRetention');
            var myChart = echarts.init(chartDom);
            // 指定图表的配置项和数据
            var option;
                       option = {
                legend: {

                },
                xAxis: {
                    type: 'category',
                    data: day
                },
                yAxis: {
                    type: 'value'
                },
                series: [
                    {
                    data: data.data,
                    type: 'line'
                    },
                    {
                    data:[150, 230, 224, 218, 135, 147, 260],
                    type: 'bar'
                    },
                ]
            };
            option && myChart.setOption(option);
        },

    },
    mounted() {
        this.formatDate();
    },
 
}
</script>
 
<style scoped>
.title {
    margin-left: 20px;
    margin-top: 20px;
    margin-bottom: -20px;
    display: flex;
    flex-direction: row;
}
.newUserBox {
    margin: 15px;
    border:2px solid rgb(145, 143, 143);
    /* border: 1px;
    border-color:rgb(71, 71, 64); */
}
.newUserTest {
    /* width: 800px; */
    background: rgb(238, 238, 238);
    border-bottom:1px solid rgb(158, 152, 152);
    /* height: 50px; */
}
.newRetentionBox {
    margin: 15px;
    border:2px solid rgb(145, 143, 143);
    /* border: 1px;
    border-color:rgb(71, 71, 64); */
}
.newRetentionTest {
    /* width: 800px; */
    background: rgb(238, 238, 238);
    border-bottom:1px solid rgb(158, 152, 152);
    /* height: 50px; */
}
.tag-box {
    flex-wrap: wrap;
    display: flex;
    flex-direction: row;
    padding: 5px;
}
.tag {
    margin: 10px;
}
.demo-pagination-block {
    display: flex;
    flex-direction: row-reverse;
    padding: 15px;
}
</style>