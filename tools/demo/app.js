//app.js
App({
    onLaunch: function() {
        wx.cloud.init({
            traceUser: true
        });
        wx.getSystemInfo({
            success: e => {
                this.globalData.statusBar = e.statusBarHeight;
                let capsule = wx.getMenuButtonBoundingClientRect();
                if (capsule) {
                    this.globalData.custom = capsule;
                    this.globalData.customBar =
                        capsule.bottom + capsule.top - e.statusBarHeight;
                } else {
                    this.globalData.customBar = e.statusBarHeight + 50;
                }
            }
        });
    },
    globalData: {
        tabBar: {
            // 当前索引
            current: 3,
            // 字体颜色
            color: '#b4bbc8',
            // 字体选中颜色
            selectedColor: '#ff8800',
            // 背景颜色
            backgroundColor: '#fff',
            // 是否需要中间凸起按钮
            hump: false,
            // 固定在底部
            isFixed: true,
            // 角标字体颜色
            badgeColor: '#fff',
            // 角标背景颜色
            badgeBgColor: 'f35352',
            // 去掉顶部细线
            unlined: false,
            // tabbar列表
            list: [{
                    pagePath: '/pages/index/index',
                    text: '基础',
                    icon: 'ani-icon-basic',
                    className: 'menu-item',
                    selectedColor: '#ff8800'
                },
                {
                    pagePath: '/pages/index/index',
                    text: '组件',
                    icon: 'ani-icon-component',
                    selectedColor: '#ff8800',
                    className: 'menu-item'
                },
                {
                    pagePath: '/pages/index/index',
                    text: '解决方案',
                    icon: 'ani-icon-solution',
                    selectedColor: '#ff8800',
                    className: 'menu-item'
                },
                {
                    pagePath: '/pages/index/index',
                    text: '关于',
                    icon: 'ani-icon-person',
                    selectedColor: '#ff8800',
                    className: 'menu-item'
                }
            ]
        },
        userInfo: null,
        auth: 1
    }
});