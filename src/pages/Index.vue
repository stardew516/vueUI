<template>
  <div class="content">
    <panel>
      <div slot="title" class="title">基础组件</div>
      <cell v-for="(item, idx) in cell1" :key="item.content" :target="item.target" :icon-pic="item.pic"
            :text-content="item.content"
            :link="item.link"
            :first="idx===0"
            @item-tap="transPage"></cell>
    </panel>

    <panel>
      <div slot="title" class="title">布局</div>
      <cell v-for="(item, idx) in cell2" :key="item.content" :target="item.target" :icon-pic="item.pic"
            :text-content="item.content"
            :link="item.link"
            :first="idx===0"
            @item-tap="transPage"></cell>
    </panel>

    <panel>
      <div slot="title" class="title">表单组件</div>
      <cell v-for="(item, idx) in cell3" :key="item.content" :target="item.target" :icon-pic="item.pic"
            :text-content="item.content"
            :link="item.link"
            :first="idx===0"
            @item-tap="transPage"></cell>
    </panel>

    <panel>
      <div slot="title" class="title">导航组件</div>
      <cell v-for="(item, idx) in cell4" :key="item.content" :target="item.target" :icon-pic="item.pic"
            :text-content="item.content"
            :link="item.link"
            :first="idx===0"
            @item-tap="transPage"></cell>
    </panel>

    <panel>
      <div slot="title" class="title">操作提示组件</div>
      <cell v-for="(item, idx) in cell5" :key="item.content" :target="item.target" :icon-pic="item.pic"
            :text-content="item.content"
            :link="item.link"
            :first="idx===0"
            @item-tap="transPage"></cell>
    </panel>

    <panel>
      <div slot="title" class="title">其它</div>
      <cell v-for="(item, idx) in cell6" :key="item.content" :target="item.target" :icon-pic="item.pic"
            :text-content="item.content"
            :link="item.link"
            :first="idx===0"
            @item-tap="transPage"></cell>
    </panel>
  </div>
</template>

<script>
  import Cell from '../components/Cell.vue'
  import Panel from '../components/Panel.vue'
  export default {
    components: {
      Cell,
      Panel
    },
    data () {
      return {
        first: true,
        cell1: [
          {
            link: '../demo/buttons.html',
            pic: 'icon-buttons',
            content: 'Button 按钮',
            target: '_blank'
          },
          {
            link: '../demo/icon.html',
            pic: 'icon-icon',
            content: 'Icon 图标',
            target: '_blank'
          },
          {
            link: '../demo/loadmore.html',
            pic: 'icon-loadmore',
            content: 'Loadmore 加载更多',
            target: '_blank'
          },
          {
            link: '../demo/tag.html',
            pic: 'icon-tag',
            content: 'Tag 标记',
            target: '_blank'
          }
        ],
        cell2: [
          {
            link: '../demo/cell.html',
            pic: 'icon-cell',
            content: 'Cell 列表',
            target: '_blank'
          },
          {
            link: '../demo/grid.html',
            pic: 'icon-grid',
            content: 'Grid 宫格',
            target: '_blank'
          },
          {
            link: '../demo/layout.html',
            pic: 'icon-layout',
            content: 'Layout 布局',
            target: '_blank'
          },
          {
            link: '../demo/panel.html',
            pic: 'icon-panel',
            content: 'Panel 面板',
            target: '_blank'
          },
          {
            link: '../demo/folder.html',
            pic: 'icon-folder',
            content: 'Folder 折叠面板',
            target: '_blank'
          }
        ],
        cell3: [
          {
            link: '../demo/inputs.html',
            pic: 'icon-inputs',
            content: 'Input 输入框',
            target: '_blank'
          },
          {
            link: '../demo/inputNum.html',
            pic: 'icon-inputNum',
            content: 'InputNum 计数器',
            target: '_blank'
          },
          {
            link: '../demo/progressBar.html',
            pic: 'icon-progress',
            content: 'ProgressBar 进度条',
            target: '_blank'
          },
          {
            link: '../demo/rate.html',
            pic: 'icon-star',
            content: 'Rate 星级条',
            target: '_blank'
          },
          {
            link: '../demo/switchs.html',
            pic: 'icon-switchs',
            content: 'Switch 开关',
            target: '_blank'
          }
        ],
        cell4: [
          {
            link: '../demo/noticebar.html',
            pic: 'icon-notice',
            content: 'NoticeBar通知条',
            target: '_blank'
          },
          {
            link: '../demo/popups.html',
            pic: 'icon-popups',
            content: 'PopUps 弹出层',
            target: '_blank'
          },
          {
            link: '../demo/stepbar.html',
            pic: 'icon-step',
            content: 'Stepbar 步骤条',
            target: '_blank'
          },
          {
            link: '../demo/tabbar.html',
            pic: 'icon-tabbar',
            content: 'Tabbar 标签',
            target: '_blank'
          }
        ],
        cell5: [
          {
            link: '../demo/actionsheet.html',
            pic: 'icon-actionsheet',
            content: 'ActionSheet 操作盘',
            target: '_blank'
          },
          {
            link: '../demo/dialog.html',
            pic: 'icon-dialog',
            content: 'Dialog 弹窗',
            target: '_blank'
          },
          {
            link: '../demo/toast.html',
            pic: 'icon-toast',
            content: 'Toast 提示框',
            target: '_blank'
          },
          {
            link: '../demo/toptips.html',
            pic: 'icon-toptips',
            content: 'Toptips 提示条',
            target: '_blank'
          }
        ],
        cell6: [
          {
            link: '../demo/page.html',
            pic: 'icon-page',
            content: 'Page 分页',
            target: '_blank'
          },
          {
            link: '../demo/searchbar.html',
            pic: 'icon-search',
            content: 'SearchBar 搜索条',
            target: '_blank'
          }
        ]
      }
    },
    methods: {
      transPage: function (link) {
        console.log(link)
        window.location.href = link
      }
    },
    events: {
      'transPage': function (link) {
        console.log(link)
        window.location.href = 'link'
      }
    }
  }
</script>

<style scoped>
  @import '../static/common.scss';
</style>
