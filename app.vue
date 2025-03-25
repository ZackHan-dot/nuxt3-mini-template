<template>
    <div>
        <h1 class="text-3xl font-bold underline">Hello world!</h1>
        <NuxtRouteAnnouncer />
        <NuxtWelcome />
        <el-button @click="ElMessage('hello')">button</el-button>
    </div>
</template>
