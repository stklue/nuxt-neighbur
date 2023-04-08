<script lang="ts" setup>
import { MarkerOptions } from 'mapbox-gl';
import { ref, watch } from 'vue';
import { defineMapboxMarker } from '#imports';

const props = defineProps<{ markerId: string, options: MarkerOptions }>()
const markerRef = ref<HTMLElement | null>(null)


const marker = defineMapboxMarker(props.markerId, props.options, markerRef, (m) => {
    m.setLngLat([110, 6])
})
</script>



<template>
    <div ref="markerRef" class="marker" style="
              backgroundImage: url(https://placekitten.com/g/40/40/);
              width: 40px;
              height: 40px;
              backgroundSize: 100%;
            " />
</template>