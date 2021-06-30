/* eslint-disable */
// prettier-ignore
export const pagesPath = {
  accelarator: {
    $url: (url?: { hash?: string }) => ({ pathname: '/accelarator' as const, hash: url?.hash })
  },
  company: {
    $url: (url?: { hash?: string }) => ({ pathname: '/company' as const, hash: url?.hash })
  },
  contact: {
    $url: (url?: { hash?: string }) => ({ pathname: '/contact' as const, hash: url?.hash })
  },
  data: {
    $url: (url?: { hash?: string }) => ({ pathname: '/data' as const, hash: url?.hash })
  },
  hamburgersteak: {
    $url: (url?: { hash?: string }) => ({ pathname: '/hamburgersteak' as const, hash: url?.hash })
  },
  message: {
    $url: (url?: { hash?: string }) => ({ pathname: '/message' as const, hash: url?.hash })
  },
  news: {
    $url: (url?: { hash?: string }) => ({ pathname: '/news' as const, hash: url?.hash })
  },
  recruit: {
    $url: (url?: { hash?: string }) => ({ pathname: '/recruit' as const, hash: url?.hash })
  },
  $url: (url?: { hash?: string }) => ({ pathname: '/' as const, hash: url?.hash })
}

// prettier-ignore
export type PagesPath = typeof pagesPath

