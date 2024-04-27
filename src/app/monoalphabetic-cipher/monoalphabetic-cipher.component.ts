import { Component } from '@angular/core';

@Component({
  selector: 'app-monoalphabetic-cipher',
  templateUrl: './monoalphabetic-cipher.component.html',
  styleUrl: './monoalphabetic-cipher.component.css'
})
export class MonoalphabeticCipherComponent {
  plaintext: string = '';
  key: string = '';
  ciphertext: string = '';
  decrypttext: string ='';

  constructor() { }

  monoalphabeticEncrypt(): void {
    this.ciphertext = this.encryptMonoalphabetic(this.plaintext, this.key);
  }
  
  monoalphabeticDecrypt(): void {
    this.decrypttext = this.decryptMonoalphabetic(this.ciphertext, this.key);
  }

  // Function to encrypt using Monoalphabetic Cipher
  encryptMonoalphabetic(plaintext: string, key: string): string {
    let result = '';
    for (let i = 0; i < plaintext.length; i++) {
      let char = plaintext[i];
      let index = char.charCodeAt(0) - 97;
      if (index >= 0 && index < 26) { // Lowercase letters
        result += key[index];
      } else {
        result += char; // Non-alphabetic characters
      }
    }
    return result;
  }

  // Function to decrypt using Monoalphabetic Cipher
  decryptMonoalphabetic(ciphertext: string, key: string): string {
    let result = '';
    for (let i = 0; i < ciphertext.length; i++) {
      let char = ciphertext[i];
      let index = key.indexOf(char);
      if (index !== -1) {
        result += String.fromCharCode(index + 97);
      } else {
        result += char;
      }
    }
    return result;
  }

  // Quiz for Monoalphabetic Cipher
  monoalphabeticQ1Answer: boolean | null = null;
  monoalphabeticQ2Answer: boolean | null = null;
  monoalphabeticQ3Answer: boolean | null = null;
  monoalphabeticQ4Answer: boolean | null = null;
  monoalphabeticQ5Answer: boolean | null = null;
  monoalphabeticQ6Answer: boolean | null = null;
  // Add more variables for other questions if needed

  // Check Quiz for Monoalphabetic Cipher
  monoalphabeticQuizResult1: string | null = null;
  monoalphabeticQuizResult2: string | null = null;
  monoalphabeticQuizResult3: string | null = null;
  monoalphabeticQuizResult4: string | null = null;
  monoalphabeticQuizResult5: string | null = null;
  monoalphabeticQuizResult6: string | null = null;
  checkMonoalphabeticQuiz(): void {
    if (this.monoalphabeticQ1Answer === true) {
      this.monoalphabeticQuizResult1 = 'Correct';
    } else {
      this.monoalphabeticQuizResult1 = 'Incorrect';
    }
    if (this.monoalphabeticQ2Answer === true) {
      this.monoalphabeticQuizResult2 = 'Correct';
    } else {
      this.monoalphabeticQuizResult2 = 'Incorrect';
    }
    if (this.monoalphabeticQ3Answer === false) {
      this.monoalphabeticQuizResult3 = 'Correct';
    } else {
      this.monoalphabeticQuizResult3 = 'Incorrect';
    }
    if (this.monoalphabeticQ4Answer === false) {
      this.monoalphabeticQuizResult4 = 'Correct';
    } else {
      this.monoalphabeticQuizResult4 = 'Incorrect';
    }
    if (this.monoalphabeticQ5Answer === false) {
      this.monoalphabeticQuizResult5 = 'Correct';
    } else {
      this.monoalphabeticQuizResult5 = 'Incorrect';
    }
    if (this.monoalphabeticQ6Answer === true) {
      this.monoalphabeticQuizResult6 = 'Correct';
    } else {
      this.monoalphabeticQuizResult6 = 'Incorrect';
    }
    // Add more checks for other questions if needed
  }

}
