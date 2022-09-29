<template>
  <div class="container">
    <div class="header">
      <!-- !slot ile html bilgisi çekme -->
      <slot name="title" />
    </div>
    <hr />
    <div class="content">
      <slot name="content" />
    </div>
    <hr />
    <!-- * slot u name kullanmadan çağırırsak app.vue içinde çağırılmayan template i kullanır -->
    <slot />
    <slot />
    <div class="footer text-right">
      <button>Kapat</button>
      <button class="green">Kaydet</button>
    </div>
  </div>
</template>
