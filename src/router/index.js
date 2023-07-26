// 1. 导入创建路由对象 和 创建hash对象
import { createRouter, createWebHashHistory } from 'vue-router';

// 2. 导入组件
import Longin from '../views/Longin.vue';
import NotFound404 from '../components/404.vue';
import Home from '../views/Home.vue';
import About from '../views/About.vue';
import UserActive from '../views/activeData/UserActive';
import UserAddition from '../views/activeData/UserAddition';
import OnlinePlaying from '../views/activeData/OnlinePlaying';
import UpgradePlayer from '../views/activeData/UpgradePlayer';
import VIPdistribution from '../views/activeData/VIPdistribution';
import PersonnelSummary from '../views/activeData/PersonnelSummary';
import HorseRacingSummary from '../views/muduleData/HorseRacingSummary';
import ZhaocaiCatSummary from '../views/muduleData/ZhaocaiCatSummary';
import LeagueSummary from '../views/muduleData/LeagueSummary';
import SlotMachineSummary from '../views/muduleData/SlotMachineSummary';
import GroundHogData from '../views/muduleData/GroundHogData';
import FieldData from '../views/muduleData/FieldData';
import IncomeProfile from '../views/revenueData/IncomeProfile';
import NewUserpayment from '../views/revenueData/NewUserpayment';
import RechargeQuery from '../views/revenueData/RechargeQuery';
import PaymentStatistics from '../views/revenueData/PaymentStatistics';
import AdvertisingStatistics from '../views/revenueData/AdvertisingStatistics';
import ShoppingMallGiftBag from '../views/revenueData/ShoppingMallGiftBag';
import TotalOutputConsumption from '../views/outoutConsumption/TotalOutputConsumption';
import GoldCoinOutputConsumption from '../views/outoutConsumption/GoldCoinOutputConsumption';
import ConsumptionOfDiamondOutput from '../views/outoutConsumption/ConsumptionOfDiamondOutput';
import PhoneCardsAndRefundOrders from '../views/phoneCardsAndRefundOrders/PhoneCardsAndRefundOrders';
import TreasureSnatchingInformation from '../views/treasureSnatchingInformation/TreasureSnatchingInformation';
import ChipDiamondRange from '../views/chipDiamondRange/ChipDiamondRange';
import HortLineReconnectionAndMatching from '../views/hortLineReconnectionAndMatching/HortLineReconnectionAndMatching';
import ReleaseStatistics from '../views/releaseStatistics/ReleaseStatistics';
import GoldCoinUpperLimit from '../views/goldCoinUpperLimit/GoldCoinUpperLimit';
import PushMessage from '../views/pushMessage/PushMessage';
import TabooManagement from '../views/tabooManagement/TabooManagement';
import SealNumberManagement from '../views/sealNumberManagement/SealNumberManagement';
import SendMail from '../views/sendMail/SendMail';




