<template>

    <div>
        <brandList
            :parentKeyValuePair="parentKeyValuePair"
            :fetchFlags="fetchFlags"
        />
    </div>
</template>

<script>
import brandList from 'src/views/lists/brands/BrandList.vue'

export default {
    name: 'Brand-list-controller',
    components: {
        brandList,
    },

    data() {
        return {
            parentKeyValuePair: {},
            fetchFlags: {}
        }
    },
}
</script>