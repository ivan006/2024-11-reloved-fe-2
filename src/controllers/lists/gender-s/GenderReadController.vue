<template>

    <div>
        <q-card class="q-mb-md">
            <genderRead :id="id" />
        </q-card>
    </div>
</template>

<script>
import genderRead from 'src/views/lists/gender-s/GenderRead.vue'

export default {
    name: 'Gender-read-controller',
    components: {
        genderRead,
    },

    data() {
        return {
            id: +this.$route.params.rId
        }
    },
}
</script>