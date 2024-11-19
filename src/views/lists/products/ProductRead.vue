<template>
    <SuperRecord
        :model="superRecordModel"
        :id="+$route.params.rId"
        :displayMapField="true"
        @initialLoadHappened="$emit('initialLoadHappened')"
    >
    </SuperRecord>
</template>

<script>
import { SuperRecord } from 'wizweb-fe'
import Product from 'src/models/orm-api/Product'

export default {
    name: 'Product-read',
    components: { SuperRecord },
    computed: {
        superRecordModel() {
            return Product
        },
    },
}
</script>

<style scoped></style>