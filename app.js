const points = [
  {
    id: "intel-field",
    type: "intel",
    x: 17.2,
    y: 21.8,
    title: "清理目标区域敌人",
    status: "局内行动",
    risk: "1 / 5",
    reward: "2 / 5",
    gear: "轻装、侦察道具",
    body: "在操场区域接取清理任务，肃清指定范围内的敌人后可获得行动奖励，并降低西侧路线的交战压力。"
  },
  {
    id: "extract-bus",
    type: "extract",
    x: 33.1,
    y: 35.9,
    icon: "map-bus.jpg",
    title: "班车撤离点",
    status: "车辆撤离",
    risk: "3 / 5",
    reward: "3 / 5",
    gear: "烟雾弹、止痛药",
    body: "校车撤离点位于学校操场旁边，校车行动完成后该撤离点进入1分钟倒计时，该撤离点无人数限制。"
  },
  {
    id: "extract-note-north",
    type: "extract",
    x: 29.4,
    y: 28.8,
    w: "5.2%",
    h: "6.2%",
    title: "假条撤离点",
    status: "假条撤离",
    risk: "2 / 5",
    reward: "4 / 5",
    gear: "假条凭证、烟雾弹",
    body: "左上角新增绿色假条撤离点，归入撤离分类。靠近操场与食堂之间，适合低调脱离西侧区域。"
  },
  {
    id: "safe-canteen",
    type: "safe",
    x: 40.3,
    y: 26.7,
    title: "食堂保险柜",
    status: "高价值物资",
    risk: "2 / 5",
    reward: "4 / 5",
    gear: "开锁器、短枪",
    body: "食堂保险柜可能刷新现金包、金条和高级药品。室内路线短，搜索前先听脚步，别把背身交给楼梯口。"
  },
  {
    id: "safe-dorm-north",
    type: "safe",
    x: 70.1,
    y: 28.4,
    title: "宿舍区北侧保险柜",
    status: "稀有刷新",
    risk: "3 / 5",
    reward: "4 / 5",
    gear: "中距步枪、投掷物",
    body: "宿舍区资源密度高，也容易撞队。开柜后优先从东侧路撤出，避免在宿舍楼之间被多窗口架枪。"
  },
  {
    id: "intel-art",
    type: "intel",
    x: 52.6,
    y: 40.2,
    title: "标杆行动：班车行动",
    status: "标杆行动",
    risk: "3 / 5",
    reward: "5 / 5",
    gear: "闪光弹、近距离武器",
    body: "在艺术楼接取标杆行动，完成行动后，将会获得丰厚奖励，并且开启班车撤离点。"
  },
  {
    id: "intel-faculty",
    type: "intel",
    x: 91.1,
    y: 37,
    title: "获取保险柜物资",
    status: "局内行动",
    risk: "2 / 5",
    reward: "2 / 5",
    gear: "轻装、消音武器",
    body: "在教工宿舍区域接取物资行动，搜索指定保险柜并带出关键物资，可提升本局结算收益。"
  },
  {
    id: "safe-faculty",
    type: "safe",
    x: 80.8,
    y: 48.2,
    title: "教工宿舍保险柜",
    status: "边线资源",
    risk: "2 / 5",
    reward: "3 / 5",
    gear: "钥匙包、医疗包",
    body: "教工宿舍保险柜收益稳定，适合补经济。点位靠路边，搜完后可以直接观察东侧撤离路线。"
  },
  {
    id: "intel-gym",
    type: "intel",
    x: 19.6,
    y: 63.6,
    title: "破坏物资室铁门",
    status: "局内行动",
    risk: "2 / 5",
    reward: "3 / 5",
    gear: "手电、近战副武器",
    body: "在体育馆区域接取破门行动，破坏物资室铁门后可进入隐藏补给点，获取额外战利品。"
  },
  {
    id: "safe-gym",
    type: "safe",
    x: 6.3,
    y: 67.7,
    title: "体育馆外侧保险柜",
    status: "低风险物资",
    risk: "1 / 5",
    reward: "3 / 5",
    gear: "轻装、开锁器",
    body: "体育馆外侧保险柜风险较低，适合开局保底。收益不如核心区，但能稳拿现金和贵重小件。"
  },
  {
    id: "target-core",
    type: "target",
    x: 56.3,
    y: 58.5,
    w: "29%",
    h: "25%",
    title: "教学核心区高价值目标",
    status: "行动目标",
    risk: "5 / 5",
    reward: "5 / 5",
    gear: "穿甲弹、震撼弹、二级以上护甲",
    body: "［首领］小基、［首领］小马、［首领］小军，三个BOSS目标单局随机刷新一名，随机刷新在教学核心区。"
  },
  {
    id: "safe-core-north",
    type: "safe",
    x: 60.9,
    y: 56.8,
    title: "教学核心区北保险柜",
    status: "核心物资",
    risk: "5 / 5",
    reward: "5 / 5",
    gear: "烟雾弹、止血包",
    body: "靠近高价值目标，收益高但极易引发交战。开柜前必须确认红区内目标位置和广场方向枪线。"
  },
  {
    id: "safe-plaza",
    type: "safe",
    x: 55.1,
    y: 63.6,
    title: "正心广场保险柜",
    status: "争夺热点",
    risk: "4 / 5",
    reward: "4 / 5",
    gear: "烟雾弹、耐力针",
    body: "广场保险柜暴露度高，拿物资时要利用建筑阴影和烟雾遮挡。适合队友架枪时快速开柜。"
  },
  {
    id: "lever-core",
    type: "extract",
    x: 65.9,
    y: 59.2,
    icon: "map-lever.jpg",
    title: "教学核心区拉闸点",
    status: "联动正门门口撤离",
    risk: "4 / 5",
    reward: "4 / 5",
    gear: "烟雾弹、震撼弹",
    body: "拉闸撤离点位于学校正门，当行政楼拉闸点和教学核心区拉闸点均拉闸完成后，拉闸撤离点进入3分钟倒计时，倒计时结束后撤离，无人数限制。"
  },
  {
    id: "extract-east",
    type: "extract",
    x: 78.1,
    y: 67.3,
    icon: "map-extract-east.jpg",
    title: "学校教工宿舍门口撤离点",
    status: "丢包撤离",
    risk: "3 / 5",
    reward: "4 / 5",
    gear: "轻装、烟雾弹",
    body: "丢包撤离点位于学校教工宿舍门口，从此处撤离需要丢弃背包，区域内在10秒后撤离，此撤离点开局10分钟后开启，名额仅限1名。"
  },
  {
    id: "safe-east-yard",
    type: "safe",
    x: 65,
    y: 70.8,
    title: "东庭院保险柜",
    status: "路线物资",
    risk: "3 / 5",
    reward: "4 / 5",
    gear: "中距武器、医疗包",
    body: "位于核心区撤离路线上，适合顺路摸柜。若已经触发拉闸，别在这里停太久，容易被追击队伍咬住。"
  },
  {
    id: "safe-international",
    type: "safe",
    x: 33.8,
    y: 78,
    title: "国际部大保险",
    status: "稳定收益",
    risk: "2 / 5",
    reward: "3 / 5",
    gear: "开锁器、轻装",
    body: "国际部大保险适合从西南侧慢搜进入。价值极高，但路线安静，适合避开教学核心区正面交火。"
  },
  {
    id: "extract-note-southwest",
    type: "extract",
    x: 17.6,
    y: 78.5,
    w: "5.5%",
    h: "5.5%",
    title: "假条撤离点",
    status: "假条撤离",
    risk: "2 / 5",
    reward: "4 / 5",
    gear: "假条凭证、耐力针",
    body: "假条撤离点位于学校西南侧小门，持有假条的队伍在区域内1分钟后撤离。假条规则：开局10分钟时，会在操场主席台刷新一个假条（1×2）；假条被拾取后将会全图播报更新位置；假条无提示危险等级功能；携带假条的队伍可以从假条撤离点撤离并获得额外奖励；持有假条的干员被击败后假条将会掉落；假条无法放进安全箱。"
  },
  {
    id: "lever-admin",
    type: "extract",
    x: 56.9,
    y: 79.1,
    icon: "map-lever.jpg",
    title: "行政楼南侧拉闸点",
    status: "联动正门门口撤离",
    risk: "3 / 5",
    reward: "4 / 5",
    gear: "烟雾弹、耐力针",
    body: "拉闸撤离点位于学校正门，当行政楼拉闸点和教学核心区拉闸点均拉闸完成后，拉闸撤离点进入3分钟倒计时，倒计时结束后撤离，无人数限制。"
  },
  {
    id: "safe-admin",
    type: "safe",
    x: 59.2,
    y: 81.2,
    w: "7.5%",
    h: "6.5%",
    title: "行政楼大保险",
    status: "重点搜索",
    risk: "4 / 5",
    reward: "5 / 5",
    gear: "高级钥匙、烟雾弹",
    body: "行政楼大保险是高收益点之一，可能出现机密文件、显卡和贵重腕表。价值极高。拿到高价值物资后建议接拉闸路线撤离。"
  },
  {
    id: "safe-ocean-yard",
    type: "safe",
    x: 71.5,
    y: 87.1,
    w: "7.5%",
    h: "6.5%",
    title: "海洋楼外侧保险柜",
    status: "边线补给",
    risk: "2 / 5",
    reward: "3 / 5",
    gear: "轻装、医疗包",
    body: "靠近东南角，适合撤离前顺手检查。这里被核心区队伍追到的概率较低，但要小心东侧撤离点回头架枪。"
  },
  {
    id: "intel-ocean",
    type: "intel",
    x: 57.7,
    y: 91,
    title: "标杆行动：闪击校长办公室",
    status: "标杆行动",
    risk: "2 / 5",
    reward: "5 / 5",
    gear: "短枪、耐力针",
    body: "在湖心亭接取标杆行动，完成闪击校长办公室任务后，将会获得丰厚奖励。"
  },
  {
    id: "extract-south",
    type: "extract",
    x: 43.1,
    y: 90.5,
    icon: "map-extract-south.jpg",
    title: "正门撤离点",
    status: "拉闸撤离",
    risk: "2 / 5",
    reward: "4 / 5",
    gear: "烟雾弹、耐力针",
    body: "拉闸撤离点位于学校正门，当行政楼拉闸点和教学核心区拉闸点均拉闸完成后，拉闸撤离点进入3分钟倒计时，倒计时结束后撤离，无人数限制。"
  }
];

