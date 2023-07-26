<template>
    <div style='width:100% '>
        <div class="title">
            <h1>新建活动</h1>
            <div class="btn-boxs">
                <!-- <el-button class="btn" @click="switchviews(false)">已发送</el-button>
                <el-button class="btn" @click="switchviews(true)">写推送</el-button> -->
            </div>
        </div>
        <el-divider />
        <div class="box">
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
                    <el-form-item label="名称" prop="title" >
                        <el-input v-model="ruleForm.title" placeholder="名称" clearable />
                    </el-form-item>
                    <el-form-item label="要求" prop="request">
                        <el-input v-model="ruleForm.request" placeholder="要求" clearable />
                    </el-form-item>
                    <el-form-item label="集合" prop="gather">
                        <el-input v-model="ruleForm.gather" placeholder="集合时间/地点" clearable />
                    </el-form-item>
                    <el-form-item label="领队" prop="leader" >
                        <el-input v-model="ruleForm.leader" placeholder="领队" clearable />
                    </el-form-item>
                    <el-form-item label="收队" prop="Time">
                        <el-input v-model="ruleForm.collectTeam" placeholder="收队" clearable />
                    </el-form-item>
                    <el-form-item label="人数" prop="person">
                        <el-input v-model="ruleForm.person" placeholder="人数" clearable />
                    </el-form-item>
                    <el-form-item label="吃饭地点" prop="Time">
                        <el-input v-model="ruleForm.eat" placeholder="吃饭地点" clearable />
                    </el-form-item>
                    <el-form-item label="备注" prop="Time">
                        <el-input v-model="ruleForm.remark" placeholder="备注" clearable />
                    </el-form-item>
                    <el-form-item label="路线" prop="Time">
                         <el-input v-model="ruleForm.route.grade" placeholder="等级" />
                        <el-input v-model="ruleForm.route.via" placeholder='距离'/>
                    </el-form-item>
                    <el-form-item label="补给点" prop="Time">
                        <el-input v-model="ruleForm.supply" placeholder="收队" clearable />
                    </el-form-item>
                    <el-form-item label="路线详情" prop="Time">
                        <el-input v-model="ruleForm.detail.grade" placeholder="等级" />
                        <el-input v-model="ruleForm.detail.distance" placeholder='距离'/>
                        <el-input v-model="ruleForm.detail.climb"  placeholder='爬升'/>
                        <el-input v-model="ruleForm.detail.equalspeed"  placeholder='均速'/>
                        <el-input v-model="ruleForm.detail.upequalspeed"  placeholder='爬坡均速'/>
                        <el-input v-model="ruleForm.detail.remark" placeholder='备注' />
                    </el-form-item>
                     <el-form-item label="重要提示" prop="Time">
                        <el-input v-model="ruleForm.win" placeholder="重要提示" clearable />
                    </el-form-item>

                    
                    <el-form-item class="btn-box">
                        <el-button type="primary" @click="submitForm()">
                            提交
                        </el-button>
                        <el-button @click="getfind()">清除</el-button>
                    </el-form-item>
                    </el-form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {addactivity,findActivityList,findcardid} from '../../api/common'
export default {
    
    data() {
        return {
            id: {
                cardid: 1111,
            },
            ruleForm: {
                title:'',
                request:'',
                gather:'',
                leader:'',
                collectTeam:'',
                person:'',
                eat:'',
                remark:'',
                route:{
                    grade:'',
                    via:'',
                },
                supply:'',
                detail:{
                    grade:"",
                    distance:"",
                    climb:"",
                    equalspeed:"",
                    upequalspeed:"",
                    remark:"",
                },
                win:'',
            },
        }
    },
    mounted(){
        this.getlist()
    },
    watch: {
        
    },
    methods: {
        submitForm() {
            console.log(this.ruleForm.detail)
            addactivity(this.ruleForm).then(res => {
                console.log(res)
            })
        },
        getlist() {
            findActivityList().then(res => {
                console.log(res)
            })
        },

        getfind() {
            findcardid(this.id).then(res => {
                console.log(res)
            })
        }
    }
}
</script>

<style scoped>
span{
    margin: 12px;
    word-break:normal; 
    width:auto; 
    display:block; 
    white-space:pre-wrap;
    word-wrap : break-word ;
    overflow: hidden ;
} 
.title {
    margin-left: 20px;
    display: flex;
    justify-content: space-between;
}
.title-span {
    display: inline-block;
}
.btn-boxs {
  align-items: center;
  display: flex;
  flex-direction: row-reverse;
}
.btn {
    margin-left: 20px;
    margin-right: 20px;
}
.explain {
    margin: 26px;
    width: 220px;
}
.box {
    display: flex;
    min-width: 650px;
}
.give {
    min-width: 650px;
}
.tag {
    width: 120px;
}

</style>