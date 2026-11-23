export const CATEGORIES = [
  "All Categories",
  "Grains and Cereals",
  "Fruits",
  "Vegetables",
  "Tubers and Roots",
  "Poultry and Eggs",
  "Fish and Seafood",
  "Livestock",
  "Processed Farm Products"
];

export const NIGERIAN_STATES = [
  "All States",
  "Abia",
  "Adamawa",
  "Benue",
  "Cross River",
  "Delta",
  "Ebonyi",
  "Edo",
  "Imo",
  "Kaduna",
  "Kano",
  "Kogi",
  "Lagos",
  "Ogun",
  "Oyo",
  "Plateau",
  "Rivers",
  "Sokoto"
];

export const INITIAL_PRODUCTS = [
  {
    id: "agm-prod-001",
    name: "Abakaliki Parboiled Long Grain Rice (50kg)",
    category: "Grains and Cereals",
    price: 68000,
    unit: "50kg bag",
    farmerId: "farm-003",
    farmerName: "Elder Terver Iorfa",
    farmName: "Benue & Ebonyi Grain Alliance",
    location: "Ebonyi",
    town: "Abakaliki Rice Mill",
    stock: 240,
    minOrder: 2,
    qualityGrade: "Grade A Export",
    verified: true,
    rating: 4.9,
    reviewsCount: 38,
    image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=800&q=80",
    harvestDate: "November 2026",
    organic: true,
    inSeason: true,
    description: "Stone-free, premium de-stoned parboiled Nigerian long-grain rice milled with modern sorting optical technology. Highly aromatic with great swelling capacity, favored by top restaurants and caterers across Lagos and Abuja.",
    wholesaleTiers: [
      { qty: 10, discount: "5% off" },
      { qty: 30, discount: "10% off" },
      { qty: 100, discount: "15% off" }
    ]
  },
  {
    id: "agm-prod-002",
    name: "Fresh Kano Roma Tomatoes (Large Raffia Basket)",
    category: "Vegetables",
    price: 34000,
    unit: "Raffia basket (~45kg)",
    farmerId: "farm-001",
    farmerName: "Alh. Ibrahim Garba",
    farmName: "Dan-Kano Irrigation Agro-Estate",
    location: "Kano",
    town: "Kura Irrigation Hub",
    stock: 85,
    minOrder: 1,
    qualityGrade: "Grade A Premium",
    verified: true,
    rating: 4.9,
    reviewsCount: 64,
    image: "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&w=800&q=80",
    harvestDate: "Current Week Harvest",
    organic: false,
    inSeason: true,
    description: "Crisp, thick-fleshed Roma tomatoes with low water content and deep red coloration. Ideal for tomato paste processing, hotel kitchen stocks, and retail supermarkets.",
    wholesaleTiers: [
      { qty: 10, discount: "4% off" },
      { qty: 25, discount: "8% off" },
      { qty: 50, discount: "12% off" }
    ]
  },
  {
    id: "agm-prod-003",
    name: "Zaki-Biam Grade-1 White Yams (Bundle of 100 Tubers)",
    category: "Tubers and Roots",
    price: 125000,
    unit: "Bundle of 100 Tubers",
    farmerId: "farm-003",
    farmerName: "Elder Terver Iorfa",
    farmName: "Benue Green Heartland Co-op",
    location: "Benue",
    town: "Zaki-Biam International Yam Market",
    stock: 140,
    minOrder: 1,
    qualityGrade: "Grade A Export",
    verified: true,
    rating: 5.0,
    reviewsCount: 92,
    image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=800&q=80",
    harvestDate: "October 2026",
    organic: true,
    inSeason: true,
    description: "Authentic Benue white yams harvested from fertile alluvial soils of Benue River basin. Zero bruising, huge tuber circumference, perfect for pounding or wholesale food packing.",
    wholesaleTiers: [
      { qty: 5, discount: "6% off" },
      { qty: 15, discount: "12% off" }
    ]
  },
  {
    id: "agm-prod-004",
    name: "Pure Traditional Nsukka/Abia Red Palm Oil (25L Jerrycan)",
    category: "Processed Farm Products",
    price: 32500,
    unit: "25L Jerrycan",
    farmerId: "farm-004",
    farmerName: "Chief Emeka Nwachukwu",
    farmName: "Abia Palm & Agro Processing",
    location: "Abia",
    town: "Aba / Ukwa Palm Mills",
    stock: 160,
    minOrder: 2,
    qualityGrade: "Grade A Export",
    verified: true,
    rating: 4.95,
    reviewsCount: 51,
    image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&w=800&q=80",
    harvestDate: "November 2026",
    organic: true,
    inSeason: true,
    description: "100% unadulterated cold/low-heat processed crude red palm oil. Low Free Fatty Acid (FFA < 3%), thick texture, zero artificial coloring or additives.",
    wholesaleTiers: [
      { qty: 10, discount: "5% off" },
      { qty: 50, discount: "12% off" }
    ]
  },
  {
    id: "agm-prod-005",
    name: "Fresh Live African Catfish (50kg Holding Tank Lot)",
    category: "Fish and Seafood",
    price: 95000,
    unit: "50kg bulk lot (~1.2kg - 1.8kg each)",
    farmerId: "farm-002",
    farmerName: "Mrs. Blessing Akpan",
    farmName: "Rivers Delta Aquaculture",
    location: "Rivers",
    town: "Port Harcourt / Obio-Akpor",
    stock: 35,
    minOrder: 1,
    qualityGrade: "Grade A Premium",
    verified: true,
    rating: 4.85,
    reviewsCount: 29,
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80",
    harvestDate: "Daily live harvest",
    organic: true,
    inSeason: true,
    description: "Vigorously active, clean well-fed table-size African Mud Catfish (Clarias gariepinus). Sourced directly from earthen and concrete river ponds with oxygenated water transit tanks available.",
    wholesaleTiers: [
      { qty: 3, discount: "5% off" },
      { qty: 10, discount: "10% off" }
    ]
  },
  {
    id: "agm-prod-006",
    name: "Fresh Farm Jumbo Brown Eggs (Wholesale 30 Crates)",
    category: "Poultry and Eggs",
    price: 115000,
    unit: "Bundle of 30 Crates (900 eggs)",
    farmerId: "farm-005",
    farmerName: "Dr. Folake Adeleke",
    farmName: "Oyo Sunburst Integrated Poultry",
    location: "Oyo",
    town: "Ibadan Agri-Belt",
    stock: 70,
    minOrder: 1,
    qualityGrade: "Grade A Export",
    verified: true,
    rating: 4.88,
    reviewsCount: 44,
    image: "https://images.unsplash.com/photo-1506976785307-8732e854ad03?auto=format&fit=crop&w=800&q=80",
    harvestDate: "Daily Fresh Collection",
    organic: false,
    inSeason: true,
    description: "Clean, candled, uniform large/jumbo brown eggs from healthy caged battery layers on fortified probiotic feed. Zero breakage guarantee with protective honeycomb carton dividers.",
    wholesaleTiers: [
      { qty: 3, discount: "4% off" },
      { qty: 10, discount: "8% off" }
    ]
  },
  {
    id: "agm-prod-007",
    name: "Fresh Big Horn Green & Semi-Ripe Plantains (50kg)",
    category: "Fruits",
    price: 16500,
    unit: "50kg Bundle (approx. 4 large bunches)",
    farmerId: "farm-002",
    farmerName: "Mrs. Blessing Akpan",
    farmName: "Rivers Delta Aquaculture & Root Farms",
    location: "Edo",
    town: "Benin Agro-Corridor",
    stock: 110,
    minOrder: 2,
    qualityGrade: "Grade A Premium",
    verified: true,
    rating: 4.8,
    reviewsCount: 31,
    image: "https://images.unsplash.com/photo-1528825871115-3581a5387919?auto=format&fit=crop&w=800&q=80",
    harvestDate: "Weekly Harvest",
    organic: true,
    inSeason: true,
    description: "Thick, long Nigerian plantain fingers freshly cut from virgin plantations. Ideal for restaurant dodo slices, bole roasting, or commercial plantain chips processing.",
    wholesaleTiers: [
      { qty: 10, discount: "7% off" },
      { qty: 25, discount: "12% off" }
    ]
  },
  {
    id: "agm-prod-008",
    name: "Fresh Scotch Bonnet Pepper / Ata Rodo (30kg Bag)",
    category: "Vegetables",
    price: 29000,
    unit: "30kg Hessian sack",
    farmerId: "farm-001",
    farmerName: "Alh. Ibrahim Garba",
    farmName: "Dan-Kano Irrigation Agro-Estate",
    location: "Kano",
    town: "Kano Rural Basin",
    stock: 65,
    minOrder: 1,
    qualityGrade: "Grade A Premium",
    verified: true,
    rating: 4.87,
    reviewsCount: 42,
    image: "https://images.unsplash.com/photo-1588252303782-cb80119abd6d?auto=format&fit=crop&w=800&q=80",
    harvestDate: "November 2026",
    organic: false,
    inSeason: true,
    description: "Deep red and orange aromatic scotch bonnet peppers with pungent heat, firm skin, and exceptional shelf-life. Inspected and sorted prior to transit.",
    wholesaleTiers: [
      { qty: 5, discount: "5% off" },
      { qty: 20, discount: "10% off" }
    ]
  },
  {
    id: "agm-prod-009",
    name: "Premium Balami Ram (Heavyweight 55kg Live)",
    category: "Livestock",
    price: 145000,
    unit: "Per Live Ram (~55kg)",
    farmerId: "farm-006",
    farmerName: "Engr. Usman Datti",
    farmName: "Kaduna Pastoral & Silo Ventures",
    location: "Kaduna",
    town: "Zaria Livestock Yards",
    stock: 22,
    minOrder: 1,
    qualityGrade: "Grade A Export",
    verified: true,
    rating: 4.93,
    reviewsCount: 19,
    image: "https://images.unsplash.com/photo-1484557052118-f32bd25b45b5?auto=format&fit=crop&w=800&q=80",
    harvestDate: "Vaccinated & Vet-Certified",
    organic: true,
    inSeason: true,
    description: "Fully vaccinated, docile, pure white Balami ram raised on open savannah and enriched sorghum mash. High meat-to-bone ratio, certified by veterinary authorities.",
    wholesaleTiers: [
      { qty: 5, discount: "6% off" },
      { qty: 10, discount: "10% off" }
    ]
  },
  {
    id: "agm-prod-010",
    name: "TMB Vitamin-A Fortified Cassava Tubers (1 Metric Ton)",
    category: "Tubers and Roots",
    price: 92000,
    unit: "Metric Ton (Farm-gate truckload)",
    farmerId: "farm-002",
    farmerName: "Mrs. Blessing Akpan",
    farmName: "Rivers Delta Aquaculture & Root Farms",
    location: "Rivers",
    town: "Eleme / Ahoada Agro Hub",
    stock: 40,
    minOrder: 1,
    qualityGrade: "Grade A Premium",
    verified: true,
    rating: 4.79,
    reviewsCount: 16,
    image: "https://images.unsplash.com/photo-1590779033100-9f60a05a013d?auto=format&fit=crop&w=800&q=80",
    harvestDate: "Direct Farm Digging",
    organic: true,
    inSeason: true,
    description: "High-starch, yellow vitamin-A bio-fortified cassava roots. Extremely fresh, harvested on day of truck dispatch for garri, fufu, or industrial starch manufacturing plants.",
    wholesaleTiers: [
      { qty: 3, discount: "5% off" },
      { qty: 10, discount: "12% off" }
    ]
  },
  {
    id: "agm-prod-011",
    name: "Premium Crunchy Ijebu White Garri (50kg Bag)",
    category: "Processed Farm Products",
    price: 38000,
    unit: "50kg Sack",
    farmerId: "farm-005",
    farmerName: "Dr. Folake Adeleke",
    farmName: "Oyo Sunburst Integrated",
    location: "Ogun",
    town: "Ijebu-Ode Processing Mill",
    stock: 95,
    minOrder: 1,
    qualityGrade: "Grade A Export",
    verified: true,
    rating: 4.96,
    reviewsCount: 88,
    image: "https://images.unsplash.com/photo-1541832676-9b763b0239ab?auto=format&fit=crop&w=800&q=80",
    harvestDate: "November 2026",
    organic: true,
    inSeason: true,
    description: "Traditional 3-day fermented, finely filtered sour Ijebu garri. Extra crunchy, sand-free, and vacuum-sealed for long term pantry storage.",
    wholesaleTiers: [
      { qty: 10, discount: "6% off" },
      { qty: 30, discount: "12% off" }
    ]
  },
  {
    id: "agm-prod-012",
    name: "Plateau Irish Potatoes (50kg Bag)",
    category: "Tubers and Roots",
    price: 41000,
    unit: "50kg Hessian Bag",
    farmerId: "farm-006",
    farmerName: "Engr. Usman Datti",
    farmName: "Kaduna & Plateau Cold-Belt Farmers",
    location: "Plateau",
    town: "Bokkos / Mangu, Jos",
    stock: 75,
    minOrder: 1,
    qualityGrade: "Grade A Premium",
    verified: true,
    rating: 4.82,
    reviewsCount: 33,
    image: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&w=800&q=80",
    harvestDate: "October 2026",
    organic: true,
    inSeason: false,
    description: "Crispy-frying high dry-matter Irish potatoes cultivated in the cool climate of the Jos Plateau. Perfect for restaurant french fries and culinary dining.",
    wholesaleTiers: [
      { qty: 5, discount: "4% off" },
      { qty: 20, discount: "9% off" }
    ]
  }
];

