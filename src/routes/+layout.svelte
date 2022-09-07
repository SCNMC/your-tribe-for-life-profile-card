<script>
    import "./../styles/reset.css";
  </script>
  
  <div class="flex-layout">
    <slot></slot>
    <p class="footer">© Shauri Maigua, 1998</p>
  </div>
  
  <style>
    .footer {
      margin: 3rem 0;
      text-align: center;
    }
  
    .flex-layout {
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
  </style>