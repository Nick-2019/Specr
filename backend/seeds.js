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
Computer.hasMany(Recommendation, {as: 'recommendation', foreignKey:'computerId', onDelete: 'cascade', hooks: true})



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
        name: "Macbook Pro 2019",
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
        cpuBrand: "Intel",
        gpuBrand: "Nvidia",
        gpuTier: 6,
        ramAmount: 16,
        ramUnit: "GB",
        ramType: "DDR4",
        ishidden: false,
        newegg: "https://www.newegg.com/cyberpowerpc-gamer-supreme-slc9080cpg/p/N82E16883230391",        
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

users.forEach(user=> User.create(user))
computers.forEach(computer=> Computer.create(computer))
favorites.forEach(favorite=> Favorite.create(favorite))
recommendations.forEach(recommendation => Recommendation.create(recommendation))
reviews.forEach(review=> Review.create(review))
specs.forEach(spec=> Spec.create(spec))