export const INITIAL_FARMERS = [
  {
    id: "farm-001",
    name: "Alh. Ibrahim Garba",
    farmName: "Dan-Kano Irrigation Agro-Estate",
    location: "Kano State",
    specialty: "Tomatoes, Peppers, Onions & Grain Legumes",
    avatar: "https://images.unsplash.com/photo-1595152772835-219674b2a163?auto=format&fit=crop&w=300&q=80",
    verified: true,
    cacNumber: "RC-2849102",
    rating: 4.9,
    ordersCompleted: 342,
    farmSize: "85 Hectares",
    phone: "+234 803 412 8901",
    email: "garba@dankanoagro.ng",
    badge: "Master Grower",
    bio: "Pioneering drip irrigation farming across the Kano River project for 18 years. Certified Global GAP supplier for hospitality and FMCG distributors."
  },
  {
    id: "farm-002",
    name: "Mrs. Blessing Akpan",
    farmName: "Rivers Delta Aquaculture & Root Farms",
    location: "Rivers State",
    specialty: "Catfish, Bio-fortified Cassava & Plantains",
    avatar: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=300&q=80",
    verified: true,
    cacNumber: "BN-3920194",
    rating: 4.85,
    ordersCompleted: 218,
    farmSize: "32 Hectares + 40 Ponds",
    phone: "+234 814 559 2381",
    email: "blessing@deltaaquafarms.com",
    badge: "Aquaculture Leader",
    bio: "Empowering 120 women outgrowers in Niger Delta wetlands with sustainable aquaculture and zero-waste cassava processing."
  },
  {
    id: "farm-003",
    name: "Elder Terver Iorfa",
    farmName: "Benue Green Heartland Co-op",
    location: "Benue State",
    specialty: "Zaki-Biam Tubers, Grains & Citrus Orchards",
    avatar: "https://images.unsplash.com/photo-1559526323-cb2f2fe2591b?auto=format&fit=crop&w=300&q=80",
    verified: true,
    cacNumber: "COP-049281",
    rating: 4.95,
    ordersCompleted: 512,
    farmSize: "140 Hectares Cooperative",
    phone: "+234 706 882 1044",
    email: "terver@benuheartland.ng",
    badge: "Food Basket Champion",
    bio: "Chairman of the Zaki-Biam Registered Yam Growers Federation. Delivering export-ready tubers and grain harvests direct to major city hubs."
  },
  {
    id: "farm-004",
    name: "Chief Emeka Nwachukwu",
    farmName: "Abia Palm & Agro Processing",
    location: "Abia State",
    specialty: "Pure Red Palm Oil, White Garri & Organic Honey",
    avatar: "https://images.unsplash.com/photo-1507152832244-10d45c7eda57?auto=format&fit=crop&w=300&q=80",
    verified: true,
    cacNumber: "RC-1940294",
    rating: 4.9,
    ordersCompleted: 189,
    farmSize: "60 Hectares Palm Plantation",
    phone: "+234 802 300 4812",
    email: "emeka@abiapalm.com",
    badge: "Processing Veteran",
    bio: "Operating automated low-temperature expeller mills yielding pharmaceutical and export grade Nigerian palm oil."
  },
  {
    id: "farm-005",
    name: "Dr. Folake Adeleke",
    farmName: "Oyo Sunburst Integrated Poultry",
    location: "Oyo State",
    specialty: "Jumbo Table Eggs, Dressed Broilers & Feed",
    avatar: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=300&q=80",
    verified: true,
    cacNumber: "RC-3819024",
    rating: 4.88,
    ordersCompleted: 430,
    farmSize: "45,000 Bird Commercial Farm",
    phone: "+234 812 770 1930",
    email: "folake@sunburstpoultry.ng",
    badge: "Poultry Specialist",
    bio: "Doctor of Veterinary Medicine managing a biosecure poultry production hub supplying major Lagos supermarket chains and hotels."
  },
  {
    id: "farm-006",
    name: "Engr. Usman Datti",
    farmName: "Kaduna Pastoral & Silo Ventures",
    location: "Kaduna State",
    specialty: "Balami Rams, Boer Goats, Sorghum & Maize",
    avatar: "https://images.unsplash.com/photo-1548504769-900b70ed122e?auto=format&fit=crop&w=300&q=80",
    verified: true,
    cacNumber: "RC-4109281",
    rating: 4.86,
    ordersCompleted: 275,
    farmSize: "110 Hectares Mixed Ranch",
    phone: "+234 805 119 4432",
    email: "usman@kadunapastoral.com",
    badge: "Livestock Innovator",
    bio: "Integrating solar-powered borehole feeding stations and digital livestock traceability across Northern commercial routes."
  }
];

