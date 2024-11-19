<template>

    <div>
        <q-card class="q-mb-md">
            <productRead :id="id" />
        </q-card>
    </div>
</template>

<script>
import productRead from 'src/views/lists/products/ProductRead.vue'

export default {
    name: 'Product-read-controller',
    components: {
        productRead,
    },

    data() {
        return {
            id: +this.$route.params.rId
        }
    },
}
</script>