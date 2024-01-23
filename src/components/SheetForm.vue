<template>  
  <div id="app">
    <h1>Enviar arquivo</h1>
    <form @submit.prevent="onSubmit">
      <input type="file" accept=".csv,.xlsx" placeholder="Só aceito arquivos csv ou xlsx" @change="handleFileChange">
      <button type="submit">Enviar</button>
    </form>
  </div>
</template>

<script>
  import { UploadService } from '../services/upload-sheet.service'

  const uploadService = new UploadService()

  export default {
    name: 'App',
    data() {
      return {
        selectedFile: null,
      };
    },
    methods: {
      handleFileChange(event) {
        this.selectedFile = event.target.files[0];
      },
      onSubmit() {
        if (!this.selectedFile) {
          alert('Selecione um arquivo para enviar.');
          return;
        }        
        
        uploadService.upload(this.selectedFile)
      },
    },
  };
</script>
