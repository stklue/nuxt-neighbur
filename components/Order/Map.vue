<script lang="ts" setup>
const runtimeConfig = useRuntimeConfig();

useMapbox(runtimeConfig.public.mapbox.accessToken, (map) => {
    // Do whatever with map here
})
</script>

<template>
    <div class="pt-16">
        <MapboxMap :map-id="runtimeConfig.public.mapbox.accessToken" :options="{
            accessToken: runtimeConfig.public.mapbox.accessToken,
            style: 'mapbox://styles/kluedev/clg3btdbm004n01t3g5wk42iw', // style URL
            center: [-33.95486788395822, 18.47267602033011], // starting position
            zoom: 5 // starting zoom
        }">
            <MapboxSource source-id="geojson" :source="{
                type: 'geojson',
                data: '/test.geojson'
            }" />
            <MapboxLayer source-id="geojson" :layer="{
                source: 'geojson',
                id: 'geojson-layer',
                type: 'fill'
            }" />
        </MapboxMap>
    </div>
</template>