export const SEASONAL_CALENDAR = [
  {
    month: "January",
    inSeason: ["Tomatoes", "Onions", "Dry Season Maize", "Watermelons", "Irish Potatoes"],
    status: "Peak northern irrigation harvest",
    description: "Kano and Sokoto irrigation corridors at maximum yield for red vegetables."
  },
  {
    month: "February",
    inSeason: ["Carrots", "Bell Peppers", "Sweet Oranges", "Cassava", "Catfish"],
    status: "Dry season harvest ongoing",
    description: "Great month for sourcing low-moisture vegetables with extended transit durability."
  },
  {
    month: "March",
    inSeason: ["Early Mangoes", "Plantains", "Poultry", "Palm Oil", "Cashew Nuts"],
    status: "New palm oil season starts",
    description: "Freshly pressed palm oil in Abia/Imo and South-South begins arriving at best rates."
  },
  {
    month: "April",
    inSeason: ["Mangoes", "Palm Oil", "Pineapples", "Early Sweet Potatoes"],
    status: "Early rains in South",
    description: "South agricultural regions prepare for main crop cultivation while fruit yields surge."
  },
  {
    month: "May",
    inSeason: ["Garden Eggs", "Cucumber", "Plantains", "Fluted Pumpkin (Ugu)"],
    status: "Green leaf abundance",
    description: "Fresh vegetable greens from rainforest belt at peak tenderness and lowest prices."
  },
  {
    month: "June",
    inSeason: ["Early Green Maize", "Avocados", "Fresh Okra", "Tilapia Fish"],
    status: "Fresh corn celebrations",
    description: "First wave of roasted and boiled farm-fresh maize hits markets from South-West."
  },
  {
    month: "July",
    inSeason: ["Green Maize", "Cowpeas", "Ugu Leaves", "Smoked Crayfish"],
    status: "Mid-year harvest",
    description: "Heavy rains support inland freshwater fishing and fast-cycle legume harvests."
  },
  {
    month: "August",
    inSeason: ["New White Yams", "Groundnuts", "Pears (Ube)", "Maize Grain"],
    status: "Famous New Yam Festival",
    description: "Zaki-Biam, Cross River and Ogidi new yams enter markets. Highest quality yam tubers of the year."
  },
  {
    month: "September",
    inSeason: ["White & Yellow Yams", "Soybeans", "Rice Harvesting Starts", "Sweet Potatoes"],
    status: "Grains & tubers bounty",
    description: "Middle belt and Eastern farmers begin mass harvest of tubers and cereal staples."
  },
  {
    month: "October",
    inSeason: ["Abakaliki Rice", "Benue Yams", "Sorghum", "Millet", "Broiler Chickens"],
    status: "Peak paddy milling",
    description: "Northern and Middle-Belt grain silos reach maximum capacity. Superb prices for bulk grain storage."
  },
  {
    month: "November",
    inSeason: ["Paddy Rice", "Tomatoes", "Scotch Bonnet Peppers", "Palm Oil", "Goats & Rams"],
    status: "Harmattan transition season (CURRENT)",
    description: "Dry season irrigation ramps up across the North. Major food stocking begins ahead of festive holidays."
  },
  {
    month: "December",
    inSeason: ["Live Livestock (Rams & Cattle)", "Broilers & Eggs", "Yams", "Onions", "Dry Fish"],
    status: "Peak festive procurement",
    description: "Highest demand season for proteins, poultry, livestock, and festive catering staples."
  }
];

