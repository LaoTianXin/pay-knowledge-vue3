import wechat from '@/assets/images/wechat.jpg'
import sina from '@/assets/images/sina.jpg'

export const iconList: Footer.IIcon[] = [
  {
    iconClass: 'i-ic:baseline-wechat',
    img: wechat
  },
  {
    iconClass: 'i-bi:sina-weibo',
    img: sina
  }
]

export const infoList: Footer.IInfo[] = [
  {
    iconClass: 'i-bi:phone mr-2',
    title: '联系信息',
    infoDetailList: [
      {
        text: '邮箱：admin@wayearn.com',
        path: 'mailto:admin@wayearn.com'
      },
      {
        text: '电话：010-12345678'
      },
      {
        text: '地址：xx市xxx区xxx'
      }
    ]
  },
  {
    iconClass: 'i-ph:link-light',
    title: '友链信息',
    infoDetailList: [
      {
        text: '邮箱：admin@wayearn.com',
        path: 'mailto:admin@wayearn.com'
      },
      {
        text: '电话：010-12345678'
      }
    ]
  }
]

export const record: Footer.IRecord = {
  icp: '京ICP备12345678号',
  name: 'toimc',
  startYear: '2021',
  endYear: new Date().getFullYear()
}
