<template>
    <div style=' width:100%; height:300px'>
    <div class="title">
        <h1>老虎机汇总</h1>
    </div>
    <el-divider />
    <div class = "box">
        <div class = 'test'>
            <div class="tag-box">
                <el-check-tag  class="tag"  :checked="dailyIncome.checked1" @change="onChangeIncome('checked1')" size="large">钻石变化</el-check-tag>
                <el-check-tag  class="tag"  :checked="dailyIncome.checked2" @change="onChangeIncome('checked2')" size="large">VIP0</el-check-tag>
                <el-check-tag  class="tag"  :checked="dailyIncome.checked3" @change="onChangeIncome('checked3')" size="large">VIP1</el-check-tag>
                <el-check-tag  class="tag"  :checked="dailyIncome.checked4" @change="onChangeIncome('checked4')" size="large">VIP2</el-check-tag>
                <el-check-tag  class="tag"  :checked="dailyIncome.checked5" @change="onChangeIncome('checked5')" size="large">VIP3</el-check-tag>
                <el-check-tag  class="tag"  :checked="dailyIncome.checked6" @change="onChangeIncome('checked6')" size="large">VIP4</el-check-tag>
                <el-check-tag  class="tag"  :checked="dailyIncome.checked7" @change="onChangeIncome('checked7')" size="large">VIP5</el-check-tag>
                <el-check-tag  class="tag"  :checked="dailyIncome.checked8" @change="onChangeIncome('checked8')" size="large">VIP6</el-check-tag>
                <el-check-tag  class="tag"  :checked="dailyIncome.checked9" @change="onChangeIncome('checked9')" size="large">VIP7</el-check-tag>
                <el-check-tag  class="tag"  :checked="dailyIncome.checked10" @change="onChangeIncome('checked10')" size="large">VIP8</el-check-tag>
                <el-check-tag  class="tag"  :checked="dailyIncome.checked11" @change="onChangeIncome('checked11')" size="large">VIP9</el-check-tag>
                <el-check-tag  class="tag"  :checked="dailyIncome.checked12" @change="onChangeIncome('checked12')" size="large">老虎机卷产出消耗</el-check-tag>
                <el-check-tag  class="tag"  :checked="dailyIncome.checked13" @change="onChangeIncome('checked13')" size="large">老虎机产出比赛场卷</el-check-tag>
            </div>
            <div class="block">
                <el-date-picker
                    v-model="dailyIncome.Time"
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
        <div id = 'dailyIncome' v-show="dailyIncome.type" style='min-width: 800px; width:100%; height:300px'></div>
        <div v-show="!dailyIncome.type" style='width:100%;'>
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
                <el-check-tag  class="tag"  :checked="dailyIncomeP.checked1" @change="onChangeIncomeP('checked1')" size="large">老虎机人数</el-check-tag>
                <el-check-tag  class="tag"  :checked="dailyIncomeP.checked2" @change="onChangeIncomeP('checked2')" size="large">老虎机付费人数</el-check-tag>
                <el-check-tag  class="tag"  :checked="dailyIncomeP.checked3" @change="onChangeIncomeP('checked3')" size="large">老虎机付费次数</el-check-tag>
                <el-check-tag  class="tag"  :checked="dailyIncomeP.checked4" @change="onChangeIncomeP('checked4')" size="large">老虎机付费</el-check-tag>
                <el-check-tag  class="tag"  :checked="dailyIncomeP.checked5" @change="onChangeIncomeP('checked5')" size="large">老虎机人arppu</el-check-tag>
                <el-check-tag  class="tag"  :checked="dailyIncomeP.checked6" @change="onChangeIncomeP('checked6')" size="large">老虎机付费参透</el-check-tag>
            </div>
            <div class="block">
                <el-date-picker
                    v-model="dailyIncomeP.Time"
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
        <div id = 'dailyIncomeP' v-show="dailyIncomeP.type" style='min-width: 800px; width:100%; height:300px'></div>
        <div v-show="!dailyIncomeP.type" style='width:100%;'>
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
                <el-check-tag  class="tag"  :checked="paidRetention.checked1" @change="onChangeRetention('checked1')" size="large">1M中奖人数</el-check-tag>
                <el-check-tag  class="tag"  :checked="paidRetention.checked2" @change="onChangeRetention('checked2')" size="large">2-3M中奖人数</el-check-tag>
                <el-check-tag  class="tag"  :checked="paidRetention.checked3" @change="onChangeRetention('checked3')" size="large">5M中奖人数</el-check-tag>
                <el-check-tag  class="tag"  :checked="paidRetention.checked4" @change="onChangeRetention('checked4')" size="large">10M中奖人数</el-check-tag>
                <el-check-tag  class="tag"  :checked="paidRetention.checked5" @change="onChangeRetention('checked5')" size="large">50M中奖人数</el-check-tag>
                <el-check-tag  class="tag"  :checked="paidRetention.checked6" @change="onChangeRetention('checked6')" size="large">100M中奖人数</el-check-tag>
                <el-check-tag  class="tag"  :checked="paidRetention.checked7" @change="onChangeRetention('checked7')" size="large">1M中奖次数</el-check-tag>
                <el-check-tag  class="tag"  :checked="paidRetention.checked8" @change="onChangeRetention('checked8')" size="large">2-3M中奖次数</el-check-tag>
                <el-check-tag  class="tag"  :checked="paidRetention.checked9" @change="onChangeRetention('checked9')" size="large">5M中奖次数</el-check-tag>
                <el-check-tag  class="tag"  :checked="paidRetention.checked10" @change="onChangeRetention('checked10')" size="large">10M中奖次数</el-check-tag>
                <el-check-tag  class="tag"  :checked="paidRetention.checked11" @change="onChangeRetention('checked11')" size="large">50M中奖次数</el-check-tag>
                <el-check-tag  class="tag"  :checked="paidRetention.checked12" @change="onChangeRetention('checked12')" size="large">100M中奖次数</el-check-tag>
            </div>
            <div class="block">
                <el-date-picker
                    v-model="paidRetention.Time"
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
        <div id = 'paidRetention' v-show="paidRetention.type" style='min-width: 800px; width:100%; height:300px'></div>
        <div v-show="!paidRetention.type" style='width:100%;'>
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
                <el-check-tag  class="tag"  :checked="monthlyIncome.checked1" @change="onChangeMonthly('checked1')" size="large">子任务1人数</el-check-tag>
                <el-check-tag  class="tag"  :checked="monthlyIncome.checked2" @change="onChangeMonthly('checked2')" size="large">子任务2人数</el-check-tag>
                <el-check-tag  class="tag"  :checked="monthlyIncome.checked3" @change="onChangeMonthly('checked3')" size="large">子任务3人数</el-check-tag>
                <el-check-tag  class="tag"  :checked="monthlyIncome.checked4" @change="onChangeMonthly('checked4')" size="large">子任务4人数</el-check-tag>
                <el-check-tag  class="tag"  :checked="monthlyIncome.checked5" @change="onChangeMonthly('checked5')" size="large">子任务5人数</el-check-tag>
                <el-check-tag  class="tag"  :checked="monthlyIncome.checked6" @change="onChangeMonthly('checked6')" size="large">子任务6人数</el-check-tag>
                <el-check-tag  class="tag"  :checked="monthlyIncome.checked7" @change="onChangeMonthly('checked7')" size="large">子任务7人数</el-check-tag>
                <el-check-tag  class="tag"  :checked="monthlyIncome.checked8" @change="onChangeMonthly('checked8')" size="large">任务产出老虎机卷</el-check-tag>
            </div>
            <div class="block">
                <el-date-picker
                    v-model="monthlyIncome.Time"
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
        <div id = 'monthlyIncome' v-show="monthlyIncome.type" style='min-width: 800px; width:100%; height:300px'></div>
        <div v-show="!monthlyIncome.type" style='width:100%;'>
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
                <el-check-tag  class="tag"  :checked="arppu.checked1" @change="onChangeArppu('checked1')" size="large">玩老虎机总人数</el-check-tag>
                <el-check-tag  class="tag"  :checked="arppu.checked2" @change="onChangeArppu('checked2')" size="large">VIP.0</el-check-tag>
                <el-check-tag  class="tag"  :checked="arppu.checked3" @change="onChangeArppu('checked3')" size="large">VIP.1</el-check-tag>
                <el-check-tag  class="tag"  :checked="arppu.checked4" @change="onChangeArppu('checked4')" size="large">VIP.2</el-check-tag>
                <el-check-tag  class="tag"  :checked="arppu.checked5" @change="onChangeArppu('checked5')" size="large">VIP.3</el-check-tag>
                <el-check-tag  class="tag"  :checked="arppu.checked6" @change="onChangeArppu('checked6')" size="large">VIP.4</el-check-tag>
                <el-check-tag  class="tag"  :checked="arppu.checked7" @change="onChangeArppu('checked7')" size="large">VIP.5</el-check-tag>
                <el-check-tag  class="tag"  :checked="arppu.checked8" @change="onChangeArppu('checked8')" size="large">VIP.6</el-check-tag>
                <el-check-tag  class="tag"  :checked="arppu.checked9" @change="onChangeArppu('checked9')" size="large">VIP.7</el-check-tag>
                <el-check-tag  class="tag"  :checked="arppu.checked10" @change="onChangeArppu('checked10')" size="large">VIP.8</el-check-tag>
                <el-check-tag  class="tag"  :checked="arppu.checked11" @change="onChangeArppu('checked11')" size="large">VIP.9</el-check-tag>
                <el-check-tag  class="tag"  :checked="arppu.checked12" @change="onChangeArppu('checked12')" size="large">免费老虎机人数</el-check-tag>
            </div>
            <div class="block">
                <el-date-picker
                    v-model="arppu.Time"
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
        <div id = 'arppu' v-show="arppu.type" style='min-width: 800px; width:100%; height:300px'></div>
        <div v-show="!arppu.type" style='width:100%;'>
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
            dailyIncome: {
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
                data:[10, 30, 24, 218, 135, 147, 260],
            },
            dailyIncomeP: {
                type: true,
                Time:'',      
                checked1: true,
                checked2: false,
                checked3: false,
                checked4: false,
                checked5: false,
                checked6: false,
                data:[10, 30, 24, 218, 135, 147, 260],
            },
            paidRetention: {
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
                data:[10, 30, 24, 218, 135, 147, 260],
            },
            monthlyIncome: {
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
            arppu: {
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
                data:[10, 30, 24, 218, 135, 147, 260],               
            }
        }
    },
    watch: {
        'dailyIncome.Time': {
            handler() {
                var {stimedata,etimedata,dayLength} =  this.customDate(this.dailyIncome.Time);
                var customDay = this.customFormatDate(stimedata,etimedata,dayLength);
                this.getdailyIncome(this.dailyIncome, customDay);
            }
        },
        'dailyIncomeP.Time': {
            handler() {
                var {stimedata,etimedata,dayLength} =  this.customDate(this.dailyIncomeP.Time);
                var customDay = this.customFormatDate(stimedata,etimedata,dayLength);
                this.getdailyIncomeP(this.dailyIncome, customDay);
            }
        },
        'paidRetention.Time': {
            handler() {
                var {stimedata,etimedata,dayLength} =  this.customDate(this.paidRetention.Time);
                var customDay = this.customFormatDate(stimedata,etimedata,dayLength);
                this.getPaidRetention(this.paidRetention, customDay);
            }
        },
        'monthlyIncome.Time': {
            handler() {
                var {stimedata,etimedata,dayLength} =  this.customDate(this.monthlyIncome.Time);
                var customDay = this.customFormatDate(stimedata,etimedata,dayLength);
                this.getmonthlyIncome(this.monthlyIncome, customDay);
            }
        },
        'arppu.Time': {
            handler() {
                var {stimedata,etimedata,dayLength} =  this.customDate(this.arppu.Time);
                var customDay = this.customFormatDate(stimedata,etimedata,dayLength);
                this.getArppu(this.arppu, customDay);
            }
        },
    },
    methods:{
         switchType(type) {
             switch (type) {
                case '1':
                    this.dailyIncome.type = !this.dailyIncome.type
                    break;
                case '2':
                    this.dailyIncomeP.type = !this.dailyIncomeP.type
                    break;
                case '3':
                    this.paidRetention.type = !this.paidRetention.type
                    break;
                case '4':
                    this.monthlyIncome.type = !this.monthlyIncome.type
                    break;
                case '5':
                    this.arppu.type = !this.arppu.type
                    break;
                default:
                    break;
            }
        },
        onChangeIncome(checked) {
            this.dailyIncome.checked1 = false;
            this.dailyIncome.checked2 = false;
            this.dailyIncome.checked3 = false;
            this.dailyIncome.checked4 = false;
            this.dailyIncome.checked5 = false;
            this.dailyIncome.checked6 = false;
            this.dailyIncome.checked7 = false;
            this.dailyIncome.checked8 = false;
            this.dailyIncome.checked9 = false;
            this.dailyIncome.checked10 = false;
            this.dailyIncome.checked11 = false;
            this.dailyIncome.checked12 = false;
            this.dailyIncome.checked13 = false;
            switch (checked) {
                case 'checked1':
                    this.dailyIncome.checked1 = true;
                    break;
                case 'checked2':
                    this.dailyIncome.checked2 = true;
                    break;
                case 'checked3':
                    this.dailyIncome.checked3 = true;
                    break;
                case 'checked4':
                    this.dailyIncome.checked4 = true;
                    break;
                case 'checked5':
                    this.dailyIncome.checked5 = true;
                    break;
                case 'checked6':
                    this.dailyIncome.checked6 = true;
                    break;
                case 'checked7':
                    this.dailyIncome.checked7 = true;
                    break;
                case 'checked8':
                    this.dailyIncome.checked8 = true;
                    break;
                case 'checked9':
                    this.dailyIncome.checked9 = true;
                    break;
                case 'checked10':
                    this.dailyIncome.checked10 = true;
                    break;
                case 'checked11':
                    this.dailyIncome.checked11 = true;
                    break;
                case 'checked12':
                    this.dailyIncome.checked12 = true;
                    break;
                case 'checked13':
                    this.dailyIncome.checked13 = true;
                    break;
                default:
                    break;
            }
        },
        onChangeIncomeP(checked) {
            this.dailyIncomeP.checked1 = false;
            this.dailyIncomeP.checked2 = false;
            this.dailyIncomeP.checked3 = false;
            this.dailyIncomeP.checked4 = false;
            this.dailyIncomeP.checked5 = false;
            this.dailyIncomeP.checked6 = false;
            switch (checked) {
                case 'checked1':
                    this.dailyIncomeP.checked1 = true;
                    break;
                case 'checked2':
                    this.dailyIncomeP.checked2 = true;
                    break;
                case 'checked3':
                    this.dailyIncomeP.checked3 = true;
                    break;
                case 'checked4':
                    this.dailyIncomeP.checked4 = true;
                    break;
                case 'checked5':
                    this.dailyIncomeP.checked5 = true;
                    break;
                case 'checked6':
                    this.dailyIncomeP.checked6 = true;
                    break;
                default:
                    break;
            }
        },
        onChangeRetention(checked) {
            this.paidRetention.checked1 = false;
            this.paidRetention.checked2 = false;
            this.paidRetention.checked3 = false;
            this.paidRetention.checked4 = false;
            this.paidRetention.checked5 = false;
            this.paidRetention.checked6 = false;
            this.paidRetention.checked7 = false;
            this.paidRetention.checked8 = false;
            this.paidRetention.checked9 = false;
            this.paidRetention.checked10 = false;
            this.paidRetention.checked11 = false;
            this.paidRetention.checked12 = false;
            switch (checked) {
                case 'checked1':
                    this.paidRetention.checked1 = true;
                    break;
                case 'checked2':
                    this.paidRetention.checked2 = true;
                    break;
                case 'checked3':
                    this.paidRetention.checked3 = true;
                    break;
                case 'checked4':
                    this.paidRetention.checked4 = true;
                    break;
                case 'checked5':
                    this.paidRetention.checked5 = true;
                    break;
                case 'checked6':
                    this.paidRetention.checked6 = true;
                    break;
                case 'checked7':
                    this.paidRetention.checked8 = true;
                    break;
                case 'checked9':
                    this.paidRetention.checked9 = true;
                    break;
                case 'checked10':
                    this.paidRetention.checked10 = true;
                    break;
                case 'checked11':
                    this.paidRetention.checked11 = true;
                    break;
                case 'checked12':
                    this.paidRetention.checked12 = true;
                    break;
                default:
                    break;
            }
        },
        onChangeMonthly(checked) {
            this.monthlyIncome.checked1 = false;
            this.monthlyIncome.checked2 = false;
            this.monthlyIncome.checked3 = false;
            this.monthlyIncome.checked4 = false;
            this.monthlyIncome.checked5 = false;
            this.monthlyIncome.checked6 = false;
            this.monthlyIncome.checked7 = false;
            this.monthlyIncome.checked8 = false;
            this.monthlyIncome.checked9 = false;
            this.monthlyIncome.checked10 = false;
            this.monthlyIncome.checked11 = false;
            switch (checked) {
                case 'checked1':
                    this.monthlyIncome.checked1 = true;
                    break;
                case 'checked2':
                    this.monthlyIncome.checked2 = true;
                    break;
                case 'checked3':
                    this.monthlyIncome.checked3 = true;
                    break;
                case 'checked4':
                    this.monthlyIncome.checked4 = true;
                    break;
                case 'checked5':
                    this.monthlyIncome.checked5 = true;
                    break;
                case 'checked6':
                    this.monthlyIncome.checked6 = true;
                    break;
                case 'checked7':
                    this.monthlyIncome.checked8 = true;
                    break;
                case 'checked9':
                    this.monthlyIncome.checked9 = true;
                    break;
                case 'checked10':
                    this.monthlyIncome.checked10 = true;
                    break;
                default:
                    break;
            }
        },

        onChangeArppu(checked) {
            this.arppu.checked1 = false;
            this.arppu.checked2 = false;
            this.arppu.checked3 = false;
            this.arppu.checked4 = false;
            this.arppu.checked5 = false;
            this.arppu.checked6 = false;
            this.arppu.checked7 = false;
            this.arppu.checked8 = false;
            this.arppu.checked9 = false;
            this.arppu.checked10 = false;
            this.arppu.checked11 = false;
            this.arppu.checked12 = false;
            switch (checked) {
                case 'checked1':
                    this.arppu.checked1 = true;
                    break;
                case 'checked2':
                    this.arppu.checked2 = true;
                    break;
                case 'checked3':
                    this.arppu.checked3 = true;
                    break;
                case 'checked4':
                    this.arppu.checked4 = true;
                    break;
                case 'checked5':
                    this.arppu.checked5 = true;
                    break;
                case 'checked6':
                    this.arppu.checked6 = true;
                    break;
                case 'checked7':
                    this.arppu.checked8 = true;
                    break;
                case 'checked9':
                    this.arppu.checked9 = true;
                    break;
                case 'checked10':
                    this.arppu.checked10 = true;
                    break;
                case 'checked11':
                    this.arppu.checked11 = true;
                    break;
                case 'checked12':
                    this.arppu.checked12 = true;
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
            this.getdailyIncome(this.dailyIncome, sevenDay);
            this.getdailyIncomeP(this.dailyIncomeP, sevenDay);
            this.getPaidRetention(this.paidRetention, sevenDay);
            this.getmonthlyIncome(this.monthlyIncome, sevenDay);
            this.getArppu(this.arppu, sevenDay);
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

        getPaidRetention(data, day){
            // 基于准备好的dom，初始化echarts实例
            var chartDom = document.getElementById('paidRetention');
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

        getdailyIncomeP(data, day){
            // 基于准备好的dom，初始化echarts实例
            var chartDom = document.getElementById('dailyIncomeP');
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
        
        getdailyIncome(data, day){
            // 基于准备好的dom，初始化echarts实例
            var chartDom = document.getElementById('dailyIncome');
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

         getmonthlyIncome(data, day){
            // 基于准备好的dom，初始化echarts实例
            var chartDom = document.getElementById('monthlyIncome');
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

        getArppu(data, day){
            // 基于准备好的dom，初始化echarts实例
            var chartDom = document.getElementById('arppu');
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