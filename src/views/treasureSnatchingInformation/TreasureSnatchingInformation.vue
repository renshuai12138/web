<template>
    <div style=' width:100%; margin-bottom: 50px;'>
        <div class="title">
            <h1>夺宝信息</h1>
        </div>
        <el-divider />
        <div class = "totalUsersBox">
            <div class = 'totalUsersTest'>
                <div class="tag-box">
                    <el-check-tag  class="tag"  :checked="totalUsers.checked1" @change="onChange('checked1')" size="large">总参与用户</el-check-tag>
                    <el-check-tag  class="tag"  :checked="totalUsers.checked2" @change="onChange('checked2')" size="large">消耗筹码</el-check-tag>
                </div>
                <div class="block">
                    <el-date-picker
                        v-model="totalUsers.ActiveUsersTime"
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
            <div id = 'totalUsers' v-show="totalUsers.type" style='min-width: 800px; width:100%; height:300px'></div>
            <div v-show="!totalUsers.type" style='width:100%;'>
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
        <div class = "drawPrizeBox">
            <div class = 'onLineTest'>
                <div class="tag-box">
                    <el-check-tag  class="tag"  :checked="drawPrize.checked1" @change="onChangedrawPrize('checked1')" size="large">开奖测试</el-check-tag>
                    <el-check-tag  class="tag"  :checked="drawPrize.checked2" @change="onChangedrawPrize('checked2')" size="large">参与玩家</el-check-tag>
                </div>
                <div class="block">
                    <el-date-picker
                        v-model="drawPrize.onLineTime"
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
            <div id = 'drawPrize' v-show="drawPrize.type" style='min-width: 800px; width:100%; height:300px'></div>
            <div v-show="!drawPrize.type" style='width:100%;'>
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
            totalUsers: {
                type: true,
                ActiveUsersTime:'',      
                checked1: true,
                checked2: false,
                data:[10, 30, 24, 218, 135, 147, 260],
            },
            drawPrize: {
                type: true,
                onLineTime:'',      
                checked1: true,
                data:[10, 30, 24, 218, 135, 147, 260],
            },
        }
    },
    watch: {
        'totalUsers.ActiveUsersTime': {
            handler() {
                var {stimedata,etimedata,dayLength} =  this.customDate(this.totalUsers.ActiveUsersTime);
                var customDay = this.customFormatDate(stimedata,etimedata,dayLength);
                this.gettotalUsers(this.totalUsers, customDay);
            }
        },
        'drawPrize.onLineTime': {
            handler() {
                var {stimedata,etimedata,dayLength} =  this.customDate(this.drawPrize.onLineTime);
                var customDay = this.customFormatDate(stimedata,etimedata,dayLength);
                this.getOnLine(this.totalUsers, customDay);
            }
        },
    },
    methods:{
        switchType(type) {
             switch (type) {
                case '1':
                    this.totalUsers.type = !this.totalUsers.type
                    break;
                case '2':
                    this.drawPrize.type = !this.drawPrize.type
                    break;
                default:
                    break;
            }
        },
        onChange(checked) {
            this.totalUsers.checked1 = false;
            this.totalUsers.checked2 = false;
              switch (checked) {
                case 'checked1':
                    this.totalUsers.checked1 = true;
                    break;
                case 'checked2':
                    this.totalUsers.checked2 = true;
                    break;
                default:
                    break;
            }
        },
        onChangedrawPrize(checked) {
            this.drawPrize.checked1 = false;
            this.drawPrize.checked2 = false;
              switch (checked) {
                case 'checked1':
                    this.drawPrize.checked1 = true;
                    break;
                case 'checked2':
                    this.drawPrize.checked2 = true;
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
            this.gettotalUsers(this.totalUsers, sevenDay);
            this.getOnLine(this.drawPrize, sevenDay);
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


        getOnLine(data, day){
            // 基于准备好的dom，初始化echarts实例
            var chartDom = document.getElementById('drawPrize');
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
        
         gettotalUsers(data, day){
            // 基于准备好的dom，初始化echarts实例
            var chartDom = document.getElementById('totalUsers');
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
.totalUsersBox {
    margin: 15px;
    border:2px solid rgb(145, 143, 143);
}
.totalUsersTest {
    background: rgb(238, 238, 238);
    border-bottom:1px solid rgb(158, 152, 152);
}
.drawPrizeBox {
    margin: 15px;
    border:2px solid rgb(145, 143, 143);
}
.onLineTest {
    background: rgb(238, 238, 238);
    border-bottom:1px solid rgb(158, 152, 152);
}
.fiveOnLineBox {
    margin: 15px;
    border:2px solid rgb(145, 143, 143);
}
.fiveOnLineTest {
    background: rgb(238, 238, 238);
    border-bottom:1px solid rgb(158, 152, 152);
}
.tag-box {
    display: flex;
    flex-direction: row;
    padding: 5px;
}
.tag {
    margin-left: 15px;
    margin-right: 15px;
}
.demo-pagination-block {
    display: flex;
    flex-direction: row-reverse;
    padding: 15px;
}
</style>