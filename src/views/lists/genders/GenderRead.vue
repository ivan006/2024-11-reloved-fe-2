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
import Gender from 'src/models/orm-api/Gender'

export default {
    name: 'Gender-read',
    components: { SuperRecord },
    computed: {
        superRecordModel() {
            return Gender
        },
    },
}
</script>

<style scoped></style>