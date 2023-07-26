<template>
    <div style=' width:100%;margin-bottom: 50px; '>
    <div class="title">
        <h1>区间分布</h1>
    </div>
    <el-divider />
    <div class = "box">
        <div class = 'test'>
            <div class="tag-box">
                <el-check-tag  class="tag"  :checked="gamePlayer.checked1" @change="onChangeIncomeP('checked1')" size="large">活跃玩家数量</el-check-tag>
                <el-check-tag  class="tag"  :checked="gamePlayer.checked2" @change="onChangeIncomeP('checked2')" size="large">活跃玩家总筹码</el-check-tag>
                <el-check-tag  class="tag"  :checked="gamePlayer.checked3" @change="onChangeIncomeP('checked3')" size="large">活跃玩家总钻石</el-check-tag>
                <el-check-tag  class="tag"  :checked="gamePlayer.checked4" @change="onChangeIncomeP('checked4')" size="large">比赛场卷</el-check-tag>
                <el-check-tag  class="tag"  :checked="gamePlayer.checked5" @change="onChangeIncomeP('checked5')" size="large">老虎机卷</el-check-tag>
            </div>
            <div class="block">
                <el-date-picker
                    v-model="gamePlayer.Time"
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
        <div id = 'gamePlayer' v-show="gamePlayer.type" style='min-width: 800px; width:100%; height:300px'></div>
        <div v-show="!gamePlayer.type" style='width:100%;'>
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
                <el-check-tag  class="tag"  :checked="goldRange.checked1" @change="onChangeIncome('checked1')" size="large">筹码区间0-5K</el-check-tag>
                <el-check-tag  class="tag"  :checked="goldRange.checked2" @change="onChangeIncome('checked2')" size="large">5K-3K</el-check-tag>
                <el-check-tag  class="tag"  :checked="goldRange.checked3" @change="onChangeIncome('checked3')" size="large">30K-100K</el-check-tag>
                <el-check-tag  class="tag"  :checked="goldRange.checked4" @change="onChangeIncome('checked4')" size="large">100k-300k</el-check-tag>
                <el-check-tag  class="tag"  :checked="goldRange.checked5" @change="onChangeIncome('checked5')" size="large">300k-1M</el-check-tag>
                <el-check-tag  class="tag"  :checked="goldRange.checked6" @change="onChangeIncome('checked6')" size="large">1M-2M</el-check-tag>
                <el-check-tag  class="tag"  :checked="goldRange.checked7" @change="onChangeIncome('checked7')" size="large">2M-5M</el-check-tag>
                <el-check-tag  class="tag"  :checked="goldRange.checked8" @change="onChangeIncome('checked8')" size="large">5M-6M</el-check-tag>
                <el-check-tag  class="tag"  :checked="goldRange.checked9" @change="onChangeIncome('checked9')" size="large">6M-20M</el-check-tag>
                <el-check-tag  class="tag"  :checked="goldRange.checked10" @change="onChangeIncome('checked10')" size="large">20M-60M</el-check-tag>
                <el-check-tag  class="tag"  :checked="goldRange.checked11" @change="onChangeIncome('checked11')" size="large">60M-100M</el-check-tag>
                <el-check-tag  class="tag"  :checked="goldRange.checked12" @change="onChangeIncome('checked12')" size="large">100M-200M</el-check-tag>
                <el-check-tag  class="tag"  :checked="goldRange.checked13" @change="onChangeIncome('checked13')" size="large">200M-500M</el-check-tag>
                <el-check-tag  class="tag"  :checked="goldRange.checked14" @change="onChangeIncome('checked14')" size="large">500M-1000M</el-check-tag>
                <el-check-tag  class="tag"  :checked="goldRange.checked15" @change="onChangeIncome('checked15')" size="large">1000M-2000M</el-check-tag>
                <el-check-tag  class="tag"  :checked="goldRange.checked16" @change="onChangeIncome('checked16')" size="large">2000M-4000M</el-check-tag>
                <el-check-tag  class="tag"  :checked="goldRange.checked17" @change="onChangeIncome('checked17')" size="large">4000M-10000M</el-check-tag>
                <el-check-tag  class="tag"  :checked="goldRange.checked18" @change="onChangeIncome('checked18')" size="large">10000M以上</el-check-tag>
            </div>
            <div class="block">
                <el-date-picker
                    v-model="goldRange.Time"
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
        <div id = 'goldRange'  v-show="goldRange.type" style='min-width: 800px; width:100%; height:300px'></div>
        <div v-show="!goldRange.type" style='width:100%;'>
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
                <el-check-tag  class="tag"  :checked="diamondRange.checked1" @change="onChangeMonthly('checked1')" size="large">钻石区间0</el-check-tag>
                <el-check-tag  class="tag"  :checked="diamondRange.checked2" @change="onChangeMonthly('checked2')" size="large">钻石区间1-10</el-check-tag>
                <el-check-tag  class="tag"  :checked="diamondRange.checked3" @change="onChangeMonthly('checked3')" size="large">钻石区间10-100</el-check-tag>
                <el-check-tag  class="tag"  :checked="diamondRange.checked4" @change="onChangeMonthly('checked4')" size="large">钻石区间100-200</el-check-tag>
                <el-check-tag  class="tag"  :checked="diamondRange.checked5" @change="onChangeMonthly('checked5')" size="large">钻石区间200-500</el-check-tag>
                <el-check-tag  class="tag"  :checked="diamondRange.checked6" @change="onChangeMonthly('checked6')" size="large">钻石区间500-1000</el-check-tag>
                <el-check-tag  class="tag"  :checked="diamondRange.checked7" @change="onChangeMonthly('checked7')" size="large">钻石1000以上</el-check-tag>
            </div>
            <div class="block">
                <el-date-picker
                    v-model="diamondRange.Time"
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
        <div id = 'diamondRange' v-show="diamondRange.type" style='min-width: 800px; width:100%; height:300px'></div>
        <div v-show="!diamondRange.type" style='width:100%;'>
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
                <el-check-tag  class="tag"  :checked="lottery.checked1" @change="onChangeRetention('checked1')" size="large">比赛场卷</el-check-tag>
                <el-check-tag  class="tag"  :checked="lottery.checked2" @change="onChangeRetention('checked2')" size="large">老虎机卷</el-check-tag>
            </div>
            <div class="block">
                <el-date-picker
                    v-model="lottery.Time"
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
        <div id = 'lottery' v-show="lottery.type" style='min-width: 800px; width:100%; height:300px'></div>
        <div v-show="!lottery.type" style='width:100%;'>
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
            goldRange: {
                type: true,
                Time:'',      
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
                data:[10, 30, 24, 218, 135, 147, 260],
            },
            gamePlayer: {
                type: true,
                Time:'',      
                checked1: true,
                checked2: false,
                checked3: false,
                checked4: false,
                checked5: false,
                data:[10, 30, 24, 218, 135, 147, 260],
            },
            lottery: {
                type: true,
                Time:'',      
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
            diamondRange: {
                type: true,
                Time:'',      
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
        'goldRange.Time': {
            handler() {
                var {stimedata,etimedata,dayLength} =  this.customDate(this.goldRange.Time);
                var customDay = this.customFormatDate(stimedata,etimedata,dayLength);
                this.getgoldRange(this.goldRange, customDay);
            }
        },
        'gamePlayer.Time': {
            handler() {
                var {stimedata,etimedata,dayLength} =  this.customDate(this.gamePlayer.Time);
                var customDay = this.customFormatDate(stimedata,etimedata,dayLength);
                this.getgamePlayer(this.goldRange, customDay);
            }
        },
        'lottery.Time': {
            handler() {
                var {stimedata,etimedata,dayLength} =  this.customDate(this.lottery.Time);
                var customDay = this.customFormatDate(stimedata,etimedata,dayLength);
                this.getlottery(this.lottery, customDay);
            }
        },
        'diamondRange.Time': {
            handler() {
                var {stimedata,etimedata,dayLength} =  this.customDate(this.diamondRange.Time);
                var customDay = this.customFormatDate(stimedata,etimedata,dayLength);
                this.getdiamondRange(this.diamondRange, customDay);
            }
        },
    },
    methods:{
        switchType(type) {
             switch (type) {
                case '1':
                    this.gamePlayer.type = !this.gamePlayer.type
                    break;
                case '2':
                    this.goldRange.type = !this.goldRange.type
                    break;
                case '3':
                    this.diamondRange.type = !this.diamondRange.type
                    break;
                case '4':
                    this.lottery.type = !this.lottery.type
                    break;
                default:
                    break;
            }
        },
        onChangeIncome(checked) {
            this.goldRange.checked1 = false;
            this.goldRange.checked2 = false;
            this.goldRange.checked3 = false;
            this.goldRange.checked4 = false;
            this.goldRange.checked5 = false;
            this.goldRange.checked6 = false;
            this.goldRange.checked7 = false;
            this.goldRange.checked8 = false;
            this.goldRange.checked9 = false;
            this.goldRange.checked10 = false;
            this.goldRange.checked11 = false;
            this.goldRange.checked12 = false;
            this.goldRange.checked13 = false;
            this.goldRange.checked14 = false;
            this.goldRange.checked15 = false;
            this.goldRange.checked16 = false;
            this.goldRange.checked17 = false;
            this.goldRange.checked18 = false;
            switch (checked) {
                case 'checked1':
                    this.goldRange.checked1 = true;
                    break;
                case 'checked2':
                    this.goldRange.checked2 = true;
                    break;
                case 'checked3':
                    this.goldRange.checked3 = true;
                    break;
                case 'checked4':
                    this.goldRange.checked4 = true;
                    break;
                case 'checked5':
                    this.goldRange.checked5 = true;
                    break;
                case 'checked6':
                    this.goldRange.checked6 = true;
                    break;
                case 'checked7':
                    this.goldRange.checked7 = true;
                    break;
                case 'checked8':
                    this.goldRange.checked8 = true;
                    break;
                case 'checked9':
                    this.goldRange.checked9 = true;
                    break;
                case 'checked10':
                    this.goldRange.checked10 = true;
                    break;
                case 'checked11':
                    this.goldRange.checked11 = true;
                    break;
                case 'checked12':
                    this.goldRange.checked12 = true;
                    break;
                case 'checked13':
                    this.goldRange.checked13 = true;
                    break;
                case 'checked14':
                    this.goldRange.checked14 = true;
                    break;
                case 'checked15':
                    this.goldRange.checked15 = true;
                    break;
                case 'checked16':
                    this.goldRange.checked16 = true;
                    break;
                case 'checked17':
                    this.goldRange.checked17 = true;
                    break;
                case 'checked18':
                    this.goldRange.checked18 = true;
                    break;
                default:
                    break;
            }
        },
        onChangeIncomeP(checked) {
            this.gamePlayer.checked1 = false;
            this.gamePlayer.checked2 = false;
            this.gamePlayer.checked3 = false;
            this.gamePlayer.checked4 = false;
            this.gamePlayer.checked5 = false;
            switch (checked) {
                case 'checked1':
                    this.gamePlayer.checked1 = true;
                    break;
                case 'checked2':
                    this.gamePlayer.checked2 = true;
                    break;
                case 'checked3':
                    this.gamePlayer.checked3 = true;
                    break;
                case 'checked4':
                    this.gamePlayer.checked4 = true;
                    break;
                case 'checked5':
                    this.gamePlayer.checked5 = true;
                    break;
                default:
                    break;
            }
        },
        onChangeRetention(checked) {
            this.lottery.checked1 = false;
            this.lottery.checked2 = false;
            this.lottery.checked3 = false;
            this.lottery.checked4 = false;
            this.lottery.checked5 = false;
            this.lottery.checked6 = false;
            this.lottery.checked7 = false;
            this.lottery.checked8 = false;
            this.lottery.checked9 = false;
            this.lottery.checked10 = false;
            this.lottery.checked11 = false;
            switch (checked) {
                case 'checked1':
                    this.lottery.checked1 = true;
                    break;
                case 'checked2':
                    this.lottery.checked2 = true;
                    break;
                case 'checked3':
                    this.lottery.checked3 = true;
                    break;
                case 'checked4':
                    this.lottery.checked4 = true;
                    break;
                case 'checked5':
                    this.lottery.checked5 = true;
                    break;
                case 'checked6':
                    this.lottery.checked6 = true;
                    break;
                case 'checked7':
                    this.lottery.checked8 = true;
                    break;
                case 'checked9':
                    this.lottery.checked9 = true;
                    break;
                case 'checked10':
                    this.lottery.checked10 = true;
                    break;
                default:
                    break;
            }
        },
        onChangeMonthly(checked) {
            this.diamondRange.checked1 = false;
            this.diamondRange.checked2 = false;
            this.diamondRange.checked3 = false;
            this.diamondRange.checked4 = false;
            this.diamondRange.checked5 = false;
            this.diamondRange.checked6 = false;
            this.diamondRange.checked7 = false;
            this.diamondRange.checked8 = false;
            this.diamondRange.checked9 = false;
            this.diamondRange.checked10 = false;
            this.diamondRange.checked11 = false;
            switch (checked) {
                case 'checked1':
                    this.diamondRange.checked1 = true;
                    break;
                case 'checked2':
                    this.diamondRange.checked2 = true;
                    break;
                case 'checked3':
                    this.diamondRange.checked3 = true;
                    break;
                case 'checked4':
                    this.diamondRange.checked4 = true;
                    break;
                case 'checked5':
                    this.diamondRange.checked5 = true;
                    break;
                case 'checked6':
                    this.diamondRange.checked6 = true;
                    break;
                case 'checked7':
                    this.diamondRange.checked8 = true;
                    break;
                case 'checked9':
                    this.diamondRange.checked9 = true;
                    break;
                case 'checked10':
                    this.diamondRange.checked10 = true;
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
            this.getgoldRange(this.goldRange, sevenDay);
            this.getgamePlayer(this.gamePlayer, sevenDay);
            this.getlottery(this.lottery, sevenDay);
            this.getdiamondRange(this.diamondRange, sevenDay);
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

        getlottery(data, day){
            // 基于准备好的dom，初始化echarts实例
            var chartDom = document.getElementById('lottery');
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
                    type: 'line',
                    name: 'asdasd'
                    },
                    {
                    data:[150, 230, 224, 218, 135, 147, 260],
                    type: 'line'
                    },
                ]
            };
            option && myChart.setOption(option);
        },

        getgamePlayer(data, day){
            // 基于准备好的dom，初始化echarts实例
            var chartDom = document.getElementById('gamePlayer');
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
        
        getgoldRange(data, day){
            // 基于准备好的dom，初始化echarts实例
            var chartDom = document.getElementById('goldRange');
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

         getdiamondRange(data, day){
            // 基于准备好的dom，初始化echarts实例
            var chartDom = document.getElementById('diamondRange');
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