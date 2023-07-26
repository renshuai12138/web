<template>
  <div class="hello" width="240px" height="780px" >
    <el-aside width="240px" height="780px" >
        <el-menu router  
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
        >
            <template v-for="v in items" :key="v.url">
                <el-sub-menu v-if="v.children" :index="v.index">
                    <template #title>
                        <el-icon><component :is="v.icon"></component></el-icon>{{v.name}}
                    </template>
                    <el-menu-item v-for="vitem in v.children" :key="vitem.url" :index="vitem.url">
                        <template #title>
                            <el-icon><component :is="vitem.icon"></component></el-icon>{{vitem.name}}
                        </template>
                    </el-menu-item>
                </el-sub-menu>
                <el-menu-item v-else :index="v.url">
                    <template #title>
                        <el-icon><component :is="v.icon"></component></el-icon>{{v.name}}
                    </template>
                </el-menu-item>
            </template>
        </el-menu>    
    </el-aside>
  </div>
</template>


<script setup>
import {reactive} from 'vue'
import { Menu as IconMenu, Message, Setting } from '@element-plus/icons-vue'
// import { Menu as Message } from '@element-plus/icons-vue'
 
const items = reactive([
    {
        name:"活跃数据",
        icon:IconMenu,
        index: 1,
        children:[
            {
                name:"用户活跃",
                url:"/activeData/UserActive",
                icon:Setting
            },
            {
                name:"用户新增",
                url:"/activeData/UserAddition",
                icon:Setting
            },
            {
                name:"在线在玩",
                url:"/activeData/OnlinePlaying",
                icon:Setting
            },
            {
                name:"VIP分布",
                url:"/activeData/VIPdistribution",
                icon:Setting
            },
            {
                name:"升级玩家数据",
                url:"/activeData/UpgradePlayer",
                icon:Setting
            },
            {
                name:"人数汇总",
                url:"/activeData/PersonnelSummary",
                icon:Setting
            }
        ]
    },
    {
        name:"模块数据",
        icon:Message,
        index: 2,
        children:[
            {
                name:"赛马汇总",
                url:"/muduleData/HorseRacingSummary",
                icon:Setting
            },
            {
                name:"招财猫汇总",
                url:"/muduleData/ZhaocaiCatSummary",
                icon:Setting
            },
            {
                name:"联赛汇总",
                url:"/muduleData/LeagueSummary",
                icon:Setting
            },
            {
                name:"老虎机汇总",
                url:"/muduleData/SlotMachineSummary",
                icon:Setting
            },
            {
                name:"打地鼠数据",
                url:"/muduleData/GroundHogData",
                icon:Setting
            },
            {
                name:"比赛场数据",
                url:"/muduleData/FieldData",
                icon:Setting
            }
        ]
    },
    {
        name:"收入数据",
        icon:Message,
        index: 3,
        children:[
            {
                name:"收入概况",
                url:"/revenueData/IncomeProfile",
                icon:Setting
            },
            {
                name:"新用户付费",
                url:"/revenueData/NewUserpayment",
                icon:Setting
            },
            {
                name:"充值查询",
                url:"/revenueData/RechargeQuery",
                icon:Setting
            },
            {
                name:"付费统计",
                url:"/revenueData/PaymentStatistics",
                icon:Setting
            },
            {
                name:"广告统计",
                url:"/revenueData/AdvertisingStatistics",
                icon:Setting
            },
            {
                name:"商城礼包",
                url:"/revenueData/ShoppingMallGiftBag",
                icon:Setting
            }
        ]
    },
    {
        name:"产出消耗",
        icon:Message,
        index: 4,
        children:[
            {
                name:"总产出消耗",
                url:"/outoutConsumption/TotalOutputConsumption",
                icon:Setting
            },
            {
                name:"金币产出消耗",
                url:"/outoutConsumption/GoldCoinOutputConsumption",
                icon:Setting
            },
            {
                name:"钻石产出消耗",
                url:"/outoutConsumption/ConsumptionOfDiamondOutput",
                icon:Setting
            }
        ]
    },
    // {
    //     name:"电话卡和退款订单",
    //     url:"/PhoneCardsAndRefundOrders",
    //     icon:Message
    // },
    // {
    //     name:"夺宝信息",
    //     url:"/TreasureSnatchingInformation",
    //     icon:Message
    // },
    // {
    //     name:"筹码钻石区间",
    //     url:"/ChipDiamondRange",
    //     icon:Message
    // },
    // {
    //     name:"短线重连与匹配",
    //     url:"/HortLineReconnectionAndMatching",
    //     icon:Message
    // },
    {
        name:"查看用户",
        url:"/SendMail",
        icon:Message
    },
    // {
    //     name:"封号管理",
    //     url:"/SealNumberManagement",
    //     icon:Message
    // },
    {
        name:"新增用户",
        url:"/TabooManagement",
        icon:Message
    },
    {
        name:"查看活动",
        url:"/PushMessage",
        icon:Message
    },
    // {
    //     name:"金币上限",
    //     url:"/GoldCoinUpperLimit",
    //     icon:Message
    // },
    // {
    //     name:"投放统计",
    //     url:"/ReleaseStatistics",
    //     icon:Message
    // },
])

</script>

<style scoped>
 .hello {
    display: flex;
    flex-direction: row;
    height: 500px;
 }
</style>
