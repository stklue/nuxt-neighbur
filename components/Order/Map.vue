<script lang="ts" setup>
const runtimeConfig = useRuntimeConfig();

</script>

<template>
    <MapboxMap :map-id="runtimeConfig.public.mapbox.accessToken">
      <MapboxSource 
        source-id="geojson"
        :source="{
          type: 'geojson',
          data: '/test.geojson'
        }"
          />
          <MapboxLayer
            source-id="geojson"
            :layer="{
              source: 'geojson',
              id: 'geojson-layer',
              type: 'fill'
            }"
          />
        </MapboxMap>
    
</template>