const overview = {
  id: "overview",
  type: "all",
  title: "全图情报",
  status: "实时刷新",
  risk: "3 / 5",
  reward: "4 / 5",
  gear: "消音步枪、烟雾弹",
  body: "新地图已替换完成，所有可点击区域都覆盖在原图已有彩色图标上。绿色感叹号是拉闸点，两个拉闸点对应同一个东侧林地撤离路线。"
};

const layer = document.querySelector("#hotspotLayer");
const canvas = document.querySelector("#mapCanvas");
const ctx = canvas.getContext("2d", { willReadFrequently: true });
const mapImage = new Image();
const mapSources = {
  guidePanel: "assets/campus-map.jpg",
  introPanel: "assets/intro-map.jpg"
};
let activeFilter = null;
let currentMapPanel = "guidePanel";
const filters = document.querySelectorAll(".filter-chip");
const interfaceTabs = document.querySelectorAll(".interface-tab");
const interfacePanels = document.querySelectorAll(".interface-panel");
const fields = {
  title: document.querySelector("#intelTitle"),
  type: document.querySelector("#intelType"),
  status: document.querySelector("#intelStatus"),
  body: document.querySelector("#intelBody"),
  risk: document.querySelector("#intelRisk"),
  reward: document.querySelector("#intelReward"),
  threat: document.querySelector("#threatLevel"),
  boardCode: document.querySelector("#boardCode"),
  valueTag: document.querySelector("#valueTag"),
  timingTag: document.querySelector("#timingTag"),
  teamTag: document.querySelector("#teamTag"),
  entryPlan: document.querySelector("#entryPlan"),
  actionPlan: document.querySelector("#actionPlan"),
  exitPlan: document.querySelector("#exitPlan")
};