export const INITIAL_ORDERS = [
  {
    id: "AGM-ORD-8821",
    date: "2026-11-08",
    buyerName: "Chef Deji Balogun",
    buyerType: "Restaurant",
    businessName: "Terra Kulture & Lounge, Victoria Island",
    deliveryAddress: "Plot 1376 Savage Street, Victoria Island, Lagos State",
    items: [
      {
        id: "agm-prod-002",
        name: "Fresh Kano Roma Tomatoes (Large Raffia Basket)",
        price: 34000,
        unit: "Raffia basket (~45kg)",
        quantity: 3,
        farmerName: "Alh. Ibrahim Garba",
        farmerId: "farm-001"
      },
      {
        id: "agm-prod-008",
        name: "Fresh Scotch Bonnet Pepper / Ata Rodo (30kg Bag)",
        price: 29000,
        unit: "30kg Hessian sack",
        quantity: 2,
        farmerName: "Alh. Ibrahim Garba",
        farmerId: "farm-001"
      }
    ],
    subtotal: 160000,
    deliveryFee: 15000,
    total: 175000,
    paymentMethod: "Bank Transfer (Virtual Account)",
    paymentStatus: "Paid",
    status: "In Transit",
    timeline: [
      { stage: "Pending", time: "08 Nov, 08:30 AM", done: true, desc: "Order placed & verified" },
      { stage: "Confirmed", time: "08 Nov, 09:15 AM", done: true, desc: "Confirmed by Dan-Kano Agro" },
      { stage: "Processing", time: "08 Nov, 12:00 PM", done: true, desc: "Graded and crated in Kano hub" },
      { stage: "Shipped", time: "09 Nov, 04:30 AM", done: true, desc: "Loaded on refrigerated line-haul truck" },
      { stage: "Delivered", time: "Estimated Tomorrow 10:00 AM", done: false, desc: "Final mile dispatch in Lagos" }
    ],
    trackingCode: "TRK-LOS-KN-94021"
  },
  {
    id: "AGM-ORD-8819",
    date: "2026-11-07",
    buyerName: "Ngozi Obi",
    buyerType: "Supermarket",
    businessName: "Hubmart Stores Procurement",
    deliveryAddress: "Hubmart Logistics Hub, Ikeja GRA, Lagos State",
    items: [
      {
        id: "agm-prod-001",
        name: "Abakaliki Parboiled Long Grain Rice (50kg)",
        price: 68000,
        unit: "50kg bag",
        quantity: 20,
        farmerName: "Elder Terver Iorfa",
        farmerId: "farm-003"
      }
    ],
    subtotal: 1360000,
    deliveryFee: 45000,
    total: 1405000,
    paymentMethod: "Corporate Bank Transfer",
    paymentStatus: "Paid",
    status: "Delivered",
    timeline: [
      { stage: "Pending", time: "07 Nov, 10:00 AM", done: true, desc: "Bulk order submitted" },
      { stage: "Confirmed", time: "07 Nov, 10:45 AM", done: true, desc: "Stock reserved at Abakaliki" },
      { stage: "Processing", time: "07 Nov, 02:00 PM", done: true, desc: "Quality inspection certificate attached" },
      { stage: "Shipped", time: "08 Nov, 06:00 AM", done: true, desc: "Dispatched via Interstate Agromatch Hauler" },
      { stage: "Delivered", time: "09 Nov, 11:20 AM", done: true, desc: "Signed off at Hubmart Warehouse Ikeja" }
    ],
    trackingCode: "TRK-LOS-EB-81920"
  }
];

