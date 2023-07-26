<template>
    <div style=' width:100%; '>
        <div class="title">
            <h1>封号管理</h1>
            <div class="btn-boxs">
                <el-button class="btn" @click="switchviews(false)">已封用户</el-button>
                <el-button class="btn" @click="switchviews(true)">封号处理</el-button>
            </div>
        </div>
        <el-divider />
        <div class="box" style="padding: 40px;" v-show="switchview">
            <div class="give">
                <el-form
                    ref="form"
                    :model="ruleForm"
                    :rules="rules"
                    label-width="200px"
                    class="demo-ruleForm"
                    :size="formSize"
                    status-icon
                >
                <el-form-item label="uid" prop="uid" >
                    <el-input v-model="ruleForm.uid" placeholder="Please input" clearable />
                </el-form-item>
                <el-form-item label="时间（小时）" prop="bantime">
                    <el-input v-model="ruleForm.bantime" placeholder="Please input" clearable />
                </el-form-item>
                <el-form-item label="封号原因" prop="reason">
                    <el-input v-model="ruleForm.reason" placeholder="Please input" clearable />
                </el-form-item>
                <el-form-item class="btn-box">
                    <el-button type="primary" @click="submitForm()">
                        提交
                    </el-button>
                    <el-button @click="submitForms()">清除</el-button>
                </el-form-item>
                </el-form>
            </div>
        </div>
        <div v-show="!switchview">
           <div class = "tableBox">
                <div class = 'tableTest'>
                    <div class="tag-box">
                        <el-check-tag class="tag" :checked="table.checked1" @change="retainedChange('checked1')" size="large">发送记录</el-check-tag>
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
                        <el-table-column prop="uid" label="日期"  />
                        <el-table-column prop="uid" label="收件人"  />
                        <el-table-column prop="bantime" label="标题"  />
                        <el-table-column prop="reason" label="内容"  />
                    </el-table>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {banuserApi, selectBanuserApi} from '../../api/common'
export default {
    data() {
        return {
            table: {
                checked1: true,
                tableTime:'',
            },
            tableData:[],
            switchview: true,
            ruleForm: {
                uid:'',
                bantime:'',
                reason:'',
            },
            rules:{
                uid: [ {required: true,trigger: 'blur', message: "不能为空" },
                ],
                bantime: [ {required: true,trigger: 'blur', message: "不能为空" }
                ],
                reason: [ {required: true,trigger: 'blur', message: "不能为空" }
                ],
            },
        }
    },
    mounted(){
        this.getTime()
    },
    watch: {
        'table.tableTime': {
            handler() {
                var {stimedata,etimedata,dayLength} =  this.customDate(this.table.tableTime);
                this.customFormatDate(stimedata,etimedata,dayLength);
                this.getList(this.startDate, this.endDatel);
            }
        },
    },
    methods: {
        switchviews (type) {
            this.switchview = type
            if (type == false){
                this.getList(this.startDate, this.endDatel)
            }
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
            selectBanuserApi(startDate, endDatel).then((res) => {
                console.log(res)
                res.data.forEach(arr => {
                    let from = {
                        time:'',
                        uid:'',
                        bantime:'',
                        reason:'',
                    }
                    from.time = arr[0],
                    from.uid = arr[1],
                    from.bantime = arr[2],
                    from.reason = arr[3],
                    this.tableData.push(from)
                });
            })
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

        submitForms() {
                this.ruleForm.uid = '',
                this.ruleForm.bantime = '',
                this.ruleForm.reason = ''
        },
        submitForm() {
           this.$confirm('确认封号', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {               
                this.$refs.form.validate((valid) => {
                    if (valid) {
                        console.log("成功");
                        banuserApi(this.ruleForm).then((res) => {
                            if(res.ret == 0){
                                this.$alert('处理成功',  {
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
.box {
    display: flex;
    min-width: 650px;
}
.give {
     min-width: 650px;
}
span{
    word-break:normal; 
    width:auto; 
    display:block; 
    white-space:pre-wrap;
    word-wrap : break-word ;
    overflow: hidden ;
}  
.title-span {
    display: inline-block;
}
.title {
    margin-left: 20px;
    display: flex;
    justify-content: space-between;
}
.btn {
    margin-left: 20px;
    margin-right: 20px;
}
.explain {
    margin: 26px;
    width: 180px;
}
.el-textarea__inner {
    min-width: 450px;
}
.btn-boxs { 
    align-items:center;
    display: flex;
    flex-direction: row-reverse;
}
.title {
    margin-left: 20px;
    display: flex;
    justify-content: space-between;
}
.tag {
    width: 120px;
}
</style>