<template>
    <ParentLayout>
        <template #page-bottom>
            <div> Apache License 2.0 | Copyright © 2022 by xueliang.wu <a href="https://beian.miit.gov.cn/" target="_blank">苏ICP备15016087号</a>
            </div>
        </template>
    </ParentLayout>
</template>
  
<script>
import ParentLayout from '@parent-theme/layouts/Layout.vue'

export default {
    name: 'Layout',

    components: {
        ParentLayout
    }
}
</script>