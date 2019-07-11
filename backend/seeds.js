const User = require('./models/User')
const Computer = require('./models/Computer')
const Favorite = require('./models/Favorite')
const Recommendation = require('./models/Recommendation')
const Spec = require('./models/Spec')
const Review = require('./models/Review')

// User.sync()
// Computer.sync()
// Favorite.sync()
// Recommendation.sync()
// Spec.sync()
// Review.sync()


Computer.hasMany(Favorite, {as: 'favorites', foreignKey:'computerId', onDelete: 'cascade', hooks:true})
Computer.hasMany(Review, {as: 'reviews', foreignKey:'computerId', onDelete: 'cascade', hooks:true})
// Computer.hasMany(Recommendation, {as: 'recommendation', foreignKey:'computerId', onDelete: 'cascade', hooks: true})
// Computer.belongsToMany(User, {through: Favorite })

// Computer.belongsToMany(User, {through: Favorite })
// User.belongsToMany(Computer, {through: Favorite })

// User.sync()
// Computer.sync()
// Favorite.sync()

const users = [
    {
        username: "Fizzbuzz",
        passwordhash: "Fish",
        name: "Jane Doe",
        isverified: false,
        isadmin: false
    },
    {
        username: "FooBar",
        passwordhash: "Cow",
        name: "John Snow",
        isverified: true,
        isadmin: false
    }

]

