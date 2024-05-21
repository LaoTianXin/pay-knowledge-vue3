import wechat from '@/assets/images/wechat.jpg'
import sina from '@/assets/images/sina.jpg'

import { IconEnum } from '@/enum/IconEnum'

export const iconList: Footer.IIcon[] = [
  {
    iconClass: IconEnum.IcoWechat,
    img: wechat
  },
  {
    iconClass: IconEnum.IcoSina,
    img: sina
  }
]

export const infoList: Footer.IInfo[] = [
  {
    iconClass: IconEnum.IcoPhone,
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
    iconClass: IconEnum.IcoLink,
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

export const navList: Nav.INav[] = [
  {
    name: '产品',
    path: '/'
  },
  {
    name: '社区',
    path: 'https://www.imooc.com'
  },
  {
    name: '学习',
    path: '/study'
  },
  {
    name: '关于',
    path: '/about'
  }
]
