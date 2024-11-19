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
import Category from 'src/models/orm-api/Category'

export default {
    name: 'Category-list',
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
            return Category
        },
    },
    methods: {
        openRecord(pVal, item, router) {
            router.push({
                name: '/lists/categories/:rId/:rName',
                params: {
                    rId: pVal,
                    rName: pVal,
                },
            })
        },
    },
}
</script>