// prettier-ignore
export const staticPath = {
  css: {
    style_scss: '/css/style.scss',
    swiper_css: '/css/swiper.css'
  },
  img: {
    accelarator: {
      $169_earth_jpg: '/img/accelarator/169_earth.jpg',
      $169_hands_jpg: '/img/accelarator/169_hands.jpg',
      $169_light_jpg: '/img/accelarator/169_light.jpg',
      agri_jpg: '/img/accelarator/agri.jpg',
      back_jpg: '/img/accelarator/back.jpg',
      bio_jpg: '/img/accelarator/bio.jpg',
      dummy_png: '/img/accelarator/dummy.png',
      food_jpg: '/img/accelarator/food.jpg',
      hardware_jpg: '/img/accelarator/hardware.jpg',
      header_en_mobile_jpg: '/img/accelarator/header_en_mobile.jpg',
      header_en_pc_jpg: '/img/accelarator/header_en_pc.jpg',
      header_jp_mobile_jpg: '/img/accelarator/header_jp_mobile.jpg',
      header_jp_pc_jpg: '/img/accelarator/header_jp_pc.jpg',
      header_tw_mobile_jpg: '/img/accelarator/header_tw_mobile.jpg',
      header_tw_pc_jpg: '/img/accelarator/header_tw_pc.jpg',
      icon: {
        gform_png: '/img/accelarator/icon/gform.png',
        marketing_png: '/img/accelarator/icon/marketing.png',
        poc_png: '/img/accelarator/icon/poc.png',
        slacklogo_png: '/img/accelarator/icon/slacklogo.png',
        zoomlogo_png: '/img/accelarator/icon/zoomlogo.png'
      },
      judge1_jpg: '/img/accelarator/judge1.jpg',
      judge2_jpg: '/img/accelarator/judge2.jpg',
      judge3_jpg: '/img/accelarator/judge3.jpg',
      judge4_jpg: '/img/accelarator/judge4.jpg',
      judge5_jpg: '/img/accelarator/judge5.jpg',
      judge6_jpg: '/img/accelarator/judge6.jpg',
      merit01_png: '/img/accelarator/merit01.png',
      merit02_jpg: '/img/accelarator/merit02.jpg',
      merit03_jpg: '/img/accelarator/merit03.jpg',
      merit04_jpg: '/img/accelarator/merit04.jpg',
      merit05_jpg: '/img/accelarator/merit05.jpg',
      merit06_jpg: '/img/accelarator/merit06.jpg',
      schedule_png: '/img/accelarator/schedule.png'
    },
    burger: {
      en_1920x1080_burger_jpg: '/img/burger/en_1920x1080-burger.jpg',
      jp_1920x1080_burger_jpg: '/img/burger/jp_1920x1080-burger.jpg',
      makuake_logo_jpg: '/img/burger/makuake-logo.jpg',
      makuake_pr_jpg: '/img/burger/makuake-pr.jpg',
      makuake_top_jpg: '/img/burger/makuake-top.jpg',
      tw_1920x1080_burger_jpg: '/img/burger/tw_1920x1080-burger.jpg'
    },
    company: {
      c_jpg: '/img/company/c.jpg',
      factory_jpg: '/img/company/factory.jpg',
      naric_jpg: '/img/company/naric.jpg',
      r_01_jpg: '/img/company/r-01.jpg',
      r_02_jpg: '/img/company/r-02.jpg',
      r_03_jpg: '/img/company/r-03.jpg',
      supermarket_jpg: '/img/company/supermarket.jpg',
      world_png: '/img/company/world.png'
    },
    datapage: {
      carousel: {
        chicken_png: '/img/datapage/carousel/chicken.png',
        harami_png: '/img/datapage/carousel/harami.png',
        karubi_png: '/img/datapage/carousel/karubi.png'
      },
      data: {
        bg_png: '/img/datapage/data/bg.png'
      },
      footer: {
        dish_chicken_png: '/img/datapage/footer/dish_chicken.png',
        dish_harami_png: '/img/datapage/footer/dish_harami.png',
        dish_karubi_png: '/img/datapage/footer/dish_karubi.png'
      },
      fv: {
        cyber_chicken_gif: '/img/datapage/fv/cyber_chicken.gif',
        cyber_chicken_2_gif: '/img/datapage/fv/cyber_chicken_2.gif',
        cyber_chicken_light_gif: '/img/datapage/fv/cyber_chicken_light.gif',
        logo_png: '/img/datapage/fv/logo.png'
      },
      lottie: {
        icon_co2_json: '/img/datapage/lottie/icon_co2.json',
        icon_energy_json: '/img/datapage/lottie/icon_energy.json',
        icon_land_json: '/img/datapage/lottie/icon_land.json',
        icon_water_json: '/img/datapage/lottie/icon_water.json'
      }
    },
    favicon_32x32_png: '/img/favicon-32x32.png',
    favicon_64x64_png: '/img/favicon-64x64.png',
    gyudon: {
      gyudon_jpg: '/img/gyudon/gyudon.jpg'
    },
    hamburgersteak: {
      makuake_jpg: '/img/hamburgersteak/makuake.jpg',
      patty_jpg: '/img/hamburgersteak/patty.jpg',
      recipe1_jpg: '/img/hamburgersteak/recipe1.jpg',
      recipe2_jpg: '/img/hamburgersteak/recipe2.jpg',
      recipe3_jpg: '/img/hamburgersteak/recipe3.jpg'
    },
    header: {
      logo_png: '/img/header/logo.png'
    },
    index: {
      accelarator_en_jpg: '/img/index/accelarator-en.jpg',
      accelarator_jp_jpg: '/img/index/accelarator-jp.jpg',
      accelarator_tw_jpg: '/img/index/accelarator-tw.jpg',
      burger_1920x1080_en_jpg: '/img/index/burger_1920x1080-en.jpg',
      burger_1920x1080_jp_jpg: '/img/index/burger_1920x1080-jp.jpg',
      burger_1920x1080_tw_jpg: '/img/index/burger_1920x1080-tw.jpg',
      chicken_1920x1080_en_jpg: '/img/index/chicken_1920x1080-en.jpg',
      chicken_1920x1080_jp_jpg: '/img/index/chicken_1920x1080-jp.jpg',
      chicken_1920x1080_tw_jpg: '/img/index/chicken_1920x1080-tw.jpg',
      en_1920x1080_gyudon_jpg: '/img/index/en_1920x1080-gyudon.jpg',
      en_web_ogp_1200x630_gyudon_jpg: '/img/index/en_web-ogp-1200x630-gyudon.jpg',
      en_web_top_mobile_720x580_gyudon_jpg: '/img/index/en_web-top-mobile-720x580-gyudon.jpg',
      en_web_top_pc_1920x945_jpg: '/img/index/en_web-top-pc-1920x945.jpg',
      euglena_jpg: '/img/index/euglena.jpg',
      futurefoodtech_png: '/img/index/futurefoodtech.png',
      hamburger_steak_web_ogp_1200x630_jpg: '/img/index/hamburger-steak_web-ogp-1200x630.jpg',
      hamburger_steak_web_top_mobile_720x580_jpg: '/img/index/hamburger-steak_web-top-mobile-720x580.jpg',
      hamburger_steak_web_top_pc_1920x945_jpg: '/img/index/hamburger-steak_web-top-pc-1920x945.jpg',
      hamburgersteak_1920x1080_en_jpg: '/img/index/hamburgersteak_1920x1080-en.jpg',
      hamburgersteak_1920x1080_jp_jpg: '/img/index/hamburgersteak_1920x1080-jp.jpg',
      hamburgersteak_1920x1080_tw_jpg: '/img/index/hamburgersteak_1920x1080-tw.jpg',
      jp_1920x1080_gyudon_jpg: '/img/index/jp_1920x1080-gyudon.jpg',
      jp_web_ogp_1200x630_gyudon_jpg: '/img/index/jp_web-ogp-1200x630-gyudon.jpg',
      jp_web_top_mobile_720x580_gyudon_jpg: '/img/index/jp_web-top-mobile-720x580-gyudon.jpg',
      jp_web_top_pc_1920x945_jpg: '/img/index/jp_web-top-pc-1920x945.jpg',
      sdgs: {
        E_WEB_Goal_02_png: '/img/index/sdgs/E-WEB-Goal-02.png',
        E_WEB_Goal_09_png: '/img/index/sdgs/E-WEB-Goal-09.png',
        E_WEB_Goal_13_png: '/img/index/sdgs/E-WEB-Goal-13.png',
        E_WEB_Goal_15_png: '/img/index/sdgs/E-WEB-Goal-15.png',
        E_WEB_Goal_17_png: '/img/index/sdgs/E-WEB-Goal-17.png',
        E_SDG_logo_UN_emblem_horizontal_trans_WEB_png: '/img/index/sdgs/E_SDG_logo_UN_emblem_horizontal_trans_WEB.png'
      },
      tw_1920x1080_gyudon_jpg: '/img/index/tw_1920x1080-gyudon.jpg',
      tw_web_ogp_1200x630_gyudon_jpg: '/img/index/tw_web-ogp-1200x630-gyudon.jpg',
      tw_web_top_mobile_720x580_gyudon_jpg: '/img/index/tw_web-top-mobile-720x580-gyudon.jpg',
      tw_web_top_pc_1920x945_jpg: '/img/index/tw_web-top-pc-1920x945.jpg',
      tw_yakinikulike_jpg: '/img/index/tw_yakinikulike.jpg',
      yakiniku_1920x1080_en_jpg: '/img/index/yakiniku_1920x1080-en.jpg',
      yakiniku_1920x1080_jp_jpg: '/img/index/yakiniku_1920x1080-jp.jpg',
      yakiniku_1920x1080_tw_jpg: '/img/index/yakiniku_1920x1080-tw.jpg'
    },
    message: {
      kou_jpg: '/img/message/kou.jpg'
    },
    ogp_1200x630_jpg: '/img/ogp-1200x630.jpg',
    shoplink: {
      ec_a_240_png: '/img/shoplink/ec_a_240.png',
      ec_n_240_png: '/img/shoplink/ec_n_240.png',
      ec_y_240_png: '/img/shoplink/ec_y_240.png'
    },
    topNews: {
      facebook_png: '/img/topNews/facebook.png',
      instagram_png: '/img/topNews/instagram.png',
      twitter_png: '/img/topNews/twitter.png'
    },
    yakiniku: {
      recipe_jpg: '/img/yakiniku/recipe.jpg'
    }
  }
} as const

// prettier-ignore
export type StaticPath = typeof staticPath