function labelForType(type) {
  return {
    all: "行动概览",
    extract: "撤离/拉闸",
    safe: "保险柜",
    intel: "局内行动",
    target: "BOSS首领"
  }[type];
}

const defaultIconByType = {
  extract: "map-extract-south.jpg",
  safe: "map-safe.jpg",
  intel: "map-intel.jpg",
  target: "map-target.jpg"
};

const tacticalPlans = {
  overview: {
    code: "BOARD-00",
    tags: ["均衡推进", "中期执行", "双人协同"],
    entry: "从行政楼或国际部切入，先避开教学核心区正面交火。",
    action: "按颜色分类确认目标：绿色先定撤离，黄色看收益，蓝色补情报，红色最后处理。",
    exit: "高价值物资到手后优先接东侧林地或南门撤离，不回穿广场中心。"
  },
  "intel-field": {
    code: "ACT-01",
    tags: ["清理任务", "西侧控场", "低风险"],
    entry: "从操场西侧贴边进入，利用跑道边缘观察食堂和体育馆动静。",
    action: "接取清理目标区域敌人任务后，优先处理操场边缘和主席台附近目标。",
    exit: "向食堂班车或体育馆外侧保险柜转移，不在操场中央停留。"
  },
  "extract-bus": {
    code: "EXT-01",
    tags: ["班车撤离", "1分钟倒计时", "无人数限制"],
    entry: "从操场旁边或食堂西侧靠近撤离点，先确认艺术楼窗口和食堂门口安全。",
    action: "完成校车行动后，班车撤离点进入1分钟倒计时；倒计时期间用烟雾遮断道路枪线。",
    exit: "该撤离点无人数限制，队伍可集中撤离，但倒计时期间仍需分散站位防止被集火。"
  },
  "extract-note-north": {
    code: "EXT-06",
    tags: ["假条撤离", "西侧脱离", "低调转移"],
    entry: "从操场东侧或食堂西侧贴边靠近，避免暴露在跑道开阔区域。",
    action: "确认携带假条凭证后触发撤离，触发前先观察食堂门口和艺术楼窗口。",
    exit: "沿操场边线撤出，若食堂方向有枪声，立刻向西侧道路绕行。"
  },
  "safe-canteen": {
    code: "SAFE-01",
    tags: ["室内物资", "短线搜索", "中低风险"],
    entry: "从食堂侧门进入，先进楼梯口听脚步，再贴墙进入经理室。",
    action: "开柜前封住门口，优先拿高价值小件和医疗物资。",
    exit: "搜完向班车撤离点或艺术楼转移，避免从食堂正门硬出。"
  },
  "safe-dorm-north": {
    code: "SAFE-02",
    tags: ["宿舍争夺", "窗口多", "中风险"],
    entry: "从宿舍区北侧外墙贴边进入，先观察二楼窗口是否有人架枪。",
    action: "开柜时一人守门一人开锁，听到近点脚步立刻取消动作。",
    exit: "优先向东侧道路撤离，不在宿舍楼缝里反复拉扯。"
  },
  "intel-art": {
    code: "ACT-02",
    tags: ["标杆行动", "班车解锁", "高额奖励"],
    entry: "从艺术楼南侧阴影切入，先清理楼内近点和窗口枪线。",
    action: "在艺术楼接取并完成班车行动，完成后领取奖励并开启班车撤离点。",
    exit: "行动完成后向食堂西侧班车撤离点转移，用烟雾封住艺术楼和食堂之间的道路。"
  },
  "intel-faculty": {
    code: "ACT-03",
    tags: ["物资行动", "保险柜目标", "边线执行"],
    entry: "沿教工宿舍东侧道路靠近，优先确认林地方向是否有人。",
    action: "接取获取保险柜物资行动后，优先搜索教工宿舍保险柜并确认关键物资是否到手。",
    exit: "物资到手后从教工宿舍门口撤离点或正门撤离点撤出，避免继续深入核心区。"
  },
  "safe-faculty": {
    code: "SAFE-03",
    tags: ["边线资源", "可顺路", "低中风险"],
    entry: "从教工宿舍外侧道路进点，避免穿过宿舍区中庭。",
    action: "快速开柜拿现金和钥匙包，搜索时间控制在短窗口内。",
    exit: "向东侧林地撤离点观察后撤，或回宿舍区北侧继续搜。"
  },
  "intel-gym": {
    code: "ACT-04",
    tags: ["破门行动", "隐藏补给", "低风险"],
    entry: "从体育馆西侧贴墙接近，先确认停车场和剧场方向。",
    action: "接取破坏物资室铁门行动后，优先清理门口敌人，再破门进入物资室。",
    exit: "搜完隐藏补给后向国际部大保险或西南假条撤离点转移。"
  },
  "safe-gym": {
    code: "SAFE-04",
    tags: ["保底收益", "低风险", "开局适合"],
    entry: "从体育馆外墙进入，不走停车场开阔线。",
    action: "开柜后只拿高价值小件，避免为了低价物资耽误节奏。",
    exit: "向国际部大保险延伸，或从南侧路线慢慢靠近撤离点。"
  },
  "target-core": {
    code: "BOSS-01",
    tags: ["最高威胁", "高价值击杀", "满状态再打"],
    entry: "先清红区外围保险柜和拉闸点，确认没有第三方队伍夹击。",
    action: "用震撼弹或破片雷压制 BOSS 首领，击杀后立即分工：一人舔包，一人警戒。",
    exit: "拿到首领物资后走行政楼南侧拉闸或东侧林地撤离，禁止原地恋战。"
  },
  "safe-core-north": {
    code: "SAFE-05",
    tags: ["核心高危", "收益极高", "易被劝架"],
    entry: "从艺术楼或宿舍区边缘摸近，确认 BOSS 红区未被占领。",
    action: "开柜前先看红区问号位置，必须留一颗烟雾给撤退。",
    exit: "开完直接向东庭院或行政楼移动，不在核心区二次搜索。"
  },
  "safe-plaza": {
    code: "SAFE-06",
    tags: ["广场暴露", "快进快出", "需要烟雾"],
    entry: "从广场阴影边缘切入，避免从中心路线直跑。",
    action: "烟雾落地后立刻开柜，只拿高价值物资。",
    exit: "向行政楼南侧拉闸点撤，不回头搜低价值房间。"
  },
  "lever-core": {
    code: "EXT-02",
    tags: ["双点拉闸", "3分钟倒计时", "无人数限制"],
    entry: "从红区边缘靠近教学核心区拉闸点，先确认附近保险柜和 BOSS 区域是否有人。",
    action: "完成教学核心区拉闸后，必须等待行政楼南侧拉闸点也完成，学校正门拉闸撤离点才会启动3分钟倒计时。",
    exit: "倒计时结束后从学校正门撤离，无人数限制；倒计时期间分散架住正门道路和核心区回防路线。"
  },
  "extract-east": {
    code: "EXT-03",
    tags: ["丢包撤离", "10秒撤离", "仅限1名"],
    entry: "开局10分钟后该撤离点开启，从教工宿舍门口外侧贴边靠近，先确认宿舍窗口和林地方向没人架枪。",
    action: "进入区域前必须丢弃背包，触发后坚守10秒即可撤离；该点名额仅限1名，优先给携带关键任务物品的干员。",
    exit: "完成撤离后其余队员不要继续挤点，立刻转向学校正门拉闸撤离或其它撤离路线。"
  },
  "safe-east-yard": {
    code: "SAFE-07",
    tags: ["撤离路物资", "顺手摸柜", "中风险"],
    entry: "从教学核心区东侧庭院靠近，保持撤离路线在身后。",
    action: "只在确认没人追击时开柜，听到脚步立即放弃。",
    exit: "向东侧林地撤离点转移，别回头进红区。"
  },
  "safe-international": {
    code: "SAFE-08",
    tags: ["西南慢搜", "价值极高", "低中风险"],
    entry: "从国际部南侧小路进入，先听楼内脚步。",
    action: "开柜后补充现金和钥匙，缺药时优先搜周边房间。",
    exit: "向正门撤离点靠近，或转行政楼南侧拉闸点。"
  },
  "extract-note-southwest": {
    code: "EXT-07",
    tags: ["假条撤离", "西南小门", "额外奖励"],
    entry: "开局10分钟关注操场主席台，假条会刷新为1×2物品；拾取后全图播报位置，转移时必须避开主干道追击。",
    action: "持有假条后前往学校西南侧小门撤离点，在区域内坚守1分钟。假条不能放进安全箱，持有干员被击败后会掉落。",
    exit: "倒计时期间队友分散警戒体育馆、国际部和西南道路；成功撤离后获得假条额外奖励。"
  },
  "lever-admin": {
    code: "EXT-04",
    tags: ["双点拉闸", "3分钟倒计时", "无人数限制"],
    entry: "从行政楼南侧绿化带进入，避开广场中心枪线，先确认教学核心区拉闸是否已完成。",
    action: "完成行政楼南侧拉闸后，若教学核心区拉闸点也已完成，学校正门拉闸撤离点进入3分钟倒计时。",
    exit: "倒计时结束后从学校正门撤离，无人数限制；高价值物资队伍优先占正门两侧掩体。"
  },
  "safe-admin": {
    code: "SAFE-09",
    tags: ["高价值核心", "钥匙优先", "高风险"],
    entry: "从行政楼南侧或海洋楼方向进入，先确认行政楼大保险和拉闸点是否被占。",
    action: "开柜优先拿机密文件、显卡和贵重腕表，背包满了直接撤。",
    exit: "走行政楼南侧拉闸路线，接东侧林地撤离。"
  },
  "safe-ocean-yard": {
    code: "SAFE-10",
    tags: ["撤前补给", "边线安全", "低中风险"],
    entry: "从海洋楼外侧贴边靠近，留意东侧撤离点回头枪线。",
    action: "快速摸柜补现金和医疗包，不为了低价物资停留。",
    exit: "向东侧林地撤离或南门撤离二选一，按枪声少的方向走。"
  },
  "intel-ocean": {
    code: "ACT-05",
    tags: ["标杆行动", "校长办公室", "高额奖励"],
    entry: "从海洋楼南侧或湖心亭方向靠近，先确认行政楼和正门路线是否安全。",
    action: "在湖心亭接取标杆行动，推进并完成闪击校长办公室任务。",
    exit: "完成任务后领取丰厚奖励，按局势选择学校正门拉闸撤离或教工宿舍门口丢包撤离。"
  },
  "extract-south": {
    code: "EXT-05",
    tags: ["拉闸撤离", "3分钟倒计时", "无人数限制"],
    entry: "学校正门拉闸撤离点需要行政楼拉闸点和教学核心区拉闸点均完成后才会启动。",
    action: "双拉闸完成后进入3分钟倒计时，倒计时期间用烟雾和交叉火力守住正门入口。",
    exit: "倒计时结束后撤离，无人数限制；全队可一起撤，但不要集中站在同一条枪线上。"
  }
};

