let strToNum = "123"-25;
console.log(strToNum); 
// string agar number ke saath add hoga to wo concatenate ho jayega
// but agar string ko number ke saath subtract, multiply ya divide karenge to wo string ko number me convert kar dega
// yehi cheez hum implicit type conversion kehte hain
//agar hum string ko number me convert karna chahte hain to hum unary + operator ka use kar sakte hain
//agar string me alphabets hain to wo NaN return karega
//integer ke saath agar =/- true ya false hoga to true ko 1 aur false ko 0 maanega aur calculate karega
//agar string me number aur alphabets dono hain to wo string ko number me convert nahi karega aur NaN return karega
// agar string me true ya false hain to wo string ko number me convert nahi karega aur NaN return karega
// agar string me space hain to wo string ko number me convert kar dega aur space ko ignore kar dega
// agar string me sirf space hain to wo string ko number me convert kar dega aur 0 return karega
// agar string empty hain to wo string ko number me convert kar dega aur 0 return karega
// null ko agar number ke saath add karenge to wo 0 maanega aur calculate karega
// undefined ko agar number ke saath add karenge to wo NaN return karega