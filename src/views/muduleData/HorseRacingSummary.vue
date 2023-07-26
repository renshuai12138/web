<template>
    <div style=' width:100%; height:300px'>
        <div class="title">
            <h1>赛马统计</h1>
        </div>
        <el-divider />
        <div class = "box">
            <div class = 'test'>
                <div class="tag-box">
                    <el-check-tag  class="tag"  :checked="horseRacing.checked1" @change="onChangeRacing('checked1')" size="large">赛马人数</el-check-tag>
                    <el-check-tag  class="tag"  :checked="horseRacing.checked2" @change="onChangeRacing('checked2')" size="large">赛马付费人数</el-check-tag>
                    <el-check-tag  class="tag"  :checked="horseRacing.checked3" @change="onChangeRacing('checked3')" size="large">赛马付费次数</el-check-tag>
                    <el-check-tag  class="tag"  :checked="horseRacing.checked4" @change="onChangeRacing('checked4')" size="large">赛马付费</el-check-tag>
                    <el-check-tag  class="tag"  :checked="horseRacing.checked5" @change="onChangeRacing('checked5')" size="large">赛马人maximum</el-check-tag>
                    <el-check-tag  class="tag"  :checked="horseRacing.checked6" @change="onChangeRacing('checked6')" size="large">赛马付费参透</el-check-tag>
                </div>
                <div class="block">
                    <el-date-picker
                        v-model="horseRacing.Time"
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
            <div id = 'horseRacing' v-show="horseRacing.type" style='min-width: 800px; width:100%; height:300px'></div>
            <div v-show="!horseRacing.type" style='width:100%;'>
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
        <div class = "box">
            <div class = 'test'>
                <div class="tag-box">
                    <el-check-tag  class="tag"  :checked="personTime.checked1" @change="onChangePersonTime('checked1')" size="large">人次统计总体</el-check-tag>
                    <el-check-tag  class="tag"  :checked="personTime.checked2" @change="onChangePersonTime('checked2')" size="large">破产人数</el-check-tag>
                    <el-check-tag  class="tag"  :checked="personTime.checked3" @change="onChangePersonTime('checked3')" size="large">破产次数</el-check-tag>
                </div>
                <div class="block">
                    <el-date-picker
                        v-model="personTime.Time"
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
            <div id = 'personTime' v-show="personTime.type" style='min-width: 800px; width:100%; height:300px'></div>
            <div v-show="!personTime.type" style='width:100%;'>
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
        <div class = "box">
            <div class = 'test'>
                <div class="tag-box">
                    <el-check-tag  class="tag"  :checked="profit.checked1" @change="onChangeRetention('checked1')" size="large">个人-最大盈利</el-check-tag>
                    <el-check-tag  class="tag"  :checked="profit.checked2" @change="onChangeRetention('checked2')" size="large">最大输钱</el-check-tag>
                    <el-check-tag  class="tag"  :checked="profit.checked3" @change="onChangeRetention('checked3')" size="large">总计盈亏</el-check-tag>
                </div>
                <div class="block">
                    <el-date-picker
                        v-model="profit.Time"
                        type="daterange"
                        range-separator="To"
                        start-placeholder="Start date"
                        end-placeholder="End date"
                        :size="size"
                        :clearable = "false"
                    />
                    <el-icon :size="20" @click="switchType('3')" style=' margin-left:15px ' >
                        <RefreshLeft />
                    </el-icon>
                </div>
            </div>
            <div id = 'profit' v-show="profit.type" style='min-width: 800px; width:100%; height:300px'></div>
            <div v-show="!profit.type" style='width:100%;'>
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
        <div class = "box">
            <div class = 'test'>
                <div class="tag-box">
                    <el-check-tag  class="tag"  :checked="housingProfit.checked1" @change="onChangeMonthly('checked1')" size="large">好友房赢钱人数</el-check-tag>
                    <el-check-tag  class="tag"  :checked="housingProfit.checked2" @change="onChangeMonthly('checked2')" size="large">输钱人数</el-check-tag>
                    <el-check-tag  class="tag"  :checked="housingProfit.checked3" @change="onChangeMonthly('checked3')" size="large">最大盈利</el-check-tag>
                    <el-check-tag  class="tag"  :checked="housingProfit.checked4" @change="onChangeMonthly('checked4')" size="large">总计盈利</el-check-tag>
                </div>
                <div class="block">
                    <el-date-picker
                        v-model="housingProfit.Time"
                        type="daterange"
                        range-separator="To"
                        start-placeholder="Start date"
                        end-placeholder="End date"
                        :size="size"
                        :clearable = "false"
                    />
                    <el-icon :size="20" @click="switchType('4')" style=' margin-left:15px ' >
                        <RefreshLeft />
                    </el-icon>
                </div>
            </div>
            <div id = 'housingProfit' v-show="housingProfit.type" style='min-width: 800px; width:100%; height:300px'></div>
            <div v-show="!housingProfit.type" style='width:100%;'>
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
        <div class = "box">
            <div class = 'test'>
                <div class="tag-box">
                    <el-check-tag  class="tag"  :checked="maximum.checked1" @change="onChangemaximum('checked1')" size="large">最大押注</el-check-tag>
                    <el-check-tag  class="tag"  :checked="maximum.checked2" @change="onChangemaximum('checked2')" size="large">最多赢钱</el-check-tag>
                    <el-check-tag  class="tag"  :checked="maximum.checked3" @change="onChangemaximum('checked3')" size="large">最多盈利</el-check-tag>
                </div>
                <div class="block">
                    <el-date-picker
                        v-model="maximum.Time"
                        type="daterange"
                        range-separator="To"
                        start-placeholder="Start date"
                        end-placeholder="End date"
                        :size="size"
                        :clearable = "false"
                    />
                    <el-icon :size="20" @click="switchType('5')" style=' margin-left:15px ' >
                        <RefreshLeft />
                    </el-icon>
                </div>
            </div>
            <div id = 'maximum' v-show="maximum.type" style='min-width: 800px; width:100%; height:300px'></div>
            <div v-show="!maximum.type" style='width:100%;'>
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
        <div class = "tableBox">
            <div class = 'tableTest'>
                <div class="tag-box">
                    <el-check-tag class="tag" :checked="table.checked1" @change="retainedChange('checked1')" size="large">用户信息</el-check-tag>
                </div>
                <div class="block">
                    <el-date-picker
                        v-model="table.tableTime"
                        type="daterange"
                        range-separator="To"
                        start-placeholder="Start date"
                        end-placeholder="End date"
                        :size="size"
                        :clearable = "false"
                    />
                </div>
            </div>
            <div class="table">
                <el-table :data="tableData" stripe style="width: 100%">
                    <el-table-column prop="time" label="提交时间"  />
                    <el-table-column prop="region" label="收件人"  />
                    <el-table-column prop="advertising" label="内容"  />
                    <el-table-column prop="exchange" label="有效时长"  />
                </el-table>
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
            table: {
                checked1: true,
                tableTime:'',
                type: true,
            },
            sevenDay: [],
            activeName: "用户活跃",
            horseRacing: {
                Time:'',    
                type: true,  
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
            personTime: {
                Time:'',    
                type: true,  
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
            profit: {
                Time:'',     
                type: true, 
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
            housingProfit: {
                Time:'',  
                type: true,    
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
            maximum: {
                Time:'',  
                type: true,    
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
            }
        }
    },
    watch: {
        'horseRacing.Time': {
            handler() {
                var {stimedata,etimedata,dayLength} =  this.customDate(this.horseRacing.Time);
                var customDay = this.customFormatDate(stimedata,etimedata,dayLength);
                this.gethorseRacing(this.horseRacing, customDay);
            }
        },
        'personTime.Time': {
            handler() {
                var {stimedata,etimedata,dayLength} =  this.customDate(this.personTime.Time);
                var customDay = this.customFormatDate(stimedata,etimedata,dayLength);
                this.getpersonTime(this.horseRacing, customDay);
            }
        },
        'profit.Time': {
            handler() {
                var {stimedata,etimedata,dayLength} =  this.customDate(this.profit.Time);
                var customDay = this.customFormatDate(stimedata,etimedata,dayLength);
                this.getprofit(this.profit, customDay);
            }
        },
        'housingProfit.Time': {
            handler() {
                var {stimedata,etimedata,dayLength} =  this.customDate(this.housingProfit.Time);
                var customDay = this.customFormatDate(stimedata,etimedata,dayLength);
                this.gethousingProfit(this.housingProfit, customDay);
            }
        },
        'maximum.Time': {
            handler() {
                var {stimedata,etimedata,dayLength} =  this.customDate(this.maximum.Time);
                var customDay = this.customFormatDate(stimedata,etimedata,dayLength);
                this.getmaximum(this.maximum, customDay);
            }
        },
    },
    methods:{
        switchType(type) {
             switch (type) {
                case '1':
                    this.horseRacing.type = !this.horseRacing.type
                    break;
                case '2':
                    this.personTime.type = !this.personTime.type
                    break;
                case '3':
                    this.profit.type = !this.profit.type
                    break;
                case '4':
                    this.housingProfit.type = !this.housingProfit.type
                    break;
                case '5':
                    this.maximum.type = !this.maximum.type
                    break;
                default:
                    break;
            }
        },
        onChangeRacing(checked) {
            this.horseRacing.checked1 = false;
            this.horseRacing.checked2 = false;
            this.horseRacing.checked3 = false;
            this.horseRacing.checked4 = false;
            this.horseRacing.checked5 = false;
            this.horseRacing.checked6 = false;
            this.horseRacing.checked7 = false;
            this.horseRacing.checked8 = false;
            this.horseRacing.checked9 = false;
            this.horseRacing.checked10 = false;
            this.horseRacing.checked11 = false;
            switch (checked) {
                case 'checked1':
                    this.horseRacing.checked1 = true;
                    break;
                case 'checked2':
                    this.horseRacing.checked2 = true;
                    break;
                case 'checked3':
                    this.horseRacing.checked3 = true;
                    break;
                case 'checked4':
                    this.horseRacing.checked4 = true;
                    break;
                case 'checked5':
                    this.horseRacing.checked5 = true;
                    break;
                case 'checked6':
                    this.horseRacing.checked6 = true;
                    break;
                case 'checked7':
                    this.horseRacing.checked7 = true;
                    break;
                case 'checked8':
                    this.horseRacing.checked8 = true;
                    break;
                case 'checked9':
                    this.horseRacing.checked9 = true;
                    break;
                case 'checked10':
                    this.horseRacing.checked10 = true;
                    break;
                default:
                    break;
            }
        },
        onChangePersonTime(checked) {
            this.personTime.checked1 = false;
            this.personTime.checked2 = false;
            this.personTime.checked3 = false;
            this.personTime.checked4 = false;
            this.personTime.checked5 = false;
            this.personTime.checked6 = false;
            this.personTime.checked7 = false;
            this.personTime.checked8 = false;
            this.personTime.checked9 = false;
            this.personTime.checked10 = false;
            this.personTime.checked11 = false;
            switch (checked) {
                case 'checked1':
                    this.personTime.checked1 = true;
                    break;
                case 'checked2':
                    this.personTime.checked2 = true;
                    break;
                case 'checked3':
                    this.personTime.checked3 = true;
                    break;
                case 'checked4':
                    this.personTime.checked4 = true;
                    break;
                case 'checked5':
                    this.personTime.checked5 = true;
                    break;
                case 'checked6':
                    this.personTime.checked6 = true;
                    break;
                case 'checked7':
                    this.personTime.checked8 = true;
                    break;
                case 'checked9':
                    this.personTime.checked9 = true;
                    break;
                case 'checked10':
                    this.personTime.checked10 = true;
                    break;
                default:
                    break;
            }
        },
        onChangeRetention(checked) {
            this.profit.checked1 = false;
            this.profit.checked2 = false;
            this.profit.checked3 = false;
            this.profit.checked4 = false;
            this.profit.checked5 = false;
            this.profit.checked6 = false;
            this.profit.checked7 = false;
            this.profit.checked8 = false;
            this.profit.checked9 = false;
            this.profit.checked10 = false;
            this.profit.checked11 = false;
            switch (checked) {
                case 'checked1':
                    this.profit.checked1 = true;
                    break;
                case 'checked2':
                    this.profit.checked2 = true;
                    break;
                case 'checked3':
                    this.profit.checked3 = true;
                    break;
                case 'checked4':
                    this.profit.checked4 = true;
                    break;
                case 'checked5':
                    this.profit.checked5 = true;
                    break;
                case 'checked6':
                    this.profit.checked6 = true;
                    break;
                case 'checked7':
                    this.profit.checked8 = true;
                    break;
                case 'checked9':
                    this.profit.checked9 = true;
                    break;
                case 'checked10':
                    this.profit.checked10 = true;
                    break;
                default:
                    break;
            }
        },
        onChangeMonthly(checked) {
            this.housingProfit.checked1 = false;
            this.housingProfit.checked2 = false;
            this.housingProfit.checked3 = false;
            this.housingProfit.checked4 = false;
            this.housingProfit.checked5 = false;
            this.housingProfit.checked6 = false;
            this.housingProfit.checked7 = false;
            this.housingProfit.checked8 = false;
            this.housingProfit.checked9 = false;
            this.housingProfit.checked10 = false;
            this.housingProfit.checked11 = false;
            switch (checked) {
                case 'checked1':
                    this.housingProfit.checked1 = true;
                    break;
                case 'checked2':
                    this.housingProfit.checked2 = true;
                    break;
                case 'checked3':
                    this.housingProfit.checked3 = true;
                    break;
                case 'checked4':
                    this.housingProfit.checked4 = true;
                    break;
                case 'checked5':
                    this.housingProfit.checked5 = true;
                    break;
                case 'checked6':
                    this.housingProfit.checked6 = true;
                    break;
                case 'checked7':
                    this.housingProfit.checked8 = true;
                    break;
                case 'checked9':
                    this.housingProfit.checked9 = true;
                    break;
                case 'checked10':
                    this.housingProfit.checked10 = true;
                    break;
                default:
                    break;
            }
        },

        onChangemaximum(checked) {
            this.maximum.checked1 = false;
            this.maximum.checked2 = false;
            this.maximum.checked3 = false;
            this.maximum.checked4 = false;
            this.maximum.checked5 = false;
            this.maximum.checked6 = false;
            this.maximum.checked7 = false;
            this.maximum.checked8 = false;
            this.maximum.checked9 = false;
            this.maximum.checked10 = false;
            this.maximum.checked11 = false;
            switch (checked) {
                case 'checked1':
                    this.maximum.checked1 = true;
                    break;
                case 'checked2':
                    this.maximum.checked2 = true;
                    break;
                case 'checked3':
                    this.maximum.checked3 = true;
                    break;
                case 'checked4':
                    this.maximum.checked4 = true;
                    break;
                case 'checked5':
                    this.maximum.checked5 = true;
                    break;
                case 'checked6':
                    this.maximum.checked6 = true;
                    break;
                case 'checked7':
                    this.maximum.checked8 = true;
                    break;
                case 'checked9':
                    this.maximum.checked9 = true;
                    break;
                case 'checked10':
                    this.maximum.checked10 = true;
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
            this.gethorseRacing(this.horseRacing, sevenDay);
            this.getpersonTime(this.personTime, sevenDay);
            this.getprofit(this.profit, sevenDay);
            this.gethousingProfit(this.housingProfit, sevenDay);
            this.getmaximum(this.maximum, sevenDay);
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

        getprofit(data, day){
            // 基于准备好的dom，初始化echarts实例
            var chartDom = document.getElementById('profit');
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

        getpersonTime(data, day){
            // 基于准备好的dom，初始化echarts实例
            var chartDom = document.getElementById('personTime');
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
        
        gethorseRacing(data, day){
            // 基于准备好的dom，初始化echarts实例
            var chartDom = document.getElementById('horseRacing');
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

         gethousingProfit(data, day){
            // 基于准备好的dom，初始化echarts实例
            var chartDom = document.getElementById('housingProfit');
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

        getmaximum(data, day){
            // 基于准备好的dom，初始化echarts实例
            var chartDom = document.getElementById('maximum');
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
.box {
    margin: 15px;
    border:2px solid rgb(145, 143, 143);
}
.test {
    background: rgb(238, 238, 238);
    border-bottom:1px solid rgb(158, 152, 152);
}
.tag-box {
    display: flex;
    flex-direction: row;
    padding: 5px;
}
.tag {
    width: 120px; 
    margin: 15px;
}
.tableBox {
    margin: 15px;
    border:2px solid rgb(145, 143, 143);
}
.demo-pagination-block {
    display: flex;
    flex-direction: row-reverse;
    padding: 15px;
}
</style>