function rectFromPoint(point) {
  const defaultW = point.type === "safe" ? 6.6 : 5.3;
  const defaultH = point.type === "safe" ? 5.8 : 4.8;
  const percentW = typeof point.w === "string" && point.w.endsWith("%") ? Number.parseFloat(point.w) : defaultW;
  const percentH = typeof point.h === "string" && point.h.endsWith("%") ? Number.parseFloat(point.h) : defaultH;
  const width = Math.round((canvas.width * percentW) / 100);
  const height = Math.round((canvas.height * percentH) / 100);
  const centerX = Math.round((canvas.width * point.x) / 100);
  const centerY = Math.round((canvas.height * point.y) / 100);

  return {
    x: Math.max(0, centerX - Math.round(width / 2)),
    y: Math.max(0, centerY - Math.round(height / 2)),
    width: Math.min(width, canvas.width),
    height: Math.min(height, canvas.height)
  };
}

function isTargetColor(type, r, g, b) {
  if (type === "extract") return g > 86 && g > r * 1.08 && g > b * 1.02;
  if (type === "safe") return r > 112 && g > 84 && b < 135 && r > b * 1.35 && g > b * 1.18 && r > g * 0.72 && g > r * 0.52;
  if (type === "intel") return b > 88 && g > 64 && b > r * 1.12;
  if (type === "target") return r > 120 && g < 210 && b < 210 && r > g * 1.08 && r > b * 1.08;
  return false;
}

