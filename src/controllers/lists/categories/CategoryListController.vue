<template>

    <div>
        <categoryList
            :parentKeyValuePair="parentKeyValuePair"
            :fetchFlags="fetchFlags"
        />
    </div>
</template>

<script>
import categoryList from 'src/views/lists/categories/CategoryList.vue'

export default {
    name: 'Category-list-controller',
    components: {
        categoryList,
    },

    data() {
        return {
            parentKeyValuePair: {},
            fetchFlags: {}
        }
    },
}
</script>