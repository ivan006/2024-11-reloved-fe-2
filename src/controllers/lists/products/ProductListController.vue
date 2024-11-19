<template>

    <div>
        <productList
            :parentKeyValuePair="parentKeyValuePair"
            :fetchFlags="fetchFlags"
        />
    </div>
</template>

<script>
import productList from 'src/views/lists/products/ProductList.vue'

export default {
    name: 'Product-list-controller',
    components: {
        productList,
    },

    data() {
        return {
            parentKeyValuePair: {},
            fetchFlags: {}
        }
    },
}
</script>