function brightenPixel(data, index, type) {
  if (type === "safe") {
    data[index] = Math.min(245, data[index] * 1.2 + 8);
    data[index + 1] = Math.min(225, data[index + 1] * 1.22 + 9);
    data[index + 2] = Math.min(120, data[index + 2] * 1.08 + 2);
    return;
  }

  if (type === "extract") {
    data[index] = Math.min(130, data[index] * 1.08 + 2);
    data[index + 1] = Math.min(235, data[index + 1] * 1.24 + 8);
    data[index + 2] = Math.min(160, data[index + 2] * 1.1 + 2);
    return;
  }

  if (type === "intel") {
    data[index] = Math.min(130, data[index] * 1.08 + 2);
    data[index + 1] = Math.min(215, data[index + 1] * 1.16 + 5);
    data[index + 2] = Math.min(245, data[index + 2] * 1.22 + 8);
    return;
  }

  data[index] = Math.min(238, data[index] * 1.18 + 8);
  data[index + 1] = Math.min(170, data[index + 1] * 1.08 + 2);
  data[index + 2] = Math.min(170, data[index + 2] * 1.08 + 2);
}

function drawBaseMap() {
  if (!mapImage.complete || !mapImage.naturalWidth) return;
  canvas.width = mapImage.naturalWidth;
  canvas.height = mapImage.naturalHeight;
  ctx.drawImage(mapImage, 0, 0);
}