export const INITIAL_MESSAGES = [
  {
    id: "msg-001",
    senderId: "buyer-001",
    senderName: "Chef Deji Balogun (Terra Kulture)",
    recipientId: "farm-001",
    farmerName: "Alh. Ibrahim Garba",
    cropSubject: "Fresh Kano Roma Tomatoes (Weekly Supply)",
    timestamp: "Today, 10:45 AM",
    messages: [
      {
        id: "m-1",
        sender: "buyer",
        text: "Salaam Alh. Ibrahim. We run 3 fine-dining restaurants in VI and Lekki. Can your farm guarantee 6 large baskets of firm Roma tomatoes delivered every Tuesday morning?",
        time: "10:45 AM"
      },
      {
        id: "m-2",
        sender: "farmer",
        text: "Wa alaykumu salam Chef Deji! Yes, definitely. We pick from our irrigated greenhouse rows on Monday evenings and load onto our overnight cold-chain dispatch. The shelf-life will give you 10+ days crisp freshness.",
        time: "10:52 AM"
      },
      {
        id: "m-3",
        sender: "buyer",
        text: "That sounds excellent. What discount rate can you give for a recurring monthly standing order of 24 baskets?",
        time: "11:05 AM"
      },
      {
        id: "m-4",
        sender: "farmer",
        text: "For 24 baskets locked monthly, I can offer ₦31,000 per basket instead of the standard ₦34,000 rate, plus priority allocation. Let's set up a bulk contract on your dashboard!",
        time: "11:12 AM"
      }
    ]
  },
  {
    id: "msg-002",
    senderId: "buyer-002",
    senderName: "Amaka Eze (Shoprite Fresh Desk)",
    recipientId: "farm-003",
    farmerName: "Elder Terver Iorfa",
    cropSubject: "Zaki-Biam Tubers for Festive Stocking",
    timestamp: "Yesterday, 03:20 PM",
    messages: [
      {
        id: "m-201",
        sender: "buyer",
        text: "Good afternoon Elder Terver. We want to inspect your batch of Grade-1 White Yams for our upcoming December warehouse distribution in Abuja.",
        time: "03:20 PM"
      },
      {
        id: "m-202",
        sender: "farmer",
        text: "Good day Madam Amaka. All our tubers are freshly cured with zero rot. We have 5 trailer-loads (approx. 10,000 tubers) ready at our Zaki-Biam central loading bay.",
        time: "03:45 PM"
      }
    ]
  }
];

