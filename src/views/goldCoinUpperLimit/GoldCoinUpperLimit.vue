<template>
    <div style=' width:100% '>
        <div class="title">
            <h1>玩家赠送金币上限</h1>
        </div>
        <el-divider />
        <div class="box">
            <div class="explain">
                <h3>注意事项：</h3>
                <span>1.收件人只接收UID,如,10086;</span>
                <span>2.金币的默认单位,1000000,即1M;</span>
            </div>
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
                <el-form-item label="收件人" prop="pid" >
                    <el-input v-model="ruleForm.pid" placeholder="Please input" clearable />
                </el-form-item>
                <el-form-item label="金币数量" prop="coins">
                    <el-input v-model="ruleForm.coins" placeholder="Please input" clearable />
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
    </div>
</template>

<script>
import {setSendChipMaxApi} from '../../api/common'

export default {
    data() {
        return {
            ruleForm: {
                pid:'',
                coins:'',
            },
            rules:{
                pid: [ {required: true,trigger: 'blur', message: "不能为空" },
                ],
                coins: [ {required: true,trigger: 'blur', message: "不能为空" }
                ],
            },
        }
    },
    methods: {
        switchviews (type) {
            this.switchview = type
        },
        submitForms() {
            this.ruleForm.pid = '',
            this.ruleForm.coins = ''
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
                        setSendChipMaxApi(this.ruleForm).then((res) => {
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