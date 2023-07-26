<template>
    <div style=' width:100% '>
        <div class="title">
            <h1>投放统计</h1>
            <div class="btn-boxs">
                <el-button class="btn" @click="switchviews(false)">投放记录</el-button>
                <el-button class="btn" @click="switchviews(true)">新增投放</el-button>
            </div>
        </div>
        <el-divider />
        <div class="from" v-show="switchview" >
           <el-form
                ref="form"
                :model="ruleForm"
                :rules="rules"
                label-width="200px"
                class="demo-ruleForm"
                :size="formSize"
                status-icon
            >
            <el-form-item label="地区" prop="area">
                <el-select v-model="ruleForm.area">
                    <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                    :disabled="item.disabled"
                    />
                </el-select>
            </el-form-item>
            <el-form-item label="平台" prop="platform">
                <el-radio-group v-model="ruleForm.platform" class="ml-4">
                    <el-radio label="iOS" size="large">iOS</el-radio>
                    <el-radio label="Android" size="large">Android</el-radio>
                </el-radio-group>
            </el-form-item>
            <el-form-item label="渠道" prop="channel">
                <el-radio-group v-model="ruleForm.channel" class="ml-4">
                    <el-radio label="Facebook" size="large">Facebook</el-radio>
                    <el-radio label="Google" size="large">Google</el-radio>
                    <el-radio label="Unity" size="large">Unity</el-radio>
                    <el-radio label="Applovin" size="large">Applovin</el-radio>
                </el-radio-group>
            </el-form-item>
            <el-form-item label="投放方式" prop="deliveryType">
                <el-radio-group v-model="ruleForm.deliveryType" class="ml-4">
                    <el-radio label="Install" size="large">Install</el-radio>
                    <el-radio label="付费" size="large">付费</el-radio>
                    <el-radio label="AEO" size="large">AEO</el-radio>
                    <el-radio label="VO" size="large">VO</el-radio>
                    <el-radio label="MAIA" size="large">MAIA</el-radio>
                    <el-radio label="recall" size="large">recall</el-radio>
                </el-radio-group>
            </el-form-item>
            <el-form-item label="投放日期" prop="deliveryDate">
                <el-date-picker
                    v-model="ruleForm.deliveryDate"
                    type="date"
                    placeholder="Pick a day"
                    :size="size"
                />
            </el-form-item>
            <el-form-item label="广告名称" prop="title">
                <el-input v-model="ruleForm.title" placeholder="Please input" clearable />
            </el-form-item>
            <el-form-item label="花费（美元）" prop="cost">
                <el-input v-model="ruleForm.cost" placeholder="Please input" clearable />
            </el-form-item>
            <el-form-item label="汇率（USD-TRY）" prop="rate">
                <el-input v-model="ruleForm.rate" placeholder="Please input" clearable />
            </el-form-item>
            <el-form-item label="展示" prop="display">
                <el-input v-model="ruleForm.display" placeholder="Please input" clearable />
            </el-form-item>
            <el-form-item label="点击" prop="click">
                <el-input v-model="ruleForm.click" placeholder="Please input" clearable />
            </el-form-item>
            <el-form-item label="安装" prop="install">
                <el-input v-model="ruleForm.install" placeholder="Please input" clearable />
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submitForm()">
                    提交
                </el-button>
                <el-button @click="submitForms()">清除</el-button>
            </el-form-item>
            </el-form>
        </div>
        <div v-show="!switchview">
           <div class = "tableBox">
                <div class = 'tableTest'>
                    <div class="tag-box">
                        <el-check-tag class="tag" :checked="table.checked1" @change="retainedChange('checked1')" size="large">投放记录</el-check-tag>
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
                        <el-table-column prop="area" label="地区"  />
                        <el-table-column prop="platform" label="平台">
                           <!-- <template #default="scope">
                                <span v-show="scope.row.platform==1">IOS</span>
                                <span v-show="scope.row.platform==2">Android</span>
                           </template> -->
                        </el-table-column>
                        <el-table-column prop="channel" label="渠道">
                        </el-table-column>
                        <el-table-column prop="deliveryType" label="投放方式">
                        </el-table-column>
                        <el-table-column prop="deliveryDate" label="投放日期"  />
                        <el-table-column prop="title" label="广告名称"  />
                        <el-table-column prop="cost" label="花费" />
                        <el-table-column prop="rate" label="汇率"/>
                        <el-table-column prop="display" label="展示"  />
                        <el-table-column prop="click" label="点击"  />
                         <el-table-column prop="install" label="安装"  />
                    </el-table>
                </div>
                <!-- <div class="demo-pagination-block">
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
                </div> -->
            </div>
        </div>
    </div>
</template>

<script>
import {updateAdvertiseApi, selectAdvertiseApi} from '../../api/common'