function setMapPanel(panelId) {
  const nextPanel = mapSources[panelId] ? panelId : "guidePanel";
  if (nextPanel === currentMapPanel && mapImage.complete) {
    brightenMapIcons(activeFilter);
    return;
  }

  currentMapPanel = nextPanel;
  mapImage.src = mapSources[currentMapPanel];
}

function brightenMapIcons(type) {
  drawBaseMap();
  if (!type || type === "all") return;

  points
    .filter((point) => point.type === type)
    .forEach((point) => {
      const rect = rectFromPoint(point);
      const imageData = ctx.getImageData(rect.x, rect.y, rect.width, rect.height);
      const data = imageData.data;

      for (let i = 0; i < data.length; i += 4) {
        if (isTargetColor(type, data[i], data[i + 1], data[i + 2])) {
          brightenPixel(data, i, type);
        }
      }

      ctx.putImageData(imageData, rect.x, rect.y);
    });
}

function detectColorTypeAt(clientX, clientY) {
  if (!canvas.width || !canvas.height) return null;

  const bounds = canvas.getBoundingClientRect();
  const x = Math.round(((clientX - bounds.left) / bounds.width) * canvas.width);
  const y = Math.round(((clientY - bounds.top) / bounds.height) * canvas.height);
  const radius = 8;
  const sampleX = Math.max(0, x - radius);
  const sampleY = Math.max(0, y - radius);
  const sampleW = Math.min(canvas.width - sampleX, radius * 2 + 1);
  const sampleH = Math.min(canvas.height - sampleY, radius * 2 + 1);
  const imageData = ctx.getImageData(sampleX, sampleY, sampleW, sampleH);
  const scores = { extract: 0, safe: 0, intel: 0, target: 0 };

  for (let i = 0; i < imageData.data.length; i += 4) {
    const r = imageData.data[i];
    const g = imageData.data[i + 1];
    const b = imageData.data[i + 2];
    if (isTargetColor("extract", r, g, b)) scores.extract += 1;
    if (isTargetColor("safe", r, g, b)) scores.safe += 1;
    if (isTargetColor("intel", r, g, b)) scores.intel += 1;
    if (isTargetColor("target", r, g, b)) scores.target += 0.55;
  }

  const priority = { safe: 3, extract: 2, intel: 1, target: 0 };
  const winner = Object.entries(scores).sort((a, b) => b[1] - a[1] || priority[b[0]] - priority[a[0]])[0];
  return winner && winner[1] >= 4 ? winner[0] : null;
}

