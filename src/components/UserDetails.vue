<template>
    <div>{{data.name}}</div>
     <div>{{data.email}}</div>
</template>

<script>
export default {
name: 'UserDetails',
props: {
    data: Object
}
}
</script>