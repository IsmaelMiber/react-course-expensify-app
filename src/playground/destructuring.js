const item = ['Coffee (Hot)', '$2.00', '$2.50', '$2.75'];

const [coffee, ,price] = item;

console.log(
    `A medium ${coffee} costs ${price}`
);