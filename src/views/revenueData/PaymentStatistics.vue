<template>
    <div style=' width:100%; padding-bottom: 50px;'>
        <div class="title">
            <h1>付费统计</h1>
        </div>
        <el-divider />
        <div class = "box">
            <div class = 'test'>
                <div class="tag-box">
                    <el-check-tag class="tag" :checked="upgradePlayer.checked1" @change="retainedChange('checked1')" size="large">每日购买钻1</el-check-tag>
                    <el-check-tag class="tag" :checked="upgradePlayer.checked2" @change="retainedChange('checked2')" size="large">钻2</el-check-tag>
                    <el-check-tag class="tag" :checked="upgradePlayer.checked3" @change="retainedChange('checked3')" size="large">钻3</el-check-tag>
                    <el-check-tag class="tag" :checked="upgradePlayer.checked4" @change="retainedChange('checked4')" size="large">钻4</el-check-tag>
                    <el-check-tag class="tag" :checked="upgradePlayer.checked5" @change="retainedChange('checked5')" size="large">钻5</el-check-tag>
                    <el-check-tag class="tag" :checked="upgradePlayer.checked6" @change="retainedChange('checked6')" size="large">钻6</el-check-tag>
                    <el-check-tag class="tag" :checked="upgradePlayer.checked7" @change="retainedChange('checked7')" size="large">首充</el-check-tag>
                    <el-check-tag class="tag" :checked="upgradePlayer.checked8" @change="retainedChange('checked8')" size="large">起跑点每日1</el-check-tag>
                    <el-check-tag class="tag" :checked="upgradePlayer.checked9" @change="retainedChange('checked9')" size="large">起跑点每日2</el-check-tag>
                    <el-check-tag class="tag" :checked="upgradePlayer.checked10" @change="retainedChange('checked10')" size="large">每周礼包1</el-check-tag>
                    <el-check-tag class="tag" :checked="upgradePlayer.checked11" @change="retainedChange('checked11')" size="large">每周vip直升</el-check-tag>
                    <el-check-tag class="tag" :checked="upgradePlayer.checked12" @change="retainedChange('checked12')" size="large">每周V1</el-check-tag>
                    <el-check-tag class="tag" :checked="upgradePlayer.checked13" @change="retainedChange('checked13')" size="large">每周V2</el-check-tag>
                    <el-check-tag class="tag" :checked="upgradePlayer.checked14" @change="retainedChange('checked14')" size="large">每周V3</el-check-tag>
                    <el-check-tag class="tag" :checked="upgradePlayer.checked15" @change="retainedChange('checked15')" size="large">每周V4</el-check-tag>
                    <el-check-tag class="tag" :checked="upgradePlayer.checked16" @change="retainedChange('checked16')" size="large">每周V5</el-check-tag>
                    <el-check-tag class="tag" :checked="upgradePlayer.checked17" @change="retainedChange('checked17')" size="large">赛马1</el-check-tag>
                    <el-check-tag class="tag" :checked="upgradePlayer.checked18" @change="retainedChange('checked18')" size="large">赛马2</el-check-tag>
                    <el-check-tag class="tag" :checked="upgradePlayer.checked19" @change="retainedChange('checked19')" size="large">赛马3</el-check-tag>
                    <el-check-tag class="tag" :checked="upgradePlayer.checked20" @change="retainedChange('checked20')" size="large">赛马4</el-check-tag>
                    <el-check-tag class="tag" :checked="upgradePlayer.checked21" @change="retainedChange('checked21')" size="large">新年</el-check-tag>
                    <el-check-tag class="tag" :checked="upgradePlayer.checked22" @change="retainedChange('checked22')" size="large">转运</el-check-tag>
                    <el-check-tag class="tag" :checked="upgradePlayer.checked23" @change="retainedChange('checked23')" size="large">小额转运</el-check-tag>
                    <el-check-tag class="tag" :checked="upgradePlayer.checked24" @change="retainedChange('checked24')" size="large">转运V3</el-check-tag>
                    <el-check-tag class="tag" :checked="upgradePlayer.checked25" @change="retainedChange('checked25')" size="large">转运V4V5</el-check-tag>
                    <el-check-tag class="tag" :checked="upgradePlayer.checked26" @change="retainedChange('checked26')" size="large">金币6.99</el-check-tag>
                    <el-check-tag class="tag" :checked="upgradePlayer.checked27" @change="retainedChange('checked27')" size="large">金币69</el-check-tag>
                    <el-check-tag class="tag" :checked="upgradePlayer.checked28" @change="retainedChange('checked28')" size="large">金币99</el-check-tag>
                    <el-check-tag class="tag" :checked="upgradePlayer.checked29" @change="retainedChange('checked29')" size="large">金币149</el-check-tag>
                    <el-check-tag class="tag" :checked="upgradePlayer.checked30" @change="retainedChange('checked30')" size="large">金币249</el-check-tag>
                    <el-check-tag class="tag" :checked="upgradePlayer.checked31" @change="retainedChange('checked31')" size="large">金币499</el-check-tag>
                    <el-check-tag class="tag" :checked="upgradePlayer.checked32" @change="retainedChange('checked32')" size="large">钻石V2</el-check-tag>
                    <el-check-tag class="tag" :checked="upgradePlayer.checked33" @change="retainedChange('checked33')" size="large">钻石V5</el-check-tag>
                    <el-check-tag class="tag" :checked="upgradePlayer.checked34" @change="retainedChange('checked34')" size="large">射击V4</el-check-tag>
                </div>
                <div class="block">
                    <el-date-picker
                        v-model="upgradePlayer.time"
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
        <div class = "box">
            <div class = 'test'>
                <div class="tag-box">
                    <el-check-tag class="tag" :checked="first.checked1" @change="firstChange('checked1')" size="large">首次购买钻1</el-check-tag>
                    <el-check-tag class="tag" :checked="first.checked2" @change="firstChange('checked2')" size="large">钻2</el-check-tag>
                    <el-check-tag class="tag" :checked="first.checked3" @change="firstChange('checked3')" size="large">钻3</el-check-tag>
                    <el-check-tag class="tag" :checked="first.checked4" @change="firstChange('checked4')" size="large">钻4</el-check-tag>
                    <el-check-tag class="tag" :checked="first.checked5" @change="firstChange('checked5')" size="large">钻5</el-check-tag>
                    <el-check-tag class="tag" :checked="first.checked6" @change="firstChange('checked6')" size="large">钻6</el-check-tag>
                    <el-check-tag class="tag" :checked="first.checked7" @change="firstChange('checked7')" size="large">首充</el-check-tag>
                    <el-check-tag class="tag" :checked="first.checked8" @change="firstChange('checked8')" size="large">起跑点每日1</el-check-tag>
                    <el-check-tag class="tag" :checked="first.checked9" @change="firstChange('checked9')" size="large">起跑点每日2</el-check-tag>
                    <el-check-tag class="tag" :checked="first.checked10" @change="firstChange('checked10')" size="large">每周礼包1</el-check-tag>
                    <el-check-tag class="tag" :checked="first.checked11" @change="firstChange('checked11')" size="large">每周vip直升</el-check-tag>
                    <el-check-tag class="tag" :checked="first.checked12" @change="firstChange('checked12')" size="large">每周V1</el-check-tag>
                    <el-check-tag class="tag" :checked="first.checked13" @change="firstChange('checked13')" size="large">每周V2</el-check-tag>
                    <el-check-tag class="tag" :checked="first.checked14" @change="firstChange('checked14')" size="large">每周V3</el-check-tag>
                    <el-check-tag class="tag" :checked="first.checked15" @change="firstChange('checked15')" size="large">每周V4</el-check-tag>
                    <el-check-tag class="tag" :checked="first.checked16" @change="firstChange('checked16')" size="large">每周V5</el-check-tag>
                    <el-check-tag class="tag" :checked="first.checked17" @change="firstChange('checked17')" size="large">赛马1</el-check-tag>
                    <el-check-tag class="tag" :checked="first.checked18" @change="firstChange('checked18')" size="large">赛马2</el-check-tag>
                    <el-check-tag class="tag" :checked="first.checked19" @change="firstChange('checked19')" size="large">赛马3</el-check-tag>
                    <el-check-tag class="tag" :checked="first.checked20" @change="firstChange('checked20')" size="large">赛马4</el-check-tag>
                    <el-check-tag class="tag" :checked="first.checked21" @change="firstChange('checked21')" size="large">新年</el-check-tag>
                    <el-check-tag class="tag" :checked="first.checked22" @change="firstChange('checked22')" size="large">转运</el-check-tag>
                    <el-check-tag class="tag" :checked="first.checked23" @change="firstChange('checked23')" size="large">小额转运</el-check-tag>
                    <el-check-tag class="tag" :checked="first.checked24" @change="firstChange('checked24')" size="large">转运V3</el-check-tag>
                    <el-check-tag class="tag" :checked="first.checked25" @change="firstChange('checked25')" size="large">转运V4V5</el-check-tag>
                    <el-check-tag class="tag" :checked="first.checked26" @change="firstChange('checked26')" size="large">金币6.99</el-check-tag>
                    <el-check-tag class="tag" :checked="first.checked27" @change="firstChange('checked27')" size="large">金币69</el-check-tag>
                    <el-check-tag class="tag" :checked="first.checked28" @change="firstChange('checked28')" size="large">金币99</el-check-tag>
                    <el-check-tag class="tag" :checked="first.checked29" @change="firstChange('checked29')" size="large">金币149</el-check-tag>
                    <el-check-tag class="tag" :checked="first.checked30" @change="firstChange('checked30')" size="large">金币249</el-check-tag>
                    <el-check-tag class="tag" :checked="first.checked31" @change="firstChange('checked31')" size="large">金币499</el-check-tag>
                    <el-check-tag class="tag" :checked="first.checked32" @change="firstChange('checked32')" size="large">钻石V2</el-check-tag>
                    <el-check-tag class="tag" :checked="first.checked33" @change="firstChange('checked33')" size="large">钻石V5</el-check-tag>
                    <el-check-tag class="tag" :checked="first.checked34" @change="firstChange('checked34')" size="large">射击V4</el-check-tag>
                </div>
                <div class="block">
                    <el-date-picker
                        v-model="first.time"
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
            <div id="first" v-show="first.type" style=' width:100%; height:300px'></div>
            <div v-show="!first.type" style='width:100%;'>
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
                    <el-check-tag class="tag" :checked="quantity.checked1" @change="quantityChange('checked1')" size="large">首次购买礼包数量</el-check-tag>
                    <el-check-tag class="tag" :checked="quantity.checked2" @change="quantityChange('checked2')" size="large">首次购买礼包占比</el-check-tag>
                </div>
                <div class="block">
                    <el-date-picker
                        v-model="quantity.time"
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
            <div id="quantity" v-show="quantity.type" style=' width:100%; height:300px'></div>
            <div v-show="!quantity.type" style='width:100%;'>
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
            quantity: {
                type: true,
                time:'',      
                checked1: true,
                checked2: false,
                data:[10, 30, 24, 218, 135, 147, 260],
            },
            upgradePlayer: {
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
                checked17: false,
                checked18: false,
                checked19: false,
                checked20: false,
                checked21: false,
                checked22: false,
                checked23: false,
                checked24: false,
                checked25: false,
                checked26: false,
                checked27: false,
                checked28: false,
                checked29: false,
                checked30: false,
                checked31: false,
                checked32: false,
                checked33: false,
                checked34: false,
                data:[10, 30, 24, 218, 135, 147, 260],
            },
            first: {
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
                checked17: false,
                checked18: false,
                checked19: false,
                checked20: false,
                checked21: false,
                checked22: false,
                checked23: false,
                checked24: false,
                checked25: false,
                checked26: false,
                checked27: false,
                checked28: false,
                checked29: false,
                checked30: false,
                checked31: false,
                checked32: false,
                checked33: false,
                checked34: false,
                data:[10, 30, 24, 218, 135, 147, 260],
            },
        }
    },
    watch: {
        'upgradePlayer.time': {
            handler() {
                var {stimedata,etimedata,dayLength} =  this.customDate(this.upgradePlayer.time);
                var customDay = this.customFormatDate(stimedata,etimedata,dayLength);
                this.getUpgradePlayer(this.activeUsers, customDay);
            }
       },
       'first.time': {
            handler() {
                var {stimedata,etimedata,dayLength} =  this.customDate(this.first.time);
                var customDay = this.customFormatDate(stimedata,etimedata,dayLength);
                this.getFirst(this.first, customDay);
            }
       },
       'quantity.time': {
            handler() {
                var {stimedata,etimedata,dayLength} =  this.customDate(this.quantity.time);
                var customDay = this.customFormatDate(stimedata,etimedata,dayLength);
                this.getQuantity(this.quantity, customDay);
            }
       }
    },
    methods:{
        switchType(type) {
             switch (type) {
                case '1':
                    this.upgradePlayer.type = !this.upgradePlayer.type
                    break;
                case '2':
                    this.first.type = !this.first.type
                    break;
                case '3':
                    this.quantity.type = !this.quantity.type
                    break;
                default:
                    break;
            }
        },
        quantityChange(checked) {
            this.quantity.checked1 = false;
            this.quantity.checked2 = false;
            switch (checked) {
                case 'checked1':
                    this.quantity.checked1 = true;
                    break;
                case 'checked2':
                    this.quantity.checked2 = true;
                    break;
                default:
                    break;
            }
        },
        firstChange(checked) {
            this.first.checked1 = false;
            this.first.checked2 = false;
            this.first.checked3 = false;
            this.first.checked4 = false;
            this.first.checked5 = false;
            this.first.checked6 = false;
            this.first.checked7 = false;
            this.first.checked8 = false;
            this.first.checked9 = false;
            this.first.checked10 = false;
            this.first.checked11 = false;
            this.first.checked12 = false;
            this.first.checked13 = false;
            this.first.checked14 = false;
            this.first.checked15 = false;
            this.first.checked16 = false;
            this.first.checked17 = false;
            this.first.checked18 = false;
            this.first.checked19 = false;
            this.first.checked20 = false;
            this.first.checked21 = false;
            this.first.checked22 = false;
            this.first.checked23 = false;
            this.first.checked24 = false;
            this.first.checked25 = false;
            this.first.checked26 = false;
            this.first.checked27 = false;
            this.first.checked28 = false;
            this.first.checked29 = false;
            this.first.checked30 = false;
            this.first.checked31 = false;
            this.first.checked32 = false;
            this.first.checked33 = false;
            this.first.checked34 = false;
            switch (checked) {
                case 'checked1':
                    this.first.checked1 = true;
                    break;
                case 'checked2':
                    this.first.checked2 = true;
                    break;
                case 'checked3':
                    this.first.checked3 = true;
                    break;
                 case 'checked4':
                    this.first.checked4 = true;
                    break;
                case 'checked5':
                    this.first.checked5 = true;
                    break;
                case 'checked6':
                    this.first.checked6 = true;
                    break;
                case 'checked7':
                    this.first.checked7 = true;
                    break;
                case 'checked8':
                    this.first.checked8 = true;
                    break;
                 case 'checked9':
                    this.first.checked9 = true;
                    break;
                case 'checked10':
                    this.first.checked10 = true;
                    break;
                case 'checked11':
                    this.first.checked11 = true;
                    break;
                case 'checked12':
                    this.first.checked12 = true;
                    break;
                case 'checked13':
                    this.first.checked13 = true;
                    break;
                case 'checked14':
                    this.first.checked14 = true;
                    break;
                case 'checked15':
                    this.first.checked15 = true;
                    break;
                case 'checked16':
                    this.first.checked16 = true;
                    break;
                case 'checked17':
                    this.first.checked17 = true;
                    break;
                 case 'checked18':
                    this.first.checked18 = true;
                    break;
                case 'checked19':
                    this.first.checked19 = true;
                    break;
                case 'checked20':
                    this.first.checked20 = true;
                    break;
                case 'checked21':
                    this.first.checked21 = true;
                    break;
                case 'checked22':
                    this.first.checked22 = true;
                    break;
                 case 'checked23':
                    this.first.checked23 = true;
                    break;
                case 'checked24':
                    this.first.checked24 = true;
                    break;
                case 'checked25':
                    this.first.checked25 = true;
                    break;
                case 'checked26':
                    this.first.checked26 = true;
                    break;
                case 'checked27':
                    this.first.checked27 = true;
                    break;
                case 'checked28':
                    this.first.checked28 = true;
                    break;
                case 'checked29':
                    this.first.checked29 = true;
                    break;
                case 'checked30':
                    this.first.checked30 = true;
                    break;
                case 'checked31':
                    this.first.checked31 = true;
                    break;
                case 'checked32':
                    this.first.checked32 = true;
                    break;
                case 'checked33':
                    this.first.checked33 = true;
                    break;
                case 'checked34':
                    this.first.checked34 = true;
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
            this.upgradePlayer.checked15 = false;
            this.upgradePlayer.checked16 = false;
            this.upgradePlayer.checked17 = false;
            this.upgradePlayer.checked18 = false;
            this.upgradePlayer.checked19 = false;
            this.upgradePlayer.checked20 = false;
            this.upgradePlayer.checked21 = false;
            this.upgradePlayer.checked22 = false;
            this.upgradePlayer.checked23 = false;
            this.upgradePlayer.checked24 = false;
            this.upgradePlayer.checked25 = false;
            this.upgradePlayer.checked26 = false;
            this.upgradePlayer.checked27 = false;
            this.upgradePlayer.checked28 = false;
            this.upgradePlayer.checked29 = false;
            this.upgradePlayer.checked30 = false;
            this.upgradePlayer.checked31 = false;
            this.upgradePlayer.checked32 = false;
            this.upgradePlayer.checked33 = false;
            this.upgradePlayer.checked34 = false;
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
                case 'checked15':
                    this.upgradePlayer.checked15 = true;
                    break;
                case 'checked16':
                    this.upgradePlayer.checked16 = true;
                    break;
                case 'checked17':
                    this.upgradePlayer.checked17 = true;
                    break;
                 case 'checked18':
                    this.upgradePlayer.checked18 = true;
                    break;
                case 'checked19':
                    this.upgradePlayer.checked19 = true;
                    break;
                case 'checked20':
                    this.upgradePlayer.checked20 = true;
                    break;
                case 'checked21':
                    this.upgradePlayer.checked21 = true;
                    break;
                case 'checked22':
                    this.upgradePlayer.checked22 = true;
                    break;
                 case 'checked23':
                    this.upgradePlayer.checked23 = true;
                    break;
                case 'checked24':
                    this.upgradePlayer.checked24 = true;
                    break;
                case 'checked25':
                    this.upgradePlayer.checked25 = true;
                    break;
                case 'checked26':
                    this.upgradePlayer.checked26 = true;
                    break;
                case 'checked27':
                    this.upgradePlayer.checked27 = true;
                    break;
                case 'checked28':
                    this.upgradePlayer.checked28 = true;
                    break;
                case 'checked29':
                    this.upgradePlayer.checked29 = true;
                    break;
                case 'checked30':
                    this.upgradePlayer.checked30 = true;
                    break;
                case 'checked31':
                    this.upgradePlayer.checked31 = true;
                    break;
                case 'checked32':
                    this.upgradePlayer.checked32 = true;
                    break;
                case 'checked33':
                    this.upgradePlayer.checked33 = true;
                    break;
                case 'checked34':
                    this.upgradePlayer.checked34 = true;
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
            this.getFirst(this.first, sevenDay);
            this.getQuantity(this.quantity, sevenDay);
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
        getFirst(data, day){
            // 基于准备好的dom，初始化echarts实例
            var chartDom = document.getElementById('first');
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
</style>