export const INITIAL_BULK_REQUESTS = [
  {
    id: "RFQ-2026-001",
    buyerName: "Golden Tulip Hotels Abuja",
    buyerType: "Hospitality & Restaurant",
    crop: "Table Eggs & Fresh Broilers",
    requiredQuantity: "150 Crates Eggs & 200 Broilers Weekly",
    targetDeliveryState: "FCT Abuja",
    budgetPerUnit: "₦3,700 per crate / ₦4,200 per bird",
    status: "Active / Receiving Quotes",
    dateSubmitted: "2026-11-06",
    quotesReceived: 4
  },
  {
    id: "RFQ-2026-002",
    buyerName: "Goodies Supermarkets Lagos",
    buyerType: "Retailer Chain",
    crop: "Abakaliki Parboiled Rice (50kg)",
    requiredQuantity: "500 Bags",
    targetDeliveryState: "Lagos State",
    budgetPerUnit: "₦65,000 per bag",
    status: "In Negotiation",
    dateSubmitted: "2026-11-07",
    quotesReceived: 7
  },
  {
    id: "RFQ-2026-003",
    buyerName: "Mama Cass Food Services",
    buyerType: "Commercial Food Distributor",
    crop: "Red Palm Oil (25L Jerrycans)",
    requiredQuantity: "120 Jerrycans",
    targetDeliveryState: "Oyo / Ibadan Depot",
    budgetPerUnit: "₦31,000 per jerrycan",
    status: "Active / Receiving Quotes",
    dateSubmitted: "2026-11-09",
    quotesReceived: 3
  }
];