export default {
    data(){
        return {
            tableData: [
            ],
            table: {
                checked1: true,
                tableTime:'',
            },
            switchview: true,
            ruleForm: {
                area:'',
                platform:'',
                channel:'',
                deliveryType:'',
                deliveryDate:'',
                title:'',
                cost:'',
                rate:'',
                display:'',
                click:'',
                install:'',
            },
            rules:{
                area: [ {required: true,trigger: 'blur', message: "不能为空" },
                ],
                platform: [ {required: true,trigger: 'blur', message: "不能为空" }
                ],
                channel: [ {required: true,trigger: 'blur', message: "不能为空" }
                ],
                deliveryType: [ {required: true,trigger: 'blur', message: "不能为空" },
                ],
                deliveryDate: [ {required: true,trigger: 'blur', message: "不能为空" }
                ],
                title: [ {required: true,trigger: 'blur', message: "不能为空" }
                ],
                cost: [ {required: true,trigger: 'blur', message: "不能为空" }
                ],
            },
            options: [
                {
                    value: 'TR',
                    label: 'TR',
                },
                {
                    value: 'US',
                    label: 'US',
                },
                {
                    value: 'JP',
                    label: 'JP',
                },
            ]
            
        }
    },
    watch: {
        'table.tableTime': {
            handler() {
                var {stimedata,etimedata,dayLength} =  this.customDate(this.table.tableTime);
                this.customFormatDate(stimedata,etimedata,dayLength);
                this.getList(this.startDate, this.endDatel);
            }
        },
        "ruleForm.deliveryDate": {
            handler() {
                this.getDataTime(this.ruleForm.deliveryDate)
                // var stimedata = this.ruleForm.deliveryDate.getTime();
                // console.log(this.ruleForm.deliveryDate)
                // var stimedata = this.ruleForm.deliveryDate.getTime();
                // var tmpDate = new Date(stimedata);
                // var day = tmpDate.getDate();
                // var month = tmpDate.getMonth() + 1;
                // var year = tmpDate.getFullYear();
                // this.ruleForm.deliveryDate = (year + '-' + month + '-' + day)
            }
        }
    },

    mounted(){
        this.getTime()
    },
    methods: {
        getDataTime(stimedata) {
            var tmpDate = new Date(stimedata);
            var day = tmpDate.getDate();
            var month = tmpDate.getMonth() + 1;
            var year = tmpDate.getFullYear();
            this.ruleForm.deliveryDate = (year + '-' + month + '-' + day)
        },
        submitForms () {
            this.ruleForm.time = ''
            this.ruleForm.area = ''
            this.ruleForm.platform = '',
            this.ruleForm.channel = ''
            this.ruleForm.deliveryType = ''
            this.ruleForm.deliveryDate = ''
            this.ruleForm.title = ''
            this.ruleForm.cost = ''
            this.ruleForm.rate = ''
            this.ruleForm.display = ''
            this.ruleForm.click = ''
            this.ruleForm.install = ''
        },
        switchviews (type) {
            this.switchview = type
            if (type == false){
                this.getList(this.startDate, this.endDatel)
            }
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
            console.log(customDay.length);
            var l = customDay.length - 1
            this.startDate = customDay[0];
            this.endDatel = customDay[l];
        },
        customDate(time) {
            var stime = time[0];
            var etime = time[1];
            var stimedata = stime.getTime();
            var etimedata = etime.getTime() + 24 * 60 * 60 * 1000;
            var dayLength = (etimedata-stimedata)/(24 * 60 * 60 * 1000);
            return {stimedata,etimedata,dayLength}
        },
        getTime() {
            var sortedDateList = [];
            var sevenDay = [];
            var nowTime = new Date(new Date().setHours(0, 0, 0, 0) + 24 * 60 * 60 * 1000 - 1);
            sortedDateList.push(nowTime);
            sortedDateList.forEach(function(item) {
                var tmpDate = new Date(item);
                var day = tmpDate.getDate();
                var month = tmpDate.getMonth() + 1;
                var year = tmpDate.getFullYear();
                sevenDay.push (year + '-' + month + '-' + day)
            });
            this.startDate = sevenDay[0];
            this.endDatel = sevenDay[0];
            this.getList(this.startDate, this.endDatel)
        },
        getList(startDate, endDatel) {
            this.tableData = [];
            selectAdvertiseApi(startDate, endDatel).then((res) => {
                console.log(res)
                res.data.forEach(arr => {
                    let from = {
                        time:'',
                        area:'',
                        platform:'',
                        channel:'',
                        deliveryType:'',
                        deliveryDate:'',
                        title:'',
                        cost:'',
                        rate:'',
                        display:'',
                        click:'',
                        install:'',
                    }
                    from.time = arr[0],
                    from.area = arr[1],
                    from.platform = arr[2],
                    from.channel = arr[3],
                    from.deliveryType = arr[4],
                    from.deliveryDate = arr[5],
                    from.title = arr[6],
                    from.cost = arr[7],
                    from.rate = arr[8],
                    from.display = arr[9],
                    from.click = arr[10],
                    from.install = arr[11],
                    this.tableData.push(from)
                });
            })
        },
        submitForm() {
           this.$confirm('确认赠送', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {               
                this.$refs.form.validate((valid) => {
                    if (valid) {
                        console.log("成功");
                        updateAdvertiseApi(this.ruleForm).then((res) => {
                            if(res.ret == 0){
                                this.$alert('处理成功',  {
                                    confirmButtonText: '确定',
                                });
                            }else {
                                this.$alert( res.msg,  {
                                    confirmButtonText: '确定',
                                });
                            }
                        })
                    } else {
                        console.log("失败");
                    }
                });
            }).catch(() => {         
            });
        } 
    }
}
</script>

<style scoped>
.title {
    justify-content: space-between;
    margin-left: 20px;
    margin-top: 20px;
    margin-bottom: -20px;
    display: flex;
    flex-direction: row;
}
.from {
    display: flex;
}
.tableBox {
    margin: 15px;
    border:2px solid rgb(145, 143, 143);
}
.tableTest {
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
.btn {
    margin-left: 20px;
    margin-right: 20px;
}
.btn-box {
    display: flex;
    flex-direction: row-reverse;
}
.btn-boxs {
  align-items: center;
  display: flex;
  flex-direction: row-reverse;
}
.demo-pagination-block {
    display: flex;
    flex-direction: row-reverse;
    padding: 15px;
}
</style>