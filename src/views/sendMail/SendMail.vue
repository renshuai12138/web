<template>
    <div style='width:100% '>
        <div class="title">
            <h1>查看用户</h1>
            <div class="btn-boxs">
                <!-- <el-button class="btn" @click="switchviews()">已发送</el-button> -->
            </div>
        </div>
        <el-divider />
        <div class="tag">
            <el-table
                :data="tableData"
                border
                style="width: 100%">
                <el-table-column
                    prop="user_name"
                    label="姓名"
                    width="180">
                </el-table-column>
                <el-table-column
                    prop="card_id"
                    label="车牌号"
                    width="180">
                </el-table-column>
                <el-table-column
                    prop="phone"
                    label="手机号"
                    width="180">
                </el-table-column>
                <el-table-column
                    prop="age"
                    label="年龄"
                    width="180">
                </el-table-column>
                <el-table-column
                    prop="sex"
                    label="性别">
                </el-table-column>
                <el-table-column
                    prop="description"
                    label="级别">
                </el-table-column>
                <el-table-column
                    prop="status"
                    label="状态">
                    <template #default="scope">
                        <el-popover >
                        <template #reference>
                            <el-button v-if="scope.row.status == 0">正常</el-button>
                            <el-button v-if="scope.row.status == 1">冻结</el-button>
                        </template>
                        </el-popover>
                    </template>
                </el-table-column>
            </el-table>
        </div>
        <div class="pagebox">
             <el-pagination
                background
                layout="prev, pager, next"
                @prev-click = "showpage"
                @next-click = "showpage"
                @current-change = "showpage"
                :total="total">
            </el-pagination>
        </div> 
    </div>
</template>

<script>
import {findUser } from '../../api/common'


export default {
    data() {
        return {
            tableData: [],
            page: {
                limit: 10,
                next: 1,
            },
            total: 0
        }
    },
    mounted(){
        this.getuser()
    },
    watch: {

    },
    methods: {
       getuser() {
            findUser(this.page).then( res => {
                this.tableData = res.data
                this.total = res.total
            })
       },
       switchviews() {
            findUser().then( res => {
                this.tableData = res.data
            })
       },
       showpage(arr) {
            this.page.next = arr
            findUser(this.page).then( res => {
                this.tableData = res.data
                this.total = res.total
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
.pagebox {
    
    margin: 20px;
}
.tag {
    margin-left: 20px;
}
.tableBox {
    margin: 15px;
    border:2px solid rgb(145, 143, 143);
}
</style>