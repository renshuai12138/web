<template>
    <div style=' width:100%; height:300px'>
    <div class="title">
        <h1>联赛汇总</h1>
    </div>
    <el-divider />
    <div class = "box">
        <div class = 'test'>
            <div class="tag-box">
                <el-check-tag  class="tag"  :checked="coin.checked1" @change="onChangeCoin('checked1')" size="large">打牌人数</el-check-tag>
                <el-check-tag  class="tag"  :checked="coin.checked2" @change="onChangeCoin('checked2')" size="large">打牌付费人数</el-check-tag>
                <el-check-tag  class="tag"  :checked="coin.checked3" @change="onChangeCoin('checked3')" size="large">打牌付费次数</el-check-tag>
                <el-check-tag  class="tag"  :checked="coin.checked4" @change="onChangeCoin('checked4')" size="large">打牌付费</el-check-tag>
                <el-check-tag  class="tag"  :checked="coin.checked5" @change="onChangeCoin('checked5')" size="large">打牌人arppu</el-check-tag>
                <el-check-tag  class="tag"  :checked="coin.checked6" @change="onChangeCoin('checked6')" size="large">大牌付费参透</el-check-tag>
            </div>
            <div class="block">
                <el-date-picker
                    v-model="coin.Time"
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
        <div id = 'coin' v-show="coin.type"  style='min-width: 800px; width:100%; height:300px'></div>
        <div v-show="!coin.type" style='width:100%;'>
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
                <el-check-tag  class="tag"  :checked="dailyIncomeP.checked1" @change="onChangeIncomeP('checked1')" size="large">打牌人数</el-check-tag>
                <el-check-tag  class="tag"  :checked="dailyIncomeP.checked2" @change="onChangeIncomeP('checked2')" size="large">付费</el-check-tag>
                <el-check-tag  class="tag"  :checked="dailyIncomeP.checked3" @change="onChangeIncomeP('checked3')" size="large">付费人数</el-check-tag>
                <el-check-tag  class="tag"  :checked="dailyIncomeP.checked4" @change="onChangeIncomeP('checked4')" size="large">arppu</el-check-tag>
                <el-check-tag  class="tag"  :checked="dailyIncomeP.checked5" @change="onChangeIncomeP('checked5')" size="large">付费参透率</el-check-tag>
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
                <el-check-tag  class="tag"  :checked="piggyBank.checked1" @change="onChangePiggyBank('checked1')" size="large">翻倍场打牌人数-2K</el-check-tag>
                <el-check-tag  class="tag"  :checked="piggyBank.checked2" @change="onChangePiggyBank('checked2')" size="large">5K</el-check-tag>
                <el-check-tag  class="tag"  :checked="piggyBank.checked3" @change="onChangePiggyBank('checked3')" size="large">10K</el-check-tag>
                <el-check-tag  class="tag"  :checked="piggyBank.checked4" @change="onChangePiggyBank('checked4')" size="large">20K</el-check-tag>
                <el-check-tag  class="tag"  :checked="piggyBank.checked5" @change="onChangePiggyBank('checked5')" size="large">50K</el-check-tag>
                <el-check-tag  class="tag"  :checked="piggyBank.checked6" @change="onChangePiggyBank('checked6')" size="large">100K</el-check-tag>
                <el-check-tag  class="tag"  :checked="piggyBank.checked7" @change="onChangePiggyBank('checked7')" size="large">200K</el-check-tag>
                <el-check-tag  class="tag"  :checked="piggyBank.checked8" @change="onChangePiggyBank('checked8')" size="large">500K</el-check-tag>
                <el-check-tag  class="tag"  :checked="piggyBank.checked9" @change="onChangePiggyBank('checked9')" size="large">1M</el-check-tag>
                <el-check-tag  class="tag"  :checked="piggyBank.checked10" @change="onChangePiggyBank('checked10')" size="large">10M</el-check-tag>
                <el-check-tag  class="tag"  :checked="piggyBank.checked11" @change="onChangePiggyBank('checked11')" size="large">200M</el-check-tag>
            </div>
            <div class="block">
                <el-date-picker
                    v-model="piggyBank.Time"
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
        <div id = 'piggyBank' v-show="piggyBank.type" style='min-width: 800px; width:100%; height:300px'></div>
        <div v-show="!piggyBank.type" style='width:100%;'>
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
                <el-check-tag  class="tag"  :checked="racing.checked1" @change="onChangeRacing('checked1')" size="large">台费</el-check-tag>
                <el-check-tag  class="tag"  :checked="racing.checked2" @change="onChangeRacing('checked2')" size="large">10局以下人数</el-check-tag>
                <el-check-tag  class="tag"  :checked="racing.checked3" @change="onChangeRacing('checked3')" size="large">12-20局人数</el-check-tag>
                <el-check-tag  class="tag"  :checked="racing.checked4" @change="onChangeRacing('checked4')" size="large">20局以上人数</el-check-tag>
            </div>
            <div class="block">
                <el-date-picker
                    v-model="racing.Time"
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
        <div id = 'racing' v-show="racing.type" style='min-width: 800px; width:100%; height:300px'></div>
        <div v-show="!racing.type" style='width:100%;'>
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
                <el-check-tag  class="tag"  :checked="diamond.checked1" @change="onChangeDiamond('checked1')" size="large">2M_10以下</el-check-tag>
                <el-check-tag  class="tag"  :checked="diamond.checked2" @change="onChangeDiamond('checked2')" size="large">10-18</el-check-tag>
                <el-check-tag  class="tag"  :checked="diamond.checked3" @change="onChangeDiamond('checked3')" size="large">18-28</el-check-tag>
                <el-check-tag  class="tag"  :checked="diamond.checked4" @change="onChangeDiamond('checked4')" size="large">28-33</el-check-tag>
                <el-check-tag  class="tag"  :checked="diamond.checked5" @change="onChangeDiamond('checked5')" size="large">33-38</el-check-tag>
                <el-check-tag  class="tag"  :checked="diamond.checked6" @change="onChangeDiamond('checked6')" size="large">38-52</el-check-tag>
                <el-check-tag  class="tag"  :checked="diamond.checked7" @change="onChangeDiamond('checked7')" size="large">52以上</el-check-tag>
            </div>
            <div class="block">
                <el-date-picker
                    v-model="diamond.Time"
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
        <div id = 'diamond' v-show="diamond.type" style='min-width: 800px; width:100%; height:300px'></div>
        <div v-show="!diamond.type" style='width:100%;'>
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
                <el-check-tag  class="tag"  :checked="coinZ.checked1" @change="onChangeCoinZ('checked1')" size="large">5M_10以下</el-check-tag>
                <el-check-tag  class="tag"  :checked="coinZ.checked2" @change="onChangeCoinZ('checked2')" size="large">10-18</el-check-tag>
                <el-check-tag  class="tag"  :checked="coinZ.checked3" @change="onChangeCoinZ('checked3')" size="large">18-28</el-check-tag>
                <el-check-tag  class="tag"  :checked="coinZ.checked4" @change="onChangeCoinZ('checked4')" size="large">28-33</el-check-tag>
                <el-check-tag  class="tag"  :checked="coinZ.checked5" @change="onChangeCoinZ('checked5')" size="large">33-38</el-check-tag>
                <el-check-tag  class="tag"  :checked="coinZ.checked6" @change="onChangeCoinZ('checked6')" size="large">38-52</el-check-tag>
                <el-check-tag  class="tag"  :checked="coinZ.checked7" @change="onChangeCoinZ('checked7')" size="large">52以上</el-check-tag>
            </div>
            <div class="block">
                <el-date-picker
                    v-model="coinZ.Time"
                    type="daterange"
                    range-separator="To"
                    start-placeholder="Start date"
                    end-placeholder="End date"
                    :size="size"
                    :clearable = "false"
                />
                <el-icon :size="20" @click="switchType('6')" style=' margin-left:15px ' >
                    <RefreshLeft />
                </el-icon>
            </div>
        </div>
        <div id = 'coinZ'  v-show="coinZ.type" style='min-width: 800px; width:100%; height:300px'></div>
        <div v-show="!coinZ.type" style='width:100%;'>
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
                <el-check-tag  class="tag"  :checked="coin20.checked1" @change="onChangeCoin20('checked1')" size="large">20M_10以下</el-check-tag>
                <el-check-tag  class="tag"  :checked="coin20.checked2" @change="onChangeCoin20('checked2')" size="large">10-18</el-check-tag>
                <el-check-tag  class="tag"  :checked="coin20.checked3" @change="onChangeCoin20('checked3')" size="large">18-28</el-check-tag>
                <el-check-tag  class="tag"  :checked="coin20.checked4" @change="onChangeCoin20('checked4')" size="large">28-33</el-check-tag>
                <el-check-tag  class="tag"  :checked="coin20.checked5" @change="onChangeCoin20('checked5')" size="large">33-38</el-check-tag>
                <el-check-tag  class="tag"  :checked="coin20.checked6" @change="onChangeCoin20('checked6')" size="large">38-52</el-check-tag>
                <el-check-tag  class="tag"  :checked="coin20.checked7" @change="onChangeCoin20('checked7')" size="large">52以上</el-check-tag>
            </div>
            <div class="block">
                <el-date-picker
                    v-model="coin20.Time"
                    type="daterange"
                    range-separator="To"
                    start-placeholder="Start date"
                    end-placeholder="End date"
                    :size="size"
                    :clearable = "false"
                /><el-icon :size="20" @click="switchType('7')" style=' margin-left:15px ' >
                    <RefreshLeft />
                </el-icon>
            </div>
        </div>
        <div id = 'coin20' v-show="coin20.type" style='min-width: 800px; width:100%; height:300px'></div>
        <div v-show="!coin20.type" style='width:100%;'>
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
                <el-check-tag  class="tag"  :checked="coin50.checked1" @change="onChangeCoin50('checked1')" size="large">50M_10以下</el-check-tag>
                <el-check-tag  class="tag"  :checked="coin50.checked2" @change="onChangeCoin50('checked2')" size="large">10-18</el-check-tag>
                <el-check-tag  class="tag"  :checked="coin50.checked3" @change="onChangeCoin50('checked3')" size="large">18-28</el-check-tag>
                <el-check-tag  class="tag"  :checked="coin50.checked4" @change="onChangeCoin50('checked4')" size="large">28-33</el-check-tag>
                <el-check-tag  class="tag"  :checked="coin50.checked5" @change="onChangeCoin50('checked5')" size="large">33-38</el-check-tag>
                <el-check-tag  class="tag"  :checked="coin50.checked6" @change="onChangeCoin50('checked6')" size="large">38-52</el-check-tag>
                <el-check-tag  class="tag"  :checked="coin50.checked7" @change="onChangeCoin50('checked7')" size="large">52以上</el-check-tag>
            </div>
            <div class="block">
                <el-date-picker
                    v-model="coin50.Time"
                    type="daterange"
                    range-separator="To"
                    start-placeholder="Start date"
                    end-placeholder="End date"
                    :size="size"
                    :clearable = "false"
                />
                <el-icon :size="20" @click="switchType('8')" style=' margin-left:15px ' >
                    <RefreshLeft />
                </el-icon>
            </div>
        </div>
        <div id = 'coin50' v-show="coin50.type" style='min-width: 800px; width:100%; height:300px'></div>
        <div v-show="!coin50.type" style='width:100%;'>
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
                <el-check-tag  class="tag"  :checked="diamondZ.checked1" @change="onChangeDiamondZ('checked1')" size="large">各联赛付费率Lv0</el-check-tag>
                <el-check-tag  class="tag"  :checked="diamondZ.checked2" @change="onChangeDiamondZ('checked2')" size="large">LV1</el-check-tag>
                <el-check-tag  class="tag"  :checked="diamondZ.checked3" @change="onChangeDiamondZ('checked3')" size="large">LV2</el-check-tag>
                <el-check-tag  class="tag"  :checked="diamondZ.checked4" @change="onChangeDiamondZ('checked4')" size="large">LV3</el-check-tag>
                <el-check-tag  class="tag"  :checked="diamondZ.checked5" @change="onChangeDiamondZ('checked5')" size="large">LV4</el-check-tag>
                <el-check-tag  class="tag"  :checked="diamondZ.checked6" @change="onChangeDiamondZ('checked6')" size="large">LV5</el-check-tag>
                <el-check-tag  class="tag"  :checked="diamondZ.checked7" @change="onChangeDiamondZ('checked7')" size="large">LV6</el-check-tag>
                <el-check-tag  class="tag"  :checked="diamondZ.checked8" @change="onChangeDiamondZ('checked8')" size="large">LV7</el-check-tag>
                <el-check-tag  class="tag"  :checked="diamondZ.checked9" @change="onChangeDiamondZ('checked9')" size="large">LV8</el-check-tag>
                <el-check-tag  class="tag"  :checked="diamondZ.checked10" @change="onChangeDiamondZ('checked10')" size="large">LV9</el-check-tag>
                <el-check-tag  class="tag"  :checked="diamondZ.checked11" @change="onChangeDiamondZ('checked11')" size="large">LV10</el-check-tag>
                <el-check-tag  class="tag"  :checked="diamondZ.checked12" @change="onChangeDiamondZ('checked12')" size="large">LV11</el-check-tag>
                <el-check-tag  class="tag"  :checked="diamondZ.checked13" @change="onChangeDiamondZ('checked13')" size="large">LV12</el-check-tag>
                <el-check-tag  class="tag"  :checked="diamondZ.checked14" @change="onChangeDiamondZ('checked14')" size="large">LV13</el-check-tag>
                <el-check-tag  class="tag"  :checked="diamondZ.checked15" @change="onChangeDiamondZ('checked15')" size="large">LV14</el-check-tag>
                <el-check-tag  class="tag"  :checked="diamondZ.checked16" @change="onChangeDiamondZ('checked16')" size="large">LV15</el-check-tag>
                <el-check-tag  class="tag"  :checked="diamondZ.checked17" @change="onChangeDiamondZ('checked17')" size="large">LV16</el-check-tag>
                <el-check-tag  class="tag"  :checked="diamondZ.checked18" @change="onChangeDiamondZ('checked18')" size="large">LV17</el-check-tag>
                <el-check-tag  class="tag"  :checked="diamondZ.checked19" @change="onChangeDiamondZ('checked19')" size="large">LV18</el-check-tag>
                <el-check-tag  class="tag"  :checked="diamondZ.checked20" @change="onChangeDiamondZ('checked20')" size="large">LV19</el-check-tag>
                <el-check-tag  class="tag"  :checked="diamondZ.checked21" @change="onChangeDiamondZ('checked21')" size="large">LV20</el-check-tag>
            </div>
            <div class="block">
                <el-date-picker
                    v-model="diamondZ.Time"
                    type="daterange"
                    range-separator="To"
                    start-placeholder="Start date"
                    end-placeholder="End date"
                    :size="size"
                    :clearable = "false"
                />
                <el-icon :size="20" @click="switchType('9')" style=' margin-left:15px ' >
                    <RefreshLeft />
                </el-icon>
            </div>
        </div>
        <div id = 'diamondZ' v-show="diamondZ.type" style='min-width: 800px; width:100%; height:300px'></div>
        <div v-show="!diamondZ.type" style='width:100%;'>
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
                <el-check-tag  class="tag"  :checked="oneArmBandit.checked1" @change="onChangeMonthly('checked1')" size="large">各联赛等级人数Lv0</el-check-tag>
                <el-check-tag  class="tag"  :checked="oneArmBandit.checked2" @change="onChangeMonthly('checked2')" size="large">LV1</el-check-tag>
                <el-check-tag  class="tag"  :checked="oneArmBandit.checked3" @change="onChangeMonthly('checked3')" size="large">LV2</el-check-tag>
                <el-check-tag  class="tag"  :checked="oneArmBandit.checked4" @change="onChangeMonthly('checked4')" size="large">LV3</el-check-tag>
                <el-check-tag  class="tag"  :checked="oneArmBandit.checked5" @change="onChangeMonthly('checked5')" size="large">LV4</el-check-tag>
                <el-check-tag  class="tag"  :checked="oneArmBandit.checked6" @change="onChangeMonthly('checked6')" size="large">LV5</el-check-tag>
                <el-check-tag  class="tag"  :checked="oneArmBandit.checked7" @change="onChangeMonthly('checked7')" size="large">LV6</el-check-tag>
                <el-check-tag  class="tag"  :checked="oneArmBandit.checked8" @change="onChangeMonthly('checked8')" size="large">LV7</el-check-tag>
                <el-check-tag  class="tag"  :checked="oneArmBandit.checked9" @change="onChangeMonthly('checked9')" size="large">LV8</el-check-tag>
                <el-check-tag  class="tag"  :checked="oneArmBandit.checked10" @change="onChangeMonthly('checked10')" size="large">LV9</el-check-tag>
                <el-check-tag  class="tag"  :checked="oneArmBandit.checked11" @change="onChangeMonthly('checked11')" size="large">LV10</el-check-tag>
                <el-check-tag  class="tag"  :checked="oneArmBandit.checked12" @change="onChangeMonthly('checked12')" size="large">LV11</el-check-tag>
                <el-check-tag  class="tag"  :checked="oneArmBandit.checked13" @change="onChangeMonthly('checked13')" size="large">LV12</el-check-tag>
                <el-check-tag  class="tag"  :checked="oneArmBandit.checked14" @change="onChangeMonthly('checked14')" size="large">LV13</el-check-tag>
                <el-check-tag  class="tag"  :checked="oneArmBandit.checked15" @change="onChangeMonthly('checked15')" size="large">LV14</el-check-tag>
                <el-check-tag  class="tag"  :checked="oneArmBandit.checked16" @change="onChangeMonthly('checked16')" size="large">LV15</el-check-tag>
                <el-check-tag  class="tag"  :checked="oneArmBandit.checked17" @change="onChangeMonthly('checked17')" size="large">LV16</el-check-tag>
                <el-check-tag  class="tag"  :checked="oneArmBandit.checked18" @change="onChangeMonthly('checked18')" size="large">LV17</el-check-tag>
                <el-check-tag  class="tag"  :checked="oneArmBandit.checked19" @change="onChangeMonthly('checked19')" size="large">LV18</el-check-tag>
                <el-check-tag  class="tag"  :checked="oneArmBandit.checked20" @change="onChangeMonthly('checked20')" size="large">LV19</el-check-tag>
                <el-check-tag  class="tag"  :checked="oneArmBandit.checked21" @change="onChangeMonthly('checked21')" size="large">LV20</el-check-tag>
            </div>
            <div class="block">
                <el-date-picker
                    v-model="oneArmBandit.Time"
                    type="daterange"
                    range-separator="To"
                    start-placeholder="Start date"
                    end-placeholder="End date"
                    :size="size"
                    :clearable = "false"
                />
                <el-icon :size="20" @click="switchType('10')" style=' margin-left:15px ' >
                    <RefreshLeft />
                </el-icon>
            </div>
        </div>
        <div id = 'oneArmBandit'  v-show="oneArmBandit.type" style='min-width: 800px; width:100%; height:300px'></div>
        <div v-show="!oneArmBandit.type" style='width:100%;'>
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
                <el-check-tag  class="tag"  :checked="arppu.checked1" @change="onChangeArppu('checked1')" size="large">各联赛arppulLv0</el-check-tag>
                <el-check-tag  class="tag"  :checked="arppu.checked2" @change="onChangeArppu('checked2')" size="large">LV1</el-check-tag>
                <el-check-tag  class="tag"  :checked="arppu.checked3" @change="onChangeArppu('checked3')" size="large">LV2</el-check-tag>
                <el-check-tag  class="tag"  :checked="arppu.checked4" @change="onChangeArppu('checked4')" size="large">LV3</el-check-tag>
                <el-check-tag  class="tag"  :checked="arppu.checked5" @change="onChangeArppu('checked5')" size="large">LV4</el-check-tag>
                <el-check-tag  class="tag"  :checked="arppu.checked6" @change="onChangeArppu('checked6')" size="large">LV5</el-check-tag>
                <el-check-tag  class="tag"  :checked="arppu.checked7" @change="onChangeArppu('checked7')" size="large">LV6</el-check-tag>
                <el-check-tag  class="tag"  :checked="arppu.checked8" @change="onChangeArppu('checked8')" size="large">LV7</el-check-tag>
                <el-check-tag  class="tag"  :checked="arppu.checked9" @change="onChangeArppu('checked9')" size="large">LV8</el-check-tag>
                <el-check-tag  class="tag"  :checked="arppu.checked10" @change="onChangeArppu('checked10')" size="large">LV9</el-check-tag>
                <el-check-tag  class="tag"  :checked="arppu.checked11" @change="onChangeArppu('checked11')" size="large">LV10</el-check-tag>
                <el-check-tag  class="tag"  :checked="arppu.checked12" @change="onChangeArppu('checked12')" size="large">LV11</el-check-tag>
                <el-check-tag  class="tag"  :checked="arppu.checked13" @change="onChangeArppu('checked13')" size="large">LV12</el-check-tag>
                <el-check-tag  class="tag"  :checked="arppu.checked14" @change="onChangeArppu('checked14')" size="large">LV13</el-check-tag>
                <el-check-tag  class="tag"  :checked="arppu.checked15" @change="onChangeArppu('checked15')" size="large">LV14</el-check-tag>
                <el-check-tag  class="tag"  :checked="arppu.checked16" @change="onChangeArppu('checked16')" size="large">LV15</el-check-tag>
                <el-check-tag  class="tag"  :checked="arppu.checked17" @change="onChangeArppu('checked17')" size="large">LV16</el-check-tag>
                <el-check-tag  class="tag"  :checked="arppu.checked18" @change="onChangeArppu('checked18')" size="large">LV17</el-check-tag>
                <el-check-tag  class="tag"  :checked="arppu.checked19" @change="onChangeArppu('checked19')" size="large">LV18</el-check-tag>
                <el-check-tag  class="tag"  :checked="arppu.checked20" @change="onChangeArppu('checked20')" size="large">LV19</el-check-tag>
                <el-check-tag  class="tag"  :checked="arppu.checked21" @change="onChangeArppu('checked21')" size="large">LV20</el-check-tag>
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
                <el-icon :size="20" @click="switchType('11')" style=' margin-left:15px ' >
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
            activeName: "用户活跃",
            diamond: {
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
                data:[10, 30, 24, 218, 135, 147, 260],
            },
            piggyBank: {
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
            coin: {
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
            diamondZ: {
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
                checked19: false,
                checked20: false,
                checked21: false,
                data:[10, 30, 24, 218, 135, 147, 260],
            },
            coinZ: {
                type: true,
                Time:'',      
                checked1: true,
                checked2: false,
                checked3: false,
                checked4: false,
                checked5: false,
                checked6: false,
                checked7: false,
                data:[10, 30, 24, 218, 135, 147, 260],
            },
            coin20: {
                type: true,
                Time:'',      
                checked1: true,
                checked2: false,
                checked3: false,
                checked4: false,
                checked5: false,
                checked6: false,
                checked7: false,
                data:[10, 30, 24, 218, 135, 147, 260],
            },
            coin50: {
                type: true,
                Time:'',      
                checked1: true,
                checked2: false,
                checked3: false,
                checked4: false,
                checked5: false,
                checked6: false,
                checked7: false,
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
                checked7: false,
                checked8: false,
                checked9: false,
                checked10: false,
                data:[10, 30, 24, 218, 135, 147, 260],
            },
            racing: {
                type: true,
                Time:'',      
                checked1: true,
                checked2: false,
                checked3: false,
                checked4: false,
                data:[10, 30, 24, 218, 135, 147, 260],
            },
            oneArmBandit: {
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
                checked19: false,
                checked20: false,
                checked21: false,
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
                checked13: false,
                checked14: false,
                checked15: false,
                checked16: false,
                checked17: false,
                checked18: false,
                checked19: false,
                checked20: false,
                checked21: false,
                data:[10, 30, 24, 218, 135, 147, 260],               
            },
        }
    },
    watch: {
        'coin.Time': {
            handler() {
                var {stimedata,etimedata,dayLength} =  this.customDate(this.coin.Time);
                var customDay = this.customFormatDate(stimedata,etimedata,dayLength);
                this.getCoin(this.coin, customDay);
            }
        },
        'diamond.Time': {
            handler() {
                var {stimedata,etimedata,dayLength} =  this.customDate(this.diamond.Time);
                var customDay = this.customFormatDate(stimedata,etimedata,dayLength);
                this.getDiamond(this.diamond, customDay);
            }
        },
        'coinZ.Time': {
            handler() {
                var {stimedata,etimedata,dayLength} =  this.customDate(this.coinZ.Time);
                var customDay = this.customFormatDate(stimedata,etimedata,dayLength);
                this.getCoinZ(this.coinZ, customDay);
            }
        },
        'coin20.Time': {
            handler() {
                var {stimedata,etimedata,dayLength} =  this.customDate(this.coin20.Time);
                var customDay = this.customFormatDate(stimedata,etimedata,dayLength);
                this.getCoin20(this.coin20, customDay);
            }
        },
        'coin50.Time': {
            handler() {
                var {stimedata,etimedata,dayLength} =  this.customDate(this.coin50.Time);
                var customDay = this.customFormatDate(stimedata,etimedata,dayLength);
                this.getCoin50(this.coin50, customDay);
            }
        },
        'diamondZ.Time': {
            handler() {
                var {stimedata,etimedata,dayLength} =  this.customDate(this.diamondZ.Time);
                var customDay = this.customFormatDate(stimedata,etimedata,dayLength);
                this.getDiamondZ(this.diamondZ, customDay);
            }
        },

        'dailyIncomeP.Time': {
            handler() {
                var {stimedata,etimedata,dayLength} =  this.customDate(this.dailyIncomeP.Time);
                var customDay = this.customFormatDate(stimedata,etimedata,dayLength);
                this.getdailyIncomeP(this.dailyIncome, customDay);
            }
        },
        'oneArmBandit.Time': {
            handler() {
                var {stimedata,etimedata,dayLength} =  this.customDate(this.oneArmBandit.Time);
                var customDay = this.customFormatDate(stimedata,etimedata,dayLength);
                this.getoneArmBandit(this.oneArmBandit, customDay);
            }
        },
        'arppu.Time': {
            handler() {
                var {stimedata,etimedata,dayLength} =  this.customDate(this.arppu.Time);
                var customDay = this.customFormatDate(stimedata,etimedata,dayLength);
                this.getArppu(this.arppu, customDay);
            }
        },
        'racing.Time': {
            handler() {
                var {stimedata,etimedata,dayLength} =  this.customDate(this.racing.Time);
                var customDay = this.customFormatDate(stimedata,etimedata,dayLength);
                this.getRacing(this.racing, customDay);
            }
        },
        'piggyBank.Time': {
            handler() {
                var {stimedata,etimedata,dayLength} =  this.customDate(this.piggyBank.Time);
                var customDay = this.customFormatDate(stimedata,etimedata,dayLength);
                this.getPiggyBank(this.piggyBank, customDay);
            }
        },
    },
    methods:{
        switchType(type) {
             switch (type) {
                case '1':
                    this.coin.type = !this.coin.type
                    break;
                case '2':
                    this.dailyIncomeP.type = !this.dailyIncomeP.type
                    break;
                case '3':
                    this.piggyBank.type = !this.piggyBank.type
                    break;
                case '4':
                    this.racing.type = !this.racing.type
                    break;
                case '5':
                    this.diamond.type = !this.diamond.type
                    break;
                case '6':
                    this.coinZ.type = !this.coinZ.type
                    break;
                case '7':
                    this.coin20.type = !this.coin20.type
                    break;
                case '8':
                    this.coin50.type = !this.coin50.type
                    break;
                case '9':
                    this.diamondZ.type = !this.diamondZ.type
                    break;
                case '10':
                    this.oneArmBandit.type = !this.oneArmBandit.type
                    break;
                case '11':
                    this.arppu.type = !this.arppu.type
                    break;
                default:
                    break;
            }
        },
        onChangePiggyBank(checked) {
            this.piggyBank.checked1 = false;
            this.piggyBank.checked2 = false;
            this.piggyBank.checked3 = false;
            this.piggyBank.checked4 = false;
            this.piggyBank.checked5 = false;
            this.piggyBank.checked6 = false;
            this.piggyBank.checked7 = false;
            this.piggyBank.checked8 = false;
            this.piggyBank.checked9 = false;
            this.piggyBank.checked10 = false;
            this.piggyBank.checked11 = false;
            this.piggyBank.checked12 = false;
            switch (checked) {
                case 'checked1':
                    this.piggyBank.checked1 = true;
                    break;
                case 'checked2':
                    this.piggyBank.checked2 = true;
                    break;
                case 'checked3':
                    this.piggyBank.checked3 = true;
                    break;
                case 'checked4':
                    this.piggyBank.checked4 = true;
                    break;
                case 'checked5':
                    this.piggyBank.checked5 = true;
                    break;
                case 'checked6':
                    this.piggyBank.checked6 = true;
                    break;
                case 'checked7':
                    this.piggyBank.checked7 = true;
                    break;
                case 'checked8':
                    this.piggyBank.checked8 = true;
                    break;
                case 'checked9':
                    this.piggyBank.checked9 = true;
                    break;
                case 'checked10':
                    this.piggyBank.checked10 = true;
                    break;
                case 'checked11':
                    this.piggyBank.checked11 = true;
                    break;
                case 'checked12':
                    this.piggyBank.checked12 = true;
                    break;
                default:
                    break;
            }
        },
        
        onChangeDiamond(checked) {
            this.diamond.checked1 = false;
            this.diamond.checked2 = false;
            this.diamond.checked3 = false;
            this.diamond.checked4 = false;
            this.diamond.checked5 = false;
            this.diamond.checked6 = false;
            this.diamond.checked7 = false;
            this.diamond.checked8 = false;
            switch (checked) {
                case 'checked1':
                    this.diamond.checked1 = true;
                    break;
                case 'checked2':
                    this.diamond.checked2 = true;
                    break;
                case 'checked3':
                    this.diamond.checked3 = true;
                    break;
                case 'checked4':
                    this.diamond.checked4 = true;
                    break;
                case 'checked5':
                    this.diamond.checked5 = true;
                    break;
                case 'checked6':
                    this.diamond.checked6 = true;
                    break;
                case 'checked7':
                    this.diamond.checked7 = true;
                    break;
                case 'checked8':
                    this.diamond.checked8 = true;
                    break;
                default:
                    break;
            }
        },
        onChangeCoin(checked) {
            this.coin.checked1 = false;
            this.coin.checked2 = false;
            this.coin.checked3 = false;
            this.coin.checked4 = false;
            this.coin.checked5 = false;
            this.coin.checked6 = false;
            switch (checked) {
                case 'checked1':
                    this.coin.checked1 = true;
                    break;
                case 'checked2':
                    this.coin.checked2 = true;
                    break;
                case 'checked3':
                    this.coin.checked3 = true;
                    break;
                case 'checked4':
                    this.coin.checked4 = true;
                    break;
                case 'checked5':
                    this.coin.checked5 = true;
                    break;
                case 'checked6':
                    this.coin.checked6 = true;
                    break;
                default:
                    break;
            }
        },
        onChangeRacing(checked) {
            this.racing.checked1 = false;
            this.racing.checked2 = false;
            this.racing.checked3 = false;
            this.racing.checked4 = false;
            switch (checked) {
                case 'checked1':
                    this.racing.checked1 = true;
                    break;
                case 'checked2':
                    this.racing.checked2 = true;
                    break;
                case 'checked3':
                    this.racing.checked3 = true;
                    break;
                case 'checked4':
                    this.racing.checked4 = true;
                    break;
                default:
                    break;
            }
        },
        onChangeDiamondZ(checked) {
            this.diamondZ.checked1 = false;
            this.diamondZ.checked2 = false;
            this.diamondZ.checked3 = false;
            this.diamondZ.checked4 = false;
            this.diamondZ.checked5 = false;
            this.diamondZ.checked6 = false;
            this.diamondZ.checked7 = false;
            this.diamondZ.checked8 = false;
            this.diamondZ.checked9 = false;
            this.diamondZ.checked10 = false;
            this.diamondZ.checked11 = false;
            this.diamondZ.checked12 = false;
            this.diamondZ.checked13 = false;
            this.diamondZ.checked14 = false;
            this.diamondZ.checked15 = false;
            this.diamondZ.checked16 = false;
            this.diamondZ.checked17 = false;
            this.diamondZ.checked18 = false;
            this.diamondZ.checked19 = false;
            this.diamondZ.checked20 = false;
            this.diamondZ.checked21 = false;
            switch (checked) {
                case 'checked1':
                    this.diamondZ.checked1 = true;
                    break;
                case 'checked2':
                    this.diamondZ.checked2 = true;
                    break;
                case 'checked3':
                    this.diamondZ.checked3 = true;
                    break;
                case 'checked4':
                    this.diamondZ.checked4 = true;
                    break;
                case 'checked5':
                    this.diamondZ.checked5 = true;
                    break;
                case 'checked6':
                    this.diamondZ.checked6 = true;
                    break;
                case 'checked7':
                    this.diamondZ.checked7 = true;
                    break;
                case 'checked8':
                    this.diamondZ.checked8 = true;
                    break;
                case 'checked9':
                    this.diamondZ.checked9 = true;
                    break;
                case 'checked10':
                    this.diamondZ.checked10 = true;
                    break;
                case 'checked11':
                    this.diamondZ.checked11 = true;
                    break;
                case 'checked12':
                    this.diamondZ.checked12 = true;
                    break;
                case 'checked13':
                    this.diamondZ.checked13 = true;
                    break;
                case 'checked14':
                    this.diamondZ.checked14 = true;
                    break;
                case 'checked15':
                    this.diamondZ.checked15 = true;
                    break;
                case 'checked16':
                    this.diamondZ.checked16 = true;
                    break;
                case 'checked17':
                    this.diamondZ.checked17 = true;
                    break;
                case 'checked18':
                    this.diamondZ.checked18 = true;
                    break;
                case 'checked19':
                    this.diamondZ.checked19 = true;
                    break;
                case 'checked20':
                    this.diamondZ.checked20 = true;
                    break;
                case 'checked21':
                    this.diamondZ.checked21 = true;
                    break;
                default:
                    break;
            }
        },
        onChangeCoinZ(checked) {
            this.coinZ.checked1 = false;
            this.coinZ.checked2 = false;
            this.coinZ.checked3 = false;
            this.coinZ.checked4 = false;
            this.coinZ.checked5 = false;
            this.coinZ.checked6 = false;
            this.coinZ.checked7 = false;
            switch (checked) {
                case 'checked1':
                    this.coinZ.checked1 = true;
                    break;
                case 'checked2':
                    this.coinZ.checked2 = true;
                    break;
                case 'checked3':
                    this.coinZ.checked3 = true;
                    break;
                case 'checked4':
                    this.coinZ.checked4 = true;
                    break;
                case 'checked5':
                    this.coinZ.checked5 = true;
                    break;
                case 'checked6':
                    this.coinZ.checked6 = true;
                    break;
                case 'checked7':
                    this.coinZ.checked7 = true;
                    break;
                default:
                    break;
            }
        },
        onChangeCoin20(checked) {
            this.coin20.checked1 = false;
            this.coin20.checked2 = false;
            this.coin20.checked3 = false;
            this.coin20.checked4 = false;
            this.coin20.checked5 = false;
            this.coin20.checked6 = false;
            this.coin20.checked7 = false;
            switch (checked) {
                case 'checked1':
                    this.coin20.checked1 = true;
                    break;
                case 'checked2':
                    this.coin20.checked2 = true;
                    break;
                case 'checked3':
                    this.coin20.checked3 = true;
                    break;
                case 'checked4':
                    this.coin20.checked4 = true;
                    break;
                case 'checked5':
                    this.coin20.checked5 = true;
                    break;
                case 'checked6':
                    this.coin20.checked6 = true;
                    break;
                case 'checked7':
                    this.coin20.checked7 = true;
                    break;
                default:
                    break;
            }
        },
        onChangeCoin50(checked) {
            this.coin50.checked1 = false;
            this.coin50.checked2 = false;
            this.coin50.checked3 = false;
            this.coin50.checked4 = false;
            this.coin50.checked5 = false;
            this.coin50.checked6 = false;
            this.coin50.checked7 = false;
            switch (checked) {
                case 'checked1':
                    this.coin50.checked1 = true;
                    break;
                case 'checked2':
                    this.coin50.checked2 = true;
                    break;
                case 'checked3':
                    this.coin50.checked3 = true;
                    break;
                case 'checked4':
                    this.coin50.checked4 = true;
                    break;
                case 'checked5':
                    this.coin50.checked5 = true;
                    break;
                case 'checked6':
                    this.coin50.checked6 = true;
                    break;
                case 'checked7':
                    this.coin50.checked7 = true;
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
            this.dailyIncomeP.checked7 = false;
            this.dailyIncomeP.checked8 = false;
            this.dailyIncomeP.checked9 = false;
            this.dailyIncomeP.checked10 = false;
            this.dailyIncomeP.checked11 = false;
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
                case 'checked7':
                    this.dailyIncomeP.checked8 = true;
                    break;
                case 'checked9':
                    this.dailyIncomeP.checked9 = true;
                    break;
                case 'checked10':
                    this.dailyIncomeP.checked10 = true;
                    break;
                default:
                    break;
            }
        },
        onChangeMonthly(checked) {
            this.oneArmBandit.checked1 = false;
            this.oneArmBandit.checked2 = false;
            this.oneArmBandit.checked3 = false;
            this.oneArmBandit.checked4 = false;
            this.oneArmBandit.checked5 = false;
            this.oneArmBandit.checked6 = false;
            this.oneArmBandit.checked7 = false;
            this.oneArmBandit.checked8 = false;
            this.oneArmBandit.checked9 = false;
            this.oneArmBandit.checked10 = false;
            this.oneArmBandit.checked11 = false;
            this.oneArmBandit.checked12 = false;
            this.oneArmBandit.checked13 = false;
            this.oneArmBandit.checked14 = false;
            this.oneArmBandit.checked15 = false;
            this.oneArmBandit.checked16 = false;
            this.oneArmBandit.checked17 = false;
            this.oneArmBandit.checked18 = false;
            this.oneArmBandit.checked19 = false;
            this.oneArmBandit.checked20 = false;
            this.oneArmBandit.checked21 = false;
            switch (checked) {
                case 'checked1':
                    this.oneArmBandit.checked1 = true;
                    break;
                case 'checked2':
                    this.oneArmBandit.checked2 = true;
                    break;
                case 'checked3':
                    this.oneArmBandit.checked3 = true;
                    break;
                case 'checked4':
                    this.oneArmBandit.checked4 = true;
                    break;
                case 'checked5':
                    this.oneArmBandit.checked5 = true;
                    break;
                case 'checked6':
                    this.oneArmBandit.checked6 = true;
                    break;
                case 'checked7':
                    this.oneArmBandit.checked7 = true;
                    break;
                case 'checked8':
                    this.oneArmBandit.checked8 = true;
                    break;
                case 'checked9':
                    this.oneArmBandit.checked9 = true;
                    break;
                case 'checked10':
                    this.oneArmBandit.checked10 = true;
                    break;
                case 'checked11':
                    this.oneArmBandit.checked11 = true;
                    break;
                case 'checked12':
                    this.oneArmBandit.checked12 = true;
                    break;
                case 'checked13':
                    this.oneArmBandit.checked13 = true;
                    break;
                case 'checked14':
                    this.oneArmBandit.checked14 = true;
                    break;
                case 'checked15':
                    this.oneArmBandit.checked15 = true;
                    break;
                case 'checked16':
                    this.oneArmBandit.checked16 = true;
                    break;
                case 'checked17':
                    this.oneArmBandit.checked17 = true;
                    break;
                case 'checked18':
                    this.oneArmBandit.checked18 = true;
                    break;
                case 'checked19':
                    this.oneArmBandit.checked19 = true;
                    break;
                case 'checked20':
                    this.oneArmBandit.checked20 = true;
                    break;
                case 'checked21':
                    this.oneArmBandit.checked21 = true;
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
            this.arppu.checked13 = false;
            this.arppu.checked14 = false;
            this.arppu.checked15 = false;
            this.arppu.checked16 = false;
            this.arppu.checked17 = false;
            this.arppu.checked18 = false;
            this.arppu.checked19 = false;
            this.arppu.checked20 = false;
            this.arppu.checked21 = false;
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
                    this.arppu.checked7 = true;
                    break;
                case 'checked8':
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
                case 'checked13':
                    this.arppu.checked13 = true;
                    break;
                case 'checked14':
                    this.arppu.checked14 = true;
                    break;
                case 'checked15':
                    this.arppu.checked15 = true;
                    break;
                case 'checked16':
                    this.arppu.checked16 = true;
                    break;
                case 'checked17':
                    this.arppu.checked17 = true;
                    break;
                case 'checked18':
                    this.arppu.checked18 = true;
                    break;
                case 'checked19':
                    this.arppu.checked19 = true;
                    break;
                case 'checked20':
                    this.arppu.checked20 = true;
                    break;
                case 'checked21':
                    this.arppu.checked21 = true;
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

            this.getCoin(this.coin, sevenDay);
            this.getDiamond(this.diamond, sevenDay);
            this.getCoinZ(this.coinZ, sevenDay);
            this.getCoin20(this.coin20, sevenDay);
            this.getCoin50(this.coin50, sevenDay);
            this.getDiamondZ(this.diamondZ, sevenDay);
            this.getPiggyBank(this.piggyBank, sevenDay);
            this.getdailyIncomeP(this.dailyIncomeP, sevenDay);
            this.getoneArmBandit(this.oneArmBandit, sevenDay);
            this.getArppu(this.arppu, sevenDay);
            this.getRacing(this.racing, sevenDay);
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
        getPiggyBank(data, day){
            // 基于准备好的dom，初始化echarts实例
            var chartDom = document.getElementById('piggyBank');
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
                    type: 'line'
                    },
                ]
            };
            option && myChart.setOption(option);
        },

        getRacing(data, day){
            // 基于准备好的dom，初始化echarts实例
            var chartDom = document.getElementById('racing');
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
                        name: 'ss',
                        data: data.data,
                        type: 'line'
                    },
                    {
                        name: 'ssass',
                        data:[150, 230, 224, 218, 135, 147, 260],
                        type: 'line'
                    },
                ]
            };
            option && myChart.setOption(option);
        },

        getCoin(data, day){
            // 基于准备好的dom，初始化echarts实例
            var chartDom = document.getElementById('coin');
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
                    type: 'line'
                    },
                ]
            };
            option && myChart.setOption(option);
        },
        getCoinZ(data, day){
            // 基于准备好的dom，初始化echarts实例
            var chartDom = document.getElementById('coinZ');
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
                        name: '0123',
                        data: data.data,
                        type: 'line'
                    },
                    {
                        name: '03',
                        data:[150, 230, 224, 28, 135, 17, 60],
                        type: 'line'
                    },
                ]
            };
            option && myChart.setOption(option);
        },
        getCoin20(data, day){
            // 基于准备好的dom，初始化echarts实例
            var chartDom = document.getElementById('coin20');
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
                    type: 'line'
                    },
                ]
            };
            option && myChart.setOption(option);
        },
        getCoin50(data, day){
            // 基于准备好的dom，初始化echarts实例
            var chartDom = document.getElementById('coin50');
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
                    type: 'line'
                    },
                ]
            };
            option && myChart.setOption(option);
        },
        

        getDiamond(data, day){
            // 基于准备好的dom，初始化echarts实例
            var chartDom = document.getElementById('diamond');
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
                    type: 'line'
                    },
                ]
            };
            option && myChart.setOption(option);
        },
        getDiamondZ(data, day){
            // 基于准备好的dom，初始化echarts实例
            var chartDom = document.getElementById('diamondZ');
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
                    type: 'line'
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
                    type: 'line'
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
                    type: 'line'
                    },
                ]
            };
            option && myChart.setOption(option);
        },

         getoneArmBandit(data, day){
            // 基于准备好的dom，初始化echarts实例
            var chartDom = document.getElementById('oneArmBandit');
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
                    type: 'line'
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
                    type: 'line'
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