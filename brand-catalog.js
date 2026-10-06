(function () {
  var regionalUrls = {
    'Zara': 'https://www.zara.com/de/',
    'H&M': 'https://www2.hm.com/de_de/index.html',
    'Uniqlo': 'https://www.uniqlo.com/de/de/',
    'COS': 'https://www.cos.com/en-de/',
    'Massimo Dutti': 'https://www.massimodutti.com/de/',
    'Mango': 'https://shop.mango.com/de/de',
    'Nike': 'https://www.nike.com/de/',
    'Adidas': 'https://www.adidas.de/',
    'New Balance': 'https://www.newbalance.de/',
    'Crocs': 'https://www.crocs.de/',
    'SKIMS': 'https://skims.com/en-de',
    'Alo Yoga': 'https://www.aloyoga.com/en-de',
    'Gymshark': 'https://de.gymshark.com/',
    'Jacquemus': 'https://www.jacquemus.com/en-de',
    'Next.pl': 'https://www.next.pl/',
    'On Running': 'https://www.on.com/de-de/',
    'Salomon': 'https://www.salomon.com/de-de',
    'ASOS': 'https://www.asos.com/de/',
    'Zalando': 'https://www.zalando.de/',
    'Farfetch': 'https://www.farfetch.com/de/',
    'IKEA': 'https://www.ikea.com/de/de/',
    'Zara Home': 'https://www.zarahome.com/de/',
    'H&M Home': 'https://www2.hm.com/de_de/home.html',
    'Tefal': 'https://www.tefal.de/',
    'Villeroy & Boch': 'https://www.villeroy-boch.de/',
    'KitchenAid': 'https://www.kitchenaid.de/',
    'Smeg': 'https://www.smeg.com/de',
    'Kärcher': 'https://www.kaercher.com/de/',
    'De’Longhi': 'https://www.delonghi.com/de-de',
    'Minotti': 'https://www.minotti.com/de',
    'MOHD': 'https://shop.mohd.it/de/',
    'Westwing': 'https://www.westwing.de/',
    'Connox': 'https://www.connox.de/',
    'Nordic Nest': 'https://www.nordicnest.de/',
    'AmbienteDirect': 'https://www.ambientedirect.com/',
    'Apple': 'https://www.apple.com/de/',
    'Sony': 'https://www.sony.de/',
    'PlayStation': 'https://www.playstation.com/de-de/',
    'Dyson': 'https://www.dyson.de/',
    'DJI': 'https://www.dji.com/de',
    'GoPro': 'https://gopro.com/de/de/',
    'Insta360': 'https://www.insta360.com/de/',
    'Bosch': 'https://www.bosch.de/',
    'Siemens': 'https://www.siemens.com/de/de.html',
    'Marshall': 'https://www.marshall.com/de/de',
    'Bose': 'https://www.bose.de/',
    'Garmin': 'https://www.garmin.com/de-DE/',
    'Nintendo': 'https://www.nintendo.com/de-de/',
    'Philips': 'https://www.philips.de/',
    'LG': 'https://www.lg.com/de/',
    'JBL': 'https://de.jbl.com/',
    'Samsung': 'https://www.samsung.com/de/',
    'Google Store': 'https://store.google.com/de/',
    'Chanel': 'https://www.chanel.com/de/',
    'Dior': 'https://www.dior.com/de_de',
    'Lancôme': 'https://www.lancome.de/',
    'Estée Lauder': 'https://www.esteelauder.de/',
    'Clinique': 'https://www.clinique.de/',
    'Clarins': 'https://www.clarins.de/',
    'Shiseido': 'https://www.shiseido.de/',
    'Guerlain': 'https://www.guerlain.com/de/de-de',
    'Yves Saint Laurent Beauty': 'https://www.yslbeauty.de/',
    'Giorgio Armani Beauty': 'https://www.armanibeauty.de/',
    'La Roche-Posay': 'https://www.larocheposay.de/',
    'Vichy': 'https://www.vichy.de/',
    'Avène': 'https://www.eau-thermale-avene.de/',
    'Bioderma': 'https://www.bioderma.de/',
    'Kérastase': 'https://www.kerastase.de/',
    'Olaplex': 'https://olaplex.de/',
    'L’Oréal Professionnel': 'https://www.lorealprofessionnel.de/',
    'MAC Cosmetics': 'https://www.maccosmetics.de/',
    'Charlotte Tilbury': 'https://www.charlottetilbury.com/de',
    'The Ordinary': 'https://theordinary.com/de-de',
    'makeup.lt': 'https://makeup.lt/',
    'LEGO': 'https://www.lego.com/de-de',
    'Barbie / Mattel': 'https://shopping.mattel.com/de-de',
    'Fisher-Price': 'https://shopping.mattel.com/de-de/pages/fisher-price',
    'Hasbro': 'https://shop.hasbro.com/de-de',
    'Playmobil': 'https://www.playmobil.com/de-de/',
    'Reima': 'https://www.reima.com/de',
    'Zara Kids': 'https://www.zara.com/de/de/kids-l1.html',
    'H&M Kids': 'https://www2.hm.com/de_de/kinder.html',
    'Next Kids': 'https://www.next.pl/',
    'Cybex': 'https://www.cybex-online.com/de/de',
    'Bugaboo': 'https://www.bugaboo.com/de-de',
    'Stokke': 'https://www.stokke.com/DEU/de-de/',
    'Doona': 'https://www.doona.com/de/',
    'Maxi-Cosi': 'https://www.maxi-cosi.de/c/',
    'Britax Römer': 'https://www.britax-roemer.de/',
    'Baby-Walz': 'https://www.baby-walz.de/',
    'BabyOne': 'https://www.babyone.de/',
    'Babypark': 'https://www.babypark.de/',
    'Kids-world': 'https://www.kids-world.com/de-de/',
    'Fender': 'https://www.fender.com/de-DE/start',
    'Gibson': 'https://www.gibson.com/de-DE/',
    'Yamaha': 'https://de.yamaha.com/',
    'Roland': 'https://www.roland.com/de/',
    'Tamiya': 'https://www.tamiya.de/',
    'Revell': 'https://revell.de/',
    'Bandai Hobby': 'https://de.bandainamcoent.eu/',
    'Warhammer': 'https://www.warhammer.com/de-DE/home',
    'Thomann': 'https://www.thomann.de/de/',
    'CandyOnline': 'https://candyonline.nl/de/',
    'My American Market': 'https://www.myamericanmarket.com/de/',
    'NikanKitchen': 'https://www.nikankitchen.com/de/',
    'Sugafari': 'https://www.sugafari.com/de',
    'AmericanCandy.de': 'https://www.americancandy.de/',
    'Atomic': 'https://www.atomic.com/de-de',
    'Rossignol': 'https://www.rossignol.com/de-de/',
    'Fischer': 'https://www.fischersports.com/de_de/',
    'HEAD': 'https://www.head.com/de_DE/',
    'Columbia': 'https://www.columbiasportswear.de/',
    'The North Face': 'https://www.thenorthface.de/de-de',
    'Adidas Terrex': 'https://www.adidas.de/terrex',
    'Helly Hansen': 'https://www.hellyhansen.com/de_de/',
    'Timberland': 'https://www.timberland.de/de-de',
    'Merrell': 'https://www.merrell.com/DE/de_DE/home',
    'Oakley': 'https://www.oakley.com/de-de',
    'Burton': 'https://www.burton.com/de/de/home',
    'Nitro': 'https://nitrosnowboards.com/de/',
    'Jones': 'https://www.jonessnowboards.com/de-de/',
    'CAPiTA': 'https://capitasnowboarding.com/de',
    'Union': 'https://unionbindingcompany.com/de/',
    'ThirtyTwo': 'https://eu.thirtytwo.com/de/',
    'DC Shoes': 'https://www.dcshoes.de/',
    'Snowleader': 'https://www.snowleader.de/de/',
    'Bergfreunde': 'https://www.bergfreunde.de/',
    'Ekosport': 'https://www.ekosport.de/',
    'Sport Conrad': 'https://www.sport-conrad.com/'
  };

  /* Individual optical corrections. Brand artwork often carries very different
     amounts of transparent padding, so equal CSS boxes do not look equally
     large. Every catalogue brand has been reviewed in the rendered grid. */
  var brandScales = {
    'Zara': 1, 'H&M': 1, 'Uniqlo': 1.08, 'COS': 0.85,
    'Massimo Dutti': 1, 'Mango': 1, 'Nike': 1, 'Adidas': 1.08,
    'New Balance': 1.05, 'Crocs': 0.95, 'SKIMS': 0.95, 'Alo Yoga': 0.95,
    'Gymshark': 1.62, 'Jacquemus': 1.62, 'Next.pl': 1.62,
    'On Running': 0.9, 'Salomon': 1.08, 'ASOS': 0.9,
    'Zalando': 0.92, 'Farfetch': 1.05,

    'IKEA': 1.08, 'Zara Home': 1, 'H&M Home': 1, 'Tefal': 0.88,
    'Villeroy & Boch': 1.65, 'KitchenAid': 1.08, 'Smeg': 1.12,
    'Kärcher': 0.95, 'De’Longhi': 2.4, 'Minotti': 1.45,
    'MOHD': 1.45, 'Westwing': 1.18, 'Connox': 1.45,
    'Nordic Nest': 1.45, 'AmbienteDirect': 1.45,

    'Apple': 1.08, 'Sony': 1, 'PlayStation': 1.12, 'Dyson': 1.05,
    'DJI': 1.28, 'GoPro': 1, 'Insta360': 1.12, 'Bosch': 1,
    'Siemens': 1.05, 'Marshall': 1, 'Bose': 1, 'Garmin': 2.35,
    'Nintendo': 1.08, 'Philips': 0.92, 'LG': 2.05, 'JBL': 1.45,
    'Samsung': 1.05, 'Google Store': 1,

    'Chanel': 1.12, 'Dior': 0.95, 'Lancôme': 1, 'Estée Lauder': 1.08,
    'Clinique': 0.98, 'Clarins': 1, 'Shiseido': 1, 'Guerlain': 1,
    'Yves Saint Laurent Beauty': 1.02, 'Giorgio Armani Beauty': 1.15,
    'La Roche-Posay': 1.23, 'Vichy': 2, 'Avène': 2.1,
    'Bioderma': 1, 'Kérastase': 1.22, 'Olaplex': 1.42,
    'L’Oréal Professionnel': 1, 'MAC Cosmetics': 1,
    'Charlotte Tilbury': 1.45, 'The Ordinary': 1.42, 'makeup.lt': 1.45,

    'LEGO': 1.22, 'Barbie / Mattel': 1.08, 'Fisher-Price': 1.08,
    'Hasbro': 1.18, 'Playmobil': 1.12, 'Reima': 1.42,
    'Zara Kids': 1, 'H&M Kids': 1, 'Next Kids': 1.42,
    'Cybex': 1.42, 'Bugaboo': 1.42, 'Stokke': 1.42,
    'Doona': 1.45, 'Maxi-Cosi': 1.42, 'Britax Römer': 1.08,
    'Baby-Walz': 1.42, 'BabyOne': 1.5, 'Babypark': 1.72,
    'Kids-world': 1.42,

    'Fender': 1.05, 'Gibson': 1.42, 'Yamaha': 1.16, 'Roland': 1,
    'Tamiya': 1.3, 'Revell': 1.42, 'Bandai Hobby': 1.42,
    'Warhammer': 1.42, 'Thomann': 1.42,

    'CandyOnline': 1.45, 'My American Market': 1.45,
    'NikanKitchen': 1.45, 'Sugafari': 1.45, 'AmericanCandy.de': 1.45,

    'Atomic': 1.42, 'Rossignol': 1.42, 'Fischer': 1.22, 'HEAD': 1.42,
    'Columbia': 1.42, 'The North Face': 1.15, 'Adidas Terrex': 1.08,
    'Helly Hansen': 1.28, 'Timberland': 0.95, 'Merrell': 1.42,
    'Oakley': 0.92, 'Burton': 1.08, 'Nitro': 1.42,
    'Jones': 1.42, 'CAPiTA': 1.42, 'Union': 1.42,
    'ThirtyTwo': 1.42, 'DC Shoes': 1.42, 'Snowleader': 1.42,
    'Bergfreunde': 1.42, 'Ekosport': 1.42, 'Sport Conrad': 1.42
  };

  /* Symbol-only artwork that needs a readable word label in the card. */
  var fullLogoCaptions = {
    'Yamaha': 'Yamaha',
    'Westwing': 'Westwing',
    'Giorgio Armani Beauty': 'Beauty'
  };

  var catalog = [
    {
      name: 'Одежда и обувь',
      sections: [
        {
          items: [
            brand('Zara', 'https://www.zara.com/', 'zara.svg'),
            brand('H&M', 'https://www2.hm.com/', 'handm.svg'),
            brand('Uniqlo', 'https://www.uniqlo.com/eu/', 'uniqlo.svg'),
            brand('COS', 'https://www.cos.com/', 'cos-logo.png'),
            brand('Massimo Dutti', 'https://www.massimodutti.com/', 'massimodutti.svg'),
            brand('Mango', 'https://shop.mango.com/', 'mango.svg'),
            brand('Nike', 'https://www.nike.com/', 'nike.svg'),
            brand('Adidas', 'https://www.adidas.com/', 'adidas.svg'),
            brand('New Balance', 'https://www.newbalance.com/', 'newbalance.svg'),
            brand('Crocs', 'https://www.crocs.eu/', 'crocs-wordmark.png'),
            brand('SKIMS', 'https://skims.com/', 'skims.svg'),
            brand('Alo Yoga', 'https://www.aloyoga.com/', 'alo-yoga.svg'),
            brand('Gymshark', 'https://www.gymshark.com/'),
            brand('Jacquemus', 'https://www.jacquemus.com/'),
            brand('Next.pl', 'https://www.next.pl/'),
            brand('On Running', 'https://www.on.com/', 'on-running.svg'),
            brand('Salomon', 'https://www.salomon.com/', 'salomon.svg')
          ]
        },
        {
          title: 'Мультибрендовые магазины',
          items: [
            brand('ASOS', 'https://www.asos.com/', 'asos.svg'),
            brand('Zalando', 'https://www.zalando.com/', 'zalando.svg'),
            brand('Farfetch', 'https://www.farfetch.com/', 'farfetch.svg')
          ]
        }
      ]
    },
    {
      name: 'Для дома',
      sections: [
        {
          items: [
            brand('IKEA', 'https://www.ikea.com/', 'ikea.svg'),
            brand('Zara Home', 'https://www.zarahome.com/', 'zarahome.svg'),
            brand('H&M Home', 'https://www2.hm.com/home.html', 'hmhome.svg'),
            brand('Tefal', 'https://www.tefal.com/', 'tefal.svg'),
            brand('Villeroy & Boch', 'https://www.villeroy-boch.com/'),
            brand('KitchenAid', 'https://www.kitchenaid.com/', 'kitchenaid.svg'),
            brand('Smeg', 'https://www.smeg.com/', 'smeg.svg'),
            brand('Kärcher', 'https://www.kaercher.com/', 'karcher.svg'),
            brand('De’Longhi', 'https://www.delonghi.com/', 'delonghi.svg'),
            brand('Minotti', 'https://www.minotti.com/')
          ]
        },
        {
          title: 'Мультибрендовые магазины',
          items: [
            brand('MOHD', 'https://shop.mohd.it/'),
            brand('Westwing', 'https://www.westwing.de/', 'westwing.svg'),
            brand('Connox', 'https://www.connox.com/'),
            brand('Nordic Nest', 'https://www.nordicnest.com/'),
            brand('AmbienteDirect', 'https://www.ambientedirect.com/')
          ]
        }
      ]
    },
    {
      name: 'Электроника',
      sections: [
        {
          items: [
            brand('Apple', 'https://www.apple.com/', 'apple.svg'),
            brand('Sony', 'https://www.sony.com/', 'sony.svg'),
            brand('PlayStation', 'https://www.playstation.com/', 'playstation.svg'),
            brand('Dyson', 'https://www.dyson.com/', 'dyson.svg'),
            brand('DJI', 'https://www.dji.com/', 'dji.svg'),
            brand('GoPro', 'https://gopro.com/', 'gopro.svg'),
            brand('Insta360', 'https://www.insta360.com/', 'insta360.svg'),
            brand('Bosch', 'https://www.bosch.com/', 'bosch.svg'),
            brand('Siemens', 'https://www.siemens.com/', 'siemens.svg'),
            brand('Marshall', 'https://www.marshall.com/', 'marshall.svg'),
            brand('Bose', 'https://www.bose.com/', 'bose.svg'),
            brand('Garmin', 'https://www.garmin.com/', 'garmin.svg'),
            brand('Nintendo', 'https://www.nintendo.com/', 'nintendo.svg'),
            brand('Philips', 'https://www.philips.com/', 'philips.svg'),
            brand('LG', 'https://www.lg.com/', 'lg.svg'),
            brand('JBL', 'https://www.jbl.com/', 'jbl.svg'),
            brand('Samsung', 'https://www.samsung.com/', 'samsung.svg'),
            brand('Google Store', 'https://store.google.com/', 'google-store.svg')
          ]
        }
      ]
    },
    {
      name: 'Косметика и уход',
      sections: [
        {
          items: [
            brand('Chanel', 'https://www.chanel.com/', 'chanel.svg'),
            brand('Dior', 'https://www.dior.com/', 'dior.svg'),
            brand('Lancôme', 'https://www.lancome.com/', 'lancome.svg'),
            brand('Estée Lauder', 'https://www.esteelauder.com/', 'estee-lauder.svg'),
            brand('Clinique', 'https://www.clinique.com/', 'clinique.svg'),
            brand('Clarins', 'https://www.clarins.com/', 'clarins.svg'),
            brand('Shiseido', 'https://www.shiseido.com/', 'shiseido.svg'),
            brand('Guerlain', 'https://www.guerlain.com/', 'guerlain.svg'),
            brand('Yves Saint Laurent Beauty', 'https://www.yslbeauty.com/', 'ysl-beauty.svg'),
            brand('Giorgio Armani Beauty', 'https://www.giorgioarmanibeauty.com/', 'giorgio-armani.svg'),
            brand('La Roche-Posay', 'https://www.laroche-posay.com/', 'la-roche-posay.svg'),
            brand('Vichy', 'https://www.vichy.com/'),
            brand('Avène', 'https://www.eau-thermale-avene.com/'),
            brand('Bioderma', 'https://www.bioderma.com/', 'bioderma.svg'),
            brand('Kérastase', 'https://www.kerastase.com/', 'kerastase.jpg'),
            brand('Olaplex', 'https://olaplex.com/'),
            brand('L’Oréal Professionnel', 'https://www.lorealprofessionnel.com/', 'l-oreal-professionnel.svg'),
            brand('MAC Cosmetics', 'https://www.maccosmetics.com/', 'mac-cosmetics.png'),
            brand('Charlotte Tilbury', 'https://www.charlottetilbury.com/'),
            brand('The Ordinary', 'https://theordinary.com/')
          ]
        },
        {
          title: 'Мультибрендовый магазин',
          items: [
            brand('makeup.lt', 'https://makeup.lt/')
          ]
        }
      ]
    },
    {
      name: 'Детские товары',
      sections: [
        {
          items: [
            brand('LEGO', 'https://www.lego.com/', 'lego.svg'),
            brand('Barbie / Mattel', 'https://shop.mattel.com/', 'barbie-mattel.svg'),
            brand('Fisher-Price', 'https://www.fisher-price.com/', 'fisherprice.svg'),
            brand('Hasbro', 'https://shop.hasbro.com/', 'hasbro.svg'),
            brand('Playmobil', 'https://www.playmobil.com/', 'playmobil.svg'),
            brand('Reima', 'https://www.reima.com/'),
            brand('Zara Kids', 'https://www.zara.com/kids/', 'zara.svg'),
            brand('H&M Kids', 'https://www2.hm.com/kids.html', 'handm.svg'),
            brand('Next Kids', 'https://www.next.pl/'),
            brand('Cybex', 'https://www.cybex-online.com/'),
            brand('Bugaboo', 'https://www.bugaboo.com/'),
            brand('Stokke', 'https://www.stokke.com/'),
            brand('Doona', 'https://www.doona.com/'),
            brand('Maxi-Cosi', 'https://www.maxi-cosi.com/'),
            brand('Britax Römer', 'https://www.britax-roemer.com/', 'britax-romer.svg')
          ]
        },
        {
          title: 'Мультибрендовые магазины',
          items: [
            brand('Baby-Walz', 'https://www.baby-walz.de/'),
            brand('BabyOne', 'https://www.babyone.de/'),
            brand('Babypark', 'https://www.babypark.nl/'),
            brand('Kids-world', 'https://www.kids-world.com/')
          ]
        }
      ]
    },
    {
      name: 'Хобби',
      sections: [
        {
          title: 'Музыкальные инструменты',
          items: [
            brand('Fender', 'https://www.fender.com/', 'fender.svg'),
            brand('Gibson', 'https://www.gibson.com/'),
            brand('Yamaha', 'https://www.yamaha.com/', 'yamaha.svg'),
            brand('Roland', 'https://www.roland.com/', 'roland.svg'),
            brand('Marshall', 'https://www.marshall.com/', 'marshall.svg')
          ]
        },
        {
          title: 'Моделизм / миниатюры',
          items: [
            brand('Tamiya', 'https://www.tamiya.com/', 'tamiya.svg'),
            brand('Revell', 'https://revell.de/'),
            brand('Bandai Hobby', 'https://bandai-hobby.net/'),
            brand('Warhammer', 'https://www.warhammer.com/')
          ]
        },
        {
          title: 'Мультибрендовый магазин',
          items: [
            brand('Thomann', 'https://www.thomann.de/')
          ]
        }
      ]
    },
    {
      name: 'Еда и напитки',
      sections: [
        {
          items: [
            brand('CandyOnline', 'https://candyonline.nl/'),
            brand('My American Market', 'https://www.myamericanmarket.com/'),
            brand('NikanKitchen', 'https://www.nikankitchen.com/'),
            brand('Sugafari', 'https://www.sugafari.com/'),
            brand('AmericanCandy.de', 'https://www.americancandy.de/')
          ]
        }
      ]
    },
    {
      name: 'Горные лыжи и экипировка',
      sections: [
        {
          items: [
            brand('Atomic', 'https://www.atomic.com/'),
            brand('Rossignol', 'https://www.rossignol.com/'),
            brand('Fischer', 'https://www.fischersports.com/', 'fischer.svg'),
            brand('HEAD', 'https://www.head.com/'),
            brand('Salomon', 'https://www.salomon.com/', 'salomon.svg'),
            brand('Columbia', 'https://www.columbia.com/'),
            brand('The North Face', 'https://www.thenorthface.com/', 'thenorthface.svg'),
            brand('Adidas Terrex', 'https://www.adidas.com/terrex/', 'adidas.svg'),
            brand('Helly Hansen', 'https://www.hellyhansen.com/', 'hellyhansen.svg'),
            brand('Timberland', 'https://www.timberland.com/', 'timberland.png'),
            brand('Merrell', 'https://www.merrell.com/'),
            brand('Oakley', 'https://www.oakley.com/', 'oakley.svg')
          ]
        },
        {
          title: 'Сноуборд',
          items: [
            brand('Burton', 'https://www.burton.com/', 'burton.svg'),
            brand('Nitro', 'https://nitrosnowboards.com/'),
            brand('Jones', 'https://www.jonessnowboards.com/'),
            brand('CAPiTA', 'https://capitasnowboarding.com/'),
            brand('Union', 'https://unionbindingcompany.com/'),
            brand('ThirtyTwo', 'https://thirtytwo.com/'),
            brand('DC Shoes', 'https://www.dcshoes.com/')
          ]
        },
        {
          title: 'Мультибрендовые магазины',
          items: [
            brand('Snowleader', 'https://www.snowleader.com/'),
            brand('Bergfreunde', 'https://www.bergfreunde.eu/'),
            brand('Ekosport', 'https://www.ekosport.eu/'),
            brand('Sport Conrad', 'https://www.sport-conrad.com/')
          ]
        }
      ]
    }
  ];

  function brand(name, url, logo) {
    return {
      name: name,
      url: regionalUrls[name] || url,
      logo: logo || '',
      scale: brandScales[name] || 1
    };
  }

  function createCard(entry) {
    var item = document.createElement('div');
    item.className = 'home-partners-item w-dyn-item';
    item.setAttribute('role', 'listitem');
    item.setAttribute('data-brand', entry.name);
    item.style.setProperty('--brand-scale', entry.scale);

    var inner = document.createElement('div');
    inner.className = 'home-partners-item-inner';

    var thumb = document.createElement('div');
    thumb.className = 'home-partners-item-thumb';

    if (entry.logo) {
      if (fullLogoCaptions[entry.name]) {
        thumb.classList.add('home-partners-item-thumb-captioned');
      }

      var image = document.createElement('img');
      image.alt = entry.name;
      image.loading = 'lazy';
      image.decoding = 'async';
      image.className = 'home-partners-item-logo';
      image.src = './_assets/brands-color/' + entry.logo;
      thumb.appendChild(image);

      if (fullLogoCaptions[entry.name]) {
        var logoCaption = document.createElement('span');
        logoCaption.className = 'home-partners-item-logo-caption';
        logoCaption.textContent = fullLogoCaptions[entry.name];
        thumb.appendChild(logoCaption);
      }
    } else {
      thumb.classList.add('home-partners-item-thumb-fallback');

      var fallback = document.createElement('span');
      fallback.className = 'home-partners-item-fallback-inner';

      var image = document.createElement('img');
      image.alt = '';
      image.loading = 'lazy';
      image.decoding = 'async';
      image.className = 'home-partners-item-favicon';
      var domain = new URL(entry.url).hostname.replace(/^www\./, '');
      image.src = 'https://www.google.com/s2/favicons?domain=' + encodeURIComponent(domain) + '&sz=128';
      image.onerror = function () {
        image.onerror = null;
        image.src = 'https://icons.duckduckgo.com/ip3/' + encodeURIComponent(domain) + '.ico';
      };
      fallback.appendChild(image);

      var text = document.createElement('span');
      text.className = 'home-partners-item-text';
      text.textContent = entry.name;
      fallback.appendChild(text);
      thumb.appendChild(fallback);
    }

    inner.appendChild(thumb);
    item.appendChild(inner);

    var line = document.createElement('div');
    line.className = 'home-partners-item-line';
    item.appendChild(line);

    ['', 'top-right', 'bottom-left', 'bottom-right'].forEach(function (position) {
      var dot = document.createElement('div');
      dot.className = 'home-partners-item-dot' + (position ? ' ' + position : '');
      item.appendChild(dot);
    });

    var link = document.createElement('a');
    link.className = 'home-partners-brand-link';
    link.href = entry.url;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    link.setAttribute('aria-label', 'Открыть сайт ' + entry.name);
    item.appendChild(link);

    return item;
  }

  function createSectionLabel(title) {
    var label = document.createElement('div');
    label.className = 'home-partners-section-label';
    label.setAttribute('role', 'presentation');
    label.textContent = title;
    return label;
  }

  function prepareTemplates(section) {
    var labels = Array.prototype.slice.call(section.querySelectorAll('.home-partners-label-wrap'));
    var groups = Array.prototype.slice.call(section.querySelectorAll('.home-partners-main'));
    var parent = groups[0] && groups[0].parentElement;
    if (!labels.length || !groups.length || !parent) return null;

    while (labels.length < catalog.length) {
      var labelClone = labels[labels.length - 1].cloneNode(true);
      labelClone.removeAttribute('id');
      labelClone.classList.remove('home-partners-label-wrap-select', 'home-partners-label-wrap-hidden');
      parent.appendChild(labelClone);
      labels.push(labelClone);
    }

    while (groups.length < catalog.length) {
      var groupClone = groups[groups.length - 1].cloneNode(true);
      groupClone.removeAttribute('id');
      groupClone.classList.remove('active', 'mobile-brands-collapsed');
      groupClone.style.gridColumn = '2 / -2';
      parent.appendChild(groupClone);
      groups.push(groupClone);
    }

    return { labels: labels, groups: groups };
  }

  document.querySelectorAll('.home-partners').forEach(function (section) {
    var templates = prepareTemplates(section);
    if (!templates) return;

    catalog.forEach(function (category, categoryIndex) {
      var labelText = templates.labels[categoryIndex].querySelector('.home-partners-cate .txt');
      if (labelText) labelText.textContent = category.name;

      var group = templates.groups[categoryIndex];
      group.classList.toggle('active', categoryIndex === 0);
      var list = group.querySelector('.home-partners-list');
      if (!list) return;
      list.textContent = '';

      category.sections.forEach(function (catalogSection) {
        if (catalogSection.title) list.appendChild(createSectionLabel(catalogSection.title));
        catalogSection.items.forEach(function (entry) {
          list.appendChild(createCard(entry));
        });
      });
    });
  });
})();