export const TESTIMONIALS = [
  {
    id: "test-1",
    name: "Alhaji Ibrahim Garba",
    role: "Tomato & Pepper Farmer, Kano State",
    image: "https://images.unsplash.com/photo-1595152772835-219674b2a163?auto=format&fit=crop&w=200&q=80",
    quote: "Before AGROMATCH, aggressive brokers at the market gate took up to 40% of my harvest value. Now, restaurant chefs in Lagos and Abuja order directly from my farm. My annual earnings have jumped by 58%, and payment is secured through AGROMATCH escrow."
  },
  {
    id: "test-2",
    name: "Chef Deji Balogun",
    role: "Executive Head Chef, Terra Kulture & Lounge, Lagos",
    image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=200&q=80",
    quote: "Sourcing fresh farm ingredients used to mean sending staff to Mile 12 at 4:00 AM to haggle with inconsistent quality. With AGROMATCH, I receive farm-graded tomatoes, Benue yams, and live catfish delivered right to our kitchen dock with certified traceability."
  },
  {
    id: "test-3",
    name: "Mrs. Blessing Akpan",
    role: "Aquaculture & Cassava Producer, Rivers State",
    image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=200&q=80",
    quote: "We used to lose live catfish when buyers delayed. The AGROMATCH platform gives us guaranteed pre-orders and connects us with cold-chain transport. It has transformed our 40-pond aquaculture business completely."
  },
  {
    id: "test-4",
    name: "Tunde Adelowo",
    role: "Procurement Director, GreenGrocer Supermarkets, Abuja",
    image: "https://images.unsplash.com/photo-1559526323-cb2f2fe2591b?auto=format&fit=crop&w=200&q=80",
    quote: "The wholesale RFQ tool is a game changer for our 6 retail outlets. We submit our bulk order requirements on Monday, review quotes from verified cooperatives across Nigeria, and achieve 18% cost savings while supporting indigenous farmers."
  }
];
