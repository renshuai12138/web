<template>
    <div style=' width:100%; padding-bottom: 50px;'>
        <div class="title">
            <h1>付费统计</h1>
        </div>
        <el-divider />
        <div class = "box">
            <div class = 'test'>
                <div class="tag-box">
                    <el-check-tag class="tag" :checked="matchingTime.checked1" @change="retainedChange('checked1')" size="large">匹配时间3-4s</el-check-tag>
                    <el-check-tag class="tag" :checked="matchingTime.checked2" @change="retainedChange('checked2')" size="large">4-5s</el-check-tag>
                    <el-check-tag class="tag" :checked="matchingTime.checked3" @change="retainedChange('checked3')" size="large">5-6s</el-check-tag>
                    <el-check-tag class="tag" :checked="matchingTime.checked4" @change="retainedChange('checked4')" size="large">6-7s</el-check-tag>
                    <el-check-tag class="tag" :checked="matchingTime.checked5" @change="retainedChange('checked5')" size="large">7-8s</el-check-tag>
                    <el-check-tag class="tag" :checked="matchingTime.checked6" @change="retainedChange('checked6')" size="large">8-9s</el-check-tag>
                    <el-check-tag class="tag" :checked="matchingTime.checked7" @change="retainedChange('checked7')" size="large">9-10s</el-check-tag>
                    <el-check-tag class="tag" :checked="matchingTime.checked8" @change="retainedChange('checked8')" size="large">10-11s</el-check-tag>
                    <el-check-tag class="tag" :checked="matchingTime.checked9" @change="retainedChange('checked9')" size="large">11-12s</el-check-tag>
                    <el-check-tag class="tag" :checked="matchingTime.checked10" @change="retainedChange('checked10')" size="large">12-13s</el-check-tag>
                    <el-check-tag class="tag" :checked="matchingTime.checked11" @change="retainedChange('checked11')" size="large">13-14s</el-check-tag>
                    <el-check-tag class="tag" :checked="matchingTime.checked12" @change="retainedChange('checked12')" size="large">14-15s</el-check-tag>
                    <el-check-tag class="tag" :checked="matchingTime.checked13" @change="retainedChange('checked13')" size="large">15-16s</el-check-tag>
                    <el-check-tag class="tag" :checked="matchingTime.checked14" @change="retainedChange('checked14')" size="large">16-17s</el-check-tag>
                    <el-check-tag class="tag" :checked="matchingTime.checked15" @change="retainedChange('checked15')" size="large">17-18s</el-check-tag>
                    <el-check-tag class="tag" :checked="matchingTime.checked16" @change="retainedChange('checked16')" size="large">18s+</el-check-tag>
                </div>
                <div class="block">
                    <el-date-picker
                        v-model="matchingTime.time"
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
            <div id="matchingTime" v-show="matchingTime.type" style=' width:100%; height:300px'></div>
            <div v-show="!matchingTime.type" style='width:100%;'>
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
                    <el-check-tag class="tag" :checked="noviceMatchingTime.checked1" @change="noviceMatchingTimeChange('checked1')" size="large">新玩家匹配时间3-4s</el-check-tag>
                    <el-check-tag class="tag" :checked="noviceMatchingTime.checked2" @change="noviceMatchingTimeChange('checked2')" size="large">4-5s</el-check-tag>
                    <el-check-tag class="tag" :checked="noviceMatchingTime.checked3" @change="noviceMatchingTimeChange('checked3')" size="large">5-6s</el-check-tag>
                    <el-check-tag class="tag" :checked="noviceMatchingTime.checked4" @change="noviceMatchingTimeChange('checked4')" size="large">6-7s</el-check-tag>
                    <el-check-tag class="tag" :checked="noviceMatchingTime.checked5" @change="noviceMatchingTimeChange('checked5')" size="large">7-8s</el-check-tag>
                    <el-check-tag class="tag" :checked="noviceMatchingTime.checked6" @change="noviceMatchingTimeChange('checked6')" size="large">8-9s</el-check-tag>
                    <el-check-tag class="tag" :checked="noviceMatchingTime.checked7" @change="noviceMatchingTimeChange('checked7')" size="large">9-10s</el-check-tag>
                    <el-check-tag class="tag" :checked="noviceMatchingTime.checked8" @change="noviceMatchingTimeChange('checked8')" size="large">10-11s</el-check-tag>
                    <el-check-tag class="tag" :checked="noviceMatchingTime.checked9" @change="noviceMatchingTimeChange('checked9')" size="large">11-12s</el-check-tag>
                    <el-check-tag class="tag" :checked="noviceMatchingTime.checked10" @change="noviceMatchingTimeChange('checked10')" size="large">12-13s</el-check-tag>
                    <el-check-tag class="tag" :checked="noviceMatchingTime.checked11" @change="noviceMatchingTimeChange('checked11')" size="large">13-14s</el-check-tag>
                    <el-check-tag class="tag" :checked="noviceMatchingTime.checked12" @change="noviceMatchingTimeChange('checked12')" size="large">14-15s</el-check-tag>
                    <el-check-tag class="tag" :checked="noviceMatchingTime.checked13" @change="noviceMatchingTimeChange('checked13')" size="large">15-16s</el-check-tag>
                    <el-check-tag class="tag" :checked="noviceMatchingTime.checked14" @change="noviceMatchingTimeChange('checked14')" size="large">16-17s</el-check-tag>
                    <el-check-tag class="tag" :checked="noviceMatchingTime.checked15" @change="noviceMatchingTimeChange('checked15')" size="large">17-18s</el-check-tag>
                    <el-check-tag class="tag" :checked="noviceMatchingTime.checked16" @change="noviceMatchingTimeChange('checked16')" size="large">18s+</el-check-tag>
                </div>
                <div class="block">
                    <el-date-picker
                        v-model="noviceMatchingTime.time"
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
            <div id="noviceMatchingTime" v-show="noviceMatchingTime.type" style=' width:100%; height:300px'></div>
            <div v-show="!noviceMatchingTime.type" style='width:100%;'>
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
                    <el-check-tag class="tag" :checked="reconnectionTime.checked1" @change="reconnectionTimeChange('checked1')" size="large">短线重连时间0-1s</el-check-tag>
                    <el-check-tag class="tag" :checked="reconnectionTime.checked2" @change="reconnectionTimeChange('checked2')" size="large">1-2s</el-check-tag>
                    <el-check-tag class="tag" :checked="reconnectionTime.checked3" @change="reconnectionTimeChange('checked3')" size="large">2-3s</el-check-tag>
                    <el-check-tag class="tag" :checked="reconnectionTime.checked4" @change="reconnectionTimeChange('checked4')" size="large">3-4s</el-check-tag>
                    <el-check-tag class="tag" :checked="reconnectionTime.checked5" @change="reconnectionTimeChange('checked5')" size="large">4-5s</el-check-tag>
                    <el-check-tag class="tag" :checked="reconnectionTime.checked6" @change="reconnectionTimeChange('checked6')" size="large">5-6s</el-check-tag>
                    <el-check-tag class="tag" :checked="reconnectionTime.checked7" @change="reconnectionTimeChange('checked7')" size="large">6-7s</el-check-tag>
                    <el-check-tag class="tag" :checked="reconnectionTime.checked8" @change="reconnectionTimeChange('checked8')" size="large">7-8s</el-check-tag>
                    <el-check-tag class="tag" :checked="reconnectionTime.checked9" @change="reconnectionTimeChange('checked9')" size="large">8-9s</el-check-tag>
                    <el-check-tag class="tag" :checked="reconnectionTime.checked10" @change="reconnectionTimeChange('checked10')" size="large">9-10s</el-check-tag>
                    <el-check-tag class="tag" :checked="reconnectionTime.checked11" @change="reconnectionTimeChange('checked11')" size="large">10-11s</el-check-tag>
                    <el-check-tag class="tag" :checked="reconnectionTime.checked12" @change="reconnectionTimeChange('checked12')" size="large">11s+</el-check-tag>
                </div>
                <div class="block">
                    <el-date-picker
                        v-model="reconnectionTime.time"
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
            <div id="reconnectionTime" v-show="reconnectionTime.type" style=' width:100%; height:300px'></div>
            <div v-show="!reconnectionTime.type" style='width:100%;'>
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
            reconnectionTime: {
                type: true,
                time:'',      
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
                checked12: false,
                data:[10, 30, 24, 218, 135, 147, 260],
            },
            matchingTime: {
                type: true,
                time:'',      
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
                checked12: false,
                checked13: false,
                checked14: false,
                checked15: false,
                checked16: false,
                data:[10, 30, 24, 218, 135, 147, 260],
            },
            noviceMatchingTime: {
                type: true,
                time:'',      
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
                checked12: false,
                checked13: false,
                checked14: false,
                checked15: false,
                checked16: false,
                data:[10, 30, 24, 218, 135, 147, 260],
            },
        }
    },
    watch: {
        'matchingTime.time': {
            handler() {
                var {stimedata,etimedata,dayLength} =  this.customDate(this.matchingTime.time);
                var customDay = this.customFormatDate(stimedata,etimedata,dayLength);
                this.getmatchingTime(this.activeUsers, customDay);
            }
       },
       'noviceMatchingTime.time': {
            handler() {
                var {stimedata,etimedata,dayLength} =  this.customDate(this.noviceMatchingTime.time);
                var customDay = this.customFormatDate(stimedata,etimedata,dayLength);
                this.getnoviceMatchingTime(this.noviceMatchingTime, customDay);
            }
       },
       'reconnectionTime.time': {
            handler() {
                var {stimedata,etimedata,dayLength} =  this.customDate(this.reconnectionTime.time);
                var customDay = this.customFormatDate(stimedata,etimedata,dayLength);
                this.getreconnectionTime(this.reconnectionTime, customDay);
            }
       }
    },
    methods:{
        switchType(type) {
             switch (type) {
                case '1':
                    this.matchingTime.type = !this.matchingTime.type
                    break;
                case '2':
                    this.noviceMatchingTime.type = !this.noviceMatchingTime.type
                    break;
                case '3':
                    this.reconnectionTime.type = !this.reconnectionTime.type
                    break;
                default:
                    break;
            }
        },
        reconnectionTimeChange(checked) {
            console.log(checked)
            this.reconnectionTime.checked1 = false;
            this.reconnectionTime.checked2 = false;
            this.reconnectionTime.checked3 = false;
            this.reconnectionTime.checked4 = false;
            this.reconnectionTime.checked5 = false;
            this.reconnectionTime.checked6 = false;
            this.reconnectionTime.checked7 = false;
            this.reconnectionTime.checked8 = false;
            this.reconnectionTime.checked9 = false;
            this.reconnectionTime.checked10 = false;
            this.reconnectionTime.checked11 = false;
            this.reconnectionTime.checked12 = false;
            switch (checked) {
                case 'checked1':
                    this.reconnectionTime.checked1 = true;
                    break;
                case 'checked2':
                    this.reconnectionTime.checked2 = true;
                    break;
                case 'checked3':
                    this.reconnectionTime.checked3 = true;
                    break;
                 case 'checked4':
                    this.reconnectionTime.checked4 = true;
                    break;
                case 'checked5':
                    this.reconnectionTime.checked5 = true;
                    break;
                case 'checked6':
                    this.reconnectionTime.checked6 = true;
                    break;
                case 'checked7':
                    this.reconnectionTime.checked7 = true;
                    break;
                case 'checked8':
                    this.reconnectionTime.checked8 = true;
                    break;
                 case 'checked9':
                    this.reconnectionTime.checked9 = true;
                    break;
                case 'checked10':
                    this.reconnectionTime.checked10 = true;
                    break;
                case 'checked11':
                    this.reconnectionTime.checked11 = true;
                    break;
                case 'checked12':
                    this.reconnectionTime.checked12 = true;
                    break;
                default:
                    break;
            }
        },
        noviceMatchingTimeChange(checked) {
            this.noviceMatchingTime.checked1 = false;
            this.noviceMatchingTime.checked2 = false;
            this.noviceMatchingTime.checked3 = false;
            this.noviceMatchingTime.checked4 = false;
            this.noviceMatchingTime.checked5 = false;
            this.noviceMatchingTime.checked6 = false;
            this.noviceMatchingTime.checked7 = false;
            this.noviceMatchingTime.checked8 = false;
            this.noviceMatchingTime.checked9 = false;
            this.noviceMatchingTime.checked10 = false;
            this.noviceMatchingTime.checked11 = false;
            this.noviceMatchingTime.checked12 = false;
            this.noviceMatchingTime.checked13 = false;
            this.noviceMatchingTime.checked14 = false;
            this.noviceMatchingTime.checked15 = false;
            this.noviceMatchingTime.checked16 = false;
            switch (checked) {
                case 'checked1':
                    this.noviceMatchingTime.checked1 = true;
                    break;
                case 'checked2':
                    this.noviceMatchingTime.checked2 = true;
                    break;
                case 'checked3':
                    this.noviceMatchingTime.checked3 = true;
                    break;
                 case 'checked4':
                    this.noviceMatchingTime.checked4 = true;
                    break;
                case 'checked5':
                    this.noviceMatchingTime.checked5 = true;
                    break;
                case 'checked6':
                    this.noviceMatchingTime.checked6 = true;
                    break;
                case 'checked7':
                    this.noviceMatchingTime.checked7 = true;
                    break;
                case 'checked8':
                    this.noviceMatchingTime.checked8 = true;
                    break;
                 case 'checked9':
                    this.noviceMatchingTime.checked9 = true;
                    break;
                case 'checked10':
                    this.noviceMatchingTime.checked10 = true;
                    break;
                case 'checked11':
                    this.noviceMatchingTime.checked11 = true;
                    break;
                case 'checked12':
                    this.noviceMatchingTime.checked12 = true;
                    break;
                case 'checked13':
                    this.noviceMatchingTime.checked13 = true;
                    break;
                case 'checked14':
                    this.noviceMatchingTime.checked14 = true;
                    break;
                case 'checked15':
                    this.noviceMatchingTime.checked15 = true;
                    break;
                case 'checked16':
                    this.noviceMatchingTime.checked16 = true;
                    break;
                default:
                    break;
            }
        },
        
       retainedChange(checked) {
            this.matchingTime.checked1 = false;
            this.matchingTime.checked2 = false;
            this.matchingTime.checked3 = false;
            this.matchingTime.checked4 = false;
            this.matchingTime.checked5 = false;
            this.matchingTime.checked6 = false;
            this.matchingTime.checked7 = false;
            this.matchingTime.checked8 = false;
            this.matchingTime.checked9 = false;
            this.matchingTime.checked10 = false;
            this.matchingTime.checked11 = false;
            this.matchingTime.checked12 = false;
            this.matchingTime.checked13 = false;
            this.matchingTime.checked14 = false;
            this.matchingTime.checked15 = false;
            this.matchingTime.checked16 = false;
            switch (checked) {
                case 'checked1':
                    this.matchingTime.checked1 = true;
                    break;
                case 'checked2':
                    this.matchingTime.checked2 = true;
                    break;
                case 'checked3':
                    this.matchingTime.checked3 = true;
                    break;
                 case 'checked4':
                    this.matchingTime.checked4 = true;
                    break;
                case 'checked5':
                    this.matchingTime.checked5 = true;
                    break;
                case 'checked6':
                    this.matchingTime.checked6 = true;
                    break;
                case 'checked7':
                    this.matchingTime.checked7 = true;
                    break;
                case 'checked8':
                    this.matchingTime.checked8 = true;
                    break;
                 case 'checked9':
                    this.matchingTime.checked9 = true;
                    break;
                case 'checked10':
                    this.matchingTime.checked10 = true;
                    break;
                case 'checked11':
                    this.matchingTime.checked11 = true;
                    break;
                case 'checked12':
                    this.matchingTime.checked12 = true;
                    break;
                case 'checked13':
                    this.matchingTime.checked13 = true;
                    break;
                case 'checked14':
                    this.matchingTime.checked14 = true;
                    break;
                case 'checked15':
                    this.matchingTime.checked15 = true;
                    break;
                case 'checked16':
                    this.matchingTime.checked16 = true;
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
            this.getmatchingTime(this.fiveOnLine, sevenDay);
            this.getnoviceMatchingTime(this.noviceMatchingTime, sevenDay);
            this.getreconnectionTime(this.reconnectionTime, sevenDay);
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

        getmatchingTime(data, day){
            // 基于准备好的dom，初始化echarts实例
            var chartDom = document.getElementById('matchingTime');
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
        getQuantity(data, day){
            // 基于准备好的dom，初始化echarts实例
            var chartDom = document.getElementById('quantity');
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
        getreconnectionTime(data, day){
            // 基于准备好的dom，初始化echarts实例
            var chartDom = document.getElementById('reconnectionTime');
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
        getnoviceMatchingTime(data, day){
            // 基于准备好的dom，初始化echarts实例
            var chartDom = document.getElementById('noviceMatchingTime');
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
.box {
    margin: 15px;
    border:2px solid rgb(145, 143, 143);
}
.test {
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