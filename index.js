const readLineSync = require('readline-sync');

const userResponse = parseInt(readLineSync.question('Welcome to Binary/Decimal/Hex/Octal Converter. Which conversion would you like to use?\n1. binaryToDecimal\n2. binaryToHex\n3. binaryToOctal\n4. decimalToBinary\n5. decimalToHex\n6. decimalToOctal\n7. hexToDecimal\n8. hexToOctal\n9. hexToBinary\n10. octalToDecimal\n11. octalToHex\n12. octalToBinary\n'));

console.log(`You selected ${userResponse}`);

function binaryToDecimal(input)//1
{
   return parseInt(input,2);
}

function binaryToHex(input)//2
{
   let decimal = parseInt(input,2);
   return decimal.toString(16);
}

function binaryToOctal(input)//3
{
   let decimal = parseInt(input,2);
   return decimal.toString(8);
}

function decimalToBinary(input)//4
{
   return input.toString(2);
}

function decimalToHex(input)//5
{
   return input.toString(16);
}

function decimalToOctal(input)//6
{
   return input.toString(8);
}

function hexToDecimal(input)//7
{
   return parseInt(input,16);
}

function hexToOctal(input)//8
{
   let decimal = parseInt(input,16);
   return decimal.toString(8);
}

function hexToBinary(input)//9
{
   let decimal = parseInt(input,16);
   return decimal.toString(2);
}

function octalToDecimal(input)//10
{
   return parseInt(input,8);
}

function octalToHex(input)//11
{
   let decimal = parseInt(input,8);
   return decimal.toString(16);
}

function octalToBinary(input)//12
{
   let decimal = parseInt(input,8);
   return decimal.toString(2);
}

switch(userResponse)
{
   case 1:
   const input1 = readLineSync.question('Please enter your input in binary\n');
   console.log(binaryToDecimal(input1));
   break;

   case 2:
   const input2 = readLineSync.question('Please enter your input in binary\n');
   console.log(binaryToHex(input2));
   break;

   case 3:
   const input3 = readLineSync.question('Please enter your input in binary\n');
   console.log(binaryToOctal(input3));
   break;

   case 4:
   const input4 = parseInt(readLineSync.question('Please enter your input in decimal\n'));
   console.log(decimalToBinary(input4));
   break;

   case 5:
   const input5 = parseInt(readLineSync.question('Please enter your input in decimal\n'));
   console.log(decimalToHex(input5));
   break;

   case 6:
   const input6 = parseInt(readLineSync.question('Please enter your input in decimal\n'));
   console.log(decimalToOctal(input6));
   break;

   case 7:
   const input7 = readLineSync.question('Please enter your input in hex\n');
   console.log(hexToDecimal(input7));
   break;

   case 8:
   const input8 = readLineSync.question('Please enter your input in hex\n');
   console.log(hexToOctal(input8));
   break;

   case 9:
   const input9 = readLineSync.question('Please enter your input in hex\n');
   console.log(hexToBinary(input9));
   break;

   case 10:
   const input10 = readLineSync.question('Please enter your input in octal\n');
   console.log(octalToDecimal(input10));
   break;

   case 11:
   const input11 = readLineSync.question('Please enter your input in octal\n');
   console.log(octalToHex(input11));
   break;

   case 12:
   const input12 = readLineSync.question('Please enter your input in octal\n');
   console.log(octalToBinary(input12));
   break;

   default:
   console.log('Invalid Option');
   break;
}