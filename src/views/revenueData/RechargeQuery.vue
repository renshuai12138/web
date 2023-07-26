<template>
    <div style=' width:100% '>
        <div class="title">
            <h1>充值查询</h1>
        </div>
        <el-divider />
        <div class="box">
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
                <el-form-item label="Uid" prop="pid" >
                    <el-input type="textarea" v-model="ruleForm.pid" placeholder="Please input" clearable />
                </el-form-item>
                <el-form-item label="订单" prop="pid" >
                    <el-input type="textarea" v-model="ruleForm.orders" placeholder="Please input" clearable />
                </el-form-item>
                <el-form-item class="btn-box">
                    <el-button type="primary" @click="submitForm()">
                        提交
                    </el-button>
                    <el-button @click="submitForm()">清除</el-button>
                </el-form-item>
                </el-form>
            </div>
        </div>
        <div class="table">
            <el-table :data="tableData" stripe style="width: 100%">
                <el-table-column prop="googleId" label="google订单号"  />
                <el-table-column prop="uid" label="uid"  />
                <el-table-column prop="shopId" label="商品Id"  />
                <el-table-column prop="title" label="里拉"  />
                <el-table-column prop="diamonds" label="钻石"  />
                <el-table-column prop="time" label="时间"  />
            </el-table>
        </div>
    </div>
</template>

<script>
import {querypayrecordApi} from '../../api/common'
export default {
    data() {
        return {
            ruleForm: {
                pid:'',
                orders:'',
            },
            tableData: [],
        }
    },
    methods: {
        switchviews (type) {
            this.switchview = type
        },
        submitForm() {
            this.$confirm('确认查询', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {               
                this.$refs.form.validate((valid) => {
                    if (valid) {
                        console.log("成功");
                        querypayrecordApi(this.ruleForm.pid, this.ruleForm.orders).then((res) => {
                             res.data.forEach(arr => {
                                let from = {
                                    googleId:'',
                                    uid:'',
                                    shopId:'',
                                    title:'',
                                    diamonds:'',
                                    time:'',
                                }
                                from.googleId = arr[0],
                                from.uid = arr[1],
                                from.shopId = arr[2],
                                from.title = arr[3],
                                from.diamonds = arr[4],
                                from.time = arr[5],
                                this.tableData.push(from)
                            });
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
    display: flex;
    flex-direction: row;
}
.title {
    margin-left: 20px;
    display: flex;
    flex-direction: row;
}
.explain {
    margin: 26px;
    width: 180px;
}
.el-textarea__inner {
    min-width: 450px;
}
</style>