function nearestPointForType(type, clientX, clientY) {
  const bounds = canvas.getBoundingClientRect();
  const x = ((clientX - bounds.left) / bounds.width) * 100;
  const y = ((clientY - bounds.top) / bounds.height) * 100;
  const matches = points.filter((point) => point.type === type);

  return matches.reduce((nearest, point) => {
    const distance = Math.hypot(point.x - x, point.y - y);
    return !nearest || distance < nearest.distance ? { point, distance } : nearest;
  }, null)?.point;
}

function renderHotspots() {
  layer.innerHTML = points
    .map((point) => {
      const icon = point.icon || defaultIconByType[point.type];
      return `
        <button
          class="hotspot"
          data-id="${point.id}"
          data-type="${point.type}"
          type="button"
          aria-label="${point.title}"
          title="${point.title}"
          style="left:${point.x}%;top:${point.y}%;--spot-w:${point.w || "clamp(46px, 5vw, 68px)"};--spot-h:${point.h || "clamp(46px, 5vw, 68px)"};--spot-icon:url('assets/${icon}')"
        ></button>
      `;
    })
    .join("");
}

function selectIntel(id) {
  const item = points.find((point) => point.id === id) || overview;
  const tactical = tacticalPlans[item.id] || tacticalPlans.overview;

  fields.title.textContent = item.title;
  fields.type.textContent = labelForType(item.type);
  fields.status.textContent = item.status;
  fields.body.textContent = item.body;
  fields.risk.textContent = item.risk;
  fields.reward.textContent = item.reward;
  fields.threat.textContent = item.type === "target" ? "极高威胁" : item.risk.startsWith("4") ? "高威胁" : "中等威胁";
  fields.boardCode.textContent = tactical.code;
  fields.valueTag.textContent = tactical.tags[0];
  fields.timingTag.textContent = tactical.tags[1];
  fields.teamTag.textContent = tactical.tags[2];
  fields.entryPlan.textContent = tactical.entry;
  fields.actionPlan.textContent = tactical.action;
  fields.exitPlan.textContent = tactical.exit;

  document.querySelectorAll(".hotspot").forEach((button) => {
    button.classList.toggle("active", button.dataset.id === item.id);
  });
}

