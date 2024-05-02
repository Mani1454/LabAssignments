<template>
    <div>
      <input type="number" v-model="amount" @input="convertCurrency">
      <select v-model="fromCurrency" @change="convertCurrency">
        <option v-for="(currency, index) in currencies" :key="index" :value="currency">{{ currency }}</option>
      </select>
      <p>Converted Amount: {{ convertedAmount }}</p>
      <select v-model="toCurrency" @change="convertCurrency">
        <option v-for="(currency, index) in currencies" :key="index" :value="currency">{{ currency }}</option>
      </select>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        amount: 0,
        fromCurrency: 'USD',
        toCurrency: 'EUR',
        exchangeRate: {
          USD: {
            EUR: 0.85,
            GBP: 0.75,
            INR: 74.35 // INR exchange rate to USD
          },
          EUR: {
            USD: 1.18,
            GBP: 0.88,
            INR: 88.60 // INR exchange rate to EUR
          },
          GBP: {
            USD: 1.33,
            EUR: 1.14,
            INR: 103.45 // INR exchange rate to GBP
          },
          INR: {
            USD: 0.013,
            EUR: 0.011,
            GBP: 0.010 // GBP exchange rate to INR
          }
        }
      };
    },
    computed: {
      convertedAmount() {
        const rate = this.exchangeRate[this.fromCurrency][this.toCurrency];
        return (this.amount * rate).toFixed(2);
      },
      currencies() {
        return Object.keys(this.exchangeRate);
      }
    },
    methods: {
      convertCurrency() {
        // Conversion logic handled by computed property
      }
    }
  };
  </script>
  
  
  
  
  

  