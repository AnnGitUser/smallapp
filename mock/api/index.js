
module.exports = [
  {
    method: ['get', 'post'],
    path: '/smallapp/mock/menuList.json',
    controller: function (req, res, next) {
      res.json({
        "code": 0,
        "data": {
            "sysModule": [
                {
                  "name": "数据采集",
                  "url": "/pages/datainfo/datainfo",
                  "imgUrl": "../../assets/images/menu4.png",
                  "type": 0 
                },
                {
                  "name": "视频监控",
                  "url": "/pages/video/video",
                  "imgUrl": "../../assets/images/menu5.png",
                  "type": 0 
                },
                {
                  "name": "远程控制",
                  "url": "/pages/tool/tool",
                  "imgUrl": "../../assets/images/menu6.png",
                  "type": 0 
                },
                {
                  "name": "设备管理",
                  "url": "/pages/index/index",
                  "imgUrl": "../../assets/images/menu7.png",
                  "type": 0 
                },
                {
                  "name": "预警管理",
                  "url": "/pages/index/index",
                  "imgUrl": "../../assets/images/menu8.png",
                  "type": 0 
                },
                {
                  "name": "问题管理",
                  "url": "/pages/index/index",
                  "imgUrl": "../../assets/images/menu9.png",
                  "type": 0 
                }
            ],
            "used": [
                  { 
                      "name": "水位查询",
                      "url": "/pages/waterask/waterask",
                      "imgUrl": "../../assets/images/menu9.png",
                      "type": 0
                  }
            ],
          "sjcj": [
            { 
                "name": "水位查询",
                "url": "/pages/waterask/waterask",
                "type": 0
            },
            { 
                "name": "雨量查询",
                "url": "/pages/index/index",
                "type": 0
            },
            { 
                "name": "排水量查询",
                "url": "/pages/index/index",
                "type": 0
            },
            { 
                "name": "水质查询",
                "url": "/pages/index/index",
                "type": 0
            }
          ],
          "spjk": [
            { 
                "name": "实时监控画面",
                "url": "/pages/videodetails/videodetails",
                "type": 0
            }
          ],
          "yckz": [
            { 
                "name": "设备远程控制",
                "url": "/pages/toolcontrol/toolcontrol",
                "type": 0
            }
          ],
          "sbgl": [
            { 
                "name": "设备台账",
                "url": "/pages/index/index",
                "type": 0
            },
            { 
                "name": "设备故障登记",
                "url": "/pages/index/index",
                "type": 0
            },
            { 
                "name": "设备故障查询",
                "url": "/pages/index/index",
                "type": 0
            }
          ],
          "yjgl": [
            { 
                "name": "预警查询",
                "url": "/pages/index/index",
                "type": 0
            },
            { 
                "name": "预警设置",
                "url": "/pages/index/index",
                "type": 0
            }
          ],
          "wtgl": [
            { 
                "name": "问题提交",
                "url": "/pages/index/index",
                "type": 0
            },
            { 
                "name": "问题查询",
                "url": "/pages/index/index",
                "type": 0
            }
          ]
        }
      }
      );
    }
  },
  {
    method: ['get', 'post'],
    path: '/smallapp/mock/waterLevelList.json',
    controller: function (req, res, next) {
      res.json({
        "code": 0,
        "data": [
            {
                "id": 1,
                "time": "2019-02-23 09:00:25",
                "type": "1#支流",
                "value": "0.03",
                "status": "关闭",
                "siteNo": '00001',
                "siteName": "琴亭湖1#支流",
                "siteType": "监控点",
                "testDevice": "1#超声波液位计",
                "height": "0.08",
                "longitude": 89.232445,
                "latitude": 198.172655,
                "address": "福建省福州市福大自动化科技有限公司",
                "foperator": "张三",
                "devList": [{
                    "devNo": "JCSB-YWJ-CSB-001",
                    "devName": "1#超声波液位计"
                },{
                    "devNo": "JCSB-YLJ-XXX-001",
                    "devName": "雨量测量器"
                }]
            },
            {
                "id": 2,
                "time": "2019-02-24 10:00:25",
                "type": "2#支流",
                "value": "0.04",
                "status": "异常",
                "siteNo": '00002',
                "siteName": "琴亭湖2#支流",
                "siteType": "监控点",
                "testDevice": "2#超声波液位计",
                "height": "1.05",
                "longitude": 89.232445,
                "latitude": 198.172655,
                "address": "福建省福州市福大自动化科技有限公司",
                "foperator": "张三",
                "devList": [{
                    "devNo": "JCSB-YWJ-CSB-002",
                    "devName": "2#超声波液位计"
                },{
                    "devNo": "JCSB-YLJ-XXX-002",
                    "devName": "雨量测量器"
                }]
            },
            {
                "id": 3,
                "time": "2019-02-25 09:00:25",
                "type": "3#支流",
                "value": "0.05",
                "status": "正常",
                "siteNo": '00003',
                "siteName": "琴亭湖3#支流",
                "siteType": "监控点",
                "testDevice": "3#超声波液位计",
                "height": "1.05",
                "longitude": 89.232445,
                "latitude": 198.172655,
                "address": "福建省福州市福大自动化科技有限公司",
                "foperator": "张三",
                "devList": [{
                    "devNo": "JCSB-YWJ-CSB-003",
                    "devName": "3#超声波液位计"
                },{
                    "devNo": "JCSB-YLJ-XXX-003",
                    "devName": "雨量测量器"
                }]
            },
            {
                "id": 4,
                "time": "2019-02-26 09:00:25",
                "type": "4#支流",
                "value": "0.06",
                "status": "正常",
                "siteNo": '00004',
                "siteName": "琴亭湖4#支流",
                "siteType": "监控点",
                "testDevice": "4#超声波液位计",
                "height": "1.05",
                "longitude": 89.232445,
                "latitude": 198.172655,
                "address": "福建省福州市福大自动化科技有限公司",
                "foperator": "张三",
                "devList": [{
                    "devNo": "JCSB-YWJ-CSB-004",
                    "devName": "4#超声波液位计"
                },{
                    "devNo": "JCSB-YLJ-XXX-004",
                    "devName": "雨量测量器"
                }]
            },
            {
                "id": 5,
                "time": "2019-02-27 09:00:25",
                "type": "5#支流",
                "value": "0.07",
                "status": "关闭",
                "siteNo": '00005',
                "siteName": "琴亭湖5#支流",
                "siteType": "监控点",
                "testDevice": "5#超声波液位计",
                "height": "1.05",
                "longitude": 89.232445,
                "latitude": 198.172655,
                "address": "福建省福州市福大自动化科技有限公司",
                "foperator": "张三",
                "devList": [{
                    "devNo": "JCSB-YWJ-CSB-005",
                    "devName": "5#超声波液位计"
                },{
                    "devNo": "JCSB-YLJ-XXX-005",
                    "devName": "雨量测量器"
                }]
            }]
        }
      );
    }
  },
  {
    method: ['get', 'post'],
    path: '/smallapp/mock/devMonitor',
    controller: function (req, res, next) {
        res.json({
            "code": 0,
            "data": [
                {
                    "devNo": "JCSB-YWJ-CSB-001",
                    "devName": "1#超声波液位计",
                    "alarm": [{
                        "id": 1,
                        "name": "PH调解泵变频器报警",
                        "status": "无值"
                    },{
                        "id": 2,
                        "name": "PH调解泵变频器报警",
                        "status": "告警"
                    }],
                    "product": [{
                        "id": 1,
                        "name": "指标1",
                        "value": "111",
                        "status": "正常"
                    },{
                        "id": 2,
                        "name": "指标2",
                        "value": "222",
                        "status": "异常"
                    }],
                    "devControl": [{
                        "id": 1,
                        "name": "遥控模式",
                        "status": "关"
                    },{
                        "id": 2,
                        "name": "1#开关手动启停",
                        "status": "关"
                    },{
                        "id": 3,
                        "name": "2#开关手动启停",
                        "status": "关"
                    }]
                },
                {
                    "devNo": "JCSB-YWJ-CSB-002",
                    "devName": "2#超声波液位计",
                    "alarm": [{
                        "id": 1,
                        "name": "PH调解泵变频器报警2",
                        "status": "无值"
                    },{
                        "id": 2,
                        "name": "PH调解泵变频器报警2",
                        "status": "告警"
                    }],
                    "product": [{
                        "id": 1,
                        "name": "指标1",
                        "value": "333",
                        "status": "正常"
                    },{
                        "id": 2,
                        "name": "指标2",
                        "value": "444",
                        "status": "异常"
                    }],
                    "devControl": [{
                        "id": 1,
                        "name": "遥控模式2",
                        "status": "关"
                    },{
                        "id": 2,
                        "name": "1#开关手动启停",
                        "status": "关"
                    },{
                        "id": 3,
                        "name": "2#开关手动启停",
                        "status": "关"
                    }]
                }
            ]
        });
    }
  }
]