const computers = [
    {
        name: "Macbook Pro 2019 with Touch Bar",
        make: "Apple",
        model: "MV912LL/A",
        OEMURL: "https://www.apple.com/macbook-pro/specs/",
        os: "Mac OS",
        msrp: 2799,
        img: "https://c1.neweggimages.com/ProductImageCompressAll1280/ABMT_1_201906181656126043.jpg",
        type: "Laptop",
        size: "15.6 Inches",
        cpuName: "Intel Core i9",
        gpuName: "Radeon Pro 560X",
        cpuTier: 6,
        cpuBrand: "Intel",
        gpuBrand: "AMD",
        gpuTier: 3,
        ramAmount: 16,
        ramUnit: "GB",
        ramType: "DDR4",
        ishidden: false,
        newegg: "https://www.newegg.com/p/2SN-0001-01059?Description=macbook%20i9&cm_re=macbook_i9-_-9SIABMT9DY0338-_-Product",        
        uploadedby: "MASTER"
    },
    {
        name: "Gamer Supreme",
        make: "CyberpowerPC",
        model: "SLC9080CPG ",
        OEMURL: "https://www.cyberpowerpc.com/",
        os: "Windows 10",
        msrp: 2049,
        img: "https://c1.neweggimages.com/ProductImageCompressAll1280/83-230-391-V01.jpg",
        type: "Desktop",
        size: "N/A",
        cpuName: "Ryzen 7 2700X",
        gpuName: "NVIDIA GeForce RTX 2080",
        cpuTier: 5,
        cpuBrand: "AMD",
        gpuBrand: "Nvidia",
        gpuTier: 6,
        ramAmount: 16,
        ramUnit: "GB",
        ramType: "DDR4",
        ishidden: false,
        newegg: "https://www.newegg.com/cyberpowerpc-gamer-supreme-slc9080cpg/p/N82E16883230391",        
        uploadedby: "MASTER"
    },
    {
        name: "MediaTek S330",
        make: "Lenovo",
        model: "MTK MT8173C",
        OEMURL: "https://www.lenovo.com/us/en/laptops/lenovo/lenovo-n-series/Lenovo-Chromebook-S330/p/88LGCS31095",
        os: "chrome",
        msrp: 279,
        img: "https://c1.neweggimages.com/NeweggImage/ProductImageCompressAll1280/34-847-233-V17.jpg",
        type: "Laptop",
        size: "14 Inches",
        cpuName: "MTK",
        gpuName: "PowerVR",
        cpuTier: 1,
        cpuBrand: "MTK",
        gpuBrand: "PowerVR",
        gpuTier: 1,
        ramAmount: 4,
        ramUnit: "GB",
        ramType: "LPDDR3",
        ishidden: false,
        newegg: "https://www.newegg.com/p/N82E16834847233?Description=chromebook&cm_re=chromebook-_-34-847-233-_-Product",        
        uploadedby: "MASTER"
    },
    {
        name: "ThinkPad P72",
        make: "Lenovo",
        model: "20MB002AUS",
        OEMURL: "https://www.lenovo.com/us/en/about",
        os: "Windows 10",
        msrp: 3449,
        img: "https://c1.neweggimages.com/NeweggImage/ProductImageCompressAll1280/AF0Y_1_20190131202741176.jpg",
        type: "Laptop",
        size: "17.3 Inches",
        cpuName: "Xeon",
        gpuName: "Nvidia Quadro P4200",
        cpuTier: 7,
        cpuBrand: "Intel",
        gpuBrand: "Nvidia",
        gpuTier: 7,
        ramAmount: 16,
        ramUnit: "GB",
        ramType: "DDR4",
        ishidden: false,
        newegg: "https://www.newegg.com/lenovo-thinkpad-p72-20mb002aus-workstation/p/N82E16834847283",        
        uploadedby: "MASTER"
    },
    {
        name: "VivoBook S",
        make: "ASUS",
        model: "S510UN-MS52",
        OEMURL: "https://www.asus.com/us/Laptops/ASUS-VivoBook-S15-S510UN/",
        os: "Windows 10",
        msrp: 999,
        img: "https://c1.neweggimages.com/NeweggImage/ProductImageCompressAll1280/34-235-015-V02.jpg",
        type: "Laptop",
        size: "15.6 Inches",
        cpuName: "Intel Core i5",
        gpuName: "Nvidia GeForce MX150",
        cpuTier: 4,
        cpuBrand: "Intel",
        gpuBrand: "Nvidia",
        gpuTier: 1,
        ramAmount: 8,
        ramUnit: "GB",
        ramType: "DDR4",
        ishidden: false,
        newegg: "https://www.newegg.com/gray-asus-vivobook-s-s510un-ms52-mainstream/p/N82E16834235015",        
        uploadedby: "MASTER"
    },

    {
        name: "Aspire T",
        make: "Acer",
        model: "TC-865-NESelecti3",
        OEMURL: "https://www.acer.com/ac/en/US/content/home",
        os: "Windows 10",
        msrp: 399,
        img: "https://c1.neweggimages.com/NeweggImage/ProductImageCompressAll1280/83-101-686-V01.jpg",
        type: "Desktop",
        size: "N/A",
        cpuName: "Intel Core i3",
        gpuName: "IGPU",
        cpuTier: 3,
        cpuBrand: "Intel",
        gpuBrand: "Intel",
        gpuTier: 0,
        ramAmount: 8,
        ramUnit: "GB",
        ramType: "DDR4",
        ishidden: false,
        newegg: "https://www.newegg.com/acer-aspire-t-tc-865-neselecti3-student-home-office/p/N82E16883101686?Item=N82E16883101686",        
        uploadedby: "MASTER"
    },

    {
        name: "IdeaPad 330",
        make: "Lenovo",
        model: "330",
        OEMURL: "https://www.lenovo.com/us/en/laptops/ideapad/ideapad-300-series/IdeaPad-330-15-Intel/p/88IP3000996",
        os: "Windows 10",
        msrp: 1189,
        img: "https://c1.neweggimages.com/ProductImageCompressAll1280/AA0S_1_20190611492167620.jpg",
        type: "Laptop",
        size: "15.6 Inches",
        cpuName: "Ryzen 7 2700U",
        gpuName: "AMD Radeon RX Vega 10",
        cpuTier: 5,
        cpuBrand: "AMD",
        gpuBrand: "AMD",
        gpuTier: 0,
        ramAmount: 16,
        ramUnit: "GB",
        ramType: "DDR4",
        ishidden: false,
        newegg: "https://www.newegg.com/black-lenovo-ideapad-330-mainstream/p/1TS-000E-0D315?Item=9SIAA0S8U75787",        
        uploadedby: "MASTER"
    },

    {
        name: "Strix SCAR II",
        make: "ASUS ROG",
        model: "GL704GV-DS74",
        OEMURL: "https://www.asus.com/us/",
        os: "Windows 10",
        msrp: 1799,
        img: "https://c1.neweggimages.com/NeweggImage/ProductImageCompressAll1280/34-235-124-V20.jpg",
        type: "Laptop",
        size: "17.3 Inches",
        cpuName: "Intel Core i7",
        gpuName: "Nvidia 1060",
        cpuTier: 5,
        cpuBrand: "Intel",
        gpuBrand: "Nvidia",
        gpuTier: 2,
        ramAmount: 16,
        ramUnit: "GB",
        ramType: "DDR4",
        ishidden: false,
        newegg: "https://www.newegg.com/rog-scar-ii-edition-asus-rog-strix-scar-ii-gl704gv-ds74-gaming-entertainment/p/N82E16834235124?Item=N82E16834235124",        
        uploadedby: "MASTER"
    },
        {
        name: "Surface Pro 6",
        make: "Microsoft",
        model: "LGP-00001",
        OEMURL: "https://www.microsoft.com/en-us/",
        os: "Windows 10",
        msrp: 1029,
        img: "https://c1.neweggimages.com/ProductImageCompressAll1280/A24G_132031927426659467UtdPujqq9s.jpg",
        type: "Tablet",
        size: "12.3 Inches",
        cpuName: "Intel Core i5",
        gpuName: "Intel UHD Graphics",
        cpuTier: 4,
        cpuBrand: "Intel",
        gpuBrand: "Intel",
        gpuTier: 1,
        ramAmount: 8,
        ramUnit: "GB",
        ramType: "DDR4",
        ishidden: false,
        newegg: "https://www.newegg.com/platinum-microsoft-surface-pro-6-lgp-00001/p/N82E16834735828?Description=surface%20pro&cm_re=surface_pro-_-34-735-828-_-Product",        
        uploadedby: "MASTER"
    },
    {
        name: "IdeaPad",
        make: "Lenovo",
        model: "L340",
        OEMURL: "https://www.lenovo.com/us/en/about",
        os: "Windows 10",
        msrp: 699,
        img: "https://c1.neweggimages.com/NeweggImage/ProductImageCompressAll1280/34-845-030-V16.jpg",
        type: "Laptop",
        size: "15.6 Inches",
        cpuName: "Intel Core i5",
        gpuName: "Intel UHD Graphics",
        cpuTier: 4,
        cpuBrand: "Intel",
        gpuBrand: "Intel",
        gpuTier: 1,
        ramAmount: 8,
        ramUnit: "GB",
        ramType: "DDR4",
        ishidden: false,
        newegg: "https://www.newegg.com/platinum-gray-lenovo-ideapad-l340-81lg0011us-mainstream/p/N82E16834845030",        
        uploadedby: "MASTER"
    },
    {
        name: "Macbook Pro with Touch Bar",
        make: "Apple",
        model: "MLVP2LL/A",
        OEMURL: "https://www.apple.com/macbook-pro/specs/",
        os: "Mac OS",
        msrp: 1599,
        img: "https://c1.neweggimages.com/NeweggImage/ProductImageCompressAll1280/34-100-883-S03.jpg",
        type: "Laptop",
        size: "15.6 Inches",
        cpuName: "Intel Core i5",
        gpuName: "Intel Iris Graphics",
        cpuTier: 4,
        cpuBrand: "Intel",
        gpuBrand: "Intel",
        gpuTier: 1,
        ramAmount: 8,
        ramUnit: "GB",
        ramType: "DDR4",
        ishidden: false,
        newegg: "https://www.newegg.com/silver-apple-macbook-pro-with-touch-bar-mlvp2ll-a-mainstream/p/N82E16834100883",        
        uploadedby: "MASTER"
    },
    {
        name: "Stream 11 Pro G4",
        make: "HP",
        model: "EE 2UL97UT#ABA",
        OEMURL: "https://www8.hp.com/us/en/home.html",
        os: "Windows 10",
        msrp: 234,
        img: "https://c1.neweggimages.com/NeweggImage/ProductImageCompressAll1280/A19P_1_20190417985913253.jpg",
        type: "Laptop",
        size: "11.6 Inches",
        cpuName: "Intel Celeron",
        gpuName: "Intel HD Graphics",
        cpuTier: 1,
        cpuBrand: "Intel",
        gpuBrand: "Intel",
        gpuTier: 1,
        ramAmount: 4,
        ramUnit: "GB",
        ramType: "DDR4",
        ishidden: false,
        newegg: "https://www.newegg.com/p/0N6-00ZF-001R4",        
        uploadedby: "MASTER"
    },
    {
        name: "Buisness Desktop ProDesk 600",
        make: "HP",
        model: "4HY04UT#ABA",
        OEMURL: "https://www8.hp.com/us/en/home.html",
        os: "Windows 10",
        msrp: 899,
        img: "https://c1.neweggimages.com/NeweggImage/ProductImageCompressAll1280/A24G_1_201808041036717859.jpg",
        type: "Desktop",
        size: "N/A",
        cpuName: "Intel Core i7",
        gpuName: "Intel UHD Graphics",
        cpuTier: 5,
        cpuBrand: "Intel",
        gpuBrand: "Intel",
        gpuTier: 1,
        ramAmount: 8,
        ramUnit: "GB",
        ramType: "DDR4",
        ishidden: false,
        newegg: "https://www.newegg.com/hp-prodesk-600-g4-business-desktops-workstations/p/1VK-001E-11DB9?Item=1VK-001E-11DB9",        
        uploadedby: "MASTER"
    },
        {
        name: "Inspiron",
        make: "Dell",
        model: "I5676-A702BLU-PUS",
        OEMURL: "https://www.dell.com/en-us",
        os: "Windows 10",
        msrp: 999,
        img: "https://c1.neweggimages.com/ProductImageCompressAll1280/A8X5_131749366670325878phFUUngeDR.jpg",
        type: "Desktop",
        size: "N/A",
        cpuName: "AMD Ryzen 7",
        gpuName: "AMD Radeon RX 580",
        cpuTier: 5,
        cpuBrand: "AMD",
        gpuBrand: "AMD",
        gpuTier: 5,
        ramAmount: 16,
        ramUnit: "GB",
        ramType: "DDR4",
        ishidden: false,
        newegg: "https://www.newegg.com/p/1VK-0001-1GEY7",        
        uploadedby: "MASTER"
        },
        {
        name: "Alienware",
        make: "Dell",
        model: "Tobii Eye-tracking Gaming Laptop",
        OEMURL: "https://www.dell.com/en-us/gaming/alienware",
        os: "Windows 10",
        msrp: 2459,
        img: "https://c1.neweggimages.com/NeweggImage/ProductImageCompressAll1280/AEYJ_132014109476933745yj3qmNbdsX.jpg",
        type: "Laptop",
        size: "17.3 Inches",
        cpuName: "Intel Core i7",
        gpuName: "GeForce GTX 1070",
        cpuTier: 5,
        cpuBrand: "Intel",
        gpuBrand: "Nvidia",
        gpuTier: 3,
        ramAmount: 16,
        ramUnit: "GB",
        ramType: "DDR4",
        ishidden: false,
        newegg: "https://www.newegg.com/p/2WC-0009-003G0?Description=Alienware&cm_re=Alienware-_-2WC-0009-003G0-_-Product",        
        uploadedby: "MASTER"
    },



    
]

