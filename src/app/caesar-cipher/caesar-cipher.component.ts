import { Component } from '@angular/core';

@Component({
  selector: 'app-caesar-cipher',
  templateUrl: './caesar-cipher.component.html',
  styleUrl: './caesar-cipher.component.css'
})
export class CaesarCipherComponent {
  plaintext: string = '';
  shift: number = 0;
  ciphertext: string = '';
  decrypttext: string ='';

  constructor() { }

  caesarEncrypt(): void {
    this.ciphertext = this.encryptCaesar(this.plaintext, this.shift);
  }

  caesarDecrypt(): void {
    this.decrypttext = this.decryptCaesar(this.ciphertext, this.shift);
  }

  // Function to encrypt using Caesar Cipher
  encryptCaesar(plaintext: string, shift: number): string {
    let result = '';
    for (let i = 0; i < plaintext.length; i++) {
      let charCode = plaintext.charCodeAt(i);
      if (charCode >= 65 && charCode <= 90) { // Uppercase letters
        result += String.fromCharCode(((charCode - 65 + shift) % 26) + 65);
      } else if (charCode >= 97 && charCode <= 122) { // Lowercase letters
        result += String.fromCharCode(((charCode - 97 + shift) % 26) + 97);
      } else { // Non-alphabetic characters
        result += plaintext[i];
      }
    }
    return result;
  }

  // Function to decrypt using Caesar Cipher
  decryptCaesar(ciphertext: string, shift: number): string {
    return this.encryptCaesar(ciphertext, 26 - shift); // Decryption is the same as encryption with shift replaced by 26 - shift
  }

   // Quiz for Caesar Cipher
   caesarQ1Answer: boolean | null = null;
   caesarQ2Answer: boolean | null = null;
   caesarQ3Answer: boolean | null = null;
   caesarQ4Answer: boolean | null = null;
   caesarQ5Answer: boolean | null = null;
   caesarQ6Answer: boolean | null = null;
   
   // Add more variables for other questions if needed
 
   // Check Quiz for Caesar Cipher
   caesarQuizResult1: string | null = null;
   caesarQuizResult2: string | null = null;
   caesarQuizResult3: string | null = null;
   caesarQuizResult4: string | null = null;
   caesarQuizResult5: string | null = null;
   caesarQuizResult6: string | null = null;
   checkCaesarQuiz(): void {
     if (this.caesarQ1Answer === true) {
       this.caesarQuizResult1 = 'Correct';
     } else {
       this.caesarQuizResult1= 'Incorrect';
     }
     if (this.caesarQ2Answer === true) {
      this.caesarQuizResult2 = 'Correct';
    } else {
      this.caesarQuizResult2 = 'Incorrect';
    }
    if (this.caesarQ3Answer === true) {
      this.caesarQuizResult3 = 'Correct';
    } else {
      this.caesarQuizResult3 = 'Incorrect';
    }
    if (this.caesarQ4Answer === false) {
      this.caesarQuizResult4 = 'Correct';
    } else {
      this.caesarQuizResult4 = 'Incorrect';
    }
    if (this.caesarQ5Answer === true) {
      this.caesarQuizResult5 = 'Correct';
    } else {
      this.caesarQuizResult5 = 'Incorrect';
    }
    if (this.caesarQ6Answer === true) {
      this.caesarQuizResult6 = 'Correct';
    } else {
      this.caesarQuizResult6 = 'Incorrect';
    }
     
     // Add more checks for other questions if needed
   }
}
