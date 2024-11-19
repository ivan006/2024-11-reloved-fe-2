<template>

    <div>
        <q-card class="q-mb-md">
            <categoryRead :id="id" />
        </q-card>
    </div>
</template>

<script>
import categoryRead from 'src/views/lists/categories/CategoryRead.vue'

export default {
    name: 'Category-read-controller',
    components: {
        categoryRead,
    },

    data() {
        return {
            id: +this.$route.params.rId
        }
    },
}
</script>