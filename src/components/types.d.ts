declare interface GenericType<T> {
  items: T[]
  selectedItem?: T
}

declare namespace Footer {
  export type iconClass = IconEnum
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
    title?: string
    subTitile?: string
    img: string
  }
}

declare namespace Card {
  export type ImageType = 'default' | 'rounded' | 'avatar'
}

declare namespace Member {
  export interface UserRightsItemType {
    name: string
    path?: string
    value: string | boolean | number
  }

  export interface UserRightsType {
    name: string
    rights: UserRightsItemType[]
    price: number
  }

  export interface PartnerType {
    name: string
    desc: string
    image?: string
  }
}