function applyFilter(type) {
  activeFilter = type;
  filters.forEach((button) => button.classList.toggle("active", button.dataset.filter === type));
  brightenMapIcons(type);

  if (type === "all") {
    selectIntel("overview");
    return;
  }

  const firstMatch = points.find((point) => point.type === type);
  if (firstMatch) {
    selectIntel(firstMatch.id);
  }
}

renderHotspots();
mapImage.addEventListener("load", () => {
  brightenMapIcons(activeFilter);
  selectIntel("overview");
});
mapImage.src = mapSources[currentMapPanel];

layer.addEventListener("click", (event) => {
  const button = event.target.closest(".hotspot");
  if (!button) return;

  const detectedType = detectColorTypeAt(event.clientX, event.clientY);
  const type = detectedType || button.dataset.type;
  applyFilter(type);

  if (type === button.dataset.type) {
    selectIntel(button.dataset.id);
    return;
  }

  const point = nearestPointForType(type, event.clientX, event.clientY);
  if (point) selectIntel(point.id);
});

canvas.addEventListener("click", (event) => {
  const type = detectColorTypeAt(event.clientX, event.clientY);
  if (!type) return;

  applyFilter(type);
  const point = nearestPointForType(type, event.clientX, event.clientY);
  if (point) selectIntel(point.id);
});

filters.forEach((button) => {
  button.addEventListener("click", () => applyFilter(button.dataset.filter));
});

interfaceTabs.forEach((button) => {
  button.addEventListener("click", () => {
    interfaceTabs.forEach((tab) => tab.classList.toggle("active", tab === button));
    interfacePanels.forEach((panel) => panel.classList.toggle("active", panel.id === button.dataset.panel));
    setMapPanel(button.dataset.panel);
  });
});

