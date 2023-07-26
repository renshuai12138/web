<template>
   <div style=' width:100%; height:300px'>
    <div class="title">
        <h1>招财猫汇总</h1>
    </div>
     <el-divider />
    <div class = "diamondsBox">
        <div class = 'diamondsTest'>
            <div class="tag-box">
                <el-check-tag  class="tag"  :checked="diamonds.checked" @change="onChange" size="large">招财猫钻石情况</el-check-tag>
            </div>
            <div class="block">
                <el-date-picker
                    v-model="diamonds.diamondsTime"
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
        <div v-show="diamonds.type" id = 'diamonds' style='width:100%; height:300px'></div>
        <div v-show="!diamonds.type" style='width:100%;'>
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
     <div class = "distributionBox">
        <div class = 'distributionTest'>
            <div class="tag-box">
                <el-check-tag class="tag" :checked="distribution.checked1" @change="SignonChange('checked1')" size="large">玩1次完人数分布</el-check-tag>
                <el-check-tag class="tag" :checked="distribution.checked2" @change="SignonChange('checked2')" size="large">玩2次猫</el-check-tag>
                <el-check-tag class="tag" :checked="distribution.checked3" @change="SignonChange('checked3')" size="large">玩3次猫</el-check-tag>
                <el-check-tag class="tag" :checked="distribution.checked4" @change="SignonChange('checked4')" size="large">玩4次猫</el-check-tag>
                <el-check-tag class="tag" :checked="distribution.checked5" @change="SignonChange('checked5')" size="large">玩5次猫</el-check-tag>
                <el-check-tag class="tag" :checked="distribution.checked6" @change="SignonChange('checked6')" size="large">玩6次猫</el-check-tag>
            </div>
            <div class="block">
                <el-date-picker
                    v-model="distribution.distributionTime"
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
        <div v-show="distribution.type" id="interval" style='width:100%; height:300px'></div>
        <div v-show="!distribution.type" style='width:100%;'>
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
            diamonds: {
                diamondsTime:'',      
                checked: true,
                data:[10, 30, 24, 218, 135, 147, 260],
                type: true,
            },
            distribution: {
                checked1: true,
                checked2: false,
                checked3: false,
                checked4: false,
                checked5: false,
                checked6: false,
                distributionTime: '',
                data:[10, 30, 24, 218, 135, 147, 260],
                type: true,
            },
        }
    },
    watch: {
        'diamonds.diamondsTime': {
            handler() {
                var {stimedata,etimedata,dayLength} =  this.customDate(this.diamonds.diamondsTime);
                var customDay = this.customFormatDate(stimedata,etimedata,dayLength);
                this.getUser(this.diamonds, customDay);
            }
        },
       'distribution.distributionTime': {
            handler() {
                var {stimedata,etimedata,dayLength} =  this.customDate(this.distribution.distributionTime);
                var customDay = this.customFormatDate(stimedata,etimedata,dayLength);
                this.getInterval(this.diamonds, customDay);
            }
       },
    },
    methods:{
        switchType(type) {
             switch (type) {
                case '1':
                    this.diamonds.type = !this.diamonds.type
                    break;
                case '2':
                    this.distribution.type = !this.distribution.type
                    break;
                default:
                    break;
            }
        },
        SignonChange(checked) {
            this.distribution.checked1 = false;
            this.distribution.checked2 = false;
            this.distribution.checked3 = false;
            this.distribution.checked4 = false;
            this.distribution.checked5 = false;
            this.distribution.checked6 = false;
            switch (checked) {
                case 'checked1':
                    this.distribution.checked1 = true;
                    break;
                case 'checked2':
                    this.distribution.checked2 = true;
                    break;
                case 'checked3':
                    this.distribution.checked3 = true;
                    break;
                 case 'checked4':
                    this.distribution.checked4 = true;
                    break;
                case 'checked5':
                    this.distribution.checked5 = true;
                    break;   
                case 'checked6':
                    this.distribution.checked6 = true;
                    break;   
                default:
                    break;
            }
        },
        activeChange(checked) {
            this.sctive.checked1 = false;
            this.sctive.checked2 = false;
            this.sctive.checked3 = false;
            this.sctive.checked4 = false;
            this.sctive.checked5 = false;
            this.sctive.checked6 = false;
            this.sctive.checked7 = false;
            this.sctive.checked8 = false;
            this.sctive.checked9 = false;
            this.sctive.checked10 = false;
            switch (checked) {
                case 'checked1':
                    this.sctive.checked1 = true;
                    break;
                case 'checked2':
                    this.sctive.checked2 = true;
                    break;
                case 'checked3':
                    this.sctive.checked3 = true;
                    break;
                 case 'checked4':
                    this.sctive.checked4 = true;
                    break;
                case 'checked5':
                    this.sctive.checked5 = true;
                    break;
                case 'checked6':
                    this.sctive.checked6 = true;
                    break;
                case 'checked7':
                    this.sctive.checked7 = true;
                    break;
                case 'checked8':
                    this.sctive.checked8 = true;
                    break;
                case 'checked9':
                    this.sctive.checked9 = true;
                    break;
                case 'checked10':
                    this.sctive.checked10 = true;
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
            this.getUser(this.diamonds, sevenDay);
            this.getInterval(this.distribution, sevenDay);
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
        getUser(data, day){
            // 基于准备好的dom，初始化echarts实例
            var chartDom = document.getElementById('diamonds');
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

        getInterval(data, day) {
            var myCharts = document.getElementById('interval');
            var myChart = echarts.init(myCharts);
            let option = {
                legend: {
                },
                xAxis: {
                    type: 'category',
                    data: day,

                    axisLine: {
                        lineStyle: {
                        }
                    }
                },
                yAxis: {
                    type: 'value',
                },
                series: [
                    {
                        name: '视频s',
                        // data: this.dataY,
                        data: [820, 932, 901, 934, 1290, 1330, 1320],
                        type: 'line',
                        symbol: 'circle', //是否显示实心的折线圆点
                        smooth: true, //让折线有弧度
                        stack: 'Total',
                        symbolSize: 7, //折线圆点的大小
                        itemStyle: {
                            normal: {
                                label: { show: true } //是否在折线点上显示数字
                            }
                        }
                    },
                    {
                        // data: this.dataY,
                        name: '视频',
                        data: [82, 92, 91, 93, 190, 130, 130],
                        type: 'line',
                        symbol: 'circle', //是否显示实心的折线圆点
                        smooth: true, //让折线有弧度
                        symbolSize: 7, //折线圆点的大小
                        itemStyle: {
                        normal: {
                            label: { show: true } //是否在折线点上显示数字
                        }
                        }
                    }
                ]
            }
            option && myChart.setOption(option);
            // myChart.setOption(option)
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
.diamondsBox {
    margin: 15px;
    border:2px solid rgb(145, 143, 143);
    /* border: 1px;
    border-color:rgb(71, 71, 64); */
}
.diamondsTest {
    /* width: 800px; */
    background: rgb(238, 238, 238);
    border-bottom:1px solid rgb(158, 152, 152);
    /* height: 50px; */
}

.distributionBox {
    margin: 15px;
    border:2px solid rgb(145, 143, 143);
}
.distributionTest {
    background: rgb(238, 238, 238);
    border-bottom:1px solid rgb(158, 152, 152);
}
.activeBox {
    margin: 15px;
    border:2px solid rgb(145, 143, 143);
}
.activeTest {
    background: rgb(238, 238, 238);
    border-bottom:1px solid rgb(158, 152, 152);
}
.retainedBox {
    margin: 15px;
    border:2px solid rgb(145, 143, 143);
}
.retainedTest {
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
.demo-pagination-block {
    display: flex;
    flex-direction: row-reverse;
    padding: 15px;
}
</style>