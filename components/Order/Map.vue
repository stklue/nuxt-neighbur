<script lang="ts" setup>
const runtimeConfig = useRuntimeConfig();

// const map = useMapbox(runtimeConfig.public.mapbox.accessToken, (map) => {
//     // Do whatever with map hereconst

// })
const lnglat = [-33.95486788395822, 18.47267602033011]

</script>

<template>
    <div class="flex pt-17">
        <section></section>
        <section class="hidden lg:inline-flex">
            <MapboxMap :map-id=runtimeConfig.public.mapbox.accessToken style="top: 80px" :options="{
                accessToken: runtimeConfig.public.mapbox.accessToken,
                style: 'mapbox://styles/kluedev/clg3btdbm004n01t3g5wk42iw', // style URL
                center: [100.0, 0.5],// starting position [lng, lat]
                zoom: 10, // starting zoom
            }">
                <MapboxSource source-id="geojson" :source="{
                    type: 'geojson',
                    data: '/test.geojson',
                }" />
                <MapboxDefaultPopup popup-id="popup1" :lnglat="[100, 0]" :options="{
                    closeOnClick: false,
                }">
                    <h1 class="test">Hello World!</h1>
                </MapboxDefaultPopup>
                <MapboxDefaultMarker marker-id="marker1" :options="{}" :lnglat="[110, 5]" />
                <OrderMarker marker-id="marker2" :options="{}" />
                <MapboxGeolocateControl />
            </MapboxMap>

        </section>
    </div>
</template>