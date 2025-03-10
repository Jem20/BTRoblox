"use strict"

const RobuxToCash = {
	// cash is in cents
	
	UpdateDate: "January 25, 2024",
	
	Currencies: {
		None: { symbol: "" },
		
		USD: {
			symbol: "$",
			robuxRates: [[499, 400], [999, 800], [1999, 1700], [4999, 4500], [9999, 10000], [19999, 22500]],
			robuxRatesPremium: [[499, 440], [999, 880], [1999, 1870], [4999, 4950], [9999, 11000], [19999, 25000]],
			subscriptionRates: [[499, 450], [999, 1000], [1999, 2200]]
		},
		CAD: {
			symbol: "CAD",
			robuxRates: [[699, 440], [1399, 880], [2799, 1870], [6999, 4950], [13999, 11000], [27999, 24750]],
			robuxRatesPremium: [[699, 480], [1399, 970], [2799, 2050], [6999, 5450], [13999, 12100], [27999, 25000]],
			subscriptionRates: [[699, 450], [1399, 1000], [2799, 2200]]
		},
		GBP: {
			symbol: "£",
			robuxRates: [[449, 400], [899, 800], [1799, 1700], [4499, 4500], [8999, 10000]],
			robuxRatesPremium: [[449, 440], [899, 880], [1799, 1870], [4499, 4950], [8999, 11000]],
			subscriptionRates: [[449, 450], [899, 1000], [1799, 2200]]
		},
		EUR: {
			symbol: "€",
			robuxRates: [[599, 400], [1199, 800], [2399, 1700], [5999, 4500], [11999, 10000], [23999, 22500]],
			robuxRatesPremium: [[599, 440], [1199, 880], [2399, 1870], [5999, 4950], [11999, 11000], [23999, 25000]],
			subscriptionRates: [[599, 450], [1199, 1000], [2399, 2200]]
		},
		AUD: {
			symbol: "AU$",
			robuxRates: [[799, 400], [1499, 800], [3099, 1700], [7999, 4500], [15999, 10000], [31999, 22500]],
			robuxRatesPremium: [[799, 440], [1499, 880], [3099, 1870], [7999, 4950], [15999, 11000], [31999, 25000]],
			subscriptionRates: [[799, 450], [1499, 1000], [3099, 2200]]
		},
		BRL: {
			symbol: "R$",
			robuxRates: [[2790, 400], [5490, 800], [10990, 1700], [27990, 4500], [54990, 10000]],
			robuxRatesPremium: [[2790, 440], [5490, 880], [10990, 1870], [27990, 4950], [54990, 11000]],
			subscriptionRates: [[2790, 450], [5490, 1000], [10990, 2200]]
		},
		CLP: {
			symbol: "CLP",
			robuxRates: [[550000, 400], [1090000, 800], [2190000, 1700], [5490000, 4500], [10990000, 10000], [21990000, 22500]],
			robuxRatesPremium: [[550000, 440], [1090000, 880], [2190000, 1870], [5490000, 4950], [10990000, 11000], [21990000, 25000]],
			subscriptionRates: [[550000, 450], [1090000, 1000], [2190000, 2200]]
		},
		HKD: {
			symbol: "HK$",
			robuxRates: [[3800, 400], [7800, 800], [15800, 1700], [39800, 4500], [78800, 10000], [158800, 22500]],
			robuxRatesPremium: [[3800, 440], [7800, 880], [15800, 1870], [39800, 4950], [78800, 11000], [158800, 25000]],
			subscriptionRates: [[3800, 450], [7800, 1000], [15800, 2200]]
		},
		JPY: {
			symbol: "JP¥",
			robuxRates: [[80000, 400], [160000, 800], [320000, 1700], [800000, 4500], [1580000, 10000], [3180000, 22500]],
			robuxRatesPremium: [[80000, 440], [160000, 880], [320000, 1870], [800000, 4950], [1580000, 11000], [3180000, 25000]],
			subscriptionRates: [[80000, 450], [160000, 1000], [320000, 2200]]
		},
		MXN: {
			symbol: "MX$",
			robuxRates: [[12900, 400], [24900, 800], [49900, 1700], [129900, 4500], [249900, 10000], [499900, 22500]],
			robuxRatesPremium: [[12900, 440], [24900, 880], [49900, 1870], [129900, 4950], [249900, 11000], [499900, 25000]],
			subscriptionRates: [[12900, 450], [24900, 1000], [49900, 2200]]
		},
		NZD: {
			symbol: "NZ$",
			robuxRates: [[899, 400], [1699, 800], [3499, 1700], [8999, 4500], [16999, 10000], [34999, 22500]],
			robuxRatesPremium: [[899, 440], [1699, 880], [3499, 1870], [8999, 4950], [16999, 11000], [34999, 25000]],
			subscriptionRates: [[899, 450], [1699, 1000], [3499, 2200]]
		},
		KRW: {
			symbol: "₩",
			robuxRates: [[750000, 400], [1500000, 800], [3000000, 1700], [7900000, 4500], [14900000, 10000], [29900000, 22500]],
			robuxRatesPremium: [[750000, 440], [1500000, 880], [3000000, 1870], [7900000, 4950], [14900000, 11000], [29900000, 25000]],
			subscriptionRates: [[750000, 450], [1500000, 1000], [3000000, 2200]]
		},
		TWD: {
			symbol: "NT$",
			robuxRates: [[17000, 400], [33000, 800], [67000, 1700], [169000, 4500], [329000, 10000], [659000, 22500]],
			robuxRatesPremium: [[17000, 440], [33000, 880], [67000, 1870], [169000, 4950], [329000, 11000], [659000, 25000]],
			subscriptionRates: [[17000, 450], [33000, 1000], [67000, 2200]]
		},
		
		// Currency has a fixed usd exchange rate
		
		AED: { symbol: "", usdRate: 3.6725, fixed: true },
		ANG: { symbol: "", usdRate: 1.79, fixed: true },
		AWG: { symbol: "", usdRate: 1.79, fixed: true },
		BBD: { symbol: "$", usdRate: 2, fixed: true },
		BHD: { symbol: "", usdRate: 0.376, fixed: true },
		BMD: { symbol: "$", usdRate: 1, fixed: true },
		BSD: { symbol: "$", usdRate: 1, fixed: true },
		BZD: { symbol: "$", usdRate: 2, fixed: true },
		CUC: { symbol: "", usdRate: 1, fixed: true },
		DJF: { symbol: "", usdRate: 177.7721, fixed: true },
		ERN: { symbol: "Nfk ", usdRate: 15, fixed: true },
		JOD: { symbol: "", usdRate: 0.709, fixed: true },
		KYD: { symbol: "$", usdRate: 1 / 1.20, fixed: true },
		LBP: { symbol: "", usdRate: 1507.5, fixed: true },
		OMR: { symbol: "", usdRate: 0.3845, fixed: true },
		PAB: { symbol: "", usdRate: 1, fixed: true },
		QAR: { symbol: "", usdRate: 3.64, fixed: true },
		SAR: { symbol: "", usdRate: 3.75, fixed: true },
		SVC: { symbol: "", usdRate: 8.75, fixed: true },
		XCD: { symbol: "EC$", usdRate: 2.70, fixed: true },
		
		// Fluctuating exchange rates
		
		AFN: { symbol: "", usdRate: 72.8853944533 },
		ALL: { symbol: "", usdRate: 95.3626285861 },
		AMD: { symbol: "", usdRate: 404.2168197847 },
		AOA: { symbol: "", usdRate: 847.2336856595 },
		ARS: { symbol: "", usdRate: 822.3900267331 },
		AZN: { symbol: "", usdRate: 1.702013731 },
		BAM: { symbol: "", usdRate: 1.798365328 },
		BDT: { symbol: "", usdRate: 109.7317473961 },
		BGN: { symbol: "", usdRate: 1.798365328 },
		BIF: { symbol: "FBu ", usdRate: 2853.6078336233 },
		BND: { symbol: "", usdRate: 1.34005725 },
		BOB: { symbol: "", usdRate: 6.9013246329 },
		BTN: { symbol: "", usdRate: 83.0970759692 },
		BWP: { symbol: "P ", usdRate: 13.7227167364 },
		BYN: { symbol: "", usdRate: 3.294846059 },
		CDF: { symbol: "", usdRate: 2739.5168096307 },
		CHF: { symbol: "", usdRate: 0.8642919468 },
		CLF: { symbol: "", usdRate: 0.0247300006 },
		CNY: { symbol: "CN¥", usdRate: 7.1327380893 },
		COP: { symbol: "COP", usdRate: 3912.0682803151 },
		CRC: { symbol: "", usdRate: 512.6372692747 },
		CUP: { symbol: "", usdRate: 23.9743060719 },
		CVE: { symbol: "", usdRate: 101.3921172678 },
		CZK: { symbol: "", usdRate: 22.8310161826 },
		DKK: { symbol: "", usdRate: 6.8560197617 },
		DOP: { symbol: "", usdRate: 58.5905995632 },
		DZD: { symbol: "", usdRate: 134.3053527733 },
		EGP: { symbol: "", usdRate: 30.894540888 },
		ETB: { symbol: "", usdRate: 56.594889135 },
		FJD: { symbol: "$", usdRate: 2.252723276 },
		FKP: { symbol: "£", usdRate: 0.7868354917 },
		GEL: { symbol: "", usdRate: 2.6718879672 },
		GHS: { symbol: "GH₵", usdRate: 12.1097328558 },
		GIP: { symbol: "£", usdRate: 0.7868354917 },
		GMD: { symbol: "D ", usdRate: 67.3790751834 },
		GNF: { symbol: "", usdRate: 8626.4462822288 },
		GTQ: { symbol: "", usdRate: 7.8128330004 },
		GYD: { symbol: "$", usdRate: 208.8597024506 },
		HNL: { symbol: "", usdRate: 24.7352096713 },
		HRK: { symbol: "", usdRate: 6.9278943281 },
		HTG: { symbol: "", usdRate: 131.6136616214 },
		HUF: { symbol: "", usdRate: 355.9483529506 },
		IDR: { symbol: "", usdRate: 15716.4685646672 },
		ILS: { symbol: "₪", usdRate: 3.701365637 },
		INR: { symbol: "₹", usdRate: 83.0970759692 },
		IQD: { symbol: "", usdRate: 1309.2741448212 },
		IRR: { symbol: "", usdRate: 41702.3575572267 },
		ISK: { symbol: "", usdRate: 135.9993737288 },
		JMD: { symbol: "$", usdRate: 155.4571209618 },
		KES: { symbol: "Ksh", usdRate: 163.394266057 },
		KGS: { symbol: "", usdRate: 89.3135186015 },
		KHR: { symbol: "", usdRate: 4087.3374560443 },
		KMF: { symbol: "", usdRate: 452.3592255373 },
		KPW: { symbol: "", usdRate: 899.9859371751 },
		KWD: { symbol: "", usdRate: 0.307673043 },
		KZT: { symbol: "", usdRate: 446.9250260727 },
		LAK: { symbol: "", usdRate: 20755.7654494752 },
		LKR: { symbol: "", usdRate: 318.4760374977 },
		LRD: { symbol: "$", usdRate: 190.1211315844 },
		LSL: { symbol: "", usdRate: 18.9147042213 },
		LYD: { symbol: "", usdRate: 4.8196719394 },
		MAD: { symbol: "", usdRate: 9.9601172549 },
		MDL: { symbol: "", usdRate: 17.6976060129 },
		MGA: { symbol: "Ar ", usdRate: 4545.1071483324 },
		MKD: { symbol: "", usdRate: 56.508942194 },
		MMK: { symbol: "", usdRate: 2097.8895395476 },
		MNT: { symbol: "", usdRate: 3421.3434621911 },
		MOP: { symbol: "MOP$", usdRate: 8.0526324362 },
		MUR: { symbol: "Rs ", usdRate: 44.4716476043 },
		MVR: { symbol: "", usdRate: 15.3603100574 },
		MWK: { symbol: "MK ", usdRate: 1682.8372338459 },
		MXV: { symbol: "", usdRate: 2.1358181277 },
		MYR: { symbol: "RM ", usdRate: 4.7290064794 },
		MZN: { symbol: "", usdRate: 63.8221756255 },
		NAD: { symbol: "$", usdRate: 18.9147042213 },
		NGN: { symbol: "₦", usdRate: 900.2635254121 },
		NIO: { symbol: "", usdRate: 36.7012858095 },
		NOK: { symbol: "", usdRate: 10.4751588579 },
		NPR: { symbol: "", usdRate: 133.0176443577 },
		PEN: { symbol: "", usdRate: 3.7627612059 },
		PGK: { symbol: "K ", usdRate: 3.7396997029 },
		PHP: { symbol: "₱", usdRate: 56.2760600508 },
		PKR: { symbol: "Rs ", usdRate: 279.8235614528 },
		PLN: { symbol: "", usdRate: 4.0266401299 },
		PYG: { symbol: "", usdRate: 7307.7588657278 },
		RON: { symbol: "", usdRate: 4.57652624 },
		RSD: { symbol: "", usdRate: 107.7754191804 },
		RUB: { symbol: "", usdRate: 90.0480477209 },
		RWF: { symbol: "RF ", usdRate: 1287.2280570246 },
		SBD: { symbol: "$", usdRate: 8.3032451803 },
		SCR: { symbol: "Rs ", usdRate: 13.3678809378 },
		SDG: { symbol: "", usdRate: 600.9588464959 },
		SEK: { symbol: "", usdRate: 10.4484747276 },
		SGD: { symbol: "$", usdRate: 1.34005725 },
		SHP: { symbol: "£", usdRate: 0.7868354917 },
		SLL: { symbol: "Le ", usdRate: 22562.4471689689 },
		SOS: { symbol: "", usdRate: 570.5779757545 },
		SRD: { symbol: "", usdRate: 36.8936619195 },
		SYP: { symbol: "", usdRate: 13001.8599717836 },
		SZL: { symbol: "E ", usdRate: 18.9147042213 },
		THB: { symbol: "", usdRate: 35.7630911859 },
		TJS: { symbol: "", usdRate: 10.9271328849 },
		TMT: { symbol: "", usdRate: 3.4934721059 },
		TND: { symbol: "", usdRate: 3.1073922574 },
		TOP: { symbol: "T$", usdRate: 2.3639633194 },
		TRY: { symbol: "", usdRate: 30.2585892451 },
		TTD: { symbol: "$", usdRate: 6.7929135726 },
		TZS: { symbol: "TSh ", usdRate: 2518.8855555981 },
		UAH: { symbol: "", usdRate: 37.4657327343 },
		UGX: { symbol: "USh ", usdRate: 3815.6022286416 },
		UYU: { symbol: "", usdRate: 38.6967607304 },
		UZS: { symbol: "", usdRate: 12412.8577159726 },
		VES: { symbol: "", usdRate: 36.0761957589 },
		VND: { symbol: "₫", usdRate: 24661.494791158 },
		VUV: { symbol: "VT ", usdRate: 120.0590155701 },
		WST: { symbol: "WS$", usdRate: 2.7424361592 },
		XAF: { symbol: "FCFA ", usdRate: 603.1456340497 },
		YER: { symbol: "", usdRate: 250.1833437736 },
		ZAR: { symbol: "R ", usdRate: 18.9147042213 },
		ZMW: { symbol: "K ", usdRate: 26.8298089336 },
	},
	
	OptionLists: {
		None: [
			{ name: "none", cash: 1, robux: 1 }
		],
		USD: [
			{ name: "devex", cash: 350, robux: 1000 }
		]
	},

	Options: {},
	
	isEnabled() {
		return this.getSelectedOption() !== this.Options.none
	},
	
	getSelectedOption() {
		if(!SETTINGS.loaded) {
			return this.Options.none
		}

		return this.Options[SETTINGS.get("general.robuxToUSDRate")] || this.Options.none
	},

	convertAngular(expr) {
		const option = this.getSelectedOption()

		return `${option.currency.symbol}{{((${expr})*${option.cash}/${option.robux} + 0.4999)/100 | number: ${option.currency.numFractions}}}`
	},

	convert(robux) {
		const option = this.getSelectedOption()

		const cash = Math.round((robux * option.cash) / option.robux + 0.4999) / 100
		const cashString = formatNumber(cash.toFixed(option.currency.numFractions))

		return `${option.currency.symbol}${cashString}`
	}
}


