<template>
    <div style='width:100% '>
        <div class="title">
            <h1>电话卡</h1>
        </div>
        <el-divider />
        <div class = "tableBox">
            <div class = 'tableTest'>
                <div class="tag-box">
                    <el-check-tag class="tag" :checked="table.checked1" @change="retainedChange('checked1')" size="large">IOS退款</el-check-tag>
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
                    <el-table-column prop="region" label="收件人"  />
                    <el-table-column prop="advertising" label="内容"  />
                    <el-table-column prop="exchange" label="有效时长"  />
                </el-table>
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
        <div class = "tableBox">
            <div class = 'tableTest'>
                <div class="tag-box">
                    <el-check-tag class="tag" :checked="table.checked1" @change="retainedChange('checked1')" size="large">Google退款</el-check-tag>
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
                    <el-table-column prop="region" label="收件人"  />
                    <el-table-column prop="advertising" label="内容"  />
                    <el-table-column prop="exchange" label="有效时长"  />
                </el-table>
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
export default {
    data() {
        return {
            tableData: [
                {
                    time:'2016-05-03',
                    region:'TR',
                    platform:'1',
                    channel:'2',
                    method:'5',
                    date:'2016-05-03',
                    advertising:'No. 189, Grove St, Los Angeles',
                    cost:'25',
                    exchange:'20',
                    exhibition:'No. 189, Grove St, Los Angeles',
                    click:'No. 189, Grove St, Los Angeles',
                    install:'No. 189, Grove St, Los Angeles',
                },
            ],
            table: {
                checked1: true,
                tableTime:'',
            },
            switchview: true,
            ruleForm: {
                pid:'',
                information:'',
                time:'',
                title:'',
                numberCoins:'',
                numberDiamonds:'',
                prop:'',
                numberProp:'',
            },
            rules:{
                pid: [ {required: true,trigger: 'blur', message: "不能为空" },
                ],
                title: [ {required: true,trigger: 'blur', message: "不能为空" },
                ],
                information: [ {required: true,trigger: 'blur', message: "不能为空" }
                ],
            },
        }
    },
    methods: {
        switchviews (type) {
            this.switchview = type
        },
        submitForm(sss) {
            console.log(sss)
            this.$refs.form.validate((valid) => {
                if (valid) {
                    console.log("成功");
                } else {
                    console.log("失败");
                }
            });
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
.tableBox {
    margin: 15px;
    border:2px solid rgb(145, 143, 143);
}
.demo-pagination-block {
    display: flex;
    flex-direction: row-reverse;
    padding: 15px;
}
</style>