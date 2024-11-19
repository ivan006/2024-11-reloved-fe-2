<template>

    <div>
        <genderList
            :parentKeyValuePair="parentKeyValuePair"
            :fetchFlags="fetchFlags"
        />
    </div>
</template>

<script>
import genderList from 'src/views/lists/genders/GenderList.vue'

export default {
    name: 'Gender-list-controller',
    components: {
        genderList,
    },

    data() {
        return {
            parentKeyValuePair: {},
            fetchFlags: {}
        }
    },
}
</script>
