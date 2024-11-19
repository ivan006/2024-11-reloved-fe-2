<template>

    <div>
        <q-card class="q-mb-md">
            <brandRead :id="id" />
        </q-card>
    </div>
</template>

<script>
import brandRead from 'src/views/lists/brands/BrandRead.vue'

export default {
    name: 'Brand-read-controller',
    components: {
        brandRead,
    },

    data() {
        return {
            id: +this.$route.params.rId
        }
    },
}
</script>