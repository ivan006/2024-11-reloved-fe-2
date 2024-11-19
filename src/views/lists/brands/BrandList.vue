<template>
    <SuperTable
        :showMap="true"
        :model="superTableModel"
        @clickRow="openRecord"
        :displayMapField="false"
        :parentKeyValuePair="parentKeyValuePair"
        :fetchFlags="fetchFlags"
        :noBorder="noBorder"
    />
</template>

<script>
import { SuperTable } from 'wizweb-fe'
import Brand from 'src/models/orm-api/Brand'

export default {
    name: 'Brand-list',
    components: {
        SuperTable,
    },

    props: {
        noBorder: {
          type: Boolean,
          default: () => {
            return false
          }
        },
        parentKeyValuePair: {
            type: Object,
            default: () => ({})
        },
        fetchFlags: {
            type: Object,
            default: () => ({})
        }
    },

    computed: {
        superTableModel() {
            return Brand
        },
    },
    methods: {
        openRecord(pVal, item, router) {
            router.push({
                name: '/lists/brands/:rId/:rName',
                params: {
                    rId: pVal,
                    rName: pVal,
                },
            })
        },
    },
}
</script>