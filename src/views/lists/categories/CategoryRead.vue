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
import Category from 'src/models/orm-api/Category'

export default {
    name: 'Category-read',
    components: { SuperRecord },
    computed: {
        superRecordModel() {
            return Category
        },
    },
}
</script>

<style scoped></style>