const favorites = [
    {
        userId: 2,
        computerId: 1
    }
]

const recommendations = [
    {
        userId: 2,
        computerId: 1
    }
]

const reviews = [
    {
        content: "It's a computer",
        userId: 2,
        computerId: 1
    }
]

const specs = [
    {
        cpuName: "Intel core i7",
        cpuTier: 5,
        gpuName: "Nvidia RTX 2080",
        gpuTier: 6,
        ramSize: 8,
        ramUnit: "GB",
        cpuBrand: "Intel",
        userId: 1
    }
]
// let special =     {
//     name: "Strix SCAR II",
//     make: "ASUS ROG",
//     model: "GL704GV-DS74",
//     OEMURL: "https://rog.asus.com/",
//     os: "Windows 10",
//     msrp: 1799,
//     img: "https://c1.neweggimages.com/NeweggImage/ProductImageCompressAll1280/34-235-124-V20.jpg",
//     type: "Laptop",
//     size: "17.3 Inches",
//     cpuName: "Intel Core i7",
//     gpuName: "Nvidia 1060",
//     cpuTier: 5,
//     cpuBrand: "Intel",
//     gpuBrand: "Nvidia",
//     gpuTier: 2,
//     ramAmount: 16,
//     ramUnit: "GB",
//     ramType: "DDR4",
//     ishidden: false,
//     newegg: "https://www.newegg.com/rog-scar-ii-edition-asus-rog-strix-scar-ii-gl704gv-ds74-gaming-entertainment/p/N82E16834235124?Item=N82E16834235124",        
//     uploadedby: "MASTER"
// }

// Computer.create(special)

users.forEach(user=> User.create(user))
computers.forEach(computer=> Computer.create(computer))
favorites.forEach(favorite=> Favorite.create(favorite))
recommendations.forEach(recommendation => Recommendation.create(recommendation))
reviews.forEach(review=> Review.create(review))
specs.forEach(spec=> Spec.create(spec))




// Computer seed Format

// {
//     name: "",
//     make: "",
//     model: "",
//     OEMURL: "",
//     os: "",
//     msrp: ,
//     img: "",
//     type: "",
//     size: "",
//     cpuName: "",
//     gpuName: "",
//     cpuTier: ,
//     cpuBrand: "",
//     gpuBrand: "",
//     gpuTier: ,
//     ramAmount: ,
//     ramUnit: "",
//     ramType: "",
//     ishidden: false,
//     newegg: "",        
//     uploadedby: "MASTER"
// },
