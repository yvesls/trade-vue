<template>
    <div class="navbar">
      <div class="logo">
        <img src="caminho_para_sua_logo.png" alt="Logo">
      </div>
      <div class="menu-toggle" @click="toggleMenu">
        <i class="fas fa-door-open"></i>
      </div>
      <div class="menu-items" :class="{ 'active': menuActive }">
        <button @click="redirectCadastro">Cadastro</button>
        <button @click="redirectDashboard">Dashboard</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        menuActive: false
      }; 
    },
    methods: {
      toggleMenu() {
        this.menuActive = !this.menuActive;
      },
      redirectCadastro() {
        // Lógica para redirecionar para a página de cadastro
      },
      redirectDashboard() {
        // Lógica para redirecionar para a página de dashboard
      }
    }
  };
  </script>
  
  <style>
  /* Estilos para o menu responsivo */
  .navbar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    background-color: #333;
    color: white;
    z-index: 1000; 
  }
  
  .logo img {
    max-width: 100px;
  }
  
  .menu-toggle {
    cursor: pointer;
    display: none;
  }
  
  .menu-items {
    display: flex;
    align-items: center;
  }
  
  .menu-items button {
    margin-left: 10px;
    padding: 8px 15px;
    border: none;
    border-radius: 5px;
    background-color: #5f9ea0;
    color: white;
    cursor: pointer;
    margin-left: 10px;
  }
  
  .menu-items button:hover {
    background-color: #5f9ea0;
  }
  
  /* Estilos para tornar o menu responsivo */
  @media screen and (max-width: 768px) {
    .menu-toggle {
      display: block;
    }
  
    .menu-items {
      display: none;
      flex-direction: column;
      position: absolute;
      top: 50px;
      right: 10px;
      background-color: #333;
      padding: 10px;
    }
  
    .menu-items.active {
      display: flex;
    }
  }
  </style>
  