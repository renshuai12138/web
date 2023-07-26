<template>
    <div style=' width:100% '>
        <div class="title">
            <h1>禁言管理</h1>
            <div class="btn-boxs">
                <!-- <el-button class="btn" @click="switchviews(false)">禁言统计</el-button> -->
                <!-- <el-button class="btn" @click="switchviews(true)">禁言用户</el-button> -->
            </div>
        </div>
        <!-- <div class="btn-box">
            <el-button class="btn" @click="switchviews(false)">禁言统计</el-button>
            <el-button class="btn" @click="switchviews(true)">禁言用户</el-button>
        </div> -->
        <el-divider />
        <div class="box" style="padding: 40px;">
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
                <el-form-item label="姓名" prop="user_name" >
                    <el-input v-model="ruleForm.user_name" placeholder="名字" clearable />
                </el-form-item>
                <el-form-item label="车牌号" prop="card_id">
                    <el-input v-model="ruleForm.card_id" placeholder="车牌号" clearable />
                </el-form-item>
                <el-form-item label="年龄" prop="Reason">
                    <el-input v-model="ruleForm.age" placeholder="年龄" clearable />
                </el-form-item>
                <el-form-item label="性别" prop="Uid" >
                    <el-input v-model="ruleForm.sex" placeholder="性别" clearable />
                </el-form-item>
                <el-form-item label="手机号" prop="Time">
                    <el-input v-model="ruleForm.phone" placeholder="手机号" clearable />
                </el-form-item>
                <el-form-item label="管理||用户" prop="Reason">
                    <el-select v-model="ruleForm.description" class="m-2" placeholder="Select" size="large">
                        <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value"
                        />
                    </el-select>
                </el-form-item>
                <el-form-item class="btn-box">
                    <el-button type="primary" @click="submitForm(ruleForm)">
                        提交
                    </el-button>
                    <el-button @click="submitForm(ruleForm)">清除</el-button>
                </el-form-item>
                </el-form>
            </div>
        </div>
    </div>
</template>

<script>
import {adduser} from '../../api/common'
export default {
    data() {
        return {
            page: {
                limit: 10,
                next: 1,
            },
           options:[ {
                value: '用户',
                label: '用户',
            },
            {
                value: '管理',
                label: '管理',
            },
            ],
            ruleForm: {
                user_name:'',
                card_id:'',
                age:'',
                phone:'',
                sex:'',
                description:'',
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
    methods: {
        submitForms() {
                this.ruleForm.uid = '',
                this.ruleForm.bantime = '',
                this.ruleForm.reason = ''
        },
        submitForm() {
           adduser(this.ruleForm).then (res => {
             console.log(res)
           })
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