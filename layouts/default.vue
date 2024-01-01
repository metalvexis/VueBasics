<template>
  <RootContainer>
    <BasicHeader />
    <slot />
    <SpeedInsights />
  </RootContainer>
</template>

<script setup>
import { SpeedInsights } from '@vercel/speed-insights/vue';

</script>