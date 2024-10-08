const dataForex = {
    currency: [
        { name: 'ALL FX pairs',time1: '00:02-24:00', time2: '', time3: '01:02-23:59', time4: '', time5: '00:00-23:59' },],
    metals: [
        { name: 'XAGEUR', time1: '01:02-23:59', time2: '', time3: '01:02-23:59', time4: '',time5: '' },
        { name: 'XAUAUD', time1: '01:02-23:59', time2: '', time3: '01:02-23:59', time4: '',time5: ''},
        { name: 'XAUEUR', time1: '01:02-23:59', time2: '', time3: '01:02-23:59', time4: '',time5: ''},
        { name: 'XPDUSD', time1: '01:02-23:59', time2: '', time3: '01:02-23:59', time4: '',time5: ''},
        { name: 'XPTUSD', time1: '01:02-23:59', time2: '', time3: '01:02-23:59', time4: '',time5: '' },
        { name: 'XAGUSD', time1: '01:02-23:59', time2: '', time3: '01:02-23:59', time4: '',time5: ''},
        { name: 'XAGUSD', time1: '01:02-23:59', time2: '', time3: '01:02-23:59', time4: '',time5: ''},
        { name: 'XAUUSD', time1: '01:02-23:59', time2: '', time3: '01:02-23:59', time4: '',time5: ''}
    ],
    indices: [
        { name: 'AU200', time1: '', time2: '', time3: '01:02-23:59', time4: '',time5: '' },
        { name: 'DE40', time1: '', time2: '', time3: '01:02-23:59', time4: '',time5: '' },
        { name: 'ES35', time1: '', time2: '', time3: '01:02-23:59', time4: '',time5: '' },
        { name: 'EU50', time1: '', time2: '', time3: '01:02-23:59', time4: '',time5: '' },
        { name: 'FR40', time1: '', time2: '', time3: '01:02-23:59', time4: '',time5: '' },
        { name: 'HK50', time1: '', time2: '', time3: '01:02-23:59', time4: '',time5: '' },
        { name: 'JP225', time1: '', time2: '', time3: '01:02-23:59', time4: '',time5: '' },
        { name: 'UK100', time1: '', time2: '', time3: '01:02-23:59', time4: '',time5: '' },
        { name: 'US100', time1: '', time2: '', time3: '01:02-23:59', time4: '',time5: '' },
        { name: 'US30', time1: '', time2: '', time3: '01:02-23:59', time4: '',time5: '' },
        { name: 'US500', time1: '', time2: '', time3: '01:02-23:59', time4: '',time5: '' },
        { name: 'CHA50', time1: '', time2: '', time3: '01:02-23:59', time4: '',time5: '' },
    ],
    energies: [
        { name: 'BRENT', time1: '', time2: '', time3: '00:00-23:59', time4: '',time5: '', },
        { name: 'WTI', time1: '', time2: '', time3: '00:00-23:59', time4: '',time5: '', },
        { name: 'XNGUSD', time1: '', time2: '', time3: '00:00-23:59', time4: '',time5: '', },
    ],
    shares: [
        { name: 'AAPL', time1: '16:35-22:59', time2: '16:35-22:59', time3: '16:35-22:59', time4: '16:35-22:59',time5: '16:35-22:59', },
        { name: 'AIG', time1: '16:35-22:59', time2: '16:35-22:59', time3: '16:35-22:59', time4: '16:35-22:59',time5: '16:35-22:59', },
        { name: 'AMZN', time1: '16:35-22:59', time2: '16:35-22:59', time3: '16:35-22:59', time4: '16:35-22:59',time5: '16:35-22:59', },
        { name: 'ATVI', time1: '16:35-22:59', time2: '16:35-22:59', time3: '16:35-22:59', time4: '16:35-22:59',time5: '16:35-22:59', },
        { name: 'AXP', time1: '16:35-22:59', time2: '16:35-22:59', time3: '16:35-22:59', time4: '16:35-22:59',time5: '16:35-22:59', },
        { name: 'BA', time1: '16:35-22:59', time2: '16:35-22:59', time3: '16:35-22:59', time4: '16:35-22:59',time5: '16:35-22:59', },
        { name: 'BABA', time1: '16:35-22:59', time2: '16:35-22:59', time3: '16:35-22:59', time4: '16:35-22:59',time5: '16:35-22:59', },
        { name: 'BAC', time1: '16:35-22:59', time2: '16:35-22:59', time3: '16:35-22:59', time4: '16:35-22:59',time5: '16:35-22:59', },
        { name: 'C', time1: '16:35-22:59', time2: '16:35-22:59', time3: '16:35-22:59', time4: '16:35-22:59',time5: '16:35-22:59', },
        { name: 'CSCO', time1: '16:35-22:59', time2: '16:35-22:59', time3: '16:35-22:59', time4: '16:35-22:59',time5: '16:35-22:59', },
        { name: 'CVX', time1: '16:35-22:59', time2: '16:35-22:59', time3: '16:35-22:59', time4: '16:35-22:59',time5: '16:35-22:59', },
        { name: 'EA', time1: '16:35-22:59', time2: '16:35-22:59', time3: '16:35-22:59', time4: '16:35-22:59',time5: '16:35-22:59', },
        { name: 'EBAY', time1: '16:35-22:59', time2: '16:35-22:59', time3: '16:35-22:59', time4: '16:35-22:59',time5: '16:35-22:59', },
        { name: 'F', time1: '16:35-22:59', time2: '16:35-22:59', time3: '16:35-22:59', time4: '16:35-22:59',time5: '16:35-22:59', },
        { name: 'FB', time1: '16:35-22:59', time2: '16:35-22:59', time3: '16:35-22:59', time4: '16:35-22:59',time5: '16:35-22:59', },
        { name: 'FDX', time1: '16:35-22:59', time2: '16:35-22:59', time3: '16:35-22:59', time4: '16:35-22:59',time5: '16:35-22:59', },
        { name: 'GE', time1: '16:35-22:59', time2: '16:35-22:59', time3: '16:35-22:59', time4: '16:35-22:59',time5: '16:35-22:59', },
        { name: 'GM', time1: '16:35-22:59', time2: '16:35-22:59', time3: '16:35-22:59', time4: '16:35-22:59',time5: '16:35-22:59', },

        { name: 'GOOG', time1: '16:35-22:59', time2: '16:35-22:59', time3: '16:35-22:59', time4: '16:35-22:59',time5: '16:35-22:59', },
        { name: 'GS', time1: '16:35-22:59', time2: '16:35-22:59', time3: '16:35-22:59', time4: '16:35-22:59',time5: '16:35-22:59', },
        { name: 'HLT', time1: '16:35-22:59', time2: '16:35-22:59', time3: '16:35-22:59', time4: '16:35-22:59',time5: '16:35-22:59', },
        { name: 'HOOD', time1: '16:35-22:59', time2: '16:35-22:59', time3: '16:35-22:59', time4: '16:35-22:59',time5: '16:35-22:59', },
        { name: 'HPQ', time1: '16:35-22:59', time2: '16:35-22:59', time3: '16:35-22:59', time4: '16:35-22:59',time5: '16:35-22:59', },
        { name: 'IBM', time1: '16:35-22:59', time2: '16:35-22:59', time3: '16:35-22:59', time4: '16:35-22:59',time5: '16:35-22:59', },
        { name: 'ILMN', time1: '16:35-22:59', time2: '16:35-22:59', time3: '16:35-22:59', time4: '16:35-22:59',time5: '16:35-22:59', },
        { name: 'JNJ', time1: '16:35-22:59', time2: '16:35-22:59', time3: '16:35-22:59', time4: '16:35-22:59',time5: '16:35-22:59', },
        { name: 'JPM', time1: '16:35-22:59', time2: '16:35-22:59', time3: '16:35-22:59', time4: '16:35-22:59',time5: '16:35-22:59', },
        { name: 'KO', time1: '16:35-22:59', time2: '16:35-22:59', time3: '16:35-22:59', time4: '16:35-22:59',time5: '16:35-22:59', },
        { name: 'MA', time1: '16:35-22:59', time2: '16:35-22:59', time3: '16:35-22:59', time4: '16:35-22:59',time5: '16:35-22:59', },
        { name: 'MCD', time1: '16:35-22:59', time2: '16:35-22:59', time3: '16:35-22:59', time4: '16:35-22:59',time5: '16:35-22:59', },
        { name: 'MRVL', time1: '16:35-22:59', time2: '16:35-22:59', time3: '16:35-22:59', time4: '16:35-22:59',time5: '16:35-22:59', },
        { name: 'MSFT', time1: '16:35-22:59', time2: '16:35-22:59', time3: '16:35-22:59', time4: '16:35-22:59',time5: '16:35-22:59', },
        { name: 'NFLX', time1: '16:35-22:59', time2: '16:35-22:59', time3: '16:35-22:59', time4: '16:35-22:59',time5: '16:35-22:59', },
        { name: 'NKE', time1: '16:35-22:59', time2: '16:35-22:59', time3: '16:35-22:59', time4: '16:35-22:59',time5: '16:35-22:59', },
        { name: 'NVDA', time1: '16:35-22:59', time2: '16:35-22:59', time3: '16:35-22:59', time4: '16:35-22:59',time5: '16:35-22:59', },
        { name: 'ORCL', time1: '16:35-22:59', time2: '16:35-22:59', time3: '16:35-22:59', time4: '16:35-22:59',time5: '16:35-22:59', },

        { name: 'PFE', time1: '16:35-22:59', time2: '16:35-22:59', time3: '16:35-22:59', time4: '16:35-22:59',time5: '16:35-22:59', },
        { name: 'PG', time1: '16:35-22:59', time2: '16:35-22:59', time3: '16:35-22:59', time4: '16:35-22:59',time5: '16:35-22:59', },
        { name: 'QCOM', time1: '16:35-22:59', time2: '16:35-22:59', time3: '16:35-22:59', time4: '16:35-22:59',time5: '16:35-22:59', },
        { name: 'RACE', time1: '16:35-22:59', time2: '16:35-22:59', time3: '16:35-22:59', time4: '16:35-22:59',time5: '16:35-22:59', },
        { name: 'SBUX', time1: '16:35-22:59', time2: '16:35-22:59', time3: '16:35-22:59', time4: '16:35-22:59',time5: '16:35-22:59', },
        { name: 'SNAP', time1: '16:35-22:59', time2: '16:35-22:59', time3: '16:35-22:59', time4: '16:35-22:59',time5: '16:35-22:59', },
        { name: 'SPCE', time1: '16:35-22:59', time2: '16:35-22:59', time3: '16:35-22:59', time4: '16:35-22:59',time5: '16:35-22:59', },
        { name: 'T', time1: '16:35-22:59', time2: '16:35-22:59', time3: '16:35-22:59', time4: '16:35-22:59',time5: '16:35-22:59', },
        { name: 'TEVA', time1: '16:35-22:59', time2: '16:35-22:59', time3: '16:35-22:59', time4: '16:35-22:59',time5: '16:35-22:59', },
        { name: 'TWTR', time1: '16:35-22:59', time2: '16:35-22:59', time3: '16:35-22:59', time4: '16:35-22:59',time5: '16:35-22:59', },
        { name: 'V', time1: '16:35-22:59', time2: '16:35-22:59', time3: '16:35-22:59', time4: '16:35-22:59',time5: '16:35-22:59', },
        { name: 'XOM', time1: '16:35-22:59', time2: '16:35-22:59', time3: '16:35-22:59', time4: '16:35-22:59',time5: '16:35-22:59', },
        { name: 'ADSGn', time1: '16:35-22:59', time2: '16:35-22:59', time3: '16:35-22:59', time4: '16:35-22:59',time5: '16:35-22:59', },
        { name: 'AIRF', time1: '16:35-22:59', time2: '16:35-22:59', time3: '16:35-22:59', time4: '16:35-22:59',time5: '16:35-22:59', },
        { name: 'ALVG', time1: '16:35-22:59', time2: '16:35-22:59', time3: '16:35-22:59', time4: '16:35-22:59',time5: '16:35-22:59', },
        { name: 'BAYGn', time1: '16:35-22:59', time2: '16:35-22:59', time3: '16:35-22:59', time4: '16:35-22:59',time5: '16:35-22:59', },
        { name: 'BMWG', time1: '16:35-22:59', time2: '16:35-22:59', time3: '16:35-22:59', time4: '16:35-22:59',time5: '16:35-22:59', },
        { name: 'BNPP', time1: '16:35-22:59', time2: '16:35-22:59', time3: '16:35-22:59', time4: '16:35-22:59',time5: '16:35-22:59', },

        { name: 'CBKG', time1: '16:35-22:59', time2: '16:35-22:59', time3: '16:35-22:59', time4: '16:35-22:59',time5: '16:35-22:59', },
        { name: 'DANO', time1: '16:35-22:59', time2: '16:35-22:59', time3: '16:35-22:59', time4: '16:35-22:59',time5: '16:35-22:59', },
        { name: 'DBKGn', time1: '16:35-22:59', time2: '16:35-22:59', time3: '16:35-22:59', time4: '16:35-22:59',time5: '16:35-22:59', },
        { name: 'EONGn', time1: '16:35-22:59', time2: '16:35-22:59', time3: '16:35-22:59', time4: '16:35-22:59',time5: '16:35-22:59', },
        { name: 'IBE', time1: '16:35-22:59', time2: '16:35-22:59', time3: '16:35-22:59', time4: '16:35-22:59',time5: '16:35-22:59', },
        { name: 'LHAG', time1: '16:35-22:59', time2: '16:35-22:59', time3: '16:35-22:59', time4: '16:35-22:59',time5: '16:35-22:59', },
        { name: 'LVMH', time1: '16:35-22:59', time2: '16:35-22:59', time3: '16:35-22:59', time4: '16:35-22:59',time5: '16:35-22:59', },
        { name: 'MAP', time1: '16:35-22:59', time2: '16:35-22:59', time3: '16:35-22:59', time4: '16:35-22:59',time5: '16:35-22:59', },
        { name: 'SAN', time1: '16:35-22:59', time2: '16:35-22:59', time3: '16:35-22:59', time4: '16:35-22:59',time5: '16:35-22:59', },
        { name: 'SIEGn', time1: '16:35-22:59', time2: '16:35-22:59', time3: '16:35-22:59', time4: '16:35-22:59',time5: '16:35-22:59', },
        { name: 'SOGN', time1: '16:35-22:59', time2: '16:35-22:59', time3: '16:35-22:59', time4: '16:35-22:59',time5: '16:35-22:59', },
        { name: 'TEF', time1: '16:35-22:59', time2: '16:35-22:59', time3: '16:35-22:59', time4: '16:35-22:59',time5: '16:35-22:59', },
        { name: 'TOTF', time1: '16:35-22:59', time2: '16:35-22:59', time3: '16:35-22:59', time4: '16:35-22:59',time5: '16:35-22:59', },
        { name: 'UBER', time1: '16:35-22:59', time2: '16:35-22:59', time3: '16:35-22:59', time4: '16:35-22:59',time5: '16:35-22:59', },
        { name: 'VOWG_p', time1: '16:35-22:59', time2: '16:35-22:59', time3: '16:35-22:59', time4: '16:35-22:59',time5: '16:35-22:59', },
        { name: 'ABNB', time1: '16:35-22:59', time2: '16:35-22:59', time3: '16:35-22:59', time4: '16:35-22:59',time5: '16:35-22:59', },
        { name: 'ACB', time1: '16:35-22:59', time2: '16:35-22:59', time3: '16:35-22:59', time4: '16:35-22:59',time5: '16:35-22:59', },
        { name: 'ADBE', time1: '16:35-22:59', time2: '16:35-22:59', time3: '16:35-22:59', time4: '16:35-22:59',time5: '16:35-22:59', },


        { name: 'AFRM', time1: '16:35-22:59', time2: '16:35-22:59', time3: '16:35-22:59', time4: '16:35-22:59',time5: '16:35-22:59', },
        { name: 'APA', time1: '16:35-22:59', time2: '16:35-22:59', time3: '16:35-22:59', time4: '16:35-22:59',time5: '16:35-22:59', },
        { name: 'AZN', time1: '16:35-22:59', time2: '16:35-22:59', time3: '16:35-22:59', time4: '16:35-22:59',time5: '16:35-22:59', },
        { name: 'AZPN', time1: '16:35-22:59', time2: '16:35-22:59', time3: '16:35-22:59', time4: '16:35-22:59',time5: '16:35-22:59', },
        { name: 'BG', time1: '16:35-22:59', time2: '16:35-22:59', time3: '16:35-22:59', time4: '16:35-22:59',time5: '16:35-22:59', },
        { name: 'BIDU', time1: '16:35-22:59', time2: '16:35-22:59', time3: '16:35-22:59', time4: '16:35-22:59',time5: '16:35-22:59', },
        { name: 'BKNG', time1: '16:35-22:59', time2: '16:35-22:59', time3: '16:35-22:59', time4: '16:35-22:59',time5: '16:35-22:59', },
        { name: 'BKR', time1: '16:35-22:59', time2: '16:35-22:59', time3: '16:35-22:59', time4: '16:35-22:59',time5: '16:35-22:59', },
        { name: 'BLK', time1: '16:35-22:59', time2: '16:35-22:59', time3: '16:35-22:59', time4: '16:35-22:59',time5: '16:35-22:59', },
        { name: 'BNTX', time1: '16:35-22:59', time2: '16:35-22:59', time3: '16:35-22:59', time4: '16:35-22:59',time5: '16:35-22:59', },
        { name: 'BSAC', time1: '16:35-22:59', time2: '16:35-22:59', time3: '16:35-22:59', time4: '16:35-22:59',time5: '16:35-22:59', },
        { name: 'CAJ', time1: '16:35-22:59', time2: '16:35-22:59', time3: '16:35-22:59', time4: '16:35-22:59',time5: '16:35-22:59', },
        { name: 'CAT', time1: '16:35-22:59', time2: '16:35-22:59', time3: '16:35-22:59', time4: '16:35-22:59',time5: '16:35-22:59', },
        { name: 'CCL', time1: '16:35-22:59', time2: '16:35-22:59', time3: '16:35-22:59', time4: '16:35-22:59',time5: '16:35-22:59', },
        { name: 'CGC', time1: '16:35-22:59', time2: '16:35-22:59', time3: '16:35-22:59', time4: '16:35-22:59',time5: '16:35-22:59', },
        { name: 'CMCSA', time1: '16:35-22:59', time2: '16:35-22:59', time3: '16:35-22:59', time4: '16:35-22:59',time5: '16:35-22:59', },
        { name: 'COIN', time1: '16:35-22:59', time2: '16:35-22:59', time3: '16:35-22:59', time4: '16:35-22:59',time5: '16:35-22:59', },
        { name: 'CPRT', time1: '16:35-22:59', time2: '16:35-22:59', time3: '16:35-22:59', time4: '16:35-22:59',time5: '16:35-22:59', },

        { name: 'CRM', time1: '16:35-22:59', time2: '16:35-22:59', time3: '16:35-22:59', time4: '16:35-22:59',time5: '16:35-22:59', },
        { name: 'CRON', time1: '16:35-22:59', time2: '16:35-22:59', time3: '16:35-22:59', time4: '16:35-22:59',time5: '16:35-22:59', },
        { name: 'DBX', time1: '16:35-22:59', time2: '16:35-22:59', time3: '16:35-22:59', time4: '16:35-22:59',time5: '16:35-22:59', },
        { name: 'DELL', time1: '16:35-22:59', time2: '16:35-22:59', time3: '16:35-22:59', time4: '16:35-22:59',time5: '16:35-22:59', },
        { name: 'DIS', time1: '16:35-22:59', time2: '16:35-22:59', time3: '16:35-22:59', time4: '16:35-22:59',time5: '16:35-22:59', },
        { name: 'EQIX', time1: '16:35-22:59', time2: '16:35-22:59', time3: '16:35-22:59', time4: '16:35-22:59',time5: '16:35-22:59', },
        { name: 'ETSY', time1: '16:35-22:59', time2: '16:35-22:59', time3: '16:35-22:59', time4: '16:35-22:59',time5: '16:35-22:59', },
        { name: 'FOXA', time1: '16:35-22:59', time2: '16:35-22:59', time3: '16:35-22:59', time4: '16:35-22:59',time5: '16:35-22:59', },
        { name: 'GILD', time1: '16:35-22:59', time2: '16:35-22:59', time3: '16:35-22:59', time4: '16:35-22:59',time5: '16:35-22:59', },
        { name: 'GPRO', time1: '16:35-22:59', time2: '16:35-22:59', time3: '16:35-22:59', time4: '16:35-22:59',time5: '16:35-22:59', },
        { name: 'GRMN', time1: '16:35-22:59', time2: '16:35-22:59', time3: '16:35-22:59', time4: '16:35-22:59',time5: '16:35-22:59', },
        { name: 'GT', time1: '16:35-22:59', time2: '16:35-22:59', time3: '16:35-22:59', time4: '16:35-22:59',time5: '16:35-22:59', },
        { name: 'HOG', time1: '16:35-22:59', time2: '16:35-22:59', time3: '16:35-22:59', time4: '16:35-22:59',time5: '16:35-22:59', },
        { name: 'HON', time1: '16:35-22:59', time2: '16:35-22:59', time3: '16:35-22:59', time4: '16:35-22:59',time5: '16:35-22:59', },
        { name: 'HUM', time1: '16:35-22:59', time2: '16:35-22:59', time3: '16:35-22:59', time4: '16:35-22:59',time5: '16:35-22:59', },
        { name: 'LMT', time1: '16:35-22:59', time2: '16:35-22:59', time3: '16:35-22:59', time4: '16:35-22:59',time5: '16:35-22:59', },
        { name: 'LYFT', time1: '16:35-22:59', time2: '16:35-22:59', time3: '16:35-22:59', time4: '16:35-22:59',time5: '16:35-22:59', },
        { name: 'MCHP', time1: '16:35-22:59', time2: '16:35-22:59', time3: '16:35-22:59', time4: '16:35-22:59',time5: '16:35-22:59', },

        { name: 'MDLZ', time1: '16:35-22:59', time2: '16:35-22:59', time3: '16:35-22:59', time4: '16:35-22:59',time5: '16:35-22:59', },
        { name: 'MMM', time1: '16:35-22:59', time2: '16:35-22:59', time3: '16:35-22:59', time4: '16:35-22:59',time5: '16:35-22:59', },
        { name: 'MRNA', time1: '16:35-22:59', time2: '16:35-22:59', time3: '16:35-22:59', time4: '16:35-22:59',time5: '16:35-22:59', },
        { name: 'MS', time1: '16:35-22:59', time2: '16:35-22:59', time3: '16:35-22:59', time4: '16:35-22:59',time5: '16:35-22:59', },
        { name: 'NEM', time1: '16:35-22:59', time2: '16:35-22:59', time3: '16:35-22:59', time4: '16:35-22:59',time5: '16:35-22:59', },
        { name: 'NKLA', time1: '16:35-22:59', time2: '16:35-22:59', time3: '16:35-22:59', time4: '16:35-22:59',time5: '16:35-22:59', },
        { name: 'PEP', time1: '16:35-22:59', time2: '16:35-22:59', time3: '16:35-22:59', time4: '16:35-22:59',time5: '16:35-22:59', },
        { name: 'PINS', time1: '16:35-22:59', time2: '16:35-22:59', time3: '16:35-22:59', time4: '16:35-22:59',time5: '16:35-22:59', },
        { name: 'PLTR', time1: '16:35-22:59', time2: '16:35-22:59', time3: '16:35-22:59', time4: '16:35-22:59',time5: '16:35-22:59', },
        { name: 'PM', time1: '16:35-22:59', time2: '16:35-22:59', time3: '16:35-22:59', time4: '16:35-22:59',time5: '16:35-22:59', },
        { name: 'PYPL', time1: '16:35-22:59', time2: '16:35-22:59', time3: '16:35-22:59', time4: '16:35-22:59',time5: '16:35-22:59', },
        { name: 'RL', time1: '16:35-22:59', time2: '16:35-22:59', time3: '16:35-22:59', time4: '16:35-22:59',time5: '16:35-22:59', },
        { name: 'RYAAY', time1: '16:35-22:59', time2: '16:35-22:59', time3: '16:35-22:59', time4: '16:35-22:59',time5: '16:35-22:59', },
        { name: 'SPOT', time1: '16:35-22:59', time2: '16:35-22:59', time3: '16:35-22:59', time4: '16:35-22:59',time5: '16:35-22:59', },
        { name: 'TEAM', time1: '16:35-22:59', time2: '16:35-22:59', time3: '16:35-22:59', time4: '16:35-22:59',time5: '16:35-22:59', },
        { name: 'TLRY', time1: '16:35-22:59', time2: '16:35-22:59', time3: '16:35-22:59', time4: '16:35-22:59',time5: '16:35-22:59', },
        { name: 'TM', time1: '16:35-22:59', time2: '16:35-22:59', time3: '16:35-22:59', time4: '16:35-22:59',time5: '16:35-22:59', },
        { name: 'TME', time1: '16:35-22:59', time2: '16:35-22:59', time3: '16:35-22:59', time4: '16:35-22:59',time5: '16:35-22:59', },

        { name: 'TMUS', time1: '16:35-22:59', time2: '16:35-22:59', time3: '16:35-22:59', time4: '16:35-22:59',time5: '16:35-22:59', },
        { name: 'TRIP', time1: '16:35-22:59', time2: '16:35-22:59', time3: '16:35-22:59', time4: '16:35-22:59',time5: '16:35-22:59', },
        { name: 'UPWK', time1: '16:35-22:59', time2: '16:35-22:59', time3: '16:35-22:59', time4: '16:35-22:59',time5: '16:35-22:59', },
        { name: 'VFC', time1: '16:35-22:59', time2: '16:35-22:59', time3: '16:35-22:59', time4: '16:35-22:59',time5: '16:35-22:59', },
        { name: 'VOD', time1: '16:35-22:59', time2: '16:35-22:59', time3: '16:35-22:59', time4: '16:35-22:59',time5: '16:35-22:59', },
        { name: 'VZ', time1: '16:35-22:59', time2: '16:35-22:59', time3: '16:35-22:59', time4: '16:35-22:59',time5: '16:35-22:59', },
        { name: 'WFC', time1: '16:35-22:59', time2: '16:35-22:59', time3: '16:35-22:59', time4: '16:35-22:59',time5: '16:35-22:59', },
        { name: 'WIX', time1: '16:35-22:59', time2: '16:35-22:59', time3: '16:35-22:59', time4: '16:35-22:59',time5: '16:35-22:59', },
        { name: 'WMT', time1: '16:35-22:59', time2: '16:35-22:59', time3: '16:35-22:59', time4: '16:35-22:59',time5: '16:35-22:59', },
        { name: 'WYNN', time1: '16:35-22:59', time2: '16:35-22:59', time3: '16:35-22:59', time4: '16:35-22:59',time5: '16:35-22:59', },
        { name: 'XRX', time1: '16:35-22:59', time2: '16:35-22:59', time3: '16:35-22:59', time4: '16:35-22:59',time5: '16:35-22:59', },
        { name: 'YELP', time1: '16:35-22:59', time2: '16:35-22:59', time3: '16:35-22:59', time4: '16:35-22:59',time5: '16:35-22:59', },
        { name: 'ZM', time1: '16:35-22:59', time2: '16:35-22:59', time3: '16:35-22:59', time4: '16:35-22:59',time5: '16:35-22:59', },
        { name: 'ACA', time1: '16:35-22:59', time2: '16:35-22:59', time3: '16:35-22:59', time4: '16:35-22:59',time5: '16:35-22:59', },
        { name: 'ADP', time1: '16:35-22:59', time2: '16:35-22:59', time3: '16:35-22:59', time4: '16:35-22:59',time5: '16:35-22:59', },
        { name: 'AFX', time1: '16:35-22:59', time2: '16:35-22:59', time3: '16:35-22:59', time4: '16:35-22:59',time5: '16:35-22:59', },
        { name: 'AIR', time1: '16:35-22:59', time2: '16:35-22:59', time3: '16:35-22:59', time4: '16:35-22:59',time5: '16:35-22:59', },
        { name: 'ALO', time1: '16:35-22:59', time2: '16:35-22:59', time3: '16:35-22:59', time4: '16:35-22:59',time5: '16:35-22:59', },

        { name: 'B4B', time1: '16:35-22:59', time2: '16:35-22:59', time3: '16:35-22:59', time4: '16:35-22:59',time5: '16:35-22:59', },
        { name: 'BAS', time1: '16:35-22:59', time2: '16:35-22:59', time3: '16:35-22:59', time4: '16:35-22:59',time5: '16:35-22:59', },
        { name: 'BOSS', time1: '16:35-22:59', time2: '16:35-22:59', time3: '16:35-22:59', time4: '16:35-22:59',time5: '16:35-22:59', },
        { name: 'CDI', time1: '16:35-22:59', time2: '16:35-22:59', time3: '16:35-22:59', time4: '16:35-22:59',time5: '16:35-22:59', },
        { name: 'CON', time1: '16:35-22:59', time2: '16:35-22:59', time3: '16:35-22:59', time4: '16:35-22:59',time5: '16:35-22:59', },
        { name: 'HEN3', time1: '16:35-22:59', time2: '16:35-22:59', time3: '16:35-22:59', time4: '16:35-22:59',time5: '16:35-22:59', },
        { name: 'ITX', time1: '16:35-22:59', time2: '16:35-22:59', time3: '16:35-22:59', time4: '16:35-22:59',time5: '16:35-22:59', },
        { name: 'MBG', time1: '16:35-22:59', time2: '16:35-22:59', time3: '16:35-22:59', time4: '16:35-22:59',time5: '16:35-22:59', },
        { name: 'ML', time1: '16:35-22:59', time2: '16:35-22:59', time3: '16:35-22:59', time4: '16:35-22:59',time5: '16:35-22:59', },
        { name: 'OR', time1: '16:35-22:59', time2: '16:35-22:59', time3: '16:35-22:59', time4: '16:35-22:59',time5: '16:35-22:59', },
        { name: 'PIRC', time1: '16:35-22:59', time2: '16:35-22:59', time3: '16:35-22:59', time4: '16:35-22:59',time5: '16:35-22:59', },
        { name: 'PUM', time1: '16:35-22:59', time2: '16:35-22:59', time3: '16:35-22:59', time4: '16:35-22:59',time5: '16:35-22:59', },
        { name: 'REP', time1: '16:35-22:59', time2: '16:35-22:59', time3: '16:35-22:59', time4: '16:35-22:59',time5: '16:35-22:59', },
        { name: 'RNO', time1: '16:35-22:59', time2: '16:35-22:59', time3: '16:35-22:59', time4: '16:35-22:59',time5: '16:35-22:59', },
        { name: 'SW', time1: '16:35-22:59', time2: '16:35-22:59', time3: '16:35-22:59', time4: '16:35-22:59',time5: '16:35-22:59', },
        { name: 'TUI1', time1: '16:35-22:59', time2: '16:35-22:59', time3: '16:35-22:59', time4: '16:35-22:59',time5: '16:35-22:59', },
        { name: 'UBI', time1: '16:35-22:59', time2: '16:35-22:59', time3: '16:35-22:59', time4: '16:35-22:59',time5: '16:35-22:59', },
        { name: 'UCG', time1: '16:35-22:59', time2: '16:35-22:59', time3: '16:35-22:59', time4: '16:35-22:59',time5: '16:35-22:59', },
    ],
    cryptocurrency: [
        { name: 'BTCUSD', time1: '00:05-24:00', time2: '00:05-24:00', time3: '00:05-24:00', time4: '00:05-24:00',time5: '00:05-24:00'},
        { name: 'BCHUSD', time1: '00:05-24:00', time2: '00:05-24:00', time3: '00:05-24:00', time4: '00:05-24:00',time5: '00:05-24:00'},
        { name: 'ETHUSD', time1: '00:05-24:00', time2: '00:05-24:00', time3: '00:05-24:00', time4: '00:05-24:00',time5: '00:05-24:00'},
        { name: 'LTCUSD', time1: '00:05-24:00', time2: '00:05-24:00', time3: '00:05-24:00', time4: '00:05-24:00',time5: '00:05-24:00'},
        { name: 'XRPUSD', time1: '00:05-24:00', time2: '00:05-24:00', time3: '00:05-24:00', time4: '00:05-24:00',time5: '00:05-24:00'},
        { name: 'ADAUSD', time1: '00:05-24:00', time2: '00:05-24:00', time3: '00:05-24:00', time4: '00:05-24:00',time5: '00:05-24:00'},
        { name: 'DOGUSD', time1: '00:05-24:00', time2: '00:05-24:00', time3: '00:05-24:00', time4: '00:05-24:00',time5: '00:05-24:00'},
        { name: 'DOTUSD', time1: '00:05-24:00', time2: '00:05-24:00', time3: '00:05-24:00', time4: '00:05-24:00',time5: '00:05-24:00'},
        { name: 'EOSUSD', time1: '00:05-24:00', time2: '00:05-24:00', time3: '00:05-24:00', time4: '00:05-24:00',time5: '00:05-24:00'},
        { name: 'LNKUSD', time1: '00:05-24:00', time2: '00:05-24:00', time3: '00:05-24:00', time4: '00:05-24:00',time5: '00:05-24:00'},
        { name: 'XLMUSD', time1: '00:05-24:00', time2: '00:05-24:00', time3: '00:05-24:00', time4: '00:05-24:00',time5: '00:05-24:00'},
        { name: 'KMSUSD', time1: '00:05-24:00', time2: '00:05-24:00', time3: '00:05-24:00', time4: '00:05-24:00',time5: '00:05-24:00'},
        { name: 'SOLUSD', time1: '00:05-24:00', time2: '00:05-24:00', time3: '00:05-24:00', time4: '00:05-24:00',time5: '00:05-24:00'},
        { name: 'MATUSD', time1: '00:05-24:00', time2: '00:05-24:00', time3: '00:05-24:00', time4: '00:05-24:00',time5: '00:05-24:00'},
    ]
}


export default dataForex;