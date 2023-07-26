<template>
  <div style=' width:100%; height:300px'>
    <div class="title">
        <h1>广告统计</h1>
    </div>
    <el-divider />
  <div class = "upgradePlayerBox">
        <div class = 'upgradePlayerTest'>
            <div class="tag-box">
                <el-check-tag class="tag" :checked="upgradePlayer.checked1" @change="retainedChange('checked1')" size="large">观看广告人数</el-check-tag>
                <el-check-tag class="tag" :checked="upgradePlayer.checked2" @change="retainedChange('checked2')" size="large">观看广告次数</el-check-tag>
                <el-check-tag class="tag" :checked="upgradePlayer.checked3" @change="retainedChange('checked3')" size="large">观看广告VIP0</el-check-tag>
                <el-check-tag class="tag" :checked="upgradePlayer.checked4" @change="retainedChange('checked4')" size="large">观看广告VIP1</el-check-tag>
                <el-check-tag class="tag" :checked="upgradePlayer.checked5" @change="retainedChange('checked5')" size="large">观看广告VIP2</el-check-tag>
                <el-check-tag class="tag" :checked="upgradePlayer.checked6" @change="retainedChange('checked6')" size="large">观看广告VIP3</el-check-tag>
                <el-check-tag class="tag" :checked="upgradePlayer.checked7" @change="retainedChange('checked7')" size="large">观看广告VIP4</el-check-tag>
                <el-check-tag class="tag" :checked="upgradePlayer.checked8" @change="retainedChange('checked8')" size="large">观看广告VIP5</el-check-tag>
                <el-check-tag class="tag" :checked="upgradePlayer.checked9" @change="retainedChange('checked9')" size="large">观看广告VIP6</el-check-tag>
                <el-check-tag class="tag" :checked="upgradePlayer.checked10" @change="retainedChange('checked10')" size="large">观看广告VIP7</el-check-tag>
                <el-check-tag class="tag" :checked="upgradePlayer.checked11" @change="retainedChange('checked11')" size="large">观看广告VIP8</el-check-tag>
                <el-check-tag class="tag" :checked="upgradePlayer.checked12" @change="retainedChange('checked12')" size="large">观看广告VIP9</el-check-tag>
                <el-check-tag class="tag" :checked="upgradePlayer.checked13" @change="retainedChange('checked13')" size="large">观看失败人数</el-check-tag>
                <el-check-tag class="tag" :checked="upgradePlayer.checked14" @change="retainedChange('checked14')" size="large">观看失败次数</el-check-tag>
            </div>
            <div class="block">
                <el-date-picker
                    v-model="upgradePlayer.upgradePlayerTime"
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
        <div id="upgradePlayer" v-show="upgradePlayer.type" style=' width:100%; height:300px'></div>
        <div v-show="!upgradePlayer.type" style='width:100%;'>
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
            sevenDay: [],
            activeName: "用户活跃",
            upgradePlayer: {
                type: true,
                upgradePlayerTime:'',      
                checked1: true,
                checked2: false,
                data:[10, 30, 24, 218, 135, 147, 260],
            },
        }
    },
    watch: {
        'upgradePlayer.upgradePlayerTime': {
            handler() {
                var {stimedata,etimedata,dayLength} =  this.customDate(this.upgradePlayer.upgradePlayerTime);
                var customDay = this.customFormatDate(stimedata,etimedata,dayLength);
                this.getUpgradePlayer(this.activeUsers, customDay);
            }
       }
    },
    methods:{
        switchType(type) {
            switch (type) {
                case '1':
                    this.upgradePlayer.type = !this.upgradePlayer.type
                    break;
                default:
                    break;
            }
        },
       retainedChange(checked) {
            this.upgradePlayer.checked1 = false;
            this.upgradePlayer.checked2 = false;
            this.upgradePlayer.checked3 = false;
            this.upgradePlayer.checked4 = false;
            this.upgradePlayer.checked5 = false;
            this.upgradePlayer.checked6 = false;
            this.upgradePlayer.checked7 = false;
            this.upgradePlayer.checked8 = false;
            this.upgradePlayer.checked9 = false;
            this.upgradePlayer.checked10 = false;
            this.upgradePlayer.checked11 = false;
            this.upgradePlayer.checked12 = false;
            this.upgradePlayer.checked13 = false;
            this.upgradePlayer.checked14 = false;
            switch (checked) {
                case 'checked1':
                    this.upgradePlayer.checked1 = true;
                    break;
                case 'checked2':
                    this.upgradePlayer.checked2 = true;
                    break;
                case 'checked3':
                    this.upgradePlayer.checked3 = true;
                    break;
                 case 'checked4':
                    this.upgradePlayer.checked4 = true;
                    break;
                case 'checked5':
                    this.upgradePlayer.checked5 = true;
                    break;
                case 'checked6':
                    this.upgradePlayer.checked6 = true;
                    break;
                case 'checked7':
                    this.upgradePlayer.checked7 = true;
                    break;
                case 'checked8':
                    this.upgradePlayer.checked8 = true;
                    break;
                 case 'checked9':
                    this.upgradePlayer.checked9 = true;
                    break;
                case 'checked10':
                    this.upgradePlayer.checked10 = true;
                    break;
                case 'checked11':
                    this.upgradePlayer.checked11 = true;
                    break;
                case 'checked12':
                    this.upgradePlayer.checked12 = true;
                    break;
                case 'checked13':
                    this.upgradePlayer.checked13 = true;
                    break;
                case 'checked14':
                    this.upgradePlayer.checked14 = true;
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
            this.getUpgradePlayer(this.fiveOnLine, sevenDay);
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

        getUpgradePlayer(data, day){
            // 基于准备好的dom，初始化echarts实例
            var chartDom = document.getElementById('upgradePlayer');
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
                    data: [820, 932, 901, 934, 1290, 1330, 1320],
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
.upgradePlayerBox {
    margin: 15px;
    border:2px solid rgb(145, 143, 143);
}
.upgradePlayerTest {
    background: rgb(238, 238, 238);
    border-bottom:1px solid rgb(158, 152, 152);
}

.tag-box {
    flex-wrap: wrap;
    display: flex;
    flex-direction: row;
    padding: 5px;
}
.tag {
    margin: 15px
}
</style>