// 3. 配置路由映射关系表
const routes = [
  // 路径和组件映射起来
  {
    path: '/',
    component: Longin,
    name: "Longin",
    meta: {
      requireAuth: true,
      alive: false
    }
  },
  {
    path: '/index',
    component: Longin,
    name: "Longins",
    meta: {
      requireAuth: true,
      alive: false
    }
  },
  {
    path: '/Home',
    component: Home,
    meta: {
      requireAuth: true,
      alive: true
    }
  },
  {
    path: '/About',
    component: About,
    meta: {
      alive: true
    }
  },

  {
    path: '/activeData',
    meta: {
      requireAuth: true,
      alive: true
    },
    children: [
      {
        path: 'UserActive',
        component: UserActive,
        meta: {
          requireAuth: true,
          alive: true
        }
      },
      {
        path: 'UserAddition',
        component: UserAddition,
        meta: {
          requireAuth: true,
          alive: true
        }
      },
      {
        path: 'OnlinePlaying',
        component: OnlinePlaying,
        meta: {
          requireAuth: true,
          alive: true
        }
      },
      {
        path: 'VIPdistribution',
        component: VIPdistribution,
        meta: {
          requireAuth: true,
          alive: true
        }
      },
      {
        path: 'UpgradePlayer',
        component: UpgradePlayer,
        meta: {
          requireAuth: true,
          alive: true
        }
      },
      {
        path: 'PersonnelSummary',
        component: PersonnelSummary,
        meta: {
          requireAuth: true,
          alive: true
        }
      },
    ]
  },
  {
    path: '/muduleData',
    meta: {
      requireAuth: true,
      alive: true
    },
    children: [
      {
        path: 'HorseRacingSummary',
        component: HorseRacingSummary,
        meta: {
          requireAuth: true,
          alive: true
        }
      },
      {
        path: 'ZhaocaiCatSummary',
        component: ZhaocaiCatSummary,
        meta: {
          requireAuth: true,
          alive: true
        }
      },
      {
        path: 'LeagueSummary',
        component: LeagueSummary,
        meta: {
          requireAuth: true,
          alive: true
        }
      },
      {
        path: 'SlotMachineSummary',
        component: SlotMachineSummary,
        meta: {
          requireAuth: true,
          alive: true
        }
      },
      {
        path: 'GroundHogData',
        component: GroundHogData,
        meta: {
          requireAuth: true,
          alive: true
        }
      },
      {
        path: 'FieldData',
        component: FieldData,
        meta: {
          requireAuth: true,
          alive: true
        }
      },
    ]
  },
  {
    path: '/revenueData',
    meta: {
      requireAuth: true,
      alive: true
    },
    children: [
      {
        path: 'IncomeProfile',
        component: IncomeProfile,
        meta: {
          requireAuth: true,
          alive: true
        }
      },
      {
        path: 'NewUserpayment',
        component: NewUserpayment,
        meta: {
          requireAuth: true,
          alive: true
        }
      },
      {
        path: 'RechargeQuery',
        component: RechargeQuery,
        meta: {
          requireAuth: true,
          alive: true
        }
      },
      {
        path: 'PaymentStatistics',
        component: PaymentStatistics,
        meta: {
          requireAuth: true,
          alive: true
        }
      },
      {
        path: 'AdvertisingStatistics',
        component: AdvertisingStatistics,
        meta: {
          requireAuth: true,
          alive: true
        }
      },
      {
        path: 'ShoppingMallGiftBag',
        component: ShoppingMallGiftBag,
        meta: {
          requireAuth: true,
          alive: true
        }
      },
    ]
  },
  {
    path: '/outoutConsumption',
    meta: {
      requireAuth: true,
      alive: true
    },
    children: [
      {
        path: 'TotalOutputConsumption',
        component: TotalOutputConsumption,
        meta: {
          requireAuth: true,
          alive: true
        }
      },
      {
        path: 'GoldCoinOutputConsumption',
        component: GoldCoinOutputConsumption,
        meta: {
          requireAuth: true,
          alive: true
        }
      },
      {
        path: 'ConsumptionOfDiamondOutput',
        component: ConsumptionOfDiamondOutput,
        meta: {
          requireAuth: true,
          alive: true
        }
      },
    ]
  },
  {
    path: '/PhoneCardsAndRefundOrders',
    component: PhoneCardsAndRefundOrders,
    meta: {
      requireAuth: true,
      alive: true
    }
  },
  {
    path: '/TreasureSnatchingInformation',
    component: TreasureSnatchingInformation,
    meta: {
      requireAuth: true,
      alive: true
    }
  },
  {
    path: '/ChipDiamondRange',
    component: ChipDiamondRange,
    meta: {
      requireAuth: true,
      alive: true
    }
  },
  {
    path: '/HortLineReconnectionAndMatching',
    component: HortLineReconnectionAndMatching,
    meta: {
      requireAuth: true,
      alive: true
    }
  },
  {
    path: '/SendMail',
    component: SendMail,
    meta: {
      requireAuth: true,
      alive: true
    }
  },
  {
    path: '/SealNumberManagement',
    component: SealNumberManagement,
    meta: {
      requireAuth: true,
      alive: true
    }
  },
  {
    path: '/TabooManagement',
    component: TabooManagement,
    meta: {
      requireAuth: true,
      alive: true
    }
  },
  {
    path: '/PushMessage',
    component: PushMessage,
    meta: {
      requireAuth: true,
      alive: true
    }
  },
  {
    path: '/GoldCoinUpperLimit',
    component: GoldCoinUpperLimit,
    meta: {
      requireAuth: true,
      alive: true
    }
  },
  {
    path: '/ReleaseStatistics',
    component: ReleaseStatistics,
    meta: {
      requireAuth: true,
      alive: true
    }
  },
  {
    path: "/:pathMatch(.*)*",
    name:'404',
    component: NotFound404
  },
];

// 4. 创建路由对象
const router = new createRouter({
  // 5. 配置路由跳转模式，这里使用 hash 模式
  history: createWebHashHistory(),
  // 把映射表放入
  routes
});

// 路由守卫
 
// to：即将要进入的目标 路由对象
// from：当前导航正要离开的路由
//next：放行
router.beforeEach((to, from, next) => {

  if (to.path == '/index' || to.path == '/') {
    next();
  }
  if (to.matched.length != 0) {
      if (to.meta.requireAuth) { // 判断该路由是否需要登录权限
          if (sessionStorage.getItem("token")) { // 通过浏览器本地缓存判断当前的token是否存在
              next();

          } else {
              next({
                  path: '/index',
                 
              })
          }
      } else {
          if (sessionStorage.getItem("token")) { // 判断是否登录
              if (to.path != "/" && to.path != "/index") { //判断是否要跳到登录界面
                  next();

              } else {
                  /**
                   * 防刷新，如果登录，修改路由跳转到登录页面，修改路由为登录后的首页
                   */
                  next({
                      path: '/index'
                  })
              }
          } else {
              next();
          }
      }
  } else {
      next({
          path: '/home',
      })
      return;
  }
})

// 5. 导出
export default router;