declare namespace Footer {
  export type iconClass = string
  export interface IIcon {
    iconClass: iconClass
    img: string
  }

  export interface IInfoDetail {
    text: string
    path?: string
  }

  export interface IInfo {
    title: string
    iconClass: iconClass
    infoDetailList: IInfoDetail[]
  }

  export interface IRecord {
    name: string
    startYear: string | number
    endYear: string | number
    icp: string
  }
}

declare namespace Nav {
  export interface INav {
    name: string
    path: string
  }
}

declare namespace Swiper {
  export interface ISwiper {
    title: string
    subTitile: string
    img: string
  }
}

declare namespace Card {
  export type ImageType = 'default' | 'rounded' | 'avatar'
}
