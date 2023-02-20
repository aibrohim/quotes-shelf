<template>
  <div class="lds-dual-ring mx-auto my-2"></div>
</template>

<style>
.lds-dual-ring {
  display: block;
  width: 80px;
  height: 80px;
}
.lds-dual-ring:after {
  content: " ";
  display: block;
  width: 64px;
  height: 64px;
  margin: 8px;
  border-radius: 50%;
  border: 6px solid rgb(6, 176, 0);
  border-color: rgb(6, 176, 0) transparent rgb(6, 176, 0) transparent;
  animation: lds-dual-ring 1.2s linear infinite;
}
@keyframes lds-dual-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
