// Name: Abdullah LAtif 
//Roll No: Bitf24A022
 

//Task 1

function addition (a,b){
    return a+b;
}

// Task 2

function bitwiseAND (a,b) {
    return a & b;
}
function bitwiseOR (a,b){
    return a | b; 
}
function bitwiseXOR (a,b){
    return a^b;
}

// Task 3

function addUp(a) {
    if(a<1) return 0;
    return (a*(a+1)/2); 
}
// Task 4

function progressBar(a){
    const filledCount = Math.max(0, Math.min(10, Math.floor(a/10)));
    const emptyCount = 10 - filledCount;
    return "#".repeat(filledCount)+"-".repeat(emptyCount);

}

// Task 5

function minMax(arr){
    if(!arr || arr.length ===0) return [];
    return [Math.min(...arr), Math.max(...arr)];

}

// Task 6
function CalculateRepoStats(repos){
    if(!repo || repos.length === 0) {
        return { maxStars: 0 , minStars: 0, avgStars: 0, varianceScore: 0};
        const stars = repos.map(repo=> repo.stars)
        const maxStars = Math.max(...stars);
        const minStars = Math.min(...stars);
        const sumStars = stars.reduce((total, starCount) => total + starCount,0);
        const avgStars = Math.floor(sumStars/stars.length);
        const varianceScore = Math.abs(maxStars-minStars);
        return{
            maxStars,
            minStars,
            avgStars,
            varianceScore

        };
    }
}

//Task 7

function calculateFinalPrice(basePrice, taxRate, DiscountPercentage){
    const discountedPrice = basePrice * (1 - DiscountPercentage / 100);
    const priceWithTax = discountedPrice * (1 + taxRate / 100);
    const finalPrice = Number(priceWithTax.toFixed(2));
    const loyaltyPoints = Math.ceil(finalPrice);
    return{
        finalPrice,
        loyaltyPoints
    };
}

//Task 8

function PaginateData(items, pageNumber, pageSize = 5){
    const totalItems = items.length;
    const totalPages = Math.ceil(totalItems/ pageSize)||1;
    const startIndex = (pageNumber-1)*pageSize;
    const data = items.slice(startIndex,startIndex + pageSize);
    return{
        data,
        currentPage: pageNumber,
        totalPages, 
        hasNext: pageNumber < totalPages,
        hasPrev: pageNumber > 1

    };

}