for(const [name, currency] of Object.entries(RobuxToCash.Currencies)) {
	currency.name = name
	currency.numFractions = 2
	
	if(!currency.symbol || (currency.usdRate && (currency.symbol === "$" || currency.symbol === "£"))) {
		currency.symbol = `${name} `
	}
	
	if(name === "None") { continue }
	
	try { currency.numFractions = new Intl.NumberFormat("en-US", { style: "currency", currency: name }).resolvedOptions().maximumFractionDigits }
	catch(ex) {}

	const options = RobuxToCash.OptionLists[name] = RobuxToCash.OptionLists[name] || []
	const refCurrency = currency.usdRate ? RobuxToCash.Currencies.USD : currency
	
	for(const [index, rate] of Object.entries(refCurrency.robuxRates)) {
		const option = { name: `${name.toLowerCase()}Regular${index}`, cash: rate[0], robux: rate[1] }
		
		if(currency.usdRate) {
			option.usdCash = option.cash
			option.cash *= currency.usdRate
		}
		
		options.push(option)
	}
	
	for(const [index, rate] of Object.entries(refCurrency.robuxRatesPremium)) {
		const option = { name: `${name.toLowerCase()}Premium${index}`, cash: rate[0], robux: rate[1] }
		
		if(currency.usdRate) {
			option.usdCash = option.cash
			option.cash *= currency.usdRate
		}
		
		options.push(option)
	}
	
	for(const [index, rate] of Object.entries(refCurrency.subscriptionRates)) {
		const option = { name: `${name.toLowerCase()}Subscription${index}`, cash: rate[0], robux: rate[1] }
		
		if(currency.usdRate) {
			option.usdCash = option.cash
			option.cash *= currency.usdRate
		}
		
		options.push(option)
	}
}

for(const [name, options] of Object.entries(RobuxToCash.OptionLists)) {
	const currency = RobuxToCash.Currencies[name]
	
	for(const option of options) {
		option.currency = currency
		RobuxToCash.Options[option.name] = option
	}
}